const placeImage = {
  airport: 'assets/osaka-hero.png',
  night: 'assets/dotonbori-night.jpg',
  castle: 'assets/osaka-castle-night.jpg',
  food: 'assets/osaka-food.png',
  goods: 'assets/osaka-goods.png',
  yasaka: 'assets/namba-yasaka.jpg',
  retro: 'assets/shinsekai.jpg',
  sky: 'assets/umeda-sky.jpg'
};

const places = {
  kix: {
    name: '간사이국제공항 도착', jp: '関西国際空港', area: 'KIX', category: '입국', image: placeImage.airport,
    duration: '60~90분', hours: '항공편 기준', price: '—',
    short: '입국·수하물 시간을 일정에 먼저 흡수한다.',
    story: '15시 착륙은 15시에 여행을 시작한다는 뜻이 아니다. 입국과 수하물, T2 셔틀 여부까지 지나 난바 호텔에는 보통 17:30~18:30에 닿는다.',
    tip: 'T2라면 무료 셔틀 시간을 추가하고, 토요일 첫 식당 예약은 19:30 이후가 안전하다.',
    backup: '입국이 90분을 넘기면 예약 식당 대신 늦게까지 하는 후쿠타로로 바로 전환.',
    map: 'https://www.google.com/maps/search/?api=1&query=Kansai+International+Airport', official: 'https://www.kansai-airport.or.jp/en/access/train'
  },
  rapit: {
    name: '라피트 → 난카이 난바', jp: '特急ラピート', area: 'KIX → NAMBA', category: '교통', image: placeImage.airport,
    duration: '최단 34분', hours: '열차별', price: '¥1,410~',
    short: '좌석이 있는 공항 특급으로 첫 이동을 단순하게.',
    story: '공항에서 난바까지 가장 여행다운 첫 장면. 디지털 티켓은 열차와 좌석을 선택한 뒤 QR로 개찰한다.',
    tip: '비행 지연을 생각해 입국 전에 너무 촘촘한 열차를 지정하지 않는다. 출발 5분 전까지 좌석 지정 가능 여부를 확인.',
    backup: '라피트 시간이 맞지 않으면 난카이 공항급행. 같은 난바 종착이라 호텔 동선을 유지한다.',
    map: 'https://www.google.com/maps/dir/?api=1&origin=Kansai+International+Airport&destination=Nankai+Namba+Station&travelmode=transit', official: 'https://www.nankai.co.jp/en_railway/ticket/rapit'
  },
  hotel: {
    name: '난바 체크인·숨 고르기', jp: 'なんば', area: 'MINAMI', category: '베이스', image: placeImage.airport,
    duration: '40분', hours: '숙소별', price: '—',
    short: '짐을 내려놓고 밤 동선을 한 방향으로 만든다.',
    story: '난바는 공항 접근과 마지막 날 동선을 동시에 해결한다. 첫날 체크인 뒤에는 도톤보리 쪽으로만 북상하고, 마지막 날은 남쪽 상권에서 역으로 돌아오면 된다.',
    tip: '월요일 체크아웃 뒤 짐 보관 가능 여부를 바로 물어본다.',
    backup: '호텔 보관이 안 되면 난카이 난바역 n・e・s・t 또는 코인 로커.',
    map: 'https://www.google.com/maps/search/?api=1&query=Nankai+Namba+Station', official: 'https://www.nankai.co.jp/en/community/natts/nest/'
  },
  ajinoya: {
    name: '맛노야 본점', jp: '味乃家 本店', area: 'NAMBA', category: '오코노미야키', image: placeImage.food,
    duration: '75~90분', hours: '월요일 휴무', price: '¥1,000~',
    short: '토요일 첫 저녁에 놓는 대표 오코노미야키.',
    story: '부드러운 반죽과 달큰한 소스, 눈앞의 철판이 오사카 첫 저녁의 온도를 단숨에 올린다. 공식 FastPass는 좌석 예약이 아니라 줄 우선권이다.',
    tip: '공식 TableCheck만 유효. 지정 시각 15분이 지나면 무효가 될 수 있다.',
    backup: '비행이 늦으면 예약 없는 후쿠타로 본점.',
    map: 'https://www.google.com/maps/search/?api=1&query=Ajinoya+Honten+Osaka', official: 'https://ajinoya-okonomiyaki.com/en/contact/faq.php'
  },
  fukutaro: {
    name: '후쿠타로 본점', jp: '福太郎 本店', area: 'NAMBA', category: '네기야키', image: placeImage.food,
    duration: '60~75분', hours: '주말 12:00~23:30', price: '¥1,000~',
    short: '늦은 도착을 받아주는 든든한 철판 백업.',
    story: '파 향이 선명한 네기야키가 강점. 예약 없이 현장 대기하는 구조라 비행 지연이 있는 도착일에 오히려 유연하다.',
    tip: '대기가 30분을 넘으면 다카시마야 지점 또는 다른 난바 식당으로.',
    backup: '551 HORAI 식당과 마루후쿠 커피를 잇는 실내 루트.',
    map: 'https://www.google.com/maps/search/?api=1&query=Fukutaro+Honten+Osaka', official: 'https://2951.jp/en/access.html'
  },
  dotonbori: {
    name: '호젠지 → 도톤보리', jp: '法善寺・道頓堀', area: 'MINAMI', category: '야경 산책', image: placeImage.night,
    duration: '60~75분', hours: '상시', price: '무료',
    short: '젖은 돌골목에서 거대한 네온까지, 미나미의 대비.',
    story: '도톤보리의 진짜 연출은 글리코 사인 하나가 아니다. 이끼 낀 호젠지와 좁은 요코초를 먼저 지나 강변의 과장된 빛으로 나가야 장면 전환이 살아난다.',
    tip: '에비스바시 정면 사진 뒤 강변 산책로로 내려가면 군중 밀도가 낮아진다.',
    backup: '비가 강하면 PARCO 5~6F → 마루후쿠 커피로 실내 전환.',
    map: 'https://www.google.com/maps/dir/?api=1&origin=Hozenji+Yokocho&destination=Dotonbori+Glico+Sign&travelmode=walking', official: 'https://osaka-info.jp/en/spot/dotonbori/'
  },
  wanaka: {
    name: '와나카 다코야키', jp: 'たこ焼道楽 わなか', area: 'DOTONBORI', category: '간식', image: placeImage.food,
    duration: '20~25분', hours: '약 10:30~21:00', price: '¥600 안팎',
    short: '한 끼가 아니라 6~8알을 나눠 먹는 쉼표.',
    story: '겉은 막을 만들고 안은 흐르는 오사카식 다코야키. 갓 나온 첫 알은 매우 뜨거우니 바로 베어 물지 않는다.',
    tip: '오코노미야키 직후라면 한 판을 둘이 나눠야 다음 카페가 살아난다.',
    backup: '줄이 길면 우메다 하나다코를 일요일 간식으로.',
    map: 'https://www.google.com/maps/search/?api=1&query=Takoyaki+Wanaka+Dotonbori', official: 'http://takoyaki-wanaka.com/en/index.html'
  },
  lilo: {
    name: 'LiLo Coffee Kissa', jp: 'リロ珈琲喫茶', area: 'SHINSAIBASHI', category: '커피', image: placeImage.food,
    duration: '45~50분', hours: '주말 11:00~22:00', price: '¥700~',
    short: '도톤보리의 볼륨을 낮추는 늦은 커피.',
    story: '스페셜티 커피와 일본식 킷사텐의 앉는 감각을 섞은 곳. 네온을 본 뒤 여행의 첫날을 천천히 정리하기 좋다.',
    tip: '22시 마감에 가까우면 주문 시간을 먼저 확인.',
    backup: '23시까지 하는 마루후쿠 센니치마에.',
    map: 'https://www.google.com/maps/search/?api=1&query=LiLo+Coffee+Kissa', official: 'https://coffee.liloinveve.com/pages/lilo-coffee-kissa-1?locale=ja'
  },
  marufuku: {
    name: '마루후쿠 커피 본점', jp: '丸福珈琲店 千日前本店', area: 'SENNICHIMAE', category: '레트로 킷사텐', image: placeImage.food,
    duration: '40~50분', hours: '08:00~23:00', price: '¥700~',
    short: '1934년부터 이어진 진한 커피와 동판 핫케이크.',
    story: '어두운 목재와 묵직한 커피가 바깥 상점가와 다른 시간대를 만든다. 08시에 시작하는 아침에도, 늦은 밤에도 쓸 수 있는 희귀한 베이스캠프다.',
    tip: '모닝 세트는 평일만. 주말에는 단품 가격을 기준으로 잡는다.',
    backup: '난바역 안쪽 카페보다 분위기를 우선할 때 선택.',
    map: 'https://www.google.com/maps/search/?api=1&query=Marufuku+Coffee+Sennichimae', official: 'https://marufukucoffeeten.com/store/marufukucoffee-sennichimae/'
  },
  parco: {
    name: '신사이바시 PARCO 5~6F', jp: '心斎橋PARCO', area: 'SHINSAIBASHI', category: '굿즈 허브', image: placeImage.goods,
    duration: '80~110분', hours: '물판 10:00~20:00', price: '쇼핑별',
    short: '치이카와·지브리·고지라·CAPCOM을 두 층에 압축.',
    story: '유명 IP 매장이 서로 가까워 처음부터 구매 목록을 정하면 이동 없이 비교할 수 있다. 포켓몬은 같은 동네 Daimaru 9F의 Osaka DX가 더 적합하다.',
    tip: '토요일 18:30 이후 도착이면 20시 마감을 쫓지 말고 일요일로 넘긴다.',
    backup: '우메다 LUCUA SOUTH 13F 캐릭터 허브.',
    map: 'https://www.google.com/maps/search/?api=1&query=Shinsaibashi+PARCO', official: 'https://shinsaibashi.parco.jp/shop/popculture/'
  },
  castle: {
    name: '오사카성 공원·천수각', jp: '大阪城天守閣', area: 'CASTLE', category: '역사·산책', image: placeImage.castle,
    duration: '90~120분', hours: '09:00~18:00', price: '¥1,200',
    short: '08:30 해자, 09:00 천수각 개장에 맞춘다.',
    story: '도요토미 히데요시의 성은 소실과 재건을 거쳤고, 현재 천수각 내부는 현대식 박물관이다. 거대한 돌과 해자, 성으로 다가가는 축선이 건물 자체만큼 중요하다.',
    tip: '모리노미야 쪽에서 들어가면 공원의 긴 접근을 경험하고, 내부 관람은 개장 직후 처리.',
    backup: '비·폭염이면 오사카역사박물관 또는 가이유칸으로 큰 블록을 교체.',
    map: 'https://www.google.com/maps/search/?api=1&query=Osaka+Castle+Museum', official: 'https://www.osakacastle.net/guide/?lang=en'
  },
  harukoma: {
    name: '하루코마 스시', jp: '春駒 支店', area: 'TENMA', category: '스시', image: placeImage.food,
    duration: '60~75분', hours: '11:00~21:00 · 화 휴무', price: '¥1,500~',
    short: '성에서 우메다로 가는 길에 넣는 덴마 점심.',
    story: '화려한 오마카세보다 크고 빠른 오사카식 동네 스시의 에너지에 가깝다. 덴진바시 상점가까지 한 번에 본다.',
    tip: '11시 전 도착. 줄이 30분을 넘으면 우메다로 이동해 점심을 해결.',
    backup: '오사카역 지하 식당가 또는 한큐 산반가이.',
    map: 'https://www.google.com/maps/search/?api=1&query=Harukoma+Sushi+Tenjinbashi', official: 'https://metronine.osaka/en/kiosk/spot-detail/?kcat=sushi&spot_id=16274515203997'
  },
  lucua: {
    name: 'LUCUA SOUTH 13F', jp: 'ルクア サウス 13F', area: 'UMEDA', category: '캐릭터 굿즈', image: placeImage.goods,
    duration: '90~120분', hours: '10:00~20:00', price: '쇼핑별',
    short: '닌텐도·포켓몬·원피스·토미카·CAPCOM 한 층 압축.',
    story: '공식 신품을 짧은 시간에 보는 가장 강한 밀집도. 매장 간 이동이 몇 걸음이라 ‘구경만 할 곳’과 ‘실제 구매할 곳’을 먼저 나누면 좋다.',
    tip: '주말과 신상품 발매일에는 입장 정리권 공지를 확인.',
    backup: '신사이바시 PARCO 5~6F 또는 포켓몬센터 Osaka DX.',
    map: 'https://www.google.com/maps/search/?api=1&query=LUCUA+SOUTH+Osaka', official: 'https://www.lucua.jp/floormap/southshop.html'
  },
  hanadako: {
    name: '하나다코 네기마요', jp: 'はなだこ', area: 'UMEDA', category: '다코야키', image: placeImage.food,
    duration: '25~30분', hours: '약 10:00~21:45', price: '¥700 안팎',
    short: '오사카역 바로 옆, 6알만 먹는 빠른 간식.',
    story: '파를 산처럼 올린 네기마요가 대표. 서서 먹는 카운터라 긴 식사보다 쇼핑과 전망대 사이의 연결점으로 좋다.',
    tip: '줄이 길어도 회전은 빠른 편. 단, 선셋 입장 시각은 침범하지 않는다.',
    backup: 'LUCUA 푸드홀에서 즉시 전환.',
    map: 'https://www.google.com/maps/search/?api=1&query=Hanadako+Umeda', official: 'https://goumeda.com/shop/hanadako/'
  },
  sky: {
    name: '우메다 스카이빌딩 선셋', jp: '梅田スカイビル 空中庭園', area: 'UMEDA', category: '전망', image: placeImage.sky,
    duration: '90~110분', hours: '09:30~22:30', price: '¥2,000',
    short: '일몰 60~75분 전에 들어가 낮·노을·야경을 연속으로.',
    story: '두 타워 사이를 가로지르는 공중 에스컬레이터부터 이미 전망대가 시작된다. 옥상에서는 난간 유리 없이 도시의 바람을 직접 느낀다.',
    tip: '악천후에는 옥상 통제 가능. 주유패스 무료입장은 15시까지라 선셋 목적과는 맞지 않는다.',
    backup: '비가 강하면 하루카스 300 실내 전망 또는 우메다 식당가.',
    map: 'https://www.google.com/maps/search/?api=1&query=Umeda+Sky+Building', official: 'https://www.skybldg.co.jp/en/'
  },
  kiji: {
    name: '오코노미야키 기지', jp: 'お好み焼 きじ', area: 'UMEDA', category: '철판 저녁', image: placeImage.food,
    duration: '60~75분', hours: '목요일 휴무', price: '¥1,000~',
    short: '전망대와 같은 건물 지하에서 이동 없이 마감.',
    story: '쇼와풍 식당가 다키미코지에 있어 우메다 스카이빌딩의 미래적인 구조와 강하게 대비된다.',
    tip: '대기가 길면 시간을 지키기 위해 우메다역 쪽 식당으로 이동.',
    backup: '그랜드프론트 후쿠타로.',
    map: 'https://www.google.com/maps/search/?api=1&query=Okonomiyaki+Kiji+Umeda+Sky+Building', official: 'https://www.skybldg.co.jp/en/'
  },
  yasaka: {
    name: '난바 야사카 신사', jp: '難波八阪神社', area: 'NAMBA', category: '신사', image: placeImage.yasaka,
    duration: '25~35분', hours: '경내 06:00~17:00', price: '무료',
    short: '상점이 열기 전 12m 사자전을 만나는 월요일 첫 장면.',
    story: '거대한 사자 입이 액운을 삼키고 승운을 부른다고 전해진다. 난바의 상업지 뒤편에서 갑자기 나타나는 스케일 차이가 인상적이다.',
    tip: '09시 전후에는 비교적 조용하다. 경내 예절과 촬영 금지 표지를 먼저 확인.',
    backup: '비가 강하면 마루후쿠 커피에서 아침 시작.',
    map: 'https://www.google.com/maps/search/?api=1&query=Namba+Yasaka+Jinja', official: 'https://osaka-info.jp/en/spot/nanbayasakajinja/'
  },
  kuromon: {
    name: '구로몬 시장', jp: '黒門市場', area: 'NIPPONBASHI', category: '시장', image: placeImage.food,
    duration: '45~60분', hours: '점포별 · 오전 추천', price: '선택별',
    short: '큰 한 끼보다 해산물·과일·구이 2~3개만.',
    story: '오사카의 부엌이라는 별명은 여전히 유효하지만 관광객 대상 고가 메뉴도 많다. 가격표를 먼저 읽고, 시장 전체를 한 식당처럼 사용한다.',
    tip: '09~11시가 좋다. 와규·성게는 사진보다 표시가를 먼저 확인.',
    backup: '가격이 부담되면 센니치마에 정식집으로 이동.',
    map: 'https://www.google.com/maps/search/?api=1&query=Kuromon+Ichiba+Market', official: 'https://kuromon.com/en/official-store-map/'
  },
  doguya: {
    name: '도구야스지', jp: '千日前道具屋筋', area: 'NAMBA', category: '실용 쇼핑', image: placeImage.goods,
    duration: '30~40분', hours: '점포별', price: '쇼핑별',
    short: '칼·그릇·다코야키 팬·식품 샘플을 보는 오사카다운 쇼핑.',
    story: '식당의 앞이 아니라 뒤를 보는 상점가. 조리사들이 쓰는 칼과 냄비부터 작은 젓가락 받침까지 ‘도시가 어떻게 먹는지’를 물건으로 보여준다.',
    tip: '칼은 위탁수하물 규정을 확인하고, 면세 포장을 여행 중 뜯지 않는다.',
    backup: '짐이 이미 무거우면 소형 그릇·천·식품 샘플 자석만.',
    map: 'https://www.google.com/maps/search/?api=1&query=Sennichimae+Doguyasuji', official: 'https://www.doguyasuji.or.jp/en/'
  },
  denden: {
    name: '덴덴타운·오타로드', jp: 'でんでんタウン・オタロード', area: 'NIPPONBASHI', category: '굿즈 발굴', image: placeImage.goods,
    duration: '60~90분', hours: '대부분 10~11시 개점', price: '쇼핑별',
    short: '신품과 중고·절판을 구역별로 나눠 찾는다.',
    story: '큰 공식 매장보다 가게마다 다른 재고가 핵심. Animate는 신품, Mandarake·Surugaya는 중고와 절판에 강하다.',
    tip: '사고 싶은 IP와 예산 상한을 메모해야 90분 안에 끝난다.',
    backup: '시간이 45분뿐이면 Animate와 대형 중고점 한 곳만.',
    map: 'https://www.google.com/maps/search/?api=1&query=Nipponbashi+Ota+Road+Osaka', official: 'https://osaka-info.jp/en/spot/nippombashi-denden-town/'
  },
  luggage: {
    name: '짐 회수·난카이 난바', jp: '手荷物回収', area: 'NAMBA', category: '출국 준비', image: placeImage.airport,
    duration: '25~35분', hours: '보관처별', price: '보관별',
    short: '쇼핑을 멈추는 절대 마감선.',
    story: '마지막 날의 성공은 공항에 가는 결정을 늦추지 않는 데 있다. 14:30 무렵 쇼핑을 끊고 짐과 여권, QR 티켓을 다시 확인한다.',
    tip: '실제로 맡긴 보관처에서 짐 회수. 난카이 난바 n・e・s・t는 09:00~21:00, 현금 불가.',
    backup: '짐이 많으면 쇼핑 구간을 줄이고 택시로 난카이 난바 이동.',
    map: 'https://www.google.com/maps/search/?api=1&query=Nankai+Namba+Station', official: 'https://www.nankai.co.jp/en/community/natts/nest/'
  },
  rapitOut: {
    name: '라피트 → KIX', jp: 'なんば → 関西空港', area: 'DEPARTURE', category: '공항 이동', image: placeImage.airport,
    duration: '최단 34분', hours: '열차별', price: '¥1,410~',
    short: '18시 국제선은 16시 공항 도착을 목표로.',
    story: '여행의 마지막 한 시간은 계획의 여백이다. 열차 한 편을 놓쳐도 무너지지 않는 범위에서 좌석을 잡는다.',
    tip: '14:30~15:00 공항행 이동을 검토. T2·수하물이 많으면 30분 이상 앞당기고 항공사 수속 마감을 확인.',
    backup: '운행 이상 시 JR 또는 공항 리무진버스 현황 확인.',
    map: 'https://www.google.com/maps/dir/?api=1&origin=Nankai+Namba+Station&destination=Kansai+International+Airport&travelmode=transit', official: 'https://www.nankai.co.jp/en_railway/ticket/rapit'
  },
  shinsekai: {
    name: '신세카이·잔잔요코초', jp: '新世界・ジャンジャン横丁', area: 'RETRO SOUTH', category: '동네 산책', image: placeImage.retro,
    duration: '90~120분', hours: '점포별', price: '무료',
    short: '쓰텐카쿠 아래에서 복고와 생활이 섞이는 거리.',
    story: '1903년 박람회 이후 발전한 남쪽 유흥가. 관광 간판 사이로 장기·바둑 클럽과 오래된 정식집이 여전히 작동한다.',
    tip: '낮의 생활감과 해진 뒤 간판을 모두 보려면 16시 전후 진입.',
    backup: '혼잡하면 잔잔요코초를 먼저 보고 쓰텐카쿠를 바깥에서만.',
    map: 'https://www.google.com/maps/search/?api=1&query=Shinsekai+Osaka', official: 'https://osaka-info.jp/en/spot/shinsekai/'
  },
  tsutenkaku: {
    name: '쓰텐카쿠', jp: '通天閣', area: 'SHINSEKAI', category: '전망·놀이', image: placeImage.retro,
    duration: '60~90분', hours: '09:00~21:45', price: '¥1,500',
    short: '오사카 남쪽의 레트로 아이콘.',
    story: '에펠탑과 개선문을 조합했던 초대 타워의 기억을 잇는다. 전망대뿐 아니라 빌리켄과 과장된 기념품 문화까지 한 덩어리로 보는 장소다.',
    tip: '슬라이더와 Dive & Walk는 별도 요금·제한. 시간표에서는 기본 전망대만 계산.',
    backup: '전망은 하루카스 300으로, 거리는 신세카이 산책만 유지.',
    map: 'https://www.google.com/maps/search/?api=1&query=Tsutenkaku', official: 'https://www.tsutenkaku.co.jp/annai/'
  },
  daruma: {
    name: '쿠시카쓰 다루마', jp: '串かつだるま', area: 'SHINSEKAI', category: '쿠시카쓰', image: placeImage.food,
    duration: '60분', hours: '지점별', price: '¥1,500~',
    short: '신세카이의 튀김 문화를 가장 쉽게 경험.',
    story: '얇은 튀김옷과 여러 재료를 한두 꼬치씩 더하는 방식. 예전의 공용 소스통 문화는 위생 방식이 바뀌었으니 현장 안내를 따른다.',
    tip: '본점은 예약 불가. 예약이 필요하면 잔잔점 등 공식 지점 조건 확인.',
    backup: '줄이 길면 잔잔요코초의 다른 쿠시카쓰집.',
    map: 'https://www.google.com/maps/search/?api=1&query=Kushikatsu+Daruma+Shinsekai', official: 'https://www.kushikatu-daruma.com/location/'
  },
  kaiyukan: {
    name: '가이유칸', jp: '海遊館', area: 'OSAKA BAY', category: '수족관', image: placeImage.sky,
    duration: '2.5~3시간', hours: '날짜별 변동', price: '¥2,700~',
    short: '비·폭염에 강한 일요일 대체 모듈.',
    story: '태평양을 중심으로 여러 생태계를 나선형 동선으로 내려가며 보는 구조. 큰 수조를 여러 높이에서 반복해서 만나는 연출이 핵심이다.',
    tip: '날짜별 가격과 운영시간이 다르므로 e-ticket 화면을 확인. 오전 첫 타임이 편하다.',
    backup: '혼잡하면 오후 PARCO·LUCUA 쇼핑으로 전환.',
    map: 'https://www.google.com/maps/search/?api=1&query=Osaka+Aquarium+Kaiyukan', official: 'https://www.kaiyukan.com/info/hours/'
  },
  tempozan: {
    name: '덴포잔 항구 산책', jp: '天保山ハーバービレッジ', area: 'OSAKA BAY', category: '항구', image: placeImage.sky,
    duration: '45~60분', hours: '시설별', price: '선택별',
    short: '가이유칸 뒤 바다 바람과 대관람차.',
    story: '수족관 실내에서 나온 뒤 시야를 크게 여는 구간. 날씨가 좋으면 산타마리아 크루즈나 대관람차를 선택한다.',
    tip: '비·강풍이면 이 구간은 과감히 생략하고 시내로 복귀.',
    backup: '덴포잔 마켓플레이스 실내.',
    map: 'https://www.google.com/maps/search/?api=1&query=Tempozan+Harbor+Village', official: 'https://osaka-info.jp/en/spot/tempozan-harbor-village/'
  },
  usj: {
    name: '유니버설 스튜디오 재팬', jp: 'ユニバーサル・スタジオ・ジャパン', area: 'OSAKA BAY', category: '테마파크', image: placeImage.goods,
    duration: '종일', hours: '날짜별 변동', price: '날짜별',
    short: '일요일 전체를 교체하는 올인 모듈.',
    story: 'USJ를 기본 관광 일정 사이에 끼우면 양쪽이 모두 망가진다. 가기로 했다면 일요일을 통째로 주고, 앱·정리권·Express Pass를 하나의 운영 문제로 본다.',
    tip: '공식 앱, 날짜 지정권, Super Nintendo World 입장 방식을 전날 확인.',
    backup: '티켓이 없거나 혼잡 부담이 크면 가이유칸 베이 루트.',
    map: 'https://www.google.com/maps/search/?api=1&query=Universal+Studios+Japan', official: 'https://www.usj.co.jp/web/en/us'
  },
  pokemonDx: {
    name: '포켓몬센터 Osaka DX', jp: 'ポケモンセンターオーサカDX', area: 'SHINSAIBASHI', category: '굿즈', image: placeImage.goods,
    duration: '50~70분', hours: '10:00~20:00', price: '쇼핑별',
    short: '신사이바시에서 포켓몬을 집중할 때.',
    story: 'Daimaru 9F에서 포켓몬 카페와 붙어 있다. PARCO 팝컬처층과 길 하나를 사이에 둬 굿즈 우선 일정의 중심이 된다.',
    tip: '카페는 별도 예약. 쇼핑만이면 입장 대기·정리권 공지를 확인.',
    backup: 'LUCUA SOUTH 13F Pokémon Center OSAKA.',
    map: 'https://www.google.com/maps/search/?api=1&query=Pokemon+Center+Osaka+DX', official: 'https://shop.pokemon.co.jp/en/shop/pokemoncenter-osakadx/'
  },
  kidatake: {
    name: '기다타케 우동', jp: 'き田たけうどん', area: 'NAMBA', category: '우동', image: placeImage.food,
    duration: '50~60분', hours: '11:00~15:00 · 월/목 휴무', price: '¥1,000~',
    short: '굵고 탄력 있는 면을 점심 첫 회전에.',
    story: '면이 팔리면 일찍 닫을 수 있는 작은 인기점. 남쪽 동선을 유지하면서 ‘밀가루 도시’의 다른 면을 본다.',
    tip: '일요일 11시 오픈런용. 월요일 출국일에는 휴무라 사용할 수 없다.',
    backup: '대기가 길면 난바의 다른 우동집 또는 구로몬 소량 식사.',
    map: 'https://www.google.com/maps/search/?api=1&query=Kidatake+Udon+Osaka', official: 'https://tabelog.com/osaka/A2701/A270202/27103359/'
  },
  endo: {
    name: '엔도 스시 중앙시장점', jp: '中央市場 ゑんどう寿司', area: 'FUKUSHIMA', category: '아침 스시', image: placeImage.food,
    duration: '80~100분', hours: '06:00~14:00 · 일/공휴일 휴무', price: '¥2,000~',
    short: '월요일을 음식 하나에 집중하는 새벽 대체 루트.',
    story: '시장의 시간에 맞춰 아침부터 스시를 먹는 선택. 난바 오전 루프를 포기할 가치가 있는지 먼저 결정해야 한다.',
    tip: '월요일이 공휴일이면 휴무 가능. 출발 전 영업일을 반드시 확인.',
    backup: '마루후쿠 08시 아침 → 구로몬 시장.',
    map: 'https://www.google.com/maps/search/?api=1&query=Endo+Sushi+Osaka+Central+Market', official: 'https://www.endo-sushi.com/english.html'
  },
  rikuro: {
    name: '리쿠로 오지상 난바', jp: 'りくろーおじさんの店', area: 'NAMBA', category: '선물 간식', image: placeImage.food,
    duration: '20~25분', hours: '매장 09:00~20:00', price: '¥1,000 안팎',
    short: '갓 구운 치즈케이크를 숙소나 공항용으로.',
    story: '종이 울리며 나오는 가벼운 수플레식 치즈케이크. 따뜻할 때와 식은 뒤 식감이 달라 둘이 나눠 먹기 좋다.',
    tip: '월요일 오후에는 줄 때문에 공항 마감선을 넘기지 않도록 20분 상한.',
    backup: '공항에서 먹기보다 난바에서 구매 여부를 결정.',
    map: 'https://www.google.com/maps/search/?api=1&query=Rikuro+Ojisan+Namba', official: 'https://www.rikuro.co.jp/shoplist/'
  }
};

