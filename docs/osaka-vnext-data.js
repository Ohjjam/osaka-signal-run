(function () {
  'use strict';

  const checkedAt = '2026-08-26';
  const preview = url => `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=900&h=560`;

  window.OSAKA_VNEXT_DATA = {
    version: 17,
    checkedAt,
    trip: {
      partySize: 3,
      dates: { sat: '2026-09-05', sun: '2026-09-06', mon: '2026-09-07' },
      arrival: 'KIX 15:00',
      departure: 'KIX 18:00',
      mondayCityCutoff: '15:00'
    },
    events: [
      {
        id: 'event-orix-0906', name: '오릭스 버펄로스 vs 지바 롯데', jp: 'オリックス vs ロッテ',
        category: 'attraction', group: 'seasonal', label: '9/6 한정 · 프로야구', area: 'dome', areaLabel: '교세라돔·다이쇼',
        coords: [34.6692, 135.4760], validDays: ['sun'], suggestedDay: 'sun', suggestedStart: '13:00', start: '13:00', end: '17:00', duration: 240,
        price: null, priceText: '좌석별 · 공식 예매에서 확인', reservationPolicy: 'recommended', bookingUrl: 'https://www.buffaloes.co.jp/ticket/',
        official: 'https://www.kyoceradome-osaka.jp/schedule/?cat=all&monthId=9&yearId=2026',
        map: 'https://www.google.com/maps/search/?api=1&query=Kyocera+Dome+Osaka',
        description: '일요일 13:00 시작. 응원 문화와 돔 구장을 함께 경험하는 반나절 선택지.',
        whyGo: '관광지 한 곳보다 현지의 주말 분위기를 강하게 남길 수 있다. 토요일 경기는 14:00 시작이라 KIX 15:00 도착 조건상 불가능하다.',
        caution: '경기 종료 시각은 유동적이며 일요일 오후 중심가 일정과 겹친다.',
        replacement: '일요일 11:30~18:00 도심 일정', verifiedAt: checkedAt, sourceType: 'venue_schedule',
        preview: preview('https://www.kyoceradome-osaka.jp/schedule/?cat=all&monthId=9&yearId=2026')
      },
      {
        id: 'event-ghibli-atc', name: '지브리 파크 전시', jp: 'ジブリパーク展',
        category: 'attraction', group: 'seasonal', label: '시간제 입장 · 전시', area: 'bay', areaLabel: '오사카 난코 ATC',
        coords: [34.6385587, 135.4112779], validDays: ['sun', 'mon'], suggestedDay: 'sun', suggestedStart: '16:30', suggestedStarts: { sun: '16:30', mon: '09:00' }, start: '09:00', end: '19:00', lastEntry: '18:30', duration: 120,
        dayTimes: { sun: { open: '09:00', close: '19:00', lastEntry: '18:30' }, mon: { open: '09:00', close: '17:00', lastEntry: '16:30' } },
        price: 1900, priceText: '성인 ¥1,900', reservationPolicy: 'required', bookingUrl: 'https://ghiblipark-exhibition.jp/osaka/',
        official: 'https://osaka-info.jp/en/event/ghiblipark-osaka/',
        map: 'https://www.google.com/maps/search/?api=1&query=Osaka+Nanko+ATC+Gallery',
        description: '놀이와 체험을 중심으로 구성된 지브리 파크 전시. 9/6은 19:00까지 야간개장, 마지막 입장 18:30.',
        whyGo: '베이 지역에서 실내로 즐길 수 있어 비·폭염 대안으로 강하다.',
        caution: '30분 단위 시간 지정 예약 필수이며 현장 당일권을 판매하지 않는다. 월요일에 넣으면 12:15 이전 퇴장 권장.',
        replacement: '일요일 베이 3시간 또는 월요일 오전', verifiedAt: checkedAt, sourceType: 'official_tourism', indoor: true,
        preview: preview('https://osaka-info.jp/en/event/ghiblipark-osaka/')
      },
      {
        id: 'event-expo-summer-0906', name: '엑스포 여름축제 2026', jp: '万博夏まつり2026',
        category: 'attraction', group: 'seasonal', label: '9/6 한정 · 야간축제', area: 'north', areaLabel: '만박기념공원',
        coords: [34.809011, 135.529786], validDays: ['sun'], suggestedDay: 'sun', suggestedStart: '17:00', start: '17:00', end: '22:00', lastEntry: '21:30', duration: 240,
        price: 900, priceText: '전매 ¥900 · 당일 ¥950(공원 입장 포함)', reservationPolicy: 'recommended',
        official: 'https://osaka-info.jp/en/event/bampaku-natsumatsui2026/',
        bookingUrl: 'https://www.expo70-park.jp/event/76512/', map: 'https://www.google.com/maps/search/?api=1&query=Expo+70+Commemorative+Park',
        description: '태양의 탑 일루미네이션, 야시장·비어가든, 음악과 축제 코너를 17:00~22:00에 즐긴다.',
        whyGo: '오사카 중심가와 완전히 다른 규모와 쇼와·레이와 축제 분위기를 한 번에 본다.',
        caution: '중심가에서 멀고 귀가가 늦다. 야시장 그룹석은 3명부터 ¥2,000, 입장권 별도. 우천 진행, 악천후 취소 가능.',
        replacement: '일요일 저녁 전체', verifiedAt: checkedAt, sourceType: 'official_tourism', outdoor: true,
        preview: preview('https://osaka-info.jp/en/event/bampaku-natsumatsui2026/')
      },
      {
        id: 'event-suikoden-final', name: '수호전 특별전 · 오사카 마지막 날', jp: '特別展 水滸伝',
        category: 'attraction', group: 'seasonal', label: '9/6 종료 · 미술', area: 'tennoji', areaLabel: '텐노지',
        coords: [34.6504, 135.5104], validDays: ['sun'], suggestedDay: 'sun', suggestedStart: '09:30', start: '09:30', end: '17:00', lastEntry: '16:30', duration: 120,
        price: 2000, priceText: '성인 ¥2,000', reservationPolicy: 'not_required', bookingUrl: 'https://www.osaka-art-museum.jp/index.php/special_exhibition/8301',
        official: 'https://www.osaka-art-museum.jp/index.php/special_exhibition/8301', map: 'https://www.google.com/maps/search/?api=1&query=Osaka+City+Museum+of+Fine+Arts',
        description: '중국과 일본 미술 속 수호전의 이미지를 보는 특별전. 여행 일요일이 전시 마지막 날이다.',
        whyGo: '신세카이·텐노지와 묶기 쉽고, 고전·게임·만화로 이어진 수호전 이미지의 뿌리를 볼 수 있다.',
        caution: '마지막 날 혼잡 가능. 반권 제시 시 아베노 하루카스 미술관 고흐 전시 당일권 ¥100 할인, 중복 할인 불가.',
        replacement: '일요일 텐노지 2시간', verifiedAt: checkedAt, sourceType: 'museum_official', indoor: true,
        preview: preview('https://www.osaka-art-museum.jp/index.php/special_exhibition/8301')
      },
      {
        id: 'event-kishiwada-danjiri-test', name: '기시와다 단지리 시운전', jp: '岸和田だんじり試験曳き',
        category: 'attraction', group: 'seasonal', label: '9/6 한정 · 지역축제', area: 'kishiwada', areaLabel: '기시와다',
        coords: [34.4605, 135.3710], validDays: ['sun'], suggestedDay: 'sun', suggestedStart: '14:00', start: '14:00', end: '16:00', duration: 180,
        price: 0, priceText: '무료', reservationPolicy: 'not_required',
        official: 'https://osaka-info.jp/en/event/kishiwadadanjirimaturi/', bookingUrl: 'https://www.city.kishiwada.lg.jp/site/danjiri/',
        map: 'https://www.google.com/maps/search/?api=1&query=Kishiwada+Station',
        description: '본 축제를 앞두고 실제 단지리를 끄는 14:00~16:00 시운전.',
        whyGo: '도톤보리와 전혀 다른 세대 공동체와 지역 축제의 힘을 가까이서 본다.',
        caution: '난바에서 왕복 이동을 포함하면 일요일 반나절을 사용한다. 현장 통제선과 촬영 안내를 지킨다.',
        replacement: '일요일 12:30~18:00', verifiedAt: checkedAt, sourceType: 'official_tourism', outdoor: true,
        preview: preview('https://osaka-info.jp/en/event/kishiwadadanjirimaturi/')
      },
      {
        id: 'event-osaka-classic-base', name: '오사카 클래식 베이스', jp: 'Osaka Classic Base',
        category: 'attraction', group: 'seasonal', label: '9/6~7 · 음악축제', area: 'nakanoshima', areaLabel: '나카노시마',
        coords: [34.6935489, 135.5039788], validDays: ['sun', 'mon'], suggestedDay: 'mon', suggestedStart: '11:00', start: '11:00', end: '18:00', duration: 60,
        price: 0, priceText: '입장 무료', reservationPolicy: 'not_required',
        official: 'https://osaka-classic.jp/special-schedule/', bookingUrl: 'https://osaka-classic.jp/special-schedule/',
        map: 'https://www.google.com/maps/search/?api=1&query=Osaka+City+Central+Public+Hall',
        description: '중앙공회당 앞에서 연주·악기 체험·스트리트 피아노·푸드존을 즐기는 무료 베이스.',
        whyGo: '나카노시마 산책에 30~60분만 끼워 넣어도 여행 날짜만의 장면이 생긴다.',
        caution: '약한 비에는 진행하지만 악천후에는 취소, 일부 프로그램은 시청사로 이동한다.',
        replacement: '일요일·월요일 나카노시마 60분', verifiedAt: checkedAt, sourceType: 'event_official', outdoor: true,
        preview: preview('https://osaka-classic.jp/special-schedule/')
      },
      {
        id: 'event-sunset-cruise-0905', name: '요리미치 선셋 크루즈', jp: 'よりみちSunset Cruise',
        category: 'attraction', group: 'seasonal', label: '9/5 한정 · 수상버스', area: 'temmabashi', areaLabel: '덴마바시·나카노시마',
        coords: [34.6907302, 135.515973], validDays: ['sat'], suggestedDay: 'sat', suggestedStart: '18:15', start: '17:45', end: '18:40', duration: 25,
        price: 1600, priceText: '성인 ¥1,600', reservationPolicy: 'recommended',
        official: 'https://suijo-bus.osaka/cruise/cruise-498/', bookingUrl: 'https://book.suijo-bus.osaka',
        map: 'https://www.google.com/maps/search/?api=1&query=Hachikenyahama+Pier+Osaka',
        description: '17:45·18:15 출항. 낮은 수면 시점에서 나카노시마 석양과 다리, 분수쇼를 보는 25분 크루즈.',
        whyGo: 'KIX 도착 뒤 첫날을 과하게 채우지 않으면서도 오사카다운 장면을 만든다.',
        caution: '온라인 예약은 승선일 15:00까지, 당일권은 16:30경부터. 출항 10분 전 수속, 날씨·하천 상황에 따라 변경 가능.',
        replacement: '토요일 17:30~19:00', verifiedAt: checkedAt, sourceType: 'operator_official', outdoor: true,
        preview: preview('https://suijo-bus.osaka/cruise/cruise-498/')
      }
    ],
    usjFeature: {
      id: 'usj', name: 'USJ 2026 여름 시즌', validDays: ['sun'], suggestedDay: 'sun', suggestedStart: '08:00', duration: 660,
      priceText: '날짜별 변동 · 조기 구매 권장', reservationPolicy: 'recommended',
      official: 'https://www.usj.co.jp/web/en/us', bookingUrl: 'https://www.usjticketing.com/',
      pricingNotice: 'https://www.usj.co.jp/web/en/us/news/2026/0630',
      description: '9월 5~6일은 핼러윈 시작 전이다. 25주년·닌텐도 월드 5주년·여름 시즌 프로그램을 확인한다.',
      caution: '9월 1일 이후 입장권은 수요에 따라 가격이 오를 수 있고, 슈퍼 닌텐도 월드는 시간제 입장이 필요할 수 있다.',
      verifiedAt: checkedAt,
      preview: preview('https://www.usj.co.jp/web/en/us')
    },
    operationOverrides: {
      yasaka: { hoursStatus: 'verified', open: '06:00', close: '17:00', reservationPolicy: 'not_required', official: 'https://osaka-info.jp/en/spot/nanbayasakajinja/', verifiedAt: checkedAt, note: '수여소·기도 접수는 09:00~16:50, 경내 개문은 06:00~17:00' },
      'bandai-cross-v5': { hoursStatus: 'verified', open: '10:00', close: '20:00', reservationPolicy: 'not_required', official: 'https://bandainamco-am.co.jp/crossstore/store/crossstore_shinsaibashi/index.html', verifiedAt: checkedAt },
      'sumiyoshi-v5': { hoursStatus: 'verified', open: '06:00', close: '17:00', reservationPolicy: 'not_required', official: 'https://www.sumiyoshitaisha.net/access/index.html', verifiedAt: checkedAt, note: '4~9월 바깥문 16:00, 안쪽문 17:00' },
      'shitennoji-v5': { hoursStatus: 'verified', open: '08:30', close: '16:30', reservationPolicy: 'not_required', official: 'https://www.shitennoji.or.jp/admission.html', verifiedAt: checkedAt },
      tempozan: { hoursStatus: 'verified', open: '11:00', close: '20:00', reservationPolicy: 'not_required', official: 'https://osaka-info.jp/en/spot/tempozan-marketplace/', verifiedAt: checkedAt, note: '일부 음식점은 21:00까지, 점포별 변동' },
      'gacha-mori-tempozan-v7': { hoursStatus: 'verified', open: '10:30', close: '20:00', reservationPolicy: 'not_required', official: 'https://www.gachagachanomori.com/shoplist/', verifiedAt: checkedAt, note: '주말·공휴일 기준' },
      'gashapon-dept-nipponbashi-v7': { hoursStatus: 'verified', open: '10:00', close: '23:59', reservationPolicy: 'not_required', official: 'https://bandainamco-am.co.jp/others/capsule-toy-store/store/nipponbashi/', verifiedAt: checkedAt, note: '공식 표기는 10:00~24:00' },
      'harukas-v5': { hoursStatus: 'verified', open: '09:00', close: '22:00', lastEntry: '21:30', reservationPolicy: 'recommended', official: 'https://www.abenoharukas-300.jp/observatory/information.html', bookingUrl: 'https://www.abenoharukas-300.jp/observatory/ticket.html', verifiedAt: checkedAt },
      fukutaro: { hoursStatus: 'verified', open: '11:00', close: '23:00', lastEntry: '22:00', reservationPolicy: 'unknown', official: 'https://2951.jp/access.html', verifiedAt: checkedAt, note: '상황에 따라 15:00~17:00 중간 휴식 가능' },
      'craftbeer-v3': { hoursStatus: 'verified', open: '11:00', close: '23:00', lastEntry: '22:30', reservationPolicy: 'unknown', official: 'https://www.hanshin-dept.jp/hshonten/english/restaurantguide.html', verifiedAt: checkedAt },
      'daiki-sushi-v4': { hoursStatus: 'verified', open: '11:00', close: '23:00', lastEntry: '22:30', reservationPolicy: 'unknown', official: 'https://sushi.daiki-suisan.co.jp/shop/12', verifiedAt: checkedAt },
      usj: { hoursStatus: 'unknown', reservationPolicy: 'recommended', official: 'https://www.usj.co.jp/web/en/us', bookingUrl: 'https://www.usjticketing.com/', verifiedAt: checkedAt, note: '날짜별 운영시간·시간제 입장권을 공식 앱에서 확인' },
      'expo70-v5': { hoursStatus: 'unknown', reservationPolicy: 'unknown', official: 'https://www.expo70-park.jp/languages/english/', verifiedAt: checkedAt },
      'event-orix-0906': { hoursStatus: 'verified', open: '13:00', close: '17:00', reservationPolicy: 'recommended', verifiedAt: checkedAt },
      'event-ghibli-atc': { hoursStatus: 'verified', open: '09:00', close: '19:00', lastEntry: '18:30', reservationPolicy: 'required', verifiedAt: checkedAt },
      'event-expo-summer-0906': { hoursStatus: 'verified', open: '17:00', close: '22:00', lastEntry: '21:30', reservationPolicy: 'recommended', verifiedAt: checkedAt },
      'event-suikoden-final': { hoursStatus: 'verified', open: '09:30', close: '17:00', lastEntry: '16:30', reservationPolicy: 'not_required', verifiedAt: checkedAt },
      'event-kishiwada-danjiri-test': { hoursStatus: 'verified', open: '14:00', close: '16:00', reservationPolicy: 'not_required', verifiedAt: checkedAt },
      'event-osaka-classic-base': { hoursStatus: 'verified', open: '11:00', close: '18:00', reservationPolicy: 'not_required', verifiedAt: checkedAt },
      'event-sunset-cruise-0905': { hoursStatus: 'verified', open: '17:45', close: '18:40', reservationPolicy: 'recommended', verifiedAt: checkedAt }
    },
    liveLinks: [
      { label: 'KIX 출도착', url: 'https://www.kansai-airport.or.jp/en/flight/search?direction=DEP' },
      { label: 'JR West 운행정보', url: 'https://global.trafficinfo.westjr.co.jp/en/' },
      { label: '기상청 오사카 예보', url: 'https://www.jma.go.jp/bosai/forecast/#area_type=offices&area_code=270000' },
      { label: '오사카 안전·재난', url: 'https://osaka-info.jp/en/information/emergency/' },
      { label: '오사카 공식 행사', url: 'https://osaka-info.jp/event/?label=&location=&month=2026-09&search=' }
    ],
    discountRules: {
      amazingPass: {
        label: 'Osaka Amazing Pass 1일권', pricePerPerson: 3500,
        official: 'https://osaka-amazing-pass.com/en/howto_about_1day.html',
        conditionsUrl: 'https://osaka-amazing-pass.com/en/service_free.html',
        validOn: '2026-09-06', stackable: false,
        benefits: {
          castle: { regular: 1200, label: '오사카성 박물관' },
          sky: { regular: 2000, label: '우메다 스카이빌딩', latestStart: '15:00', note: '무료입장은 15:00까지' },
          tsutenkaku: { regular: 1500, label: '쓰텐카쿠 전망대', note: '시간대·제외일 확인' },
          'hep-five-v5': { regular: 1000, label: 'HEP FIVE 관람차' },
          'tombori-cruise-v5': { regular: 2000, label: '톤보리 리버크루즈', note: '이용권 교환·운항 확인' },
          'history-museum-v5': { regular: 600, label: '오사카 역사박물관', note: '휴관·특별전 조건 확인' }
        }
      },
      enjoyEco: {
        label: 'Enjoy Eco Card 일요일권', pricePerPerson: 620,
        official: 'https://subway.osakametro.co.jp/guide/page/enjoy-eco.php',
        conditionsUrl: 'https://subway.osakametro.co.jp/en/guide/page/waribiki_ichiran.php',
        validOn: '2026-09-06', stackable: false,
        benefits: {
          castle: { saving: 120, label: '오사카성 할인' },
          'history-museum-v5': { saving: 60, label: '오사카 역사박물관 할인' },
          'harukas-v5': { saving: 200, label: '하루카스 300 약 10%', note: '당일권 기준·최종 요금 확인' }
        }
      }
    },
    phrases: [
      ['予約していません。三人です。', '예약 안 했어요. 세 명입니다.'],
      ['三人分をお願いします。', '세 명분 부탁합니다.'],
      ['予約は必要ですか？', '예약이 필요한가요?'],
      ['ラストオーダーは何時ですか？', '라스트오더는 몇 시인가요?'],
      ['これは持ち帰れますか？', '이거 포장할 수 있나요?'],
      ['いちばん人気はどれですか？', '제일 인기 있는 건 무엇인가요?']
    ]
  };
})();
