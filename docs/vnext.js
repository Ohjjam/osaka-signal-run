(function () {
  'use strict';

  const Planner = window.OsakaPlannerV3;
  const Core = window.OsakaVNextCore;
  const Data = window.OSAKA_VNEXT_DATA;
  if (!Planner || !Core || !Data) return;

  const state = Planner.state;
  const dayNames = { sat: '토요일', sun: '일요일', mon: '월요일' };
  const mealSlotLabels = { auto: '자동 추천', breakfast: '아침', lunch: '점심', snack: '간식', dinner: '저녁', late: '야식' };
  const variantNotes = {
    base: '내가 저장한 일정',
    goods: '기존 쇼핑 비교안',
    view: '기존 전망 비교안'
  };
  const voteLabels = { want: '가고 싶음', neutral: '상관없음', skip: '제외' };
  const reservationLabels = { none: '불필요', needed: '예약 필요', booked: '예약 완료' };
  const participantStorageKey = 'osakaVNextParticipant';
  let currentParticipantId = localStorage.getItem(participantStorageKey) || 'p1';
  let activeSubpanel = 'plan';
  let eventPage = 0;
  let backupWindow = 60;
  let backupIndoorOnly = false;
  let wishlistPage = 0;
  let wishlistPriorityFilter = 'all';
  let autoRoutePreview = null;
  let autoRouteIncludeFill = true;
  let autoRouteDay = ['sat', 'sun', 'mon'].includes(state.mapDay) ? state.mapDay : 'sat';
  let autoRouteMap = null;
  let autoRouteLayer = null;
  let autoRouteProgress = null;
  let autoRouteMarkers = [];
  let autoRouteRunner = null;
  let autoRouteFrame = 0;
  let autoRouteTimer = 0;
  let autoRoutePlaybackToken = 0;
  let autoRouteStep = 0;
  let currentRouteAutoplayDone = false;
  let renderQueued = false;
  let historyCache = [];

  function esc(value) {
    return String(value ?? '').replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));
  }
  function yen(value) { return `¥${Math.round(Number(value) || 0).toLocaleString('ko-KR')}`; }
  function krw(value) { return `₩${Math.round(Number(value) || 0).toLocaleString('ko-KR')}`; }
  function clone(value) { return Core.clone(value); }
  function lookupItem(id) { return Planner.allItems.get(id); }
  function buildAutoRoutePreview() {
    return Core.buildMustRoute(state, lookupItem, Data, Planner.selectedHotel(), Planner.suggestedTransit, {
      includeFill: autoRouteIncludeFill,
      candidateIds: [...Planner.allItems.keys()]
    });
  }
  function participantName(id) { return state.participants.find(participant => participant.id === id)?.name || id; }
  function notify(message) {
    let target = document.querySelector('#vnext-toast');
    if (!target) {
      target = document.createElement('div');
      target.id = 'vnext-toast';
      target.className = 'vnext-toast';
      target.setAttribute('role', 'status');
      document.body.appendChild(target);
    }
    target.textContent = message;
    target.classList.add('is-visible');
    window.clearTimeout(target.__timer);
    target.__timer = window.setTimeout(() => target.classList.remove('is-visible'), 2400);
  }
  function download(name, type, text) {
    const url = URL.createObjectURL(new Blob([text], { type }));
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = name;
    anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  function saveAndRender(message) {
    Planner.saveState();
    queueRender();
    if (message) notify(message);
  }
  function queueRender() {
    if (renderQueued) return;
    renderQueued = true;
    queueMicrotask(() => {
      renderQueued = false;
      renderAll();
    });
  }

  function baseSnapshot(label, id) {
    return {
      id, label,
      plans: clone(state.plans), starts: clone(state.starts), transit: clone(state.transit),
      itemStarts: clone(state.itemStarts), itemDurations: clone(state.itemDurations)
    };
  }
  function ensureState() {
    state.version = 3;
    if (!Array.isArray(state.participants) || state.participants.length !== 3) state.participants = [{ id: 'p1', name: '1번' }, { id: 'p2', name: '2번' }, { id: 'p3', name: '3번' }];
    ['votes', 'reservations', 'itemProgress', 'mealSlots'].forEach(key => { if (!state[key] || typeof state[key] !== 'object' || Array.isArray(state[key])) state[key] = {}; });
    ['prepTasks', 'expenses', 'hotelShortlist', 'wishlist', 'mustVisit'].forEach(key => { if (!Array.isArray(state[key])) state[key] = []; });
    if (!state.fieldDelays) state.fieldDelays = { sat: 0, sun: 0, mon: 0 };
    if (!state.plannedCosts) state.plannedCosts = { transportJpy: 0, shoppingJpy: 0, passJpy: 0 };
    if (!Number.isFinite(Number(state.exchangeRateKrwPerJpy))) state.exchangeRateKrwPerJpy = 10;
    if (!Array.isArray(state.variants) || !state.variants.length) state.variants = [baseSnapshot('기본안', 'base')];
    if (!state.variants.some(variant => variant.id === state.activeVariantId)) state.activeVariantId = state.variants[0].id;
    if (!state.participants.some(participant => participant.id === currentParticipantId)) currentParticipantId = 'p1';
    if (!['sat', 'sun', 'mon'].includes(state.fieldDay)) state.fieldDay = 'sat';
  }
  function syncActiveVariant() {
    ensureState();
    const index = state.variants.findIndex(variant => variant.id === state.activeVariantId);
    if (index < 0) return;
    const label = state.variants[index].label;
    state.variants[index] = baseSnapshot(label, state.activeVariantId);
  }
  function switchVariant(id) {
    if (id === state.activeVariantId) return;
    syncActiveVariant();
    const variant = state.variants.find(candidate => candidate.id === id);
    if (!variant) return;
    state.activeVariantId = id;
    state.plans = clone(variant.plans);
    state.starts = clone(variant.starts);
    state.transit = clone(variant.transit);
    state.itemStarts = clone(variant.itemStarts);
    state.itemDurations = clone(variant.itemDurations);
    Planner.refreshAll();
    saveAndRender(`${variant.label}으로 전환했습니다.`);
  }
  function cloneVariant() {
    syncActiveVariant();
    if (state.variants.length >= 3) return notify('일정안은 최대 3개입니다.');
    const presets = [['rain', '비·폭염안'], ['food', '먹방안']];
    const [id, label] = presets.find(([candidate]) => !state.variants.some(variant => variant.id === candidate)) || [`plan-${Date.now().toString(36)}`, `일정안 ${state.variants.length + 1}`];
    state.variants.push(baseSnapshot(label, id));
    state.activeVariantId = id;
    saveAndRender(`${label}을 만들었습니다.`);
  }

  function injectWorkbench() {
    const itinerary = document.querySelector('#itinerary-v11');
    const original = itinerary?.querySelector('.itinerary-days-v11');
    if (!itinerary || !original || itinerary.querySelector('#vnext-workbench')) return;
    itinerary.querySelector('.v3-heading > span').textContent = '가고 싶은 곳을 보관한 뒤 토·일·월로 옮기세요. 세 사람의 변경은 같은 링크에 저장됩니다.';
    const workbench = document.createElement('div');
    workbench.id = 'vnext-workbench';
    workbench.className = 'vnext-workbench';
    workbench.innerHTML = `
      <nav class="vnext-subtabs" role="tablist" aria-label="내 일정 작업 화면">
        <button type="button" role="tab" aria-selected="true" data-vnext-tab="plan">일정</button>
        <button type="button" role="tab" aria-selected="false" data-vnext-tab="events">날짜 행사</button>
        <button type="button" role="tab" aria-selected="false" data-vnext-tab="booking">예약·준비</button>
        <button type="button" role="tab" aria-selected="false" data-vnext-tab="money">비용·정산</button>
        <button type="button" role="tab" aria-selected="false" data-vnext-tab="field">현장</button>
      </nav>
      <section class="vnext-panel" data-vnext-panel="plan"><div id="vnext-variant-bar"></div><div id="vnext-auto-route"></div><div id="vnext-plan-alerts"></div><div id="vnext-plan-tools"></div><div id="vnext-plan-original"></div><div id="vnext-wishlist"></div><div id="vnext-history"></div></section>
      <section class="vnext-panel" data-vnext-panel="events" hidden><div id="vnext-events"></div></section>
      <section class="vnext-panel" data-vnext-panel="booking" hidden><div id="vnext-booking"></div></section>
      <section class="vnext-panel" data-vnext-panel="money" hidden><div id="vnext-money"></div></section>
      <section class="vnext-panel" data-vnext-panel="field" hidden><div id="vnext-field"></div></section>`;
    original.before(workbench);
    workbench.querySelector('#vnext-plan-original').appendChild(original);
    const sync = document.querySelector('#shared-sync-v8');
    if (sync && !sync.querySelector('#vnext-participant')) {
      sync.insertAdjacentHTML('beforeend', '<label class="vnext-person-label">내 투표 <select id="vnext-participant" aria-label="현재 투표 참가자"></select></label>');
    }
  }

  function renderParticipantSwitcher() {
    const select = document.querySelector('#vnext-participant');
    if (!select) return;
    select.innerHTML = state.participants.map(participant => `<option value="${participant.id}" ${participant.id === currentParticipantId ? 'selected' : ''}>${esc(participant.name)}</option>`).join('');
  }
  function voteStats(id) {
    const votes = state.votes[id] || {};
    const values = state.participants.map(participant => votes[participant.id] || 'neutral');
    return { want: values.filter(value => value === 'want').length, skip: values.filter(value => value === 'skip').length, value: votes[currentParticipantId] || 'neutral' };
  }
  function voteMarkup(id) {
    const stats = voteStats(id);
    const status = stats.want === 3 ? '전원 찬성' : stats.skip > 0 && stats.want > 0 ? '의견 갈림' : `${stats.want}/3 찬성`;
    return `<div class="vnext-vote is-${stats.value}"><span>${status}</span><button type="button" data-vnext-vote-cycle="${esc(id)}" title="${esc(participantName(currentParticipantId))} 투표 변경">${voteLabels[stats.value]}</button></div>`;
  }
  function hydrateVotes() {
    document.querySelectorAll('[data-vnext-vote]').forEach(target => { target.innerHTML = voteMarkup(target.dataset.vnextVote); });
    ['attraction', 'goods', 'nightlife'].forEach(kind => {
      const chips = document.querySelector(`#${kind === 'attraction' ? 'attraction-chips-v5' : kind === 'goods' ? 'goods-chips-v5' : 'nightlife-chips-v5'}`);
      if (chips && !chips.querySelector('[data-vnext-consensus]')) chips.insertAdjacentHTML('beforeend', `<button type="button" data-vnext-consensus="${kind}">합의순</button>`);
    });
  }
  function sortVisibleByConsensus(kind) {
    const grid = document.querySelector(`#${kind === 'attraction' ? 'attraction-catalog-v3' : kind === 'goods' ? 'goods-catalog-v3' : 'nightlife-catalog-v3'}`);
    if (!grid) return;
    [...grid.children].sort((a, b) => {
      const aid = a.querySelector('[data-vnext-vote]')?.dataset.vnextVote;
      const bid = b.querySelector('[data-vnext-vote]')?.dataset.vnextVote;
      const score = id => voteStats(id).want * 2 - voteStats(id).skip * 3;
      return score(bid) - score(aid);
    }).forEach(card => grid.appendChild(card));
    notify('현재 페이지를 합의순으로 정렬했습니다.');
  }

  function schedule(day) { return Core.scheduleFor(day, state, lookupItem, Data, Planner.suggestedTransit); }
  function itemDirections(item) {
    const destination = Array.isArray(item?.coords) ? item.coords.join(',') : item?.name || 'Osaka';
    return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}&travelmode=transit`;
  }
  function tripCountdown(day, minutes) {
    const date = Core.DAY_DATES[day];
    const time = Core.minutesToTime(minutes);
    const target = new Date(`${date}T${time}:00+09:00`).getTime();
    const difference = target - Date.now();
    if (difference <= -60 * 60 * 1000) return '시작 시각 지남';
    if (difference <= 0) return '지금 시작';
    const totalMinutes = Math.ceil(difference / 60000);
    const days = Math.floor(totalMinutes / 1440);
    const hours = Math.floor((totalMinutes % 1440) / 60);
    const rest = totalMinutes % 60;
    return days ? `출발까지 D-${days} · ${hours}시간` : `출발까지 ${hours ? `${hours}시간 ` : ''}${rest}분`;
  }
  function renderPlanMeta() {
    document.querySelectorAll('[data-vnext-plan-meta]').forEach(target => {
      const [day, ...parts] = target.dataset.vnextPlanMeta.split(':');
      const id = parts.join(':');
      const entry = schedule(day).entries.find(candidate => candidate.id === id);
      if (!entry) return;
      const operation = entry.operation;
      const reservation = state.reservations[id] || { status: operation.reservationPolicy === 'required' ? 'needed' : 'none' };
      const cutoffLabel = entry.item.category === 'food' ? 'LO' : '입장';
      const hours = operation.hoursStatus === 'verified' ? `${operation.open || '?'}–${operation.close || '?'}${operation.lastEntry ? ` · ${cutoffLabel} ${operation.lastEntry}` : ''}` : '영업시간·휴무·마감 확인 필요';
      const warnings = entry.warnings.map(warning => `<span class="is-${warning.level}">${esc(warning.text)}</span>`).join('');
      const sourceLabel = operation.verifiedAt ? '공식 출처 ↗' : '확인 링크 ↗';
      target.innerHTML = `<div class="vnext-plan-badges"><span>${esc(hours)}</span><span>${reservationLabels[reservation.status] || '미설정'}</span><a href="${esc(operation.official)}" target="_blank" rel="noopener">${sourceLabel}</a></div>${warnings ? `<div class="vnext-inline-warnings">${warnings}</div>` : ''}`;
    });
  }

  function variantMetrics(variant) {
    const current = { plans: state.plans, starts: state.starts, transit: state.transit, itemStarts: state.itemStarts, itemDurations: state.itemDurations, reservations: state.reservations };
    const variantState = { ...state, plans: variant.plans, starts: variant.starts, transit: variant.transit, itemStarts: variant.itemStarts, itemDurations: variant.itemDurations };
    const count = Core.DAYS.reduce((sum, day) => sum + variant.plans[day].length, 0);
    const ends = Core.DAYS.map(day => Core.scheduleFor(day, variantState, lookupItem, Data, Planner.suggestedTransit).end);
    const votes = Core.DAYS.flatMap(day => variant.plans[day]).reduce((sum, id) => sum + voteStats(id).want, 0);
    const must = new Set(state.mustVisit);
    const extras = new Set(Core.DAYS.flatMap(day => variant.plans[day]).filter(id => !must.has(id))).size;
    return { count, ends, votes, extras, current };
  }
  function renderPlanOverview() {
    syncActiveVariant();
    const active = state.variants.find(variant => variant.id === state.activeVariantId);
    document.querySelector('#vnext-variant-bar').innerHTML = `
      <div class="vnext-section-head"><div><p>MY SAVED PLANS</p><h3>내 저장안</h3></div><button type="button" data-vnext-clone ${state.variants.length >= 3 ? 'disabled' : ''}>현재 일정 복제</button></div>
      <div class="vnext-variants">${state.variants.map(variant => {
        const metric = variantMetrics(variant);
        return `<button type="button" data-vnext-variant="${variant.id}" class="${variant.id === state.activeVariantId ? 'is-active' : ''}"><strong>${esc(variant.label)}</strong><span>${metric.count}곳 · 필수 ${state.mustVisit.length} · 추가 ${metric.extras}</span><em>${esc(variantNotes[variant.id] || '직접 편집한 비교안')}</em><small>토 ${Core.minutesToTime(metric.ends[0])} · 일 ${Core.minutesToTime(metric.ends[1])} · 월 ${Core.minutesToTime(metric.ends[2])}</small></button>`;
      }).join('')}</div>`;
    const allWarnings = Core.DAYS.flatMap(day => schedule(day).warnings.map(warning => ({ ...warning, day })));
    document.querySelector('#vnext-plan-alerts').innerHTML = allWarnings.length ? `<div class="vnext-alert-board"><strong>실행 점검 ${allWarnings.length}건</strong>${allWarnings.slice(0, 8).map(warning => `<span class="is-${warning.level}"><b>${dayNames[warning.day]?.slice(0, 1)}</b>${esc(warning.name ? `${warning.name} · ${warning.text}` : warning.text)}</span>`).join('')}</div>` : '<div class="vnext-alert-board is-clear"><strong>현재 확인된 시간 충돌 없음</strong><span>노란 ‘확인 필요’는 방문 전 공식 페이지에서 확인하세요.</span></div>';
    const hotel = Planner.selectedHotel();
    document.querySelector('#vnext-plan-tools').innerHTML = `
      <div class="vnext-route-tools">${Core.DAYS.map(day => `<a href="${Core.directionsUrl(day, state, lookupItem, hotel)}" target="_blank" rel="noopener">${dayNames[day]} Google Maps ↗</a>`).join('')}</div>
      <div class="vnext-export-tools"><button type="button" data-vnext-export="copy">일정 요약 복사</button><button type="button" data-vnext-export="ics">ICS</button><button type="button" data-vnext-export="offline">오프라인 일정팩</button><button type="button" data-vnext-export="json">JSON 백업</button><button type="button" data-vnext-export="print">인쇄·PDF</button><button type="button" data-vnext-undo>한 단계 되돌리기</button><button type="button" data-vnext-history-load>최근 변경</button></div>`;
    if (active && active.id !== state.activeVariantId) state.activeVariantId = active.id;
  }

  function renderWishlist() {
    const target = document.querySelector('#vnext-wishlist');
    if (!target) return;
    const pageSize = 9;
    const mustSet = new Set(state.mustVisit);
    const mustCount = state.wishlist.filter(id => mustSet.has(id)).length;
    const filteredIds = state.wishlist
      .filter(id => wishlistPriorityFilter === 'all' || (wishlistPriorityFilter === 'must') === mustSet.has(id))
      .sort((left, right) => Number(mustSet.has(right)) - Number(mustSet.has(left)));
    const pages = Math.max(1, Math.ceil(filteredIds.length / pageSize));
    wishlistPage = Math.max(0, Math.min(wishlistPage, pages - 1));
    const visible = filteredIds.slice(wishlistPage * pageSize, (wishlistPage + 1) * pageSize);
    const assignedIds = new Set(Core.DAYS.flatMap(day => state.plans[day]));
    const assignedCount = state.wishlist.filter(id => assignedIds.has(id)).length;
    target.innerHTML = `<section class="vnext-wishlist">
      <div class="vnext-section-head"><div><p>총 ${state.wishlist.length}곳</p><h3>가고 싶은 곳</h3></div><div class="vnext-wishlist-head-actions"><button type="button" data-vnext-custom-add>＋ 새 장소</button></div></div>
      <div class="vnext-wishlist-summary"><span><b>${state.wishlist.length - assignedCount}</b> 미배정</span>${Core.DAYS.map(day => `<span><b>${state.plans[day].length}</b> ${dayNames[day]}</span>`).join('')}</div>
      <div class="vnext-priority-filters" role="group" aria-label="가고 싶은 곳 중요도 필터">${[
        ['all', '전체', state.wishlist.length], ['must', '필수', mustCount], ['optional', '선택', state.wishlist.length - mustCount]
      ].map(([value, label, count]) => `<button type="button" aria-pressed="${wishlistPriorityFilter === value}" data-vnext-priority-filter="${value}"><span>${label}</span><b>${count}</b></button>`).join('')}</div>
      <div class="vnext-wishlist-grid">${visible.length ? visible.map(id => {
        const item = lookupItem(id);
        if (!item) return '';
        const assignedDays = Core.DAYS.filter(day => state.plans[day].includes(id));
        const assignedLabel = assignedDays.length ? assignedDays.map(day => dayNames[day]).join(' · ') : '아직 요일 미정';
        const customMap = item.custom && (item.map || item.official) ? `<a class="vnext-wishlist-map" href="${esc(item.map || item.official)}" target="_blank" rel="noopener">Google 지도 ↗</a>` : '';
        const isMust = mustSet.has(id);
        const inferredMeals = item.category === 'food' ? Core.mealSlotOptions(item, { ...state, mealSlots: {} }).map(slot => mealSlotLabels[slot]).join('·') : '';
        const selectedMeal = state.mealSlots[id] || 'auto';
        const mealChoice = item.category === 'food' ? `<label class="vnext-meal-choice"><span>먹는 시간 <small>자동: ${esc(inferredMeals)}</small></span><select data-vnext-meal-slot="${esc(id)}">${Object.entries(mealSlotLabels).map(([value, label]) => `<option value="${value}" ${selectedMeal === value ? 'selected' : ''}>${label}</option>`).join('')}</select></label>` : '';
        return `<article class="${assignedDays.length ? 'is-assigned ' : ''}${isMust ? 'is-must' : 'is-optional'}" data-wishlist-item="${esc(id)}"><div class="vnext-wishlist-copy"><span class="vnext-wishlist-status">${esc(assignedLabel)}</span><strong>${esc(item.name)}</strong><small>${esc(item.label || item.category)}${item.areaLabel ? ` · ${esc(item.areaLabel)}` : ''}</small>${customMap}</div><div class="vnext-priority-choice" role="group" aria-label="${esc(item.name)} 중요도"><button type="button" aria-pressed="${isMust}" class="${isMust ? 'is-active' : ''}" data-vnext-wishlist-priority="must" data-vnext-wishlist-id="${esc(id)}">필수</button><button type="button" aria-pressed="${!isMust}" class="${!isMust ? 'is-active' : ''}" data-vnext-wishlist-priority="optional" data-vnext-wishlist-id="${esc(id)}">선택</button></div>${mealChoice}<footer>${Core.DAYS.map(day => {
          const active = assignedDays.includes(day);
          const unavailable = Array.isArray(item.validDays) && !item.validDays.includes(day);
          return `<button type="button" class="${active ? 'is-active' : ''}" aria-pressed="${active}" data-vnext-wishlist-day="${day}" data-vnext-wishlist-id="${esc(id)}" ${unavailable ? 'disabled title="이 요일에는 열리지 않음"' : ''}>${dayNames[day]}</button>`;
        }).join('')}<button type="button" class="vnext-wishlist-remove" data-vnext-wishlist-remove="${esc(id)}" ${assignedDays.length ? 'disabled title="요일 배정을 먼저 해제하세요"' : ''}>삭제</button></footer></article>`;
      }).join('') : `<p class="vnext-empty">${state.wishlist.length ? `${wishlistPriorityFilter === 'must' ? '필수' : '선택'}로 지정한 장소가 없습니다.` : '‘＋ 새 장소’로 직접 추가하거나 음식점·관광지·살거리에서 ‘저장’을 누르세요.'}</p>`}</div>
      ${pages > 1 ? `<nav class="vnext-pager"><button type="button" data-vnext-wishlist-page="${wishlistPage - 1}" ${wishlistPage === 0 ? 'disabled' : ''}>← 이전</button><strong>${wishlistPage + 1} / ${pages}</strong><button type="button" data-vnext-wishlist-page="${wishlistPage + 1}" ${wishlistPage >= pages - 1 ? 'disabled' : ''}>다음 →</button></nav>` : ''}
    </section>`;
  }

  function routeDurationLabel(minutes) {
    const value = Math.max(0, Math.round(Number(minutes) || 0));
    const hours = Math.floor(value / 60);
    return `${hours ? `${hours}시간 ` : ''}${value % 60 ? `${value % 60}분` : ''}`.trim() || '0분';
  }
  function stopAutoRoutePlayback(removeMap = false) {
    autoRoutePlaybackToken += 1;
    window.cancelAnimationFrame(autoRouteFrame);
    window.clearTimeout(autoRouteTimer);
    autoRouteFrame = 0;
    autoRouteTimer = 0;
    if (removeMap && autoRouteMap) {
      autoRouteMap.stop();
      if (autoRouteMap._animatingZoom && typeof autoRouteMap._onZoomTransitionEnd === 'function') autoRouteMap._onZoomTransitionEnd();
      autoRouteMap.remove();
      autoRouteMap = null;
      autoRouteLayer = null;
      autoRouteProgress = null;
      autoRouteRunner = null;
      autoRouteMarkers = [];
    }
  }
  function estimatedLeg(from, to, day) {
    const distance = Core.distanceKm(from.coords, to.coords);
    const savedMinutes = !autoRoutePreview && from.id && to.id ? Number(state.transit?.[`${day}:${from.id}:${to.id}`]) : 0;
    const minutes = from.id && to.id && lookupItem(from.id) && lookupItem(to.id)
      ? savedMinutes || Number(Planner.suggestedTransit(from.id, to.id)?.minutes) || Math.round(8 + distance * 4.2)
      : Math.round(8 + distance * 4.2);
    const detail = window.OsakaLegs48?.describe(from.id || (from.kind === 'hotel' ? 'hotel-anchor48' : ''), to.id, minutes);
    if (detail) return {distance, ...detail};
    const mode = distance <= 1.2 ? '도보' : distance <= 4.5 ? '지하철·도보' : '전철';
    return { distance, minutes: Math.max(8, Math.min(75, minutes)), mode };
  }
  function fixedLeg(from, to, override) {
    return { distance: Core.distanceKm(from.coords, to.coords), ...(to.kind === 'airport' ? window.OsakaLegs48?.describe(from.id, 'airport48', override.minutes) : {}), ...override };
  }
  function playbackMetric(day) {
    return autoRoutePreview ? autoRoutePreview.metrics[day] : schedule(day);
  }
  function autoRoutePoints(day) {
    const metric = playbackMetric(day);
    const hotel = Planner.selectedHotel();
    const hotelCoords = Array.isArray(hotel?.coords) ? hotel.coords : [34.6656, 135.5012];
    const points = metric.entries[0]?.id === 'leave-hotel45' ? []
      : [{ id: '', name: `${hotel?.name || '난바 숙소'} 출발`, coords: hotelCoords, kind: 'hotel', time: day === 'sat' ? '17:00' : state.starts[day] }];
    metric.entries.forEach(entry => {
      const item = lookupItem(entry.id);
      if (!Array.isArray(item?.coords)) return;
      const mealSlot = state.mealSlots?.[entry.id] || (item.category === 'food' ? Core.mealSlotOptions(item, state)[0] : '');
      const mealLabel = mealSlot ? mealSlotLabels[mealSlot] : '';
      points.push({ id: entry.id, name: item.name, coords: item.coords, kind: /hotel45|checkout45/.test(entry.id) ? 'hotel' : mealSlot ? 'meal' : 'place', time: Core.minutesToTime(entry.start), mealLabel });
    });
    if (points.length > 1 && day === 'mon') {
      const departureId=metric.entries.at(-1)?.id;
      const departure=window.OSAKA_CURATED_V45?.airportDepartures?.[departureId];
      if (!departure && !metric.entries.some(entry => ['train45','bay-airport49'].includes(entry.id))) points.push({ id: '', name: `${hotel?.name || '난바 숙소'} 짐 회수`, coords: hotelCoords, kind: 'hotel', time: Core.minutesToTime(metric.end + 25), legOverride: { mode: '도보·짐 회수', minutes: 25 } });
      points.push({ id: '', name: '간사이국제공항 도착 목표', coords: [34.4347, 135.2441], kind: 'airport', time: '14:00', legOverride: departure ? {...departure,travelmode:'transit'} : metric.entries.some(entry=>entry.id==='bay-airport49') ? {mode:'지하철 + JR·공항 이동',minutes:120} : { mode: '난카이·공항 이동', minutes: 60 } });
    } else if (points.length > 1 && points.at(-1)?.id !== 'back-hotel45') {
      points.push({ id: '', name: `${hotel?.name || '난바 숙소'} 복귀`, coords: hotelCoords, kind: 'hotel', time: Core.minutesToTime(metric.end) });
    }
    return points.map((point, index, list) => ({
      ...point,
      leg: index ? (point.legOverride ? fixedLeg(list[index - 1], point, point.legOverride) : estimatedLeg(list[index - 1], point, day)) : null
    }));
  }
  function legDirectionsUrl(from, to) {
    const params = new URLSearchParams({ api: '1', origin: from.coords.join(','), destination: to.coords.join(','), travelmode: to.leg?.travelmode || 'transit' });
    return `https://www.google.com/maps/dir/?${params}`;
  }
  function autoRouteIcon(point, index) {
    const label = point.kind === 'hotel' ? 'H' : point.kind === 'airport' ? 'KIX' : point.kind === 'meal' ? '食' : index;
    return window.L.divIcon({ className: `vnext-auto-map-marker is-${point.kind}`, html: `<span>${label}</span>`, iconSize: [34, 34], iconAnchor: [17, 17] });
  }
  function fitAutoRouteMap() {
    if (!autoRouteMap) return;
    const coords = autoRoutePoints(autoRouteDay).map(point => point.coords);
    if (!coords.length) return;
    autoRouteMap.stop();
    autoRouteMap.fitBounds(coords, { padding: [38, 38], maxZoom: 13 });
  }
  function updateAutoRoutePlaybackUi(step, moving = false) {
    const points = autoRoutePoints(autoRouteDay);
    const from = points[Math.max(0, Math.min(step, points.length - 1))];
    const to = points[step + 1];
    document.querySelectorAll('[data-vnext-auto-map-day]').forEach(button => button.setAttribute('aria-selected', String(button.dataset.vnextAutoMapDay === autoRouteDay)));
    document.querySelectorAll('[data-vnext-auto-leg]').forEach(row => row.classList.toggle('is-active', Number(row.dataset.vnextAutoLeg) === step));
    autoRouteMarkers.forEach((marker, index) => marker.getElement()?.classList.toggle('is-active', index === step + (moving ? 1 : 0)));
    const status = document.querySelector('#vnext-auto-map-status');
    const title = document.querySelector('#vnext-auto-map-title');
    const detail = document.querySelector('#vnext-auto-map-detail');
    const link = document.querySelector('#vnext-auto-map-directions');
    if (!from || !to) {
      if (status) status.textContent = 'ROUTE COMPLETE';
      if (title) title.textContent = `${dayNames[autoRouteDay]} 동선 재생 완료`;
      if (detail) detail.textContent = '다시 재생하거나 다른 날짜를 선택하세요.';
      if (link) link.hidden = true;
      return;
    }
    if (status) status.textContent = moving ? `LEG ${step + 1}/${points.length - 1} · MOVING` : `LEG ${step + 1}/${points.length - 1} · READY`;
    if (title) title.textContent = `${from.name} → ${to.name}`;
    if (detail) detail.textContent = `${to.leg.mode} 약 ${to.leg.minutes}분 · ${to.time} 도착 · ${to.leg.route || '실제 경로는 길찾기에서 확인'}`;
    if (link) { link.hidden = false; link.href = legDirectionsUrl(from, to); }
  }
  function renderAutoRouteLegs() {
    const target = document.querySelector('#vnext-auto-leg-list');
    if (!target) return;
    const points = autoRoutePoints(autoRouteDay);
    target.innerHTML = points.slice(1).map((point, index) => {
      const previous = points[index];
      return `<button type="button" data-vnext-auto-leg="${index}"><b>${String(index + 1).padStart(2, '0')}</b><span><small>${esc(previous.name)}에서</small><strong>${esc(point.name)}</strong><em>${esc(point.leg.mode)} ${point.leg.minutes}분${point.mealLabel ? ` · ${esc(point.mealLabel)} ${esc(point.time)}` : ''}</em></span></button>`;
    }).join('') || '<p>이 날짜에 재생할 장소가 없습니다.</p>';
  }
  function initAutoRouteMap(autoplay = false) {
    stopAutoRoutePlayback(true);
    const canvas = document.querySelector('#vnext-auto-map-canvas');
    if (!canvas || !window.L) return;
    const populated = Core.DAYS.filter(day => playbackMetric(day).entries.some(entry => Array.isArray(lookupItem(entry.id)?.coords)));
    if (!populated.includes(autoRouteDay)) autoRouteDay = populated[0] || 'sat';
    const points = autoRoutePoints(autoRouteDay);
    renderAutoRouteLegs();
    if (!points.length) return;
    autoRouteMap = window.L.map(canvas, { zoomControl: true, keyboard: true, preferCanvas: false, scrollWheelZoom: false }).setView(points[0].coords, 13);
    window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap contributors', maxZoom: 19, crossOrigin: true }).addTo(autoRouteMap);
    autoRouteLayer = window.L.layerGroup().addTo(autoRouteMap);
    const coords = points.map(point => point.coords);
    window.L.polyline(coords, { color: '#173b58', weight: 7, opacity: .2, dashArray: '3 9' }).addTo(autoRouteLayer);
    autoRouteProgress = window.L.polyline([coords[0]], { color: '#f54d3d', weight: 6, opacity: .95, lineCap: 'round' }).addTo(autoRouteLayer);
    autoRouteMarkers = points.map((point, index) => window.L.marker(point.coords, { icon: autoRouteIcon(point, index), zIndexOffset: point.kind === 'meal' ? 500 : index * 10 })
      .bindPopup(`<strong>${esc(point.name)}</strong><br>${point.mealLabel ? `${esc(point.mealLabel)} · ` : ''}${esc(point.time || '')}`)
      .addTo(autoRouteLayer));
    autoRouteRunner = window.L.circleMarker(points[0].coords, { radius: 8, color: '#fff', weight: 3, fillColor: '#23d8ee', fillOpacity: 1 }).addTo(autoRouteLayer);
    fitAutoRouteMap();
    autoRouteStep = 0;
    updateAutoRoutePlaybackUi(0, false);
    if (autoplay && points.length > 1 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) autoRouteTimer = window.setTimeout(() => playAutoRoute(0, true), 650);
  }
  function playAutoRoute(startStep = autoRouteStep, continuous = true) {
    const points = autoRoutePoints(autoRouteDay);
    if (!autoRouteMap || points.length < 2) return;
    stopAutoRoutePlayback(false);
    const token = autoRoutePlaybackToken;
    const step = startStep >= points.length - 1 ? 0 : Math.max(0, startStep);
    autoRouteStep = step;
    const from = points[step];
    const to = points[step + 1];
    const completed = points.slice(0, step + 1).map(point => point.coords);
    const duration = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 1 : 1050;
    const startedAt = performance.now();
    updateAutoRoutePlaybackUi(step, true);
    autoRouteMap.flyTo(to.coords, Math.max(12, Math.min(15, autoRouteMap.getZoom() + .7)), { duration: duration / 1000, easeLinearity: .22 });
    const frame = now => {
      if (token !== autoRoutePlaybackToken || !autoRouteMap) return;
      const progress = Math.min(1, (now - startedAt) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      const partial = [from.coords[0] + (to.coords[0] - from.coords[0]) * eased, from.coords[1] + (to.coords[1] - from.coords[1]) * eased];
      autoRouteProgress.setLatLngs([...completed, partial]);
      autoRouteRunner.setLatLng(partial);
      if (progress < 1) { autoRouteFrame = window.requestAnimationFrame(frame); return; }
      autoRouteStep = step + 1;
      autoRouteMarkers[step + 1]?.openPopup();
      updateAutoRoutePlaybackUi(autoRouteStep, false);
      if (continuous && autoRouteStep < points.length - 1) autoRouteTimer = window.setTimeout(() => playAutoRoute(autoRouteStep, true), 420);
    };
    autoRouteFrame = window.requestAnimationFrame(frame);
  }
  function renderAutoRoute() {
    const target = document.querySelector('#vnext-auto-route');
    if (!target) return;
    stopAutoRoutePlayback(true);
    if (!autoRoutePreview) {
      const routeCount = Core.DAYS.reduce((sum, day) => sum + schedule(day).entries.length, 0);
      if (!routeCount) { target.innerHTML = ''; return; }
      target.innerHTML = `<section class="vnext-auto-route vnext-current-route">
        <div class="vnext-section-head"><div><p>CURATED ROUTE · ${routeCount} STOPS</p><h3>현재 추천 일정 동선</h3></div><strong class="vnext-current-route-badge">저장된 일정 그대로</strong></div>
        <p class="vnext-auto-copy">아래 시간표에 저장된 순서를 지도에서 그대로 따라갑니다. 날짜를 고른 뒤 자동 재생하거나 원하는 이동 구간을 직접 누르세요.</p>
        <section class="vnext-auto-map">
          <header><div><small>LIVE ITINERARY PLAYER</small><strong>공항·숙소부터 마지막 복귀까지 순차 재생</strong></div><nav>${Core.DAYS.map(day => `<button type="button" data-vnext-auto-map-day="${day}" aria-selected="${day === autoRouteDay}">${dayNames[day]} ${schedule(day).entries.length}</button>`).join('')}</nav></header>
          <div class="vnext-auto-map-stage"><div id="vnext-auto-map-canvas" aria-label="현재 추천 일정을 순차 재생하는 오사카 지도"></div><aside><span id="vnext-auto-map-status">ROUTE READY</span><strong id="vnext-auto-map-title">토요일 17:00 숙소 출발</strong><small id="vnext-auto-map-detail">날짜를 고르고 동선을 재생하세요.</small><a id="vnext-auto-map-directions" href="#" target="_blank" rel="noopener" hidden>이 구간 실제 길찾기 ↗</a></aside></div>
          <div class="vnext-auto-map-controls"><button type="button" data-vnext-auto-play>▶ 처음부터 자동 재생</button><button type="button" class="is-secondary" data-vnext-auto-next>다음 이동</button><button type="button" class="is-map-tool" data-vnext-auto-zoom-out aria-label="지도 축소">－ 축소</button><button type="button" class="is-map-tool" data-vnext-auto-zoom-in aria-label="지도 확대">＋ 확대</button><button type="button" class="is-map-tool is-fit" data-vnext-auto-fit>◎ 전체 보기</button><span>일정의 좌표와 저장된 이동시간을 사용 · 실제 열차·도보 경로는 구간별 Google Maps에서 확인</span></div>
          <div class="vnext-auto-leg-list" id="vnext-auto-leg-list"></div>
        </section>
      </section>`;
      const itinerary = document.querySelector('#itinerary-v11');
      if (activeSubpanel === 'plan' && itinerary && !itinerary.hidden) {
        const autoplay = !currentRouteAutoplayDone;
        currentRouteAutoplayDone = true;
        window.requestAnimationFrame(() => initAutoRouteMap(autoplay));
      }
      return;
    }
    autoRoutePreview = buildAutoRoutePreview();
    const populatedDays = Core.DAYS.filter(day => autoRoutePreview.metrics[day].ids.length);
    if (!populatedDays.includes(autoRouteDay)) autoRouteDay = populatedDays[0] || 'sat';
    const warningDays = Core.DAYS.filter(day => autoRoutePreview.metrics[day].overflowMinutes > 0 || autoRoutePreview.metrics[day].mealWarnings.length);
    const dayCards = Core.DAYS.map(day => {
      const metric = autoRoutePreview.metrics[day];
      const mealLine = metric.mealCoverage.map(slot => `<span class="${slot.ids.length ? 'is-filled' : ''}"><b>${esc(slot.label)}</b>${slot.ids.length ? slot.ids.map(id => esc(lookupItem(id)?.name || id)).join(' · ') : '—'}</span>`).join('');
      const districtLine = metric.districtLabels.length ? metric.districtLabels.join(' → ') : '배정 없음';
      return `<section class="${metric.overflowMinutes ? 'has-overflow' : ''}"><header><span>${dayNames[day]}</span><b>${metric.ids.length}곳</b></header><ol>${metric.entries.length ? metric.entries.map((entry, index) => {
        const item = lookupItem(entry.id);
        const originLabel = entry.required ? '필수' : entry.fillSource === 'wishlist' ? '보관함 보강' : '근처 추천';
        return `<li class="${entry.mealSlot ? 'is-meal ' : ''}${entry.required ? 'is-required' : 'is-fill'}"><time>${Core.minutesToTime(entry.start)}</time><i>${entry.mealSlot ? '食' : index + 1}</i><div><strong>${esc(item?.name || entry.id)}</strong><small><span class="vnext-route-origin is-${entry.required ? 'required' : entry.fillSource}">${originLabel}</span>${entry.mealLabel ? `${esc(entry.mealLabel)} · ` : ''}${esc(item?.areaLabel || item?.area || '오사카')}</small></div></li>`;
      }).join('') : '<li class="is-empty">배정된 필수 장소 없음</li>'}</ol><div class="vnext-meal-line">${mealLine}</div><footer><span>동선 약 ${metric.distanceKm.toFixed(1)}km</span><span>방문 ${routeDurationLabel(metric.visitMinutes)}</span><span>${esc(districtLine)} · 권역 전환 ${metric.districtSwitches}회</span><strong>${metric.overflowMinutes ? `마감 ${metric.overflowMinutes}분 초과` : metric.mealWarnings.length ? `식사 시간 ${metric.mealWarnings.length}건 확인` : `${Core.minutesToTime(metric.end)} 종료`}</strong></footer></section>`;
    }).join('');
    const unplaced = autoRoutePreview.unplaced.map(entry => `<li><strong>${esc(lookupItem(entry.id)?.name || entry.id)}</strong><span>${esc(entry.reason)}</span></li>`).join('');
    target.innerHTML = `<section class="vnext-auto-route">
      <div class="vnext-section-head"><div><p>AUTO · 필수 ${autoRoutePreview.placedCount}/${autoRoutePreview.sourceCount} · 동선 보강 ${autoRoutePreview.fillCount}</p><h3>필수 자동 루트 미리보기</h3></div><div class="vnext-auto-head-actions"><strong>${warningDays.length || autoRoutePreview.unplaced.length ? '확인 필요' : '전부 배정됨'}</strong><button type="button" data-vnext-auto-fill aria-pressed="${autoRouteIncludeFill}">빈 시간 자동 채우기 ${autoRouteIncludeFill ? '켜짐' : '꺼짐'}</button></div></div>
      <p class="vnext-auto-copy">필수를 먼저 같은 권역끼리 묶고, 먼 권역은 하루에 한 방향으로만 잇습니다. 그 뒤 비는 식사·관광 시간에는 현재 동선 가까이에 있는 선택 장소만 보강합니다.</p>
      <section class="vnext-auto-map">
        <header><div><small>ROUTE PLAYER</small><strong>이동 동선 순차 재생</strong></div><nav>${Core.DAYS.map(day => `<button type="button" data-vnext-auto-map-day="${day}" aria-selected="${day === autoRouteDay}">${dayNames[day]}</button>`).join('')}</nav></header>
        <div class="vnext-auto-map-stage"><div id="vnext-auto-map-canvas" aria-label="자동 루트를 순차 재생하는 오사카 지도"></div><aside><span id="vnext-auto-map-status">ROUTE READY</span><strong id="vnext-auto-map-title">숙소에서 출발</strong><small id="vnext-auto-map-detail">날짜를 고르고 동선을 재생하세요.</small><a id="vnext-auto-map-directions" href="#" target="_blank" rel="noopener" hidden>이 구간 실제 길찾기 ↗</a></aside></div>
        <div class="vnext-auto-map-controls"><button type="button" data-vnext-auto-play>▶ 처음부터 자동 재생</button><button type="button" class="is-secondary" data-vnext-auto-next>다음 구간</button><button type="button" class="is-map-tool" data-vnext-auto-zoom-out aria-label="지도 축소">－ 축소</button><button type="button" class="is-map-tool" data-vnext-auto-zoom-in aria-label="지도 확대">＋ 확대</button><button type="button" class="is-map-tool is-fit" data-vnext-auto-fit>◎ 전체 보기</button><span>장소 좌표 연결선 · 실제 열차·도보 경로는 구간별 Google Maps에서 확인</span></div>
        <div class="vnext-auto-leg-list" id="vnext-auto-leg-list"></div>
      </section>
      <div class="vnext-auto-days">${dayCards}</div>
      ${unplaced ? `<aside class="vnext-auto-unplaced"><strong>자동 배치하지 못한 필수 장소</strong><ul>${unplaced}</ul></aside>` : ''}
      <div class="vnext-auto-notice">적용하면 현재 일정의 장소·순서·수동 시작/이동 시간이 교체됩니다. ‘근처 추천’은 적용할 때 보관함에도 추가되고, 기존 보관함과 필수 표시는 그대로 유지됩니다. ‘최근 변경’에서 되돌릴 수 있습니다.</div>
      <footer><button type="button" data-vnext-auto-cancel>취소</button><button type="button" data-vnext-auto-apply ${autoRoutePreview.placedCount ? '' : 'disabled'}>이대로 일정 교체</button></footer>
    </section>`;
    window.requestAnimationFrame(() => initAutoRouteMap(true));
  }

  function eventCard(event) {
    const validButtons = (event.validDays || []).map(day => `<button type="button" data-vnext-event-add="${event.id}" data-vnext-day="${day}">${dayNames[day]}에 넣기</button>`).join('');
    const policy = event.reservationPolicy === 'required' ? '예약 필수' : event.reservationPolicy === 'recommended' ? '예약 권장' : '예약 불필요';
    return `<article class="vnext-event-card"><a class="vnext-event-visual" href="${esc(event.official)}" target="_blank" rel="noopener" style="background-image:linear-gradient(0deg,rgba(9,20,28,.78),rgba(9,20,28,.08)),url('${esc(event.preview)}')"><span>공식 페이지 미리보기</span><strong>${esc(event.label)}</strong></a><div class="vnext-event-body"><p>${esc(event.areaLabel)} · ${esc(event.start)}${event.end ? `–${esc(event.end)}` : ''}</p><h3>${esc(event.name)}</h3><div class="vnext-event-facts"><span>${esc(event.priceText)}</span><span>${event.duration}분</span><span>${policy}</span></div><p>${esc(event.description)}</p><p class="vnext-why"><b>왜 가나</b>${esc(event.whyGo)}</p><p class="vnext-caution">${esc(event.caution)}</p><small>확인 ${esc(event.verifiedAt)} · ${esc(event.replacement)}</small><footer><button type="button" data-add-wishlist="${event.id}">보관</button>${validButtons}<a href="${esc(event.bookingUrl || event.official)}" target="_blank" rel="noopener">예약·공식 ↗</a></footer></div></article>`;
  }
  function renderEvents() {
    const specials = [...Data.events, { ...Data.usjFeature, label: '9/5~6 · 시즌', areaLabel: '유니버설시티', duration: 660, validDays: ['sun'], preview: Data.usjFeature.preview, whyGo: '하루를 통째로 몰입형 테마파크 경험에 쓴다.', replacement: '일요일 전체', bookingUrl: Data.usjFeature.bookingUrl, reservationPolicy: 'recommended', start: '08:00', end: '20:00' }];
    const pages = Math.ceil(specials.length / 4);
    eventPage = Math.max(0, Math.min(eventPage, pages - 1));
    const visible = specials.slice(eventPage * 4, eventPage * 4 + 4);
    document.querySelector('#vnext-events').innerHTML = `<div class="vnext-section-head"><div><p>SEP 5–7 · VERIFIED ${Data.checkedAt}</p><h3>이 날짜에만 가능한 것</h3></div><a href="https://osaka-info.jp/event/?label=&location=&month=2026-09&search=" target="_blank" rel="noopener">공식 행사 전체 ↗</a></div><p class="vnext-lead">토요일 오릭스 14:00 경기는 도착 전에 시작하므로 추천에서 제외했습니다. 카드를 넣으면 기존 일정의 시간 충돌을 바로 검사합니다.</p><div class="vnext-event-grid">${visible.map(eventCard).join('')}</div><nav class="vnext-pager"><button type="button" data-vnext-event-page="${eventPage - 1}" ${eventPage === 0 ? 'disabled' : ''}>← 이전</button><strong>${eventPage + 1} / ${pages}</strong><button type="button" data-vnext-event-page="${eventPage + 1}" ${eventPage >= pages - 1 ? 'disabled' : ''}>다음 →</button></nav>`;
  }

  function scheduledIds() {
    return [...new Set(Core.DAYS.flatMap(day => state.plans[day]))];
  }
  function defaultReservation(id) {
    const item = lookupItem(id);
    const operation = Core.operationFor(item, Data, Core.DAYS.find(day => state.plans[day].includes(id)) || 'sun');
    return { status: operation.reservationPolicy === 'required' ? 'needed' : 'none', assigneeId: '', time: '', cancelBy: '', partySize: 3, partyConfirmed: false, officialUrl: operation.bookingUrl || operation.official || '', note: '' };
  }
  function ensureAutoTask(id) {
    const item = lookupItem(id);
    const feature = id === 'usj' ? Data.usjFeature : Data.events.find(event => event.id === id);
    const reservation = state.reservations[id] || defaultReservation(id);
    if (!feature && reservation.status === 'none') return;
    if (!state.reservations[id]) state.reservations[id] = reservation;
    const taskId = `task-${id}`.slice(0, 80);
    if (!state.prepTasks.some(task => task.id === taskId)) state.prepTasks.push({ id: taskId, title: `${item?.name || feature?.name || id} · 3인 예약 확인`, status: 'todo', assigneeId: '', due: '2026-09-04', itemId: id, link: feature?.bookingUrl || reservation.officialUrl || item?.official || '', auto: true });
  }
  function reservationCard(id, name, link) {
    const reservation = state.reservations[id] || defaultReservation(id);
    return `<article class="vnext-booking-card"><div><span>3인</span><h4>${esc(name)}</h4><a href="${esc(reservation.officialUrl || link || '#')}" target="_blank" rel="noopener">공식·예약 ↗</a></div><label>상태<select data-vnext-reservation-status="${id}">${Object.entries(reservationLabels).map(([value, label]) => `<option value="${value}" ${reservation.status === value ? 'selected' : ''}>${label}</option>`).join('')}</select></label><label>담당<select data-vnext-reservation-assignee="${id}"><option value="">미정</option>${state.participants.map(participant => `<option value="${participant.id}" ${reservation.assigneeId === participant.id ? 'selected' : ''}>${esc(participant.name)}</option>`).join('')}</select></label><label>예약 시각<input type="time" data-vnext-reservation-time="${id}" value="${esc(reservation.time)}"></label><label>취소 마감<input type="datetime-local" data-vnext-reservation-cancel="${id}" value="${esc(reservation.cancelBy)}"></label><label class="vnext-party-confirm"><input type="checkbox" data-vnext-reservation-party="${id}" ${reservation.partyConfirmed ? 'checked' : ''}><span>성인 3명 확보${reservation.partyConfirmed ? ' 완료' : ' 확인 필요'}</span></label></article>`;
  }
  function renderBooking() {
    const ids = scheduledIds();
    const hotel = Planner.selectedHotel();
    const records = hotel ? [{ id: hotel.id, name: hotel.name, link: hotel.bookingUrl }] : [];
    ids.forEach(id => { const item = lookupItem(id); if (item) records.push({ id, name: item.name, link: item.official }); });
    const needed = records.filter(record => (state.reservations[record.id] || defaultReservation(record.id)).status !== 'none');
    const booked = needed.filter(record => state.reservations[record.id]?.status === 'booked').length;
    const tasksDone = state.prepTasks.filter(task => task.status === 'done').length;
    document.querySelector('#vnext-booking').innerHTML = `
      <div class="vnext-section-head"><div><p>BOOKING · THREE PEOPLE</p><h3>예약·준비 업무판</h3></div><strong>${booked}/${needed.length} 예약 · ${tasksDone}/${state.prepTasks.length} 준비</strong></div>
      <aside class="vnext-privacy">각자 사용하는 일정입니다. 수정은 이 브라우저에만 저장되며 친구에게 자동 반영되지 않습니다. 여권번호·카드정보는 입력하지 마세요.</aside>
      <div class="vnext-participant-names">${state.participants.map(participant => `<label>${participant.id.toUpperCase()}<input type="text" maxlength="24" data-vnext-participant-name="${participant.id}" value="${esc(participant.name)}"></label>`).join('')}</div>
      <div class="vnext-booking-list">${records.length ? records.map(record => reservationCard(record.id, record.name, record.link)).join('') : '<p class="vnext-empty">일정이나 숙소를 고르면 예약 업무가 여기에 나타납니다.</p>'}</div>
      <div class="vnext-task-board"><div class="vnext-section-head is-small"><div><p>CHECKLIST</p><h3>누가 준비할지</h3></div></div><form id="vnext-task-form"><input name="title" required maxlength="100" placeholder="예: eSIM 3명 구매"><input name="due" type="date"><select name="assignee"><option value="">담당 미정</option>${state.participants.map(participant => `<option value="${participant.id}">${esc(participant.name)}</option>`).join('')}</select><button>추가</button></form><div class="vnext-task-list">${state.prepTasks.length ? state.prepTasks.slice().sort((a, b) => (a.status === 'done') - (b.status === 'done') || String(a.due).localeCompare(String(b.due))).map(task => `<label class="${task.status === 'done' ? 'is-done' : ''}"><input type="checkbox" data-vnext-task-toggle="${task.id}" ${task.status === 'done' ? 'checked' : ''}><span><b>${esc(task.title)}</b><small>${task.due || '마감 미정'} · ${task.assigneeId ? esc(participantName(task.assigneeId)) : '담당 미정'}${task.auto ? ' · 일정에서 자동 생성' : ''}</small></span>${task.link ? `<a href="${esc(task.link)}" target="_blank" rel="noopener">열기 ↗</a>` : ''}<button type="button" data-vnext-task-delete="${task.id}" aria-label="업무 삭제">×</button></label>`).join('') : '<p class="vnext-empty">아직 준비 업무가 없습니다.</p>'}</div></div>
      <div class="vnext-phrases"><div class="vnext-section-head is-small"><div><p>JAPANESE · 3 PEOPLE</p><h3>바로 복사하는 문장</h3></div></div>${Data.phrases.map(([jp, ko]) => `<button type="button" data-vnext-copy-phrase="${esc(jp)}"><span>${esc(jp)}</span><small>${esc(ko)}</small></button>`).join('')}</div>`;
  }

  function discountMatchMarkup() {
    const sundayEntries = schedule('sun').entries;
    const byId = new Map(sundayEntries.map(entry => [entry.id, entry]));
    const amazing = Data.discountRules?.amazingPass;
    const eco = Data.discountRules?.enjoyEco;
    const amazingMatches = Object.entries(amazing?.benefits || {}).flatMap(([id, benefit]) => {
      const entry = byId.get(id);
      if (!entry) return [];
      if (benefit.latestStart && entry.start > Core.timeToMinutes(benefit.latestStart)) return [{ ...benefit, id, eligible: false, reason: `${benefit.latestStart} 이후라 무료입장 제외` }];
      return [{ ...benefit, id, eligible: true }];
    });
    const eligibleRegular = amazingMatches.filter(match => match.eligible).reduce((sum, match) => sum + Number(match.regular || 0), 0);
    const amazingBefore = eligibleRegular * 3;
    const amazingAfter = Number(amazing?.pricePerPerson || 0) * 3;
    const amazingSaving = amazingBefore - amazingAfter;
    const ecoMatches = Object.entries(eco?.benefits || {}).filter(([id]) => byId.has(id)).map(([id, benefit]) => ({ id, ...benefit }));
    const ecoFacilitySaving = ecoMatches.reduce((sum, match) => sum + Number(match.saving || 0) * 3, 0);
    const ecoCost = Number(eco?.pricePerPerson || 0) * 3;
    return `<section class="vnext-discount-match"><div><span>9/6 일정 자동 대조</span><strong>패스 적용 전·후</strong></div>${amazingMatches.length ? `<article><h4>${esc(amazing.label)}</h4><p>${amazingMatches.map(match => `<b class="${match.eligible ? '' : 'is-ineligible'}">${esc(match.label)} · ${match.eligible ? yen(match.regular) : esc(match.reason)}</b>`).join('')}</p><strong>일반 입장료 ${yen(amazingBefore)} → 3인 패스 ${yen(amazingAfter)}</strong><small>${amazingSaving >= 0 ? `${yen(amazingSaving)} 절약 + 대상 교통` : `입장료만 보면 ${yen(-amazingSaving)} 더 비쌈`} · 당일 운영·제외일 확인</small><footer><button type="button" data-vnext-apply-pass="${amazingAfter}">패스 비용 반영</button><a href="${esc(amazing.conditionsUrl)}" target="_blank" rel="noopener">조건·공식 ↗</a></footer></article>` : '<article><h4>주유패스</h4><p>현재 일요일 일정에는 확인 가능한 적용 시설이 없습니다.</p><a href="#travel-tips-v12">기존 계산기 열기</a></article>'}${ecoMatches.length ? `<article><h4>${esc(eco.label)}</h4><p>${ecoMatches.map(match => `<b>${esc(match.label)} · 3인 ${yen(match.saving * 3)} 할인</b>`).join('')}</p><strong>패스 ${yen(ecoCost)} · 시설 할인 ${yen(ecoFacilitySaving)}</strong><small>나머지 ${yen(Math.max(0, ecoCost - ecoFacilitySaving))} 이상을 Metro·버스로 타면 이득 · 중복 할인 불가</small><footer><button type="button" data-vnext-apply-pass="${ecoCost}">패스 비용 반영</button><a href="${esc(eco.conditionsUrl)}" target="_blank" rel="noopener">조건·공식 ↗</a></footer></article>` : '<article><h4>Enjoy Eco Card</h4><p>선택 일정의 시설 할인은 없지만 일요일 Metro·버스 운임과 비교할 수 있습니다.</p><a href="#travel-tips-v12">교통권 팁 열기</a></article>'}<aside><b>사용 조건</b><span>2026-09-06 당일 · 1인 1장 · 다른 할인과 중복 불가 · 구매 전 공식 운영조건 재확인</span></aside></section>`;
  }
  function renderMoney() {
    const hotel = Planner.selectedHotel();
    const budget = Core.estimatedBudget(state, lookupItem, hotel);
    const settlement = Core.settlement(state.expenses, state.participants);
    const actualTotal = state.expenses.reduce((sum, expense) => sum + Number(expense.amountJpy || 0), 0);
    document.querySelector('#vnext-money').innerHTML = `
      <div class="vnext-section-head"><div><p>BUDGET · SPLIT 3</p><h3>선택 즉시 바뀌는 비용</h3></div><strong>${yen(budget.knownJpy)} · 1인 ${yen(budget.perPersonJpy)}</strong></div>
      <div class="vnext-budget-summary"><article><span>예상 3인</span><strong>${yen(budget.knownJpy)}</strong><small>${krw(budget.knownKrw)} · 환율 입력 기준</small></article><article><span>실제 지출</span><strong>${yen(actualTotal)}</strong><small>${state.expenses.length}건</small></article><article><span>합계 제외</span><strong>${budget.unknownCount}곳</strong><small>가격 미확인·상품별 항목</small></article></div>
      <div class="vnext-cost-inputs"><label>¥1당 원<input type="number" min="1" max="100" step="0.01" value="${state.exchangeRateKrwPerJpy}" data-vnext-rate></label><label>교통 3인<input type="number" min="0" step="100" value="${state.plannedCosts.transportJpy}" data-vnext-planned="transportJpy"></label><label>쇼핑<input type="number" min="0" step="100" value="${state.plannedCosts.shoppingJpy}" data-vnext-planned="shoppingJpy"></label><label>패스<input type="number" min="0" step="100" value="${state.plannedCosts.passJpy}" data-vnext-planned="passJpy"></label></div>
      <div class="vnext-budget-lines">${budget.lines.slice(0, 20).map(line => `<span><b>${esc(line.label)}</b><em>${esc(line.source)}</em><strong>${yen(line.value)}</strong></span>`).join('')}</div>
      ${discountMatchMarkup()}
      <div class="vnext-ledger"><div class="vnext-section-head is-small"><div><p>ACTUAL SPEND</p><h3>실제 지출·정산</h3></div></div><form id="vnext-expense-form"><input name="title" required maxlength="100" placeholder="예: 일요일 저녁"><input name="amount" required type="number" min="0" step="1" placeholder="JPY"><select name="payer">${state.participants.map(participant => `<option value="${participant.id}">${esc(participant.name)} 결제</option>`).join('')}</select><fieldset>${state.participants.map(participant => `<label><input type="checkbox" name="split" value="${participant.id}" checked>${esc(participant.name)}</label>`).join('')}</fieldset><button>지출 추가</button></form><div class="vnext-expense-list">${state.expenses.map(expense => `<span><b>${esc(expense.title)}</b><em>${esc(participantName(expense.payerId))} 결제 · ${expense.splitWith.map(participantName).map(esc).join(', ')} 분담</em><strong>${yen(expense.amountJpy)}</strong><button type="button" data-vnext-expense-delete="${expense.id}" aria-label="지출 삭제">×</button></span>`).join('')}</div><div class="vnext-settlement">${settlement.transfers.length ? settlement.transfers.map(transfer => `<strong>${esc(participantName(transfer.from))} → ${esc(participantName(transfer.to))} ${yen(transfer.amountJpy)}</strong>`).join('') : '<span>정산할 송금이 없습니다.</span>'}</div></div>`;
  }

  function fieldCurrent(day) {
    const entries = schedule(day).entries;
    const current = entries.find(entry => !['done', 'skipped'].includes(state.itemProgress[`${day}:${entry.id}`])) || entries[entries.length - 1] || null;
    return { entries, current, index: current ? entries.findIndex(entry => entry.id === current.id) : -1 };
  }
  function backupCandidates(day, current) {
    if (!current?.item?.coords) return [];
    const plan = new Set(state.plans[day]);
    return [...Planner.allItems.values()].filter(item => !plan.has(item.id) && Array.isArray(item.coords) && Number(item.duration || 60) <= backupWindow && (!backupIndoorOnly || item.indoor)).map(item => ({ item, transit: Planner.suggestedTransit(current.id, item.id).minutes })).sort((a, b) => a.transit - b.transit).slice(0, 4);
  }
  function renderField() {
    const day = state.fieldDay;
    const { entries, current, index } = fieldCurrent(day);
    const done = entries.filter(entry => state.itemProgress[`${day}:${entry.id}`] === 'done').length;
    const percent = entries.length ? Math.round(done / entries.length * 100) : 0;
    const delay = Number(state.fieldDelays[day]) || 0;
    const next = entries[index + 1];
    const hotel = Planner.selectedHotel();
    const directions = Core.directionsUrl(day, state, lookupItem, hotel);
    const fixed = current?.reservation?.status === 'booked';
    const displayStart = current ? Core.minutesToTime(current.start + (fixed ? 0 : delay)) : '--:--';
    const nextBookedAt = next?.reservation?.status === 'booked' ? Core.timeToMinutes(next.reservation.time) : null;
    const delayedArrival = current ? current.end + delay + current.transit : 0;
    const delayConflict = nextBookedAt !== null && delayedArrival > nextBookedAt ? `지연 반영 시 다음 예약 ${next.reservation.time}에 ${delayedArrival - nextBookedAt}분 늦음` : '';
    const liveWarnings = current ? [...current.warnings, ...(delayConflict ? [{ level: 'danger', text: delayConflict }] : [])] : [];
    const countdown = current ? tripCountdown(day, current.start + (fixed ? 0 : delay)) : '';
    document.querySelector('#vnext-field').innerHTML = `
      <div class="vnext-field-top"><div class="vnext-field-days">${Core.DAYS.map(candidate => `<button type="button" data-vnext-field-day="${candidate}" class="${candidate === day ? 'is-active' : ''}">${dayNames[candidate]}</button>`).join('')}</div><div class="vnext-field-progress"><span><i style="width:${percent}%"></i></span><strong>${done}/${entries.length} 완료 · ${percent}%</strong></div></div>
      ${current ? `<article class="vnext-now"><p>NOW · ${dayNames[day]} · ${displayStart}${delay ? ` · +${delay}분 지연` : ''}</p><strong class="vnext-countdown">${esc(countdown)}</strong><h3>${esc(current.item.name)}</h3><div>${liveWarnings.map(warning => `<span class="is-${warning.level}">${esc(warning.text)}</span>`).join('') || '<span>현재 확인된 충돌 없음</span>'}</div><small>${fixed ? `예약 ${current.reservation.time || displayStart} · 고정 일정은 지연해도 이동하지 않음` : '유동 일정 · 지연 반영 가능'}</small><footer><button type="button" data-vnext-field-action="done">완료</button><button type="button" data-vnext-field-action="skip" ${fixed ? 'disabled' : ''}>건너뛰기</button><button type="button" data-vnext-delay="15">+15분</button><button type="button" data-vnext-delay="30">+30분</button><a href="${esc(itemDirections(current.item))}" target="_blank" rel="noopener">이 장소 길찾기 ↗</a></footer></article><article class="vnext-next"><span>NEXT</span><strong>${next ? esc(next.item.name) : '오늘 일정 끝'}</strong><small>${next ? `${Core.minutesToTime(next.start + (next.reservation.status === 'booked' ? 0 : delay))} · 이동 예상 ${current.transit}분` : '숙소 또는 공항으로 이동'}</small></article>` : '<p class="vnext-empty">이 날짜에 장소를 추가하면 현장 모드가 시작됩니다.</p>'}
      <div class="vnext-field-route"><a href="${directions}" target="_blank" rel="noopener">하루 전체 Google Maps ↗</a>${Data.liveLinks.map(link => `<a href="${esc(link.url)}" target="_blank" rel="noopener">${esc(link.label)} ↗</a>`).join('')}</div>
      <ol class="vnext-mini-route">${entries.map(entry => { const status = state.itemProgress[`${day}:${entry.id}`] || 'pending'; return `<li class="is-${status}"><span>${Core.minutesToTime(entry.start)}</span><strong>${esc(entry.item.name)}</strong><em>${status === 'done' ? '완료' : status === 'skipped' ? '건너뜀' : '예정'}</em></li>`; }).join('')}</ol>
      <div class="vnext-backups"><div class="vnext-section-head is-small"><div><p>NEARBY BACKUP · DISTANCE ESTIMATE</p><h3>빈 시간·대기줄 대체</h3></div></div><div class="vnext-backup-filters"><button type="button" data-vnext-backup-min="30" class="${backupWindow === 30 ? 'is-active' : ''}">30분</button><button type="button" data-vnext-backup-min="60" class="${backupWindow === 60 ? 'is-active' : ''}">60분</button><button type="button" data-vnext-backup-min="90" class="${backupWindow === 90 ? 'is-active' : ''}">90분</button><button type="button" data-vnext-backup-indoor class="${backupIndoorOnly ? 'is-active' : ''}">실내만</button></div><div class="vnext-backup-list">${backupCandidates(day, current).map(candidate => `<article><strong>${esc(candidate.item.name)}</strong><span>${candidate.item.duration}분 · 이동 제안 ${candidate.transit}분</span><small>${candidate.item.operation?.hoursStatus === 'verified' ? '영업 확인됨' : '영업시간 확인 필요'}</small><button type="button" data-vnext-replace="${candidate.item.id}" ${fixed ? 'disabled' : ''}>현재 슬롯 교체</button></article>`).join('') || '<p class="vnext-empty">조건에 맞는 좌표 기반 후보가 없습니다.</p>'}</div></div>`;
  }

  function summaryText() {
    const lines = ['오사카 여행 · 성인 3명 · 2026.09.05–07'];
    Core.DAYS.forEach(day => {
      lines.push('', `${dayNames[day]} (${Core.DAY_DATES[day]})`);
      schedule(day).entries.forEach(entry => lines.push(`${Core.minutesToTime(entry.start)} ${entry.item.name} · ${entry.duration}분`));
    });
    if (state.wishlist.length) lines.push('', `가고 싶은 곳: ${state.wishlist.map(id => lookupItem(id)?.name).filter(Boolean).join(' · ')}`);
    lines.push('', `숙소: ${Planner.selectedHotel()?.name || '미정'}`, '월요일 13:00 오사카 출발 안전선');
    return lines.join('\n');
  }
  function offlinePack() {
    const hotel = Planner.selectedHotel();
    return {
      version: 1,
      generatedAt: new Date().toISOString(),
      note: '지도 타일은 포함하지 않습니다. 텍스트 일정과 좌표를 지도 앱 검색에 사용하세요.',
      trip: Data.trip,
      hotel: hotel ? { name: hotel.name, coords: hotel.coords || null, bookingUrl: hotel.bookingUrl || '' } : null,
      wishlist: state.wishlist.map(id => { const item = lookupItem(id); return item ? { id, name: item.name, area: item.areaLabel || item.area || '', coords: item.coords || null, official: item.operation?.official || item.official || '' } : null; }).filter(Boolean),
      days: Object.fromEntries(Core.DAYS.map(day => [day, schedule(day).entries.map(entry => ({
        id: entry.id, start: Core.minutesToTime(entry.start), end: Core.minutesToTime(entry.end),
        name: entry.item.name, area: entry.item.areaLabel || entry.item.area || '', coords: entry.item.coords || null,
        durationMinutes: entry.duration, transitToNextMinutes: entry.transit, official: entry.operation.official || ''
      }))]))
    };
  }
  async function loadHistory() {
    const target = document.querySelector('#vnext-history');
    target.innerHTML = '<p class="vnext-empty">최근 변경을 불러오는 중…</p>';
    try {
      const response = await window.OsakaLocalStore.request('api/history?limit=20', { cache: 'no-store' });
      if (!response.ok) throw new Error('history');
      historyCache = (await response.json()).history || [];
      renderHistory();
    } catch { target.innerHTML = '<p class="vnext-empty">최근 변경을 불러오지 못했습니다.</p>'; }
  }
  function renderHistory() {
    const target = document.querySelector('#vnext-history');
    if (!target) return;
    let recovery = null;
    try { recovery = JSON.parse(localStorage.getItem(Planner.sharedSync.recoveryKey) || 'null'); } catch { recovery = null; }
    target.innerHTML = `<div class="vnext-history-head"><strong>최근 변경 ${historyCache.length}개</strong><button type="button" data-vnext-history-close>닫기</button></div>${recovery ? `<aside class="vnext-recovery"><strong>동시 수정에서 보호한 내 복구본</strong><span>${new Date(recovery.savedAt).toLocaleString('ko-KR')}</span><button type="button" data-vnext-recovery-import>새 일정안으로 가져오기</button><button type="button" data-vnext-recovery-download>JSON 받기</button></aside>` : ''}<div class="vnext-history-list">${historyCache.map(entry => `<article><div><strong>r${entry.revision} · ${entry.action === 'restore' ? `r${entry.restoredFrom} 복구` : '저장'}</strong><span>${entry.updatedAt ? new Date(entry.updatedAt).toLocaleString('ko-KR') : '초기 상태'} · ${esc(entry.updatedBy)}</span></div><small>가고 싶은 곳 ${entry.summary.wishlist || 0} · 토 ${entry.summary.counts.sat} · 일 ${entry.summary.counts.sun} · 월 ${entry.summary.counts.mon} · 준비 ${entry.summary.prepDone}/${entry.summary.prepTotal}</small><button type="button" data-vnext-history-restore="${entry.revision}" ${entry.revision === Planner.sharedSync.revision ? 'disabled' : ''}>이 상태로 복구</button></article>`).join('')}</div>`;
  }

  function renderAll() {
    ensureState();
    renderParticipantSwitcher();
    renderPlanOverview();
    renderWishlist();
    renderAutoRoute();
    renderEvents();
    renderBooking();
    renderMoney();
    renderField();
    hydrateVotes();
    renderPlanMeta();
    document.querySelectorAll('[data-vnext-panel]').forEach(panel => { panel.hidden = panel.dataset.vnextPanel !== activeSubpanel; });
    document.querySelectorAll('[data-vnext-tab]').forEach(tab => tab.setAttribute('aria-selected', String(tab.dataset.vnextTab === activeSubpanel)));
  }

  document.addEventListener('osaka:before-save', syncActiveVariant);
  document.addEventListener('osaka:state-changed', queueRender);
  document.addEventListener('osaka:shared-applied', () => {
    if (!Planner.sharedSync.booted && ['sat', 'sun', 'mon'].includes(state.mapDay)) autoRouteDay = state.mapDay;
    ensureState();
    Planner.refreshAll();
    queueRender();
  });
  document.addEventListener('osaka:planner-render', () => { hydrateVotes(); renderPlanMeta(); });
  document.addEventListener('osaka:item-added', event => ensureAutoTask(event.detail.id));
  document.addEventListener('osaka:shared-conflict', () => { if (historyCache.length) renderHistory(); });

  document.addEventListener('click', async event => {
    const tab = event.target.closest('[data-vnext-tab]');
    if (tab) { activeSubpanel = tab.dataset.vnextTab; renderAll(); return; }
    const variant = event.target.closest('[data-vnext-variant]');
    if (variant) { switchVariant(variant.dataset.vnextVariant); return; }
    if (event.target.closest('[data-vnext-clone]')) { cloneVariant(); return; }
    const vote = event.target.closest('[data-vnext-vote-cycle]');
    if (vote) {
      const id = vote.dataset.vnextVoteCycle;
      const current = state.votes[id]?.[currentParticipantId] || 'neutral';
      const next = current === 'neutral' ? 'want' : current === 'want' ? 'skip' : 'neutral';
      if (!state.votes[id]) state.votes[id] = {};
      state.votes[id][currentParticipantId] = next;
      saveAndRender(`${participantName(currentParticipantId)} · ${voteLabels[next]}`);
      return;
    }
    const consensus = event.target.closest('[data-vnext-consensus]');
    if (consensus) { sortVisibleByConsensus(consensus.dataset.vnextConsensus); return; }
    const page = event.target.closest('[data-vnext-event-page]');
    if (page) { eventPage = Number(page.dataset.vnextEventPage); renderEvents(); return; }
    const wishlistPageButton = event.target.closest('[data-vnext-wishlist-page]');
    if (wishlistPageButton) { wishlistPage = Number(wishlistPageButton.dataset.vnextWishlistPage); renderWishlist(); return; }
    const priorityFilter = event.target.closest('[data-vnext-priority-filter]');
    if (priorityFilter) { wishlistPriorityFilter = priorityFilter.dataset.vnextPriorityFilter; wishlistPage = 0; renderWishlist(); return; }
    if (event.target.closest('[data-vnext-custom-add]')) {
      Planner.openCustomEntryDialog?.('place', '');
      return;
    }
    if (event.target.closest('[data-vnext-auto-open]')) {
      autoRoutePreview = buildAutoRoutePreview();
      if (!autoRoutePreview.sourceCount) { autoRoutePreview = null; notify('먼저 보관함에서 필수 장소를 지정하세요.'); return; }
      renderAutoRoute();
      return;
    }
    const autoMapDay = event.target.closest('[data-vnext-auto-map-day]');
    if (autoMapDay) { autoRouteDay = autoMapDay.dataset.vnextAutoMapDay; initAutoRouteMap(true); return; }
    if (event.target.closest('[data-vnext-auto-fill]')) { autoRouteIncludeFill = !autoRouteIncludeFill; autoRoutePreview = buildAutoRoutePreview(); renderAutoRoute(); return; }
    if (event.target.closest('[data-vnext-auto-play]')) { autoRouteStep = 0; playAutoRoute(0, true); return; }
    if (event.target.closest('[data-vnext-auto-next]')) { playAutoRoute(autoRouteStep, false); return; }
    if (event.target.closest('[data-vnext-auto-zoom-out]')) { stopAutoRoutePlayback(false); autoRouteMap?.stop(); autoRouteMap?.zoomOut(); return; }
    if (event.target.closest('[data-vnext-auto-zoom-in]')) { stopAutoRoutePlayback(false); autoRouteMap?.stop(); autoRouteMap?.zoomIn(); return; }
    if (event.target.closest('[data-vnext-auto-fit]')) { stopAutoRoutePlayback(false); fitAutoRouteMap(); return; }
    const autoLeg = event.target.closest('[data-vnext-auto-leg]');
    if (autoLeg) { playAutoRoute(Number(autoLeg.dataset.vnextAutoLeg), false); return; }
    if (event.target.closest('[data-vnext-auto-cancel]')) { autoRoutePreview = null; renderAutoRoute(); return; }
    if (event.target.closest('[data-vnext-auto-apply]')) {
      const latest = buildAutoRoutePreview();
      const result = Planner.replaceWithAutoRoute(latest);
      if (result.applied) {
        autoRoutePreview = null;
        notify(`필수 ${result.placed}곳을 배치하고 동선 주변 ${result.filled}곳을 보강했습니다.${result.unplaced ? ` ${result.unplaced}곳은 직접 확인하세요.` : ''}`);
        queueRender();
      }
      return;
    }
    const wishlistDay = event.target.closest('[data-vnext-wishlist-day]');
    if (wishlistDay) { Planner.toggleDayAssignment(wishlistDay.dataset.vnextWishlistDay, wishlistDay.dataset.vnextWishlistId); queueRender(); return; }
    const wishlistPriority = event.target.closest('[data-vnext-wishlist-priority]');
    if (wishlistPriority) { Planner.setWishlistPriority(wishlistPriority.dataset.vnextWishlistId, wishlistPriority.dataset.vnextWishlistPriority); queueRender(); return; }
    const wishlistRemove = event.target.closest('[data-vnext-wishlist-remove]');
    if (wishlistRemove) { Planner.removeFromWishlist(wishlistRemove.dataset.vnextWishlistRemove); queueRender(); return; }
    const eventAdd = event.target.closest('[data-vnext-event-add]');
    if (eventAdd) {
      const id = eventAdd.dataset.vnextEventAdd;
      const targetId = id === 'usj' ? 'usj' : id;
      ensureAutoTask(targetId);
      Planner.addToDay(eventAdd.dataset.vnextDay, targetId);
      queueRender();
      return;
    }
    const taskToggle = event.target.closest('[data-vnext-task-toggle]');
    if (taskToggle) { const task = state.prepTasks.find(item => item.id === taskToggle.dataset.vnextTaskToggle); if (task) { task.status = taskToggle.checked ? 'done' : 'todo'; saveAndRender(); } return; }
    const taskDelete = event.target.closest('[data-vnext-task-delete]');
    if (taskDelete) { state.prepTasks = state.prepTasks.filter(task => task.id !== taskDelete.dataset.vnextTaskDelete); saveAndRender(); return; }
    const phrase = event.target.closest('[data-vnext-copy-phrase]');
    if (phrase) { await navigator.clipboard.writeText(phrase.dataset.vnextCopyPhrase).catch(() => {}); notify('일본어 문장을 복사했습니다.'); return; }
    const expenseDelete = event.target.closest('[data-vnext-expense-delete]');
    if (expenseDelete) { state.expenses = state.expenses.filter(expense => expense.id !== expenseDelete.dataset.vnextExpenseDelete); saveAndRender(); return; }
    const applyPass = event.target.closest('[data-vnext-apply-pass]');
    if (applyPass) {
      const amount = Math.max(0, Number(applyPass.dataset.vnextApplyPass) || 0);
      state.plannedCosts.passJpy = amount;
      const isAmazing = amount === Number(Data.discountRules?.amazingPass?.pricePerPerson || 0) * 3;
      const rule = isAmazing ? Data.discountRules?.amazingPass : Data.discountRules?.enjoyEco;
      const taskId = isAmazing ? 'task-amazing-pass' : 'task-enjoy-eco';
      if (!state.prepTasks.some(task => task.id === taskId)) state.prepTasks.push({ id: taskId, title: `${rule?.label || '교통·관광 패스'} · 성인 3명 구매·조건 확인`, status: 'todo', assigneeId: '', due: '2026-09-05', itemId: '', link: rule?.official || '', auto: true });
      saveAndRender('선택한 3인 패스 비용과 준비 업무를 반영했습니다.');
      return;
    }
    const fieldDay = event.target.closest('[data-vnext-field-day]');
    if (fieldDay) { state.fieldDay = fieldDay.dataset.vnextFieldDay; saveAndRender(); return; }
    const fieldAction = event.target.closest('[data-vnext-field-action]');
    if (fieldAction) { const current = fieldCurrent(state.fieldDay).current; if (current) { state.itemProgress[`${state.fieldDay}:${current.id}`] = fieldAction.dataset.vnextFieldAction === 'done' ? 'done' : 'skipped'; saveAndRender(); } return; }
    const delay = event.target.closest('[data-vnext-delay]');
    if (delay) { state.fieldDelays[state.fieldDay] = Math.min(240, Number(state.fieldDelays[state.fieldDay] || 0) + Number(delay.dataset.vnextDelay)); saveAndRender(`현장 지연 +${delay.dataset.vnextDelay}분`); return; }
    const backupMin = event.target.closest('[data-vnext-backup-min]');
    if (backupMin) { backupWindow = Number(backupMin.dataset.vnextBackupMin); renderField(); return; }
    if (event.target.closest('[data-vnext-backup-indoor]')) { backupIndoorOnly = !backupIndoorOnly; renderField(); return; }
    const replace = event.target.closest('[data-vnext-replace]');
    if (replace) { const { current } = fieldCurrent(state.fieldDay); if (current) { state.plans[state.fieldDay][current.index] = replace.dataset.vnextReplace; delete state.itemProgress[`${state.fieldDay}:${current.id}`]; Planner.refreshAll(); saveAndRender('현재 슬롯을 대체 후보로 바꿨습니다.'); } return; }
    const exportButton = event.target.closest('[data-vnext-export]');
    if (exportButton) {
      if (exportButton.dataset.vnextExport === 'copy') { await navigator.clipboard.writeText(summaryText()).catch(() => {}); notify('일정 요약을 복사했습니다.'); }
      if (exportButton.dataset.vnextExport === 'ics') download('osaka-2026-09-05.ics', 'text/calendar;charset=utf-8', Core.toIcs(state, lookupItem, Data, Planner.suggestedTransit));
      if (exportButton.dataset.vnextExport === 'offline') download('osaka-offline-pack.json', 'application/json;charset=utf-8', JSON.stringify(offlinePack(), null, 2));
      if (exportButton.dataset.vnextExport === 'json') download('osaka-plan-backup.json', 'application/json;charset=utf-8', JSON.stringify({ exportedAt: new Date().toISOString(), state }, null, 2));
      if (exportButton.dataset.vnextExport === 'print') window.print();
      return;
    }
    if (event.target.closest('[data-vnext-undo]')) {
      try {
        const response = await window.OsakaLocalStore.request('api/history?limit=2', { cache: 'no-store' });
        const list = response.ok ? (await response.json()).history || [] : [];
        const previous = list.find(entry => entry.revision < Planner.sharedSync.revision);
        if (!previous) return notify('되돌릴 이전 변경이 없습니다.');
        const restored = await window.OsakaLocalStore.request('api/history/restore', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ targetRevision: previous.revision, baseRevision: Planner.sharedSync.revision, clientId: Planner.sharedSync.clientId }) });
        const payload = await restored.json().catch(() => ({}));
        if (!restored.ok) return notify(restored.status === 409 ? '이 브라우저의 다른 탭에서 먼저 수정했습니다. 최신 상태에서 다시 눌러주세요.' : '되돌리지 못했습니다.');
        Planner.applySharedRecord(payload);
        notify(`r${previous.revision} 상태를 새 변경으로 되돌렸습니다.`);
      } catch { notify('브라우저 저장 공간을 확인하세요.'); }
      return;
    }
    if (event.target.closest('[data-vnext-history-load]')) { await loadHistory(); return; }
    if (event.target.closest('[data-vnext-history-close]')) { document.querySelector('#vnext-history').innerHTML = ''; return; }
    const restore = event.target.closest('[data-vnext-history-restore]');
    if (restore) {
      const targetRevision = Number(restore.dataset.vnextHistoryRestore);
      if (!confirm(`내 일정을 r${targetRevision} 상태로 복구할까요? 현재 상태도 최근 변경에 남습니다.`)) return;
      const response = await window.OsakaLocalStore.request('api/history/restore', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ targetRevision, baseRevision: Planner.sharedSync.revision, clientId: Planner.sharedSync.clientId }) });
      const payload = await response.json().catch(() => ({}));
      if (response.ok) { Planner.applySharedRecord(payload); notify(`r${targetRevision} 상태를 새 리비전으로 복구했습니다.`); await loadHistory(); }
      else notify(response.status === 409 ? '이 브라우저의 다른 탭에서 먼저 수정했습니다. 최신 상태를 확인하세요.' : '복구하지 못했습니다.');
      return;
    }
    if (event.target.closest('[data-vnext-recovery-download]')) {
      const recovery = localStorage.getItem(Planner.sharedSync.recoveryKey); if (recovery) download('osaka-conflict-recovery.json', 'application/json;charset=utf-8', recovery); return;
    }
    if (event.target.closest('[data-vnext-recovery-import]')) {
      let recovery; try { recovery = JSON.parse(localStorage.getItem(Planner.sharedSync.recoveryKey) || 'null'); } catch { recovery = null; }
      if (!recovery?.state) return notify('복구본을 읽지 못했습니다.');
      if (state.variants.length >= 3) return notify('일정안이 3개라 JSON으로 먼저 내려받아 주세요.');
      const recovered = recovery.state;
      state.variants.push({ id: `recovery-${Date.now().toString(36)}`.slice(0, 80), label: '충돌 복구안', plans: clone(recovered.plans), starts: clone(recovered.starts), transit: clone(recovered.transit), itemStarts: clone(recovered.itemStarts), itemDurations: clone(recovered.itemDurations) });
      localStorage.removeItem(Planner.sharedSync.recoveryKey);
      saveAndRender('복구본을 새 일정안으로 보존했습니다.');
      renderHistory();
    }
  });

  document.addEventListener('change', event => {
    if (event.target.id === 'vnext-participant') { currentParticipantId = event.target.value; localStorage.setItem(participantStorageKey, currentParticipantId); queueRender(); return; }
    if (event.target.hasAttribute('data-vnext-meal-slot')) {
      if (Planner.setMealSlot(event.target.dataset.vnextMealSlot, event.target.value)) {
        if (autoRoutePreview) autoRoutePreview = buildAutoRoutePreview();
        queueRender();
      }
      return;
    }
    const idFor = prefix => event.target.getAttribute(prefix);
    const statusId = idFor('data-vnext-reservation-status');
    if (statusId) { const reservation = state.reservations[statusId] || defaultReservation(statusId); reservation.status = event.target.value; state.reservations[statusId] = reservation; if (reservation.status !== 'none') ensureAutoTask(statusId); saveAndRender(); return; }
    const assigneeId = idFor('data-vnext-reservation-assignee');
    if (assigneeId) { const reservation = state.reservations[assigneeId] || defaultReservation(assigneeId); reservation.assigneeId = event.target.value; state.reservations[assigneeId] = reservation; saveAndRender(); return; }
    const timeId = idFor('data-vnext-reservation-time');
    if (timeId) { const reservation = state.reservations[timeId] || defaultReservation(timeId); reservation.time = event.target.value; state.reservations[timeId] = reservation; saveAndRender(); return; }
    const cancelId = idFor('data-vnext-reservation-cancel');
    if (cancelId) { const reservation = state.reservations[cancelId] || defaultReservation(cancelId); reservation.cancelBy = event.target.value; state.reservations[cancelId] = reservation; saveAndRender(); return; }
    const partyId = idFor('data-vnext-reservation-party');
    if (partyId) { const reservation = state.reservations[partyId] || defaultReservation(partyId); reservation.partyConfirmed = event.target.checked; reservation.partySize = 3; state.reservations[partyId] = reservation; saveAndRender(); return; }
    const participantId = idFor('data-vnext-participant-name');
    if (participantId) { const participant = state.participants.find(item => item.id === participantId); if (participant) { participant.name = event.target.value.trim().slice(0, 24) || participant.name; saveAndRender(); } return; }
    const planned = idFor('data-vnext-planned');
    if (planned) { state.plannedCosts[planned] = Math.max(0, Math.round(Number(event.target.value) || 0)); saveAndRender(); return; }
    if (event.target.hasAttribute('data-vnext-rate')) { state.exchangeRateKrwPerJpy = Math.max(1, Math.min(100, Number(event.target.value) || 10)); saveAndRender(); }
  });

  document.addEventListener('submit', event => {
    if (event.target.id === 'vnext-task-form') {
      event.preventDefault();
      const form = new FormData(event.target);
      state.prepTasks.push({ id: `task-${Date.now().toString(36)}`, title: String(form.get('title') || '').trim().slice(0, 100), status: 'todo', assigneeId: String(form.get('assignee') || ''), due: String(form.get('due') || ''), itemId: '', link: '', auto: false });
      saveAndRender('준비 업무를 추가했습니다.');
    }
    if (event.target.id === 'vnext-expense-form') {
      event.preventDefault();
      const form = new FormData(event.target);
      const splitWith = form.getAll('split').map(String);
      if (!splitWith.length) return notify('분담할 사람을 한 명 이상 고르세요.');
      state.expenses.push({ id: `expense-${Date.now().toString(36)}`, title: String(form.get('title') || '').trim().slice(0, 100), category: 'other', amountJpy: Math.max(0, Math.round(Number(form.get('amount')) || 0)), payerId: String(form.get('payer') || 'p1'), splitWith, actual: true, createdAt: new Date().toISOString() });
      saveAndRender('실제 지출을 추가했습니다.');
    }
  });

  document.addEventListener('osaka:curated-day', event => {
    if (!dayNames[event.detail?.day]) return;
    autoRouteDay = event.detail.day;
    autoRoutePreview = null;
    renderAutoRoute();
  });
  injectWorkbench();
  ensureState();
  renderAll();
  const itineraryVisibilityTarget = document.querySelector('#itinerary-v11');
  if (itineraryVisibilityTarget) {
    new MutationObserver(() => {
      if (itineraryVisibilityTarget.hidden) { stopAutoRoutePlayback(true); return; }
      if (activeSubpanel !== 'plan' || autoRouteMap || !document.querySelector('#vnext-auto-map-canvas')) return;
      const autoplay = !currentRouteAutoplayDone;
      currentRouteAutoplayDone = true;
      window.requestAnimationFrame(() => initAutoRouteMap(autoplay));
    }).observe(itineraryVisibilityTarget, { attributes: true, attributeFilter: ['hidden'] });
  }
  window.setInterval(() => { if (activeSubpanel === 'field' && !document.hidden) renderField(); }, 30_000);
  if ('serviceWorker' in navigator && location.protocol !== 'file:') navigator.serviceWorker.register('sw.js').catch(() => {});
})();