const routeMeta = {
  classic: { name: '첫 오사카', budget: 18400, note: '성곽의 아침, 우메다의 노을, 난바의 밤을 가장 안정적으로 잇는 첫 방문용 구성.' },
  food: { name: '먹방 골목', budget: 20500, note: '한 번에 많이 먹지 않고 철판·시장·우동·스시·킷사텐을 작은 장면으로 분할한다.' },
  goods: { name: '굿즈 헌팅', budget: 16000, note: 'PARCO와 LUCUA의 공식 신품, 덴덴타운의 중고·절판을 서로 다른 시간대에 공략한다.' },
  retro: { name: '레트로 밤', budget: 17500, note: '킷사텐, 신세카이, 쓰텐카쿠, 호젠지의 오래된 질감을 중심으로 남쪽에 집중한다.' },
  indoor: { name: '실내 피난', budget: 19800, note: '폭우·폭염에도 무너지지 않도록 가이유칸, 백화점, 지하상가와 카페를 연결한다.' },
  bay: { name: '가이유칸 베이', budget: 21000, note: '일요일 오전을 태평양 수조에 주고 항구의 바람과 시내의 저녁을 연결한다.' },
  usj: { name: 'USJ 올인', budget: 32000, note: '일요일 전체를 테마파크에 주고 토요일과 월요일에 오사카다운 장면을 압축한다.' }
};

