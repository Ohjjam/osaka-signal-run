(function(root,factory){if(typeof module==='object'&&module.exports)module.exports=factory();else root.OsakaMoveCore=factory();})(typeof window==='object'?window:globalThis,function(){
 'use strict';
 const stops={
  kix1:{name:'간사이공항 T1·공항역',jp:'関西空港駅 南海',coords:[34.4359,135.2436],kind:'airport'},
  kix2:{name:'간사이공항 T2',jp:'関西国際空港 第2ターミナル',coords:[34.4425,135.2257],kind:'airport'},
  shin:{name:'난카이 신이마미야역',jp:'南海 新今宮駅',coords:[34.6505,135.5002],kind:'station'},
  daikoku:{name:'다이코쿠초역',jp:'大国町駅',coords:[34.6561,135.4977],kind:'station'},
  namba:{name:'난카이 난바역',jp:'南海 なんば駅',coords:[34.6634,135.5018],kind:'station'}
 };
 const valid=c=>Array.isArray(c)&&c.length===2&&c.every(Number.isFinite)&&Math.abs(c[0])<=90&&Math.abs(c[1])<=180;
 function distance(a,b){if(!valid(a)||!valid(b))return null;const rad=x=>x*Math.PI/180;const x=Math.sin(rad(b[0]-a[0])/2)**2+Math.cos(rad(a[0]))*Math.cos(rad(b[0]))*Math.sin(rad(b[1]-a[1])/2)**2;return 6371*2*Math.atan2(Math.sqrt(x),Math.sqrt(1-x));}
 function query(item){return item?.address || (valid(item?.coords)&&item?.precision!=='area'?item.coords.join(','):`${item?.jp||item?.name||''} Osaka`);}
 function directions(destination,origin,mode='transit'){
  const p=new URLSearchParams({api:'1',destination:query(destination),travelmode:mode});
  if(origin&&(origin.actual||origin.manual)&&valid(origin.coords))p.set('origin',origin.coords.join(','));
  return 'https://www.google.com/maps/dir/?'+p;
 }
 function classify(c,accuracy=0){
  if(!valid(c))return '';
  if(accuracy>1500)return '';
  if(distance(c,stops.kix1.coords)<4)return distance(c,stops.kix2.coords)<.8?'kix2':'kix1';
  return '';
 }
 function routes(destination,origin,airportKey=''){
  const hotel=destination.id==='booked-livin-nanbaminami';
  const key=stops[airportKey]?airportKey:classify(origin?.coords,origin?.accuracy);
  const airport=stops[key];
  const step=(title,detail,from,to,mode='walking')=>({title,detail,from:valid(from?.coords)?{...from,manual:!from.actual}:from,to,mode});
  if(hotel&&airport?.kind==='airport'){
   const first=key==='kix2'?[step('T2 → 에어로플라자 무료 셔틀','공항역은 T2에 없어요. 무료 셔틀 약 7–9분 + 대기 후 공항역으로 이동하세요.',airport,stops.kix1,'transit')]:[step('도착층 → 2층 공항역','입국·수하물 수령 후 Railway 표지로 이동. JR이 아니라 NANKAI / 南海 매표·개찰구를 찾으세요.',origin,stops.kix1)];
   const end=step('신이마미야 → 숙소 도보','신이마미야에서 개찰구 밖으로 나와 숙소까지 약 8–12분. 출구·짐에 따라 달라져요. 마지막 도보 안내에서 주소를 확인하세요.',stops.shin,destination);
   return [{id:'express',label:'저렴하게',title:'공항급행 → 신이마미야 → 도보',fare:970,time:key==='kix2'?'약 70–95분':'약 60–85분',note:'1인 편도 · 일반석, 좌석 보장 없음 · 아래 두 철도안 중 저렴',steps:[...first,step('난카이 공항급행 · 난바 방면','Airport Express / 空港急行에 탑승 → 신이마미야 新今宮에서 하차. 보통 약 40–50분, 환승 없음. 종점 난바까지 가지 않아도 돼요.',stops.kix1,stops.shin,'transit'),end]},
    {id:'rapit',label:'앉아서',title:'라피트 지정석 → 신이마미야 → 도보',fare:1410,time:key==='kix2'?'약 55–80분':'약 45–70분',note:'공식 디지털 일반석 · 승차권+특급권 포함 · 급행보다 1인 ¥440 추가',steps:[...first,step('라피트 · 열차와 좌석 먼저 지정','온라인 구매 후 날짜·열차·좌석 지정 → 전용 QR 개찰구 → 지정 열차 탑승. 신이마미야에서 하차. 열차 대기에 따라 급행보다 늦을 수도 있어요.',stops.kix1,stops.shin,'transit'),end]}];
  }
  if(destination.id==='kix-return'&&distance(origin?.coords,stops.shin.coords)!==null&&distance(origin.coords,stops.shin.coords)<2){
   const first=step('난카이 신이마미야역으로','JR이 아니라 난카이 개찰구로 이동하세요. 플랫폼은 역 전광판에서 확인합니다.',origin,stops.shin);
   const end=step('공항역 → 출발 터미널','T1은 연결 통로로 이동합니다. T2 출발이면 에어로플라자 1층에서 무료 셔틀 약 7–9분 + 대기시간을 추가하세요. 항공사 터미널·체크인 마감을 확인하세요.',stops.kix1,destination);
   return [{id:'express',label:'저렴하게',title:'신이마미야 → 공항급행 → KIX',fare:970,time:'약 60–85분 + 터미널 이동',note:'월요일 16:00 출발 기준 · 13:00까지 공항행 이동 권장 · 체크인 마감은 항공사 기준',steps:[first,step('공항급행 · 関西空港 방면','반드시 목적지가 関西空港(간사이공항)인 열차를 확인하세요. 和歌山市(와카야마시) 방면 열차와 혼동하지 마세요.',stops.shin,stops.kix1,'transit'),end]},
   {id:'rapit',label:'앉아서',title:'신이마미야 → 라피트 → KIX',fare:1410,time:'약 45–70분 + 터미널 이동',note:'공식 디지털 일반석 · 구매 후 출발역·열차·좌석 지정 필요',steps:[first,step('라피트 · 공항 방면 지정 열차','신이마미야 출발로 열차와 좌석을 지정하세요. QR 승차권이면 전용 QR 개찰구를 이용합니다.',stops.shin,stops.kix1,'transit'),end]}];
  }
  const km=distance(origin?.coords,destination.coords);
  if(km!==null&&km<2&&destination.id!=='kix-return')return [{id:'walk',label:'걷기',title:'현재 출발지 → 목적지',fare:0,time:'도보시간은 실제 길찾기에서 확인',note:`직선 약 ${km<1?Math.round(km*1000)+'m':km.toFixed(1)+'km'} · 보행 경로 거리와 다릅니다`,steps:[step('목적지까지 도보 안내','지도의 선은 두 위치를 연결한 개요입니다. 횡단보도·출입구는 도보 길찾기에서 확인하세요.',origin,destination)]}];
  return [{id:'transit',label:'대중교통',title:'현재 위치에서 경로 확인',fare:null,time:'다음 열차·환승·요금은 실시간 길찾기에서',note:'이 사이트는 실시간 교통 검색 서비스에 연결돼 있지 않아 열차·운임을 추측하지 않습니다.',steps:[step('출발지와 목적지 확인','내 위치를 허용하거나 출발역을 골라주세요. 아래 버튼에서 지금 출발 기준 열차와 환승을 비교하세요.',origin,destination,'transit')]}];
 }
 return {stops,valid,distance,directions,classify,routes};
});
