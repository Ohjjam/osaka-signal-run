(function(){
 'use strict';
 const P=window.OsakaPlannerV3,C=window.OsakaMoveCore,$=s=>document.querySelector(s);
 const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const yen=n=>'¥'+Number(n).toLocaleString('ko-KR');
 const a=(href,label)=>`<a class="now-btn" href="${esc(href)}" target="_blank" rel="noopener noreferrer">${label} ↗</a>`;
 let destination=P.selectedHotel(),origin=null,gps=null,choice='express',stage=0,map,layer,locating=false,requestId=0;
 const panel=$('#move-v44');panel.className='v3-section now-panel move-panel';
 panel.innerHTML=`<div class="now-heading"><div><span class="now-badge">이동 · 결제</span><h2 id="move-title">숙소로 이동</h2></div><button type="button" data-today-nav="today-v41">← 지금</button></div>
 <div class="move-address"><strong id="move-place"></strong><span id="move-address"></span><button type="button" data-move-copy>주소 복사</button></div>
 <div class="now-loc"><label>출발지<select id="move-origin"><option value="auto">내 현재 위치</option>${Object.entries(C.stops).map(([k,v])=>`<option value="${k}">${v.name}</option>`).join('')}</select></label><button type="button" data-move-locate>◎ 현재 위치 확인</button></div><p id="move-status" class="now-status" role="status">위치 권한 없이도 공항·출발역을 직접 고를 수 있어요.</p>
 <div id="move-choices" class="move-choices"></div><div id="move-summary"></div>
 <div class="move-layout"><div><div class="move-map-tools"><strong>이동 구간</strong><button type="button" data-move-fit>전체 보기</button></div><div id="move-map" aria-label="출발지, 환승·하차 지점, 목적지 지도"></div><p class="now-note" id="move-map-note">점선은 구간 개요이며 실제 도로·철도 노선이 아닙니다. +/−로 확대·축소할 수 있어요.</p></div><div><ol id="move-steps" class="move-steps"></ol><p class="now-note">단계는 직접 눌러 넘겨요. 이동·하차를 자동 감지하지 않습니다.</p></div></div>
 <div id="move-live-links" class="now-actions move-live-links"></div><p class="now-note">길찾기를 열면 출발·도착 위치가 Google Maps에 전달됩니다. 현재 위치는 이 사이트의 서버나 브라우저 저장소에 보관하지 않아요.</p>
 <section class="move-pay"><h3>개찰구에서 뭘 내면 돼?</h3><div class="move-pay-options">
 <details open><summary>공항급행 · 현금 / 교통카드 / 카드 터치</summary><p><b>현금:</b> 난카이 발매기에서 新今宮(신이마미야), 성인 인원을 선택해 일반 승차권을 구매하세요. 1인 ¥970, 3명 ¥2,910. 종이 승차권은 나갈 때까지 보관하세요.</p><p><b>ICOCA·Suica 등:</b> 잔액을 확인하고 1인 1장으로 입장·퇴장 때 같은 카드를 태그하세요. 잔액 부족 시 정산기 또는 직원에게 문의하세요.</p><p><b>비접촉 신용·체크카드:</b> 대응 카드와 전용 리더가 있는 개찰구만 이용하세요. 입장·퇴장에 같은 카드 또는 같은 휴대폰을 사용하세요. 3명이 카드 한 장을 돌려 쓰면 안 됩니다. 인식되지 않으면 직원에게 확인하고 승차권을 구입하세요.</p>${a('https://www.nankai.co.jp/contents/contactless/','난카이 대응 카드·역')}${a('https://www.nankai.co.jp/contents/contactless/qa.html','카드 터치 이용 조건')}</details>
 <details><summary>라피트 · QR 티켓과 좌석 지정</summary><p>공식 디지털 일반석은 1인 ¥1,410. 승차권과 특급권이 포함돼요. 구매만 하고 타면 안 되고, 탑승 날짜·열차·좌석을 지정한 뒤 전용 QR 개찰구를 이용하세요.</p><p>좌석 지정은 출발 5분 전까지. 티켓 지갑에서 QR을 열어 사용하세요. 이미 QR 승차권을 샀다면 교통카드로 다시 입장하지 마세요. 일반 교통카드만으로 라피트 지정석에 탈 수는 없습니다.</p>${a('https://www.nankai.co.jp/en_railway/ticket/rapit','공식 가격·구매·환불 조건')}</details>
 <details><summary>시내 이동 · 패스는 필요할 때만</summary><p>기존 ICOCA·Suica가 있다면 그대로 쓰는 게 간단해요. Osaka Metro도 대응 비접촉 카드 전용 리더를 이용할 수 있습니다. JR·난카이·Metro의 적용 범위는 서로 다릅니다.</p><p>Metro·시티버스를 여러 번 탈 날만 Enjoy Eco Card와 개별 운임을 비교하세요. 성인 토·일·공휴일 ¥620, 평일 ¥820. 난카이 공항열차·JR은 포함되지 않으며, 유메시마 등 제외 구간이 있어요. 공항→숙소 한 번 이동용으로 사는 표가 아닙니다.</p>${a('https://subway.osakametro.co.jp/en/guide/fare/card_tickets/benri-joshaken.php','Metro 패스 가격·제외 구간')}${a('https://subway.osakametro.co.jp/guide/page/contactless_payment.php','Metro 카드 터치')}</details></div>
 <p class="now-note">요금·사용 조건: 2026-09-05 공식 페이지 확인. 소요시간은 대기·도보를 포함한 계획용 추정치이며 실시간 도착 예정이 아닙니다. 구매 화면과 역 안내가 우선입니다.</p>
 <details class="now-help"><summary>출처 · 지연 · T2 셔틀</summary>${a('https://www.howto-osaka.com/en/wp/wp-content/uploads/2023/08/%EF%BC%88%E3%81%8A%E7%9F%A5%E3%82%89%E3%81%9B%EF%BC%89%E9%81%8B%E8%B3%83%E6%94%B9%E5%AE%9A%E3%80%80FMO%E7%94%A8_%E8%8B%B1%E8%AA%9E.pdf','난카이 일반 운임 공지')}${a('https://www.kansai-airport.or.jp/en/access/t2/','공항 T2 무료 셔틀')}${a('https://www.traffic.nankai.co.jp/','난카이 운행 상황')}</details></section>`;
 function chosen(){const routes=C.routes(destination,origin,$('#move-origin').value);return routes.find(r=>r.id===choice)||routes[0];}
 function renderMap(fit=true){
  if(panel.hidden||!window.L)return;
  if(!map){map=L.map('move-map',{scrollWheelZoom:false});L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(map).on('tileerror',()=>{$('#move-map-note').textContent='지도가 연결되지 않아도 단계 안내와 길찾기는 사용할 수 있어요.';});layer=L.layerGroup().addTo(map);}
  map.invalidateSize();layer.clearLayers();const steps=chosen().steps;const points=[];
  steps.forEach((s,i)=>{if(C.valid(s.from?.coords)){points.push(s.from.coords);L.circleMarker(s.from.coords,{radius:i===stage?9:5,color:i===stage?'#ae4933':'#183c50',fillOpacity:1}).bindTooltip(esc(s.from.name)).addTo(layer);}if(C.valid(s.to?.coords)){points.push(s.to.coords);L.circleMarker(s.to.coords,{radius:6,color:'#183c50',fillOpacity:1}).bindTooltip(esc(s.to.name)).addTo(layer);}if(C.valid(s.from?.coords)&&C.valid(s.to?.coords))L.polyline([s.from.coords,s.to.coords],{color:i===stage?'#ae4933':'#839198',weight:i===stage?4:2,dashArray:'6 8'}).addTo(layer);});
  if(points.length&&fit)map.fitBounds(L.latLngBounds(points),{padding:[28,28],maxZoom:16,animate:false});
 }
 function render(){
  const routes=C.routes(destination,origin,$('#move-origin').value),route=routes.find(r=>r.id===choice)||routes[0];choice=route.id;stage=Math.min(stage,route.steps.length-1);
  $('#move-title').textContent=destination.id==='booked-livin-nanbaminami'?'숙소로 이동':destination.id==='kix-return'?'공항으로 이동':'여기로 이동';
  $('#move-place').textContent=destination.name;$('#move-address').textContent=destination.address||destination.jp||'정확한 지점은 길찾기에서 확인';
  $('#move-choices').innerHTML=routes.map(r=>`<button type="button" data-move-choice="${r.id}" aria-pressed="${choice===r.id}"><span>${r.label}</span><strong>${r.fare===null?'실시간 확인':yen(r.fare)}</strong><small>${r.time}</small></button>`).join('');
  $('#move-summary').innerHTML=`<h3>${esc(route.title)}</h3><p>${esc(route.note)}</p>${route.fare!==null?`<p class="move-total">1인 ${yen(route.fare)} <span>· 성인 3명 ${yen(route.fare*3)}</span></p>`:''}`;
  $('#move-steps').innerHTML=route.steps.map((s,i)=>`<li class="${i===stage?'is-current':i<stage?'is-done':''}"><button type="button" data-move-step="${i}"><b>${i<stage?'✓':String(i+1).padStart(2,'0')}</b><span>${esc(s.title)}</span></button><p>${esc(s.detail)}</p><div class="now-actions">${a(C.directions(s.to,s.from,s.mode),s.mode==='walking'?'이 구간 도보 안내':'이 구간 열차·경로')}${i===stage&&i<route.steps.length-1?`<button type="button" data-move-next>여기까지 했어 →</button>`:''}</div></li>`).join('');
  $('#move-live-links').innerHTML=a(C.directions(destination,origin,'transit'),'지금 출발 · 전체 대중교통 경로')+a(C.directions(destination,origin,'walking'),'내 위치에서 도보 안내')+(destination.id==='booked-livin-nanbaminami'?'<button type="button" data-today-nav="hotel-search-v3">숙소 출입 안내</button>':'');
  renderMap();
 }
 function manual(key){requestId++;locating=false;$('#move-origin').value=key;origin=C.stops[key]?{...C.stops[key],manual:true}:null;stage=0;$('#move-status').textContent=origin?`${origin.name} 출발 기준 · 실제 GPS가 아닙니다.`:'현재 위치를 확인하거나 공항·출발역을 골라주세요.';$('#move-locate-failed')?.remove();render();}
 async function locate(){
  if(locating)return;const id=++requestId;locating=true;$('#move-status').textContent='현재 위치 확인 중… 권한이 없으면 출발역을 직접 골라도 됩니다.';
  const fail=message=>{if(id!==requestId)return;locating=false;$('#move-status').textContent=message;};
  if(!navigator.geolocation){fail('위치 기능이 없습니다. 출발지를 직접 선택하세요.');return;}
  navigator.geolocation.getCurrentPosition(p=>{
   if(id!==requestId)return;locating=false;const coords=[p.coords.latitude,p.coords.longitude];
   if(!C.valid(coords)||coords[0]<34.2||coords[0]>35.1||coords[1]<135||coords[1]>135.9){fail('오사카 밖의 위치예요. 출발지를 직접 골라주세요.');return;}
   if(p.coords.accuracy>1500){fail('위치 오차가 커서 사용하지 않았어요. 터미널·출발역을 직접 골라주세요.');return;}
   gps={coords,actual:true,name:'확인한 내 위치',accuracy:p.coords.accuracy,at:Date.now()};origin=gps;$('#move-origin').value='auto';stage=0;$('#move-status').textContent=`내 위치 확인 · 오차 약 ${Math.round(p.coords.accuracy)}m · 현재 위치는 저장하지 않아요`;render();
   document.dispatchEvent(new CustomEvent('osaka:located',{detail:gps}));
  },e=>fail(e.code===1?'위치 권한이 꺼져 있어요. 출발지에서 공항·역을 골라주세요.':'위치를 잡지 못했어요. 공항·출발역을 직접 선택하세요.'),{enableHighAccuracy:true,timeout:10000,maximumAge:0});
 }
 function open(item,from){
  destination=item||P.selectedHotel();stage=0;choice='express';
  if(from&&C.stops[from])manual(from);else if(gps&&Date.now()-gps.at<5*60000){origin=gps;$('#move-origin').value='auto';$('#move-status').textContent='방금 확인한 내 위치 기준 · 이동했다면 위치를 다시 확인하세요.';}else{origin=null;$('#move-origin').value='auto';$('#move-status').textContent='현재 위치를 확인하거나 공항·출발역을 골라주세요.';}
  P.showGuidePanel('move-v44',{focus:true});render();setTimeout(()=>renderMap(),80);
  if(!from&&(!gps||Date.now()-gps.at>=5*60000))locate();
 }
 document.addEventListener('click',e=>{
  const t=e.target.closest('[data-move-open],[data-move-locate],[data-move-copy],[data-move-choice],[data-move-step],[data-move-next],[data-move-fit]');if(!t)return;
  if(t.hasAttribute('data-move-open')){const id=t.dataset.moveOpen;open(id==='hotel'?P.selectedHotel():id==='airport'?{id:'kix-return',name:'간사이공항',jp:'関西国際空港',coords:C.stops.kix1.coords}:P.allItems.get(id),t.dataset.moveFrom);return;}
  if(t.hasAttribute('data-move-locate')){locate();return;}
  if(t.hasAttribute('data-move-copy')){navigator.clipboard?.writeText(destination.address||destination.name).then(()=>{$('#move-status').textContent='주소를 복사했어요.';}).catch(()=>{$('#move-status').textContent='주소를 길게 눌러 복사하세요.';});return;}
  if(t.dataset.moveChoice){choice=t.dataset.moveChoice;stage=0;render();return;}
  if(t.dataset.moveStep!==undefined){stage=+t.dataset.moveStep;render();const step=chosen().steps[stage];if(map&&C.valid(step.to?.coords))map.setView(step.to.coords,16,{animate:false});return;}
  if(t.hasAttribute('data-move-next')){stage=Math.min(stage+1,chosen().steps.length-1);render();return;}
  if(t.hasAttribute('data-move-fit'))renderMap();
 });
 $('#move-origin').addEventListener('change',()=>manual($('#move-origin').value));
 document.addEventListener('osaka:panel',e=>{if(e.detail.id==='move-v44'){if(gps&&Date.now()-gps.at>=5*60000&&origin?.actual){origin=null;gps=null;$('#move-status').textContent='위치 확인 후 5분이 지났어요. 현재 위치를 다시 눌러주세요.';}render();setTimeout(()=>renderMap(),80);}else{requestId++;locating=false;}});
 window.OsakaMove={open,status:()=>({version:44,destination:destination.id,originKnown:!!origin,originActual:!!origin?.actual,choice,stage,mapReady:!!map})};
 if(!panel.hidden){render();setTimeout(()=>renderMap(),80);}
})();