const routes = {
  classic: {
    sat: [['15:00','kix'],['16:35','rapit'],['17:45','hotel'],['19:30','ajinoya'],['20:55','dotonbori'],['22:05','lilo',true]],
    sun: [['08:30','castle'],['11:05','harukoma'],['13:05','lucua'],['15:25','hanadako',true],['17:15','sky',false,true],['19:25','kiji']],
    mon: [['08:30','yasaka'],['09:20','kuromon'],['10:20','doguya',true],['11:05','denden'],['12:45','rikuro',true],['13:10','luggage'],['13:45','rapitOut',false,true]]
  },
  food: {
    sat: [['15:00','kix'],['16:35','rapit'],['17:45','hotel'],['19:15','fukutaro'],['20:45','wanaka',true],['21:20','dotonbori'],['22:10','marufuku',true]],
    sun: [['08:00','marufuku'],['09:15','castle'],['11:15','kidatake'],['13:00','kuromon',true],['15:20','shinsekai'],['17:10','daruma'],['19:05','dotonbori']],
    mon: [['07:00','endo'],['09:30','yasaka',true],['10:15','kuromon'],['11:20','doguya',true],['12:15','rikuro'],['13:00','luggage'],['13:40','rapitOut',false,true]]
  },
  goods: {
    sat: [['15:00','kix'],['16:35','rapit'],['17:45','hotel'],['18:35','parco'],['20:15','fukutaro'],['21:40','dotonbori']],
    sun: [['10:00','pokemonDx'],['11:20','parco'],['13:45','lucua'],['16:10','hanadako',true],['17:20','sky',false,true],['19:25','kiji']],
    mon: [['08:30','yasaka'],['09:20','doguya'],['10:10','kuromon',true],['11:00','denden'],['12:50','luggage'],['13:35','rapitOut',false,true]],
  },
  retro: {
    sat: [['15:00','kix'],['16:35','rapit'],['17:45','hotel'],['19:00','marufuku'],['20:00','dotonbori'],['21:15','fukutaro']],
    sun: [['08:00','marufuku'],['09:20','yasaka'],['11:00','kidatake'],['13:00','shinsekai'],['14:40','tsutenkaku'],['17:00','daruma'],['19:00','dotonbori']],
    mon: [['08:30','kuromon'],['09:35','doguya'],['10:20','denden'],['12:15','rikuro',true],['13:00','luggage'],['13:40','rapitOut',false,true]]
  },
  indoor: {
    sat: [['15:00','kix'],['16:35','rapit'],['17:45','hotel'],['19:00','fukutaro'],['20:30','marufuku'],['21:35','dotonbori',true]],
    sun: [['09:30','kaiyukan'],['13:00','tempozan',true],['15:10','parco'],['17:15','lucua'],['19:25','kiji']],
    mon: [['08:00','marufuku'],['09:20','kuromon'],['10:20','doguya'],['11:00','denden'],['12:50','luggage'],['13:35','rapitOut',false,true]]
  },
  bay: {
    sat: [['15:00','kix'],['16:35','rapit'],['17:45','hotel'],['19:30','ajinoya'],['20:55','dotonbori'],['22:05','lilo',true]],
    sun: [['09:00','kaiyukan'],['12:20','tempozan'],['15:00','parco'],['17:15','sky',false,true],['19:25','kiji']],
    mon: [['08:30','yasaka'],['09:20','kuromon'],['10:20','doguya'],['11:00','denden'],['12:50','luggage'],['13:35','rapitOut',false,true]]
  },
  usj: {
    sat: [['15:00','kix'],['16:35','rapit'],['17:45','hotel'],['19:15','fukutaro'],['20:45','dotonbori'],['22:00','marufuku',true]],
    sun: [['07:30','usj']],
    mon: [['08:00','yasaka'],['08:50','kuromon'],['09:50','doguya'],['10:30','denden'],['12:35','rikuro',true],['13:00','luggage'],['13:35','rapitOut',false,true]]
  }
};

