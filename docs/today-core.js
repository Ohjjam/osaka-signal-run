(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.OsakaTodayCore = factory();
})(typeof window === 'object' ? window : globalThis, function () {
  'use strict';
  const DATES = { '2026-09-05': 'sat', '2026-09-06': 'sun', '2026-09-07': 'mon' };
  const AREAS = {
    namba: { name: '난바·도톤보리', coords: [34.667, 135.502] },
    hotel: { name: '숙소·다이코쿠초', coords: [34.6544118, 135.4997683] },
    shinsaibashi: { name: '신사이바시', coords: [34.6746, 135.5006] },
    shinsekai: { name: '신세카이·텐노지', coords: [34.6525, 135.5063] },
    umeda: { name: '우메다', coords: [34.7025, 135.4958] },
    tenma: { name: '텐마', coords: [34.7045, 135.511] },
    castle: { name: '오사카성', coords: [34.6873, 135.5262] },
    bay: { name: '가이유칸·덴포잔', coords: [34.6545, 135.4289] },
    kix: { name: '간사이공항', coords: [34.4347, 135.2441] }
  };
  function clock(date = new Date()) {
    const p = Object.fromEntries(new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Tokyo', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).formatToParts(date).map(x => [x.type, x.value]));
    const ymd = `${p.year}-${p.month}-${p.day}`;
    return { date: ymd, day: DATES[ymd] || null, minutes: +p.hour * 60 + +p.minute, time: `${p.hour}:${p.minute}` };
  }
  function coords(value) { return Array.isArray(value) && value.length === 2 && value.every(Number.isFinite) && Math.abs(value[0]) <= 90 && Math.abs(value[1]) <= 180; }
  function distance(a, b) {
    if (!coords(a) || !coords(b)) return Infinity;
    const r = Math.PI / 180, d1 = (b[0] - a[0]) * r, d2 = (b[1] - a[1]) * r;
    const n = Math.sin(d1 / 2) ** 2 + Math.cos(a[0] * r) * Math.cos(b[0] * r) * Math.sin(d2 / 2) ** 2;
    return 6371 * 2 * Math.atan2(Math.sqrt(n), Math.sqrt(Math.max(0, 1 - n)));
  }
  function travel(a, b) { const km = distance(a, b); return km < 1.5 ? Math.ceil(km * 19 + 5) : Math.ceil(18 + km * 4.5); }
  function meal(minutes) {
    if (minutes < 660) return { id: 'breakfast', label: '아침' };
    if (minutes < 870) return { id: 'lunch', label: '점심' };
    if (minutes < 1050) return { id: 'snack', label: '간식' };
    if (minutes < 1260) return { id: 'dinner', label: '저녁' };
    return { id: 'late', label: '야식' };
  }
  function gate(c, area) {
    if (c.date > '2026-09-07' || (c.day === 'mon' && c.minutes >= 1080)) return 'finished';
    if (c.day === 'mon' && (c.minutes >= 840 || area === 'kix')) return 'airport';
    if (area === 'kix') return 'arrival';
    if (c.minutes < 420 || c.minutes >= 1410) return 'rest';
    return 'explore';
  }
  function mins(s) { if (!/^\d{1,2}:\d{2}$/.test(s || '')) return null; const [h,m] = s.split(':').map(Number); return h*60+m; }
  function hours(operation, start, duration) {
    const open = mins(operation?.open), close = mins(operation?.close), last = mins(operation?.lastEntry);
    if (open === null || close === null) return { allowed: true, label: '영업시간 확인 필요', known: false };
    const end = close <= open ? close + 1440 : close;
    const s = close <= open && start < close ? start + 1440 : start;
    const lastTime = last !== null && close <= open && last < open ? last + 1440 : last;
    const allowed = s >= open && s + duration <= end && (lastTime === null || s <= lastTime);
    return { allowed, known: true, label: allowed ? `등록시간 ${operation.open}–${operation.close} · 방문 전 확인` : '등록시간상 이용 어려움' };
  }
  function indoor(item) {
    if (item.category === 'food') return !['snack'].includes(item.group);
    return /kaiyukan|harukas|parco|lucua|museum|박물관|미술관|백화점|수족관|실내|쇼핑몰/i.test(`${item.id} ${item.name} ${item.description || ''}`);
  }
  function rank(items, context) {
    const { now, origin, state = {}, operationFor = () => ({}), excluded = [], anchor, mood = 'auto', rain = false } = context;
    const slot = meal(now.minutes), day = now.day;
    const must = new Set(state.mustVisit || []), saved = new Set(state.wishlist || []);
    const planned = new Set(day ? state.plans?.[day] || [] : []);
    const foodMode = mood === 'food' || mood === 'rest' || (mood === 'auto' && !context.justAte && ((now.minutes >= 420 && now.minutes < 600) || (now.minutes >= 690 && now.minutes < 840) || (now.minutes >= 1080 && now.minutes < 1230)));
    return items.flatMap(item => {
      if (!coords(item.coords) || excluded.includes(item.id) || !['food', 'attraction', 'goods'].includes(item.category)) return [];
      if (/^event-/.test(item.id) && !day) return [];
      const progress = day && state.itemProgress?.[`${day}:${item.id}`];
      if (['done','skipped'].includes(progress?.status || progress)) return [];
      const isFood = item.category === 'food', isCafe = ['drink','dessert','breakfast'].includes(item.group);
      if (mood === 'rest' ? !isCafe : foodMode ? !isFood : isFood) return [];
      if (item.group === 'alcohol' && now.minutes < 1080) return [];
      if (slot.id === 'breakfast' && isFood && !isCafe && !['ichiran'].includes(item.id)) return [];
      if (rain && !indoor(item)) return [];
      const km = distance(origin, item.coords);
      if (km > (mood === 'rest' ? 1.5 : 3)) return [];
      const op = operationFor(item, day || 'sat');
      if (day && op.validDays && !op.validDays.includes(day)) return [];
      if (op.reservationPolicy === 'required' && state.reservations?.[item.id]?.status !== 'booked') return [];
      // Ticketed events are not spontaneous drop-ins, even if the old catalog says "recommended".
      if (/^event-/.test(item.id) && state.reservations?.[item.id]?.status !== 'booked') return [];
      const duration = Math.min(180, Math.max(20, +item.duration || (isFood ? 60 : 45)));
      const transfer = travel(origin, item.coords), start = now.minutes + transfer;
      const availability = hours(op, start, duration);
      if (!availability.allowed) return [];
      if (day === 'mon' && start + duration + travel(item.coords, AREAS.hotel.coords) + 20 > 870) return [];
      if (anchor && anchor.id !== item.id && start + duration + travel(item.coords, anchor.coords) + 20 > anchor.start) return [];
      let score = 100 - km * 22 + (must.has(item.id) ? 22 : saved.has(item.id) ? 10 : 0) + (planned.has(item.id) ? 12 : 0);
      if (isFood && state.mealSlots?.[item.id] === slot.id) score += 15;
      if (isFood && ['snack','dessert'].includes(item.group)) score += slot.id === 'snack' ? 18 : -15;
      if (availability.known) score += 5;
      const reason = must.has(item.id) ? '필수로 저장한 곳' : planned.has(item.id) ? '오늘 일정에 있는 곳' : saved.has(item.id) ? '보관함에 있는 곳' : rain ? '실내 위주 후보' : mood === 'rest' ? '가까운 쉬어갈 곳' : `${isFood ? slot.label + ' 후보' : '가까운 다음 코스'}`;
      return [{ item, km, transfer, duration, score, reason, availability }];
    }).sort((a,b) => b.score-a.score || a.km-b.km || a.item.id.localeCompare(b.item.id));
  }
  function foodList(items, { origin, radius = 2, query = '', group = 'all', savedOnly = false, saved = [] }) {
    const needle = query.trim().toLocaleLowerCase();
    return items.filter(i => i.category === 'food').map(item => ({ item, km: distance(origin,item.coords) })).filter(({item,km}) => {
      return (radius === 0 || km <= radius) && (group === 'all' || item.group === group) && (!savedOnly || saved.includes(item.id)) && (!needle || `${item.name} ${item.jp || ''} ${item.genreLabel || ''} ${item.menu || ''} ${item.areaLabel || ''}`.toLocaleLowerCase().includes(needle));
    }).sort((a,b) => a.km-b.km || a.item.name.localeCompare(b.item.name));
  }
  function foodFacts(item, groups = {}) {
    const cuisine = String(item.genreLabel || groups[item.group] || '음식점');
    const menu = String(item.menu || '').trim() || '대표 메뉴 미등록';
    const source = /^https:\/\/(?:www\.)?tabelog\.com\//.test(item.tabelog || '') ? item.tabelog : '';
    const rating = source && Number.isFinite(item.rating) && item.rating > 0 && item.rating <= 5 ? item.rating.toFixed(2) : null;
    const reviews = rating && Number.isFinite(item.reviews) && item.reviews >= 0 ? Math.floor(item.reviews) : null;
    return { cuisine, menu, shortMenu: menu.split(/[·|]/)[0].trim(), rating, reviews, source, ratingText: rating ? `타베로그 ${rating}` : '평점 미등록' };
  }
  // Greedy screen-space placement keeps menu labels readable in dense restaurant areas.
  function labelPlacements(points, width, height, limit = 12) {
    const used = [], result = [];
    for (const p of points) {
      if (result.length >= limit) break;
      for (const side of ['right', 'left']) {
        const x = side === 'right' ? p.x + 18 : p.x - 188, y = p.y - 37;
        const box = { x, y, w: 170, h: 74 };
        if (x < 8 || y < 8 || x + box.w > width - 8 || y + box.h > height - 8) continue;
        if (used.some(b => x < b.x+b.w+8 && x+box.w+8 > b.x && y < b.y+b.h+8 && y+box.h+8 > b.y)) continue;
        used.push(box); result.push({ id:p.id, side }); break;
      }
    }
    return result;
  }
  return { AREAS, clock, coords, distance, travel, meal, gate, hours, rank, foodList, foodFacts, labelPlacements };
});
