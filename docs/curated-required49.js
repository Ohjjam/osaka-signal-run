(function(){
 'use strict';
 const D=window.OSAKA_CURATED_V45;
 const s=(id,time,duration,leg,slot='',note='')=>({id,time,duration,leg,slot,note});
 const hotel=[34.6544118,135.4997683],bay=[34.6545,135.4289];
 D.places.push(
  {id:'ramenso49',name:'라멘소 레키시오 키자메 일본바시점',jp:'ラーメン荘 歴史を刻め 日本橋店',address:'大阪府大阪市浪速区日本橋5-14-20',coords:[34.6552,135.5054],category:'food',group:'ramen',area:'namba',areaLabel:'니혼바시·에비스초',genreLabel:'지로계 라멘',planningOnly:false,duration:90,price:0,priceText:'현장 메뉴판 확인',image:'assets/food-ramen.jpg',description:'굵은 면·돼지고기·마늘·숙주가 올라가는 대용량 지로계 라멘.',menu:'기본 라멘 + 돼지고기. 면 적게(麺少なめ), 마늘 여부는 직원에게 확인.',official:'https://tabelog.com/osaka/A2701/A270206/27140375/',map:'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent('ラーメン荘 歴史を刻め 日本橋店 大阪市浪速区日本橋5-14-20')},
  {id:'ramen-queue49',name:'라멘소 저녁 오픈 대기',coords:[34.6552,135.5054],category:'attraction',planningOnly:true,description:'18시 저녁 영업 안내. 17:30부터 줄 확인; 입장 시각은 보장되지 않습니다.'},
  {id:'bay-locker49',name:'가이유칸 입장 전 짐 보관·대기',coords:bay,category:'attraction',planningOnly:true,description:'캐리어는 전시실 반입 불가. 입장 전 유료 로커에 보관. 크기·빈자리 보장 없음.',official:'https://www.kaiyukan.com/about/news/20515.html'},
  {id:'bay-airport49',name:'짐 회수 후 간사이공항 직행',coords:bay,category:'attraction',planningOnly:true,description:'12시까지 덴포잔 출발. 숙소로 돌아가지 않고 오사카코 → 벤텐초 → JR 간사이공항으로 이동.',official:'https://www.kansai-airport.or.jp/en/access/train'}
 );
 D.requiredByDay={sat:['ramenso49'],sun:['castle','daiki-sushi-v4'],mon:['kaiyukan']};
 const start=()=>[s('leave-hotel45','17:00',15,15),s('ramen-queue49','17:30',15,15),s('ramenso49','18:00',90,30,'dinner','필수. 대기 포함 90분 계획값. 줄이 더 길면 뒤의 선택 코스를 줄이기. 면 양이 크므로 야식은 나눠 먹기.')];
 const satTails=[
  [s('dotonbori-night-v3','20:00',45,15),s('hozenji-v3','21:00',30,30),s('back-hotel45','22:00',15,0)],
  [s('shinsekai','20:00',45,15),s('daruma-v3','21:00',45,30,'late'),s('back-hotel45','22:15',15,0)],
  [s('harukas-v5','20:00',90,45),s('back-hotel45','22:15',15,0)],
  [s('dotonbori-night-v3','20:00',45,15),s('fukutaro','21:00',60,30,'late'),s('back-hotel45','22:30',15,0)],
  [s('hozenji-v3','20:00',30,15),s('marufuku','20:45',45,30,'snack'),s('back-hotel45','22:00',15,0)],
  [s('dotonbori-night-v3','20:00',45,15),s('uranamba-v3','21:00',60,30,'late'),s('back-hotel45','22:30',15,0)]
 ];
 D.days.sat=satTails.map((tail,i)=>({id:'sat-required49-'+i,label:['A · 라멘소·네온 산책','B · 라멘소·신세카이 꼬치','C · 라멘소·300m 야경','D · 라멘소·철판 먹방','E · 라멘소·레트로 카페','F · 라멘소·우라난바 한잔'][i],tag:i===0?'기본 추천':'라멘소 필수',why:'숙소에서 가까운 일본바시 라멘소를 먼저 고정하고, 저녁 취향에 맞는 한 구역으로 이동합니다.',note:'라멘소는 일요일 휴무로 안내되어 토요일 고정. 임시휴무는 방문 전 확인. 대기가 길면 라멘 뒤 선택 일정을 줄이고 늦은 추가 식사는 생략하세요.',stops:[...start(),...tail]}));
 const sunStart=()=>[s('breakfast45','08:00',30,60,'breakfast'),s('castle','09:30',120,60,'','필수. 천수각·해자·석축. 내부 입장 대기가 길면 외관과 공원을 우선.'),s('daiki-sushi-v4','12:30',90,30,'lunch','필수 스시. 다이키스이산 도톤보리점에서 참치·연어·흰살생선을 나눠 주문. 대기 포함 계획값.')];
 const sunTails=[
  [s('hozenji-v3','14:30',30,15),s('shinsaibashi47','15:15',60,15),s('amerikamura-attraction-v5','16:30',45,30),s('fukutaro','17:45',90,15,'dinner'),s('dotonbori-night-v3','19:30',60,30),s('back-hotel45','21:00',15,0)],
  [s('sky','15:00',90,20),s('kiji','16:50',90,20,'dinner'),s('umeda-break45','18:40',75,45),s('back-hotel45','20:40',15,0)],
  [s('denden','14:30',90,30),s('shinsekai','16:30',45,15),s('daruma-v3','17:30',75,30,'dinner'),s('harukas-v5','19:15',90,45),s('back-hotel45','21:30',15,0)],
  [s('doguya','14:30',45,15),s('marufuku','15:30',60,15,'snack'),s('dotonbori-night-v3','16:45',60,15),s('fukutaro','18:00',90,30,'dinner'),s('back-hotel45','20:00',15,0)],
  [s('shinsaibashi47','14:30',90,15),s('amerikamura-attraction-v5','16:15',60,30),s('fukutaro','17:45',90,15,'dinner'),s('uranamba-v3','19:30',75,30,'late'),s('back-hotel45','21:15',15,0)],
  [s('hozenji-v3','14:30',30,30),s('rest-hotel45','15:30',90,30),s('shinsekai','17:30',45,15),s('daruma-v3','18:30',75,30,'dinner'),s('back-hotel45','20:15',15,0)]
 ];
 D.days.sun=sunTails.map((tail,i)=>{const head=sunStart();if(i===1)head.at(-1).leg=60;return{id:'sun-required49-'+i,label:['A · 성·스시·미나미 종주','B · 성·스시·우메다 전망','C · 성·스시·덕질·야경','D · 성·스시·카페·철판','E · 성·스시·쇼핑·한잔','F · 성·스시·휴식·신세카이'][i],tag:i===0?'기본 추천':'성 + 스시 필수',why:'오전 오사카성 → 도톤보리 스시 점심은 모든 안 공통. 오후에는 한 방향으로 묶어 왕복 이동을 줄입니다.',note:'성 입장료·식사비 별도. 스시 대기가 길면 오후 첫 선택 장소를 줄이세요. 월요일 수족관을 위해 오늘 밤에 오전 입장권과 짐 보관 방법을 확인하세요.',stops:[...head,...tail]};});
 D.days.mon=[{id:'mon-required49',label:'A · 수족관 집중·공항 직행',tag:'16시 비행 기준 · 한 가지 고정',why:'10시 입장이 가능한 경우의 출국일 압축 코스. 숙소를 일찍 체크아웃하고 짐을 덴포잔에 보관한 뒤 관람합니다. 난바로 짐을 찾으러 돌아가지 않습니다.',note:'9/7 실제 개장시각·10시 입장권 재고는 미확정: 공식 예매에서 반드시 확인. 10시 입장과 캐리어 보관이 확보되어야 이 일정이 성립합니다. 11:30 관람 종료, 12시 출발 고정. 점심은 공항에서. 14시 터미널 도착 목표이며 T2면 셔틀·항공사 마감시간을 추가 확인.',stops:[s('breakfast45','07:15',30,15,'breakfast'),s('checkout45','08:00',30,60),s('bay-locker49','09:30',15,15),s('kaiyukan','10:00',90,15,'','필수 · 오전 입장권 확보 조건. 고래상어 중앙 수조 중심 90분 압축 관람; 늦게 입장해도 공항 출발을 늦추지 않기.'),s('bay-airport49','11:45',15,0)]}];
 D.details.ramenso49={why:'굵은 면과 산처럼 쌓인 숙주·돼지고기, 마늘을 즐기는 지로계 라멘. 이번 여행의 필수 라멘.',order:'기본 라멘. 대용량이므로 면 적게 요청을 먼저 확인하고 마늘은 취향대로.',tip:'월~토 11–15시/18–23시, 일요일 휴무로 안내. 임시휴무·품절·대기는 별개이며 예약 불가. 지도 핀은 근사 위치이므로 일본어 상호로 입구 확인.',source:'https://tabelog.com/osaka/A2701/A270206/27140375/'};
 D.details['daiki-sushi-v4']={why:'회전 초밥 접시를 보며 참치·흰살생선·연어를 각자 취향대로 골라 먹기 좋은 도톤보리 스시집.',order:'참치·연어·도미 등 흰살생선부터 3명이 다른 접시로 시작. 계절 생선은 당일 메뉴에서 선택.',tip:'공식 11:00–23:00, 주문 마감22:30. 접시별 가격 확인. 90분에는 예상 대기 포함, 줄이 길면 오후 선택 일정 축소.',source:'https://sushi.daiki-suisan.co.jp/shop/12?keyword=7'};
 D.details.castle.order='천수각·해자·석축. 내부 박물관은 입장권과 대기시간을 보고 선택.';
 D.details.castle.tip='역에서 천수각까지 걷는 시간이 있습니다. 11:30에는 난바로 출발, 내부 대기가 길면 공원·외관을 우선.';
 D.details.kaiyukan.tip='이번 월요일은 90분 압축 관람. 10시 입장 가능 여부와 시간 지정권을 먼저 확인. 캐리어 반입 불가, 입장 전 로커 크기와 보관 가능 여부 확인.';
 D.version=49;
})();