const classicLateSunday = {
  9: [['09:00','castle'],['11:30','harukoma'],['13:30','lucua'],['15:50','hanadako',true],['17:15','sky',false,true],['19:25','kiji']],
  10: [['10:00','castle'],['12:30','harukoma'],['14:30','lucua'],['17:15','sky',false,true],['19:25','kiji']]
};

const heatSundayRoutes = {
  food: [['08:30','castle'],['11:05','harukoma'],['12:50','lucua'],['15:15','parco'],['17:35','hanadako',true],['18:20','shinsekai'],['19:50','daruma']],
  retro: [['08:00','marufuku'],['09:10','yasaka'],['10:00','parco'],['11:45','kidatake'],['14:00','tsutenkaku'],['18:00','shinsekai'],['19:30','daruma']],
  bay: [['09:00','kaiyukan'],['13:30','parco'],['15:45','lucua'],['17:30','sky',false,true],['19:35','kiji']]
};

const dayPresentation = {
  sat: { kicker: 'SATURDAY · 第一幕', title: '비행기에서 내려<br>네온 속으로', description: '입국 지연을 일정에 흡수하고, 호텔부터 도톤보리까지 한 방향으로만 걷는다.', image: placeImage.airport },
  sun: { kicker: 'SUNDAY · 第二幕', title: '아침 8시부터<br>도시를 길게 읽기', description: '가장 중요한 장면은 오전에, 쇼핑은 한낮에, 전망은 해가 낮아질 때 배치한다.', image: placeImage.castle },
  mon: { kicker: 'MONDAY · 終幕', title: '난바의 아침과<br>정확한 퇴장', description: '상점이 열기 전 신사를 보고 남쪽 상권을 훑은 뒤, 공항 마감선을 지킨다.', image: placeImage.yasaka }
};

