(function(){
 'use strict';
 const known=new Set(Object.values(window.OSAKA_CURATED_V45.days).flatMap(routes=>routes.flatMap(r=>r.stops.map(s=>s.id))));
 const zones={hotel:['leave-hotel45','back-hotel45','rest-hotel45','breakfast45','checkout45','hotel-anchor48'],bay:['kaiyukan','tempo-lunch45','tempo-wheel45','tempozan'],umeda:['sky','kiji','umeda-break45'],tennoji:['harukas-v5','abeno-dinner45'],shinsekai:['shinsekai','daruma-v3'],castle:['castle']};
 const zone=id=>Object.keys(zones).find(z=>zones[z].includes(id))||'namba';
 const metro=route=>({mode:'지하철 + 도보',travelmode:'transit',route,source:'https://subway-tr.osakametro.co.jp/station_guide/index.php'});
 function describe(from,to,minutes){
   if(to==='airport48')return{mode:'난카이 전철 + 도보',travelmode:'transit',route:'난카이 난바역 → 공항급행 또는 라피트 → 간사이공항역 → 출국 터미널. 라피트는 별도 특급권 필요; T2면 셔틀 시간 추가.',minutes,source:'https://www.kansai-airport.or.jp/en/access/train'};
   if((!known.has(from)&&from!=='hotel-anchor48')||!known.has(to))return null;
   const a=zone(from),b=zone(to);let result;
   if(a==='castle'&&b==='bay')result=metro('성 외관 → 도보로 모리노미야역 → 중앙선(유메시마 방면) → 오사카코역 → 도보로 가이유칸.');
   else if(a==='hotel'&&b==='castle')result=metro('숙소 → 다이코쿠초역 → 미도스지선 북행 → 혼마치역 환승 → 중앙선(나가타·갓켄나라토미가오카 방면) → 모리노미야역 → 도보로 성.');
   else if(a==='hotel'&&b==='bay')result=metro('숙소 → 다이코쿠초역 → 미도스지선 북행 → 혼마치역 환승 → 중앙선(유메시마 방면) → 오사카코역 → 1번 출구에서 도보 약 5분.');
   else if(a==='bay'&&b==='hotel')result=metro('도보로 오사카코역 → 중앙선(나가타 방면) → 혼마치역 환승 → 미도스지선 남행 → 다이코쿠초역 → 도보로 숙소.');
   else if(a==='bay'&&b==='umeda')result=metro('오사카코역 → 중앙선(나가타 방면) → 혼마치역 환승 → 미도스지선 북행 → 우메다역 → 도보. 스카이빌딩은 JR 오사카역 쪽에서 걸어가기.');
   else if(a==='bay'&&(to==='denden'||b==='shinsekai'))result=metro('오사카코역 → 중앙선(나가타 방면) → 사카이스지혼마치역 환승 → 사카이스지선(덴가차야 방면) → 에비스초역 → 도보.');
   else if(a==='bay'&&b==='namba')result=metro('오사카코역 → 중앙선(나가타 방면) → 혼마치역 환승 → 미도스지선 남행 → 신사이바시역 → 상점가까지 도보.');
   else if(a==='umeda'&&b==='hotel')result=metro('도보로 우메다역 → 미도스지선 남행 → 다이코쿠초역 → 숙소까지 도보.');
   else if(a==='umeda'&&b==='namba')result=metro('도보로 우메다역 → 미도스지선 남행 → 난바역 → 도톤보리까지 도보.');
   else if(a==='tennoji'&&b==='hotel')result=metro('하루카스·아베노 → 도보로 덴노지역 → 미도스지선 북행 → 다이코쿠초역 → 도보로 숙소.');
   else if(a==='shinsekai'&&b==='tennoji')result={mode:'도보',travelmode:'walking',route:'신세카이 → 덴노지 방향 큰길 → 아베노 하루카스. 약 20~30분 보행 여유. 언덕·신호 대기 포함.'};
   else if(from==='joroku-queue45'&&to==='joroku45')result={mode:'현장 대기·입장',travelmode:'walking',route:'같은 가게 앞에서 대기 후 입장. 표시 시간은 교통 이동이 아니라 대기 여유.'};
   else if(from==='sky'&&to==='kiji')result={mode:'건물 내 도보',travelmode:'walking',route:'전망대에서 내려와 같은 스카이빌딩 지하 식당가로 이동. 엘리베이터 대기 포함.'};
   else if(a===b&&a==='bay')result={mode:'도보',travelmode:'walking',route:'가이유칸·마켓플레이스·관람차가 모인 덴포잔 단지 안에서 걸어서 이동.'};
   else result={mode:'도보',travelmode:'walking',route:from==='locker45'||to==='train45'?'난바·니혼바시 구역 안에서 도보 이동. 짐 보관·회수와 역 안 이동 여유 포함.':'구역 안에서 걸어서 이동. 아래 도보 길찾기로 횡단보도·골목 경로 확인.'};
   return {...result,minutes};
 }
 window.OsakaLegs48={describe};
})();
