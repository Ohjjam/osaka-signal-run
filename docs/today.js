(function () {
  'use strict';
  const P = window.OsakaPlannerV3, C = window.OsakaTodayCore, V = window.OsakaVNextCore, D = window.OSAKA_VNEXT_DATA;
  if (!P || !C || !V) return;
  const $ = s => document.querySelector(s);
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const dayNames = { sat: '토요일', sun: '일요일', mon: '월요일' };
  const url = query => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  const mapSearch = item => url(`${item.jp || item.name} Osaka`);
  const button = (action, label, id = '', primary = false) => `<button type="button" data-now-action="${action}" ${id ? `data-id="${esc(id)}"` : ''} class="${primary ? 'now-primary' : 'now-quiet'}">${label}</button>`;
  const link = (href, label, primary = false) => `<a class="now-btn ${primary ? 'now-primary' : 'now-quiet'}" href="${esc(href)}" target="_blank" rel="noopener noreferrer">${label}</a>`;
  const nav = (panel, label) => `<button type="button" data-today-nav="${panel}">${label}</button>`;
  const move = (item, label='현재 위치에서 이동', from='') => `<button type="button" class="now-primary" data-move-open="${esc(item?.id || 'hotel')}" ${from ? `data-move-from="${from}"` : ''}>${label} →</button>`;
  const options = Object.entries(C.AREAS).map(([key,a]) => `<option value="${key}">${a.name}</option>`).join('');
  $('#now-area').insertAdjacentHTML('beforeend', options);
  $('#food-area').innerHTML = options;
  $('#food-group').innerHTML = Object.entries(P.foodGroups).map(([id,label]) => `<option value="${esc(id)}">${esc(label)}</option>`).join('');
  let now = C.clock(), prefs = {}, gps = null, lastStop = null, excluded = [], selected = '', mood = 'auto', rain = false, lastMinute = '';
  try { const saved = JSON.parse(sessionStorage.getItem('osaka-now-ui') || '{}'); if (saved.date === now.date) prefs = saved; } catch { /* Optional UI memory. */ }
  let area = C.AREAS[prefs.area] ? prefs.area : '', foodOrigin = null, foodOriginName = '', map, pins, originPin, markers = new Map(), listLimit = 8, foodSelected = '', toastTimer;
  selected = prefs.selected || '';
  // Short-lived personal recommendation preference, not a shared location/history log.
  let mealPauseUntil = Number(prefs.mealPauseUntil) || 0;
  $('#now-area').value = area;
  $('#food-area').value = area || 'namba';
  function remember() { try { sessionStorage.setItem('osaka-now-ui', JSON.stringify({ date: now.date, area, selected, mealPauseUntil })); } catch { /* Private mode can block storage. */ } }
  function toast(message) {
    let el = $('#now-toast');
    if (!el) { el = document.createElement('div'); el.id = 'now-toast'; el.className = 'now-toast'; el.setAttribute('role','status'); document.body.append(el); }
    el.textContent = message; el.hidden = false; clearTimeout(toastTimer); toastTimer = setTimeout(() => { el.hidden = true; }, 3000);
  }
  function origin() {
    if (gps && Date.now() - gps.at < 15 * 60000) return { coords: gps.coords, name: '확인한 내 위치', actual: true };
    if (gps) { gps = null; $('#now-location-status').textContent = '위치 확인 후 15분이 지났어요. 내 위치를 다시 누르거나 동네를 선택하세요.'; }
    if (lastStop) return { coords: lastStop.coords, name: `${lastStop.name} · 마지막 방문 기준`, actual: false };
    const a = C.AREAS[area] || C.AREAS.namba;
    return { coords: area === 'hotel' && C.coords(P.selectedHotel()?.coords) ? P.selectedHotel().coords : a.coords, name: a.name, actual: false };
  }
  function allItems() { return [...P.allItems.values()]; }
  function operation(item, day) { return V.operationFor(item, D, day || 'sat'); }
  function directions(item, mode = 'walking') {
    const query = new URLSearchParams({ api: '1', destination: item.address || (C.coords(item.coords) && item.precision !== 'area' ? item.coords.join(',') : `${item.jp || item.name} Osaka`), travelmode: mode });
    // No background location requests. Origin is included only after the user selected/confirmed one.
    if (gps && Date.now()-gps.at<5*60000) query.set('origin', gps.coords.join(','));
    return `https://www.google.com/maps/dir/?${query}`;
  }
  function distanceLabel(km) { return Number.isFinite(km) ? `직선 ${km < 1 ? `${Math.round(km * 1000)}m` : `${km.toFixed(1)}km`}` : '위치 미등록'; }
  function progress(id) { return now.day && P.state.itemProgress?.[`${now.day}:${id}`]; }
  function upcoming() {
    if (!now.day) return null;
    const entries = V.scheduleFor(now.day, P.state, id => P.allItems.get(id), D, P.suggestedTransit).entries;
    return entries.filter(e => P.state.reservations?.[e.id]?.status === 'booked' && !['done','skipped'].includes(progress(e.id)))
      .map(e => ({ id:e.id, name:e.item.name, coords:e.item.coords, start: V.timeToMinutes(P.state.reservations[e.id].time) ?? e.start, item:e.item }))
      .filter(e => C.coords(e.coords) && e.start >= now.minutes - 30).sort((a,b) => a.start-b.start)[0] || null;
  }
  function actionLinks(item) { return move(item) + link(mapSearch(item), '영업·대기 확인 ↗'); }
  function feature(kicker, title, description, actions) {
    return `<article class="now-feature"><div class="now-feature-copy"><span class="now-badge">${esc(kicker)}</span><h3>${esc(title)}</h3><p class="now-desc">${esc(description)}</p><div class="now-actions">${actions}</div></div><figure class="now-feature-photo"><img src="assets/dotonbori-night.jpg" alt="도톤보리 운하의 저녁 풍경" loading="lazy"><figcaption>도톤보리</figcaption></figure></article>`;
  }
  function renderDecision(force = false) {
    const next = C.clock();
    if (next.date !== now.date) { area = ''; selected = ''; gps = null; lastStop = null; excluded = []; $('#now-area').value = ''; }
    now = next;
    $('#now-clock').innerHTML = `${now.time}<small>${dayNames[now.day] || now.date.slice(5)} · 일본</small>`;
    const o = origin(), slot = C.meal(now.minutes), anchor = upcoming();
    const gate = C.gate(now, area === 'kix' ? 'kix' : gps || lastStop ? 'city' : area);
    const notices = [];
    if (!navigator.onLine) notices.push('오프라인 · 저장된 정보로 표시 중. 새 길찾기·지도 로딩은 연결이 필요해요.');
    if (now.day === 'mon' && now.minutes < 720) notices.push('오늘 귀국 · 16:00 KIX 출발 기준. 12:30 시내 정리, 13:00까지 공항행 이동을 권장해요.');
    if (anchor) notices.push(`예약 ${V.minutesToTime(anchor.start)} ${anchor.name} · 이동 여유를 남겨 추천해요.`);
    const disconnectedBookings = Object.entries(P.state.reservations || {}).filter(([id,r]) => r.status === 'booked' && id !== P.state.hotelId && !P.hotels.some(h=>h.id===id) && !['sat','sun','mon'].some(d => P.state.plans?.[d]?.includes(id)));
    if (disconnectedBookings.length) notices.push(`일정에 날짜가 연결되지 않은 예약 ${disconnectedBookings.length}개 · 내 일정에서 확인하세요.`);
    $('#now-context').textContent = notices.join(' ');
    let html = '';
    if (gate === 'airport' || (area === 'kix' && now.day === 'mon')) {
      const kix = { name: 'Kansai International Airport', jp:'関西国際空港' };
      html = feature('귀국 · 16:00 출발', area === 'kix' ? '이제 탑승 준비.' : '이제 공항으로 갈 시간.', '3명 모두 16:00 출발 기준. 숙소 짐을 챙긴 뒤 공항으로 이동하세요. 항공사 앱에서 출발 터미널·체크인 마감을 확인하고, T2라면 터미널 이동 여유도 남기세요.', move({id:'airport'},'공항 이동·결제 안내') + nav('hotel-search-v3','숙소·짐 확인') + link('https://www.kansai-airport.or.jp/en/flight/','KIX 공식 운항정보 ↗'));
    } else if (gate === 'arrival') {
      const hotel = P.selectedHotel();
      html = feature('공항 → 숙소', '신이마미야에서 내려 숙소로', '난카이 공항급행 ¥970 · 라피트 디지털 일반석 ¥1,410. 신이마미야에서 내려 도보 약 8–12분. 이동 순서와 표 사는 방법을 확인하세요.', move(hotel,'숙소까지 이동·결제 안내') + nav('hotel-search-v3','체크인·출입 안내') + button('city','이미 시내야'));
    } else if (gate === 'finished') {
      html = feature('여행 종료', '저장한 일정과 장소', '9월 5–7일 일정이 끝났어요. 저장한 장소와 기록은 그대로 남습니다. 더 둘러보고 싶다면 밥 지도와 전체 목록에서 고르세요.', nav('food-map-v41','밥 지도') + nav('itinerary-v11','우리 일정 보기'));
    } else if (!area && !gps && !lastStop && !selected) {
      html = feature('오사카 도착', '지금 어디에 있어?', '내 위치를 확인하면 가까운 식사와 다음 코스를 골라줄게. 공항이라면 숙소 이동부터 확인해.', button('locate','◎ 내 위치에서 추천','',true) + move(P.selectedHotel(),'공항 → 숙소','kix1') + button('city','난바·시내에 있어'));
    } else if (gate === 'rest' && mood === 'auto') {
      const hotel = P.selectedHotel();
      html = feature('휴식', '숙소로 돌아가기', '늦은 밤·이른 아침에는 가까운 곳을 이용하세요. 음식점 지도에서 야식과 아침 후보를 찾을 수 있어요.', move(hotel,'내 위치 → 숙소') + nav('food-map-v41','야식·아침 찾기'));
    } else if (anchor && anchor.start - now.minutes <= C.travel(o.coords,anchor.coords) + 35) {
      html = feature('다음 예약', `${V.minutesToTime(anchor.start)} ${anchor.name}`, '예약 시간이 가까워요. 다른 곳을 끼우기보다 지금 이동하고 티켓·예약내역을 확인하세요. 예약 시각은 일정에 직접 저장한 값을 사용합니다.', actionLinks(anchor.item) + nav('itinerary-v11','예약 확인'));
    } else if (selected && P.allItems.has(selected) && !['done','skipped'].includes(progress(selected))) {
      const item = P.allItems.get(selected), h = C.hours(operation(item,now.day),now.minutes, +item.duration || 60);
      html = feature('선택한 장소', item.name, `${item.jp || item.areaLabel || ''} · ${distanceLabel(C.distance(o.coords,item.coords))} · ${h.label}`, actionLinks(item) + button('done','다녀왔어 ✓',item.id,true) + button('queue','줄 길어 · 다른 곳',item.id) + button('unselect','선택 취소'));
      if (now.day) html += `<div class="now-actions">${button('plan','오늘 일정에도 담기',item.id)}</div>`;
    } else {
      selected = ''; const ranked = C.rank(allItems(), { now, origin:o.coords, state:P.state, operationFor:operation, excluded, anchor, mood, rain, justAte:Date.now()<mealPauseUntil });
      const top = ranked[0];
      if (top) {
        html = feature(`${o.name} / ${mood === 'food' ? slot.label : mood === 'rest' ? '잠깐 쉬기' : '다음 코스'}`, top.item.name, `${top.reason} · ${distanceLabel(top.km)} · 머무는 시간 약 ${top.duration}분. ${top.item.menu || top.item.genreLabel || top.item.label || ''}`, button('choose','여기로 갈래 →',top.item.id,true) + button('queue','줄 길면 다른 곳',top.item.id) + link(mapSearch(top.item),'영업·최근 정보 ↗'));
        html += `<p class="now-note">${esc(top.availability.label)} · ${top.item.precision === 'area' ? '지역 참고 좌표' : '이동 전 정확한 지점 확인'}</p>`;
        html += `<div class="now-subtitle"><h3>다른 후보</h3><span class="now-note">가까운 대안 ${Math.min(ranked.length-1,2)}곳</span></div><div class="now-alts">${ranked.slice(1,3).map(r => `<article class="now-card"><p class="now-kicker">${esc(r.item.genreLabel || r.item.areaLabel || r.reason)}</p><h3>${esc(r.item.name)}</h3><p>${esc(distanceLabel(r.km))} · ${esc(r.reason)}</p><div class="now-actions">${button('choose','이곳 선택',r.item.id)}${link(mapSearch(r.item),'정보 ↗')}</div></article>`).join('')}</div>`;
      } else html = feature('검색 결과', '조건에 맞는 장소가 없어요', '동네나 거리 범위를 바꿔보세요. 예약·귀국 시간에 맞지 않는 코스는 추천에서 제외됩니다.', nav('food-map-v41','지도에서 직접 고르기') + button('reset','조건 초기화'));
    }
    // Don't replace focused controls on every clock tick or shared-state poll.
    if (force || $('#now-decision').dataset.signature !== html) { $('#now-decision').innerHTML = html; $('#now-decision').dataset.signature = html; }
    document.querySelectorAll('[data-now-mood]').forEach(b => b.setAttribute('aria-pressed',String(b.dataset.nowMood === mood)));
    $('[data-now-action="rain"]').setAttribute('aria-pressed',String(rain));
    lastMinute = `${now.date}:${now.time}`;
  }
  function foodCenter() { return foodOrigin || C.AREAS[$('#food-area').value]?.coords || origin().coords; }
  function foodRows() { return C.foodList(allItems(), { origin: foodCenter(), radius:+$('#food-radius').value, query:$('#food-query').value, group:$('#food-group').value, savedOnly:$('#food-saved').checked, saved:[...(P.state.wishlist || []),...(P.state.mustVisit || [])] }); }
  const mapFrame = $('#food-map-frame'), mapHome = mapFrame.parentElement, mapDialog = $('#food-map-dialog');
  let labelTimer;
  function ratingMarkup(item) {
    const f=C.foodFacts(item,P.foodGroups);
    const score = `타베로그 ${f.rating} / 5${f.reviews !== null ? ` · 리뷰 ${f.reviews.toLocaleString('ko-KR')}개` : ''} ↗`;
    return `<p class="food-rating">${f.rating ? link(f.source,score) : link(mapSearch(item),'평점 미등록 · 최신 리뷰 확인 ↗')}<small>저장된 참고 정보 · 실시간 아님</small></p>`;
  }
  function menuLabel(item) {
    const f=C.foodFacts(item,P.foodGroups);
    return `<strong>${esc(f.cuisine)}</strong><span>${esc(f.shortMenu)}</span><small>${esc(f.ratingText)}</small>`;
  }
  function layoutLabels() {
    if (!map || $('#food-map-v41').hidden) return;
    const size=map.getSize(), center=map.getCenter();
    const points=[...markers].filter(([,pin])=>map.getBounds().contains(pin.getLatLng())&&!pin.isPopupOpen()).map(([id,pin])=> {
      const p=map.latLngToContainerPoint(pin.getLatLng());
      return {id,x:p.x,y:p.y,km:pin.getLatLng().distanceTo(center)};
    }).sort((a,b)=>(a.id===foodSelected?-1:b.id===foodSelected?1:a.km-b.km));
    const placements=$('#food-map-labels').checked ? C.labelPlacements(points,size.x,size.y,mapDialog.open?18:10) : [];
    const visible=new Map(placements.map(p=>[p.id,p.side]));
    markers.forEach((pin,id)=> {
      const side=visible.get(id);
      if(!side){pin.closeTooltip();return;}
      const tip=pin.getTooltip();tip.options.direction=side;tip.options.offset=L.point(side==='right'?14:-14,0);pin.openTooltip();
    });
  }
  function queueLabels() { clearTimeout(labelTimer); labelTimer=setTimeout(layoutLabels,80); }
  function restoreMap() {
    mapHome.prepend(mapFrame); $('#food-map-expand').hidden=false; $('#food-map-close').hidden=true;
    document.body.classList.remove('food-map-expanded');
    requestAnimationFrame(()=>{map?.invalidateSize({pan:false});queueLabels();if(!$('#food-map-v41').hidden)$('#food-map-expand').focus({preventScroll:true});});
  }
  function closeMap() { if(mapDialog.open) mapDialog.close(); }
  mapDialog.addEventListener('close',restoreMap);
  mapDialog.addEventListener('keydown',event=> { if(event.key==='Escape') {event.preventDefault();event.stopPropagation();closeMap();} },true);
  $('#food-map-labels').addEventListener('change',layoutLabels);
  function expandMap() {
    if(mapDialog.open)return;
    $('#food-map-dialog-content').append(mapFrame);
    $('#food-map-expand').hidden=true;$('#food-map-close').hidden=false;
    document.body.classList.add('food-map-expanded');mapDialog.showModal();
    requestAnimationFrame(()=>{map?.invalidateSize({pan:false});queueLabels();$('#food-map-close').focus();});
  }
  function initMap() {
    if (map || !window.L || $('#food-map-v41').hidden) return;
    map = L.map('food-map-canvas', { scrollWheelZoom:false, zoomControl:true }).setView(foodCenter(),14);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{ attribution:'&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>', maxZoom:19 }).addTo(map).on('tileerror',()=> { $('#food-map-note').textContent='지도 연결이 원활하지 않아요. 아래 장소 목록과 길찾기는 그대로 사용할 수 있어요.'; });
    pins = L.layerGroup().addTo(map);
    map.on('moveend zoomend resize popupopen popupclose',queueLabels);
  }
  function renderFood(recenter = false, updatePins = true) {
    if ($('#food-map-v41').hidden) return;
    initMap();
    const rows = foodRows(), center = foodCenter(), finite = rows.filter(r => Number.isFinite(r.km));
    const name = foodOriginName || C.AREAS[$('#food-area').value]?.name || '선택한 위치';
    $('#food-map-status').textContent = `${name} 기준 · ${rows.length}곳${rows.length > listLimit ? ` · 가까운 ${listLimit}곳 표시` : ''} · 지도·목록 동일 필터`;
    const visible = rows.slice(0,listLimit);
    const selectedRow = rows.find(r => r.item.id === foodSelected);
    if (selectedRow && !visible.includes(selectedRow)) visible.unshift(selectedRow);
    $('#food-map-list').innerHTML = visible.length ? visible.map(r => {
      const item = r.item, n = rows.indexOf(r)+1;
      return `<article class="now-card ${item.id === foodSelected ? 'is-selected' : ''}" data-food-card="${esc(item.id)}"><span class="now-badge">${n.toString().padStart(2,'0')} / ${esc(item.genreLabel || P.foodGroups[item.group] || '음식점')}</span><h3>${esc(item.name)}</h3><p>${esc(item.jp || '')}</p><p>${esc(distanceLabel(r.km))} · ${item.price ? `약 ¥${Number(item.price).toLocaleString('ko-KR')}` : '가격 확인'}${item.precision === 'area' ? ' · 참고 좌표' : ''}</p><p>${esc(C.foodFacts(item,P.foodGroups).menu)}</p>${ratingMarkup(item)}<div class="now-actions">${button('choose','여기로 갈래',item.id,true)}${button('pin','지도 핀',item.id)}${link(mapSearch(item),'영업·메뉴 ↗')}</div></article>`;
    }).join('') + (rows.length > listLimit ? `<div class="now-actions">${button('more','8곳 더 보기')}</div>` : '') : `<div class="now-empty">이 조건에는 음식점이 없어요.<br>범위를 넓히거나 검색·필터를 바꿔보세요.<div class="now-actions">${button('food-reset','전체 음식점 보기')}</div></div>`;
    $('#food-google-nearby').href = `https://www.google.com/maps/search/restaurants/@${center[0]},${center[1]},15z`;
    if (map) {
      map.invalidateSize();
      if (updatePins) {
        pins.clearLayers(); markers.clear();
        rows.forEach((r,index) => {
          if (!C.coords(r.item.coords)) return;
          const pin = L.marker(r.item.coords,{icon:L.divIcon({className:`food-pin ${r.item.id === foodSelected ? 'is-selected' : ''}`, html:String(index+1), iconSize:[32,32],iconAnchor:[16,16]})}).addTo(pins);
          const facts=C.foodFacts(r.item,P.foodGroups);
          pin.bindTooltip(menuLabel(r.item),{permanent:true,direction:'right',offset:[14,0],className:'food-map-label',opacity:1});
          pin.closeTooltip();
          pin.bindPopup(`<div class="food-popup"><strong>${esc(r.item.name)}</strong><p>${esc(facts.cuisine)} · ${esc(distanceLabel(r.km))}</p><p class="food-popup-menu">${esc(facts.menu)}</p>${ratingMarkup(r.item)}<div class="now-actions">${button('choose','여기로 갈래',r.item.id,true)}${move(r.item,'이동 안내')}</div></div>`,{maxWidth:310,minWidth:230,autoPanPaddingTopLeft:[12,12],autoPanPaddingBottomRight:[12,12]});
          pin.on('click',()=> { foodSelected=r.item.id; renderFood(false,false); });
          markers.set(r.item.id,pin);
        });
        if (originPin) map.removeLayer(originPin);
        originPin = L.marker(center,{icon:L.divIcon({className:'food-origin',iconSize:[15,15],iconAnchor:[7,7]})}).addTo(map).bindTooltip(`${esc(name)} · 검색 기준`);
      }
      if (recenter) {
        if (+$('#food-radius').value === 0 && finite.length) map.fitBounds(L.latLngBounds(finite.map(r=>r.item.coords)).extend(center),{padding:[25,25],maxZoom:15,animate:false});
        else map.setView(center,+$('#food-radius').value > 2 ? 12 : +$('#food-radius').value < 1 && +$('#food-radius').value !== 0 ? 15 : 14,{animate:false});
      }
      queueLabels();
    }
  }
  function openPanel(id) { P.showGuidePanel(id,{focus:true}); }
  function locate() {
    if (!navigator.geolocation) { toast('위치 기능이 없어요. 동네를 선택해주세요.'); return; }
    document.querySelectorAll('[data-now-action="locate"]').forEach(b => { b.disabled=true; b.textContent='위치 확인 중…'; });
    const finish = () => document.querySelectorAll('[data-now-action="locate"]').forEach(b => { b.disabled=false; b.textContent='◎ 내 위치'; });
    navigator.geolocation.getCurrentPosition(p => {
      finish(); const pos=[p.coords.latitude,p.coords.longitude];
      if (pos[0] < 34.3 || pos[0] > 34.95 || pos[1] < 135.1 || pos[1] > 135.75) { toast('오사카 밖의 위치예요. 원하는 동네를 선택해주세요.'); $('#now-location-status').textContent='오사카 밖의 위치는 사용하지 않았어요. 동네를 골라주세요.'; return; }
      gps={coords:pos,at:Date.now()}; lastStop=null;
      // Airport geolocation must not be treated as a city arrival.
      area=C.distance(pos,C.AREAS.kix.coords)<4 ? 'kix' : Object.keys(C.AREAS).filter(k=>k!=='kix').sort((a,b)=>C.distance(pos,C.AREAS[a].coords)-C.distance(pos,C.AREAS[b].coords))[0];
      $('#now-area').value=area; $('#food-area').value=area;
      foodOrigin=pos; foodOriginName='확인한 내 위치';
      $('#now-location-status').textContent=`위치 확인 완료 · 정확도 약 ${Math.round(p.coords.accuracy)}m · 공용 저장 안 함`;
      excluded=[]; remember(); renderDecision(true); renderFood(true);
    }, error => { finish(); const message=error.code===1 ? '위치 권한이 없어도 괜찮아요. 동네를 직접 골라주세요.' : '위치를 확인하지 못했어요. 동네를 직접 골라주세요.'; $('#now-location-status').textContent=message; toast(message); }, {enableHighAccuracy:false, timeout:10000, maximumAge:60000});
  }
  document.addEventListener('click',event => {
    const target=event.target.closest('[data-now-action],[data-now-mood],[data-today-nav]'); if (!target) return;
    if (target.dataset.todayNav) { openPanel(target.dataset.todayNav); return; }
    if (target.dataset.nowMood) { mood=target.dataset.nowMood; selected=''; excluded=[]; remember(); renderDecision(true); return; }
    const action=target.dataset.nowAction, id=target.dataset.id, item=P.allItems.get(id);
    if (action==='map-expand') {expandMap();return;}
    if (action==='map-close') {closeMap();return;}
    if (action==='locate') { locate(); return; }
    if (action==='rain') { rain=!rain; selected=''; excluded=[]; }
    if (action==='refresh') { excluded=[]; selected=''; }
    if (action==='reset') { mood='auto'; rain=false; excluded=[]; selected=''; }
    if (action==='city') { area='namba'; gps=null; lastStop=null; $('#now-area').value=area; $('#food-area').value=area; $('#now-location-status').textContent='난바를 기준으로 추천해요. 다른 곳이라면 동네를 바꿔주세요.'; }
    if (action==='choose' && item) {
      closeMap();
      selected=id;
      remember(); openPanel('today-v41'); renderDecision(true); return;
    }
    if (action==='unselect') selected='';
    if (action==='queue') { if (id) excluded.push(id); selected=''; toast('이곳은 잠시 빼고 가까운 대안을 골랐어요.'); }
    if (action==='done' && item) {
      if (item.category==='food') { mealPauseUntil=Date.now()+90*60000; mood='auto'; }
      if (now.day) { P.state.itemProgress ||= {}; P.state.itemProgress[`${now.day}:${id}`]='done'; P.saveState(); }
      if (C.coords(item.coords)) { lastStop={coords:item.coords,name:item.name}; gps=null; $('#now-location-status').textContent=`${item.name} 마지막 방문 기준 · 이동했다면 위치를 다시 확인하세요.`; }
      selected=''; excluded=[]; toast('방문 완료! 다음 가까운 곳을 골랐어요.');
    }
    if (action==='plan' && item) { if (now.day) P.addToDay(now.day,id); else toast('여행 날짜 밖이에요. 내 일정에서 날짜를 선택하세요.'); return; }
    if (action==='add-food') { P.openCustomEntryDialog('restaurant'); return; }
    if (action==='more') { listLimit+=8; renderFood(false,false); return; }
    if (action==='food-reset') { $('#food-radius').value='0'; $('#food-group').value='all'; $('#food-query').value=''; $('#food-saved').checked=false; listLimit=8; renderFood(true); return; }
    if (action==='map-center') { if (map) { const p=map.getCenter(); foodOrigin=[p.lat,p.lng]; foodOriginName='지도 중심'; listLimit=8; renderFood(); } return; }
    if (action==='pin' && item) { foodSelected=id; renderFood(); const marker=markers.get(id); if(marker) { map.setView(item.coords,16,{animate:false}); marker.openPopup(); $('#food-map-canvas').scrollIntoView({behavior:'smooth',block:'center'}); } else toast('좌표가 없는 가게예요. 이름 길찾기를 이용하세요.'); return; }
    remember(); renderDecision(true);
  });
  $('#now-area').addEventListener('change',()=> { area=$('#now-area').value; gps=null; lastStop=null; selected=''; excluded=[]; $('#food-area').value=area||'namba'; foodOrigin=null; foodOriginName=''; $('#now-location-status').textContent=`${C.AREAS[area]?.name || '시간에 맞춘 동네'} 기준 · 실제 GPS 위치가 아닙니다.`; remember(); renderDecision(true); });
  ['food-area','food-group','food-radius','food-saved'].forEach(id=> $(`#${id}`).addEventListener('change',()=> { if(id==='food-area') {foodOrigin=null;foodOriginName='';} listLimit=8; foodSelected=''; renderFood(id==='food-area'||id==='food-radius'); }));
  let searchTimer;
  $('#food-query').addEventListener('input',()=> { clearTimeout(searchTimer); searchTimer=setTimeout(()=> {listLimit=8;foodSelected='';renderFood();},180); });
  document.addEventListener('osaka:panel',event=> { if(event.detail.id!=='food-map-v41') closeMap(); if(event.detail.id==='food-map-v41') setTimeout(()=>renderFood(true),60); if(event.detail.id==='today-v41') renderDecision(); });
  ['osaka:shared-applied','osaka:state-changed'].forEach(name=>document.addEventListener(name,()=> {renderDecision();renderFood();}));
  document.addEventListener('osaka:located',event=>{gps={coords:event.detail.coords,at:event.detail.at};lastStop=null;area=C.distance(gps.coords,C.AREAS.kix.coords)<4?'kix':Object.keys(C.AREAS).filter(k=>k!=='kix').sort((a,b)=>C.distance(gps.coords,C.AREAS[a].coords)-C.distance(gps.coords,C.AREAS[b].coords))[0];$('#now-area').value=area;$('#food-area').value=area;foodOrigin=gps.coords;foodOriginName='확인한 내 위치';$('#now-location-status').textContent='이동 화면에서 확인한 내 위치 기준';remember();renderDecision(true);});
  const foreground=()=> {if(!document.hidden) {renderDecision();renderFood();}};
  document.addEventListener('visibilitychange',foreground); window.addEventListener('pageshow',foreground); window.addEventListener('online',foreground); window.addEventListener('offline',foreground);
  setInterval(()=> {if(!document.hidden && `${C.clock().date}:${C.clock().time}`!==lastMinute) renderDecision();},30000);
  // Narrow read-only diagnostics; no location or personally identifying fields.
  window.OsakaToday = { version:44, refresh:()=> {renderDecision(true);renderFood();}, status:()=> ({day:now.day,time:now.time,mode:C.gate(now,area),selected,foodCount:foodRows().length,mapReady:!!map,mapExpanded:mapDialog.open}) };
  renderDecision(); if(!$('#food-map-v41').hidden) renderFood(true);
})();
