(function () {
  'use strict';

  const map = name => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name + ' Osaka')}`;
  const place = (id, name, jp, coords, group, label, duration, description, whyGo, best, official, image = null, priceText = '무료~선택별', extra = {}) => ({
    id, name, jp, coords, group, label, duration, description, whyGo, best, official, map: map(name), image, priceText, verifiedPhoto: Boolean(image), ...extra
  });

  window.OSAKA_EXPANSION_V5 = {
    attractionGroups: {
      all: '전체', icons: '첫 방문 필수', history: '역사·신사', art: '미술·건축',
      neighborhood: '동네·시장', bay: '베이·가족', quirky: '특색·체험'
    },
    attractionOverrides: {
      castle: { group:'icons', label:'성·역사', description:'거대한 해자와 성벽, 천수각이 한 화면에 들어오는 오사카의 대표 장면.', whyGo:'도시의 첫 인상을 잡기 좋다. 천수각 전시보다 공원 산책과 해자 풍경이 더 강하게 남는 사람도 많다.', best:'08:30 전후 · 공원은 이른 아침', verifiedPhoto:true },
      sky: { group:'icons', label:'공중정원·전망', description:'두 타워를 잇는 공중정원에서 우메다의 철도와 도심을 360도로 본다.', whyGo:'해 질 무렵부터 네온이 켜지는 변화가 분명하다. 높은 곳을 좋아한다면 하루의 마침표로 가장 확실하다.', best:'일몰 75분 전', verifiedPhoto:true },
      yasaka: { group:'quirky', label:'거대 사자전각', description:'높이 12m의 사자 머리 전각이 조용한 동네 신사 안에서 갑자기 나타난다.', whyGo:'난바에서 짧게 다녀오면서도 사진 한 장의 개성이 압도적이다. 붐비기 전 아침이 특히 좋다.', best:'09:00 전후', verifiedPhoto:true },
      kuromon: { group:'neighborhood', label:'시장·먹거리', description:'해산물, 과일, 육류와 즉석 먹거리가 이어지는 난바 동쪽 시장.', whyGo:'먹거리 가격과 분위기를 눈으로 비교하는 재미가 있다. 다만 관광지 가격도 있어 한 가게에 바로 정착하지 않는 편이 낫다.', best:'09:00~11:00', verifiedPhoto:false, image:null },
      dotonbori: { group:'icons', label:'네온·강변', description:'글리코 사인과 대형 입체 간판, 강변 산책로가 오사카의 과장된 에너지를 만든다.', whyGo:'처음 온 사람이 “오사카에 왔다”는 감각을 가장 빨리 얻는 곳. 낮보다 간판이 켜진 밤이 본편이다.', best:'19:00 이후', verifiedPhoto:true },
      shinsekai: { group:'neighborhood', label:'레트로 거리', description:'쓰텐카쿠 아래 장기판 같은 간판과 쿠시카쓰집이 빽빽한 쇼와풍 거리.', whyGo:'세련된 우메다와 정반대의 오사카를 한 번에 본다. 저녁 전후에 색과 소리가 살아난다.', best:'16:00 이후', verifiedPhoto:true },
      tsutenkaku: { group:'icons', label:'전망·놀이', description:'신세카이 한가운데 선 오사카 남부의 상징 타워.', whyGo:'전망만이 아니라 복고풍 전시와 체험이 섞여 있어 신세카이 산책의 명확한 목적지가 된다.', best:'오전 또는 야간', verifiedPhoto:true },
      kaiyukan: { group:'bay', label:'대형 수족관', description:'거대한 태평양 수조를 위에서 아래로 나선형으로 내려오며 관람한다.', whyGo:'비 오는 날에도 확실하고, 고래상어가 지나가는 스케일은 성인끼리 가도 충분히 인상적이다.', best:'첫 입장 시간', image:'assets/place-kaiyukan.jpg', verifiedPhoto:true },
      tempozan: { group:'bay', label:'항구·마켓 점심', description:'가이유칸 옆 덴포잔 마켓플레이스에서 점심을 고르고 항구 쪽으로 짧게 걷는다.', whyGo:'가이유칸과 같은 블록이라 이동을 늘리지 않고 점심·바다·도시 전경을 한 번에 해결한다.', best:'가이유칸 관람 뒤', verifiedPhoto:false, image:null },
      usj: { group:'bay', label:'테마파크', description:'슈퍼 닌텐도 월드와 영화 테마 구역을 하루 종일 파고드는 대형 파크.', whyGo:'세 사람이 놀이기구와 게임 IP를 좋아한다면 다른 관광지를 포기할 가치가 있다. 반나절 끼워 넣기보다는 하루 전용이 낫다.', best:'개장 60분 전 도착', image:'assets/place-usj.jpg', verifiedPhoto:true }
    },
    attractions: [
      place('shitennoji-v5','시텐노지','四天王寺',[34.6546,135.5165],'history','1,400년 사찰',90,'593년 창건 전승을 지닌 일본 최고(最古)급 관영 불교 사찰.','번화가와 가까운데도 중심가람 안에서는 시간의 밀도가 완전히 달라진다. 역사에 관심이 없더라도 오층탑과 회랑 구도가 분명하다.','오전 08:30~10:00','https://www.shitennoji.or.jp/en/','assets/place-shitennoji.jpg','경내 일부 무료·유료 구역 별도'),
      place('sumiyoshi-v5','스미요시타이샤','住吉大社',[34.6128,135.4929],'history','신사·반교',100,'전국 스미요시 신앙의 총본사와 붉은 소리하시 다리를 걷는다.','도심 신사보다 경내 규모와 건축의 개성이 크다. 난카이 전철을 타고 일부러 남쪽까지 내려갈 이유가 있는 역사 코스다.','이른 오전','https://www.sumiyoshitaisha.net/en/','assets/place-sumiyoshi.jpg'),
      place('hozenji-temple-v5','호젠지·미즈카케 후도','法善寺 水掛不動尊',[34.6676,135.5028],'history','이끼 낀 불상',35,'물을 끼얹어 기도해 온 탓에 초록 이끼로 뒤덮인 후도묘오가 골목 안에 있다.','도톤보리 바로 뒤에서 소음이 사라지는 반전이 좋다. 호젠지 요코초와 30분짜리 짧은 묶음으로 효율적이다.','해질녘 또는 밤','https://osaka-info.jp/en/spot/hozenji-yokocho/',null),
      place('osaka-tenmangu-v5','오사카텐만구','大阪天満宮',[34.6961,135.5121],'history','학문의 신사',55,'텐진 축제로 유명한 학문의 신을 모신 신사.','텐진바시스지와 바로 이어져 사찰만 따로 보는 느낌이 없다. 로컬 상점가 산책에 역사 한 겹을 더한다.','오전~오후','https://osakatemmangu.or.jp/',null),
      place('imamiya-ebisu-v5','이마미야에비스 신사','今宮戎神社',[34.6540,135.5064],'history','상업의 신',45,'오사카 상인들이 복을 비는 에비스 신앙의 중심지.','“상인의 도시 오사카”라는 정체성을 가장 짧게 이해하는 장소다. 신세카이·난바 야사카 사이에 넣기 쉽다.','낮','https://www.imamiya-ebisu.jp/',null),
      place('history-museum-v5','오사카 역사박물관','大阪歴史博物館',[34.6826,135.5204],'history','도시사·성 전망',110,'고대 나니와궁부터 현대까지 오사카의 도시 변화를 층별로 보여준다.','전시와 동시에 창밖 오사카성을 높은 시점에서 볼 수 있어 비 오는 날의 성 코스로 특히 강하다.','오전','https://www.osakamushis.jp/eng/',null,'성인 약 ¥600'),
      place('housing-museum-v5','오사카 생활주택박물관','大阪くらしの今昔館',[34.7102,135.5113],'quirky','에도 거리 실물 재현',100,'1830~1844년 오사카 상가 거리를 실물 크기로 재현하고 시간대 연출을 더한 체험형 박물관.','유물 진열보다 실제 골목 안으로 들어가는 느낌이 강해 처음 보는 사람도 지루하지 않다. 비 오는 날 대체재로 매우 좋다.','10:00 입장','https://osaka-info.jp/en/spot/osaka-museum-housing-living/',null,'성인 ¥600'),
      place('nakanoshima-art-v5','나카노시마 미술관','大阪中之島美術館',[34.6919,135.4922],'art','현대미술·검은 건축',120,'검은 입방체 건물과 거대한 로비가 먼저 시선을 잡는 현대미술관.','전시 취향이 맞으면 2시간이 금방 가고, 전시를 안 봐도 건축과 설치 작품, 강변 산책을 묶을 수 있다.','전시 일정 확인','https://nakka-art.jp/en/',null,'전시별'),
      place('national-art-v5','국립국제미술관','国立国際美術館',[34.6910,135.4911],'art','지하 미술관',110,'대부분의 전시 공간이 지하에 있고 지상에는 대나무를 연상시키는 구조물이 솟아 있다.','나카노시마 미술관과 붙어 있어 한쪽 전시가 취향이 아닐 때 다른 선택지로 바꾸기 쉽다.','전시 일정 확인','https://www.nmao.go.jp/en/',null,'전시별'),
      place('central-hall-v5','오사카시 중앙공회당','大阪市中央公会堂',[34.6932,135.5043],'art','붉은 벽돌 근대건축',50,'1918년 준공된 붉은 벽돌 외관과 청동 돔이 나카노시마 강변을 대표한다.','실내 관람 없이도 강·장미원·기타하마를 잇는 산책의 시각적 중심이 된다. 해 질 무렵 조명이 특히 좋다.','해질녘','https://osaka-info.jp/en/spot/osaka-central-public-hall/','assets/place-central-hall.jpg','외관 무료'),
      place('oriental-ceramics-v5','오사카시립 동양도자미술관','大阪市立東洋陶磁美術館',[34.6937,135.5056],'art','동양 도자·차분함',90,'한국·중국 도자를 포함한 동양도자 컬렉션을 자연광에 가깝게 감상한다.','화려한 관광지 사이에서 조용히 작품을 보는 시간이 필요할 때 좋다. 공회당과 5분 거리라 묶기 쉽다.','오후','https://www.moco.or.jp/en/',null,'전시별'),
      place('kamigata-ukiyoe-v5','가미가타 우키요에관','上方浮世絵館',[34.6677,135.5025],'art','오사카 배우 판화',65,'에도 시대 오사카의 가부키 배우 판화에 집중한 작은 전문관.','도쿄의 풍경화와 다른 가미가타 판화의 표정과 색을 본다. 도톤보리에서 한 시간만 문화 밀도를 높이기 좋다.','낮','https://kamigata.jp/kmgt/en/','', '성인 약 ¥700'),
      place('nakanoshima-park-v5','나카노시마 공원·장미원','中之島公園',[34.6935,135.5075],'neighborhood','강변·장미',65,'도지마강과 도사보리강 사이 섬을 따라 걷는 도심 공원.','무료로 도시의 호흡을 바꾸는 구간이다. 기타하마 카페, 공회당, 미술관 사이 이동 자체가 관광이 된다.','아침 또는 해질녘','https://osaka-info.jp/en/spot/nakanoshima-park/',null,'무료'),
      place('tenjinbashisuji-v5','텐진바시스지 상점가','天神橋筋商店街',[34.7058,135.5114],'neighborhood','긴 로컬 상점가',100,'약 2.6km 아케이드에 식당, 생활용품, 간식과 오래된 가게가 이어진다.','관광객용 기념품 거리보다 오사카 사람들이 실제로 장보는 가격과 속도를 본다. 전 구간 완주보다 4~6초메 집중이 낫다.','11:00~18:00','https://osaka-info.jp/en/spot/tenjinbashisuji-shopping-street/',null),
      place('tsuruhashi-v5','쓰루하시 시장·코리아타운','鶴橋・大阪コリアタウン',[34.6654,135.5308],'neighborhood','야키니쿠·한류 시장',120,'역 아래 야키니쿠 연기와 시장 골목, 이쿠노 코리아타운까지 문화가 이어진다.','일본 속 오래된 재일코리안 상권과 현대 한류 상점이 겹치는 오사카만의 결을 본다. 점심 야키니쿠와 묶으면 강하다.','10:30~16:00','https://osaka-info.jp/en/spot/tsuruhashi/',null),
      place('nakazakicho-v5','나카자키초','中崎町',[34.7073,135.5050],'neighborhood','골목·고민가 카페',90,'우메다 동쪽의 오래된 목조 주택이 카페, 잡화점, 작은 갤러리로 바뀐 동네.','초고층 우메다에서 15분 걸었을 뿐인데 골목의 스케일이 바뀐다. 카페·빈티지 취향이면 목적 없이 걸어도 된다.','12:00~17:00','https://osaka-info.jp/en/spot/nakazakicho/',null),
      place('karahori-v5','가라호리 상점가','空堀商店街',[34.6758,135.5132],'neighborhood','전쟁을 견딘 골목',90,'오래된 나가야와 경사지 골목, 소규모 상점이 남은 생활 상권.','도톤보리보다 조용하고 관광 상품화가 덜 된 오사카의 일상 표정을 본다. 골목 사진과 작은 식당을 좋아하면 잘 맞는다.','11:00~17:00','https://osaka-info.jp/en/spot/karahori-shopping-street/',null),
      place('amerikamura-attraction-v5','아메리카무라·삼각공원','アメリカ村・三角公園',[34.6724,135.4975],'neighborhood','스트리트 문화',75,'빈티지, 스트리트 패션, 벽화와 음악이 모이는 신사이바시 서쪽 거리.','오사카의 젊은 문화와 사람 구경이 목적이다. 쇼핑 관심이 없다면 삼각공원과 벽화만 짧게 보고 오렌지스트리트로 넘어간다.','오후','https://osaka-info.jp/experience/en/osaka/spot/211',null),
      place('orange-street-v5','오렌지스트리트·호리에','オレンジストリート・堀江',[34.6702,135.4929],'neighborhood','가구·패션·카페',80,'디자이너 편집숍, 가구, 카페가 이어지는 호리에의 세련된 거리.','아메리카무라의 소음에서 벗어나 취향 좋은 상점과 건축을 천천히 보기 좋다.','12:00~18:00','https://osaka-info.jp/en/spot/orange-street/',null),
      place('harukas-v5','아베노 하루카스 300','あべのハルカス300',[34.6461,135.5134],'icons','초고층 전망',100,'오사카 남부를 300m 높이에서 내려다보는 유리 전망대.','우메다 스카이와 달리 도시를 수직으로 압도하는 느낌이 강하다. 신세카이·덴노지와 한 축으로 묶기 좋다.','일몰 전후','https://www.abenoharukas-300.jp/en/',null,'성인 약 ¥2,000'),
      place('teamlab-v5','teamLab 보태니컬 가든 오사카','チームラボ ボタニカルガーデン 大阪',[34.6103,135.5214],'quirky','야외 디지털 아트',110,'나가이 식물원의 나무와 연못을 빛·소리·반응형 작품으로 바꾸는 야간 전시.','실내 미디어아트와 달리 실제 자연과 날씨가 작품 일부가 된다. 비가 심하면 체감이 크게 떨어진다.','일몰 후·예약','https://www.teamlab.art/e/botanicalgarden/',null,'날짜별'),
      place('bunraku-v5','국립분라쿠극장','国立文楽劇場',[34.6665,135.5082],'quirky','인형극·전통예능',150,'오사카에서 발전한 분라쿠를 전용 극장에서 본다.','공연 날짜가 맞는다면 “오사카다운 문화”의 깊이가 관광지 산책과 비교가 안 된다. 짧은 감상교실이나 전시만 확인해도 좋다.','공연 일정 우선','https://www.ntj.jac.go.jp/english/schedule/bunraku/',null,'공연별'),
      place('ngk-v5','난바 그랜드 가게츠','なんばグランド花月',[34.6657,135.5034],'quirky','오와라이·코미디',150,'요시모토 코미디와 신희극을 보는 오사카 웃음 문화의 본진.','일본어 이해도가 높을수록 강하지만 몸개그와 현장 반응만으로도 분위기를 느낄 수 있다. 비 오는 저녁 대안으로 좋다.','공연 시간 확인','https://ngk.yoshimoto.co.jp/',null,'공연별'),
      place('tombori-cruise-v5','톤보리 리버 크루즈','とんぼりリバークルーズ',[34.6687,135.5008],'quirky','20분 강변 보트',40,'도톤보리강 수면 높이에서 네온과 다리, 대형 간판을 지나간다.','걷기만 할 때 놓치는 간판의 스케일과 강변의 소음을 짧고 확실하게 체험한다. 밤 회차가 본편이다.','19:00 이후','https://www.ipponmatsu.co.jp/cruise/tombori.html',null,'약 ¥1,500'),
      place('hep-five-v5','HEP FIVE 대관람차','HEP FIVE 観覧車',[34.7040,135.5003],'quirky','도심 위 빨간 관람차',50,'우메다 쇼핑몰 옥상에서 빨간 관람차가 도심 빌딩 사이로 솟는다.','짧은 시간에 전망과 놀이를 동시에 얻는다. 우메다 스카이까지 갈 시간이 없을 때 대체하기 좋다.','해질녘~밤','https://www.hepfive.jp/en/ferriswheel/',null,'약 ¥800'),
      place('santa-maria-v5','산타마리아 데이 크루즈','サンタマリア',[34.6540,135.4295],'bay','오사카항 크루즈',70,'범선을 본뜬 배로 오사카항과 베이 브리지를 돈다.','가이유칸 실내 관람 뒤 시야를 멀리 열어주는 코스다. 바람이 강하거나 흐리면 만족도가 떨어진다.','오후·운항 확인','https://suijo-bus.osaka/intro/santamaria/',null,'약 ¥1,800'),
      place('cosmo-tower-v5','사키시마 코스모타워 전망대','さきしまコスモタワー展望台',[34.6384,135.4146],'bay','베이 야경',90,'오사카만과 항만, 시가지가 넓게 펼쳐지는 55층 전망대.','중심가 전망대보다 항구의 산업적 풍경과 일몰이 강하다. 베이 지역에 이미 있을 때 가치가 커진다.','일몰 60분 전','https://osaka-info.jp/en/spot/sakishima-cosmo-tower-observatory/',null,'약 ¥1,000'),
      place('expo70-v5','엑스포’70 기념공원·태양의 탑','万博記念公園・太陽の塔',[34.8104,135.5329],'bay','거대 조형·공원',180,'오카모토 다로의 태양의 탑과 1970년 만국박람회 부지를 걷는다.','중심가와 완전히 다른 스케일의 공원과 일본 현대사의 낙관을 본다. 이동시간을 감수할 만큼 독특하다.','오전·내부 예약','https://www.expo70-park.jp/languages/english/',null,'공원·내부 별도'),
      place('cupnoodles-v5','컵누들 뮤지엄 오사카 이케다','カップヌードルミュージアム 大阪池田',[34.8179,135.4282],'quirky','나만의 컵라면',120,'인스턴트 라면의 역사와 패키지를 보고 직접 컵누들을 디자인한다.','성인끼리도 결과물이 기념품으로 남는 체험형 장소다. 우메다에서 북쪽으로 이동하는 시간을 따로 잡아야 한다.','오전·휴관 확인','https://www.cupnoodles-museum.jp/en/osaka_ikeda/',null,'입장 무료·체험 별도')
    ],
    goodsGroups: { all:'전체', character:'캐릭터·게임', retro:'레트로·중고', fashion:'패션·디자인', kitchen:'주방·공예', foodgift:'먹거리 선물', department:'백화점·생활' },
    goodsOverrides: {
      lucua:{group:'character',name:'다이마루 우메다 13F 캐릭터 존',jp:'大丸梅田店 13F',coords:[34.7025,135.4966],label:'닌텐도·포켓몬·캡콤',description:'Nintendo OSAKA, Pokémon Center OSAKA, CAPCOM STORE ANNEX를 같은 층에서 비교한다.',whyGo:'세 사람이 취향이 달라도 한 층에서 갈라졌다 다시 만나기 쉽다. 인기 상품은 품절과 입장 정리가 있을 수 있다.',official:'https://www.daimaru.co.jp/umedamise/floor/13f.html',image:null,verifiedPhoto:false},
      parco:{group:'character',name:'신사이바시 PARCO 5·6F',jp:'心斎橋PARCO POP CULTURE',coords:[34.6752,135.5004],label:'팝컬처 층',description:'CAPCOM, 고질라, 치이카와, 지브리, 스누피와 여러 공식 숍이 두 층에 모인다.',whyGo:'개별 매장을 찾아 흩어질 필요 없이 최신 팝업과 공식 굿즈를 한 건물에서 본다.',official:'https://shinsaibashi.parco.jp/shop/popculture/',image:'assets/shop-parco.jpg',verifiedPhoto:true},
      denden:{group:'retro',name:'덴덴타운·오타로드',jp:'でんでんタウン・オタロード',coords:[34.6588,135.5064],label:'전자·애니·중고',description:'피규어, 게임, 카드, 전자부품과 중고 매장이 이어지는 니혼바시 취미 상권.',whyGo:'공식 신상품보다 절판품과 가격 비교가 목적일 때 강하다. 같은 물건도 매장별 상태·가격 차이가 크다.',official:'https://osaka-info.jp/en/spot/nipponbashi-denden-town/',image:'assets/shop-denden.jpg',verifiedPhoto:true},
      doguya:{group:'kitchen',name:'센니치마에 도구야스지',jp:'千日前道具屋筋商店街',coords:[34.6623,135.5034],label:'주방도구·식품 샘플',description:'그릇, 칼, 노렌, 다코야키 팬과 음식 모형을 파는 요리 도구 전문 아케이드.',whyGo:'오사카가 왜 “먹는 도시”인지 주방 뒤편에서 이해한다. 작고 실용적인 선물이 캐릭터 굿즈보다 오래 남는다.',official:'https://osaka-info.jp/experience/en/osaka/spot/205',image:null,verifiedPhoto:false},
      pokemonDx:{group:'character',name:'Pokémon Center OSAKA DX',jp:'ポケモンセンターオーサカDX',coords:[34.6749,135.5010],label:'포켓몬 공식·카페',description:'다이마루 신사이바시 9층의 포켓몬 공식 매장과 예약제 카페.',whyGo:'PARCO 팝컬처 층과 지하 통로로 이어져 캐릭터 쇼핑 동선을 압축한다. 카페는 별도 예약이 핵심이다.',official:'https://shop.pokemon.co.jp/en/shop/pokemoncenter-osakadx/',image:'assets/shop-pokemon-dx.jpg',verifiedPhoto:true},
      'rikuro-gift-v3':{group:'foodgift',image:null,verifiedPhoto:false,whyGo:'갓 나온 따뜻한 케이크는 현장에서, 포장 제품은 귀국 동선에 맞춰 산다. 줄이 길면 난바의 다른 지점을 확인할 수 있다.'}
    },
    goods: [
      place('nintendo-osaka-v5','Nintendo OSAKA','ニンテンドーオオサカ',[34.7025,135.4966],'character','공식 게임 굿즈',75,'마리오, 젤다, 스플래툰 등 닌텐도 IP의 공식 상품과 대형 캐릭터 연출을 본다.','오사카에서만 해야 하는 쇼핑이라기보다 한 공간의 밀도와 전시가 재미다. 재고·입장권 공지는 당일 확인한다.','개점 직후','https://www.nintendo.com/jp/officialstore/index.html',null,'상품별'),
      place('capcom-store-v5','CAPCOM STORE OSAKA','カプコンストアオオサカ',[34.6752,135.5004],'character','캡콤 공식',50,'몬스터헌터, 스트리트파이터, 바이오하자드 등 캡콤 공식 굿즈 숍.','신사이바시 PARCO 6층 다른 캐릭터 매장과 이어져 팬이 아니어도 구경하는 재미가 있다.','PARCO 6F','https://shinsaibashi.parco.jp/shop/detail/?cd=025621',null,'상품별'),
      place('ghibli-parco-v5','도토리공화국 신사이바시','どんぐり共和国',[34.6752,135.5004],'character','지브리 공식',45,'토토로와 센과 치히로 등 스튜디오 지브리 생활잡화와 인형을 고른다.','선물용으로 실패가 적고 같은 층의 공식 숍과 비교가 쉽다.','PARCO 6F','https://shinsaibashi.parco.jp/shop/popculture/',null,'상품별'),
      place('bandai-cross-v5','반다이남코 Cross Store','バンダイナムコ Cross Store',[34.6752,135.5004],'character','가샤폰·IP 굿즈',60,'가샤폰과 반다이남코 IP 상품을 한 자리에서 본다.','소액부터 시작할 수 있어 세 사람 취향이 달라도 참여하기 쉽다. 캡슐토이는 부피가 빠르게 늘어난다.','PARCO 5F','https://shinsaibashi.parco.jp/shop/popculture/',null,'¥300부터'),
      place('mandarake-v5','만다라케 그랜드카오스','まんだらけ グランドカオス',[34.6703,135.4981],'retro','중고·절판 컬렉션',90,'만화, 피규어, 빈티지 장난감과 서브컬처 중고품을 층별로 찾는다.','정리된 공식 숍보다 예측 불가능한 발견이 목적이다. 상태 표기와 면세 조건을 확인한다.','오후','https://earth.mandarake.co.jp/shop/gcs/',null,'상품별'),
      place('superpotato-v5','슈퍼 포테이토 오사카 오타로드','スーパーポテト オタロード店',[34.6595,135.5062],'retro','레트로 게임',65,'패미컴부터 휴대용 게임기, 소프트와 관련 굿즈를 살펴본다.','실제로 살 물건이 없어도 일본 게임 패키지 디자인의 역사를 한 번에 보는 재미가 있다.','오후','https://www.superpotato.com/',null,'상품별'),
      place('surugaya-v5','스루가야 니혼바시','駿河屋 日本橋',[34.6605,135.5060],'retro','중고 취미 종합',75,'게임, 카드, 피규어, 애니 굿즈의 중고 재고와 가격을 비교한다.','오타로드에서 기준 가격을 잡기 좋은 대형 선택지다. 같은 캐릭터도 지점별 재고가 다르다.','오후','https://www.suruga-ya.jp/feature/osaka/index.html',null,'상품별'),
      place('animate-v5','애니메이트 오사카 니혼바시','アニメイト大阪日本橋',[34.6592,135.5072],'retro','신작 애니·만화',60,'신작 애니 굿즈, 만화, 음반과 이벤트 코너를 층별로 본다.','중고 탐색보다 현재 인기작의 공식 상품을 빠르게 확인하는 기준점이다.','오후','https://www.animate.co.jp/shop/nipponbashi/',null,'상품별'),
      place('amerikamura-shop-v5','아메리카무라 빈티지 숍','アメリカ村 古着',[34.6722,135.4972],'fashion','빈티지·스트리트',100,'삼각공원 주변의 빈티지, 스트리트웨어와 작은 액세서리 숍을 비교한다.','브랜드 한 곳보다 골목 자체가 쇼핑 방식이다. 사이즈와 상태를 직접 보고 짧게 여러 곳을 도는 편이 좋다.','12:00 이후','https://osaka-info.jp/experience/en/osaka/spot/211',null,'상품별'),
      place('orange-shop-v5','오렌지스트리트 편집숍','立花通り・堀江',[34.6700,135.4930],'fashion','디자인·가구·패션',90,'호리에의 디자이너 브랜드, 가구와 생활소품 편집숍을 걷는다.','로고 굿즈보다 물건의 재료와 디자인을 보는 취향이라면 가장 잘 맞는다.','12:00~18:00','https://osaka-info.jp/en/spot/orange-street/',null,'상품별'),
      place('sakai-knife-v5','사카이 전통산업회관·칼','堺伝匠館',[34.5826,135.4732],'kitchen','사카이 칼·전통공예',100,'사카이 칼과 향, 주석 등 지역 전통산업을 한 곳에서 비교한다.','전문 칼을 실제로 고르고 관리법까지 듣고 싶다면 도구야스지보다 깊다. 중심가 밖 이동 시간을 감수해야 한다.','오전~오후','https://www.sakaidensan.jp/en/',null,'상품별'),
      place('sample-making-v5','디자인포켓 음식모형 체험','デザインポケット',[34.6622,135.5035],'kitchen','식품 샘플 만들기',70,'다코야키나 디저트 음식 모형을 직접 만들어 기념품으로 가져간다.','완제품을 사는 것보다 기억에 남고 세 사람이 각자 다른 결과물을 만들 수 있다. 예약 가능 여부를 먼저 본다.','예약 권장','https://www.designpocket.net/',null,'체험별'),
      place('551-gift-v5','551 HORAI 포장 선물','551蓬莱',[34.6660,135.5013],'foodgift','부타만·슈마이',30,'부타만과 슈마이를 바로 먹거나 냉장 포장으로 산다.','간사이에서 바로 알아보는 선물이지만 냄새와 보관, 항공 반입 동선을 고려해야 한다.','출국 직전보다 이동 전','https://www.551horai.co.jp/shop/',null,'상품별'),
      place('gokan-gift-v5','고칸 기타하마 본관','五感 北浜本館',[34.6908,135.5072],'foodgift','오사카 양과자',45,'근대 건축 안에서 쌀을 활용한 롤케이크와 구움과자를 고른다.','패키지와 건물 경험까지 선물에 이야기가 붙는다. 이동이 길면 백화점 입점 매장을 대안으로 본다.','오후','https://www.patisserie-gokan.co.jp/shop/kitahama/',null,'상품별'),
      place('grand-calbee-v5','GRAND Calbee 한신 우메다','グランカルビー',[34.7000,135.4985],'foodgift','고급 감자스낵',30,'두꺼운 감자 스낵과 지역 한정 맛을 백화점 지하에서 고른다.','가볍고 나눠 주기 쉬워 회사·지인용 대량 선물에 실용적이다.','한신 우메다 B1','https://www.hanshin-dept.jp/hshonten/',null,'상품별'),
      place('hankyu-umeda-v5','한큐백화점 우메다 본점','阪急うめだ本店',[34.7026,135.4988],'department','명품·화장품·식품',100,'대형 화장품관, 패션과 식품관을 한 건물에서 해결한다.','선물 목록이 넓고 시간이 적을 때 가장 안전한 압축 쇼핑이다. 주말 식품관은 매우 붐빈다.','개점 직후','https://www.hankyu-dept.co.jp/fl/english/honten/',null,'상품별'),
      place('takashimaya-v5','오사카 다카시마야','大阪高島屋',[34.6648,135.5011],'department','난바 백화점·식품관',90,'난바역과 붙은 백화점에서 화장품, 일본 브랜드와 지하 식품을 본다.','월요일 체크아웃 뒤 짐을 맡기고 마지막 쇼핑하기 좋은 위치가 강점이다.','오전','https://www.takashimaya-global.com/en/stores/osaka/',null,'상품별'),
      place('hands-shinsaibashi-v5','HANDS 신사이바시','ハンズ心斎橋店',[34.6752,135.5004],'department','문구·생활·뷰티',75,'문구, 여행용품, 뷰티와 일본식 생활 아이디어 상품을 층별로 본다.','캐릭터보다 실용적인 작은 선물을 여러 명에게 살 때 효율적이다.','PARCO 9~11F','https://shinsaibashi.hands.net/',null,'상품별')
    ],
    nightlifeGroups: { all:'전체', easy:'첫날·쉬운 밤', local:'로컬 술집', music:'음악·클럽', upscale:'고급 바', view:'야경·산책', adult:'성인 유흥가' },
    nightlifeOverrides: {
      'dotonbori-night-v3':{group:'easy',verifiedPhoto:true,whyGo:'오사카의 네온과 사람 흐름을 가장 쉽게 경험한다. 처음 온 밤에 방향을 잃어도 강을 기준으로 복귀하기 쉽다.'},
      'uranamba-v3':{group:'local',image:null,verifiedPhoto:false,whyGo:'대형 체인보다 작은 스탠딩바와 이자카야를 두세 곳 짧게 옮겨 다니는 재미가 있다.'},
      'hozenji-v3':{group:'easy',image:null,verifiedPhoto:false,whyGo:'도톤보리 바로 뒤인데 돌바닥과 등불 때문에 한 템포 조용한 밤을 만들 수 있다.'},
      'amerikamura-v3':{group:'music',image:null,verifiedPhoto:false,whyGo:'공연·DJ·클럽 일정이 맞는 날에만 강해진다. 낮의 빈티지 거리와 밤의 음악가가 완전히 다르다.'},
      'kitashinchi-v3':{group:'upscale',image:null,verifiedPhoto:false,whyGo:'예약한 고급 식사와 가격이 명확한 칵테일바를 연결할 때 좋다. 목적 없이 들어가면 비용 예측이 어렵다.'},
      'tenma-v3':{group:'local',image:null,verifiedPhoto:false,whyGo:'관광지형 네온보다 현지 퇴근 인파 속에서 싸고 활기찬 한 잔을 원할 때 맞는다.'}
    },
    nightlife: [
      place('fukushima-night-v5','후쿠시마 골목','福島',[34.6969,135.4868],'local','이자카야·와인바',100,'JR 후쿠시마역 주변에 작은 식당과 바가 철길 아래와 골목에 밀집한다.','우메다에서 한 정거장이면서 훨씬 동네 분위기다. 음식 중심의 1차와 조용한 2차를 연결하기 좋다.','18:00 이후','https://osaka-info.jp/en/area/kita/',null,'1곳 ¥2,000~4,000',{category:'nightlife',risk:'인기 소형점은 대기·예약 가능. 막차 시간을 저장.'}),
      place('kyobashi-night-v5','교바시 역전 골목','京橋',[34.6960,135.5345],'local','다치노미·대중주점',100,'역 주변의 서서 마시는 술집과 오래된 대중주점에서 짧게 여러 집을 돈다.','세련됨보다 가격과 활기가 목적이다. 오사카성 코스 뒤 로컬 밤으로 전환하기 좋다.','17:30 이후','https://osaka-info.jp/en/area/osaka-castle/',null,'1곳 ¥1,000~3,000',{category:'nightlife',risk:'현금만 받는 가게와 흡연 가능 업소가 있음.'}),
      place('tsuruhashi-night-v5','쓰루하시 야키니쿠 골목','鶴橋 焼肉横丁',[34.6653,135.5307],'local','야키니쿠·한국 술집',100,'역을 나오자마자 숯불 냄새가 퍼지는 야키니쿠 골목에서 저녁을 고른다.','밤의 목적이 술보다 강한 식사라면 가장 확실하다. 세 사람이 고기 부위를 나눠 먹기 좋다.','17:00~21:00','https://osaka-info.jp/en/spot/tsuruhashi/',null,'1인 ¥3,000~7,000',{category:'nightlife',risk:'호객보다 메뉴판·리뷰가 명확한 가게를 선택.'}),
      place('shinsekai-night-v5','신세카이 야간','新世界 夜景',[34.6522,135.5061],'easy','복고 네온·쿠시카쓰',90,'쓰텐카쿠 조명과 과장된 간판 아래에서 쿠시카쓰와 오락실을 잇는다.','도톤보리보다 낡고 장난스러운 오사카의 밤을 본다. 너무 늦기 전 저녁 시간대가 가장 편하다.','18:00~21:00','https://osaka-info.jp/en/spot/shinsekai/','assets/shinsekai.jpg','가게별',{category:'nightlife',verifiedPhoto:true,risk:'외진 골목보다 큰길 중심. 가격표 없는 호객은 무시.'}),
      place('misono-night-v5','미소노 유니버스 빌딩','味園ユニバースビル',[34.6651,135.5050],'music','공연·서브컬처 바',100,'레트로한 대형 빌딩 안팎에 라이브, DJ, 개성 강한 바 문화가 이어져 온 장소.','행사가 있는 날에는 평범한 술집보다 훨씬 오사카다운 밤이 된다. 운영 중인 업소와 공연 일정을 반드시 당일 확인한다.','행사 시간','https://www.google.com/maps/search/?api=1&query=味園ユニバースビル',null,'행사별',{category:'nightlife',risk:'폐점·이전 변동이 잦아 공식 SNS와 당일 지도 정보를 확인.'}),
      place('zepp-namba-v5','Zepp Namba','Zepp Namba(OSAKA)',[34.6564,135.5013],'music','라이브 공연장',150,'일본 밴드와 해외 아티스트의 스탠딩 공연을 보는 난바 남쪽 라이브홀.','여행 날짜 공연이 취향과 맞으면 관광지 하나보다 기억에 오래 남는다. 표와 신분증 조건을 먼저 확인한다.','공연 일정','https://www.zepp.co.jp/hall/namba/',null,'공연별',{category:'nightlife',risk:'티켓 사전 구매·드링크 비용·입장 순번 확인.'}),
      place('umeda-bars-v5','오하츠텐진·히가시도리','お初天神・阪急東通商店街',[34.7018,135.5025],'easy','우메다 대중 술집',100,'오하츠텐진 주변과 히가시도리에 이자카야, 바, 심야 식당이 길게 이어진다.','우메다 숙소라면 마지막 전철 걱정 없이 선택 폭을 크게 가져갈 수 있다.','18:00 이후','https://osaka-info.jp/en/area/kita/',null,'가게별',{category:'nightlife',risk:'무료 안내소·호객을 따라가지 말고 직접 고른 업소만 이용.'}),
      place('nakanoshima-night-v5','나카노시마 강변 야경','中之島 夜景',[34.6934,135.5045],'view','강·근대건축 조명',75,'중앙공회당과 다리 조명, 강 위로 비치는 빌딩 불빛을 천천히 걷는다.','술을 마시지 않아도 밤다운 장면을 만들 수 있다. 기타하마 카페나 바 한 곳과 붙이면 균형이 좋다.','일몰 후','https://osaka-info.jp/en/spot/nakanoshima-park/','assets/place-central-hall.jpg','무료',{category:'nightlife',verifiedPhoto:true,risk:'강변 일부가 어두우니 큰 산책로 이용.'}),
      place('harukas-night-v5','하루카스·텐시바 야경','ハルカス・てんしば 夜景',[34.6463,135.5134],'view','전망대·잔디광장',90,'하루카스 전망대 또는 텐시바에서 초고층 조명과 덴노지의 밤을 본다.','신세카이와 붙여 남부 야경 코스를 완성한다. 전망대 비용이 부담되면 텐시바 산책만 해도 된다.','일몰 후','https://www.abenoharukas-300.jp/en/',null,'무료~전망대 티켓',{category:'nightlife',risk:'월요일은 출국 시간 때문에 배치 불가.'}),
      place('tobita-v5','토비타신치','飛田新地',[34.6428,135.5048],'adult','역사적 성인 유흥가',45,'다이쇼 시대 유곽의 도시 구조와 건축 흔적이 남아 있으면서 현재도 영업이 이루어지는 성인 유흥 구역. 일반 관광거리나 포토스폿이 아니다.','밤의 분위기를 짧게 지나보는 일정으로만 둔다. 촬영하거나 멈춰 서서 구경하는 장소가 아니며, 업소 이용 정보는 제공하지 않는다.','밤 · 촬영 없이 짧게 통과','https://en.wikipedia.org/wiki/Tobita_Shinchi',null,'업소 정보 제공 안 함',{category:'nightlife',risk:'촬영 절대 금지. 휴대폰·카메라를 들이대지 말고 멈춰 서서 응시하지 않기. 호객을 따라가지 않기. 업소·서비스·가격 안내는 이 가이드에서 제공하지 않는다.',precision:'area',adultOnly:true}),
      place('taiyoshi-v5','타이요시 햐쿠반 건축','鯛よし百番',[34.6434,135.5046],'adult','등록문화재 건축',60,'옛 유곽 건축을 간직한 등록유형문화재로 알려진 건물. 현재 운영·예약 여부는 반드시 직접 확인한다.','토비타 지역을 소비적으로 구경하는 대신 건축과 보존의 관점에서 맥락을 이해하는 선택지다.','낮·예약 확인','https://kunishitei.bunka.go.jp/heritage/detail/101/00002148',null,'이용 여부 확인',{category:'nightlife',risk:'주변 생활권과 사람을 촬영하지 말 것. 정확한 운영 상태를 공식·전화로 재확인.',adultOnly:true})
    ],
    restaurantExactPhotos: {
      'daruma-v3': { image:'assets/food-kushikatsu.jpg', source:['쿠시카쓰 다루마 매장 음식','https://commons.wikimedia.org/wiki/File:KushikatsuDaruma01.jpg','CC BY-SA 3.0'] },
      'horai551-v3': { image:'assets/food-butaman.jpg', source:['551 HORAI 부타만','https://commons.wikimedia.org/wiki/File:551_nikuman.jpg','CC BY 4.0'] },
      'kanidoraku-v4': { image:'assets/venue-kani-doraku.jpg', source:['카니도라쿠 도톤보리 본점','https://commons.wikimedia.org/wiki/File:Kani_Doraku_Dotombori_honten_on_21st_October_2020.jpg','CC BY-SA 4.0'] },
      'kinryu-v4': { image:'assets/venue-kinryu-ramen.jpg', source:['킨류라멘 도톤보리점 내부','https://commons.wikimedia.org/wiki/File:Tonkotsu_Ramen_@_Kinryu_Ramen_@_Dotonbori_@_Osaka_(13382228344).jpg','CC BY 2.0'] }
    }
  };
})();
