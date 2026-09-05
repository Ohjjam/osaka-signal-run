(function () {
  'use strict';

  const SOURCE_DATE = '2026-08-22';
  const price = (amountMin, amountTypical, amountMax, costUnit, sourceURL, options = {}) => ({
    amountMin,
    amountTypical,
    amountMax,
    currency: 'JPY',
    costUnit,
    quantityDefault: options.quantityDefault ?? 1,
    includedInPreset: options.includedInPreset ?? [],
    sourceDate: SOURCE_DATE,
    sourceURL,
    priceStatus: options.priceStatus || 'reference'
  });

  const coordinates = {
    kix: [34.4347, 135.2441],
    rapit: [34.6636, 135.5019],
    hotel: [34.6634, 135.5013],
    ajinoya: [34.6687, 135.5005],
    fukutaro: [34.6658, 135.5052],
    dotonbori: [34.6687, 135.5013],
    wanaka: [34.6686, 135.5031],
    lilo: [34.6715, 135.4992],
    marufuku: [34.6686, 135.5053],
    parco: [34.6751, 135.5004],
    castle: [34.6873, 135.5262],
    harukoma: [34.7059, 135.5113],
    lucua: [34.7025, 135.4958],
    hanadako: [34.7030, 135.4962],
    sky: [34.7053, 135.4905],
    kiji: [34.7050, 135.4907],
    yasaka: [34.6616, 135.4964],
    kuromon: [34.6657, 135.5060],
    doguya: [34.6628, 135.5022],
    denden: [34.6588, 135.5050],
    luggage: [34.6636, 135.5019],
    rapitOut: [34.6636, 135.5019],
    shinsekai: [34.6525, 135.5063],
    tsutenkaku: [34.6525, 135.5063],
    daruma: [34.6527, 135.5065],
    kaiyukan: [34.6545, 135.4289],
    tempozan: [34.6572, 135.4309],
    usj: [34.6654, 135.4323],
    pokemonDx: [34.6731, 135.5015],
    kidatake: [34.6589, 135.5050],
    endo: [34.6827, 135.4740],
    rikuro: [34.6669, 135.5013]
  };

  const placePrices = {
    kix: price(0, 0, 0, 'per-person', 'https://www.kansai-airport.or.jp/en/access/train'),
    rapit: price(1410, 1410, 1410, 'per-person', 'https://www.nankai.co.jp/en_railway/ticket/rapit', { includedInPreset: ['all'] }),
    hotel: price(0, 0, 0, 'per-room', 'https://osaka-info.jp/en/plan/accommodation/', { priceStatus: 'user-input' }),
    ajinoya: price(1000, 1450, 2200, 'per-person', 'https://ajinoya-okonomiyaki.com/en/contact/faq.php', { includedInPreset: ['classic', 'bay'] }),
    fukutaro: price(1000, 1500, 2400, 'per-person', 'https://2951.jp/en/access.html', { includedInPreset: ['food', 'goods', 'retro', 'indoor', 'usj'] }),
    dotonbori: price(0, 0, 0, 'per-person', 'https://osaka-info.jp/en/spot/dotonbori/'),
    wanaka: price(600, 750, 950, 'per-item', 'http://takoyaki-wanaka.com/en/index.html'),
    lilo: price(700, 1100, 1600, 'per-person', 'https://coffee.liloinveve.com/pages/lilo-coffee-kissa-1?locale=ja'),
    marufuku: price(700, 1200, 1800, 'per-person', 'https://marufukucoffeeten.com/store/marufukucoffee-sennichimae/'),
    parco: price(0, 0, 0, 'per-item', 'https://shinsaibashi.parco.jp/shop/popculture/', { priceStatus: 'unknown' }),
    castle: price(1200, 1200, 1200, 'per-person', 'https://www.osakacastle.net/guide/?lang=en', { includedInPreset: ['classic', 'food'] }),
    harukoma: price(1500, 2500, 4000, 'per-person', 'https://metronine.osaka/en/kiosk/spot-detail/?kcat=sushi&spot_id=16274515203997'),
    lucua: price(0, 0, 0, 'per-item', 'https://www.lucua.jp/floormap/southshop.html', { priceStatus: 'unknown' }),
    hanadako: price(700, 850, 1100, 'per-item', 'https://goumeda.com/shop/hanadako/'),
    sky: price(2000, 2000, 2000, 'per-person', 'https://www.skybldg.co.jp/en/'),
    kiji: price(1000, 1500, 2300, 'per-person', 'https://www.skybldg.co.jp/en/'),
    yasaka: price(0, 0, 0, 'per-person', 'https://osaka-info.jp/en/spot/nanbayasakajinja/'),
    kuromon: price(1000, 2500, 6000, 'per-person', 'https://kuromon.com/en/official-store-map/', { priceStatus: 'reference' }),
    doguya: price(0, 0, 0, 'per-item', 'https://www.doguyasuji.or.jp/en/', { priceStatus: 'unknown' }),
    denden: price(0, 0, 0, 'per-item', 'https://osaka-info.jp/en/spot/nippombashi-denden-town/', { priceStatus: 'unknown' }),
    luggage: price(0, 0, 1000, 'per-item', 'https://www.nankai.co.jp/en/community/natts/nest/', { priceStatus: 'reference' }),
    rapitOut: price(1410, 1410, 1410, 'per-person', 'https://www.nankai.co.jp/en_railway/ticket/rapit', { includedInPreset: ['all'] }),
    shinsekai: price(0, 0, 0, 'per-person', 'https://osaka-info.jp/en/spot/shinsekai/'),
    tsutenkaku: price(1500, 1500, 2500, 'per-person', 'https://www.tsutenkaku.co.jp/annai/'),
    daruma: price(900, 1600, 2800, 'per-person', 'https://www.kushikatu-daruma.com/location/'),
    kaiyukan: price(2700, 2900, 3200, 'per-person', 'https://www.kaiyukan.com/info/hours/'),
    tempozan: price(0, 0, 1800, 'per-person', 'https://osaka-info.jp/en/spot/tempozan-harbor-village/'),
    usj: price(8600, 10400, 11900, 'per-person', 'https://www.usj.co.jp/web/en/us/tickets', { priceStatus: 'reference' }),
    pokemonDx: price(0, 0, 0, 'per-item', 'https://shop.pokemon.co.jp/en/shop/pokemoncenter-osakadx/', { priceStatus: 'unknown' }),
    kidatake: price(1000, 1300, 1800, 'per-person', 'https://tabelog.com/osaka/A2701/A270202/27103359/'),
    endo: price(2000, 3000, 4500, 'per-person', 'https://www.endo-sushi.com/english.html'),
    rikuro: price(900, 1100, 1400, 'per-item', 'https://www.rikuro.co.jp/shoplist/')
  };

  const hotels = [
    {
      id: 'booked-livin-nanbaminami', name: 'LIVIN Osaka Nanbaminami', jp: 'LIVIN大阪なんば南',
      coords: [34.6544118, 135.4997683], station: '다이코쿠초역 도보 약 3~4분', airport: '난카이 난바·신이마미야에서 KIX 이동',
      checkIn: '16:00–22:00 / 10:00', luggage: '프런트 없음 · 수하물 보관은 별도 확인', transferMinutes: 4,
      room: '쿼드러플룸(발코니) · 더블침대 2개 · 성인 3명', image: 'assets/hotel-livin-nanbaminami.jpg',
      official: 'https://www.agoda.com/livin-osaka-nanbaminami/hotel/osaka-jp.html?checkIn=2026-09-05&los=2&rooms=1&adults=3&children=0',
      faq: 'https://www.agoda.com/livin-osaka-nanbaminami/hotel/osaka-jp.html?checkIn=2026-09-05&los=2&rooms=1&adults=3&children=0',
      map: 'https://www.google.com/maps/search/?api=1&query=1-8-13%20Ebisuhonmachi%20Naniwa%20Osaka',
      price: price(0, 0, 0, 'per-room', 'https://www.agoda.com/livin-osaka-nanbaminami/hotel/osaka-jp.html', { priceStatus: 'unknown' })
    }
  ];

  const foods = [
    { id: 'ajinoya', name: '맛노야 오코노미야키', jp: 'お好み焼き', serving: '1인 1장', placeId: 'ajinoya', image: 'assets/osaka-food.png', price: placePrices.ajinoya },
    { id: 'wanaka', name: '와나카 다코야키', jp: 'たこ焼き', serving: '6~8알 1판 · 둘이 공유 추천', placeId: 'wanaka', image: 'assets/dotonbori-night.jpg', price: placePrices.wanaka },
    { id: 'daruma', name: '다루마 쿠시카쓰', jp: '串カツ', serving: '5~7꼬치 1세트', placeId: 'daruma', image: 'assets/shinsekai.jpg', price: placePrices.daruma },
    { id: 'marufuku', name: '마루후쿠 커피·핫케이크', jp: '喫茶店', serving: '1인 1세트', placeId: 'marufuku', image: 'assets/osaka-food.png', price: placePrices.marufuku },
    { id: 'hanadako', name: '하나다코 네기마요', jp: 'ねぎマヨ', serving: '6알 1판', placeId: 'hanadako', image: 'assets/umeda-sky.jpg', price: placePrices.hanadako },
    { id: 'rikuro', name: '리쿠로 치즈케이크', jp: '焼きたてチーズケーキ', serving: '1홀 · 공유/선물', placeId: 'rikuro', image: 'assets/osaka-food.png', price: placePrices.rikuro }
  ];

  window.OSAKA_EXPERIENCE_DATA = {
    schemaVersion: 2,
    sourceDate: SOURCE_DATE,
    coordinates,
    placePrices,
    hotels,
    foods,
    map: {
      tileURL: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>',
      providerName: 'OpenStreetMap standard tiles',
      support: 'HTTPS 또는 localhost에서 전체 지도 지원. file://·오프라인·타일 실패 시 같은 장소를 폴백 지도로 표시합니다.'
    }
  };
})();