function safeStorageGet(key) {
  try { return localStorage.getItem(key); } catch { return null; }
}

function safeStorageSet(key, value) {
  try { localStorage.setItem(key, value); return true; } catch { return false; }
}

function readLegacyArray(key) {
  try {
    const value = JSON.parse(safeStorageGet(key) || '[]');
    return Array.isArray(value) ? value.filter(item => typeof item === 'string') : [];
  } catch {
    return [];
  }
}

const state = {
  preset: 'classic', day: 'sat', pace: 'balanced', weather: 'clear', startTime: 8,
  saved: new Set(readLegacyArray('osakaSaved')),
  completed: new Set(readLegacyArray('osakaCompleted')),
  fieldDay: 'sat', fieldIndex: 0
};

const timeline = document.querySelector('#timeline');
const dayPanel = document.querySelector('#day-panel');
const placeDialog = document.querySelector('#place-dialog');
const savedDialog = document.querySelector('#saved-dialog');
const creditsDialog = document.querySelector('#credits-dialog');
const fieldDialog = document.querySelector('#field-dialog');

function minutesFromTime(value) {
  const [hour, minute] = value.split(':').map(Number);
  return hour * 60 + minute;
}

function formatTime(total) {
  const normalized = (total + 1440) % 1440;
  return `${String(Math.floor(normalized / 60)).padStart(2, '0')}:${String(normalized % 60).padStart(2, '0')}`;
}

function routeFor(day) {
  let sourcePreset = state.preset;
  if (state.weather === 'rain' && state.preset !== 'usj') sourcePreset = 'indoor';
  let route;

  if (day === 'sun' && state.weather === 'heat' && heatSundayRoutes[sourcePreset]) {
    route = heatSundayRoutes[sourcePreset].map(item => [...item]);
  } else if (day === 'sun' && sourcePreset === 'classic' && state.startTime > 8) {
    route = classicLateSunday[state.startTime].map(item => [...item]);
  } else {
    route = routes[sourcePreset][day].map(item => [...item]);
  }

  if (day === 'sun' && state.startTime !== 8 && ['food', 'retro'].includes(sourcePreset)) {
    const delta = (state.startTime - 8) * 60;
    route = route.map(([time, id, optional, fixed]) => [fixed ? time : formatTime(minutesFromTime(time) + delta), id, optional, fixed]);
  }

  if (state.pace === 'slow') route = route.filter(([, , optional]) => !optional);
  if (state.pace === 'full') {
    const ids = new Set(route.map(item => item[1]));
    if (day === 'sat' && !ids.has('wanaka')) route.splice(Math.max(2, route.length - 1), 0, ['21:15','wanaka',true]);
    if (day === 'sun' && sourcePreset === 'classic' && !ids.has('parco')) {
      const sunsetIndex = route.findIndex(([, id]) => id === 'sky');
      route.splice(sunsetIndex, 0, ['15:55','parco',true]);
    }
    if (day === 'mon' && !ids.has('rikuro')) route.splice(route.length - 2, 0, ['12:35','rikuro',true]);
  }
  return route;
}

