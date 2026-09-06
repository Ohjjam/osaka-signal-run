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
 D.days.sun=[{id:'sun-castle-bay53',label:'스시 → 오사카성 → 가이유칸',tag:'일요일 두 명소 모두',why:'점심을 먼저 먹고 성에서 서쪽 베이로 한 번 이동. 가이유칸은 오늘 관람하고, 월요일은 다른 동네에 씁니다.',note:'16시 가이유칸 입장 목표는 예약이 아닙니다. 오늘 운영시간·입장권을 확인하세요. 스시 줄이 길면 성 내부 대신 해자·천수각 외관을 보고 수족관 시간을 지키기. 저녁은 덴포잔에서 먹고 숙소로 바로 복귀.',stops:[...sunStart(),s('kaiyukan','16:00',120,15,'','필수. 고래상어 중앙 수조·해파리 구역을 약 2시간 관람.'),s('bay-dinner53','18:15',60,60,'dinner','오코노미야키 또는 우동 한 끼. 현장 영업과 줄을 보고 식당 교체.'),s('back-hotel45','20:15',15,0)]}];
 D.requiredByDay.sun=['castle','harukoma','kaiyukan'];
 D.requiredByDay.mon=[];
 D.details.harukoma={why:'텐마의 대중적인 스시집. 11시 스시 점심을 먼저 먹은 뒤 오사카성으로 이동합니다.',order:'참치·흰살생선·새우부터 서로 다른 접시로 시작. 가격은 당일 메뉴판 확인.',tip:'본점: 大阪市北区天神橋5-5-2. 11:00–21:30·화요일 휴무로 안내, 재료 소진 시 종료. 예약 불가. 대기 90분 계획값은 입장 보장이 아닙니다.',source:'https://tabelog.com/osaka/A2701/A270103/27002205/'};
 const rail='https://www.kansai-airport.or.jp/en/access/train';
 const sumiyoshi=[34.6126,135.4904],osaka=[34.7025,135.4954],fukushima=[34.6971,135.4869],rinku=[34.4060,135.2963];
 const log=(id,name,coords,description,official)=>({...extra(id,name,coords,description,official),planningOnly:true});
 D.places.push(
  extra('bay-dinner53','덴포잔 마켓플레이스 저녁',[34.6551,135.4300],'수족관 바로 옆에서 저녁을 해결해 다른 식당가까지 왕복하지 않기.','https://www.kaiyukan.com/thv/marketplace/','food'),
  log('sumiyoshi-locker53','스미요시타이샤역 짐 보관',sumiyoshi,'역 로커 확인 후 참배. 대형 칸·빈자리는 보장되지 않습니다. 보관 불가이고 큰 짐이라면 참배를 생략하고 남쪽 공항으로 이동.','https://ekinavi-net.jp/ja/kotsu/sumiyoshi-taisha-eki/'),
  extra('sumiyoshi53','스미요시타이샤 · 붉은 다리와 본전',[34.6128,135.4931],'오사카의 오래된 신사. 둥근 붉은 소리하시와 국보 본전이 유명하고 일반 경내 참배는 무료.','https://www.sumiyoshitaisha.net/'),
  log('sumiyoshi-airport53','스미요시역 짐 회수 → 남쪽 공항행',sumiyoshi,'12:15까지 짐을 챙겨 출발. 난바로 돌아가지 않고 보통열차로 사카이, 공항급행으로 환승.',rail),
  log('umeda-locker53','JR 오사카역 짐 보관',osaka,'루쿠아로 가기 전 역 유료 로커. 위치를 사진으로 남기고 출국 전에 같은 로커로 돌아오기. 빈칸·대형 칸 보장 없음.','https://osakastationcity.com/'),
  extra('lucua53','루쿠아 · 취향 쇼핑 75분',[34.7032,135.4954],'오사카역과 연결된 쇼핑몰. 여러 동네를 돌지 않고 패션·생활잡화 중 필요한 두세 매장만 고르기.','https://www.lucua.jp/information/'),
  log('umeda-airport53','오사카역 짐 회수 → JR 공항행',osaka,'12:30까지 짐을 회수해 JR 간사이공항행 승강장으로. 난바·숙소에 다시 들르지 않습니다.',rail),
  log('fukushima-locker53','JR 후쿠시마역 짐 보관',fukushima,'전시 전에 역 로커 확인. 대형 수하물 보관이 안 되면 전시 대신 공항으로 이동. 전시실에 큰 캐리어를 들고 들어갈 수 있다고 가정하지 않기.','https://www.jr-odekake.net/eki/'),
  log('fukushima-airport53','후쿠시마역 짐 회수 → JR 공항행',fukushima,'12시까지 짐을 챙겨 JR 간사이공항행으로 출발. 숙소나 난바를 거치지 않습니다.',rail),
  log('rinku-locker53','린쿠 아웃렛 로커에 짐 보관',rinku,'10시 시설 로커에 짐을 맡기고 같은 로커에서 회수. 대형 로커가 있지만 크기·빈자리 보장 없음. 만실이면 쇼핑을 줄이고 공항으로.','https://www.premiumoutlets.co.jp/rinku/service/'),
  extra('rinku53','린쿠 프리미엄 아웃렛 · 바닷가 쇼핑',[34.4053,135.2956],'공항 맞은편 해안의 아웃렛. 필요한 브랜드 두세 곳과 바다 쪽 풍경에 집중. 할인 매장이 항상 최저가인 것은 아닙니다.','https://www.premiumoutlets.co.jp/rinku/'),
  extra('rinku-lunch53','린쿠 다이닝 · 빠른 점심',[34.4025,135.2948],'아웃렛 Sea Side 3층 푸드홀. 출국 전 별도 식당 대기를 피하고 각자 한 그릇씩.','https://www.premiumoutlets.co.jp/rinku/brands/','food'),
  log('rinku-airport53','아웃렛 짐 회수 → 린쿠타운역 → 공항',rinku,'13시까지 짐을 회수하고 도보로 린쿠타운역. JR 또는 난카이 공항행 한 정거장. 터미널까지 여유 포함 60분.',rail)
 );
 D.details['bay-dinner53']={why:'가이유칸에서 걸어서 갈 수 있어 밤에 다른 지역 식당까지 우회하지 않습니다.',order:'오코노미야키 또는 우동·덮밥. 1인 1000–1800엔 예산을 잡되 실제 가격·영업은 현장 확인.',tip:'푸드코트·점포별 마감이 다릅니다. 관람이 늦어지면 열린 식당을 확인하고 저녁 장소를 교체.',source:'https://www.kaiyukan.com/thv/marketplace/'};
 D.details.sumiyoshi53={why:'성·수족관·도톤보리와 다른 고즈넉한 일본 신사. 남쪽으로 내려가며 공항까지 이어지는 저비용 코스.',order:'소리하시 → 본전 참배 → 경내 나무와 석등. 다리가 가파르면 옆 평지로 우회.',tip:'4–9월 공식 참배시간 06–17시. 일반 참배 무료, 부적·기도 별도. 짐 보관 실패 시 무리하지 않기. 열차는 난카이 본선 스미요시타이샤역(보통열차 정차)을 이용.',source:'https://www.sumiyoshitaisha.net/cmn/pdf/sumiyoshitaisha_brochure.pdf'};
 D.details.lucua53={why:'더위·비를 피하면서 마지막 쇼핑. JR 공항행을 같은 오사카역에서 타므로 쇼핑 후 난바 왕복이 없습니다.',order:'패션 또는 생활잡화에서 우선순위 두세 매장만. 배고프면 식품·베이커리를 소량 포장하고 본 식사는 공항에서.',tip:'루쿠아·루쿠아이레 일반 쇼핑층 10:30 개점. 공항행 시간을 늦추는 식당 대기는 피하기. 캐릭터 굿즈 등 별도 건물·층은 개별 위치 확인.',source:'https://www.lucua.jp/information/'};
 D.details.art51={why:'에어컨 있는 실내에서 카를 발저의 그림·무대미술을 보는 선택. 9/7 월요일은 공식 특별 개관일.',order:'4층 카를 발저 전. 일본 체류 때 그린 풍경과 무대미술 원화를 중심으로 75분 관람.',tip:'2026/7/4–9/27, 9/7 개관. 10–17시·입장16:30까지, 일반1800엔. 날짜·시간 지정제 아님. 다른 전시는 별도. 큰 짐은 미리 보관; 11:15 관람 종료.',source:'https://nakka-art.jp/exhibition-post/karlwalser-2026/'};
 D.details.rinku53={why:'오사카 시내로 다시 들어가지 않고 공항 가까이에서 바다와 쇼핑을 즐기기. 이동 불안이 적은 선택.',order:'필요한 운동화·의류 브랜드 두세 곳 → Sea Side 바다 쪽 짧은 산책. 구입은 선택.',tip:'9월 쇼핑 10–20시. 린쿠타운역에서 도보 약6분(짐이 있으면 여유 추가). 출국일에는 긴 면세·결제 줄도 쇼핑 시간에 포함.',source:'https://www.premiumoutlets.co.jp/rinku/access/'};
 D.details['rinku-lunch53']={why:'같은 시설 안 푸드홀이라 따로 식당을 찾아 멀리 움직이지 않습니다.',order:'당일 열린 점포에서 라멘·우동·덮밥 중 한 그릇. 1인 1000–1600엔 계획 예산, 실제 가격은 현장 메뉴판 확인.',tip:'11시 이후 점포별 영업 확인. 12:30에는 식사를 마치기. 줄이 길면 포장·공항 식사로 바꿔 짐 회수를 늦추지 않기.',source:'https://www.premiumoutlets.co.jp/rinku/brands/'};
 D.airportDepartures={
  'sumiyoshi-airport53':{minutes:105,mode:'난카이 보통 → 공항급행',route:'짐 회수 → 스미요시타이샤역 보통열차 남행 → 사카이역에서 간사이공항행 공항급행 환승 → 간사이공항역 → 터미널. 공항급행은 스미요시타이샤에 서지 않음. 난바 왕복 없음. 특급권 없는 보통·공항급행 기준.',source:'https://www.nankai.co.jp/traffic/station/sumiyoshitaisha.html'},
  'umeda-airport53':{minutes:90,mode:'JR 간사이공항쾌속',route:'짐 회수 → JR 오사카역 → 간사이공항행 간쿠쾌속 → 간사이공항역 → 터미널. 기슈지쾌속 병결 시 앞 4량 공항행인지 전광판 확인. 특급 하루카가 아닌 일반 쾌속 기준.',source:rail},
  'fukushima-airport53':{minutes:120,mode:'JR 간사이공항쾌속',route:'짐 회수 → JR 후쿠시마역 → 니시쿠조·벤텐초 경유 간사이공항행 간쿠쾌속 → 간사이공항역 → 터미널. 기슈지쾌속과 갈라지는 공항행 차량 확인. 탑승·터미널 여유 포함.',source:rail},
  'rinku-airport53':{minutes:60,mode:'도보 + JR·난카이',route:'아웃렛 로커에서 짐 회수 → 린쿠타운역까지 도보 → JR 또는 난카이 간사이공항행 한 정거장(열차 약6분) → 출국 터미널. 별도 특급권 없이 이동. 60분은 걷기·대기·터미널 이동까지 포함.',source:'https://www.premiumoutlets.co.jp/rinku/access/'}
 };
 D.airportPlan=[
  {time:'14:00',title:'출국 터미널 도착 · 체크인·짐 부치기',text:'기존 16:00 비행편 기준 목표. 항공사·T1/T2부터 확인하고 수속 우선. T2 이용 또는 항공사가 더 일찍 도착하라고 안내하면 위 코스 종료를 30분 앞당기기.'},
  {time:'14:30',title:'보안검색·출국심사 우선',text:'수속을 먼저 끝내고 여유가 있을 때만 식사·기념품. 혼잡하면 쇼핑 생략. 항공사 마감 안내가 이 계획보다 우선합니다.'},
  {time:'14:45',title:'남은 시간에 점심·간식',text:'A·B·C는 공항에서 열린 식당의 우동·덮밥 또는 샌드위치. D는 린쿠에서 먹었으니 음료 정도. 줄이 길거나 탑승 시작이면 생략.'},
  {time:'15:00',title:'탑승구 확인 · 가까이서 대기',text:'탑승권·전광판의 탑승 시작과 마감 시각 확인. 이 시각 이후 새 관광 코스는 넣지 않습니다.'}
 ];
 const flightNote='기존 16:00 KIX 출발편 기준, 14:00 출국 터미널 도착 목표. 실제 항공편·터미널·항공사 마감은 다시 확인. 짐은 체크아웃 때 전부 챙기며 숙소 보관은 가정하지 않음. 시각은 예약된 열차가 아니라 이동 여유를 포함한 계획값.';
 const shinimamiya=[34.6503,135.5019],mega=[34.6497,135.5056],rinkuStation=[34.4109,135.3006];
 const donkiSource='https://www.donki.com/store/shop_detail.php?shop_id=356';
 D.places.push(
  {...extra('donki-mega54','MEGA 돈키호테 신세카이점',mega,'넓게 쇼핑할 대형 돈키호테. 과자·식품·생활용품·화장품·의류 등을 한 번에 둘러보기.',donkiSource,'shopping'),jp:'MEGAドン・キホーテ新世界店',address:'大阪市浪速区恵美須東3-4-36',duration:120,priceText:'구매 금액 별도',map:'https://www.google.com/maps?cid=2127241197779954162'},
  log('shinimamiya-locker54','신이마미야역 짐 보관',shinimamiya,'체크아웃한 짐은 역 유료 로커에 보관. 역 이름·출구·로커 위치를 사진으로 남기기. 빈칸·크기는 보장되지 않으며, 없으면 큰 짐 이동이 필요한 신사·린쿠를 생략하고 돈키 집중 코스를 선택.','https://www.nankai.co.jp/traffic/station/shin_imamiya.html'),
  log('shinimamiya-airport54','신이마미야역 짐 회수 → 공항',shinimamiya,'짐과 쇼핑 봉투를 정리한 뒤 난카이 공항행 승강장으로. 숙소·난바역에 다시 들르지 않음.',rail),
  log('shinimamiya-pickup54','신이마미야역 짐 회수 → 린쿠',shinimamiya,'돈키 쇼핑 뒤 원래 역 로커에서 짐 회수. 린쿠로 가기 전에 공항행 운행·출발 시각 확인.',rail),
  extra('rinku-pause54','린쿠공원 · 바닷가 짧은 휴식',[34.4122,135.2952],'쇼핑은 돈키에서 끝내고 공항 맞은편 바닷가에서 잠깐 쉬는 코스. 아웃렛 매장 순례는 넣지 않음.','https://rinku.osaka-park.or.jp/'),
  log('rinku-airport54','린쿠타운역 → 간사이공항',rinkuStation,'짐을 가지고 역으로 복귀. 13시까지 공항행 승강장으로 이동하고 한 정거장 뒤 하차.',rail)
 );
 D.requiredByDay.mon=['donki-mega54'];
 D.details['donki-mega54']={why:'신이마미야역 인근 MEGA 대형점으로 고정. 식품부터 생활용품·화장품·의류까지 한 매장에서 쇼핑하고 공항으로 바로 이어집니다.',order:'과자·기념품 → 생활용품·화장품 → 의류·잡화 중 필요한 매대부터. 마지막 30분은 계산·포장에 배정. 배고프면 판매 중인 빵·간단한 식품도 확인.',tip:'공식 09:00–다음날05:00, 정기휴무 없음. 신이마미야역·도부츠엔마에역 인근 2층. 면세를 원하면 여권 원본을 챙기고 현장 조건·대기열 확인. 총 90–120분은 예상이며 줄이 길면 신사·린쿠를 줄이고 공항 출발은 지키기. 지도 핀은 근사 위치, 연결된 공식 매장 지도에서 입구 확인.',source:donkiSource};
 D.details.sumiyoshi53={...D.details.sumiyoshi53,why:'돈키 개점 전 남쪽 신사에서 붉은 다리와 본전을 보는 이른 출발 코스. 큰 짐은 신이마미야역에 둡니다.',tip:'4–9월 공식 참배시간 06–17시. 일반 참배 무료. 신사 구경 후 보통열차로 신이마미야에 돌아와 대형 돈키에 들르기. 10:15 신사 출발 목표; 지연되면 돈키·공항 시간 우선.'};
 D.details['rinku-pause54']={why:'돈키에서 필요한 쇼핑을 끝낸 뒤 바다 쪽에서 잠깐 쉬기. 공항을 지나쳐 다시 시내로 돌아오는 동선은 없습니다.',order:'역에서 가까운 공원 쪽 바다 풍경만 보고 복귀. 30분 안에 끝내며 아웃렛 쇼핑은 추가하지 않기.',tip:'짐을 직접 가지고 이동하는 코스. 더위·비·무거운 짐·전철 지연이면 린쿠 하차를 생략하고 공항으로 직행. 12:30 공원 출발, 13시 공항행 이동 기준.',source:'https://rinku.osaka-park.or.jp/'};
 D.airportDepartures['shinimamiya-airport54']={minutes:60,mode:'난카이 공항급행 + 도보',route:'원래 로커에서 짐 회수 → 난카이 신이마미야역 → 간사이공항행 공항급행 → 간사이공항역 → 출국 터미널. 공항급행은 별도 특급권 불필요. 라피트를 선택하면 별도 특급권 필요. 난바·숙소 왕복 없음.',source:rail};
 D.airportDepartures['rinku-airport54']={minutes:60,mode:'JR·난카이 공항행',route:'린쿠타운역 → JR 또는 난카이 간사이공항행 한 정거장 → 간사이공항역 → 출국 터미널. 60분은 탑승 대기·터미널 보행·여유 포함. 이미 짐을 가지고 있으므로 아웃렛 로커 회수는 없음.',source:rail};
 D.airportPlan[2].text='세 코스 모두 공항에서 열린 식당의 우동·덮밥 또는 샌드위치로 점심. 수속이 밀리거나 탑승 시작이면 식당 대기·쇼핑을 생략하고 빠른 포장 식사로.';
 D.days.mon=[
  {id:'mon-donki54',label:'A · 대형 돈키 2시간 → 공항',tag:'기본 추천 · 돈키 필수',why:'늦지 않게 체크아웃하고 MEGA 신세카이점에서 쇼핑·계산 2시간. 관광을 더 넣지 않아 짐·쇼핑 봉투가 많아도 이동 부담이 가장 적습니다.',note:'돈키 10:15–12:15, 짐 회수 후 12:45 공항행 이동 목표. 면세 줄은 이 2시간 안에 포함. '+flightNote,stops:[s('breakfast45','08:15',30,15,'breakfast'),s('checkout45','09:00',30,15),s('shinimamiya-locker54','09:45',15,15),s('donki-mega54','10:15',120,15,'','필수. 11:45부터 계산·포장 준비, 12:15 쇼핑 종료.'),s('shinimamiya-airport54','12:30',15,0)]},
  {id:'mon-shrine-donki54',label:'B · 스미요시 신사 → 대형 돈키',tag:'이른 출발 · 돈키 필수',why:'돈키가 열기 전 신사에 먼저 다녀오고, 신이마미야로 돌아와 대형점 쇼핑 후 바로 공항행. 신사 왕복은 남쪽 난카이 보통열차로 묶고 우메다까지 올라가지 않습니다.',note:'신사 45분 + 돈키 90분. 큰 짐은 신이마미야역에 보관. 로커가 없거나 늦게 출발하면 신사를 생략하고 A 선택. '+flightNote,stops:[s('breakfast45','07:00',30,15,'breakfast'),s('checkout45','07:45',30,15),s('shinimamiya-locker54','08:30',15,45),s('sumiyoshi53','09:30',45,45),s('donki-mega54','11:00',90,15,'','필수. 12시부터 계산·포장, 12:30 쇼핑 종료.'),s('shinimamiya-airport54','12:45',15,0)]},
  {id:'mon-donki-rinku54',label:'C · 대형 돈키 → 린쿠 바다',tag:'09시 쇼핑 · 돈키 필수',why:'개점에 맞춰 대형 돈키를 먼저 끝내고 공항 방향으로 이동. 린쿠에서는 추가 쇼핑 대신 바다를 30분만 보고 공항에 갑니다.',note:'09–10:30 돈키, 11시까지 신이마미야에서 짐 회수. 12:30 린쿠공원 출발. 쇼핑·전철이 늦어지면 린쿠를 생략하고 공항 직행. '+flightNote,stops:[s('breakfast45','07:00',30,15,'breakfast'),s('checkout45','07:45',30,15),s('shinimamiya-locker54','08:30',15,15),s('donki-mega54','09:00',90,15,'','필수. 10시부터 계산·포장 준비. 개점 전 입장 불가.'),s('shinimamiya-pickup54','10:45',15,60),s('rinku-pause54','12:00',30,15),s('rinku-airport54','12:45',15,0)]}
 ];
 D.details.ramenso49={why:'굵은 면과 산처럼 쌓인 숙주·돼지고기, 마늘을 즐기는 지로계 라멘. 이번 여행의 필수 라멘.',order:'기본 라멘. 대용량이므로 면 적게 요청을 먼저 확인하고 마늘은 취향대로.',tip:'월~토 11–15시/18–23시, 일요일 휴무로 안내. 임시휴무·품절·대기는 별개이며 예약 불가. 지도 핀은 근사 위치이므로 일본어 상호로 입구 확인.',source:'https://tabelog.com/osaka/A2701/A270206/27140375/'};
 D.details['daiki-sushi-v4']={why:'회전 초밥 접시를 보며 참치·흰살생선·연어를 각자 취향대로 골라 먹기 좋은 도톤보리 스시집.',order:'참치·연어·도미 등 흰살생선부터 3명이 다른 접시로 시작. 계절 생선은 당일 메뉴에서 선택.',tip:'공식 11:00–23:00, 주문 마감22:30. 접시별 가격 확인. 90분에는 예상 대기 포함, 줄이 길면 오후 선택 일정 축소.',source:'https://sushi.daiki-suisan.co.jp/shop/12?keyword=7'};
 D.details.castle.order='천수각·해자·석축. 내부 박물관은 입장권과 대기시간을 보고 선택.';
 D.details.castle.tip='역에서 천수각까지 걷는 시간이 있습니다. 15시에는 다음 지역으로 출발, 내부 대기가 길면 공원·외관을 우선.';
 D.details.kaiyukan.tip='일요일 16시 입장 목표·약 2시간 관람. 오늘 운영시간·시간 지정권부터 확인. 아직 예매 안 됨. 월요일 추천에는 다시 넣지 않습니다.';
 Object.assign(D.places.find(p=>p.id==='art51'),{price:1800,priceText:'일반 1800엔'});
 Object.assign(D.places.find(p=>p.id==='sumiyoshi53'),{price:0,priceText:'일반 참배 무료'});
 Object.assign(D.places.find(p=>p.id==='bay-dinner53'),{price:1400,priceText:'예산 1000–1800엔 · 현장 가격 확인'});
 Object.assign(D.places.find(p=>p.id==='rinku-lunch53'),{price:1300,priceText:'예산 1000–1600엔 · 현장 가격 확인'});
 D.version=54;
})();
