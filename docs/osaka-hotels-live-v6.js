(function () {
  'use strict';

  const bookedHotel = {
    id: 'booked-livin-nanbaminami',
    name: 'LIVIN Osaka Nanbaminami',
    area: '난바·도심',
    coords: [34.6544118, 135.4997683],
    roomFit: '쿼드러플룸(발코니) · 더블침대 2개 · 성인 3명',
    tier: 'booked',
    rating: 9.3,
    reviews: 34,
    taxNote: '숙박세 확인 완료',
    freeCancel: false,
    image: 'assets/hotel-livin-nanbaminami.jpg',
    bookingUrl: 'https://www.agoda.com/livin-osaka-nanbaminami/hotel/osaka-jp.html?checkIn=2026-09-05&los=2&rooms=1&adults=3&children=0',
    station: '다이코쿠초역 230~240m · 도보 약 3~4분',
    bookingVerified: true,
    roomVerified: true,
    booked: true,
    bookedAmountPrivate: true,
    verifiedAt: '2026-08-29',
    priceSource: 'Agoda 예약 확정 · 실제 결제액 비공개',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=1-8-13%20Ebisuhonmachi%20Naniwa%20Osaka',
    address: '〒556-0013 大阪市浪速区恵美須本町1-8-13',
    stayLabel: '2026.09.05(토) → 09.07(월) · 2박',
    checkinTime: '16:00–22:00',
    checkoutTime: '10:00',
    selfCheckin: true,
    accessNote: '프런트 없음 · 온라인 체크인 후 현장 열쇠함 이용',
    onlineCheckinStatus: '완료',
    accommodationTaxStatus: '완료',
    guestRegistrationStatus: '성인 3명 등록 완료',
    accessRelease: '체크인 시간 이후 Guest link에서 공개',
    lockboxNote: '체크인 시간 이후 Guest link에 객실 번호·현관 코드·출입 코드·키박스 코드가 표시됩니다.',
    cancellation: '환불 불가'
  };

  window.OSAKA_HOTELS_LIVE_V6 = {
    verifiedAt: '2026-08-29',
    checkin: '2026-09-05',
    checkout: '2026-09-07',
    adults: 3,
    rooms: 1,
    nights: 2,
    provider: 'Agoda 예약 확정',
    hotels: [bookedHotel]
  };
})();
