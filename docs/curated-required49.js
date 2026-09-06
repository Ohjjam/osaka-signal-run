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
 const extra=(id,name,coords,description,official,category='attraction')=>({id,name,coords,description,official,category,planningOnly:false,duration:60,price:0,priceText:'구매·식사 별도'});
 D.places.push(
  extra('tenjin50','텐진바시스지 상점가',[34.7068,135.5113],'텐마의 긴 아케이드 상점가. 스시 뒤 로컬 상점과 간식 가게를 가볍게 둘러보기.','https://osaka-info.jp/experience/ja/osaka/spot/237'),
  extra('nakazaki50','나카자키초 카페·빈티지 골목',[34.7067,135.5055],'오래된 주택 사이 작은 카페와 빈티지 숍. 음료 한 잔과 관심 가게 두 곳을 골라 쉬기.','https://osaka-info.jp/experience/ja/osaka/spot/203'),
  extra('nakanoshima50','나카노시마 강변·중앙공회당 외관',[34.6925,135.5030],'강변 산책과 붉은 벽돌 공회당 외관. 9월에는 만개한 장미를 기대하는 코스가 아닙니다.','https://discover.osaka-info.jp/jp/spots/nakanoshima-park')
 );
 const sunStart=()=>[s('breakfast45','09:30',30,60,'breakfast','아침은 가볍게. 10시에는 텐마로 출발해 스시 점심부터 시작.'),s('harukoma','11:00',90,60,'lunch','필수 스시 · 하루코마 본점. 오픈 시각 입장 목표이며 대기 포함 계획값. 식사 후 오사카성으로 이동.'),s('castle','13:30',90,60,'','필수. 점심 후 천수각·해자·석축. 15시 출발 목표, 내부 입장 줄이 길면 외관·공원 우선.')];
 D.places.push(
  extra('art51','나카노시마 미술관 · 카를 발저 전',[34.6915,135.4916],'그림·무대미술·삽화를 넘나든 스위스 작가의 전시. 이번 여행 날짜에 열리는 실내 미술 관람.','https://nakka-art.jp/exhibition-post/karlwalser-2026/'),
  extra('karato51','뮤제 카라토 · 미술관 레스토랑',[34.6915,135.4916],'미술관 1층에서 먹는 카페 레스토랑 저녁. 철판 요리 대신 양식 메뉴를 선택.','https://musee-karato.com/','food'),
  extra('temmangu51','오사카 텐만구',[34.6960,135.5127],'스가와라 미치자네를 모시는 신사. 텐진마쓰리와 연결되는 역사·참배 공간.','https://osakatemmangu.or.jp/'),
  extra('tenma-cafe51','미나미모리마치 카페 휴식',[34.6985,135.5115],'상점가 남쪽 열린 카페에서 커피·디저트 한 가지. 특정 가게 예약이 아닌 현장 선택 휴식.','https://osaka-info.jp/experience/ja/osaka/spot/237','food'),
  extra('toriki51','토리키조쿠 텐진바시 3초메점',[34.7000,135.5110],'닭꼬치와 한 잔으로 마무리하는 저녁. 우메다로 다시 올라가지 않습니다.','https://map.torikizoku.co.jp/detail/74/','food')
 );
 D.details.art51={why:'전망대·쇼핑 대신 그림을 보는 60분 압축 관람. 2026/7/4–9/27 카를 발저 전 관람.',order:'카를 발저 전 4층 전시. 페르메이르 전은 별도 전시·티켓이므로 이 코스에 포함하지 않음.',tip:'공식 10–17시, 입장16:30까지. 일반1800엔, 날짜·시간 지정제 아님. 아직 티켓 구매 안 됨. 16시 입장 목표, 혼잡·임시 변경 확인.',source:'https://nakka-art.jp/exhibition-post/karlwalser-2026/'};
 D.details.karato51={why:'전시를 본 뒤 같은 건물에서 앉아 저녁을 먹어 이동 부담을 줄이는 선택.',order:'당일 식사 메뉴에서 양식 메인 한 가지씩. 디저트·음료는 별도, 가격·제공 메뉴 확인.',tip:'공식 안내11–21시, 입장마감19:30·주문마감20:30. 대관·휴무 공지와 좌석 확인. 예약된 식사가 아닙니다.',source:'https://musee-karato.com/'};
 D.details.toriki51={why:'전망대나 미술관 없이 로컬 상점가를 즐긴 뒤 닭꼬치로 끝내는 코스 전용 저녁.',order:'모모 키조쿠야키 소금·양념을 나눠 주문하고 츠쿠네 등 닭꼬치 추가. 술은 선택.',tip:'공식17–24시. 北区天神橋3-3-19 2층. 혼잡 시 대기, 가격은 현장 메뉴 확인. 지도 핀은 근사 위치로 건물·층 확인.',source:'https://map.torikizoku.co.jp/detail/74/'};
 const route=(id,label,tag,why,note,transfer,tail)=>{const head=sunStart();head.at(-1).leg=transfer;return{id,label,tag,why,note,stops:[...head,...tail]};};
 D.days.sun=[
  route('sun-skyline51','A · 쇼핑·고층 야경','도시 풍경 / 전망권 별도','스시 점심과 오사카성 관람 뒤 우메다에 집중. 쇼핑 → 해 질 무렵 공중정원 → 오코노미야키. 미술관·신사·상점가 순례는 넣지 않았습니다.','쇼핑을 좋아하고 대표 야경을 보고 싶으면 A. 날씨가 흐리면 전망대 입장 전 시야 확인. 저녁 키지 대기가 길면 같은 건물 식당가에서 교체.',60,[s('umeda-break45','16:00',60,30),s('sky','17:30',75,20),s('kiji','19:05',90,45,'dinner'),s('back-hotel45','21:20',15,0)]),
  route('sun-art51','B · 미술 전시·강변 산책','예술·건축 / 전시1800엔','스시 점심 → 오사카성 → 나카노시마로 이동. 카를 발저 전 → 미술관 레스토랑 → 강변·공회당 외관. 우메다 쇼핑과 전망대는 전부 제외했습니다.','그림·건축·조용한 산책을 좋아하면 B. 16시 전시 입장 목표, 16:30 입장 마감·17시 폐관. 지연되면 성 내부 관람을 줄이기. 마감 후에는 전시 입장이 불가하므로 외관·강변만 가능. 월요일 수족관과 다른 실내 관람 경험.',60,[s('art51','16:00',60,15),s('karato51','17:15',75,30,'dinner'),s('nakanoshima50','19:00',60,45),s('back-hotel45','20:45',15,0)]),
  route('sun-local51','C · 상점가·신사·닭꼬치','로컬 골목 / 유료 명소 없음','스시 점심과 성 관람 후 텐만구부터 북쪽 상점가로 이동해 텐만구 참배·카페·닭꼬치. 쇼핑몰·고층 전망·미술관 대신 동네 골목과 먹거리에 시간을 씁니다.','관광시설 입장료를 줄이고 편하게 먹고 걸으려면 C. 상점가 전체를 완주하지 않고 텐마–미나미모리마치 구간만. 카페는 현장에서 열린 곳을 고릅니다.',60,[s('temmangu51','16:00',30,15),s('tenma-cafe51','16:45',45,15,'snack'),s('tenjin50','17:45',45,15),s('toriki51','18:45',90,45,'dinner'),s('back-hotel45','21:00',15,0)])
 ];
 D.requiredByDay.sun=['castle','harukoma'];
 D.details.harukoma={why:'텐마의 대중적인 스시집. 11시 스시 점심을 먼저 먹은 뒤 오사카성으로 이동합니다.',order:'참치·흰살생선·새우부터 서로 다른 접시로 시작. 가격은 당일 메뉴판 확인.',tip:'본점: 大阪市北区天神橋5-5-2. 11:00–21:30·화요일 휴무로 안내, 재료 소진 시 종료. 예약 불가. 대기 90분 계획값은 입장 보장이 아닙니다.',source:'https://tabelog.com/osaka/A2701/A270103/27002205/'};
 D.details.nakazaki50={why:'낮은 주택과 작은 카페·빈티지 숍이 이어지는 골목. 오늘 본 미나미 네온과 분위기가 다릅니다.',order:'열린 카페에서 커피·디저트 한 가지. 빈티지 숍은 취향에 맞는 두 곳만.',tip:'카페·가게별 휴무와 영업시간이 다릅니다. 주거지이므로 소음과 사진 촬영을 배려하세요.',source:'https://osaka-info.jp/experience/ja/osaka/spot/203'};
 D.days.mon=[{id:'mon-required49',label:'A · 수족관 집중·공항 직행',tag:'16시 비행 기준 · 한 가지 고정',why:'10시 입장이 가능한 경우의 출국일 압축 코스. 숙소를 일찍 체크아웃하고 짐을 덴포잔에 보관한 뒤 관람합니다. 난바로 짐을 찾으러 돌아가지 않습니다.',note:'9/7 실제 개장시각·10시 입장권 재고는 미확정: 공식 예매에서 반드시 확인. 10시 입장과 캐리어 보관이 확보되어야 이 일정이 성립합니다. 11:30 관람 종료, 12시 출발 고정. 점심은 공항에서. 14시 터미널 도착 목표이며 T2면 셔틀·항공사 마감시간을 추가 확인.',stops:[s('breakfast45','07:15',30,15,'breakfast'),s('checkout45','08:00',30,60),s('bay-locker49','09:30',15,15),s('kaiyukan','10:00',90,15,'','필수 · 오전 입장권 확보 조건. 고래상어 중앙 수조 중심 90분 압축 관람; 늦게 입장해도 공항 출발을 늦추지 않기.'),s('bay-airport49','11:45',15,0)]}];
 D.details.ramenso49={why:'굵은 면과 산처럼 쌓인 숙주·돼지고기, 마늘을 즐기는 지로계 라멘. 이번 여행의 필수 라멘.',order:'기본 라멘. 대용량이므로 면 적게 요청을 먼저 확인하고 마늘은 취향대로.',tip:'월~토 11–15시/18–23시, 일요일 휴무로 안내. 임시휴무·품절·대기는 별개이며 예약 불가. 지도 핀은 근사 위치이므로 일본어 상호로 입구 확인.',source:'https://tabelog.com/osaka/A2701/A270206/27140375/'};
 D.details['daiki-sushi-v4']={why:'회전 초밥 접시를 보며 참치·흰살생선·연어를 각자 취향대로 골라 먹기 좋은 도톤보리 스시집.',order:'참치·연어·도미 등 흰살생선부터 3명이 다른 접시로 시작. 계절 생선은 당일 메뉴에서 선택.',tip:'공식 11:00–23:00, 주문 마감22:30. 접시별 가격 확인. 90분에는 예상 대기 포함, 줄이 길면 오후 선택 일정 축소.',source:'https://sushi.daiki-suisan.co.jp/shop/12?keyword=7'};
 D.details.castle.order='천수각·해자·석축. 내부 박물관은 입장권과 대기시간을 보고 선택.';
 D.details.castle.tip='역에서 천수각까지 걷는 시간이 있습니다. 15시에는 다음 지역으로 출발, 내부 대기가 길면 공원·외관을 우선.';
 D.details.kaiyukan.tip='이번 월요일은 90분 압축 관람. 10시 입장 가능 여부와 시간 지정권을 먼저 확인. 캐리어 반입 불가, 입장 전 로커 크기와 보관 가능 여부 확인.';
 D.version=52;
})();