function weatherLabel() {
  if (state.weather === 'rain') return '☂ 비 · 실내 대체';
  if (state.weather === 'heat') return '☀ 폭염 · 낮 실내';
  return '☀ 기본 동선';
}

function renderSummary() {
  const meta = routeMeta[state.preset];
  const allRoutes = ['sat','sun','mon'].flatMap(day => routeFor(day));
  const adjustment = state.pace === 'full' ? 2200 : state.pace === 'slow' ? -1600 : 0;
  document.querySelector('#route-name').textContent = meta.name;
  document.querySelector('#route-budget').textContent = `¥${(meta.budget + adjustment).toLocaleString('ko-KR')}`;
  document.querySelector('#route-load').textContent = `${Math.round(allRoutes.length / 3)}곳 · ${state.pace === 'full' ? '촘촘' : state.pace === 'slow' ? '여유' : '보통'}`;
  let weatherNote = '';
  if (state.weather === 'rain') {
    weatherNote = state.preset === 'usj'
      ? ' USJ 일정은 유지된다. 출발 전에 공식 앱의 운휴·쇼 시간을 확인하고, 우산보다 우비와 방수 주머니를 준비한다.'
      : ' 비 예보로 일요일을 가이유칸·실내 쇼핑 루트로 자동 교체했다.';
  } else if (state.weather === 'heat') {
    weatherNote = state.preset === 'usj'
      ? ' USJ 일정은 유지된다. 개장 전 입장, 실내 쇼·식사 휴식, 공식 앱의 대기시간을 이용해 11:00—16:00 노출을 줄인다.'
      : heatSundayRoutes[state.preset]
        ? ' 폭염 모드로 야외는 오전·18시 이후에 두고 한낮은 PARCO·LUCUA 등 실내로 자동 재배치했다.'
        : ' 폭염 운영 원칙: 야외 체류는 이른 시간과 해질 무렵에 짧게, 11:00—17:00에는 냉방 공간에서 긴 휴식을 둔다.';
  }
  document.querySelector('#route-note').textContent = meta.note + weatherNote;
}

function renderTimeline() {
  const presentation = dayPresentation[state.day];
  document.querySelector('#day-kicker').textContent = presentation.kicker;
  document.querySelector('#day-title').innerHTML = presentation.title;
  document.querySelector('#day-description').textContent = presentation.description;
  const visual = document.querySelector('#day-visual');
  visual.style.backgroundImage = `url("${presentation.image}")`;
  document.querySelector('#weather-chip').textContent = weatherLabel();

  timeline.replaceChildren();
  routeFor(state.day).forEach(([time, id, optional]) => {
    const place = places[id];
    const item = document.createElement('li');
    item.className = 'timeline-item';
    item.innerHTML = `
      <time class="timeline-time">${time}</time>
      <div class="timeline-main">
        <button type="button" data-place="${id}" aria-label="${place.name} 상세 보기">
          <strong>${place.name}</strong>
          <small>${place.jp} · ${place.area}</small>
          <p>${place.short}${optional ? ' · 선택' : ''}</p>
        </button>
      </div>
      <button class="save-place ${state.saved.has(id) ? 'is-saved' : ''}" type="button" data-save="${id}" aria-label="${place.name} ${state.saved.has(id) ? '저장 해제' : '저장'}">${state.saved.has(id) ? '♥' : '♡'}</button>`;
    timeline.append(item);
  });
  renderSummary();
  document.dispatchEvent(new CustomEvent('osaka:routechange', { detail: { day: state.day, preset: state.preset } }));
}

function openPlace(id) {
  const place = places[id];
  const content = document.querySelector('#place-dialog-content');
  content.innerHTML = `
    <div class="place-dialog-hero" style="background-image:linear-gradient(0deg,rgba(8,12,16,.74),transparent 65%),url('${place.image}')">
      <div><span>${place.area} · ${place.category}</span><h2>${place.name}</h2><small>${place.jp}</small></div>
    </div>
    <div class="place-dialog-body">
      <div class="place-facts">
        <div><span>머무는 시간</span><strong>${place.duration}</strong></div>
        <div><span>운영</span><strong>${place.hours}</strong></div>
        <div><span>예산</span><strong>${place.price}</strong></div>
      </div>
      <p>${place.story}</p>
      <h3>현장에서 이렇게</h3><p>${place.tip}</p>
      <h3>플랜 B</h3><p>${place.backup}</p>
      <div class="place-dialog-actions">
        <button type="button" data-dialog-map-focus="${id}">이 장소를 지도에서 보기</button>
        <a class="primary" href="${place.map}" target="_blank" rel="noopener">Google 지도 열기 ↗</a>
        <a href="${place.official}" target="_blank" rel="noopener">공식 정보 ↗</a>
        <button type="button" data-dialog-save="${id}">${state.saved.has(id) ? '♥ 저장됨' : '♡ 내 포켓에 저장'}</button>
      </div>
    </div>`;
  placeDialog.showModal();
}

function updateSavedCounts() {
  document.querySelector('#saved-count').textContent = state.saved.size;
  document.querySelector('#dock-saved-count').textContent = state.saved.size;
}

function persistSaved() {
  safeStorageSet('osakaSaved', JSON.stringify([...state.saved]));
  updateSavedCounts();
  window.OsakaExperience?.syncCoreState();
}

function toggleSaved(id) {
  if (state.saved.has(id)) state.saved.delete(id); else state.saved.add(id);
  persistSaved();
  renderTimeline();
  if (fieldDialog.open) renderFieldMode();
  showToast(state.saved.has(id) ? '내 포켓에 저장했습니다.' : '저장을 해제했습니다.');
}

function persistCompleted() {
  safeStorageSet('osakaCompleted', JSON.stringify([...state.completed]));
  window.OsakaExperience?.syncCoreState();
}

function renderFieldMode() {
  const route = routeFor(state.fieldDay);
  if (!route.length) return;
  state.fieldIndex = Math.max(0, Math.min(state.fieldIndex, route.length - 1));
  const [time, id] = route[state.fieldIndex];
  const place = places[id];
  const completedInRoute = route.filter(([, routeId]) => state.completed.has(routeId)).length;
  const percent = Math.round((completedInRoute / route.length) * 100);

  document.querySelectorAll('[data-field-day]').forEach(button => button.setAttribute('aria-selected', String(button.dataset.fieldDay === state.fieldDay)));
  document.querySelector('#field-progress-label').textContent = `${completedInRoute} / ${route.length} 완료`;
  document.querySelector('#field-progress-percent').textContent = `${percent}%`;
  const progress = document.querySelector('.field-progress');
  progress.setAttribute('aria-valuenow', String(percent));
  document.querySelector('#field-progress-bar').style.width = `${percent}%`;

  document.querySelector('#field-current').innerHTML = `
    <div class="field-current-image" role="img" aria-label="${place.name} 분위기 이미지" style="background-image:linear-gradient(0deg,rgba(10,14,18,.18),transparent),url('${place.image}')"></div>
    <div class="field-current-copy">
      <span>${time} · ${place.area} · ${state.fieldIndex + 1}/${route.length}</span>
      <h3>${place.name}</h3><small>${place.jp}</small>
      <p>${place.short}</p>
      <div class="field-now-tip"><strong>지금 기억할 것</strong><p>${place.tip}</p></div>
      <div class="field-quick-actions">
        <a href="${place.map}" target="_blank" rel="noopener">지도 ↗</a>
        <button type="button" data-field-detail="${id}">설명</button>
        <button type="button" data-field-save="${id}">${state.saved.has(id) ? '♥ 저장됨' : '♡ 저장'}</button>
      </div>
    </div>`;

  const doneButton = document.querySelector('#field-done');
  const isComplete = state.completed.has(id);
  doneButton.classList.toggle('is-complete', isComplete);
  doneButton.textContent = isComplete ? '완료 취소' : '이 장소 완료';
  document.querySelector('#field-prev').disabled = state.fieldIndex === 0;
  document.querySelector('#field-next').disabled = state.fieldIndex === route.length - 1;

  const mini = document.querySelector('#field-mini-route');
  mini.replaceChildren();
  route.forEach(([routeTime, routeId], index) => {
    const item = document.createElement('li');
    if (index === state.fieldIndex) item.classList.add('is-current');
    if (state.completed.has(routeId)) item.classList.add('is-complete');
    item.innerHTML = `<time>${routeTime}</time><button type="button" data-field-index="${index}">${places[routeId].name}</button><span>${state.completed.has(routeId) ? '✓' : index === state.fieldIndex ? '현재' : ''}</span>`;
    mini.append(item);
  });
}

