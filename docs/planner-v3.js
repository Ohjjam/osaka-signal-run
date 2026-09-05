(function () {
  'use strict';

  const CORE = window.OsakaGuideCore;
  const DATA = window.OSAKA_EXPERIENCE_DATA;
  const EXPANSION = window.OSAKA_EXPANSION_V4 || { hotels: [], hotelOverrides: {}, restaurants: [], restaurantOverrides: {}, imageMap: {}, photoSources: {} };
  const V5 = window.OSAKA_EXPANSION_V5 || { attractions: [], attractionOverrides: {}, goods: [], goodsOverrides: {}, nightlife: [], nightlifeOverrides: {}, restaurantExactPhotos: {} };
  const CHANCE = window.OSAKA_CHANCE_EXPANSION_V7 || { goods: [], nightlife: [], goodsGroups: {}, nightlifeGroups: {}, policies: {} };
  const LIVE_HOTELS = window.OSAKA_HOTELS_LIVE_V6 || { hotels: [] };
  const PHOTO_MANIFEST = window.OSAKA_PHOTO_MANIFEST_V13 || {};
  const VNEXT = window.OSAKA_VNEXT_DATA || { events: [], operationOverrides: {} };
  const STORAGE_KEY = 'osakaPlannerV3';
  const PRIVATE_BOOKING_KEY = 'osakaPrivateBookingV19';
  const PRIVATE_BOOKING_DB = 'osaka-private-booking-v19';
  const SHARED_STATE_URL = 'api/shared-state';
  const SHARED_EVENTS_URL = 'api/events';
  const DAYS = ['sat', 'sun', 'mon'];
  const dayNames = { sat: '토요일', sun: '일요일', mon: '월요일' };
  const deadlines = { sat: 23 * 60, sun: 22 * 60, mon: 13 * 60 };
  const categoryLabels = { attraction: '관광', food: '음식', goods: '쇼핑', nightlife: '밤' };

  const foodGroups = { ...(EXPANSION.foodGroups || { all: '전체', rice: '밥·덮밥', snack: '길거리·간식', noodle: '우동·소바·면', ramen: '라멘·츠케멘', alcohol: '술·이자카야', drink: '커피·차·주스' }), custom: '직접 추가' };
  const legacyRestaurants = [
    { id: 'ajinoya', name: '맛노야 본점', jp: '味乃家 本店', area: 'namba', areaLabel: '난바', group: 'unique', genreLabel: '오코노미야키', rating: 3.59, reviews: 1740, menu: '맛노야 믹스 · 3색 미니', price: 1480, duration: 75, image: 'assets/osaka-food.png', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27001439/', menuUrl: 'https://tabelog.com/osaka/A2701/A270202/27001439/dtlmenu/', note: '직원이 철판에서 구워주는 본점.' },
    { id: 'fukutaro', name: '후쿠타로 본점', jp: '福太郎 本店', area: 'namba', areaLabel: '난바', group: 'unique', genreLabel: '네기야키', rating: 3.72, reviews: 2696, menu: '네기야키 · 돼지고기 오코노미야키', price: 1500, duration: 75, image: 'assets/dotonbori-night.jpg', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27002665/', menuUrl: 'https://2951.jp/en/menu.html', note: '늦은 저녁에도 쓰기 좋은 철판집.' },
    { id: 'wanaka', name: '와나카 센니치마에 본점', jp: 'たこ焼道楽 わなか', area: 'namba', areaLabel: '난바', group: 'snack', genreLabel: '다코야키', rating: 3.49, reviews: 3137, menu: '다코야키 8알 · 소스·소금·간장', price: 750, duration: 30, image: 'assets/dotonbori-night.jpg', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27002320/', menuUrl: 'https://tabelog.com/osaka/A2701/A270202/27002320/dtlmenu/', note: '난바역에서 가까운 빠른 간식.' },
    { id: 'marufuku', name: '마루후쿠 커피 본점', jp: '丸福珈琲店 千日前本店', area: 'namba', areaLabel: '난바', group: 'drink', genreLabel: '킷사텐', rating: 3.42, reviews: 843, menu: '진한 커피 · 동판 핫케이크', price: 1200, duration: 55, image: 'assets/osaka-food.png', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27001450/', menuUrl: 'https://marufukucoffeeten.com/menu/', note: '1934년 시작한 레트로 커피 본점.' },
    { id: 'harukoma', name: '하루코마 본점', jp: '春駒', area: 'tenma', areaLabel: '텐마', group: 'rice', genreLabel: '스시', rating: 3.58, reviews: 1788, menu: '스시 · 해산물', price: 2500, duration: 80, image: 'assets/osaka-food.png', tabelog: 'https://tabelog.com/osaka/A2701/A270103/27002205/', menuUrl: 'https://tabelog.com/osaka/A2701/A270103/27002205/dtlmenu/', note: '텐마 시장과 함께 보기 좋은 스시집.' },
    { id: 'hanadako', name: '하나다코', jp: 'はなだこ', area: 'umeda', areaLabel: '우메다', group: 'snack', genreLabel: '다코야키', rating: 3.65, reviews: 2968, menu: '네기마요 다코야키', price: 850, duration: 35, image: 'assets/umeda-sky.jpg', tabelog: 'https://tabelog.com/osaka/A2701/A270101/27012248/', menuUrl: 'https://goumeda.com/shop/hanadako/', note: '우메다역에서 먹는 파 듬뿍 다코야키.' },
    { id: 'kiji', name: '키지 스카이빌딩점', jp: 'お好み焼 きじ', area: 'umeda', areaLabel: '우메다', group: 'unique', genreLabel: '모던야키', rating: 3.69, reviews: 1071, menu: '모던야키 · 스지타마', price: 1500, duration: 75, image: 'assets/umeda-sky.jpg', tabelog: 'https://tabelog.com/osaka/A2701/A270101/27000322/', menuUrl: 'https://tabelog.com/osaka/A2701/A270101/27000322/dtlmenu/', note: '스카이빌딩과 한 번에 묶는 철판집.' },
    { id: 'kidatake', name: '키다타케 우동', jp: 'き田たけうどん', area: 'namba', areaLabel: '난바', group: 'noodle', genreLabel: '우동', rating: 3.69, reviews: 1113, menu: '붓카케 우동 · 토리텐', price: 1000, duration: 50, image: 'assets/osaka-food.png', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27103359/', menuUrl: 'https://tabelog.com/osaka/A2701/A270202/27103359/dtlmenu/', note: '점심에 맞는 쫄깃한 우동.' },
    { id: 'rikuro', name: '리쿠로 오지상 난바 본점', jp: 'りくろーおじさんの店', area: 'namba', areaLabel: '난바', group: 'snack', genreLabel: '치즈케이크', rating: 3.51, reviews: 1452, menu: '갓 구운 치즈케이크', price: 1100, duration: 30, image: 'assets/osaka-food.png', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27002336/', menuUrl: 'https://www.rikuro.co.jp/product/', note: '난바역 앞 간식과 선물.' },
    { id: 'jiyuken-v3', name: '지유켄 난바 본점', jp: '自由軒 難波本店', coords: [34.6657,135.5015], area: 'namba', areaLabel: '난바', group: 'rice', genreLabel: '명물 카레', rating: 3.49, reviews: 2198, menu: '명물 카레 · 생달걀', price: 1000, duration: 50, image: 'assets/osaka-food.png', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27001310/', menuUrl: 'https://tabelog.com/osaka/A2701/A270202/27001310/dtlmenu/', note: '밥과 카레를 비벼 내는 오래된 난바식 카레.' },
    { id: 'hokkyokusei-v3', name: '홋쿄쿠세이 신사이바시 본점', jp: '北極星 心斎橋本店', coords: [34.6707,135.4982], area: 'shinsaibashi', areaLabel: '신사이바시', group: 'rice', genreLabel: '오므라이스', rating: 3.43, reviews: 1397, menu: '치킨 오므라이스 · 계절 오므라이스', price: 1500, duration: 60, image: 'assets/osaka-food.png', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27001274/', menuUrl: 'https://tabelog.com/osaka/A2701/A270202/27001274/dtlmenu/', note: '다다미 공간에서 먹는 1925년 오므라이스.' },
    { id: 'horai551-v3', name: '551 호라이 본점', jp: '551蓬莱 本店', coords: [34.6660,135.5013], area: 'namba', areaLabel: '난바', group: 'snack', genreLabel: '돼지고기 만두', rating: 3.47, reviews: 1839, menu: '부타만 · 슈마이 · 중화요리', price: 1200, duration: 35, image: 'assets/osaka-food.png', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27001312/', menuUrl: 'https://tabelog.com/osaka/A2701/A270202/27001312/dtlmenu/', note: '난바에서 바로 먹는 따뜻한 부타만.' },
    { id: 'imai-v3', name: '도톤보리 이마이 본점', jp: '道頓堀 今井 本店', coords: [34.6686,135.5024], area: 'namba', areaLabel: '도톤보리', group: 'noodle', genreLabel: '기쓰네 우동', rating: 3.58, reviews: 2354, menu: '기쓰네 우동 · 우동스키 · 오야코동', price: 1500, duration: 60, image: 'assets/dotonbori-night.jpg', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27001289/', menuUrl: 'https://tabelog.com/osaka/A2701/A270202/27001289/dtlmenu/', note: '달큰한 유부와 맑은 오사카식 다시.' },
    { id: 'moeyo-v3', name: '모에요 멘스케', jp: '燃えよ麺助', coords: [34.6964,135.4865], area: 'fukushima', areaLabel: '후쿠시마', group: 'ramen', genreLabel: '오리 라멘', rating: 3.76, reviews: 3238, menu: '기슈 오리소바 · 조개 다시', price: 1200, duration: 70, image: 'assets/osaka-food.png', tabelog: 'https://tabelog.com/osaka/A2701/A270108/27091454/', menuUrl: 'https://tabelog.com/osaka/A2701/A270108/27091454/dtlmenu/', note: '후쿠시마의 오리·조개 국물 라멘.' },
    { id: 'mugen-v3', name: '주카소바 무겐', jp: '中華そば 無限', coords: [34.6959,135.4734], area: 'fukushima', areaLabel: '노다·에비에', group: 'ramen', genreLabel: '중화소바', rating: 3.75, reviews: 1738, menu: '특선 중화소바 · 소금 라멘', price: 1300, duration: 65, image: 'assets/osaka-food.png', tabelog: 'https://tabelog.com/osaka/A2701/A270108/27053626/', menuUrl: 'https://tabelog.com/osaka/A2701/A270108/27053626/dtlmenu/', note: '닭과 생선 다시가 선명한 중화소바.' },
    { id: 'chitose-v3', name: '치토세 본점', jp: '千とせ 本店', coords: [34.6631,135.5038], area: 'namba', areaLabel: '난바', group: 'unique', genreLabel: '니쿠스이', rating: 3.72, reviews: 2248, menu: '니쿠스이 · 달걀밥', price: 1000, duration: 45, image: 'assets/osaka-food.png', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27002763/', menuUrl: 'https://tabelog.com/osaka/A2701/A270202/27002763/dtlmenu/', note: '면 없이 고기와 달걀을 넣은 오사카식 국물.' },
    { id: 'yamachan-v3', name: '야마찬 본점', jp: 'やまちゃん 本店', coords: [34.6458,135.5142], area: 'abeno', areaLabel: '아베노', group: 'snack', genreLabel: '다코야키', rating: 3.50, reviews: 1407, menu: '다코야키 8알 · 맨맛·소스·소금', price: 720, duration: 30, image: 'assets/shinsekai.jpg', tabelog: 'https://tabelog.com/osaka/A2701/A270203/27002750/', menuUrl: 'https://tabelog.com/osaka/A2701/A270203/27002750/dtlmenu/', note: '육수 맛이 강해 소스 없이도 먹는 다코야키.' },
    { id: 'daruma-v3', name: '쿠시카쓰 다루마 신세카이 총본점', jp: '元祖串かつ だるま', coords: [34.6522,135.5062], area: 'shinsekai', areaLabel: '신세카이', group: 'unique', genreLabel: '쿠시카쓰', rating: 3.45, reviews: 1226, menu: '쿠시카쓰 세트 · 도테야키', price: 2700, duration: 70, image: 'assets/shinsekai.jpg', tabelog: 'https://tabelog.com/osaka/A2701/A270206/27004260/', menuUrl: 'https://tabelog.com/osaka/A2701/A270206/27004260/dtlmenu/', note: '신세카이에서 먹는 원조 계열 쿠시카쓰.' },
    { id: 'aizuya-v3', name: '아이즈야 본점', jp: '会津屋 本店', coords: [34.6255,135.4907], area: 'south', areaLabel: '타마데', group: 'snack', genreLabel: '원조 다코야키', rating: 3.39, reviews: 658, menu: '원조 다코야키 · 라디오야키', price: 900, duration: 40, image: 'assets/osaka-food.png', tabelog: 'https://tabelog.com/osaka/A2701/A270406/27001123/', menuUrl: 'https://tabelog.com/osaka/A2701/A270406/27001123/dtlmenu/', note: '소스를 바르지 않는 작은 원조식 다코야키.' },
    { id: 'lilo-v3', name: 'LiLo Coffee Roasters', jp: 'リロ コーヒー ロースターズ', coords: [34.6737,135.4976], area: 'shinsaibashi', areaLabel: '신사이바시', group: 'drink', genreLabel: '스페셜티 커피', rating: 3.38, reviews: 135, menu: '핸드드립 · 에스프레소 · 원두', price: 1000, duration: 45, image: 'assets/osaka-food.png', tabelog: 'https://tabelog.com/osaka/A2701/A270201/27080775/', menuUrl: 'https://tabelog.com/osaka/A2701/A270201/27080775/dtlmenu/', note: '원두를 골라 마시는 작은 로스터리.' },
    { id: 'mixjuice-v3', name: '우메다 믹스주스 본점', jp: '梅田 ミックスジュース 本店', coords: [34.6993,135.4989], area: 'umeda', areaLabel: '우메다', group: 'drink', genreLabel: '믹스주스', rating: 3.76, reviews: 2450, menu: '믹스주스 · 계절 과일주스', price: 500, duration: 15, image: 'assets/umeda-sky.jpg', tabelog: 'https://tabelog.com/osaka/A2701/A270101/27013772/', menuUrl: 'https://tabelog.com/osaka/A2701/A270101/27013772/dtlmenu/', note: '한신 우메다역 앞에서 빠르게 한 잔.' },
    { id: 'standajito-v3', name: '스탠드 아지토', jp: 'スタンドあじと', coords: [34.6638,135.5020], area: 'namba', areaLabel: '난바', group: 'alcohol', genreLabel: '스탠딩 바', rating: 3.44, reviews: 318, menu: '와인 · 일본주 · 작은 요리', price: 1800, duration: 60, image: 'assets/dotonbori-night.jpg', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27073646/', menuUrl: 'https://tabelog.com/osaka/A2701/A270202/27073646/dtlmenu/', note: '혼자 한 잔 하기 쉬운 난바 스탠딩 바.' },
    { id: 'unagidani-v3', name: '니혼슈 우나기다니', jp: '日本酒うなぎだに', coords: [34.6754,135.5000], area: 'shinsaibashi', areaLabel: '신사이바시', group: 'alcohol', genreLabel: '사케 바', rating: 3.45, reviews: 349, menu: '일본주 · 스시 · 장어', price: 3500, duration: 80, image: 'assets/dotonbori-night.jpg', tabelog: 'https://tabelog.com/osaka/A2701/A270201/27085143/', menuUrl: 'https://tabelog.com/osaka/A2701/A270201/27085143/dtlmenu/', note: '여러 지역 사케를 비교하기 좋은 곳.' },
    { id: 'craftbeer-v3', name: 'CRAFT BEER BASE BRANCH', jp: 'クラフト ビア ベース ブランチ', coords: [34.6997,135.4956], area: 'umeda', areaLabel: '우메다', group: 'alcohol', genreLabel: '크래프트 맥주', rating: 3.48, reviews: 129, menu: '오사카 양조 맥주 · 탭 비어', price: 1800, duration: 60, image: 'assets/umeda-sky.jpg', tabelog: 'https://tabelog.com/osaka/A2701/A270101/27125691/', menuUrl: 'https://tabelog.com/osaka/A2701/A270101/27125691/dtlmenu/', note: '한신백화점 지하에서 가볍게 마시는 맥주.' },
    { id: 'kuromonsanpei-v3', name: '구로몬 산페이', jp: '黒門三平', coords: [34.6652,135.5065], area: 'nipponbashi', areaLabel: '구로몬시장', group: 'rice', genreLabel: '해산물 덮밥', rating: 3.13, reviews: 52, menu: '해산물 덮밥 · 스시 · 구이', price: 2000, duration: 60, image: 'assets/osaka-food.png', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27050275/', menuUrl: 'https://tabelog.com/osaka/A2701/A270202/27050275/dtlmenu/', note: '시장 안에서 해산물을 골라 먹는 곳.' },
    { id: 'daikichi-v3', name: '덴푸라 다이키치 난바점', jp: '天ぷら 大吉 なんば店', coords: [34.6603,135.5014], area: 'namba', areaLabel: '난바', group: 'other', genreLabel: '덴푸라', rating: 3.49, reviews: 1103, menu: '덴푸라 · 덴동 · 바지락 된장국', price: 1800, duration: 65, image: 'assets/osaka-food.png', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27011807/', menuUrl: 'https://tabelog.com/osaka/A2701/A270202/27011807/dtlmenu/', note: '난바에서 먹는 즉석 튀김과 바지락국.' },
    { id: 'kyochabana-v3', name: '교차바나 미나미센바점', jp: '京ちゃばな 心斎橋南船場店', coords: [34.6771,135.5032], area: 'shinsaibashi', areaLabel: '신사이바시', group: 'unique', genreLabel: '토마토 오코노미야키', rating: 3.13, reviews: 276, menu: '토마토 오코노미야키 · 아보카도 차소바', price: 1800, duration: 75, image: 'assets/osaka-food.png', tabelog: 'https://tabelog.com/osaka/A2701/A270201/27008088/', menuUrl: 'https://tabelog.com/osaka/A2701/A270201/27008088/dtlmenu/', note: '토마토와 치즈를 넣은 변형 오코노미야키.' },
    { id: 'melcoffee-v3', name: 'Mel Coffee Roasters', jp: 'メルコーヒーロースターズ', coords: [34.6754,135.4937], area: 'shinsaibashi', areaLabel: '신사이바시', group: 'drink', genreLabel: '커피 스탠드', rating: 3.31, reviews: 99, menu: '필터 커피 · 원두', price: 1100, duration: 40, image: 'assets/osaka-food.png', tabelog: 'https://tabelog.com/osaka/A2701/A270201/27089898/', menuUrl: 'https://tabelog.com/osaka/A2701/A270201/27089898/dtlmenu/', note: '니시오하시 쪽 작은 커피 스탠드.' }
  ];

  const restaurants = [
    ...legacyRestaurants.map(item => ({ ...item, ...(EXPANSION.restaurantOverrides?.[item.id] || {}) })),
    ...(EXPANSION.restaurants || [])
  ].map(item => {
    const exact = V5.restaurantExactPhotos?.[item.id] || PHOTO_MANIFEST[item.id];
    return ({
    ...item,
    image: exact?.image || null,
    verifiedPhoto: Boolean(exact),
    photoSource: exact?.source || null,
    rating: Number.isFinite(item.rating) ? item.rating : null,
    reviews: Number.isFinite(item.reviews) ? item.reviews : null,
    price: Number.isFinite(item.price) ? item.price : 0,
    tabelog: item.tabelog || `https://tabelog.com/osaka/rstLst/?sk=${encodeURIComponent(item.jp || item.name)}`,
    menuUrl: item.menuUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.name + ' Osaka')}`
  }); });

  const HOTELS = LIVE_HOTELS.hotels.length ? LIVE_HOTELS.hotels : [
    ...DATA.hotels.map(item => ({ ...item, ...(EXPANSION.hotelOverrides?.[item.id] || {}) })),
    ...(EXPANSION.hotels || [])
  ];

  const baseAttractions = [
    { id: 'castle', category: 'attraction', duration: 120, image: 'assets/osaka-castle.jpg', label: '성·역사', best: '08:30~10:30' },
    { id: 'sky', category: 'attraction', duration: 105, image: 'assets/umeda-sky.jpg', label: '전망', best: '일몰 75분 전' },
    { id: 'yasaka', category: 'attraction', duration: 45, image: 'assets/namba-yasaka.jpg', label: '신사', best: '09:00 전후' },
    { id: 'kuromon', category: 'attraction', duration: 70, image: 'assets/osaka-food.png', label: '시장', best: '09:00~11:00' },
    { id: 'dotonbori', category: 'attraction', duration: 75, image: 'assets/dotonbori-night.jpg', label: '네온·산책', best: '19:00 이후' },
    { id: 'shinsekai', category: 'attraction', duration: 90, image: 'assets/shinsekai.jpg', label: '레트로 거리', best: '16:00 이후' },
    { id: 'tsutenkaku', category: 'attraction', duration: 90, image: 'assets/shinsekai.jpg', label: '전망·놀이', best: '오전 또는 야간' },
    { id: 'kaiyukan', category: 'attraction', duration: 180, image: 'assets/osaka-hero.png', label: '수족관', best: '첫 입장 시간' },
    { id: 'tempozan', category: 'attraction', duration: 60, image: 'assets/osaka-hero.png', label: '항구', best: '맑은 날' },
    { id: 'usj', category: 'attraction', duration: 660, image: 'assets/osaka-goods.png', label: '테마파크', best: '하루 전체' }
  ];
  const datedEvents = (VNEXT.events || []).map(item => ({ ...item, verifiedPhoto: false, facts: [`${item.validDays?.map(day => dayNames[day]?.slice(0, 1)).join('·') || '날짜 확인'} · ${item.start || ''}${item.end ? `~${item.end}` : ''}`, item.reservationPolicy === 'required' ? '시간제 예약 필수' : item.reservationPolicy === 'recommended' ? '예약 권장' : '예약 불필요'] }));
  const attractions = [...baseAttractions.map(item => ({ ...item, ...(V5.attractionOverrides?.[item.id] || {}) })), ...(V5.attractions || []), ...datedEvents];

  const baseGoods = [
    { id: 'lucua', category: 'goods', duration: 100, image: 'assets/osaka-goods.png', label: '공식 굿즈 압축', priceText: '상품별', description: 'Nintendo OSAKA·Pokémon Center·Capcom 등을 우메다 한 층에서 처리.' },
    { id: 'parco', category: 'goods', duration: 100, image: 'assets/osaka-goods.png', label: '신사이바시 팝컬처', priceText: '상품별', description: 'PARCO 팝컬처 층에서 캐릭터·게임·한정 매장을 묶어 본다.' },
    { id: 'denden', category: 'goods', duration: 110, image: 'assets/osaka-goods.png', label: '중고·절판 발굴', priceText: '상품별', description: '덴덴타운과 오타로드에서 신품·중고·절판 재고를 비교.' },
    { id: 'doguya', category: 'goods', duration: 60, image: 'assets/osaka-goods.png', label: '주방도구', priceText: '¥500부터', description: '그릇·식품 샘플·칼·다코야키 팬 등 오사카다운 실용 쇼핑.' },
    { id: 'pokemonDx', category: 'goods', duration: 70, image: 'assets/osaka-goods.png', label: '포켓몬 공식', priceText: '상품별', description: '신사이바시 다이마루의 Pokémon Center OSAKA DX.' },
    { id: 'rikuro-gift-v3', name: '리쿠로 치즈케이크 선물', jp: 'りくろーおじさん', coords: DATA.coordinates.rikuro, category: 'goods', duration: 30, image: 'assets/osaka-food.png', label: '먹는 선물', priceText: '약 ¥900~1,400', description: '난바에서 갓 구운 치즈케이크를 출국 전 구입.', official: 'https://www.rikuro.co.jp/shoplist/' }
  ];
  const goods = [...baseGoods.map(item => ({ ...item, ...(V5.goodsOverrides?.[item.id] || {}) })), ...(V5.goods || []), ...(CHANCE.goods || [])];
  const goodsGroups = { ...(V5.goodsGroups || { all: '전체' }), ...(CHANCE.goodsGroups || {}) };

  const baseNightlife = [
    { id: 'dotonbori-night-v3', name: '도톤보리·소에몬초', jp: '道頓堀・宗右衛門町', category: 'nightlife', coords: DATA.coordinates.dotonbori, duration: 90, image: 'assets/dotonbori-night.jpg', label: '네온·관광·바', priceText: '무료~가게별', description: '가장 쉬운 첫 밤. 강변·대형 간판·식당·바가 밀집해 혼자도 움직이기 쉽다.', risk: '호객을 따라가지 말고 가격표 없는 업소는 피하기.', official: 'https://osaka-info.jp/en/spot/dotonbori/' },
    { id: 'uranamba-v3', name: '우라난바', jp: '裏なんば', category: 'nightlife', coords: [34.6651,135.5038], duration: 100, image: 'assets/osaka-food.png', label: '스탠딩바·이자카야', priceText: '1곳 ¥1,500~3,000', description: '센니치마에 남쪽의 작은 술집 밀집 구역. 두 곳 정도 짧게 옮겨 다니기 좋다.', risk: '좁은 골목·현금만 받는 가게가 있어 소액 현금 준비.', official: 'https://osaka-info.jp/en/spot/gastronomy-urananba/' },
    { id: 'hozenji-v3', name: '호젠지 요코초', jp: '法善寺横丁', category: 'nightlife', coords: [34.6677,135.5028], duration: 70, image: 'assets/dotonbori-night.jpg', label: '차분한 골목 술집', priceText: '가게별', description: '도톤보리 바로 뒤인데 분위기가 급격히 차분해지는 돌바닥 골목.', risk: '식당·바마다 예약과 가격 차이가 큼.', official: 'https://osaka-info.jp/en/discover-kansai/osaka-night-life/' },
    { id: 'amerikamura-v3', name: '아메리카무라', jp: 'アメリカ村', category: 'nightlife', coords: [34.6721,135.4973], duration: 100, image: 'assets/dotonbori-night.jpg', label: '클럽·음악·젊은 거리', priceText: '입장료·행사별', description: '신사이바시 서쪽의 빈티지·음악·클럽 문화. 당일 행사표를 확인하고 고른다.', risk: '신분증 필수 가능·새벽 귀가 교통 사전 확인.', official: 'https://osaka-info.jp/experience/en/osaka/spot/211' },
    { id: 'kitashinchi-v3', name: '기타신치', jp: '北新地', category: 'nightlife', coords: [34.6977,135.4986], duration: 100, image: 'assets/umeda-sky.jpg', label: '고급 바·식사', priceText: '고가·업소별', description: '우메다 남쪽의 고급 유흥·식사 지구. 예약된 레스토랑이나 가격이 명확한 바 중심으로.', risk: '커버차지·서비스료를 입장 전에 확인.', official: 'https://osaka-info.jp/en/spot/kitashinchi/' },
    { id: 'tenma-v3', name: '텐마 뒷골목', jp: '天満', category: 'nightlife', coords: [34.7051,135.5114], duration: 100, image: 'assets/osaka-food.png', label: '로컬 술집·먹거리', priceText: '1곳 ¥1,500~3,000', description: 'JR 텐마역 북쪽의 캐주얼한 술집·야키니쿠·해산물 골목.', risk: '마지막 열차와 호텔 복귀 동선을 먼저 저장.', official: 'https://osaka-info.jp/en/discover-kansai/osaka-hidden-gems/' }
  ];
  const nightlife = [...baseNightlife.map(item => ({ ...item, ...(V5.nightlifeOverrides?.[item.id] || {}) })), ...(V5.nightlife || []), ...(CHANCE.nightlife || [])];
  const nightlifeGroups = { ...(V5.nightlifeGroups || { all: '전체' }), ...(CHANCE.nightlifeGroups || {}) };

  function coreItem(id, extra) {
    const place = CORE.places[id] || {};
    const coords = DATA.coordinates[id] || extra.coords;
    const researchedPhoto = PHOTO_MANIFEST[id];
    const inheritedImage = extra.verifiedPhoto === false ? null : (extra.image || place.image || null);
    return {
      id,
      name: extra.name || place.name || id,
      jp: extra.jp || place.jp || '',
      category: extra.category,
      coords,
      duration: extra.duration || 60,
      image: researchedPhoto?.image || inheritedImage,
      verifiedPhoto: Boolean(researchedPhoto) || (extra.verifiedPhoto !== false && Boolean(inheritedImage)),
      photoSource: researchedPhoto?.source || extra.photoSource || null,
      photoKind: researchedPhoto?.kind || extra.photoKind || '',
      label: extra.label || place.category || categoryLabels[extra.category],
      description: extra.description || place.short || '',
      whyGo: extra.whyGo || '',
      group: extra.group || 'all',
      priceText: extra.priceText || place.price || '선택별',
      official: extra.official || place.official || place.map,
      map: extra.map || place.map || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(extra.name || place.name || id)}`,
      best: extra.best || '',
      risk: extra.risk || '',
      caution: extra.caution || '',
      facts: Array.isArray(extra.facts) ? extra.facts : [],
      address: extra.address || '',
      chanceType: extra.chanceType || '',
      ageLabel: extra.ageLabel || '',
      adultOnly: Boolean(extra.adultOnly)
      ,area: extra.area || ''
      ,areaLabel: extra.areaLabel || ''
      ,price: Number.isFinite(Number(extra.price)) ? Number(extra.price) : null
      ,validDays: Array.isArray(extra.validDays) ? extra.validDays : DAYS
      ,suggestedDay: extra.suggestedDay || ''
      ,suggestedStart: extra.suggestedStart || ''
      ,suggestedStarts: extra.suggestedStarts || null
      ,indoor: Boolean(extra.indoor)
      ,outdoor: Boolean(extra.outdoor)
      ,operation: {
        hoursStatus: VNEXT.operationOverrides?.[id]?.hoursStatus || 'unknown',
        reservationPolicy: VNEXT.operationOverrides?.[id]?.reservationPolicy || extra.reservationPolicy || 'unknown',
        official: VNEXT.operationOverrides?.[id]?.official || extra.official || place.official || place.map || '',
        verifiedAt: VNEXT.operationOverrides?.[id]?.verifiedAt || extra.verifiedAt || ''
      }
    };
  }

  const attractionItems = attractions.map(item => coreItem(item.id, { ...item, category: 'attraction' }));
  const goodsItems = goods.map(item => coreItem(item.id, { ...item, category: 'goods' }));
  const nightlifeItems = nightlife.map(item => coreItem(item.id, { ...item, category: 'nightlife' }));
  const restaurantItems = restaurants.map(item => coreItem(item.id, { ...item, category: 'food', label: `${foodGroups[item.group]} · ${item.genreLabel}`, description: item.note, priceText: `약 ¥${item.price.toLocaleString('ko-KR')}` }));
  const allItems = [...attractionItems, ...restaurantItems, ...goodsItems, ...nightlifeItems].reduce((map, item) => map.set(item.id, item), new Map());
  restaurantItems.forEach(item => {
    const source = restaurants.find(restaurant => restaurant.id === item.id);
    Object.assign(item, source);
  });
  const builtInRestaurantIds = new Set(restaurants.map(item => item.id));
  const builtInHotelIds = new Set(HOTELS.map(item => item.id));
  const builtInPlannerIds = new Set(allItems.keys());

  const defaults = () => ({
    version: 3,
    plans: { sat: [], sun: [], mon: [] },
    wishlist: [],
    mustVisit: [],
    mealSlots: {},
    starts: { sat: '17:30', sun: '08:00', mon: '08:00' },
    transit: {},
    itemStarts: {},
    itemDurations: {},
    mapDay: 'sat',
    hotelId: HOTELS[0]?.id || window.OsakaExperience?.travelState?.hotelId || 'hiyori',
    customItems: [],
    activeVariantId: 'base',
    variants: [],
    participants: [{ id: 'p1', name: '1번' }, { id: 'p2', name: '2번' }, { id: 'p3', name: '3번' }],
    votes: {},
    reservations: {
      'booked-livin-nanbaminami': {
        status: 'booked', assigneeId: '', time: '16:00', cancelBy: '', partySize: 3,
        partyConfirmed: true,
        officialUrl: 'https://www.agoda.com/livin-osaka-nanbaminami/hotel/osaka-jp.html',
        note: '환불 불가 · 무인 체크인'
      }
    },
    prepTasks: [
      { id: 'hotel-online-checkin-livin', title: 'LIVIN 온라인 체크인 완료', status: 'done', assigneeId: '', due: '2026-08-29', itemId: 'booked-livin-nanbaminami', link: '', auto: true },
      { id: 'hotel-accommodation-tax-livin', title: 'LIVIN 숙박세 완료', status: 'done', assigneeId: '', due: '2026-08-29', itemId: 'booked-livin-nanbaminami', link: '', auto: true },
      { id: 'hotel-lockbox-livin', title: 'LIVIN 당일 출입 코드 확인·저장', status: 'todo', assigneeId: '', due: '2026-09-05', itemId: 'booked-livin-nanbaminami', link: '', auto: true }
    ],
    itemProgress: {},
    fieldDay: 'sat',
    fieldDelays: { sat: 0, sun: 0, mon: 0 },
    hotelShortlist: ['booked-livin-nanbaminami'],
    expenses: [],
    plannedCosts: { transportJpy: 0, shoppingJpy: 0, passJpy: 0 },
    exchangeRateKrwPerJpy: 10
  });

  function storageGet(key) {
    try { return localStorage.getItem(key); } catch { return null; }
  }

  function storageSet(key, value) {
    try { localStorage.setItem(key, value); return true; } catch { return false; }
  }

  let privateBookingRefMemory = '';
  let privateBookingDbPromise;

  function cleanPrivateBookingRef(value) {
    return String(value || '').replace(/\D/g, '').slice(0, 16);
  }

  function privateBookingDb() {
    if (!privateBookingDbPromise) privateBookingDbPromise = new Promise((resolve, reject) => {
      if (!window.indexedDB) { reject(new Error('IndexedDB unavailable')); return; }
      const request = indexedDB.open(PRIVATE_BOOKING_DB, 1);
      request.onupgradeneeded = () => request.result.createObjectStore('secrets');
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error || new Error('IndexedDB open failed'));
      request.onblocked = () => reject(new Error('IndexedDB blocked'));
    });
    return privateBookingDbPromise;
  }

  function privateBookingTimeout(promise, milliseconds = 700) {
    return Promise.race([promise, new Promise((_, reject) => setTimeout(() => reject(new Error('Private booking storage timeout')), milliseconds))]);
  }

  async function initializePrivateBookingRef() {
    const local = cleanPrivateBookingRef(storageGet(PRIVATE_BOOKING_KEY));
    if (local) { privateBookingRefMemory = local; return; }
    try {
      const db = await privateBookingTimeout(privateBookingDb());
      privateBookingRefMemory = cleanPrivateBookingRef(await privateBookingTimeout(new Promise((resolve, reject) => {
        const request = db.transaction('secrets').objectStore('secrets').get('agoda-booking-ref');
        request.onsuccess = () => resolve(request.result || '');
        request.onerror = () => reject(request.error);
      })));
    } catch { privateBookingRefMemory = ''; }
  }

  async function persistPrivateBookingRef(value) {
    privateBookingRefMemory = cleanPrivateBookingRef(value);
    const localSaved = storageSet(PRIVATE_BOOKING_KEY, privateBookingRefMemory) && storageGet(PRIVATE_BOOKING_KEY) === privateBookingRefMemory;
    let indexedSaved = false;
    try {
      const db = await privateBookingTimeout(privateBookingDb());
      await privateBookingTimeout(new Promise((resolve, reject) => {
        const request = db.transaction('secrets', 'readwrite').objectStore('secrets').put(privateBookingRefMemory, 'agoda-booking-ref');
        request.onsuccess = () => resolve();
        request.onerror = () => reject(request.error);
      }));
      indexedSaved = true;
    } catch { /* browser can still use localStorage or in-memory fallback */ }
    return localSaved || indexedSaved;
  }

  function cleanCustomText(value, fallback = '', maxLength = 180) {
    if (typeof value !== 'string') return fallback;
    return value.replace(/[<>"'`\u0000-\u001f]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, maxLength) || fallback;
  }

  function cleanCustomUrl(value) {
    if (typeof value !== 'string' || !value.trim()) return '';
    try {
      const url = new URL(value.trim());
      return ['http:', 'https:'].includes(url.protocol) ? url.toString().slice(0, 1200) : '';
    } catch { return ''; }
  }

  function normalizeCustomItem(item) {
    if (!item || typeof item !== 'object' || !['place', 'restaurant'].includes(item.kind) || !/^custom-[a-z0-9-]{6,80}$/i.test(item.id || '')) return null;
    const name = cleanCustomText(item.name, '', 100);
    if (!name) return null;
    const lat = Number(item.coords?.[0]);
    const lng = Number(item.coords?.[1]);
    return {
      id: item.id,
      kind: item.kind,
      name,
      area: cleanCustomText(item.area, '위치 미지정', 100),
      detail: cleanCustomText(item.detail, item.kind === 'restaurant' ? '직접 추가한 음식점' : '직접 추가한 일정', 240),
      price: Math.max(0, Math.min(100000000, Number(item.price) || 0)),
      duration: Math.max(15, Math.min(480, Math.round(Number(item.duration) || (item.kind === 'restaurant' ? 60 : 90)))),
      url: cleanCustomUrl(item.url),
      coords: Number.isFinite(lat) && Number.isFinite(lng) && lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180 ? [lat, lng] : null,
      createdAt: /^\d{4}-\d{2}-\d{2}T/.test(item.createdAt || '') ? String(item.createdAt).slice(0, 30) : new Date().toISOString()
    };
  }

  function normalizePlannerState(parsed) {
    const normalized = defaults();
    if (!parsed || ![1, 2, 3].includes(parsed.version)) return normalized;
    const customItems = Array.isArray(parsed.customItems) ? parsed.customItems.map(normalizeCustomItem).filter(Boolean) : [];
    normalized.customItems = [...new Map(customItems.map(item => [item.id, item])).values()].slice(0, 80);
    const customPlanIds = new Set(normalized.customItems.map(item => item.id));
    DAYS.forEach(day => {
      normalized.plans[day] = Array.isArray(parsed.plans?.[day]) ? parsed.plans[day].filter((id, index, list) => (builtInPlannerIds.has(id) || customPlanIds.has(id)) && list.indexOf(id) === index) : [];
      if (validClock(parsed.starts?.[day])) normalized.starts[day] = parsed.starts[day];
    });
    const scheduledIds = DAYS.flatMap(day => normalized.plans[day]);
    const validWishlist = Array.isArray(parsed.wishlist)
      ? parsed.wishlist.filter(id => builtInPlannerIds.has(id) || customPlanIds.has(id))
      : [];
    normalized.wishlist = [...new Set([...scheduledIds, ...validWishlist])].slice(0, 160);
    const wishlistSet = new Set(normalized.wishlist);
    normalized.mustVisit = Array.isArray(parsed.mustVisit)
      ? [...new Set(parsed.mustVisit.filter(id => wishlistSet.has(id)))].slice(0, 160)
      : [];
    if (parsed.mealSlots && typeof parsed.mealSlots === 'object' && !Array.isArray(parsed.mealSlots)) {
      Object.entries(parsed.mealSlots).slice(0, 160).forEach(([id, slot]) => {
        if (wishlistSet.has(id) && ['breakfast', 'lunch', 'snack', 'dinner', 'late'].includes(slot)) normalized.mealSlots[id] = slot;
      });
    }
    if (parsed.transit && typeof parsed.transit === 'object' && !Array.isArray(parsed.transit)) {
      Object.entries(parsed.transit).forEach(([key, value]) => {
        const minutes = Number(value);
        if (/^(sat|sun|mon):[^:]+:[^:]+$/.test(key) && Number.isFinite(minutes) && minutes >= 5 && minutes <= 180) normalized.transit[key] = Math.round(minutes);
      });
    }
    if (parsed.itemStarts && typeof parsed.itemStarts === 'object' && !Array.isArray(parsed.itemStarts)) {
      Object.entries(parsed.itemStarts).slice(0, 240).forEach(([key, value]) => {
        const [day, id, extra] = key.split(':');
        if (!extra && DAYS.includes(day) && normalized.plans[day].includes(id) && validClock(value)) normalized.itemStarts[key] = value;
      });
    }
    if (parsed.itemDurations && typeof parsed.itemDurations === 'object' && !Array.isArray(parsed.itemDurations)) {
      Object.entries(parsed.itemDurations).slice(0, 240).forEach(([key, value]) => {
        const [day, id, extra] = key.split(':');
        const minutes = Number(value);
        if (!extra && DAYS.includes(day) && normalized.plans[day].includes(id) && Number.isFinite(minutes) && minutes >= 15 && minutes <= 480) normalized.itemDurations[key] = Math.round(minutes);
      });
    }
    normalized.mapDay = DAYS.includes(parsed.mapDay) ? parsed.mapDay : 'sat';
    if (builtInHotelIds.has(parsed.hotelId)) normalized.hotelId = parsed.hotelId;
    normalized.version = 3;
    const participants = Array.isArray(parsed.participants) ? parsed.participants : [];
    normalized.participants = [0, 1, 2].map(index => ({
      id: `p${index + 1}`,
      name: cleanCustomText(participants[index]?.name, `${index + 1}번`, 24)
    }));
    if (parsed.votes && typeof parsed.votes === 'object' && !Array.isArray(parsed.votes)) {
      Object.entries(parsed.votes).slice(0, 500).forEach(([id, votes]) => {
        if (!/^[a-z0-9][a-z0-9-]{0,79}$/i.test(id) || !votes || typeof votes !== 'object') return;
        normalized.votes[id] = {};
        normalized.participants.forEach(participant => {
          normalized.votes[id][participant.id] = ['want', 'neutral', 'skip'].includes(votes[participant.id]) ? votes[participant.id] : 'neutral';
        });
      });
    }
    if (parsed.reservations && typeof parsed.reservations === 'object' && !Array.isArray(parsed.reservations)) {
      Object.entries(parsed.reservations).slice(0, 300).forEach(([id, reservation]) => {
        if (!/^[a-z0-9][a-z0-9-]{0,79}$/i.test(id) || !reservation || typeof reservation !== 'object') return;
        normalized.reservations[id] = {
          status: ['none', 'needed', 'booked'].includes(reservation.status) ? reservation.status : 'none',
          assigneeId: ['p1', 'p2', 'p3'].includes(reservation.assigneeId) ? reservation.assigneeId : '',
          time: validClock(reservation.time) ? reservation.time : '',
          cancelBy: /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2})?$/.test(reservation.cancelBy || '') ? String(reservation.cancelBy).slice(0, 16) : '',
          partySize: 3,
          partyConfirmed: Boolean(reservation.partyConfirmed),
          officialUrl: cleanCustomUrl(reservation.officialUrl),
          note: cleanCustomText(reservation.note, '', 120)
        };
      });
    }
    normalized.prepTasks = Array.isArray(parsed.prepTasks) ? parsed.prepTasks.filter(task => task && /^[a-z0-9][a-z0-9-]{0,79}$/i.test(task.id || '') && task.title).slice(0, 160).map(task => ({
      id: task.id, title: cleanCustomText(task.title, '준비 업무', 100), status: task.status === 'done' ? 'done' : 'todo',
      assigneeId: ['p1', 'p2', 'p3'].includes(task.assigneeId) ? task.assigneeId : '', due: /^\d{4}-\d{2}-\d{2}$/.test(task.due || '') ? task.due : '',
      itemId: /^[a-z0-9][a-z0-9-]{0,79}$/i.test(task.itemId || '') ? task.itemId : '', link: cleanCustomUrl(task.link), auto: Boolean(task.auto)
    })) : [];
    if (parsed.itemProgress && typeof parsed.itemProgress === 'object' && !Array.isArray(parsed.itemProgress)) {
      Object.entries(parsed.itemProgress).slice(0, 240).forEach(([key, value]) => {
        if (/^(sat|sun|mon):[a-z0-9-]{1,80}$/i.test(key) && ['pending', 'done', 'skipped'].includes(value)) normalized.itemProgress[key] = value;
      });
    }
    normalized.fieldDay = DAYS.includes(parsed.fieldDay) ? parsed.fieldDay : normalized.mapDay;
    DAYS.forEach(day => { normalized.fieldDelays[day] = Math.max(0, Math.min(240, Math.round(Number(parsed.fieldDelays?.[day]) || 0))); });
    normalized.hotelShortlist = ['booked-livin-nanbaminami'];
    normalized.expenses = Array.isArray(parsed.expenses) ? parsed.expenses.filter(expense => expense && /^[a-z0-9][a-z0-9-]{0,79}$/i.test(expense.id || '') && expense.title).slice(0, 240).map(expense => ({
      id: expense.id, title: cleanCustomText(expense.title, '지출', 100), category: ['hotel', 'food', 'transport', 'ticket', 'shopping', 'other'].includes(expense.category) ? expense.category : 'other',
      amountJpy: Math.max(0, Math.min(10000000, Math.round(Number(expense.amountJpy) || 0))), payerId: ['p1', 'p2', 'p3'].includes(expense.payerId) ? expense.payerId : 'p1',
      splitWith: Array.isArray(expense.splitWith) ? [...new Set(expense.splitWith.filter(id => ['p1', 'p2', 'p3'].includes(id)))].slice(0, 3) : ['p1', 'p2', 'p3'], actual: expense.actual !== false,
      createdAt: /^\d{4}-\d{2}-\d{2}T/.test(expense.createdAt || '') ? String(expense.createdAt).slice(0, 30) : new Date().toISOString()
    })) : [];
    normalized.plannedCosts = {
      transportJpy: Math.max(0, Math.round(Number(parsed.plannedCosts?.transportJpy) || 0)),
      shoppingJpy: Math.max(0, Math.round(Number(parsed.plannedCosts?.shoppingJpy) || 0)),
      passJpy: Math.max(0, Math.round(Number(parsed.plannedCosts?.passJpy) || 0))
    };
    normalized.exchangeRateKrwPerJpy = Math.max(1, Math.min(100, Number(parsed.exchangeRateKrwPerJpy) || 10));
    const variants = Array.isArray(parsed.variants) ? parsed.variants.slice(0, 3) : [];
    normalized.variants = variants.map((variant, index) => ({
      id: /^[a-z0-9][a-z0-9-]{0,79}$/i.test(variant?.id || '') ? variant.id : index === 0 ? 'base' : `plan-${index + 1}`,
      label: cleanCustomText(variant?.label, index === 0 ? '기본안' : `일정안 ${index + 1}`, 24),
      plans: DAYS.reduce((result, day) => ({ ...result, [day]: Array.isArray(variant?.plans?.[day]) ? variant.plans[day].filter(id => builtInPlannerIds.has(id) || customPlanIds.has(id)).slice(0, 80) : [] }), {}),
      starts: DAYS.reduce((result, day) => ({ ...result, [day]: validClock(variant?.starts?.[day]) ? variant.starts[day] : normalized.starts[day] }), {}),
      transit: variant?.transit && typeof variant.transit === 'object' ? { ...variant.transit } : {},
      itemStarts: variant?.itemStarts && typeof variant.itemStarts === 'object' ? { ...variant.itemStarts } : {},
      itemDurations: variant?.itemDurations && typeof variant.itemDurations === 'object' ? { ...variant.itemDurations } : {}
    }));
    if (!normalized.variants.length) normalized.variants = [{ id: 'base', label: '기본안', plans: JSON.parse(JSON.stringify(normalized.plans)), starts: { ...normalized.starts }, transit: { ...normalized.transit }, itemStarts: { ...normalized.itemStarts }, itemDurations: { ...normalized.itemDurations } }];
    normalized.activeVariantId = normalized.variants.some(variant => variant.id === parsed.activeVariantId) ? parsed.activeVariantId : normalized.variants[0].id;
    return normalized;
  }

  function loadState() {
    try { return normalizePlannerState(JSON.parse(storageGet(STORAGE_KEY))); }
    catch { return defaults(); }
  }

  const state = loadState();
  refreshCustomCollections();
  const sharedSync = {
    clientId: window.crypto?.randomUUID?.() || `client-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    revision: 0,
    ready: false,
    booted: false,
    dirty: false,
    applying: false,
    saving: false,
    saveTimer: null,
    reconnectTimer: null,
    deferred: null,
    events: null,
    conflict: null,
    recoveryKey: 'osakaPlannerV3Conflict'
  };
  let map;
  let mapLayer;
  let selectedMarker;
  let stayMap;
  let stayMapMarker;
  let customLocationMap;
  let customLocationMarker;
  let customLocationCoords = null;
  let dragged = null;
  const restaurantUi = { page: 1, pageSize: 6 };
  const catalogUi = {
    attraction: { group: 'all', page: 1, pageSize: 6 },
    goods: { group: 'all', page: 1, pageSize: 6 },
    nightlife: { group: 'all', page: 1, pageSize: 6 }
  };
  const guidePanels = ['today-v41', 'food-map-v41', 'prep-v3', 'hotel-search-v3', 'restaurant-search-v3', 'itinerary-v11', 'catalog-attractions-v3', 'catalog-goods-v3', 'catalog-nightlife-v3', 'travel-tips-v12'];
  const legacyGuidePanels = {
    'day-sat-v3': 'itinerary-v11',
    'day-sun-v3': 'itinerary-v11',
    'day-mon-v3': 'itinerary-v11',
    'catalog-food-v3': 'restaurant-search-v3'
  };
  const normalizeGuidePanel = id => legacyGuidePanels[id] || id;
  const requestedGuidePanel = normalizeGuidePanel(location.hash.slice(1));
  let activeGuidePanel = guidePanels.includes(requestedGuidePanel) ? requestedGuidePanel : guidePanels[0];

  function refreshCustomCollections() {
    for (let index = restaurants.length - 1; index >= 0; index--) if (!builtInRestaurantIds.has(restaurants[index].id)) restaurants.splice(index, 1);
    for (let index = restaurantItems.length - 1; index >= 0; index--) if (!builtInPlannerIds.has(restaurantItems[index].id)) restaurantItems.splice(index, 1);
    for (let index = HOTELS.length - 1; index >= 0; index--) if (!builtInHotelIds.has(HOTELS[index].id)) HOTELS.splice(index, 1);
    [...allItems.keys()].forEach(id => { if (!builtInPlannerIds.has(id)) allItems.delete(id); });

    state.customItems.forEach(entry => {
      const map = entry.url || mapSearch(`${entry.name} ${entry.area}`);
      const plannerItem = {
        id: entry.id,
        custom: true,
        name: entry.name,
        jp: '직접 추가',
        category: entry.kind === 'restaurant' ? 'food' : 'attraction',
        coords: entry.coords,
        duration: entry.duration,
        image: entry.kind === 'restaurant' ? 'assets/osaka-food.png' : 'assets/osaka-hero.png',
        label: entry.kind === 'restaurant' ? '직접 추가 음식점' : '직접 추가 일정',
        priceText: entry.price ? `약 ${yen(entry.price)}` : '가격 미입력',
        description: entry.detail,
        whyGo: entry.detail,
        official: map,
        map,
        area: 'custom',
        areaLabel: entry.area,
        group: 'custom',
        genreLabel: entry.kind === 'restaurant' ? '직접 추가' : '일정 장소',
        menu: entry.detail,
        note: entry.detail,
        price: entry.price,
        rating: null,
        reviews: null,
        tabelog: map,
        menuUrl: map,
        precision: entry.coords ? 'exact' : 'missing'
      };
      allItems.set(entry.id, plannerItem);
      if (entry.kind === 'restaurant') {
        restaurants.push(plannerItem);
        restaurantItems.push(plannerItem);
      }
    });
  }

  function sharedSnapshot() {
    return normalizePlannerState(state);
  }

  function hasSharedPlannerContent(candidate) {
    const normalized = normalizePlannerState(candidate);
    const baseline = defaults();
    return DAYS.some(day => normalized.plans[day].length || normalized.starts[day] !== baseline.starts[day]) ||
      normalized.wishlist.length > 0 || Object.keys(normalized.transit).length > 0 || Object.keys(normalized.itemStarts).length > 0 || Object.keys(normalized.itemDurations).length > 0 || normalized.mapDay !== baseline.mapDay || normalized.hotelId !== baseline.hotelId || normalized.customItems.length > 0;
  }

  function setSharedSyncStatus(mode, title, detail) {
    if (mode === 'synced') { title = '이 기기에 저장됨'; detail = '수정은 이 브라우저에만 적용됩니다 · 친구와 자동 공유되지 않아요'; }
    else if (mode === 'saving') { title = '내 일정 저장 중'; detail = '이 브라우저에 저장하고 있습니다.'; }
    else if (mode === 'offline') { title = '내 저장 상태 확인 필요'; detail = '저장 공간 또는 다른 탭의 변경을 확인하세요. 내 일정에서 JSON 백업을 받아두세요.'; }
    const target = document.querySelector('#shared-sync-v8');
    if (!target) return;
    target.className = `shared-sync-v8 is-${mode}`;
    target.querySelector('strong').textContent = title;
    target.querySelector('span').textContent = detail;
  }

  function applySharedRecord(payload) {
    if (!payload?.state || !Number.isFinite(Number(payload.revision))) return;
    if (Number(payload.revision) < sharedSync.revision) return;
    if ((sharedSync.dirty || sharedSync.saving) && payload.updatedBy !== sharedSync.clientId) {
      sharedSync.deferred = payload;
      return;
    }
    sharedSync.revision = Number(payload.revision);
    if (payload.updatedBy === sharedSync.clientId && sharedSync.dirty) return;
    const next = normalizePlannerState(payload.state);
    sharedSync.applying = true;
    Object.keys(state).forEach(key => { if (!(key in next)) delete state[key]; });
    Object.assign(state, next);
    refreshCustomCollections();
    storageSet(STORAGE_KEY, JSON.stringify(state));
    if (sharedSync.booted) {
      DAYS.forEach(day => { document.querySelector(`#day-start-${day}`).value = state.starts[day]; });
      renderHotels(true);
      syncFoodTypeOptions();
      renderRestaurants();
      renderCustomEntries();
      renderAllPlans();
      syncMapTabs();
      renderMap();
    }
    sharedSync.applying = false;
    document.dispatchEvent(new CustomEvent('osaka:shared-applied', { detail: { payload, state } }));
    const time = payload.updatedAt ? new Date(payload.updatedAt).toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }) : '방금';
    setSharedSyncStatus('synced', '공용 일정 동기화됨', `${time} 기준 · 이 링크의 모든 방문자에게 같은 일정이 보입니다.`);
  }

  function scheduleSharedRetry() {
    window.clearTimeout(sharedSync.reconnectTimer);
    sharedSync.reconnectTimer = window.setTimeout(() => {
      if (sharedSync.ready && sharedSync.dirty) pushSharedState();
      else if (!sharedSync.ready) initializeSharedState();
    }, 3500);
  }

  async function pushSharedState({ keepalive = false } = {}) {
    if (!sharedSync.ready || sharedSync.saving || !sharedSync.dirty) return;
    sharedSync.saving = true;
    const snapshot = sharedSnapshot();
    const serialized = JSON.stringify(snapshot);
    setSharedSyncStatus('saving', '공용 일정 저장 중', '잠시 후 다른 사람 화면에도 자동으로 반영됩니다.');
    try {
      const response = await window.OsakaLocalStore.request(SHARED_STATE_URL, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ state: snapshot, clientId: sharedSync.clientId, baseRevision: sharedSync.revision }),
        cache: 'no-store',
        keepalive
      });
      const payload = await response.json().catch(() => ({}));
      if (response.status === 409 && payload.record) {
        storageSet(sharedSync.recoveryKey, JSON.stringify({ savedAt: new Date().toISOString(), baseRevision: sharedSync.revision, state: snapshot }));
        sharedSync.saving = false;
        sharedSync.dirty = false;
        sharedSync.conflict = { recovery: snapshot, record: payload.record };
        sharedSync.revision = Number(payload.record.revision) || sharedSync.revision;
        applySharedRecord(payload.record);
        setSharedSyncStatus('offline', '동시 수정 충돌을 막았습니다', '최신 공용 일정을 불러왔고, 내 변경은 복구본으로 보관했습니다. 내 일정의 최근 변경에서 확인하세요.');
        document.dispatchEvent(new CustomEvent('osaka:shared-conflict', { detail: sharedSync.conflict }));
        return;
      }
      if (response.status === 428) {
        storageSet(sharedSync.recoveryKey, JSON.stringify({ savedAt: new Date().toISOString(), baseRevision: sharedSync.revision, state: snapshot }));
        sharedSync.saving = false;
        sharedSync.dirty = false;
        setSharedSyncStatus('offline', '새 저장 방식으로 갱신 필요', '내 변경은 복구본으로 보관했습니다. 페이지를 새로 열면 공용 일정을 안전하게 편집할 수 있습니다.');
        document.dispatchEvent(new CustomEvent('osaka:shared-conflict', { detail: { refreshRequired: true, recovery: snapshot } }));
        return;
      }
      if (!response.ok) throw new Error(`save_${response.status}`);
      sharedSync.revision = Number(payload.revision) || sharedSync.revision;
      sharedSync.dirty = JSON.stringify(sharedSnapshot()) !== serialized;
      sharedSync.saving = false;
      if (sharedSync.deferred && Number(sharedSync.deferred.revision) > sharedSync.revision && !sharedSync.dirty) {
        const deferred = sharedSync.deferred;
        sharedSync.deferred = null;
        applySharedRecord(deferred);
      } else {
        sharedSync.deferred = null;
        const time = payload.updatedAt ? new Date(payload.updatedAt).toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }) : '방금';
        setSharedSyncStatus('synced', '공용 일정 저장 완료', `${time} 저장 · 접속 중인 화면도 자동 갱신됩니다.`);
      }
      document.dispatchEvent(new CustomEvent('osaka:shared-saved', { detail: payload }));
      if (sharedSync.dirty) {
        window.clearTimeout(sharedSync.saveTimer);
        sharedSync.saveTimer = window.setTimeout(() => pushSharedState(), 80);
      }
    } catch {
      sharedSync.saving = false;
      sharedSync.dirty = true;
      setSharedSyncStatus('offline', '공용 저장 연결 끊김', '변경 내용은 이 브라우저에 임시 보관했고 서버 연결을 다시 시도합니다.');
      scheduleSharedRetry();
    }
  }

  function saveState() {
    document.dispatchEvent(new CustomEvent('osaka:before-save', { detail: { state } }));
    storageSet(STORAGE_KEY, JSON.stringify(state));
    if (sharedSync.applying) return;
    sharedSync.dirty = true;
    document.dispatchEvent(new CustomEvent('osaka:state-changed', { detail: { state } }));
    if (!sharedSync.ready) {
      setSharedSyncStatus('saving', '공용 일정 연결 대기', '변경 내용을 보관하고 서버 연결 직후 올립니다.');
      return;
    }
    window.clearTimeout(sharedSync.saveTimer);
    sharedSync.saveTimer = window.setTimeout(() => pushSharedState(), 120);
  }

  function connectSharedEvents() {
    sharedSync.events?.close();
    const listener = async event => {
      if (event.key !== window.OsakaLocalStore.key) return;
      const response = await window.OsakaLocalStore.request(SHARED_STATE_URL);
      if (response.ok) applySharedRecord(await response.json());
    };
    window.addEventListener('storage', listener);
    sharedSync.events = {close(){ window.removeEventListener('storage', listener); }};
  }

  async function initializeSharedState() {
    window.clearTimeout(sharedSync.reconnectTimer);
    try {
      const response = await window.OsakaLocalStore.request(SHARED_STATE_URL, { cache: 'no-store' });
      if (!response.ok) throw new Error(`load_${response.status}`);
      const payload = await response.json();
      sharedSync.ready = true;
      const canMigratePreviousBrowserPlan = ['server', 'deployment-restore'].includes(payload.updatedBy) && !hasSharedPlannerContent(payload.state) && hasSharedPlannerContent(state);
      if (canMigratePreviousBrowserPlan) sharedSync.dirty = true;
      if (sharedSync.dirty) await pushSharedState();
      else applySharedRecord(payload);
      connectSharedEvents();
      return true;
    } catch {
      sharedSync.ready = false;
      setSharedSyncStatus('offline', '공용 저장 연결 끊김', '현재는 이 브라우저에 임시 저장하며 서버 연결을 다시 시도합니다.');
      scheduleSharedRetry();
      return false;
    }
  }

  function yen(value) { return `¥${Math.round(value || 0).toLocaleString('ko-KR')}`; }
  function krw(value) { return `₩${Math.round(value || 0).toLocaleString('ko-KR')}`; }
  function validClock(value) {
    if (typeof value !== 'string' || !/^\d{2}:\d{2}$/.test(value)) return false;
    const [hour, minute] = value.split(':').map(Number);
    return hour >= 0 && hour <= 23 && minute >= 0 && minute <= 59;
  }
  function timeToMinutes(value) { const [hour, minute] = value.split(':').map(Number); return hour * 60 + minute; }
  function minutesToTime(value) { const normalized = ((value % 1440) + 1440) % 1440; return `${String(Math.floor(normalized / 60)).padStart(2, '0')}:${String(normalized % 60).padStart(2, '0')}`; }
  function selectedHotel() { return HOTELS.find(hotel => hotel.id === state.hotelId) || HOTELS[0]; }
  function mapSearch(name) { return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name + ' Osaka')}`; }
  function distanceKm(from, to) {
    const rad = value => value * Math.PI / 180;
    const dLat = rad(to[0] - from[0]);
    const dLng = rad(to[1] - from[1]);
    const a = Math.sin(dLat / 2) ** 2 + Math.cos(rad(from[0])) * Math.cos(rad(to[0])) * Math.sin(dLng / 2) ** 2;
    return 6371 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }
  function transitKey(day, fromId, toId) { return `${day}:${fromId}:${toId}`; }
  function planItemKey(day, id) { return `${day}:${id}`; }
  function planItemDuration(day, id) { return state.itemDurations[planItemKey(day, id)] || allItems.get(id).duration; }
  function suggestedTransit(fromId, toId) {
    const from = allItems.get(fromId)?.coords;
    const to = allItems.get(toId)?.coords;
    if (!from || !to) return { distance: null, minutes: 30 };
    const distance = distanceKm(from, to);
    return { distance, minutes: distance <= 1 ? 15 : distance <= 4 ? 30 : 45 };
  }
  function transitMinutes(day, fromId, toId) {
    const key = transitKey(day, fromId, toId);
    return state.transit[key] || suggestedTransit(fromId, toId).minutes;
  }

  function planEndMinutes(day, ids = state.plans[day]) {
    let clock = timeToMinutes(state.starts[day]);
    ids.forEach((id, index) => {
      const override = state.itemStarts[planItemKey(day, id)];
      if (override) clock = timeToMinutes(override);
      clock += planItemDuration(day, id);
      if (ids[index + 1]) clock += transitMinutes(day, id, ids[index + 1]);
    });
    return clock;
  }

  function renderHotels() {
    const bookedHotel = HOTELS.find(hotel => hotel.booked) || HOTELS[0];
    const bookedTarget = document.querySelector('#booked-hotel-v18');
    if (bookedTarget && bookedHotel) {
      const privateBookingRef = privateBookingRefMemory;
      const privateBookingMarkup = `<details class="private-booking-v19"><summary>내 예약정보 <span>이 브라우저에만 저장</span></summary><div><label>Agoda 예약번호<input type="password" inputmode="numeric" autocomplete="off" maxlength="16" data-private-booking-ref-v19 value="${privateBookingRef}" placeholder="예약번호 입력"></label><button type="button" data-private-booking-reveal-v19>${privateBookingRef ? '보기' : '입력 후 보기'}</button><button type="button" data-private-booking-copy-v19 ${privateBookingRef ? '' : 'disabled'}>복사</button><button type="button" data-private-booking-clear-v19 ${privateBookingRef ? '' : 'disabled'}>지우기</button><small id="private-booking-status-v19" aria-live="polite">공용 일정·서버·Git·JSON 백업에는 포함되지 않습니다.</small></div></details>`;
      const stayStatuses = [
        ['온라인 체크인', bookedHotel.onlineCheckinStatus || '완료'],
        ['숙박세', bookedHotel.accommodationTaxStatus || '완료'],
        ['투숙객', bookedHotel.guestRegistrationStatus || '성인 3명 등록 완료']
      ].map(([label, value]) => `<span><i aria-hidden="true">✓</i><small>${label}</small><strong>${value}</strong></span>`).join('');
      const accessMarkup = `<section class="stay-access-v20" aria-labelledby="stay-access-title-v20"><header><div><span>SELF CHECK-IN</span><h4 id="stay-access-title-v20">당일 입실 순서</h4></div><strong>${bookedHotel.accessRelease || '체크인 시간 이후 공개'}</strong></header><ol><li><b>01</b><span>숙소 메일의 기존 <strong>Guest link</strong> 열기</span></li><li><b>02</b><span>객실·현관·출입·키박스 코드 확인</span></li><li><b>03</b><span>현관 코드로 건물 안에 들어가기</span></li><li><b>04</b><span>표시된 객실 앞 키박스에 코드 입력</span></li><li><b>05</b><span>객실 키를 꺼내 입실하기</span></li></ol><div class="stay-access-help-v20"><b>코드가 안 보이면</b><span>체크인 전에는 정상입니다. 체크인 시간이 지난 뒤 새로고침하고, 계속 숨겨져 있으면 Agoda 예약 메시지로 숙소에 문의하세요.</span></div><p><span aria-hidden="true">🔒</span> 실제 출입 코드는 공용 대시보드에 저장하지 않습니다. 공개된 뒤 개인 휴대전화에만 캡처하세요.</p></section>`;
      bookedTarget.innerHTML = `<div class="booked-hotel-label-v18">BOOKED · 예약 완료</div><div class="booked-hotel-main-v18"><div><span>${bookedHotel.stayLabel}</span><h3>${bookedHotel.name}</h3><p>${bookedHotel.roomFit}</p></div><strong>체크인 ${bookedHotel.checkinTime}<br>체크아웃 ${bookedHotel.checkoutTime}</strong></div><div class="booked-hotel-facts-v18"><span>${bookedHotel.station}</span><span>${bookedHotel.accessNote}</span><span>${bookedHotel.cancellation}</span></div><p>${bookedHotel.address}</p><div class="stay-status-v20" aria-label="숙박 준비 완료 상태">${stayStatuses}</div><aside><b>현재 할 일 없음</b> 체크인과 숙박세 처리가 끝났습니다. ${bookedHotel.lockboxNote}</aside>${accessMarkup}${privateBookingMarkup}<footer><a href="${bookedHotel.bookingUrl}" target="_blank" rel="noopener">Agoda 숙소 정보 ↗</a></footer>`;
    }
    document.dispatchEvent(new CustomEvent('osaka:planner-render', { detail: { area: 'hotels' } }));
  }

  function ensureStayMap() {
    const canvas = document.querySelector('#stay-map-v21');
    const status = document.querySelector('#stay-map-status-v21');
    const bookedHotel = HOTELS.find(hotel => hotel.booked) || HOTELS[0];
    if (!canvas || !status || !bookedHotel || !Array.isArray(bookedHotel.coords)) return;
    if (!window.L) {
      status.textContent = '지도를 불러오지 못했습니다.';
      return;
    }
    const coords = bookedHotel.coords.map(Number);
    if (!stayMap) {
      stayMap = L.map(canvas, { zoomControl: true, keyboard: true, scrollWheelZoom: false, preferCanvas: true }).setView(coords, 17);
      const tiles = L.tileLayer(DATA.map.tileURL, { attribution: DATA.map.attribution, maxZoom: 19, crossOrigin: true }).addTo(stayMap);
      stayMapMarker = L.circleMarker(coords, { radius: 11, color: '#fff', weight: 3, fillColor: '#ef4a3b', fillOpacity: .96 }).addTo(stayMap);
      stayMapMarker.bindTooltip(bookedHotel.name, { permanent: true, direction: 'top', offset: [0, -10], className: 'stay-map-label-v21' });
      L.circle(coords, { radius: 90, color: '#ef4a3b', weight: 1, fillColor: '#ef4a3b', fillOpacity: .08 }).addTo(stayMap);
      tiles.on('load', () => { status.textContent = `드래그·+/−로 확대 · z${stayMap.getZoom()}`; });
      tiles.on('tileerror', () => { status.textContent = '지도 타일을 불러오지 못했습니다.'; });
      stayMap.on('moveend zoomend', () => { status.textContent = `드래그·+/−로 확대 · z${stayMap.getZoom()}`; });
    } else {
      stayMap.setView(coords, stayMap.getZoom(), { animate: false });
      stayMapMarker?.setLatLng(coords);
    }
    setTimeout(() => {
      stayMap?.invalidateSize();
      status.textContent = `드래그·+/−로 확대 · z${stayMap.getZoom()}`;
    }, 100);
  }

  function renderRestaurants() {
    const text = document.querySelector('#restaurant-text-v3').value.trim().toLowerCase();
    const area = document.querySelector('#restaurant-area-v3').value;
    const group = document.querySelector('#restaurant-genre-v3').value;
    const type = document.querySelector('#restaurant-type-v3').value;
    const sort = document.querySelector('#restaurant-sort-v3').value;
    const filtered = restaurants.filter(item => {
      const haystack = `${item.name} ${item.jp} ${item.areaLabel} ${foodGroups[item.group]} ${item.genreLabel} ${item.menu} ${item.note}`.toLowerCase();
      return (!text || haystack.includes(text)) && (area === 'all' || item.area === area) && (group === 'all' || item.group === group) && (type === 'all' || item.genreLabel === type);
    }).sort((a, b) => {
      if (sort === 'price') return a.price - b.price;
      if (sort === 'reviews') return (b.reviews ?? -1) - (a.reviews ?? -1);
      return (b.rating ?? -1) - (a.rating ?? -1);
    });
    const pages = Math.max(1, Math.ceil(filtered.length / restaurantUi.pageSize));
    restaurantUi.page = Math.min(restaurantUi.page, pages);
    const visible = filtered.slice((restaurantUi.page - 1) * restaurantUi.pageSize, restaurantUi.page * restaurantUi.pageSize);
    renderFoodChips('restaurant-group-chips-v3', group, 'search');
    document.querySelector('#restaurant-results-v3').innerHTML = visible.length ? visible.map(restaurantCard).join('') : '<p class="query-feedback-v3">조건에 맞는 가게가 없습니다.</p>';
    renderPager('restaurant-pager-v3', restaurantUi.page, pages, filtered.length, 'restaurant-page');
    document.dispatchEvent(new CustomEvent('osaka:planner-render', { detail: { area: 'restaurants' } }));
  }

  function syncFoodTypeOptions(reset = false) {
    const select = document.querySelector('#restaurant-type-v3');
    const group = document.querySelector('#restaurant-genre-v3').value;
    const current = reset ? 'all' : select.value;
    const types = [...new Set(restaurants.filter(item => group === 'all' || item.group === group).map(item => item.genreLabel))].sort((a, b) => a.localeCompare(b, 'ko'));
    select.innerHTML = `<option value="all">전체 세부 (${types.length})</option>${types.map(type => `<option value="${type}">${type}</option>`).join('')}`;
    select.value = types.includes(current) ? current : 'all';
  }

  function renderFoodChips(id, active, mode) {
    document.querySelector(`#${id}`).innerHTML = Object.entries(foodGroups).map(([key, label]) => `<button type="button" data-food-group-${mode}="${key}" aria-pressed="${key === active}">${label}</button>`).join('');
  }

  function renderPager(id, page, pages, count, attr) {
    const pageButtons = Array.from({ length: pages }, (_, index) => index + 1).map(number => `<button type="button" data-${attr}="${number}" aria-current="${number === page ? 'page' : 'false'}">${number}</button>`).join('');
    document.querySelector(`#${id}`).innerHTML = `<span>${count}곳 · ${page}/${pages}</span><div>${pageButtons}</div>`;
  }

  function restaurantCard(item) {
    const score = Number.isFinite(item.rating) ? `<span class="score-v3"><strong>${item.rating.toFixed(2)}</strong><small>TABELOG</small></span>` : '<span class="score-v3 is-unrated"><strong>확인</strong><small>LINK</small></span>';
    const review = Number.isFinite(item.reviews) ? `리뷰 ${item.reviews.toLocaleString('ko-KR')}개 · ` : '';
    const locationNote = item.precision === 'area' ? '지역 마커 · 정확한 위치는 Google 지도' : '정확한 위치는 Google 지도에서 재확인';
    const photo = venuePhoto(item, 'restaurant');
    return `<article class="restaurant-card-v3">${photo}<div class="restaurant-body-v3">
      <div class="restaurant-top-v3"><div><span class="food-group-tag-v3">${foodGroups[item.group]}</span><h3>${item.name}</h3><small>${item.jp} · ${item.areaLabel} · ${item.genreLabel}</small></div>${score}</div>
      <p class="restaurant-meta-v3">${review}1인 약 ${yen(item.price)} · ${item.duration}분<br>${locationNote}</p><p class="menu-v3"><strong>대표 메뉴</strong> ${item.menu}</p><p class="review-note-v3">${item.note}</p>
      <div class="restaurant-actions-v3"><a href="${item.tabelog}" target="_blank" rel="noopener">리뷰·평점 ↗</a><a href="${item.menuUrl}" target="_blank" rel="noopener">메뉴 ↗</a><a href="${mapSearch(item.name)}" target="_blank" rel="noopener">지도 ↗</a>${dayButtons(item.id)}</div><div data-vnext-vote="${item.id}" data-vnext-kind="food"></div>
    </div></article>`;
  }

  function dayButtons(id) {
    return `<button class="add-day-v3 is-wishlist" type="button" data-add-wishlist="${id}">저장</button>${DAYS.map(day => `<button class="add-day-v3" type="button" data-add-day="${day}" data-add-id="${id}">${dayNames[day].slice(0,1)}요일</button>`).join('')}`;
  }

  function renderQuickCandidates() {
    const candidates = {
      sat: ['ajinoya', 'fukutaro', 'dotonbori', 'wanaka', 'uranamba-v3'],
      sun: ['castle', 'harukoma', 'lucua', 'sky', 'shinsekai', 'kaiyukan', 'usj'],
      mon: ['yasaka', 'marufuku', 'kuromon', 'doguya', 'denden', 'rikuro']
    };
    DAYS.forEach(day => {
      document.querySelector(`#day-candidates-${day}`).innerHTML = candidates[day].map(id => `<button type="button" class="quick-candidate-v3" data-add-day="${day}" data-add-id="${id}">+ ${allItems.get(id).name}</button>`).join('');
    });
  }

  function customKindLabel(kind) {
    return { place: '일정 장소', restaurant: '음식점' }[kind] || '직접 추가';
  }

  function renderCustomEntries() {
    const target = document.querySelector('#custom-entry-list-v10');
    const count = document.querySelector('#custom-entry-count-v10');
    if (count) count.textContent = `내 추가 ${state.customItems.length}개`;
    if (!target) return;
    target.innerHTML = state.customItems.length ? state.customItems.map(entry => {
      const location = entry.coords ? `${entry.coords[0].toFixed(5)}, ${entry.coords[1].toFixed(5)}` : '지도 위치 미지정';
      return `<article class="custom-card-v10" data-custom-card-v10="${entry.id}"><header><div><span>${customKindLabel(entry.kind)} · ${entry.area}</span><h4>${entry.name}</h4></div></header><p>${entry.detail}</p><p>${entry.price ? `${yen(entry.price)} · ` : ''}${entry.duration}분 · ${location}</p><footer>${dayButtons(entry.id)}${entry.url ? `<a href="${entry.url}" target="_blank" rel="noopener">링크 ↗</a>` : ''}<button class="custom-delete-v10" type="button" data-custom-delete-v10="${entry.id}">삭제</button></footer></article>`;
    }).join('') : '<p class="custom-empty-v10">아직 직접 추가한 항목이 없습니다.</p>';
  }

  function setCustomLocation(coords) {
    customLocationCoords = coords;
    const status = document.querySelector('#custom-location-status-v10');
    if (!coords) {
      status.textContent = '지도를 눌러 위치를 지정하세요. 위치 없이도 등록할 수 있습니다.';
      if (customLocationMarker && customLocationMap) customLocationMap.removeLayer(customLocationMarker);
      customLocationMarker = null;
      return;
    }
    status.textContent = `선택 위치 · ${coords[0].toFixed(5)}, ${coords[1].toFixed(5)}`;
    if (customLocationMarker) customLocationMarker.setLatLng(coords);
    else customLocationMarker = L.marker(coords).addTo(customLocationMap);
  }

  function ensureCustomLocationMap() {
    if (!window.L) {
      document.querySelector('#custom-location-status-v10').textContent = '지도를 불러오지 못했습니다. 위치 없이 등록할 수 있습니다.';
      return;
    }
    if (customLocationMap) {
      customLocationMap.invalidateSize();
      return;
    }
    customLocationMap = L.map('custom-location-map-v10', { zoomControl: true }).setView([34.6750, 135.5010], 12);
    L.tileLayer(DATA.map.tileURL, { attribution: DATA.map.attribution, maxZoom: 19 }).addTo(customLocationMap);
    customLocationMap.on('click', event => setCustomLocation([Number(event.latlng.lat.toFixed(6)), Number(event.latlng.lng.toFixed(6))]));
  }

  function updateCustomKindForm(kind = document.querySelector('#custom-kind-v10').value) {
    document.querySelector('#custom-day-row-v10').hidden = false;
    document.querySelector('#custom-duration-v10').disabled = false;
    document.querySelector('#custom-price-unit-v10').textContent = '¥';
    document.querySelector('#custom-detail-v10').placeholder = kind === 'restaurant' ? '대표 메뉴, 음식 종류, 왜 가는지' : '무엇을 하는 곳인지, 왜 가는지';
  }

  function updateCustomGoogleSearch() {
    const link = document.querySelector('#custom-google-search-v23');
    if (!link) return;
    const name = document.querySelector('#custom-name-v10')?.value.trim() || '';
    const area = document.querySelector('#custom-area-v10')?.value.trim() || '';
    const query = [name, area].filter(Boolean).join(' ');
    link.href = query ? mapSearch(query) : 'https://www.google.com/maps/search/?api=1&query=Osaka';
    link.textContent = name ? `${name} · Google 지도에서 찾기 ↗` : 'Google 지도에서 장소 찾기 ↗';
  }

  function openCustomEntryDialog(kind = 'place', day = '') {
    const dialog = document.querySelector('#custom-entry-dialog-v10');
    document.querySelector('#custom-kind-v10').value = ['place', 'restaurant'].includes(kind) ? kind : 'place';
    document.querySelector('#custom-day-v10').value = DAYS.includes(day) ? day : '';
    document.querySelector('#custom-priority-v25').value = 'optional';
    updateCustomKindForm();
    updateCustomGoogleSearch();
    if (!dialog.open) dialog.showModal();
    window.setTimeout(() => ensureCustomLocationMap(), 80);
  }

  function removeCustomEntry(id) {
    const entry = state.customItems.find(item => item.id === id);
    if (!entry || !window.confirm(`${entry.name}을 내 목록에서 삭제할까요? 다른 사람의 목록에는 영향이 없습니다.`)) return;
    state.customItems = state.customItems.filter(item => item.id !== id);
    state.wishlist = state.wishlist.filter(itemId => itemId !== id);
    state.mustVisit = state.mustVisit.filter(itemId => itemId !== id);
    delete state.mealSlots[id];
    DAYS.forEach(day => { state.plans[day] = state.plans[day].filter(itemId => itemId !== id); });
    state.variants.forEach(variant => { DAYS.forEach(day => { variant.plans[day] = variant.plans[day].filter(itemId => itemId !== id); }); });
    Object.keys(state.transit).forEach(key => { if (key.split(':').includes(id)) delete state.transit[key]; });
    Object.keys(state.itemStarts).forEach(key => { if (key.endsWith(`:${id}`)) delete state.itemStarts[key]; });
    Object.keys(state.itemDurations).forEach(key => { if (key.endsWith(`:${id}`)) delete state.itemDurations[key]; });
    refreshCustomCollections();
    saveState();
    syncFoodTypeOptions();
    renderRestaurants();
    renderHotels(true);
    renderCustomEntries();
    renderAllPlans();
    renderMap();
    flashMessage(`${entry.name} 삭제`);
  }

  function createCustomEntry(form) {
    const formData = new FormData(form);
    const kind = formData.get('kind');
    const entry = normalizeCustomItem({
      id: `custom-${window.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`}`,
      kind,
      name: formData.get('name'),
      area: formData.get('area'),
      detail: formData.get('detail'),
      duration: formData.get('duration'),
      price: formData.get('price'),
      url: formData.get('url'),
      coords: customLocationCoords,
      createdAt: new Date().toISOString()
    });
    if (!entry) throw new Error('invalid_custom_entry');
    state.customItems.push(entry);
    refreshCustomCollections();
    const day = formData.get('day');
    state.wishlist.push(entry.id);
    if (formData.get('priority') === 'must') state.mustVisit.push(entry.id);
    if (DAYS.includes(day)) {
      state.plans[day].push(entry.id);
      state.mapDay = day;
    }
    saveState();
    return entry;
  }

  function renderCatalogs() {
    renderGroupedCatalog('attraction', attractionItems, V5.attractionGroups || { all: '전체' }, 'attraction-catalog-v3', 'attraction-chips-v5', 'attraction-pager-v5');
    renderGroupedCatalog('goods', goodsItems, goodsGroups, 'goods-catalog-v3', 'goods-chips-v5', 'goods-pager-v5');
    renderGroupedCatalog('nightlife', nightlifeItems, nightlifeGroups, 'nightlife-catalog-v3', 'nightlife-chips-v5', 'nightlife-pager-v5');
  }

  function renderGroupedCatalog(kind, items, groups, gridId, chipsId, pagerId) {
    const ui = catalogUi[kind];
    const filtered = items.filter(item => ui.group === 'all' || item.group === ui.group);
    const pages = Math.max(1, Math.ceil(filtered.length / ui.pageSize));
    ui.page = Math.min(ui.page, pages);
    const visible = filtered.slice((ui.page - 1) * ui.pageSize, ui.page * ui.pageSize);
    document.querySelector(`#${chipsId}`).innerHTML = Object.entries(groups).map(([key, label]) => `<button type="button" data-catalog-kind="${kind}" data-catalog-group-v5="${key}" aria-pressed="${key === ui.group}">${label}</button>`).join('');
    document.querySelector(`#${gridId}`).innerHTML = visible.map(catalogCard).join('');
    const pager = document.querySelector(`#${pagerId}`);
    const buttons = Array.from({ length: pages }, (_, index) => index + 1).map(number => `<button type="button" data-catalog-kind="${kind}" data-catalog-page-v5="${number}" aria-current="${number === ui.page ? 'page' : 'false'}">${number}</button>`).join('');
    pager.innerHTML = `<span>${filtered.length}곳 · ${ui.page}/${pages}</span><div>${buttons}</div>`;
    document.dispatchEvent(new CustomEvent('osaka:planner-render', { detail: { area: kind } }));
  }

  function catalogCard(item) {
    const rating = Number.isFinite(item.rating) ? `<span>타베로그 ${item.rating.toFixed(2)} · ${item.reviews.toLocaleString('ko-KR')}리뷰</span>` : (item.category === 'food' ? '<span>평점·리뷰는 링크에서 확인</span>' : '');
    const links = item.tabelog ? `<a href="${item.tabelog}" target="_blank" rel="noopener">리뷰 ↗</a><a href="${item.menuUrl}" target="_blank" rel="noopener">메뉴 ↗</a>` : `<a href="${item.official}" target="_blank" rel="noopener">공식 정보 ↗</a>`;
    const typeClass = item.chanceType ? ` is-${item.chanceType}-v7` : '';
    const age = item.adultOnly ? `${item.ageLabel || '19+'} · ` : '';
    const facts = item.facts.map(fact => `<span>${fact}</span>`).join('');
    return `<article class="catalog-card-v3${item.adultOnly ? ' is-adult-v5' : ''}${typeClass}">${venuePhoto(item, 'catalog')}<div class="catalog-body-v3"><span class="catalog-kicker-v3">${age}${item.label} · ${item.jp || ''}</span><h3>${item.name}</h3>${item.address ? `<p class="catalog-address-v7">${item.address}</p>` : ''}<p>${item.description}</p>${item.whyGo ? `<p class="why-go-v5"><strong>왜 가나</strong>${item.whyGo}</p>` : ''}${item.caution ? `<p class="catalog-caution-v7">확인 · ${item.caution}</p>` : ''}${item.risk ? `<p class="nightlife-risk-v3">주의 · ${item.risk}</p>` : ''}<div class="catalog-facts-v3"><span>${item.duration}분</span><span>${item.priceText}</span>${item.best ? `<span>${item.best}</span>` : ''}${facts}${rating}</div><div class="catalog-actions-v3">${links}<a href="${item.map || mapSearch(item.name)}" target="_blank" rel="noopener">지도·장소 사진 ↗</a>${dayButtons(item.id)}</div><div data-vnext-vote="${item.id}" data-vnext-kind="${item.category}"></div></div></article>`;
  }

  function venuePhoto(item, mode) {
    const outer = mode === 'restaurant' ? 'restaurant-photo-v4' : 'catalog-photo-v4';
    if (item.verifiedPhoto && item.image) {
      const credit = item.photoSource ? `<a class="food-photo-credit-v4${mode === 'catalog' ? ' is-catalog' : ''}" href="${item.photoSource[1]}" target="_blank" rel="noopener">${item.photoSource[0]} · ${item.photoSource[2]} ↗</a>` : '<span class="verified-photo-v5">장소 확인 사진</span>';
      const fallback = item.photoSource?.[1] ? `https://s.wordpress.com/mshots/v1/${encodeURIComponent(item.photoSource[1])}?w=800&h=520` : '';
      return `<div class="${outer}${item.photoKind === 'page-preview' ? ' is-page-preview-v13' : ''}"><img src="${item.image}" alt="${item.name} 대표 이미지" loading="lazy" decoding="async" referrerpolicy="no-referrer"${fallback ? ` data-photo-fallback="${fallback}"` : ''}>${credit}</div>`;
    }
    return `<a class="${outer} venue-photo-missing-v5" href="${item.map || mapSearch(item.name)}" target="_blank" rel="noopener"><strong>${item.jp || item.name}</strong><span>Google 지도에서 이 장소의 최신 사진 보기 ↗</span><small>다른 가게 사진으로 대체하지 않음</small></a>`;
  }

  document.addEventListener('error', event => {
    const image = event.target;
    if (!(image instanceof HTMLImageElement) || !image.dataset.photoFallback || image.dataset.fallbackUsed === 'true') return;
    image.dataset.fallbackUsed = 'true';
    image.src = image.dataset.photoFallback;
  }, true);

  function addToWishlist(id) {
    if (!allItems.has(id)) return false;
    if (state.wishlist.includes(id)) {
      flashMessage(`${allItems.get(id).name}은 이미 가고 싶은 곳에 있습니다.`);
      return false;
    }
    if (state.wishlist.length >= 160) {
      flashMessage('가고 싶은 곳은 최대 160곳입니다. 일부를 삭제한 뒤 추가하세요.');
      return false;
    }
    state.wishlist.push(id);
    saveState();
    flashMessage(`${allItems.get(id).name} 저장`);
    return true;
  }

  function removeFromWishlist(id, { silent = false } = {}) {
    const scheduledDay = DAYS.find(day => state.plans[day].includes(id));
    if (scheduledDay) {
      if (!silent) flashMessage(`${dayNames[scheduledDay]} 일정에 있는 장소입니다. 요일을 먼저 해제하세요.`);
      return false;
    }
    const index = state.wishlist.indexOf(id);
    if (index < 0) return false;
    state.wishlist.splice(index, 1);
    state.mustVisit = state.mustVisit.filter(itemId => itemId !== id);
    delete state.mealSlots[id];
    saveState();
    if (!silent) flashMessage(`${allItems.get(id)?.name || '장소'}을 가고 싶은 곳에서 삭제했습니다.`);
    return true;
  }

  function ensureWishlistItem(id) {
    if (!allItems.has(id) || state.wishlist.includes(id) || state.wishlist.length >= 160) return false;
    state.wishlist.push(id);
    return true;
  }

  function setWishlistPriority(id, priority) {
    if (!state.wishlist.includes(id) || !['must', 'optional'].includes(priority)) return false;
    const current = new Set(Array.isArray(state.mustVisit) ? state.mustVisit : []);
    const shouldBeMust = priority === 'must';
    if (shouldBeMust === current.has(id)) return false;
    if (shouldBeMust) current.add(id);
    else current.delete(id);
    state.mustVisit = state.wishlist.filter(itemId => current.has(itemId));
    saveState();
    flashMessage(`${allItems.get(id)?.name || '장소'} · ${shouldBeMust ? '필수' : '선택'}`);
    return true;
  }

  function setMealSlot(id, slot) {
    const item = allItems.get(id);
    if (!state.wishlist.includes(id) || item?.category !== 'food' || !['auto', 'breakfast', 'lunch', 'snack', 'dinner', 'late'].includes(slot)) return false;
    if (slot === 'auto') delete state.mealSlots[id];
    else state.mealSlots[id] = slot;
    saveState();
    flashMessage(`${item.name} · ${slot === 'auto' ? '식사 시간 자동 추천' : ({ breakfast: '아침', lunch: '점심', snack: '간식', dinner: '저녁', late: '야식' })[slot]}`);
    return true;
  }

  function clearPlanItem(day, id) {
    const index = state.plans[day].indexOf(id);
    if (index < 0) return null;
    const duration = state.itemDurations[planItemKey(day, id)];
    state.plans[day].splice(index, 1);
    delete state.itemStarts[planItemKey(day, id)];
    delete state.itemDurations[planItemKey(day, id)];
    delete state.itemProgress[`${day}:${id}`];
    Object.keys(state.transit).forEach(key => {
      const parts = key.split(':');
      if (parts[0] === day && parts.includes(id)) delete state.transit[key];
    });
    pruneTransitForDay(day);
    return { index, duration };
  }

  function pruneTransitForDay(day) {
    const validPairs = new Set(state.plans[day].slice(0, -1).map((id, index) => transitKey(day, id, state.plans[day][index + 1])));
    Object.keys(state.transit).forEach(key => { if (key.startsWith(`${day}:`) && !validPairs.has(key)) delete state.transit[key]; });
  }

  function movePlanItem(from, to, id, targetId = '') {
    if (!allItems.has(id) || ![...DAYS, 'wishlist'].includes(from) || ![...DAYS, 'wishlist'].includes(to)) return false;
    const item = allItems.get(id);
    if (DAYS.includes(to) && Array.isArray(item.validDays) && !item.validDays.includes(to)) {
      flashMessage(`${item.name}은 ${dayNames[to]}에 열리지 않습니다.`);
      return false;
    }
    if (from === to) {
      if (!DAYS.includes(from) || !targetId || targetId === id) return false;
      const plan = state.plans[from];
      const fromIndex = plan.indexOf(id);
      const targetIndex = plan.indexOf(targetId);
      if (fromIndex < 0 || targetIndex < 0) return false;
      plan.splice(targetIndex, 0, plan.splice(fromIndex, 1)[0]);
      pruneTransitForDay(from);
      saveState();
      renderPlan(from);
      if (state.mapDay === from) renderMap();
      return true;
    }
    if (from === 'wishlist' && DAYS.includes(to)) {
      const assignedDay = DAYS.find(day => state.plans[day].includes(id));
      if (assignedDay && assignedDay !== to) return movePlanItem(assignedDay, to, id, targetId);
    }
    if (DAYS.includes(to) && state.plans[to].includes(id)) {
      flashMessage(`${item.name}은 이미 ${dayNames[to]}에 있습니다.`);
      return false;
    }

    let moved = { duration: null };
    if (from === 'wishlist') {
      if (!state.wishlist.includes(id)) return false;
    } else {
      moved = clearPlanItem(from, id) || moved;
    }

    if (to === 'wishlist') {
      ensureWishlistItem(id);
    } else {
      ensureWishlistItem(id);
      const plan = state.plans[to];
      const targetIndex = targetId ? plan.indexOf(targetId) : -1;
      plan.splice(targetIndex >= 0 ? targetIndex : plan.length, 0, id);
      if (moved.duration) state.itemDurations[planItemKey(to, id)] = moved.duration;
      const suggestedStart = item.suggestedStarts?.[to] || item.suggestedStart;
      if (suggestedStart && validClock(suggestedStart)) state.itemStarts[planItemKey(to, id)] = suggestedStart;
      pruneTransitForDay(to);
      state.mapDay = to;
      document.dispatchEvent(new CustomEvent('osaka:item-added', { detail: { day: to, id, item, state } }));
    }

    saveState();
    renderAllPlans();
    renderMap();
    syncMapTabs();
    flashMessage(to === 'wishlist' ? `${item.name} · 요일 배정 해제` : `${item.name} → ${dayNames[to]}`);
    return true;
  }

  function toggleDayAssignment(day, id) {
    if (!DAYS.includes(day) || !allItems.has(id)) return false;
    const currentDay = DAYS.find(candidate => state.plans[candidate].includes(id));
    if (currentDay === day) return movePlanItem(day, 'wishlist', id);
    if (currentDay) return movePlanItem(currentDay, day, id);
    return addToDay(day, id);
  }

  function replaceWithAutoRoute(route) {
    if (!route?.days || DAYS.some(day => !Array.isArray(route.days[day]))) return { applied: false, placed: 0, filled: 0, unplaced: 0 };
    const currentMust = [...new Set(state.mustVisit.filter(id => state.wishlist.includes(id) && allItems.has(id)))];
    const routed = [...new Set(DAYS.flatMap(day => route.days[day]))];
    const unrouted = [...new Set((route.unplaced || []).map(entry => entry?.id).filter(Boolean))];
    const suggested = [...new Set(Array.isArray(route.suggestedIds) ? route.suggestedIds : [])];
    const routedMust = routed.filter(id => currentMust.includes(id));
    const coveredMust = new Set([...routedMust, ...unrouted.filter(id => currentMust.includes(id))]);
    const validCoverage = currentMust.length === coveredMust.size && currentMust.every(id => coveredMust.has(id));
    const validSuggestions = routed.filter(id => !currentMust.includes(id)).every(id => suggested.includes(id));
    const hasDuplicates = DAYS.flatMap(day => route.days[day]).length !== routed.length;
    const validDays = DAYS.every(day => route.days[day].every(id => {
      const item = allItems.get(id);
      return item && (!Array.isArray(item.validDays) || item.validDays.includes(day));
    }));
    const newWishlistItems = suggested.filter(id => routed.includes(id) && !state.wishlist.includes(id));
    if (!currentMust.length || !validCoverage || !validSuggestions || hasDuplicates || !validDays || state.wishlist.length + newWishlistItems.length > 160) {
      flashMessage('필수 장소가 바뀌었습니다. 자동 루트를 다시 계산하세요.');
      return { applied: false, placed: 0, filled: 0, unplaced: unrouted.length };
    }

    const savedDurations = {};
    DAYS.forEach(day => state.plans[day].forEach(id => {
      const value = Number(state.itemDurations[planItemKey(day, id)]);
      if (Number.isFinite(value) && value >= 15 && value <= 480) savedDurations[id] = Math.round(value);
    }));
    state.transit = {};
    state.itemStarts = {};
    state.itemDurations = {};
    state.itemProgress = {};
    newWishlistItems.forEach(id => ensureWishlistItem(id));
    DAYS.forEach(day => {
      state.plans[day] = [...route.days[day]];
      state.plans[day].forEach(id => {
        const item = allItems.get(id);
        if (savedDurations[id]) state.itemDurations[planItemKey(day, id)] = savedDurations[id];
        const reservation = state.reservations[id];
        const routeEntry = route.metrics?.[day]?.entries?.find(entry => entry.id === id);
        if (reservation?.status === 'booked' && validClock(reservation.time)) state.itemStarts[planItemKey(day, id)] = reservation.time;
        else if (routeEntry?.mealSlot) state.itemStarts[planItemKey(day, id)] = minutesToTime(routeEntry.start);
        if (routeEntry?.mealSlot && item?.category === 'food') state.mealSlots[id] = routeEntry.mealSlot;
        document.dispatchEvent(new CustomEvent('osaka:item-added', { detail: { day, id, item, state } }));
      });
    });
    state.mapDay = DAYS.find(day => state.plans[day].length) || 'sat';
    saveState();
    renderAllPlans();
    renderMap();
    syncMapTabs();
    const filled = routed.filter(id => suggested.includes(id)).length;
    flashMessage(`필수 ${routedMust.length}곳 자동 배치 · 동선 보강 ${filled}곳${unrouted.length ? ` · ${unrouted.length}곳 확인 필요` : ''}`);
    return { applied: true, placed: routedMust.length, filled, unplaced: unrouted.length };
  }

  function addToDay(day, id) {
    if (!DAYS.includes(day) || !allItems.has(id)) return false;
    const item = allItems.get(id);
    if (Array.isArray(item.validDays) && !item.validDays.includes(day)) {
      flashMessage(`${item.name}은 ${dayNames[day]}에 열리지 않습니다.`);
      return false;
    }
    const currentDay = DAYS.find(candidate => state.plans[candidate].includes(id));
    if (currentDay) {
      if (currentDay === day) flashMessage(`${allItems.get(id).name}은 이미 ${dayNames[day]}에 있습니다.`);
      else movePlanItem(currentDay, day, id);
      return currentDay !== day;
    }
    const crossesMondayCutoff = day === 'mon' && planEndMinutes(day, [...state.plans[day], id]) > deadlines.mon;
    ensureWishlistItem(id);
    state.plans[day].push(id);
    const suggestedStart = item.suggestedStarts?.[day] || item.suggestedStart;
    if (suggestedStart && validClock(suggestedStart)) state.itemStarts[planItemKey(day, id)] = suggestedStart;
    state.mapDay = day;
    document.dispatchEvent(new CustomEvent('osaka:item-added', { detail: { day, id, item, state } }));
    saveState();
    renderAllPlans();
    renderMap();
    syncMapTabs();
    flashMessage(crossesMondayCutoff ? `${allItems.get(id).name} 추가 · 13:00 오사카 출발 안전선을 확인하세요.` : `${allItems.get(id).name} → ${dayNames[day]} 추가`);
    return true;
  }

  function renderAllPlans() { DAYS.forEach(renderPlan); }

  function renderPlan(day) {
    const list = document.querySelector(`#plan-list-${day}`);
    let clock = timeToMinutes(state.starts[day]);
    let overlaps = 0;
    list.innerHTML = state.plans[day].map((id, index) => {
      const item = allItems.get(id);
      const key = planItemKey(day, id);
      const automaticStart = clock;
      const startOverride = state.itemStarts[key];
      const start = startOverride ? timeToMinutes(startOverride) : automaticStart;
      if (startOverride && start < automaticStart) overlaps += 1;
      const duration = planItemDuration(day, id);
      const nextId = state.plans[day][index + 1];
      const transit = nextId ? transitMinutes(day, id, nextId) : 0;
      const estimate = nextId ? suggestedTransit(id, nextId) : null;
      clock = start + duration + transit;
      const transitNote = estimate?.distance == null ? '지도 위치 미지정 · 이동시간을 직접 수정하세요' : `직선 약 ${estimate.distance.toFixed(1)}km · 거리 기반 제안값, 직접 수정 가능`;
      const transitEditor = nextId ? `<label class="transit-v3">다음 장소까지 <input type="number" min="5" max="180" step="5" value="${transit}" data-transit-day="${day}" data-transit-from="${id}" data-transit-to="${nextId}">분 <small>${transitNote}</small></label>` : '';
      const scheduleEditor = `<div class="plan-schedule-v12"><label>시작 <input type="time" value="${minutesToTime(start)}" data-plan-start-day="${day}" data-plan-start-id="${id}" draggable="false"></label><label>체류 <input type="number" min="15" max="480" step="15" value="${duration}" data-plan-duration-day="${day}" data-plan-duration-id="${id}" draggable="false">분</label><button type="button" class="plan-time-reset-v12" data-plan-start-reset="${id}" data-plan-day="${day}" ${startOverride ? '' : 'disabled'}>시작 시각 자동 계산</button></div>`;
      const moveOptions = [`<option value="${day}" selected>${dayNames[day]}</option>`, ...DAYS.filter(candidate => candidate !== day).map(candidate => `<option value="${candidate}">${dayNames[candidate]}</option>`), '<option value="wishlist">일정에서 빼기</option>'].join('');
      const priorityLabel = state.mustVisit.includes(id) ? '필수' : '선택';
      return `<li class="plan-item-v3${priorityLabel === '필수' ? ' is-must' : ''}" draggable="true" data-plan-item="${id}" data-plan-day="${day}"><span class="drag-v3" aria-hidden="true">⋮⋮</span><button type="button" class="plan-name-v3" data-open-place-v3="${id}"><strong>${item.name}</strong><small>${priorityLabel} · ${categoryLabels[item.category]} · ${startOverride ? '시작 고정' : '자동 연결'} · 가고 싶은 곳에 유지</small></button><span class="plan-item-actions-v3"><button type="button" data-plan-up="${index}" aria-label="위로">위</button><button type="button" data-plan-down="${index}" aria-label="아래로">아래</button><button type="button" data-plan-remove="${index}" aria-label="요일에서 빼기">빼기</button></span><label class="plan-move-v16">요일 변경<select data-plan-move-day="${day}" data-plan-move-id="${id}">${moveOptions}</select></label>${scheduleEditor}${transitEditor}<div class="vnext-plan-meta" data-vnext-plan-meta="${day}:${id}"></div></li>`;
    }).join('');
    list.querySelectorAll('[data-transit-day]').forEach(input => input.addEventListener('input', () => {
      const minutes = Number(input.value);
      if (!Number.isFinite(minutes) || minutes < 5 || minutes > 180) return;
      state.transit[transitKey(input.dataset.transitDay, input.dataset.transitFrom, input.dataset.transitTo)] = Math.round(minutes);
      saveState();
      window.clearTimeout(input.__renderTimer);
      input.__renderTimer = window.setTimeout(() => renderPlan(input.dataset.transitDay), 180);
    }));
    list.querySelectorAll('[data-plan-start-day]').forEach(input => input.addEventListener('change', () => {
      if (!validClock(input.value)) return;
      state.itemStarts[planItemKey(input.dataset.planStartDay, input.dataset.planStartId)] = input.value;
      saveState();
      renderPlan(input.dataset.planStartDay);
    }));
    list.querySelectorAll('[data-plan-duration-day]').forEach(input => input.addEventListener('change', () => {
      const minutes = Number(input.value);
      if (!Number.isFinite(minutes) || minutes < 15 || minutes > 480) return;
      state.itemDurations[planItemKey(input.dataset.planDurationDay, input.dataset.planDurationId)] = Math.round(minutes);
      saveState();
      renderPlan(input.dataset.planDurationDay);
    }));
    list.querySelectorAll('[data-plan-move-day]').forEach(select => select.addEventListener('change', () => {
      const from = select.dataset.planMoveDay;
      const to = select.value;
      if (to !== from) movePlanItem(from, to, select.dataset.planMoveId);
    }));
    const summary = document.querySelector(`#plan-summary-${day}`);
    const over = clock > deadlines[day];
    summary.classList.toggle('is-over', over || overlaps > 0);
    summary.textContent = state.plans[day].length ? `${state.plans[day].length}곳 · 종료 약 ${minutesToTime(clock)}${over ? ' · 안전선 초과' : ''}${overlaps ? ` · 시간 겹침 ${overlaps}곳` : ''}` : '아직 고른 곳이 없습니다.';
    document.dispatchEvent(new CustomEvent('osaka:planner-render', { detail: { area: 'plan', day } }));
  }

  function changePlan(day, index, action) {
    const plan = state.plans[day];
    if (action === 'remove') {
      ensureWishlistItem(plan[index]);
      clearPlanItem(day, plan[index]);
    }
    if (action === 'up' && index > 0) [plan[index - 1], plan[index]] = [plan[index], plan[index - 1]];
    if (action === 'down' && index < plan.length - 1) [plan[index + 1], plan[index]] = [plan[index], plan[index + 1]];
    pruneTransitForDay(day);
    saveState();
    renderPlan(day);
    if (state.mapDay === day) renderMap();
  }

  function initMap() {
    if (!window.L) {
      document.querySelector('#v3-map-status').textContent = '지도를 불러오지 못했습니다.';
      return;
    }
    map = L.map('route-map-v3', { zoomControl: true, keyboard: true }).setView([34.6765, 135.5015], 12);
    const tiles = L.tileLayer(DATA.map.tileURL, { attribution: DATA.map.attribution, maxZoom: 19, crossOrigin: true }).addTo(map);
    const updateMapStatus = () => {
      document.querySelector('#v3-map-status').textContent = `확대·이동 가능 · z${map.getZoom()}`;
    };
    tiles.on('load', updateMapStatus);
    tiles.on('tileerror', () => { document.querySelector('#v3-map-status').textContent = '지도를 불러오지 못했습니다.'; });
    map.on('moveend zoomend', updateMapStatus);
    setTimeout(() => { map.invalidateSize(); renderMap(); }, 180);
  }

  function updateQaReport() {
    if (!new URLSearchParams(location.search).has('qa-v3-report')) return;
    const root = document.documentElement;
    const overflowing = [...document.body.querySelectorAll('*')]
      .filter(element => {
        if (element.closest('.guide-index-v3')) return false;
        const rect = element.getBoundingClientRect();
        return rect.right > root.clientWidth + 1 || rect.left < -1;
      })
      .slice(0, 12)
      .map(element => element.id || element.className || element.tagName);
    root.dataset.v3Qa = JSON.stringify({
      width: root.clientWidth,
      scrollWidth: root.scrollWidth,
      overflow: Math.max(0, root.scrollWidth - root.clientWidth),
      overflowing,
      runtimeErrors: Number(document.body.dataset.runtimeErrors || 0),
      planner: window.OsakaPlannerV3?.validate?.() || null
    });
  }

  function renderMap() {
    if (!map) return;
    if (mapLayer) map.removeLayer(mapLayer);
    const group = L.layerGroup().addTo(map);
    mapLayer = group;
    const hotel = selectedHotel();
    const planIds = state.plans[state.mapDay];
    const ids = planIds.length ? planIds : [...allItems.keys()];
    const bounds = [];
    const orderedCoords = [];
    const hotelIcon = L.divIcon({ className: 'v3-div-icon is-hotel', html: '<span>H</span>', iconSize: [28,28], iconAnchor: [14,28] });
    if (hotel?.coords) {
      const hotelMarker = L.marker(hotel.coords, { icon: hotelIcon }).bindPopup(`<strong>${hotel.name}</strong><br>선택 숙소 기준점`).addTo(group);
      bounds.push(hotel.coords);
      selectedMarker = hotelMarker;
    }
    ids.forEach((id, index) => {
      const item = allItems.get(id);
      if (!item?.coords) return;
      const isCandidate = !planIds.length;
      const icon = L.divIcon({ className: `v3-div-icon${isCandidate ? ' is-candidate' : ''}`, html: `<span>${isCandidate ? '·' : index + 1}</span>`, iconSize: [28,28], iconAnchor: [14,28] });
      const precision = item.precision === 'area' ? '<br>지역 마커 · 정확한 위치는 Google 지도' : '';
      const marker = L.marker(item.coords, { icon }).bindPopup(`<strong>${item.name}</strong><br>${item.label} · ${item.duration}분${precision}<br><a href="${item.map || mapSearch(item.name)}" target="_blank" rel="noopener">실제 길찾기 ↗</a>`).addTo(group);
      marker.__v3Id = id;
      bounds.push(item.coords);
      if (!isCandidate) orderedCoords.push(item.coords);
    });
    if (orderedCoords.length > 1) L.polyline(orderedCoords, { color: '#bf2f25', weight: 4, opacity: .74, dashArray: '8 8' }).addTo(group);
    renderMapList(ids, !planIds.length);
    if (bounds.length) map.fitBounds(bounds, { padding: [34,34], maxZoom: planIds.length ? 14 : 12 });
  }

  function renderMapList(ids, candidates) {
    document.querySelector('#v3-map-count').textContent = candidates ? `전체 후보 ${ids.length}곳` : `${dayNames[state.mapDay]} ${ids.length}곳`;
    document.querySelector('#v3-map-list').innerHTML = ids.map((id, index) => `<li><button type="button" data-map-focus-v3="${id}"><b>${candidates ? '·' : String(index + 1).padStart(2, '0')}</b><span>${allItems.get(id)?.name || '삭제된 항목'}</span></button></li>`).join('');
  }

  function focusMapItem(id) {
    if (!map) return;
    const item = allItems.get(id);
    if (!item?.coords) return;
    map.flyTo(item.coords, 15, { duration: .7 });
    mapLayer.eachLayer(layer => { if (layer.__v3Id === id) layer.openPopup(); });
  }

  function syncMapTabs() {
    document.querySelectorAll('[data-v3-map-day]').forEach(button => button.setAttribute('aria-selected', String(button.dataset.v3MapDay === state.mapDay)));
  }

  function flashMessage(message) {
    const toast = document.querySelector('#toast');
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(flashMessage.timer);
    flashMessage.timer = setTimeout(() => toast.classList.remove('show'), 1800);
  }

  function showGuidePanel(id, options = {}) {
    id = normalizeGuidePanel(id);
    if (!guidePanels.includes(id)) return;
    activeGuidePanel = id;
    document.querySelectorAll('.mobile-dock [data-today-nav]').forEach(button => {
      if (button.dataset.todayNav === id) button.setAttribute('aria-current', 'page');
      else button.removeAttribute('aria-current');
    });
    guidePanels.forEach(panelId => { document.querySelector(`#${panelId}`).hidden = panelId !== id; });
    document.querySelectorAll('[data-guide-panel]').forEach(button => button.setAttribute('aria-selected', String(button.dataset.guidePanel === id)));
    const index = guidePanels.indexOf(id);
    document.querySelector('#guide-progress-v3').textContent = `${String(index + 1).padStart(2, '0')} / ${guidePanels.length}`;
    document.querySelector('#guide-prev-v3').disabled = index === 0;
    document.querySelector('#guide-next-v3').disabled = index === guidePanels.length - 1;
    syncGuideNavPosition(id);
    if (id === 'restaurant-search-v3') renderRestaurants();
    if (id === 'hotel-search-v3') setTimeout(ensureStayMap, 80);
    if (options.updateHash !== false) {
      const url = new URL(location.href);
      url.hash = id;
      history.replaceState(null, '', url);
    }
    if (options.focus) document.querySelector('#guide-v3').scrollIntoView({ behavior: 'smooth', block: 'start' });
    document.dispatchEvent(new CustomEvent('osaka:panel', { detail: { id } }));
    if (window.parent !== window) window.parent.postMessage({ type: 'osaka:panel', hash: `#${id}` }, location.origin);
    setTimeout(updateQaReport, 240);
  }

  function syncGuideNavPosition(id = activeGuidePanel) {
    const nav = document.querySelector('.guide-index-v3');
    const button = document.querySelector(`[data-guide-panel="${id}"]`);
    if (!nav || !button) return;
    nav.scrollTo({ left: Math.max(0, button.offsetLeft - (nav.clientWidth - button.offsetWidth) / 2), behavior: 'smooth' });
  }

  ['restaurant-text-v3', 'restaurant-area-v3', 'restaurant-type-v3', 'restaurant-sort-v3'].forEach(id => document.querySelector(`#${id}`).addEventListener(id === 'restaurant-text-v3' ? 'input' : 'change', () => { restaurantUi.page = 1; renderRestaurants(); }));
  document.querySelector('#restaurant-genre-v3').addEventListener('change', () => { syncFoodTypeOptions(true); restaurantUi.page = 1; renderRestaurants(); });

  document.querySelector('#guide-v3').addEventListener('click', event => {
    const bookingInput = () => document.querySelector('[data-private-booking-ref-v19]');
    const bookingStatus = () => document.querySelector('#private-booking-status-v19');
    const bookingReveal = event.target.closest('[data-private-booking-reveal-v19]');
    if (bookingReveal) {
      const input = bookingInput();
      if (!input?.value) { input?.focus(); flashMessage('예약번호를 먼저 입력하세요.'); return; }
      input.type = input.type === 'password' ? 'text' : 'password';
      bookingReveal.textContent = input.type === 'password' ? '보기' : '숨기기';
      return;
    }
    const bookingCopy = event.target.closest('[data-private-booking-copy-v19]');
    if (bookingCopy) {
      const value = bookingInput()?.value || '';
      if (!value) return;
      navigator.clipboard?.writeText(value).then(() => flashMessage('예약번호를 복사했습니다.')).catch(() => flashMessage('복사 권한을 확인하세요.'));
      return;
    }
    const bookingClear = event.target.closest('[data-private-booking-clear-v19]');
    if (bookingClear) {
      persistPrivateBookingRef('');
      const input = bookingInput();
      if (input) { input.value = ''; input.type = 'password'; }
      document.querySelector('[data-private-booking-copy-v19]')?.setAttribute('disabled', '');
      bookingClear.setAttribute('disabled', '');
      if (bookingStatus()) bookingStatus().textContent = '이 브라우저에서 예약번호를 지웠습니다.';
      return;
    }
    const panel = event.target.closest('[data-guide-panel]');
    if (panel) { showGuidePanel(panel.dataset.guidePanel, { focus: true }); return; }
    const tipGroup = event.target.closest('[data-tip-group]');
    if (tipGroup) {
      const group = tipGroup.dataset.tipGroup;
      document.querySelectorAll('[data-tip-group]').forEach(button => button.setAttribute('aria-pressed', String(button === tipGroup)));
      document.querySelectorAll('[data-tip-card]').forEach(card => {
        const visible = group === 'all' || card.dataset.tipCard === group;
        card.hidden = !visible;
        if (!visible) card.open = false;
      });
      return;
    }
    const searchGroup = event.target.closest('[data-food-group-search]');
    if (searchGroup) { document.querySelector('#restaurant-genre-v3').value = searchGroup.dataset.foodGroupSearch; syncFoodTypeOptions(true); restaurantUi.page = 1; renderRestaurants(); return; }
    const restaurantPage = event.target.closest('[data-restaurant-page]');
    if (restaurantPage) { restaurantUi.page = Number(restaurantPage.dataset.restaurantPage); renderRestaurants(); return; }
    const grouped = event.target.closest('[data-catalog-group-v5]');
    if (grouped) {
      const kind = grouped.dataset.catalogKind;
      catalogUi[kind].group = grouped.dataset.catalogGroupV5;
      catalogUi[kind].page = 1;
      renderCatalogs();
      return;
    }
    const groupedPage = event.target.closest('[data-catalog-page-v5]');
    if (groupedPage) {
      const kind = groupedPage.dataset.catalogKind;
      catalogUi[kind].page = Number(groupedPage.dataset.catalogPageV5);
      renderCatalogs();
      return;
    }
    const wishlist = event.target.closest('[data-add-wishlist]');
    if (wishlist) { addToWishlist(wishlist.dataset.addWishlist); return; }
    const add = event.target.closest('[data-add-day]');
    if (add) { addToDay(add.dataset.addDay, add.dataset.addId); return; }
    const focus = event.target.closest('[data-map-focus-v3]');
    if (focus) { focusMapItem(focus.dataset.mapFocusV3); return; }
    const open = event.target.closest('[data-open-place-v3]');
    if (open && CORE.places[open.dataset.openPlaceV3]) CORE.openPlace(open.dataset.openPlaceV3);
    else if (open) {
      const custom = state.customItems.find(item => item.id === open.dataset.openPlaceV3);
      if (custom) openCustomEntryDialog(custom.kind);
    }
  });

  document.querySelector('#guide-v3').addEventListener('input', async event => {
    if (!event.target.matches('[data-private-booking-ref-v19]')) return;
    const value = event.target.value.replace(/\D/g, '').slice(0, 16);
    if (event.target.value !== value) event.target.value = value;
    const stored = await persistPrivateBookingRef(value);
    document.querySelector('[data-private-booking-copy-v19]')?.toggleAttribute('disabled', !value);
    document.querySelector('[data-private-booking-clear-v19]')?.toggleAttribute('disabled', !value);
    const reveal = document.querySelector('[data-private-booking-reveal-v19]');
    if (reveal) reveal.textContent = value ? '보기' : '입력 후 보기';
    const status = document.querySelector('#private-booking-status-v19');
    if (status) status.textContent = value ? (stored ? '이 브라우저에만 저장했습니다. 서버로 전송하지 않습니다.' : '이 브라우저가 로컬 저장을 차단했습니다.') : '공용 일정·서버·Git·JSON 백업에는 포함되지 않습니다.';
  });

  document.querySelector('#guide-prev-v3').addEventListener('click', () => showGuidePanel(guidePanels[Math.max(0, guidePanels.indexOf(activeGuidePanel) - 1)], { focus: true }));
  document.querySelector('#guide-next-v3').addEventListener('click', () => showGuidePanel(guidePanels[Math.min(guidePanels.length - 1, guidePanels.indexOf(activeGuidePanel) + 1)], { focus: true }));

  document.addEventListener('click', event => {
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;
    const id = normalizeGuidePanel(link.getAttribute('href').slice(1));
    if (!guidePanels.includes(id)) return;
    event.preventDefault();
    showGuidePanel(id, { focus: true });
  });

  const mapDialog = document.querySelector('#map-workspace-v3');
  document.querySelector('#open-map-v3').addEventListener('click', () => {
    if (!mapDialog.open) mapDialog.showModal();
    setTimeout(() => { map?.invalidateSize(); renderMap(); }, 100);
  });
  document.querySelector('#close-map-v3').addEventListener('click', () => mapDialog.close());
  mapDialog.addEventListener('click', event => { if (event.target === mapDialog) mapDialog.close(); });
  mapDialog.addEventListener('close', () => syncGuideNavPosition());

  document.querySelectorAll('[data-custom-open]').forEach(button => button.addEventListener('click', () => openCustomEntryDialog(button.dataset.customOpen, button.dataset.customDay)));
  document.querySelector('#custom-kind-v10').addEventListener('change', event => updateCustomKindForm(event.target.value));
  ['custom-name-v10', 'custom-area-v10'].forEach(id => document.querySelector(`#${id}`).addEventListener('input', updateCustomGoogleSearch));
  document.querySelector('#custom-location-clear-v10').addEventListener('click', () => setCustomLocation(null));
  document.querySelector('#custom-entry-form-v10').addEventListener('submit', event => {
    event.preventDefault();
    try {
      const kind = document.querySelector('#custom-kind-v10').value;
      const entry = createCustomEntry(event.currentTarget);
      event.currentTarget.reset();
      document.querySelector('#custom-kind-v10').value = kind;
      document.querySelector('#custom-duration-v10').value = kind === 'restaurant' ? '60' : '90';
      document.querySelector('#custom-priority-v25').value = 'optional';
      updateCustomKindForm(kind);
      updateCustomGoogleSearch();
      setCustomLocation(null);
      syncFoodTypeOptions();
      renderRestaurants();
      renderHotels(true);
      renderCustomEntries();
      renderAllPlans();
      renderMap();
      flashMessage(state.wishlist.includes(entry.id) ? `${entry.name} → 가고 싶은 곳` : `${entry.name} 내 목록에 추가`);
    } catch {
      flashMessage('이름과 입력값을 다시 확인하세요.');
    }
  });
  document.querySelector('#custom-entry-list-v10').addEventListener('click', event => {
    const remove = event.target.closest('[data-custom-delete-v10]');
    if (remove) { removeCustomEntry(remove.dataset.customDeleteV10); return; }
    const add = event.target.closest('[data-add-day]');
    if (add) addToDay(add.dataset.addDay, add.dataset.addId);
  });

  document.querySelectorAll('.plan-list-v3').forEach(list => {
    list.addEventListener('click', event => {
      const item = event.target.closest('[data-plan-item]');
      if (!item) return;
      const day = item.dataset.planDay;
      const resetStart = event.target.closest('[data-plan-start-reset]');
      if (resetStart) {
        delete state.itemStarts[planItemKey(resetStart.dataset.planDay, resetStart.dataset.planStartReset)];
        saveState();
        renderPlan(resetStart.dataset.planDay);
        return;
      }
      if (event.target.closest('[data-plan-remove]')) changePlan(day, Number(event.target.closest('[data-plan-remove]').dataset.planRemove), 'remove');
      if (event.target.closest('[data-plan-up]')) changePlan(day, Number(event.target.closest('[data-plan-up]').dataset.planUp), 'up');
      if (event.target.closest('[data-plan-down]')) changePlan(day, Number(event.target.closest('[data-plan-down]').dataset.planDown), 'down');
    });
    list.addEventListener('dragstart', event => {
      const item = event.target.closest('[data-plan-item]');
      if (!item) return;
      dragged = { day: item.dataset.planDay, id: item.dataset.planItem };
      item.classList.add('is-dragging');
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('text/plain', item.dataset.planItem);
    });
    list.addEventListener('dragover', event => {
      if (!dragged) return;
      event.preventDefault();
      list.classList.add('is-drop-target');
    });
    list.addEventListener('dragleave', event => { if (!list.contains(event.relatedTarget)) list.classList.remove('is-drop-target'); });
    list.addEventListener('drop', event => {
      event.preventDefault();
      const target = event.target.closest('[data-plan-item]');
      const destination = list.id.replace('plan-list-', '');
      list.classList.remove('is-drop-target');
      if (!dragged || !DAYS.includes(destination)) return;
      movePlanItem(dragged.day, destination, dragged.id, target?.dataset.planItem || '');
    });
    list.addEventListener('dragend', event => {
      event.target.closest('[data-plan-item]')?.classList.remove('is-dragging');
      document.querySelectorAll('.is-drop-target').forEach(target => target.classList.remove('is-drop-target'));
      dragged = null;
    });
  });

  DAYS.forEach(day => document.querySelector(`#day-start-${day}`).addEventListener('change', event => {
    state.starts[day] = event.target.value;
    saveState();
    renderPlan(day);
  }));

  document.querySelector('#v3-map-tabs').addEventListener('click', event => {
    const day = event.target.closest('[data-v3-map-day]');
    if (day) { state.mapDay = day.dataset.v3MapDay; saveState(); syncMapTabs(); renderMap(); }
    if (event.target.closest('#v3-map-fit')) renderMap();
  });

  document.querySelector('#reset-planner-v3').addEventListener('click', () => {
    if (!window.confirm('토·일·월 선택 일정과 이동시간 수정값을 모두 지울까요?')) return;
    state.plans = { sat: [], sun: [], mon: [] };
    state.starts = { sat: '17:30', sun: '08:00', mon: '08:00' };
    state.transit = {};
    state.itemStarts = {};
    state.itemDurations = {};
    DAYS.forEach(day => { document.querySelector(`#day-start-${day}`).value = state.starts[day]; });
    saveState();
    renderAllPlans();
    renderMap();
    flashMessage('토·일·월 선택 일정을 모두 초기화했습니다.');
  });

  document.querySelectorAll('[data-check]').forEach(input => {
    const key = `osakaCheck:${input.dataset.check}`;
    input.checked = storageGet(key) === 'true';
    input.addEventListener('change', () => {
      document.querySelectorAll(`[data-check="${input.dataset.check}"]`).forEach(peer => { peer.checked = input.checked; });
      storageSet(key, String(input.checked));
    });
  });

  function renderDiscountSavings() {
    const prices = [...document.querySelectorAll('[data-discount-price]:checked')].map(input => Number(input.dataset.discountPrice) || 0);
    const regularPerPerson = prices.reduce((sum, price) => sum + price, 0);
    const passPerPerson = 3500;
    const partySize = 3;
    const difference = regularPerPerson - passPerPerson;
    const output = document.querySelector('#discount-output-v14');
    if (!output) return;
    if (!prices.length) {
      output.innerHTML = '<strong>갈 곳을 체크하세요</strong><span>선택한 시설의 일반 입장료와 1일 주유패스를 비교합니다.</span>';
      return;
    }
    if (difference > 0) {
      output.innerHTML = `<strong>주유패스가 최소 ${yen(difference * partySize)} 절약</strong><span>일반 입장료 ${yen(regularPerPerson * partySize)} → 3인 패스 ${yen(passPerPerson * partySize)} · 여기에 포함 노선 교통비 절약이 추가됩니다.</span>`;
      return;
    }
    output.innerHTML = `<strong>아직 ${yen(Math.abs(difference) * partySize)} 부족</strong><span>현재 선택만 보면 일반 입장료 ${yen(regularPerPerson * partySize)}가 더 낮습니다. 실제 Metro·사철 이동비와 e-Pass 포함 시설을 함께 비교하세요.</span>`;
  }

  document.querySelectorAll('[data-discount-price]').forEach(input => input.addEventListener('change', renderDiscountSavings));
  renderDiscountSavings();

  function renderBenefitGroupV15(group = 'all') {
    const cards = [...document.querySelectorAll('[data-benefit-v15]')];
    let visible = 0;
    cards.forEach(card => {
      const show = group === 'all' || card.dataset.benefitV15 === group;
      card.classList.toggle('is-hidden', !show);
      if (show) visible += 1;
    });
    document.querySelectorAll('[data-benefit-group-v15]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.benefitGroupV15 === group));
    });
    const count = document.querySelector('#benefit-count-v15');
    if (count) count.textContent = `${visible}개 우대 표시`;
  }

  document.querySelectorAll('[data-benefit-group-v15]').forEach(button => {
    button.addEventListener('click', () => renderBenefitGroupV15(button.dataset.benefitGroupV15));
  });
  renderBenefitGroupV15();

  function renderAirportDiscountV15() {
    const choice = document.querySelector('[name="airport-choice-v15"]:checked');
    const output = document.querySelector('#airport-output-v15');
    if (!choice || !output) return;
    const perPerson = Number(choice.dataset.airportPrice) || 0;
    output.innerHTML = `<strong>${choice.dataset.airportName} · 3명 편도 ${yen(perPerson * 3)}</strong><span>1인 ${yen(perPerson)} · ${choice.dataset.airportNote}</span>`;
  }

  document.querySelectorAll('[name="airport-choice-v15"]').forEach(input => input.addEventListener('change', renderAirportDiscountV15));
  renderAirportDiscountV15();

  window.OsakaPlannerV3 = {
    state,
    sharedSync,
    allItems,
    hotels: HOTELS,
    restaurants,
    attractionItems,
    goodsItems,
    nightlifeItems,
    addToDay,
    addToWishlist,
    removeFromWishlist,
    setWishlistPriority,
    setMealSlot,
    movePlanItem,
    toggleDayAssignment,
    replaceWithAutoRoute,
    saveState,
    pushSharedState,
    applySharedRecord,
    planEndMinutes,
    planItemDuration,
    suggestedTransit,
    selectedHotel,
    timeToMinutes,
    minutesToTime,
    renderAllPlans,
    renderHotels,
    renderRestaurants,
    renderCatalogs,
    renderCustomEntries,
    openCustomEntryDialog,
    refreshAll: () => {
      DAYS.forEach(day => { const input = document.querySelector(`#day-start-${day}`); if (input) input.value = state.starts[day]; });
      renderHotels(true); renderRestaurants(); renderCatalogs(); renderCustomEntries(); renderAllPlans(); syncMapTabs(); renderMap();
    },
    renderMap,
    showGuidePanel,
    foodGroups,
    validate: () => ({
      plansAreEditable: DAYS.every(day => Array.isArray(state.plans[day])),
      itemCount: allItems.size,
      restaurantCount: restaurants.length,
      hotelCount: HOTELS.length,
      customItemCount: state.customItems.length,
      mustVisitCount: state.mustVisit.length,
      mealSlotCount: Object.keys(state.mealSlots || {}).length,
      sharedReady: sharedSync.ready,
      missingCoordinates: [...allItems.values()].filter(item => !Array.isArray(item.coords)).map(item => item.id)
    })
  };

  async function bootPlanner() {
    await initializePrivateBookingRef();
    await initializeSharedState();
    DAYS.forEach(day => { document.querySelector(`#day-start-${day}`).value = state.starts[day]; });
    renderHotels(true);
    syncFoodTypeOptions();
    renderRestaurants();
    renderQuickCandidates();
    renderCatalogs();
    renderCustomEntries();
    renderAllPlans();
    syncMapTabs();
    initMap();
    showGuidePanel(activeGuidePanel, { updateHash: false });
    sharedSync.booted = true;
    setTimeout(updateQaReport, 900);
  }

  bootPlanner();
  window.addEventListener('online', () => { if (!sharedSync.ready) initializeSharedState(); });
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden' && sharedSync.dirty) pushSharedState({ keepalive: true });
  });
  window.addEventListener('resize', () => setTimeout(() => { syncGuideNavPosition(); stayMap?.invalidateSize(); updateQaReport(); }, 220));
})();
