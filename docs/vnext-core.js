(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root) root.OsakaVNextCore = api;
})(typeof window !== 'undefined' ? window : globalThis, function () {
  'use strict';

  const DAYS = ['sat', 'sun', 'mon'];
  const DAY_DATES = { sat: '2026-09-05', sun: '2026-09-06', mon: '2026-09-07' };
  const DEADLINES = { sat: 23 * 60, sun: 22 * 60, mon: 15 * 60 };
  const MEAL_SLOTS = {
    breakfast: { label: '아침', start: 7 * 60 + 30, target: 8 * 60 + 30, end: 10 * 60 + 30, order: 0 },
    lunch: { label: '점심', start: 11 * 60, target: 12 * 60, end: 14 * 60, order: 1 },
    snack: { label: '간식', start: 14 * 60, target: 15 * 60 + 30, end: 17 * 60 + 30, order: 2 },
    dinner: { label: '저녁', start: 17 * 60 + 30, target: 18 * 60 + 30, end: 20 * 60 + 30, order: 3 },
    late: { label: '야식', start: 20 * 60 + 30, target: 21 * 60 + 30, end: 23 * 60 + 30, order: 4 }
  };
  const MEAL_SLOT_IDS = Object.keys(MEAL_SLOTS);

  function clone(value) { return JSON.parse(JSON.stringify(value)); }
  function timeToMinutes(value) {
    if (typeof value !== 'string' || !/^\d{2}:\d{2}$/.test(value)) return null;
    const [hour, minute] = value.split(':').map(Number);
    return hour <= 23 && minute <= 59 ? hour * 60 + minute : null;
  }
  function minutesToTime(value) {
    const normalized = ((Math.round(value) % 1440) + 1440) % 1440;
    return `${String(Math.floor(normalized / 60)).padStart(2, '0')}:${String(normalized % 60).padStart(2, '0')}`;
  }
  function parseYen(text) {
    if (typeof text !== 'string' || /상품별|가게별|전시별|선택별|고가|변동|확인/.test(text)) return null;
    const match = text.replace(/,/g, '').match(/¥\s*(\d+)/);
    return match ? Number(match[1]) : null;
  }
  function operationFor(item, data, day) {
    const override = data?.operationOverrides?.[item?.id] || {};
    const event = data?.events?.find(candidate => candidate.id === item?.id);
    const dayTime = event?.dayTimes?.[day];
    return {
      hoursStatus: override.hoursStatus || 'unknown',
      open: dayTime?.open || override.open || event?.start || '',
      close: dayTime?.close || override.close || event?.end || '',
      lastEntry: dayTime?.lastEntry || override.lastEntry || event?.lastEntry || '',
      reservationPolicy: override.reservationPolicy || event?.reservationPolicy || 'unknown',
      official: override.official || event?.official || item?.official || item?.map || '',
      bookingUrl: override.bookingUrl || event?.bookingUrl || '',
      verifiedAt: override.verifiedAt || event?.verifiedAt || '',
      note: override.note || '',
      validDays: event?.validDays || DAYS
    };
  }
  function durationFor(state, day, id, item) {
    return Number(state.itemDurations?.[`${day}:${id}`]) || Number(item?.duration) || 60;
  }
  function transitFor(state, day, fromId, toId, fallback = 30) {
    return Number(state.transit?.[`${day}:${fromId}:${toId}`]) || fallback;
  }
  function scheduleFor(day, state, itemLookup, data, suggestedTransit) {
    const ids = state.plans?.[day] || [];
    let clock = timeToMinutes(state.starts?.[day]) ?? (day === 'sat' ? 1050 : 480);
    const warnings = [];
    const entries = ids.map((id, index) => {
      const item = itemLookup(id) || { id, name: '삭제된 항목', duration: 60 };
      const automaticStart = clock;
      const overrideTime = state.itemStarts?.[`${day}:${id}`];
      const override = timeToMinutes(overrideTime);
      const start = override ?? automaticStart;
      const duration = durationFor(state, day, id, item);
      const end = start + duration;
      const operation = operationFor(item, data, day);
      const reservation = state.reservations?.[id] || { status: 'none', time: '' };
      const itemWarnings = [];
      if (override !== null && override < automaticStart) itemWarnings.push({ level: 'danger', code: 'overlap', text: `앞 일정과 ${automaticStart - override}분 겹침` });
      if (!operation.validDays.includes(day)) itemWarnings.push({ level: 'danger', code: 'wrong-day', text: '이 날짜에는 열리지 않는 행사' });
      if (operation.hoursStatus === 'verified') {
        const open = timeToMinutes(operation.open);
        const close = timeToMinutes(operation.close);
        const lastEntry = timeToMinutes(operation.lastEntry);
        if (open !== null && start < open) itemWarnings.push({ level: 'danger', code: 'before-open', text: `${operation.open} 개장 전 도착` });
        if (lastEntry !== null && start > lastEntry) itemWarnings.push({ level: 'danger', code: 'last-entry', text: `${operation.lastEntry} 입장마감 이후` });
        if (close !== null && end > close) itemWarnings.push({ level: 'danger', code: 'after-close', text: `${operation.close} 종료 뒤까지 체류` });
      } else itemWarnings.push({ level: 'notice', code: 'hours-unknown', text: '영업시간 확인 필요' });
      const bookedTime = timeToMinutes(reservation.time);
      if (reservation.status === 'booked' && bookedTime !== null && Math.abs(start - bookedTime) > 10) {
        itemWarnings.push({ level: 'danger', code: 'booking-time', text: `예약 ${reservation.time}와 시작시각 불일치` });
      }
      if (operation.reservationPolicy === 'required' && reservation.status !== 'booked') itemWarnings.push({ level: 'danger', code: 'reservation', text: '시간 지정 예약 필요' });
      const nextId = ids[index + 1];
      const suggestion = nextId && typeof suggestedTransit === 'function' ? suggestedTransit(id, nextId) : null;
      const transit = nextId ? transitFor(state, day, id, nextId, suggestion?.minutes || 30) : 0;
      const customTransit = nextId ? Number(state.transit?.[`${day}:${id}:${nextId}`]) : 0;
      if (nextId && customTransit && suggestion?.minutes && customTransit < suggestion.minutes) {
        itemWarnings.push({ level: 'danger', code: 'short-transit', text: `이동 ${customTransit}분 설정 · 예상 ${suggestion.minutes}분보다 짧음` });
      }
      clock = end + transit;
      const entry = { id, item, index, start, end, duration, transit, operation, reservation, warnings: itemWarnings };
      warnings.push(...itemWarnings.map(warning => ({ ...warning, id, name: item.name })));
      return entry;
    });
    if (clock > DEADLINES[day]) warnings.push({ level: 'danger', code: 'deadline', text: `${day === 'mon' ? '15:00 공항행 이동' : minutesToTime(DEADLINES[day])} 안전선 ${clock - DEADLINES[day]}분 초과` });
    return { day, entries, start: timeToMinutes(state.starts?.[day]), end: clock, deadline: DEADLINES[day], warnings };
  }
  function directionsUrl(day, state, itemLookup, hotel) {
    const items = (state.plans?.[day] || []).map(itemLookup).filter(item => Array.isArray(item?.coords));
    const hotelQuery = Array.isArray(hotel?.coords) ? hotel.coords.join(',') : hotel?.name || 'Namba Osaka';
    if (!items.length) return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hotelQuery)}`;
    const points = items.slice(0, 9).map(item => item.coords.join(','));
    const destination = day === 'mon' ? 'Kansai International Airport' : hotelQuery;
    const params = new URLSearchParams({ api: '1', origin: hotelQuery, destination, travelmode: 'transit' });
    if (points.length) params.set('waypoints', points.join('|'));
    return `https://www.google.com/maps/dir/?${params}`;
  }

  function cleanCoords(value) {
    if (!Array.isArray(value) || value.length < 2) return null;
    const lat = Number(value[0]);
    const lng = Number(value[1]);
    return Number.isFinite(lat) && Number.isFinite(lng) ? [lat, lng] : null;
  }
  function distanceKm(from, to) {
    const a = cleanCoords(from);
    const b = cleanCoords(to);
    if (!a || !b) return 0;
    const radians = value => value * Math.PI / 180;
    const dLat = radians(b[0] - a[0]);
    const dLng = radians(b[1] - a[1]);
    const lat1 = radians(a[0]);
    const lat2 = radians(b[0]);
    const value = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
    return 6371 * 2 * Math.atan2(Math.sqrt(value), Math.sqrt(1 - value));
  }
  const DISTRICT_LABELS = {
    minami: '미나미권',
    north: '우메다·북부',
    bay: '베이 에어리어',
    east: '오사카성·동부',
    south: '스미요시·남부',
    unknown: '위치 미지정'
  };
  function areaCluster(item) {
    const area = `${item?.area || ''} ${item?.areaLabel || ''}`.toLowerCase();
    if (/(tempozan|bay|universal|taisho|dome|benten|오사카코|덴포잔|베이|유니버설)/.test(area)) return 'bay';
    if (/(umeda|tenma|fukushima|nakanoshima|kitashinchi|우메다|텐마|후쿠시마|나카노시마)/.test(area)) return 'north';
    if (/(castle|kyobashi|temmabashi|morinomiya|오사카성|교바시|모리노미야)/.test(area)) return 'east';
    if (/(sumiyoshi|sakaa?i|kishiwada|스미요시|사카이|기시와다)/.test(area)) return 'south';
    const coords = cleanCoords(item?.coords);
    if (!coords) return area ? 'minami' : 'unknown';
    const [lat, lng] = coords;
    if (lng < 135.465) return 'bay';
    if (lat < 34.632) return 'south';
    if (lat > 34.686 && lng < 135.525) return 'north';
    if (lng > 135.522 && lat > 34.663) return 'east';
    return 'minami';
  }
  function routeClusterStats(ids, itemLookup) {
    const sequence = [];
    ids.forEach(id => {
      const cluster = areaCluster(itemLookup(id));
      if (cluster !== 'unknown' && cluster !== sequence[sequence.length - 1]) sequence.push(cluster);
    });
    const seen = new Set();
    let revisits = 0;
    sequence.forEach(cluster => {
      if (seen.has(cluster)) revisits += 1;
      seen.add(cluster);
    });
    return {
      sequence,
      labels: sequence.map(cluster => DISTRICT_LABELS[cluster] || cluster),
      switches: Math.max(0, sequence.length - 1),
      revisits
    };
  }
  function routeDistance(ids, itemLookup, startCoords, endCoords) {
    let total = 0;
    let current = cleanCoords(startCoords);
    ids.forEach(id => {
      const coords = cleanCoords(itemLookup(id)?.coords);
      if (!coords) return;
      if (current) total += distanceKm(current, coords);
      current = coords;
    });
    const end = cleanCoords(endCoords);
    if (current && end) total += distanceKm(current, end);
    return total;
  }
  function orderRoute(ids, itemLookup, startCoords, endCoords) {
    const unresolved = ids.filter(id => !cleanCoords(itemLookup(id)?.coords)).sort();
    const remaining = ids.filter(id => cleanCoords(itemLookup(id)?.coords));
    const ordered = [];
    let current = cleanCoords(startCoords);
    const end = cleanCoords(endCoords);
    while (remaining.length) {
      remaining.sort((left, right) => {
        const leftCoords = cleanCoords(itemLookup(left)?.coords);
        const rightCoords = cleanCoords(itemLookup(right)?.coords);
        const leftScore = distanceKm(current, leftCoords) + (end ? distanceKm(leftCoords, end) * .16 : 0);
        const rightScore = distanceKm(current, rightCoords) + (end ? distanceKm(rightCoords, end) * .16 : 0);
        return leftScore - rightScore || left.localeCompare(right);
      });
      const next = remaining.shift();
      ordered.push(next);
      current = cleanCoords(itemLookup(next)?.coords) || current;
    }
    if (ordered.length > 3 && ordered.length <= 28) {
      for (let pass = 0; pass < 3; pass += 1) {
        let improved = false;
        const baseline = routeDistance(ordered, itemLookup, startCoords, endCoords);
        for (let from = 0; from < ordered.length - 2; from += 1) {
          for (let to = from + 2; to < ordered.length; to += 1) {
            const candidate = [...ordered.slice(0, from), ...ordered.slice(from, to + 1).reverse(), ...ordered.slice(to + 1)];
            if (routeDistance(candidate, itemLookup, startCoords, endCoords) + .01 < baseline) {
              ordered.splice(0, ordered.length, ...candidate);
              improved = true;
              break;
            }
          }
          if (improved) break;
        }
        if (!improved) break;
      }
    }
    return [...ordered, ...unresolved];
  }

  function mealSlotOptions(item, state = {}) {
    if (item?.category !== 'food') return [];
    const override = state.mealSlots?.[item.id];
    if (MEAL_SLOT_IDS.includes(override)) return [override];
    const group = String(item.group || '').toLowerCase();
    if (group === 'breakfast') return ['breakfast'];
    if (['snack', 'dessert', 'drink'].includes(group)) return ['snack'];
    if (group === 'alcohol') return ['dinner', 'late'];
    if (group === 'ramen') return ['lunch', 'dinner', 'late'];
    return ['lunch', 'dinner'];
  }
  function mealWindow(day, slot, duration = 60, state = {}) {
    const definition = MEAL_SLOTS[slot];
    if (!definition) return null;
    const dayStart = timeToMinutes(state.starts?.[day]) ?? (day === 'sat' ? 1050 : 480);
    const end = Math.min(definition.end, DEADLINES[day]);
    const latestStart = end - Math.max(15, Number(duration) || 60);
    if (latestStart < dayStart || latestStart < definition.start) return null;
    let target = definition.target;
    if (day === 'sat' && slot === 'dinner') target = 18 * 60 + 15;
    if (day === 'sat' && slot === 'late') target = 21 * 60 + 15;
    if (day === 'sun' && slot === 'late') target = 21 * 60;
    if (day === 'mon' && slot === 'lunch') target = 11 * 60 + 30;
    return { ...definition, start: Math.max(definition.start, dayStart), end, latestStart, target: Math.max(dayStart, Math.min(target, latestStart)) };
  }
  function itemTimeWindow(day, item, duration = 60, state = {}) {
    if (!item || item.category === 'food') return null;
    const suggested = item.suggestedStarts?.[day] || item.suggestedStart || '';
    const best = String(item.best || '').trim();
    const dayStart = timeToMinutes(state.starts?.[day]) ?? (day === 'sat' ? 1050 : 480);
    let start = null;
    let target = null;
    let end = null;
    let label = '';
    const suggestedMinutesValue = timeToMinutes(suggested);
    const range = best.match(/(\d{1,2}):(\d{2})\s*[~–-]\s*(\d{1,2}):(\d{2})/);
    const after = best.match(/(\d{1,2}):(\d{2})\s*이후/);
    if (suggestedMinutesValue !== null) {
      start = suggestedMinutesValue;
      target = suggestedMinutesValue;
      end = suggestedMinutesValue + Math.max(90, Number(duration) || 60);
      label = `권장 ${suggested}`;
    } else if (range) {
      start = Number(range[1]) * 60 + Number(range[2]);
      end = Number(range[3]) * 60 + Number(range[4]);
      target = start;
      label = `권장 ${String(range[1]).padStart(2, '0')}:${range[2]}`;
    } else if (/첫\s*입장|이른\s*오전/.test(best)) {
      start = 8 * 60;
      target = 8 * 60 + 30;
      end = 11 * 60 + 30;
      label = '이른 시간 권장';
    } else if (/오전/.test(best) && !/(?:또는|·).*?(?:밤|야간)/.test(best)) {
      start = 8 * 60;
      target = 9 * 60;
      end = 12 * 60;
      label = '오전 권장';
    } else if (after) {
      start = Number(after[1]) * 60 + Number(after[2]);
      target = start;
      end = DEADLINES[day];
      label = `${String(after[1]).padStart(2, '0')}:${after[2]} 이후`;
    } else if (/일몰|해질녘/.test(best)) {
      start = 17 * 60;
      target = 18 * 60;
      end = Math.min(DEADLINES[day], 20 * 60 + 30);
      label = '해질녘 권장';
    } else if (/19:00\s*이후|야간|밤/.test(best)) {
      start = 18 * 60 + 30;
      target = 19 * 60;
      end = DEADLINES[day];
      label = '야간 권장';
    } else return null;
    end = Math.min(end, DEADLINES[day]);
    const latestStart = end - Math.max(15, Number(duration) || 60);
    if (latestStart < dayStart || latestStart < start) return null;
    return { start: Math.max(start, dayStart), target: Math.max(dayStart, Math.min(target, latestStart)), end, latestStart, label };
  }
  function hasItemTimePreference(item) {
    if (!item || item.category === 'food') return false;
    const best = String(item.best || '').trim();
    return Boolean(item.suggestedStart || item.suggestedStarts || /(\d{1,2}:\d{2})|첫\s*입장|이른\s*오전|오전|일몰|해질녘|야간|밤/.test(best));
  }
  function suggestedMinutes(fromId, toId, itemLookup, suggestedTransit, fromCoords = null) {
    if (fromId && toId) return Number(suggestedTransit?.(fromId, toId)?.minutes) || 30;
    const destination = cleanCoords(itemLookup(toId)?.coords);
    const origin = cleanCoords(fromCoords);
    if (!origin || !destination) return 20;
    return Math.max(8, Math.min(75, Math.round(8 + distanceKm(origin, destination) * 4.2)));
  }
  function timedRouteOrder(day, ids, state, itemLookup, startCoords, endCoords, suggestedTransit, durationOverrides, mealAssignments) {
    const anchorIds = ids.filter(id => MEAL_SLOTS[mealAssignments[id]] || itemTimeWindow(day, itemLookup(id), Number(durationOverrides[id]) || Number(itemLookup(id)?.duration) || 60, state));
    const remaining = ids.filter(id => !anchorIds.includes(id));
    const slotCounts = {};
    anchorIds.forEach(id => { const slot = mealAssignments[id]; if (slot) slotCounts[slot] = (slotCounts[slot] || 0) + 1; });
    const slotIndexes = {};
    let anchors = anchorIds.map(id => {
      const slot = mealAssignments[id];
      const duration = Number(durationOverrides[id]) || Number(itemLookup(id)?.duration) || 60;
      const window = slot ? mealWindow(day, slot, duration, state) : itemTimeWindow(day, itemLookup(id), duration, state);
      const index = slot ? slotIndexes[slot] || 0 : 0;
      if (slot) slotIndexes[slot] = index + 1;
      const spread = slot && slotCounts[slot] > 1 ? Math.min(65, Math.max(40, duration)) : 0;
      const target = window ? Math.min(window.latestStart, window.target + index * spread) : DEADLINES[day];
      return { id, slot, duration, window, target };
    }).sort((left, right) => left.target - right.target || (MEAL_SLOTS[left.slot]?.order || 0) - (MEAL_SLOTS[right.slot]?.order || 0) || left.id.localeCompare(right.id));

    const pendingAnchors = [...anchors];
    const prioritizedAnchors = [];
    let priorityClock = timeToMinutes(state.starts?.[day]) ?? (day === 'sat' ? 1050 : 480);
    let priorityId = '';
    let priorityCoords = cleanCoords(startCoords);
    while (pendingAnchors.length) {
      let candidateIndex = 0;
      const candidate = pendingAnchors[0];
      const nextMealIndex = !candidate.slot ? pendingAnchors.findIndex(anchor => anchor.slot && anchor.target >= candidate.target) : -1;
      if (nextMealIndex > 0) {
        const nextMeal = pendingAnchors[nextMealIndex];
        const toCandidate = priorityId ? suggestedMinutes(priorityId, candidate.id, itemLookup, suggestedTransit, priorityCoords) : 0;
        const candidateStart = Math.max(priorityClock + toCandidate, candidate.target);
        const toMeal = suggestedMinutes(candidate.id, nextMeal.id, itemLookup, suggestedTransit, itemLookup(candidate.id)?.coords);
        if (candidateStart + candidate.duration + toMeal > nextMeal.window.latestStart) candidateIndex = nextMealIndex;
      }
      const selected = pendingAnchors.splice(candidateIndex, 1)[0];
      if (priorityId) priorityClock += suggestedMinutes(priorityId, selected.id, itemLookup, suggestedTransit, priorityCoords);
      priorityClock = Math.max(priorityClock, selected.target) + selected.duration;
      priorityId = selected.id;
      priorityCoords = cleanCoords(itemLookup(selected.id)?.coords) || priorityCoords;
      prioritizedAnchors.push(selected);
    }
    anchors = prioritizedAnchors;

    const ordered = [];
    const anchorTargets = {};
    let currentId = '';
    let currentCoords = cleanCoords(startCoords);
    let clock = timeToMinutes(state.starts?.[day]) ?? (day === 'sat' ? 1050 : 480);
    anchors.forEach(anchor => {
      while (remaining.length) {
        const candidates = remaining.map(id => {
          const item = itemLookup(id);
          const duration = Number(durationOverrides[id]) || durationFor(state, day, id, item);
          const toCandidate = suggestedMinutes(currentId, id, itemLookup, suggestedTransit, currentCoords);
          const toMeal = suggestedMinutes(id, anchor.id, itemLookup, suggestedTransit, item?.coords);
          const fits = clock + (currentId ? toCandidate : 0) + duration + toMeal <= anchor.target;
          const coords = cleanCoords(item?.coords);
          const anchorCoords = cleanCoords(itemLookup(anchor.id)?.coords);
          const detour = distanceKm(currentCoords, coords) + distanceKm(coords, anchorCoords) - distanceKm(currentCoords, anchorCoords);
          return { id, duration, toCandidate, fits, detour };
        }).filter(candidate => candidate.fits).sort((left, right) => left.detour - right.detour || left.toCandidate - right.toCandidate || left.id.localeCompare(right.id));
        if (!candidates.length) break;
        const next = candidates[0];
        if (currentId) clock += next.toCandidate;
        clock += next.duration;
        ordered.push(next.id);
        remaining.splice(remaining.indexOf(next.id), 1);
        currentId = next.id;
        currentCoords = cleanCoords(itemLookup(next.id)?.coords) || currentCoords;
      }
      if (currentId) clock += suggestedMinutes(currentId, anchor.id, itemLookup, suggestedTransit, currentCoords);
      clock = Math.max(clock, anchor.target);
      anchorTargets[anchor.id] = anchor.target;
      ordered.push(anchor.id);
      clock += anchor.duration;
      currentId = anchor.id;
      currentCoords = cleanCoords(itemLookup(anchor.id)?.coords) || currentCoords;
    });
    ordered.push(...orderRoute(remaining, itemLookup, currentCoords, endCoords));
    return { ordered, anchorTargets };
  }
  function mustRouteMetrics(day, ids, state, itemLookup, hotel, suggestedTransit, durationOverrides = {}, mealAssignments = {}) {
    const namba = cleanCoords(hotel?.coords) || [34.6656, 135.5012];
    const kix = [34.4347, 135.2441];
    const endCoords = day === 'mon' ? kix : namba;
    const timed = timedRouteOrder(day, ids, state, itemLookup, namba, endCoords, suggestedTransit, durationOverrides, mealAssignments);
    const ordered = timed.ordered;
    const start = timeToMinutes(state.starts?.[day]) ?? (day === 'sat' ? 1050 : 480);
    let clock = start;
    let transitMinutes = 0;
    let visitMinutes = 0;
    const entries = ordered.map((id, index) => {
      const item = itemLookup(id);
      const duration = Number(durationOverrides[id]) || durationFor(state, day, id, item);
      if (index) {
        const previousId = ordered[index - 1];
        const inbound = Number(suggestedTransit?.(previousId, id)?.minutes) || 30;
        transitMinutes += inbound;
        clock += inbound;
      }
      const mealSlot = mealAssignments[id] || '';
      const timingWindow = mealSlot ? mealWindow(day, mealSlot, duration, state) : itemTimeWindow(day, item, duration, state);
      if (timingWindow) clock = Math.max(clock, timed.anchorTargets[id] || timingWindow.target || clock);
      const entryStart = clock;
      visitMinutes += duration;
      clock += duration;
      const nextId = ordered[index + 1];
      const transit = nextId ? Number(suggestedTransit?.(id, nextId)?.minutes) || 30 : 0;
      return { id, start: entryStart, end: entryStart + duration, duration, transit, mealSlot, mealLabel: MEAL_SLOTS[mealSlot]?.label || '', timingLabel: mealSlot ? '' : timingWindow?.label || '' };
    });
    const pathDistanceKm = routeDistance(ordered, itemLookup, namba, endCoords);
    const mealCoverage = MEAL_SLOT_IDS.map(slot => ({ slot, label: MEAL_SLOTS[slot].label, ids: ordered.filter(id => mealAssignments[id] === slot) }))
      .filter(entry => mealWindow(day, entry.slot, 45, state));
    const mealWarnings = entries.filter(entry => {
      if (!entry.mealSlot) return false;
      const window = mealWindow(day, entry.mealSlot, entry.duration, state);
      return !window || entry.start > window.latestStart;
    }).map(entry => ({ id: entry.id, slot: entry.mealSlot, text: `${entry.mealLabel} 시간대 초과` }));
    const timeWarnings = entries.filter(entry => {
      if (entry.mealSlot) return false;
      const window = itemTimeWindow(day, itemLookup(entry.id), entry.duration, state);
      return window && entry.start > window.latestStart;
    }).map(entry => ({ id: entry.id, text: `${entry.timingLabel || '권장 시간'} 초과` }));
    const clusters = routeClusterStats(ordered, itemLookup);
    return {
      day,
      ids: ordered,
      entries,
      start,
      end: clock,
      visitMinutes,
      transitMinutes,
      distanceKm: ordered.length ? pathDistanceKm : 0,
      pathDistanceKm,
      overflowMinutes: Math.max(0, clock - DEADLINES[day]),
      mealCoverage,
      mealWarnings,
      timeWarnings,
      districtClusters: clusters.sequence,
      districtLabels: clusters.labels,
      districtSwitches: clusters.switches,
      districtRevisits: clusters.revisits
    };
  }
  function metricCost(metric) {
    const capacity = Math.max(1, DEADLINES[metric.day] - metric.start);
    const utilization = Math.max(0, metric.end - metric.start) / capacity;
    return metric.overflowMinutes * 1000
      + metric.mealWarnings.length * 700
      + metric.timeWarnings.length * 260
      + metric.pathDistanceKm * 8
      + metric.districtSwitches * 95
      + metric.districtRevisits * 260
      + utilization * utilization * 28;
  }
  function buildMustRoute(state, itemLookup, data, hotel, suggestedTransit, routeOptions = {}) {
    const wishlist = new Set(Array.isArray(state.wishlist) ? state.wishlist : []);
    const sourceIds = [...new Set(Array.isArray(state.mustVisit) ? state.mustVisit : [])].filter(id => wishlist.has(id));
    const requiredSet = new Set(sourceIds);
    const dayIds = { sat: [], sun: [], mon: [] };
    const unplaced = [];
    const durationOverrides = {};
    const mealAssignments = {};
    const suggestionSources = {};
    const slotLoads = Object.fromEntries(DAYS.map(day => [day, Object.fromEntries(MEAL_SLOT_IDS.map(slot => [slot, 0]))]));
    const entries = sourceIds.map(id => {
      const item = itemLookup(id);
      if (!item) { unplaced.push({ id, reason: '장소 정보 없음' }); return null; }
      const existingDay = DAYS.find(day => state.plans?.[day]?.includes(id)) || '';
      const itemDays = Array.isArray(item.validDays) ? item.validDays : DAYS;
      let eligibleDays = DAYS.filter(day => itemDays.includes(day) && operationFor(item, data, day).validDays.includes(day));
      if (state.reservations?.[id]?.status === 'booked' && existingDay && eligibleDays.includes(existingDay)) eligibleDays = [existingDay];
      if (!eligibleDays.length) { unplaced.push({ id, reason: '여행 날짜에 이용 불가' }); return null; }
      const durations = DAYS.map(day => Number(state.itemDurations?.[`${day}:${id}`])).filter(value => Number.isFinite(value) && value >= 15);
      const duration = durations[0] || Number(item.duration) || 60;
      durationOverrides[id] = duration;
      const slotsByDay = {};
      let timeSensitive = false;
      if (item.category === 'food') {
        const options = mealSlotOptions(item, state);
        eligibleDays = eligibleDays.filter(day => {
          slotsByDay[day] = options.filter(slot => mealWindow(day, slot, duration, state));
          return slotsByDay[day].length;
        });
        if (!eligibleDays.length) { unplaced.push({ id, reason: '선택한 식사 시간대를 여행 시간 안에 넣을 수 없음' }); return null; }
      } else if (hasItemTimePreference(item)) {
        timeSensitive = true;
        eligibleDays = eligibleDays.filter(day => itemTimeWindow(day, item, duration, state));
        if (!eligibleDays.length) { unplaced.push({ id, reason: '권장 방문 시간대를 여행 시간 안에 넣을 수 없음' }); return null; }
      }
      return { id, item, existingDay, eligibleDays, duration, slotsByDay, timeSensitive };
    }).filter(Boolean).sort((left, right) => Number(right.item.category === 'food') - Number(left.item.category === 'food') || Number(right.timeSensitive) - Number(left.timeSensitive) || left.eligibleDays.length - right.eligibleDays.length || right.duration - left.duration || left.id.localeCompare(right.id));
    const entryById = new Map(entries.map(entry => [entry.id, entry]));

    entries.forEach(entry => {
      let best = null;
      entry.eligibleDays.forEach(day => {
        const slots = entry.item.category === 'food' ? entry.slotsByDay[day] : [''];
        slots.forEach(slot => {
          const candidateMeals = { ...mealAssignments, ...(slot ? { [entry.id]: slot } : {}) };
          const before = mustRouteMetrics(day, dayIds[day], state, itemLookup, hotel, suggestedTransit, durationOverrides, mealAssignments);
          const after = mustRouteMetrics(day, [...dayIds[day], entry.id], state, itemLookup, hotel, suggestedTransit, durationOverrides, candidateMeals);
          const capacity = Math.max(1, DEADLINES[day] - after.start);
          const used = after.end - after.start;
          const collision = slot ? slotLoads[day][slot] * (slot === 'snack' ? 18 : 180) : 0;
          const beforeClusters = new Set(before.districtClusters);
          const cluster = areaCluster(entry.item);
          const clusterPenalty = before.ids.length && !beforeClusters.has(cluster) ? 80 : 0;
          const clusterBonus = beforeClusters.has(cluster) ? 42 : 0;
          const score = metricCost(after) - metricCost(before) + collision + (used / capacity) * 18 + clusterPenalty - clusterBonus
            - (entry.existingDay === day ? 4 : 0) - (entry.item.suggestedDay === day ? 2 : 0);
          if (!best || score < best.score || (score === best.score && DAYS.indexOf(day) < DAYS.indexOf(best.day))) best = { day, slot, score };
        });
      });
      if (best) {
        dayIds[best.day].push(entry.id);
        if (best.slot) {
          mealAssignments[entry.id] = best.slot;
          slotLoads[best.day][best.slot] += 1;
        }
      }
      else unplaced.push({ id: entry.id, reason: '배정 가능한 날짜 없음' });
    });

    let metrics = {};
    const refreshMetrics = () => {
      metrics = {};
      DAYS.forEach(day => {
        metrics[day] = mustRouteMetrics(day, dayIds[day], state, itemLookup, hotel, suggestedTransit, durationOverrides, mealAssignments);
        dayIds[day] = [...metrics[day].ids];
      });
    };
    refreshMetrics();

    const mealCollisionCost = (candidateDays, candidateMeals) => DAYS.reduce((total, day) => {
      const counts = {};
      candidateDays[day].forEach(id => {
        const slot = candidateMeals[id];
        if (slot) counts[slot] = (counts[slot] || 0) + 1;
      });
      return total + Object.entries(counts).reduce((sum, [slot, count]) => sum + Math.max(0, count - 1) * (slot === 'snack' ? 20 : 180), 0);
    }, 0);
    const hasHardMealCollision = (candidateDays, candidateMeals) => DAYS.some(day => {
      const counts = {};
      candidateDays[day].forEach(id => {
        const slot = candidateMeals[id];
        if (slot && slot !== 'snack') counts[slot] = (counts[slot] || 0) + 1;
      });
      return Object.values(counts).some(count => count > 1);
    });
    const assignmentCost = (candidateDays, candidateMeals) => DAYS.reduce((total, day) => {
      return total + metricCost(mustRouteMetrics(day, candidateDays[day], state, itemLookup, hotel, suggestedTransit, durationOverrides, candidateMeals));
    }, mealCollisionCost(candidateDays, candidateMeals));

    for (let pass = 0; pass < 12; pass += 1) {
      const currentCost = assignmentCost(dayIds, mealAssignments);
      let bestChange = null;
      sourceIds.forEach(id => {
        const entry = entryById.get(id);
        const fromDay = DAYS.find(day => dayIds[day].includes(id));
        if (!entry || !fromDay || (state.reservations?.[id]?.status === 'booked' && entry.existingDay)) return;
        entry.eligibleDays.filter(day => day !== fromDay).forEach(toDay => {
          const slots = entry.item.category === 'food' ? entry.slotsByDay[toDay] : [''];
          slots.forEach(slot => {
            const candidateDays = Object.fromEntries(DAYS.map(day => [day, dayIds[day].filter(routeId => routeId !== id)]));
            candidateDays[toDay].push(id);
            const candidateMeals = { ...mealAssignments };
            delete candidateMeals[id];
            if (slot) candidateMeals[id] = slot;
            if (hasHardMealCollision(candidateDays, candidateMeals)) return;
            const score = assignmentCost(candidateDays, candidateMeals)
              - (entry.existingDay === toDay ? 4 : 0) - (entry.item.suggestedDay === toDay ? 2 : 0);
            if (score + .5 < currentCost && (!bestChange || score < bestChange.score)) bestChange = { score, candidateDays, candidateMeals };
          });
        });
      });

      const placedIds = DAYS.flatMap(day => dayIds[day]);
      for (let leftIndex = 0; leftIndex < placedIds.length; leftIndex += 1) {
        const leftId = placedIds[leftIndex];
        const left = entryById.get(leftId);
        const leftDay = DAYS.find(day => dayIds[day].includes(leftId));
        if (!left || !leftDay || (state.reservations?.[leftId]?.status === 'booked' && left.existingDay)) continue;
        for (let rightIndex = leftIndex + 1; rightIndex < placedIds.length; rightIndex += 1) {
          const rightId = placedIds[rightIndex];
          const right = entryById.get(rightId);
          const rightDay = DAYS.find(day => dayIds[day].includes(rightId));
          if (!right || !rightDay || leftDay === rightDay || !left.eligibleDays.includes(rightDay) || !right.eligibleDays.includes(leftDay)) continue;
          if (state.reservations?.[rightId]?.status === 'booked' && right.existingDay) continue;
          const leftSlots = left.item.category === 'food' ? left.slotsByDay[rightDay] : [''];
          const rightSlots = right.item.category === 'food' ? right.slotsByDay[leftDay] : [''];
          leftSlots.forEach(leftSlot => rightSlots.forEach(rightSlot => {
            const candidateDays = Object.fromEntries(DAYS.map(day => [day, dayIds[day].filter(id => id !== leftId && id !== rightId)]));
            candidateDays[rightDay].push(leftId);
            candidateDays[leftDay].push(rightId);
            const candidateMeals = { ...mealAssignments };
            delete candidateMeals[leftId];
            delete candidateMeals[rightId];
            if (leftSlot) candidateMeals[leftId] = leftSlot;
            if (rightSlot) candidateMeals[rightId] = rightSlot;
            if (hasHardMealCollision(candidateDays, candidateMeals)) return;
            const score = assignmentCost(candidateDays, candidateMeals);
            if (score + .5 < currentCost && (!bestChange || score < bestChange.score)) bestChange = { score, candidateDays, candidateMeals };
          }));
        }
      }
      if (!bestChange) break;
      DAYS.forEach(day => { dayIds[day] = [...bestChange.candidateDays[day]]; });
      Object.keys(mealAssignments).forEach(id => delete mealAssignments[id]);
      Object.assign(mealAssignments, bestChange.candidateMeals);
      refreshMetrics();
    }
    DAYS.forEach(day => {
      MEAL_SLOT_IDS.forEach(slot => { slotLoads[day][slot] = 0; });
      dayIds[day].forEach(id => { if (mealAssignments[id]) slotLoads[day][mealAssignments[id]] += 1; });
    });

    const suggestedIds = [];
    const includeFill = routeOptions.includeFill !== false;
    const candidateIds = [...new Set(Array.isArray(routeOptions.candidateIds) ? routeOptions.candidateIds : [...wishlist])];
    const dayFillCounts = Object.fromEntries(DAYS.map(day => [day, 0]));
    const dayCatalogPlaceCounts = Object.fromEntries(DAYS.map(day => [day, 0]));
    const assigned = () => new Set(DAYS.flatMap(day => dayIds[day]));
    const isSafeSuggestion = item => item && !item.adultOnly && !item.chanceType && item.operation?.reservationPolicy !== 'required'
      && Number(item.duration || 60) <= 110 && cleanCoords(item.coords);

    for (let fillIndex = 0; includeFill && fillIndex < 4; fillIndex += 1) {
      const usedIds = assigned();
      let bestFill = null;
      candidateIds.forEach(id => {
        if (usedIds.has(id) || requiredSet.has(id)) return;
        const item = itemLookup(id);
        const inWishlist = wishlist.has(id);
        if (!isSafeSuggestion(item)) return;
        if (!inWishlist && !['food', 'attraction', 'goods'].includes(item.category)) return;
        if (!inWishlist && item.category === 'goods' && Number(item.duration || 60) > 75) return;
        const duration = Number(item.duration) || 60;
        durationOverrides[id] = duration;
        DAYS.forEach(day => {
          if (dayFillCounts[day] >= 2 || dayIds[day].length >= 8) return;
          const validDays = Array.isArray(item.validDays) ? item.validDays : DAYS;
          if (!validDays.includes(day) || !operationFor(item, data, day).validDays.includes(day)) return;
          const before = metrics[day];
          if (!before.ids.length || !before.districtClusters.includes(areaCluster(item))) return;
          const coords = cleanCoords(item.coords);
          const nearestKm = Math.min(...before.ids.map(routeId => distanceKm(coords, itemLookup(routeId)?.coords)).filter(Number.isFinite));
          const maxNearbyKm = inWishlist ? 3.2 : 2.2;
          if (!Number.isFinite(nearestKm) || nearestKm > maxNearbyKm) return;
          const slots = item.category === 'food'
            ? mealSlotOptions(item, state).filter(slot => mealWindow(day, slot, duration, state) && !slotLoads[day][slot])
            : [''];
          if (!slots.length) return;
          if (!inWishlist && item.category !== 'food' && dayCatalogPlaceCounts[day] >= 1) return;
          slots.forEach(slot => {
            const candidateMeals = { ...mealAssignments, ...(slot ? { [id]: slot } : {}) };
            const after = mustRouteMetrics(day, [...dayIds[day], id], state, itemLookup, hotel, suggestedTransit, durationOverrides, candidateMeals);
            const detourKm = Math.max(0, after.pathDistanceKm - before.pathDistanceKm);
            if (after.overflowMinutes || after.mealWarnings.length > before.mealWarnings.length || after.timeWarnings.length > before.timeWarnings.length) return;
            if (after.districtRevisits > before.districtRevisits || after.districtSwitches > before.districtSwitches) return;
            if (detourKm > (inWishlist ? 3.4 : 2.4)) return;
            const slackAfter = DEADLINES[day] - after.end;
            const sourceBoost = inWishlist ? 115 : 0;
            const mealBoost = slot ? 105 : 0;
            const gapBoost = Math.min(45, Math.max(0, slackAfter) / 8);
            const score = detourKm * 25 + nearestKm * 12 + duration * .08 - sourceBoost - mealBoost - gapBoost + dayFillCounts[day] * 18;
            if (!bestFill || score < bestFill.score || (score === bestFill.score && id.localeCompare(bestFill.id) < 0)) {
              bestFill = { id, item, day, slot, score, source: inWishlist ? 'wishlist' : 'catalog' };
            }
          });
        });
      });
      if (!bestFill) break;
      dayIds[bestFill.day].push(bestFill.id);
      suggestedIds.push(bestFill.id);
      suggestionSources[bestFill.id] = bestFill.source;
      dayFillCounts[bestFill.day] += 1;
      if (bestFill.source === 'catalog' && bestFill.item.category !== 'food') dayCatalogPlaceCounts[bestFill.day] += 1;
      if (bestFill.slot) {
        mealAssignments[bestFill.id] = bestFill.slot;
        slotLoads[bestFill.day][bestFill.slot] += 1;
      }
      refreshMetrics();
    }

    DAYS.forEach(day => {
      metrics[day].entries = metrics[day].entries.map(entry => ({
        ...entry,
        required: requiredSet.has(entry.id),
        fillSource: suggestionSources[entry.id] || ''
      }));
    });
    const placedRequired = DAYS.reduce((sum, day) => sum + dayIds[day].filter(id => requiredSet.has(id)).length, 0);
    return {
      sourceCount: sourceIds.length,
      placedCount: placedRequired,
      fillCount: suggestedIds.length,
      suggestedIds,
      suggestionSources,
      days: dayIds,
      metrics,
      mealAssignments,
      unplaced
    };
  }
  function estimatedBudget(state, itemLookup, hotel) {
    let knownJpy = 0;
    let unknownCount = 0;
    const lines = [];
    const rate = Number(state.exchangeRateKrwPerJpy) || 10;
    const hotelKrw = Number(hotel?.liveKrwStay) || (Number(hotel?.liveKrwNight) ? Number(hotel.liveKrwNight) * 2 : 0);
    if (hotelKrw) {
      const value = Math.round(hotelKrw / rate);
      knownJpy += value;
      lines.push({ label: '숙소 2박', value, source: `₩${hotelKrw.toLocaleString('ko-KR')} 스냅샷` });
    } else unknownCount += 1;
    DAYS.forEach(day => (state.plans?.[day] || []).forEach(id => {
      const item = itemLookup(id);
      if (!item) return;
      let each = Number.isFinite(Number(item.price)) ? Number(item.price) : parseYen(item.priceText);
      if (each === null || item.category === 'goods') { unknownCount += 1; return; }
      const multiplier = ['food', 'attraction'].includes(item.category) ? 3 : 1;
      const value = Math.round(each * multiplier);
      knownJpy += value;
      lines.push({ label: item.name, value, source: multiplier === 3 ? '3인' : '선택액' });
    }));
    const planned = state.plannedCosts || {};
    [['교통', 'transportJpy'], ['쇼핑', 'shoppingJpy'], ['패스', 'passJpy']].forEach(([label, key]) => {
      const value = Math.max(0, Number(planned[key]) || 0);
      if (value) { knownJpy += value; lines.push({ label, value, source: '직접 입력' }); }
    });
    return { knownJpy: Math.round(knownJpy), perPersonJpy: Math.round(knownJpy / 3), knownKrw: Math.round(knownJpy * rate), unknownCount, lines };
  }
  function settlement(expenses, participants) {
    const balances = Object.fromEntries(participants.map(participant => [participant.id, 0]));
    (expenses || []).forEach(expense => {
      const amount = Math.max(0, Number(expense.amountJpy) || 0);
      const splitWith = (expense.splitWith || []).filter(id => id in balances);
      if (!amount || !splitWith.length || !(expense.payerId in balances)) return;
      balances[expense.payerId] += amount;
      const share = amount / splitWith.length;
      splitWith.forEach(id => { balances[id] -= share; });
    });
    const creditors = Object.entries(balances).filter(([, value]) => value > .5).map(([id, value]) => ({ id, value })).sort((a, b) => b.value - a.value);
    const debtors = Object.entries(balances).filter(([, value]) => value < -.5).map(([id, value]) => ({ id, value: -value })).sort((a, b) => b.value - a.value);
    const transfers = [];
    let ci = 0;
    let di = 0;
    while (ci < creditors.length && di < debtors.length) {
      const amount = Math.min(creditors[ci].value, debtors[di].value);
      if (amount > .5) transfers.push({ from: debtors[di].id, to: creditors[ci].id, amountJpy: Math.round(amount) });
      creditors[ci].value -= amount;
      debtors[di].value -= amount;
      if (creditors[ci].value <= .5) ci += 1;
      if (debtors[di].value <= .5) di += 1;
    }
    return { balances, transfers };
  }
  function icsEscape(value) { return String(value || '').replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\n/g, '\\n'); }
  function toIcs(state, itemLookup, data, suggestedTransit) {
    const rows = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//OSAKA TRIP//KO', 'CALSCALE:GREGORIAN', 'METHOD:PUBLISH'];
    DAYS.forEach(day => {
      const schedule = scheduleFor(day, state, itemLookup, data, suggestedTransit);
      schedule.entries.forEach(entry => {
        const date = DAY_DATES[day].replace(/-/g, '');
        const start = `${date}T${minutesToTime(entry.start).replace(':', '')}00`;
        const end = `${date}T${minutesToTime(entry.end).replace(':', '')}00`;
        rows.push('BEGIN:VEVENT', `UID:${day}-${entry.id}@osaka51hours`, `DTSTART;TZID=Asia/Tokyo:${start}`, `DTEND;TZID=Asia/Tokyo:${end}`, `SUMMARY:${icsEscape(entry.item.name)}`, `DESCRIPTION:${icsEscape(entry.item.description || entry.operation.note || '')}`, `LOCATION:${icsEscape(entry.item.areaLabel || 'Osaka')}`, 'END:VEVENT');
      });
    });
    rows.push('END:VCALENDAR');
    return rows.join('\r\n');
  }

  return { DAYS, DAY_DATES, DEADLINES, MEAL_SLOTS, DISTRICT_LABELS, clone, timeToMinutes, minutesToTime, parseYen, operationFor, scheduleFor, directionsUrl, distanceKm, areaCluster, routeClusterStats, routeDistance, orderRoute, mealSlotOptions, mealWindow, itemTimeWindow, buildMustRoute, estimatedBudget, settlement, toIcs };
});