function openFieldMode(day = state.day) {
  state.fieldDay = day;
  const route = routeFor(day);
  const nextIndex = route.findIndex(([, id]) => !state.completed.has(id));
  state.fieldIndex = nextIndex === -1 ? Math.max(0, route.length - 1) : nextIndex;
  renderFieldMode();
  fieldDialog.showModal();
  fieldDialog.scrollTop = 0;
}

function renderSavedList() {
  const target = document.querySelector('#saved-list');
  target.replaceChildren();
  if (!state.saved.size) {
    target.innerHTML = '<p>아직 저장한 장소가 없습니다. 일정의 ♡를 눌러 모아보세요.</p>';
    return;
  }
  state.saved.forEach(id => {
    const row = document.createElement('div');
    row.className = 'saved-row';
    row.innerHTML = `<div><strong>${places[id].name}</strong><br><small>${places[id].area} · ${places[id].category}</small></div><button type="button" data-remove="${id}">삭제</button>`;
    target.append(row);
  });
}

function showToast(message) {
  const toast = document.querySelector('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove('show'), 1800);
}

document.querySelector('#route-controls').addEventListener('change', event => {
  if (event.target.name === 'preset') state.preset = event.target.value;
  if (event.target.id === 'pace') state.pace = event.target.value;
  if (event.target.id === 'weather') state.weather = event.target.value;
  if (event.target.id === 'start-time') state.startTime = Number(event.target.value);
  renderTimeline();
  if (fieldDialog.open) renderFieldMode();
});

document.querySelector('.day-tabs').addEventListener('click', event => {
  const button = event.target.closest('[data-day]');
  if (!button) return;
  state.day = button.dataset.day;
  document.querySelectorAll('[data-day]').forEach(tab => {
    const selected = tab === button;
    tab.setAttribute('aria-selected', String(selected));
    if (selected) dayPanel.setAttribute('aria-labelledby', tab.id);
  });
  renderTimeline();
});

timeline.addEventListener('click', event => {
  const placeButton = event.target.closest('[data-place]');
  const saveButton = event.target.closest('[data-save]');
  if (placeButton) openPlace(placeButton.dataset.place);
  if (saveButton) toggleSaved(saveButton.dataset.save);
});

document.querySelector('#random-preset').addEventListener('click', () => {
  const keys = Object.keys(routeMeta);
  const next = keys[Math.floor(Math.random() * keys.length)];
  state.preset = next;
  const radio = document.querySelector(`input[name="preset"][value="${next}"]`);
  radio.checked = true;
  renderTimeline();
  document.querySelector('#planner').scrollIntoView({ behavior: 'smooth' });
  showToast(`${routeMeta[next].name} 루트를 뽑았습니다.`);
});

document.querySelectorAll('.district-reveal').forEach(button => {
  button.addEventListener('click', () => {
    const secret = button.closest('.district-card').querySelector('.district-secret');
    secret.hidden = false;
    secret.querySelector('.district-hide').focus();
  });
});

document.querySelectorAll('.district-hide').forEach(button => {
  const closeSecret = () => {
    const card = button.closest('.district-card');
    card.querySelector('.district-secret').hidden = true;
    card.querySelector('.district-reveal').focus();
  };
  button.addEventListener('click', closeSecret);
  button.closest('.district-secret').addEventListener('keydown', event => {
    if (event.key === 'Escape') closeSecret();
  });
});

const clusterDetails = {
  umeda: { label: 'NORTH · 약 18~25분', title: '우메다', copy: '굿즈·쇼핑을 한낮에 처리하고 우메다 스카이빌딩 일몰로 마무리하는 수직 도시.', map: 'https://www.google.com/maps/dir/?api=1&origin=Nankai+Namba+Station&destination=Osaka+Station&travelmode=transit' },
  castle: { label: 'NORTHEAST · 약 25~35분', title: '오사카성', copy: '아침 해자와 09시 천수각을 본 뒤 덴마를 거쳐 우메다로 연결하면 되돌아가지 않는다.', map: 'https://www.google.com/maps/dir/?api=1&origin=Nankai+Namba+Station&destination=Osaka+Castle&travelmode=transit' },
  minami: { label: 'BASE · 도보 0~20분', title: '난바·신사이바시', copy: '도톤보리, PARCO, 구로몬, 도구야스지와 덴덴타운이 이어지는 여행의 생활권.', map: 'https://www.google.com/maps/dir/?api=1&origin=Nankai+Namba+Station&destination=Shinsaibashi+PARCO&travelmode=walking' },
  retro: { label: 'SOUTH · 약 10~18분', title: '신세카이', copy: '쓰텐카쿠와 쿠시카쓰를 남쪽 하루에 묶는다. 우메다와 같은 날 넣지 않는 편이 장면이 선명하다.', map: 'https://www.google.com/maps/dir/?api=1&origin=Nankai+Namba+Station&destination=Tsutenkaku&travelmode=transit' },
  bay: { label: 'WEST · 약 35~45분', title: '오사카 베이', copy: '가이유칸은 왕복 이동까지 포함한 반나절 모듈. 일요일 오전 블록을 통째로 교체해야 한다.', map: 'https://www.google.com/maps/dir/?api=1&origin=Nankai+Namba+Station&destination=Osaka+Aquarium+Kaiyukan&travelmode=transit' }
};

document.querySelector('.compass-map').addEventListener('click', event => {
  const button = event.target.closest('[data-cluster]');
  if (!button) return;
  document.querySelectorAll('[data-cluster]').forEach(peer => {
    const selected = peer === button;
    peer.classList.toggle('is-active', selected);
    peer.setAttribute('aria-pressed', String(selected));
  });
  const detail = clusterDetails[button.dataset.cluster];
  document.querySelector('#compass-detail').innerHTML = `<span>${detail.label}</span><h3>${detail.title}</h3><p>${detail.copy}</p><a href="${detail.map}" target="_blank" rel="noopener">난바에서 길찾기 ↗</a>`;
});

const foodDetails = {
  okonomiyaki: ['味乃家 / 福太郎', '예약 확정이 필요하면 맛노야 공식 FastPass, 비행 지연 가능성이 크면 예약 없는 후쿠타로를 쓴다.'],
  takoyaki: ['わなか / はなだこ', '첫날 와나카 또는 우메다 하나다코 중 한 번만. 6알을 나눠 먹어 다음 식사 여백을 지킨다.'],
  kushikatsu: ['串かつだるま', '신세카이 루트에서만 넣는다. 꼬치 수를 늘리기 쉬우니 처음에는 5~7개로 시작한다.'],
  kissaten: ['丸福珈琲店 / LiLo', '마루후쿠는 레트로하고 진하며, LiLo는 커피 선택이 섬세하다. 카페 45분이 폭염과 피로를 막는다.']
};

document.querySelector('#food-passport').addEventListener('click', event => {
  const button = event.target.closest('[data-food]');
  if (!button) return;
  document.querySelectorAll('[data-food]').forEach(peer => peer.setAttribute('aria-pressed', String(peer === button)));
  const [title, copy] = foodDetails[button.dataset.food];
  document.querySelector('#passport-detail').innerHTML = `<strong>${title}</strong><p>${copy}</p>`;
});

const goodsDetails = {
  compact: { label: 'UMEDA · 10:00—20:00', title: 'LUCUA SOUTH 13F', copy: 'Nintendo OSAKA, Pokémon Center, ONE PIECE, Tomica/Plarail, Capcom을 한 층에서 처리한다. 일요일 오후 2시간을 쓰는 가장 효율적인 선택.', link: 'https://www.lucua.jp/floormap/southshop.html' },
  hunt: { label: 'NIPPONBASHI · 11:00부터', title: '덴덴타운·오타로드', copy: 'Animate는 신품, Mandarake와 Surugaya는 중고·절판을 본다. 원하는 IP와 예산 상한을 정하고 60~90분 타이머를 건다.', link: 'https://osaka-info.jp/en/spot/nippombashi-denden-town/' },
  local: { label: 'NAMBA · 점포별 운영', title: '센니치마에 도구야스지', copy: '칼, 그릇, 다코야키 팬, 천, 식품 샘플처럼 오사카의 식문화를 집으로 가져오는 구간. 칼은 위탁수하물 규정을 확인한다.', link: 'https://www.doguyasuji.or.jp/en/' }
};

document.querySelector('.goods-choice').addEventListener('click', event => {
  const button = event.target.closest('[data-goods]');
  if (!button) return;
  document.querySelectorAll('[data-goods]').forEach(peer => peer.setAttribute('aria-selected', String(peer === button)));
  const result = goodsDetails[button.dataset.goods];
  document.querySelector('#goods-result').innerHTML = `<span>${result.label}</span><h3>${result.title}</h3><p>${result.copy}</p><a href="${result.link}" target="_blank" rel="noopener">공식 안내 ↗</a>`;
});

function calculateDeparture() {
  const flight = minutesFromTime(document.querySelector('#flight-time').value || '18:00');
  const terminalExtra = document.querySelector('#terminal').value === '2' ? 25 : 0;
  const checked = document.querySelector('#checked-bag').checked;
  const airportLead = checked ? 150 : 120;
  const travelAndStation = 60;
  const latest = flight - airportLead - terminalExtra - travelAndStation;
  const earliest = latest - 25;
  const airportArrival = flight - airportLead;
  document.querySelector('#departure-result').innerHTML = `<span>난카이 난바 개찰 목표</span><strong>${formatTime(earliest)}—${formatTime(latest)}</strong><p>KIX에는 약 ${formatTime(airportArrival)} 도착. ${terminalExtra ? 'T2 셔틀 25분을 포함했다.' : '정확한 열차와 항공사 카운터를 전날 재확인.'}</p>`;
  window.OsakaExperience?.augmentDeparture({ earliest, latest, airportArrival, terminalExtra, checked });
}

['flight-time','terminal','checked-bag'].forEach(id => document.querySelector(`#${id}`).addEventListener('change', calculateDeparture));

document.querySelectorAll('.phrase').forEach(button => {
  button.addEventListener('click', async () => {
    const text = button.dataset.copy;
    try {
      if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(text);
      else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.append(textarea);
        textarea.select();
        document.execCommand('copy');
        textarea.remove();
      }
      document.querySelector('#copy-status').textContent = `복사됨 · ${text}`;
    } catch {
      document.querySelector('#copy-status').textContent = '브라우저에서 복사가 막혔습니다. 문장을 길게 눌러 복사하세요.';
    }
  });
});

