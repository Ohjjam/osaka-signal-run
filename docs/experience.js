(function () {
  'use strict';

  const DATA = window.OSAKA_EXPERIENCE_DATA;
  const CORE = window.OsakaGuideCore;
  const STORAGE_KEY = 'osakaGuideStateV2';
  const SCHEMA_VERSION = 2;
  const CHECKLIST_IDS = ['qr', 'ic', 'cash', 'heat', 'bags', 'terminal'];
  const dayLabels = { sat: '토요일', sun: '일요일', mon: '월요일' };
  const portalCopy = {
    sat: '토요일 15:00 KIX 도착',
    sun: '일요일 종일 일정',
    mon: '월요일 16:00 KIX 출발'
  };

  const defaults = () => ({
    schemaVersion: SCHEMA_VERSION,
    preset: 'classic',
    pace: 'balanced',
    weather: 'clear',
    startTime: 8,
    saved: [],
    completed: [],
    hotelId: 'hiyori',
    party: 2,
    rooms: 1,
    nights: 2,
    hotelActual: null,
    foodQuantities: { ajinoya: 1, wanaka: 1, daruma: 0, marufuku: 1, hanadako: 0, rikuro: 1 },
    actualOverrides: { transit: null, attractions: null, food: null, goods: null },
    checklist: Object.fromEntries(CHECKLIST_IDS.map(id => [id, false])),
    audioMuted: true
  });

  const runtimeState = {
    mapDay: 'sat',
    mapMode: 'tiles',
    tileErrors: 0,
    focusedPlaceId: null,
    portalDay: 'sat',
    portalDragging: false,
    portalDragStart: 0,
    portalStartIndex: 0,
    audioPlaying: false,
    persistenceEnabled: true,
    persistenceNotice: '',
    lastMapSnapshot: null
  };

  function safeParse(value, fallback = null) {
    try { return JSON.parse(value); } catch { return fallback; }
  }

  function stableTextHash(value) {
    let hash = 5381;
    for (let index = 0; index < value.length; index += 1) hash = ((hash << 5) + hash) ^ value.charCodeAt(index);
    return (hash >>> 0).toString(16);
  }

  function finiteInt(value, fallback, min, max) {
    const number = Number(value);
    return Number.isFinite(number) ? Math.max(min, Math.min(max, Math.round(number))) : fallback;
  }

  function safeStringArray(value) {
    return Array.isArray(value) ? [...new Set(value.filter(item => typeof item === 'string'))] : [];
  }

  function storageGet(key) {
    try { return localStorage.getItem(key); } catch {
      runtimeState.persistenceEnabled = false;
      runtimeState.persistenceNotice = '브라우저 저장소를 읽을 수 없어 이번 탭의 기본값으로 계속합니다.';
      return null;
    }
  }

  function sessionGet(key) {
    try { return sessionStorage.getItem(key); } catch { return null; }
  }

  function sessionSet(key, value) {
    try { sessionStorage.setItem(key, value); return true; } catch { return false; }
  }

  function readLegacyChecklist() {
    return Object.fromEntries(CHECKLIST_IDS.map(id => [id, storageGet(`osakaCheck:${id}`) === 'true']));
  }

  function normalizePersisted(input) {
    const base = defaults();
    const hotelIds = new Set(DATA.hotels.map(hotel => hotel.id));
    const foodIds = new Set(DATA.foods.map(food => food.id));
    const result = {
      ...base,
      preset: CORE.routeMeta[input.preset] ? input.preset : base.preset,
      pace: ['slow', 'balanced', 'full'].includes(input.pace) ? input.pace : base.pace,
      weather: ['clear', 'heat', 'rain'].includes(input.weather) ? input.weather : base.weather,
      startTime: [8, 9, 10].includes(Number(input.startTime)) ? Number(input.startTime) : base.startTime,
      saved: safeStringArray(input.saved).filter(id => CORE.places[id]),
      completed: safeStringArray(input.completed).filter(id => CORE.places[id]),
      hotelId: hotelIds.has(input.hotelId) ? input.hotelId : base.hotelId,
      party: finiteInt(input.party, base.party, 1, 8),
      rooms: finiteInt(input.rooms, base.rooms, 1, 4),
      nights: finiteInt(input.nights, base.nights, 1, 7),
      hotelActual: input.hotelActual !== '' && input.hotelActual !== null && Number.isFinite(Number(input.hotelActual)) && Number(input.hotelActual) >= 0 ? Number(input.hotelActual) : null,
      foodQuantities: { ...base.foodQuantities },
      actualOverrides: { ...base.actualOverrides },
      checklist: { ...base.checklist },
      audioMuted: input.audioMuted !== false
    };
    if (input.foodQuantities && typeof input.foodQuantities === 'object') {
      Object.entries(input.foodQuantities).forEach(([id, value]) => {
        if (foodIds.has(id)) result.foodQuantities[id] = finiteInt(value, 0, 0, 12);
      });
    }
    if (input.actualOverrides && typeof input.actualOverrides === 'object') {
      Object.keys(result.actualOverrides).forEach(category => {
        const value = input.actualOverrides[category];
        result.actualOverrides[category] = Number.isFinite(Number(value)) && value !== '' && value !== null && Number(value) >= 0 ? Number(value) : null;
      });
    }
    if (input.checklist && typeof input.checklist === 'object') {
      CHECKLIST_IDS.forEach(id => { result.checklist[id] = input.checklist[id] === true; });
    }
    return result;
  }

  function loadState() {
    const raw = storageGet(STORAGE_KEY);
    if (raw) {
      const parsed = safeParse(raw);
      if (!parsed || typeof parsed !== 'object') {
        const recoveryKey = `${STORAGE_KEY}:recovery:${stableTextHash(raw)}`;
        try { if (localStorage.getItem(recoveryKey) === null) localStorage.setItem(recoveryKey, raw); } catch { /* storage may be disabled */ }
        runtimeState.persistenceNotice = '손상된 v2 저장값은 복구 사본으로 보존하고 안전 기본값을 열었습니다.';
        return defaults();
      }
      if (Number(parsed.schemaVersion) > SCHEMA_VERSION) {
        runtimeState.persistenceEnabled = false;
        runtimeState.persistenceNotice = `더 높은 저장 형식(v${parsed.schemaVersion})을 발견해 원본을 보존하고 이번 탭의 저장을 중지했습니다.`;
        return defaults();
      }
      const needsChecklistMigration = !parsed.checklist || typeof parsed.checklist !== 'object';
      const normalized = normalizePersisted(needsChecklistMigration ? { ...parsed, checklist: readLegacyChecklist() } : parsed);
      if (needsChecklistMigration) {
        try { localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized)); } catch { runtimeState.persistenceEnabled = false; }
      }
      return normalized;
    }

    const migrated = defaults();
    migrated.saved = safeStringArray(safeParse(storageGet('osakaSaved') || '[]', []));
    migrated.completed = safeStringArray(safeParse(storageGet('osakaCompleted') || '[]', []));
    migrated.checklist = readLegacyChecklist();
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(migrated)); } catch { runtimeState.persistenceEnabled = false; }
    return normalizePersisted(migrated);
  }

  const travelState = loadState();

  function saveState() {
    if (!runtimeState.persistenceEnabled) return false;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(travelState));
      return true;
    } catch {
      runtimeState.persistenceEnabled = false;
      runtimeState.persistenceNotice = '브라우저 저장소를 사용할 수 없어 이번 탭에서만 변경됩니다.';
      renderPersistenceNotice();
      return false;
    }
  }

  function syncCoreState() {
    travelState.saved = [...CORE.state.saved];
    travelState.completed = [...CORE.state.completed];
    saveState();
  }

  function applyPersistedToCore() {
    CORE.state.preset = travelState.preset;
    CORE.state.pace = travelState.pace;
    CORE.state.weather = travelState.weather;
    CORE.state.startTime = travelState.startTime;
    CORE.state.saved = new Set(travelState.saved.filter(id => CORE.places[id]));
    CORE.state.completed = new Set(travelState.completed.filter(id => CORE.places[id]));
    const preset = document.querySelector(`input[name="preset"][value="${travelState.preset}"]`);
    if (preset) preset.checked = true;
    document.querySelector('#pace').value = travelState.pace;
    document.querySelector('#weather').value = travelState.weather;
    document.querySelector('#start-time').value = String(travelState.startTime);
    document.querySelector('#party-size').value = String(travelState.party);
    document.querySelector('#room-count').value = String(travelState.rooms);
    document.querySelector('#night-count').value = String(travelState.nights);
    document.querySelector('#hotel-actual').value = travelState.hotelActual ?? '';
    document.querySelectorAll('[data-actual-category]').forEach(input => {
      input.value = travelState.actualOverrides[input.dataset.actualCategory] ?? '';
    });
    document.querySelectorAll('[data-check]').forEach(input => {
      input.checked = travelState.checklist[input.dataset.check] === true;
    });
  }

  function renderPersistenceNotice() {
    let notice = document.querySelector('#persistence-notice');
    if (!runtimeState.persistenceNotice) {
      notice?.remove();
      return;
    }
    if (!notice) {
      notice = document.createElement('p');
      notice.id = 'persistence-notice';
      notice.className = 'budget-note';
      document.querySelector('#trip-desk .trip-parameters').after(notice);
    }
    notice.textContent = runtimeState.persistenceNotice;
  }

  const yen = value => `¥${Math.round(value || 0).toLocaleString('ko-KR')}`;
  const range = model => `${yen(model.amountMin)}—${yen(model.amountMax)}`;
  const selectedHotel = () => DATA.hotels.find(hotel => hotel.id === travelState.hotelId) || DATA.hotels[0];

  function updateCoreHotel() {
    const hotel = selectedHotel();
    const place = CORE.places.hotel;
    place.name = `${hotel.name} 체크인`;
    place.jp = hotel.jp;
    place.price = `${range(hotel.price)} / 1실 1박`;
    place.short = `${hotel.station}. 짐을 내려놓고 난바의 밤을 시작한다.`;
    place.story = `${hotel.name}을 베이스로 선택했다. ${hotel.room}. 현재 일정 시각은 유지하고 실제 이동은 난카이 난바에서 약 ${hotel.transferMinutes}분을 더해 본다.`;
    place.tip = `${hotel.checkIn} · ${hotel.luggage}. 체크인할 때 월요일 짐 회수 시간을 확인한다.`;
    place.backup = '보관이 불가하거나 만실이면 난카이 난바 n・e・s・t 또는 역 코인 로커를 사용한다.';
    place.map = hotel.map;
    place.official = hotel.official;
    CORE.places.luggage.name = `${hotel.name} 짐 회수`;
    CORE.places.luggage.jp = hotel.jp;
    CORE.places.luggage.map = hotel.map;
    CORE.places.luggage.official = hotel.faq;
  }

  function renderHotels() {
    const grid = document.querySelector('#hotel-grid');
    grid.innerHTML = DATA.hotels.map((hotel, index) => `
      <button class="hotel-card" type="button" role="radio" aria-checked="${hotel.id === travelState.hotelId}" data-hotel-id="${hotel.id}" style="--hotel-image:url('${hotel.image}')">
        <span>${String(index + 1).padStart(2, '0')} · ${hotel.transferMinutes} MIN</span>
        <div class="hotel-card-copy"><h4>${hotel.name}</h4><small>${hotel.jp}</small><div class="hotel-rate"><strong>${range(hotel.price)}</strong><em>1실·1박<br>참고 범위</em></div></div>
      </button>`).join('');
    renderHotelImpact();
  }

  function renderHotelImpact() {
    const hotel = selectedHotel();
    const impact = document.querySelector('#hotel-impact');
    impact.innerHTML = `
      <header><div><span>SELECTED BASE</span><h4>${hotel.name}</h4></div><p>${hotel.room}</p></header>
      <ul>
        <li><strong>토요일</strong>${hotel.station}<br>${hotel.checkIn}</li>
        <li><strong>매일 복귀</strong>${hotel.airport}<br>기준 숙소로 지도 고정</li>
        <li><strong>월요일</strong>${hotel.luggage}<br>출국 계산 +${hotel.transferMinutes}분</li>
      </ul>
      <a href="${hotel.official}" target="_blank" rel="noopener">공식 예약/정보 ↗</a> · <a href="${hotel.faq}" target="_blank" rel="noopener">짐·체크인 확인 ↗</a> · <a href="${hotel.map}" target="_blank" rel="noopener">Google 지도 ↗</a>`;
  }

  function renderFoods() {
    const target = document.querySelector('#food-builder');
    target.innerHTML = DATA.foods.map(food => {
      const quantity = travelState.foodQuantities[food.id] || 0;
      return `<article class="food-pick" data-food-pick="${food.id}">
        <img src="${food.image}" alt="${food.name} 관련 오사카 분위기 이미지">
        <div><h4>${food.name}</h4><p>${food.jp} · ${food.serving}</p><a class="food-price" href="${food.price.sourceURL}" target="_blank" rel="noopener">${range(food.price)} / ${food.price.costUnit === 'per-person' ? '인' : '단위'} ↗</a></div>
        <div class="quantity-control" aria-label="${food.name} 수량"><button type="button" data-food-step="-1" aria-label="${food.name} 줄이기">−</button><output>${quantity}</output><button type="button" data-food-step="1" aria-label="${food.name} 늘리기">+</button></div>
      </article>`;
    }).join('');
  }

  function activeRouteIdsAllDays() {
    return [...new Set(['sat', 'sun', 'mon'].flatMap(day => CORE.routeFor(day).map(([, id]) => id)))];
  }

  function sumModels(entries, multiplier = 1) {
    return entries.reduce((total, entry) => ({
      min: total.min + (entry.model.amountMin || 0) * entry.quantity * multiplier,
      typical: total.typical + (entry.model.amountTypical || 0) * entry.quantity * multiplier,
      max: total.max + (entry.model.amountMax || 0) * entry.quantity * multiplier
    }), { min: 0, typical: 0, max: 0 });
  }

  function getBudgetSnapshot() {
    const hotel = selectedHotel();
    const lodging = {
      min: hotel.price.amountMin * travelState.rooms * travelState.nights,
      typical: hotel.price.amountTypical * travelState.rooms * travelState.nights,
      max: hotel.price.amountMax * travelState.rooms * travelState.nights
    };
    const routeIds = activeRouteIdsAllDays();
    const attractionsIds = new Set(['castle', 'sky', 'tsutenkaku', 'kaiyukan', 'tempozan', 'usj']);
    const attractionEntries = routeIds.filter(id => attractionsIds.has(id)).map(id => ({ model: DATA.placePrices[id], quantity: 1 }));
    const attractions = sumModels(attractionEntries, travelState.party);
    const rapitEntries = routeIds.filter(id => id === 'rapit' || id === 'rapitOut').map(id => ({ model: DATA.placePrices[id], quantity: 1 }));
    const transit = sumModels(rapitEntries, travelState.party);
    transit.min += 1600 * travelState.party;
    transit.typical += 2300 * travelState.party;
    transit.max += 3600 * travelState.party;
    const foodEntries = DATA.foods.map(food => ({
      model: food.price,
      quantity: (travelState.foodQuantities[food.id] || 0) * (food.price.costUnit === 'per-person' ? travelState.party : 1)
    }));
    const food = sumModels(foodEntries);
    const goods = { min: 0, typical: 0, max: 0 };
    const categories = { lodging, transit, attractions, food, goods };
    const totals = Object.values(categories).reduce((sum, item) => ({ min: sum.min + item.min, typical: sum.typical + item.typical, max: sum.max + item.max }), { min: 0, typical: 0, max: 0 });
    const actual = {
      lodging: travelState.hotelActual ?? lodging.typical,
      transit: travelState.actualOverrides.transit ?? transit.typical,
      attractions: travelState.actualOverrides.attractions ?? attractions.typical,
      food: travelState.actualOverrides.food ?? food.typical,
      goods: travelState.actualOverrides.goods ?? 0
    };
    const actualTotal = Object.values(actual).reduce((sum, value) => sum + value, 0);
    return { categories, totals, actual, actualTotal, routeIds, hotelId: hotel.id, party: travelState.party, rooms: travelState.rooms, nights: travelState.nights };
  }

  function renderBudget() {
    const snapshot = getBudgetSnapshot();
    const labels = { lodging: '숙소', transit: '교통', attractions: '관광', food: '음식', goods: '굿즈' };
    document.querySelector('#budget-typical').textContent = yen(snapshot.totals.typical);
    document.querySelector('#budget-range').textContent = `${yen(snapshot.totals.min)}—${yen(snapshot.totals.max)}`;
    document.querySelector('#budget-lines').innerHTML = Object.entries(snapshot.categories).map(([key, value]) => `
      <div class="budget-line"><span>${labels[key]}</span><strong>${yen(value.typical)}</strong><small>${yen(value.min)}—${yen(value.max)}</small></div>`).join('');
    document.querySelector('#budget-actual-total').textContent = yen(snapshot.actualTotal);
    document.querySelector('#budget-note').textContent = `항공권 제외 · ${snapshot.party}명 / ${snapshot.rooms}실 / ${snapshot.nights}박. 숙소는 1실 1박, 음식은 카드에 적힌 인분·판·세트 단위입니다. 쇼핑은 실제 입력 전 0엔입니다.`;
  }

  let map = null;
  let tileLayer = null;
  let routeLayer = null;
  const markerById = new Map();

  function coordinateFor(id) {
    if (id === 'hotel' || id === 'luggage') return selectedHotel().coords;
    return DATA.coordinates[id] || null;
  }

  function mapItems() {
    const route = CORE.routeFor(runtimeState.mapDay);
    const items = route.map(([time, id], index) => ({ id, time, type: id === 'hotel' || id === 'luggage' ? 'hotel' : 'route', order: index + 1, coords: coordinateFor(id) }));
    if (!items.some(item => item.type === 'hotel')) items.push({ id: 'hotel', time: 'BASE', type: 'hotel', order: 'H', coords: selectedHotel().coords });
    DATA.foods.forEach(food => {
      if ((travelState.foodQuantities[food.id] || 0) > 0 && !items.some(item => item.id === food.placeId)) {
        items.push({ id: food.placeId, time: 'TASTE', type: 'food', order: 'F', coords: coordinateFor(food.placeId) });
      }
    });
    return { route, items };
  }

  function placeLabel(item) {
    if (item.id === 'hotel') return selectedHotel().name;
    if (item.id === 'luggage') return `${selectedHotel().name} 짐 회수`;
    return CORE.places[item.id]?.name || item.id;
  }

  function showFallback(reason) {
    runtimeState.mapMode = 'fallback';
    if (map) document.querySelector('#live-map').hidden = true;
    document.querySelector('#fallback-map').hidden = false;
    document.querySelector('#map-mode-toggle').textContent = 'OSM 지도 다시 시도';
    document.querySelector('#map-status').textContent = reason || '폴백 지도';
    renderFallbackMap();
  }

  function showTiles() {
    if (!map || location.protocol === 'file:') {
      showFallback(location.protocol === 'file:' ? 'file:// 폴백' : '지도 엔진 없음');
      return;
    }
    runtimeState.mapMode = 'tiles';
    runtimeState.tileErrors = 0;
    document.querySelector('#live-map').hidden = false;
    document.querySelector('#fallback-map').hidden = true;
    document.querySelector('#map-mode-toggle').textContent = '폴백 지도 보기';
    document.querySelector('#map-status').textContent = 'OSM 연결됨';
    setTimeout(() => map.invalidateSize(), 0);
  }

  function initMap() {
    if (!window.L || location.protocol === 'file:') {
      showFallback(location.protocol === 'file:' ? 'file:// 폴백' : '지도 라이브러리 실패');
      return;
    }
    map = L.map('live-map', { keyboard: true, scrollWheelZoom: true, zoomControl: true }).setView([34.675, 135.50], 12);
    const updateMapStatus = () => {
      if (runtimeState.mapMode !== 'tiles') return;
      const center = map.getCenter();
      document.querySelector('#map-status').textContent = `OSM z${map.getZoom()} · ${center.lat.toFixed(2)}, ${center.lng.toFixed(2)}`;
    };
    map.on('moveend zoomend', updateMapStatus);
    tileLayer = L.tileLayer(DATA.map.tileURL, { attribution: DATA.map.attribution, maxZoom: 19, crossOrigin: true });
    tileLayer.once('load', () => {
      if (runtimeState.mapMode === 'tiles') updateMapStatus();
    });
    tileLayer.on('tileerror', () => {
      runtimeState.tileErrors += 1;
      if (runtimeState.tileErrors >= 3 && runtimeState.mapMode === 'tiles') showFallback('타일 실패 · 폴백');
    });
    tileLayer.addTo(map);
    routeLayer = L.featureGroup().addTo(map);
    document.querySelector('#map-status').textContent = 'OSM 불러오는 중';
  }

  function markerIcon(item) {
    const className = `route-pin ${item.type === 'hotel' ? 'hotel-pin' : ''} ${item.type === 'food' ? 'food-pin' : ''} ${runtimeState.focusedPlaceId === item.id ? 'is-focused' : ''}`;
    return L.divIcon({ className, html: `<span aria-hidden="true">${item.order}</span>`, iconSize: [28, 28] });
  }

  function activateMapItem(id) {
    if (id === 'hotel' || id === 'luggage') {
      document.querySelector('#trip-desk').scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    if (CORE.places[id]) CORE.openPlace(id);
  }

  function renderMapList(route, items) {
    document.querySelector('#map-day-label').textContent = dayLabels[runtimeState.mapDay];
    document.querySelector('#map-count').textContent = `${route.length}곳 + BASE`;
    document.querySelector('#map-place-list').innerHTML = route.map(([time, id]) => `<li><time>${time}</time><button type="button" data-map-place="${id}">${placeLabel({ id })}</button></li>`).join('');
  }

  function renderLeafletMap(route, items) {
    if (!map || !routeLayer || runtimeState.mapMode !== 'tiles') return;
    routeLayer.clearLayers();
    markerById.clear();
    const routeCoords = route.map(([, id]) => coordinateFor(id)).filter(Boolean);
    if (routeCoords.length > 1) {
      L.polyline(routeCoords, { color: '#ff4a32', weight: 3, opacity: .72, dashArray: '8 9', interactive: false }).bindTooltip('방문 순서 연결선 · 실제 길찾기 아님').addTo(routeLayer);
    }
    items.forEach(item => {
      const marker = L.marker(item.coords, { icon: markerIcon(item), keyboard: true, title: placeLabel(item), alt: `${placeLabel(item)} 지도 마커` });
      marker.bindPopup(`<strong>${placeLabel(item)}</strong><br><small>${item.time} · ${item.type === 'food' ? '담은 음식' : item.type === 'hotel' ? '선택 숙소' : '일정'}</small><br><button type="button" data-popup-place="${item.id}">상세 열기</button>`);
      marker.on('click', () => { runtimeState.focusedPlaceId = item.id; });
      marker.on('popupopen', event => {
        const button = event.popup.getElement()?.querySelector('[data-popup-place]');
        button?.addEventListener('click', () => activateMapItem(item.id), { once: true });
      });
      marker.addTo(routeLayer);
      markerById.set(item.id, marker);
    });
    if (items.length) map.fitBounds(L.latLngBounds(items.map(item => item.coords)).pad(.14), { maxZoom: 15, animate: false });
  }

  function fallbackPoint(coords, bounds) {
    const x = 8 + ((coords[1] - bounds.minLng) / Math.max(.0001, bounds.maxLng - bounds.minLng)) * 84;
    const y = 8 + ((bounds.maxLat - coords[0]) / Math.max(.0001, bounds.maxLat - bounds.minLat)) * 84;
    return { x, y };
  }

  function renderFallbackMap() {
    const { route, items } = mapItems();
    const target = document.querySelector('#fallback-map');
    const coords = items.map(item => item.coords).filter(Boolean);
    if (!coords.length) { target.textContent = '표시할 좌표가 없습니다.'; return; }
    const bounds = {
      minLat: Math.min(...coords.map(coord => coord[0])), maxLat: Math.max(...coords.map(coord => coord[0])),
      minLng: Math.min(...coords.map(coord => coord[1])), maxLng: Math.max(...coords.map(coord => coord[1]))
    };
    const routePoints = route.map(([, id]) => coordinateFor(id)).filter(Boolean).map(coord => fallbackPoint(coord, bounds));
    const lines = routePoints.slice(1).map((point, index) => {
      const previous = routePoints[index];
      const dx = point.x - previous.x;
      const dy = point.y - previous.y;
      const length = Math.sqrt(dx * dx + dy * dy);
      const angle = Math.atan2(dy, dx) * 180 / Math.PI;
      return `<span class="fallback-connection" style="left:${previous.x}%;top:${previous.y}%;width:${length}%;transform:rotate(${angle}deg)"></span>`;
    }).join('');
    const markers = items.map(item => {
      const point = fallbackPoint(item.coords, bounds);
      return `<button class="fallback-marker ${item.type}" type="button" style="left:${point.x}%;top:${point.y}%" data-fallback-place="${item.id}" aria-label="${placeLabel(item)}">${item.order}</button>`;
    }).join('');
    target.innerHTML = `${lines}${markers}<div class="fallback-legend"><strong>OFFLINE SCHEMATIC</strong><br>실제 좌표의 상대 위치를 단순화했습니다. 선은 방문 순서 연결선이며 실제 경로가 아닙니다.</div>`;
  }

  function renderMap() {
    const { route, items } = mapItems();
    const missing = items.filter(item => !Array.isArray(item.coords) || item.coords.length !== 2).map(item => item.id);
    runtimeState.lastMapSnapshot = { day: runtimeState.mapDay, routeIds: route.map(([, id]) => id), markerIds: items.map(item => item.id), missing, mode: runtimeState.mapMode };
    renderMapList(route, items);
    if (missing.length) {
      showFallback(`좌표 누락: ${missing.join(', ')}`);
      return;
    }
    if (runtimeState.mapMode === 'tiles') renderLeafletMap(route, items); else renderFallbackMap();
  }

  function focusPlace(id) {
    const routeDay = ['sat', 'sun', 'mon'].find(day => CORE.routeFor(day).some(([, routeId]) => routeId === id));
    if (routeDay) runtimeState.mapDay = routeDay;
    runtimeState.focusedPlaceId = id;
    syncMapDayTabs();
    renderMap();
    document.querySelector('#live-map-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (map && runtimeState.mapMode === 'tiles') {
      const coords = coordinateFor(id);
      if (coords) map.flyTo(coords, 16, { duration: .6 });
      setTimeout(() => markerById.get(id)?.openPopup(), 650);
    }
  }

  function syncMapDayTabs() {
    document.querySelectorAll('[data-map-day]').forEach(button => button.setAttribute('aria-selected', String(button.dataset.mapDay === runtimeState.mapDay)));
  }

  function augmentDeparture(result) {
    const hotel = selectedHotel();
    const target = document.querySelector('#departure-result');
    if (!target) return;
    const strong = target.querySelector('strong');
    const latestFromHotel = result.latest - hotel.transferMinutes;
    const earliestFromHotel = result.earliest - hotel.transferMinutes;
    target.querySelector('span').textContent = `${hotel.name}에서 나설 목표`;
    strong.textContent = `${CORE.formatTime(earliestFromHotel)}—${CORE.formatTime(latestFromHotel)}`;
    target.querySelector('p').textContent = `난카이 난바 이동 ${hotel.transferMinutes}분 포함 · 개찰 ${CORE.formatTime(result.earliest)}—${CORE.formatTime(result.latest)} · KIX 약 ${CORE.formatTime(result.airportArrival)} 도착. 일정의 기존 시각은 자동 이동하지 않습니다.`;
  }

  const portal = document.querySelector('#experience-portal');
  const audio = document.querySelector('#osaka-ambient');
  const film = document.querySelector('#city-film');

  function setPortalDay(day, updateGuide = true) {
    runtimeState.portalDay = day;
    portal.dataset.day = day;
    document.querySelector('#portal-chapter-copy').textContent = portalCopy[day];
    document.querySelectorAll('[data-portal-day]').forEach(button => button.setAttribute('aria-selected', String(button.dataset.portalDay === day)));
    if (updateGuide) {
      CORE.state.day = day;
      runtimeState.mapDay = day;
      document.querySelectorAll('.day-tabs [data-day]').forEach(tab => tab.setAttribute('aria-selected', String(tab.dataset.day === day)));
      CORE.renderTimeline();
      syncMapDayTabs();
      renderMap();
    }
  }

  function showPortal() { return; }

  function hidePortal(scrollToPlanner = false) {
    portal.hidden = true;
    portal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    sessionSet('osakaPortalSeen', 'true');
    if (scrollToPlanner) document.querySelector('#planner').scrollIntoView({ behavior: 'smooth' });
  }

  function setAudioUi(playing, message) {
    runtimeState.audioPlaying = playing;
    document.body.classList.toggle('is-audio-on', playing);
    [document.querySelector('#portal-sound'), document.querySelector('#ambient-toggle')].forEach(button => {
      if (!button) return;
      button.setAttribute('aria-pressed', String(playing));
    });
    document.querySelector('#portal-sound strong').textContent = playing ? '배경음 켬' : '배경음 끔';
    document.querySelector('#ambient-toggle strong').textContent = playing ? '배경음 켬' : '배경음 끔';
    if (message) document.querySelector('#media-status').textContent = message;
  }

  async function toggleAmbient() {
    if (!audio.paused) {
      audio.pause();
      travelState.audioMuted = true;
      saveState();
      setAudioUi(false, '사운드를 껐습니다. 다음 방문에도 자동 재생하지 않습니다.');
      return;
    }
    if (!film.paused) film.pause();
    try {
      audio.muted = false;
      audio.volume = .32;
      await audio.play();
      travelState.audioMuted = false;
      saveState();
      setAudioUi(true, '오사카 앰비언트 재생 중 · 창을 벗어나면 자동 정지합니다.');
    } catch {
      travelState.audioMuted = true;
      saveState();
      setAudioUi(false, '브라우저가 사운드 재생을 막았습니다. 버튼을 다시 눌러보세요.');
    }
  }

  function pauseAmbient(reason) {
    if (!audio.paused) audio.pause();
    setAudioUi(false, reason || '사운드가 정지되었습니다. 자동으로 다시 켜지지 않습니다.');
  }

  function mediaFailure() {
    film.hidden = true;
    document.querySelector('#video-fallback').hidden = false;
    document.querySelector('#media-status').textContent = '영상 파일을 열 수 없어 포스터로 전환했습니다. 나머지 기능은 정상입니다.';
  }

  function selectMediaChapter(time, day) {
    if (Number.isFinite(film.duration)) film.currentTime = Math.min(Number(time), Math.max(0, film.duration - .2));
    document.querySelectorAll('[data-seek]').forEach(button => button.setAttribute('aria-selected', String(Number(button.dataset.seek) === Number(time))));
    if (day) {
      runtimeState.mapDay = day;
      CORE.state.day = day;
      syncMapDayTabs();
      CORE.renderTimeline();
    }
  }

  function validateData() {
    const routeIds = [...new Set(Object.values(CORE.routes).flatMap(route => Object.values(route).flatMap(day => day.map(([, id]) => id))))];
    const missingCoordinates = routeIds.filter(id => !Array.isArray(DATA.coordinates[id]));
    const missingPrices = routeIds.filter(id => !DATA.placePrices[id]);
    const invalidPriceModels = Object.entries(DATA.placePrices).filter(([, model]) => !['amountMin','amountTypical','amountMax','currency','costUnit','quantityDefault','includedInPreset','sourceDate','sourceURL','priceStatus'].every(key => Object.prototype.hasOwnProperty.call(model, key))).map(([id]) => id);
    return { routeIds, missingCoordinates, missingPrices, invalidPriceModels, hotelCount: DATA.hotels.length, foodCount: DATA.foods.length, schemaVersion: travelState.schemaVersion };
  }

  function renderQaStateReport() {
    if (new URLSearchParams(location.search).get('qa-state-report') !== '1') return;
    let report = document.querySelector('#qa-state-report');
    if (!report) {
      report = document.createElement('output');
      report.id = 'qa-state-report';
      report.hidden = true;
      document.body.append(report);
    }
    const recovery = Object.keys(localStorage).filter(key => key.startsWith(`${STORAGE_KEY}:recovery:`)).sort().map(key => [key, localStorage.getItem(key)]);
    report.textContent = JSON.stringify({
      legacySavedRaw: localStorage.getItem('osakaSaved'),
      legacyCompletedRaw: localStorage.getItem('osakaCompleted'),
      legacyChecks: Object.keys(localStorage).filter(key => key.startsWith('osakaCheck:')).sort().map(key => [key, localStorage.getItem(key)]),
      v2Raw: localStorage.getItem(STORAGE_KEY),
      recovery,
      persistenceEnabled: runtimeState.persistenceEnabled,
      notice: runtimeState.persistenceNotice,
      checklistUi: Object.fromEntries([...document.querySelectorAll('[data-check]')].map(input => [input.dataset.check, input.checked])),
      travelState
    });
  }

  document.querySelector('#hotel-grid').addEventListener('click', event => {
    const button = event.target.closest('[data-hotel-id]');
    if (!button) return;
    travelState.hotelId = button.dataset.hotelId;
    saveState();
    updateCoreHotel();
    renderHotels();
    renderBudget();
    CORE.renderTimeline();
    CORE.calculateDeparture();
    renderMap();
  });

  document.querySelector('#food-builder').addEventListener('click', event => {
    const button = event.target.closest('[data-food-step]');
    if (!button) return;
    const card = button.closest('[data-food-pick]');
    const id = card.dataset.foodPick;
    travelState.foodQuantities[id] = finiteInt((travelState.foodQuantities[id] || 0) + Number(button.dataset.foodStep), 0, 0, 12);
    saveState();
    renderFoods();
    renderBudget();
    renderMap();
  });

  ['party-size', 'room-count', 'night-count'].forEach(id => {
    document.querySelector(`#${id}`).addEventListener('input', event => {
      const mapping = { 'party-size': ['party', 1, 8], 'room-count': ['rooms', 1, 4], 'night-count': ['nights', 1, 7] }[id];
      travelState[mapping[0]] = finiteInt(event.target.value, travelState[mapping[0]], mapping[1], mapping[2]);
      saveState();
      renderBudget();
    });
  });

  document.querySelector('#hotel-actual').addEventListener('input', event => {
    travelState.hotelActual = event.target.value === '' ? null : Math.max(0, Number(event.target.value) || 0);
    saveState();
    renderBudget();
  });

  document.querySelector('.actual-budget').addEventListener('input', event => {
    const input = event.target.closest('[data-actual-category]');
    if (!input) return;
    travelState.actualOverrides[input.dataset.actualCategory] = input.value === '' ? null : Math.max(0, Number(input.value) || 0);
    saveState();
    renderBudget();
  });

  document.querySelector('#route-controls').addEventListener('change', () => {
    travelState.preset = CORE.state.preset;
    travelState.pace = CORE.state.pace;
    travelState.weather = CORE.state.weather;
    travelState.startTime = CORE.state.startTime;
    saveState();
    renderBudget();
    renderMap();
  });

  document.addEventListener('osaka:routechange', () => {
    if (runtimeState.mapDay === CORE.state.day) renderMap();
    renderBudget();
  });

  document.querySelector('#map-day-tabs').addEventListener('click', event => {
    const button = event.target.closest('[data-map-day]');
    if (!button) return;
    runtimeState.mapDay = button.dataset.mapDay;
    CORE.state.day = runtimeState.mapDay;
    document.querySelectorAll('.day-tabs [data-day]').forEach(tab => tab.setAttribute('aria-selected', String(tab.dataset.day === CORE.state.day)));
    syncMapDayTabs();
    CORE.renderTimeline();
    renderMap();
  });

  document.querySelector('#map-mode-toggle').addEventListener('click', () => {
    if (runtimeState.mapMode === 'tiles') showFallback('수동 폴백'); else showTiles();
    renderMap();
  });

  document.querySelector('#map-place-list').addEventListener('click', event => {
    const button = event.target.closest('[data-map-place]');
    if (button) focusPlace(button.dataset.mapPlace);
  });

  document.querySelector('#fallback-map').addEventListener('click', event => {
    const button = event.target.closest('[data-fallback-place]');
    if (button) activateMapItem(button.dataset.fallbackPlace);
  });

  portal.addEventListener('pointermove', event => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = portal.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    portal.style.setProperty('--px', `${x}%`);
    portal.style.setProperty('--py', `${y}%`);
    portal.style.setProperty('--tilt-y', `${(x - 50) * .035}deg`);
    portal.style.setProperty('--tilt-x', `${(50 - y) * .025}deg`);
    document.querySelector('#portal-input-status').textContent = `${Math.round(x).toString().padStart(2, '0')} · ${Math.round(y).toString().padStart(2, '0')}`;
  });

  document.querySelector('#portal-ring').addEventListener('click', event => {
    const button = event.target.closest('[data-portal-day]');
    if (button) setPortalDay(button.dataset.portalDay);
  });

  document.querySelector('#portal-ring').addEventListener('pointerdown', event => {
    runtimeState.portalDragging = true;
    runtimeState.portalDragStart = event.clientX;
    runtimeState.portalStartIndex = ['sat', 'sun', 'mon'].indexOf(runtimeState.portalDay);
    event.currentTarget.classList.add('is-dragging');
    event.currentTarget.setPointerCapture(event.pointerId);
  });

  document.querySelector('#portal-ring').addEventListener('pointermove', event => {
    if (!runtimeState.portalDragging) return;
    const delta = event.clientX - runtimeState.portalDragStart;
    const shift = Math.round(delta / 90);
    const index = Math.max(0, Math.min(2, runtimeState.portalStartIndex + shift));
    setPortalDay(['sat', 'sun', 'mon'][index]);
  });

  ['pointerup', 'pointercancel'].forEach(type => document.querySelector('#portal-ring').addEventListener(type, event => {
    runtimeState.portalDragging = false;
    event.currentTarget.classList.remove('is-dragging');
  }));

  document.querySelector('#portal-enter').addEventListener('click', () => hidePortal(false));
  document.querySelector('#portal-skip').addEventListener('click', () => hidePortal(true));
  document.querySelector('#rewatch-portal')?.addEventListener('click', () => showPortal(true));
  document.querySelector('#portal-sound').addEventListener('click', toggleAmbient);
  document.querySelector('#ambient-toggle').addEventListener('click', toggleAmbient);

  document.querySelector('#media-chapters').addEventListener('click', event => {
    const button = event.target.closest('[data-seek]');
    if (button) selectMediaChapter(Number(button.dataset.seek), button.dataset.mediaDay);
  });

  document.querySelectorAll('[data-check]').forEach(input => {
    input.addEventListener('change', () => {
      travelState.checklist[input.dataset.check] = input.checked;
      saveState();
    });
  });

  film.addEventListener('play', () => {
    pauseAmbient('영상 재생 중 · 중복 재생을 막기 위해 앰비언트를 정지했습니다.');
    document.querySelector('#media-status').textContent = 'CITY FILM 재생 중 · 기본 음량은 영상 컨트롤에서 조절합니다.';
  });
  film.addEventListener('pause', () => {
    if (!film.ended && audio.paused) document.querySelector('#media-status').textContent = '영상 일시정지 · 앰비언트는 자동으로 다시 켜지지 않습니다.';
  });
  film.addEventListener('error', mediaFailure);
  film.addEventListener('timeupdate', () => {
    const chapters = [...document.querySelectorAll('[data-seek]')];
    const active = [...chapters].reverse().find(button => film.currentTime >= Number(button.dataset.seek));
    if (active) chapters.forEach(button => button.setAttribute('aria-selected', String(button === active)));
  });
  audio.addEventListener('error', () => setAudioUi(false, '사운드 파일을 열 수 없습니다. 가이드의 다른 기능은 계속 사용할 수 있습니다.'));
  window.addEventListener('blur', () => { if (!audio.paused) pauseAmbient('창을 벗어나 사운드를 정지했습니다. 다시 켜려면 직접 누르세요.'); });
  document.addEventListener('visibilitychange', () => { if (document.hidden && !audio.paused) pauseAmbient('탭이 숨겨져 사운드를 정지했습니다. 자동 재개하지 않습니다.'); });

  applyPersistedToCore();
  updateCoreHotel();
  renderPersistenceNotice();
  renderHotels();
  renderFoods();
  renderBudget();
  initMap();
  CORE.renderTimeline();
  CORE.calculateDeparture();
  renderMap();
  setPortalDay('sat', false);
  setAudioUi(false, travelState.audioMuted ? '영상·사운드 모두 정지 상태입니다.' : '이전 사운드 설정은 ON이지만 자동 재생하지 않습니다. 눌러서 시작하세요.');
  if (new URLSearchParams(location.search).get('qa-video-failure') === '1') mediaFailure();
  showPortal(false);

  window.OsakaExperience = {
    travelState,
    runtimeState,
    syncCoreState,
    focusPlace,
    augmentDeparture,
    getBudgetSnapshot,
    getMapSnapshot: () => runtimeState.lastMapSnapshot,
    validateData,
    simulateTileFailure: () => showFallback('테스트 타일 실패'),
    renderMap,
    showPortal
  };
  CORE.calculateDeparture();
  renderQaStateReport();
  if (new URLSearchParams(location.search).get('qa-state-report') === '1') window.setInterval(renderQaStateReport, 200);
})();
