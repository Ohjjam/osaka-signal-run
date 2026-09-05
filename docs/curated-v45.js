(function(){
 const hotel=[34.6544118,135.4997683],namba=[34.6634,135.5018];
 const place=(id,name,coords,category='attraction',extra={})=>({id,name,coords,category,duration:30,price:0,priceText:'현장 확인',image:'assets/dotonbori-night.jpg',label:'추천 일정',description:name,planningOnly:true,...extra});
 const meal=(id,name,coords,detail)=>place(id,name,coords,'food',{description:detail,menu:detail,group:'rice',genreLabel:'현장에서 선택',priceText:'메뉴별'});
 const ramen=(id,name,jp,address,coords,menu,official)=>place(id,name,coords,'food',{jp,address,menu,official,map:'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(address+' '+jp),group:'ramen',area:'namba',areaLabel:'난바·도톤보리',genreLabel:'라멘',price:0,priceText:'메뉴판 확인',rating:null,reviews:null,planningOnly:false,image:'assets/food-ramen.jpg',note:menu});
 const places=[
  place('leave-hotel45','17:00 숙소 출발',hotel,'attraction',{description:'17시에 나와 도보·역 이동 시작. 표시된 15분은 숙소 체류가 아니라 출발 이동 여유입니다.'}),
  place('back-hotel45','숙소 복귀',hotel),place('rest-hotel45','숙소에서 쉬기',hotel),
  meal('breakfast45','숙소 근처 가벼운 아침',hotel,'편의점 주먹밥·샌드위치·커피. 긴 식당 대기는 피하기.'),
  meal('night-snack45','난바에서 간단한 밤 간식',[34.6655,135.5023],'열려 있는 디저트 가게 또는 편의점 아이스크림. 배부르면 생략하고 숙소로.'),
  place('joroku-queue45','죠로쿠 도착·오픈 대기',[34.6632,135.5046],'attraction',{description:'공식 저녁 영업은 18:00 시작. 17:25 도착·대기 목표, 임시휴무와 줄 확인.'}),
  ramen('joroku45','멘야 죠로쿠 난바점','麺屋 丈六 なんば店','大阪市中央区難波千日前6-16',[34.6632,135.5046],'타카이다계 진한 간장 중화소바 · 저녁 18:00–21:00 / 수요일 휴무','https://jouroku.blog.fc2.com/?cat=0'),
  ramen('zundo-doton45','즌도야 도톤보리점','ラー麺ずんどう屋 道頓堀店','大阪市中央区宗右衛門町7-6',[34.6691,135.5015],'아지타마 라멘 · 진한 돈코쓰와 등지방. 첫 끼는 라멘 한 그릇부터.','https://shop.zundouya.com/en/stores/112'),
  ramen('ichiran-south45','이치란 도톤보리 별관','一蘭 道頓堀店別館','大阪市中央区道頓堀1-4-16',[34.6686,135.5042],'천연 돈코쓰 라멘 · 본관은 영업 종료, 반드시 별관으로.','https://en.ichiran.com/shop/kinki/dotonbori-south/'),
  meal('tempo-lunch45','덴포잔 마켓플레이스 점심',[34.6551,135.4300],'나니와 구이신보 요코초·식당가에서 우동/오코노미야키 중 줄 짧은 곳. 메뉴·가격표 확인.'),
  place('tempo-wheel45','덴포잔 대관람차',[34.6563,135.4309],'attraction',{description:'수족관 바로 옆. 강풍·우천 운휴나 대기가 길면 카페로 교체.',official:'https://tempozan-kanransya.com/tempozan-kanransya.com/en/'}),
  place('umeda-break45','우메다역 쇼핑·카페',[34.7025,135.4958],'goods',{description:'역 주변 쇼핑을 한 구역에서. 전망대 입장시간을 먼저 확보하고 카페로 쉬기.'}),
  meal('abeno-dinner45','아베노·텐노지 저녁',[34.6450,135.5120],'큐즈몰·역 식당가에서 돈카츠/스시/덮밥. 메뉴판과 대기를 보고 선택.'),
  place('checkout45','09:35 숙소 복귀·체크아웃',hotel,'attraction',{description:'10:00 체크아웃. 짐은 전부 챙겨 나옵니다. 숙소 짐 보관은 가능하다고 가정하지 않습니다.'}),
  place('locker45','난카이 난바역 짐 보관',namba,'attraction',{description:'유료 코인로커·유인 보관소의 빈자리/크기를 현장에서 확인. 없으면 쇼핑을 생략하고 짐과 함께 점심 후 공항으로.'}),
  meal('market-lunch45','구로몬 시장에서 점심',[34.6652,135.5065],'참치덮밥·초밥·구이 중 하나를 한 끼로. 과일은 나눠 먹기, 가격표 없는 메뉴는 피하기.'),
  meal('namba-lunch45','난바역 근처 빠른 점심',namba,'역 식당가에서 우동·덮밥. 줄 15분 넘으면 바로 다른 가게로, 공항 이동 우선.'),
  place('train45','난바역 짐 회수·공항행 탑승',namba,'attraction',{description:'13:00까지 간사이공항행 출발 목표. 공항급행/라피트의 현재 운행을 확인. 14:00 공항 도착 목표, 16:00 비행.'})
 ];
 const stop=(id,time,duration,leg,slot='',note='')=>({id,time,duration,leg,slot,note});
 const depart=()=>stop('leave-hotel45','17:00',15,20);
 const sat=[
  {id:'sat-neon45',label:'A · 돈코쓰·도톤보리',tag:'오늘 기본 추천',why:'17시 출발 후 바로 식사. 난바 북쪽으로 올라갔다 골목을 따라 돌아오는 첫날 코스.',note:'라멘 대기가 30분 이상이면 이치란 별관 또는 근처 다른 라멘으로 교체. 우라난바는 술·안주를 가볍게.',stops:[depart(),stop('zundo-doton45','17:35',60,10,'dinner'),stop('dotonbori-night-v3','18:45',60,5),stop('hozenji-v3','19:50',30,10),stop('uranamba-v3','20:30',90,15,'late'),stop('back-hotel45','22:15',15,0)]},
  {id:'sat-local45',label:'B · 죠로쿠·로컬 라멘',tag:'간장 라멘 취향',why:'오픈을 기다리더라도 로컬 라멘 한 그릇에 집중. 먹고 나서 미나미 밤 산책.',note:'죠로쿠 저녁 18:00 시작. 임시휴무·긴 줄이면 A안으로. 역사오키자메는 긴 대기·대용량 부담 때문에 기본에서 제외.',stops:[stop('leave-hotel45','17:00',15,10),stop('joroku-queue45','17:25',30,5),stop('joroku45','18:00',75,15,'dinner'),stop('hozenji-v3','19:30',30,10),stop('dotonbori-night-v3','20:10',50,15),stop('night-snack45','21:15',30,15,'late'),stop('back-hotel45','22:00',15,0)]},
  {id:'sat-south45',label:'C · 이치란·신세카이',tag:'남쪽 야경',why:'라멘 후 신세카이로 내려오며 숙소 가까이에서 마무리. 우메다 왕복 없음.',note:'쿠시카쓰는 두 번째 정식이 아니라 나눠 먹는 야식. 토비타신치는 원하면 20시 이후 별도 선택, 기본 코스에는 넣지 않았어요.',stops:[depart(),stop('ichiran-south45','17:35',60,25,'dinner'),stop('shinsekai','19:00',60,10),stop('daruma-v3','20:10',60,20,'late'),stop('back-hotel45','21:30',15,0)]}
 ];
 const bayBase=()=>[stop('breakfast45','09:00',45,60,'breakfast'),stop('kaiyukan','11:00',135,15),stop('tempo-lunch45','13:30',60,15,'lunch')];
 const sun=[
  {id:'sun-easy45',label:'A · 수족관·여유',tag:'체력 균형',why:'가이유칸·덴포잔을 충분히 보고 숙소에서 쉰 뒤 신세카이 저녁.',note:'모든 일요일 안에 11:00 가이유칸 포함. 대관람차가 부담되면 카페로 쉬어도 동선은 같아요.',stops:[...bayBase(),stop('tempo-wheel45','14:45',45,10),stop('tempozan','15:40',40,55),stop('rest-hotel45','17:15',60,20),stop('daruma-v3','18:45',75,15,'dinner'),stop('shinsekai','20:15',60,25),stop('back-hotel45','21:40',15,0)]},
  {id:'sun-sky45',label:'B · 수족관·우메다 야경',tag:'풍경 몰아보기',why:'베이에서 우메다로 한 번만 크게 이동. 쇼핑·전망·저녁을 우메다 안에서 묶어요.',note:'가이유칸 11:00 → 우메다 전망 17:20 목표. 전망대·키지는 현장 대기와 입장 마감을 확인.',stops:[...bayBase().slice(0,2),stop('tempo-lunch45','13:30',60,60,'lunch'),stop('umeda-break45','15:30',90,20),stop('sky','17:20',100,20),stop('kiji','19:20',80,50,'dinner'),stop('back-hotel45','21:30',15,0)]},
  {id:'sun-south45',label:'C · 수족관·하루카스',tag:'남쪽 집중',why:'수족관 다음 신세카이→텐노지로 이어지는 남쪽 코스. 우메다까지 가지 않아요.',note:'아베노 하루카스 전망은 선택 유료. 흐리면 전망 대신 주변 쇼핑·카페 시간을 늘리세요.',stops:[...bayBase().slice(0,2),stop('tempo-lunch45','13:30',60,60,'lunch'),stop('shinsekai','15:30',60,30),stop('harukas-v5','17:00',90,20),stop('abeno-dinner45','18:50',70,45,'dinner'),stop('back-hotel45','20:45',15,0)]}
 ];
 const monBase=()=>[stop('breakfast45','08:00',40,20,'breakfast'),stop('yasaka','09:00',25,10),stop('checkout45','09:35',25,20),stop('locker45','10:20',20,15)];
 const mon=[
  {id:'mon-market45',label:'A · 시장·먹거리',tag:'출국 전 추천',why:'짐을 맡기고 구로몬에서 점심, 난바로 돌아오면서 간식 포장. 먼 지역은 가지 않아요.',note:'14:00 KIX 도착 목표 · 16:00 세 명 모두 출발. 로커가 없으면 시장 대신 난바역 점심으로 전환.',stops:[...monBase(),stop('market-lunch45','10:55',60,10,'lunch'),stop('rikuro','12:05',20,15,'snack'),stop('train45','12:40',20,0)]},
  {id:'mon-goods45',label:'B · 덴덴타운·굿즈',tag:'마지막 쇼핑',why:'숙소와 난바 사이의 니혼바시에서만 쇼핑. 굿즈에 집중하고 점심은 빠르게.',note:'매장별 11시 이후 개점 확인. 문이 닫혀 있으면 기다리지 말고 난바로 이동.',stops:[...monBase(),stop('denden','11:00',45,15),stop('namba-lunch45','12:00',30,15,'lunch'),stop('train45','12:45',15,0)]},
  {id:'mon-small45',label:'C · 도구야스지·가벼운 마무리',tag:'덜 걷기',why:'난바역 가까운 그릇·기념품 구경 후 식사. 출국일 체력을 아끼는 코스.',note:'식당 줄이 길면 포장 또는 공항 식사로. 13시 공항행 이동 시각은 미루지 않아요.',stops:[...monBase(),stop('doguya','10:55',35,10),stop('namba-lunch45','11:40',50,15,'lunch'),stop('train45','12:45',15,0)]}
 ];
 // Conservative walking/waiting buffers, including luggage on departure day.
 sat[0].stops=[stop('leave-hotel45','17:00',15,30),stop('zundo-doton45','17:45',60,15,'dinner'),stop('dotonbori-night-v3','19:00',45,15),stop('hozenji-v3','20:00',30,15),stop('uranamba-v3','20:45',75,30,'late'),stop('back-hotel45','22:30',15,0)];
 sat[1].stops=[stop('leave-hotel45','17:00',15,30),stop('joroku-queue45','17:45',15,15),stop('joroku45','18:15',75,15,'dinner'),stop('hozenji-v3','19:45',30,15),stop('dotonbori-night-v3','20:30',40,15),stop('night-snack45','21:25',20,30,'late'),stop('back-hotel45','22:15',15,0)];
 sat[2].stops=[stop('leave-hotel45','17:00',15,30),stop('ichiran-south45','17:45',60,30,'dinner'),stop('shinsekai','19:15',45,15),stop('daruma-v3','20:15',60,20,'late'),stop('back-hotel45','21:35',15,0)];
 sun[0].stops.find(s=>s.id==='tempo-wheel45').leg=15;
 Object.assign(sun[0].stops.find(s=>s.id==='tempozan'),{time:'15:45',duration:35});
 const departureMorning=()=>[stop('breakfast45','08:00',40,20,'breakfast'),stop('yasaka','09:00',20,15),stop('checkout45','09:35',25,30),stop('locker45','10:30',15,15)];
 mon[0].stops=[...departureMorning(),stop('market-lunch45','11:00',45,15,'lunch'),stop('rikuro','12:00',20,15,'snack'),stop('train45','12:35',25,0)];
 mon[1].stops=[...departureMorning(),stop('denden','11:00',45,15),stop('namba-lunch45','12:00',30,15,'lunch'),stop('train45','12:45',15,0)];
 mon[2].stops=[...departureMorning(),stop('doguya','11:00',30,15),stop('namba-lunch45','11:45',40,15,'lunch'),stop('train45','12:40',20,0)];
 places.find(p=>p.id==='joroku-queue45').description='공식 저녁 영업은 18:00 시작. 17:45 도착 후 오픈·입장 대기 여유, 임시휴무와 줄 확인.';
 window.OSAKA_CURATED_V45={version:45,places,days:{sat,sun,mon},checkedAt:'2026-09-05'};
})();