document.querySelectorAll('[data-check]').forEach(input => {
  const key = `osakaCheck:${input.dataset.check}`;
  input.checked = safeStorageGet(key) === 'true';
  input.addEventListener('change', () => safeStorageSet(key, String(input.checked)));
});

document.querySelector('#saved-button').addEventListener('click', () => {
  renderSavedList();
  savedDialog.showModal();
});
document.querySelector('#credits-button').addEventListener('click', () => creditsDialog.showModal());
document.querySelector('#field-mode-launch').addEventListener('click', () => openFieldMode());

document.querySelector('.field-day-switch').addEventListener('click', event => {
  const button = event.target.closest('[data-field-day]');
  if (!button) return;
  state.fieldDay = button.dataset.fieldDay;
  const route = routeFor(state.fieldDay);
  const nextIndex = route.findIndex(([, id]) => !state.completed.has(id));
  state.fieldIndex = nextIndex === -1 ? Math.max(0, route.length - 1) : nextIndex;
  renderFieldMode();
});

document.querySelector('#field-prev').addEventListener('click', () => {
  state.fieldIndex -= 1;
  renderFieldMode();
});

document.querySelector('#field-next').addEventListener('click', () => {
  state.fieldIndex += 1;
  renderFieldMode();
});

document.querySelector('#field-done').addEventListener('click', () => {
  const route = routeFor(state.fieldDay);
  const id = route[state.fieldIndex][1];
  if (state.completed.has(id)) {
    state.completed.delete(id);
    showToast('완료 표시를 취소했습니다.');
  } else {
    state.completed.add(id);
    if (state.fieldIndex < route.length - 1) state.fieldIndex += 1;
    showToast('완료. 다음 장소를 보여줍니다.');
  }
  persistCompleted();
  renderFieldMode();
});

document.querySelector('#field-current').addEventListener('click', event => {
  const detailButton = event.target.closest('[data-field-detail]');
  const saveButton = event.target.closest('[data-field-save]');
  if (detailButton) {
    fieldDialog.close();
    openPlace(detailButton.dataset.fieldDetail);
  }
  if (saveButton) toggleSaved(saveButton.dataset.fieldSave);
});

document.querySelector('#field-mini-route').addEventListener('click', event => {
  const button = event.target.closest('[data-field-index]');
  if (!button) return;
  state.fieldIndex = Number(button.dataset.fieldIndex);
  renderFieldMode();
});

document.querySelector('.mobile-dock').addEventListener('click', event => {
  const button = event.target.closest('[data-dock]');
  if (!button) return;
  if (button.dataset.dock === 'field') openFieldMode();
  if (button.dataset.dock === 'plan') document.querySelector('#planner').scrollIntoView({ behavior: 'smooth' });
  if (button.dataset.dock === 'saved') {
    renderSavedList();
    savedDialog.showModal();
  }
  if (button.dataset.dock === 'depart') document.querySelector('#field-kit').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('#saved-list').addEventListener('click', event => {
  const button = event.target.closest('[data-remove]');
  if (!button) return;
  state.saved.delete(button.dataset.remove);
  persistSaved();
  renderSavedList();
  renderTimeline();
  if (fieldDialog.open) renderFieldMode();
});

placeDialog.addEventListener('click', event => {
  const mapButton = event.target.closest('[data-dialog-map-focus]');
  if (mapButton) {
    placeDialog.close();
    window.OsakaExperience?.focusPlace(mapButton.dataset.dialogMapFocus);
    return;
  }
  const button = event.target.closest('[data-dialog-save]');
  if (!button) return;
  const id = button.dataset.dialogSave;
  toggleSaved(id);
  button.textContent = state.saved.has(id) ? '♥ 저장됨' : '♡ 내 포켓에 저장';
});

document.querySelectorAll('dialog .dialog-close').forEach(button => {
  button.addEventListener('click', () => button.closest('dialog').close());
});

document.querySelectorAll('dialog').forEach(dialog => {
  dialog.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
    if (outside) dialog.close();
  });
});

window.OsakaGuideCore = { places, routeFor, routeMeta, routes, state, openPlace, renderTimeline, calculateDeparture, formatTime, minutesFromTime };
updateSavedCounts();
calculateDeparture();
renderTimeline();
