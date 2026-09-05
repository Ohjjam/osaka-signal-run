(function () {
  'use strict';

  const map = (name, address = '') => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${name} ${address} Osaka`)}`;
  const entry = item => ({
    duration: 55,
    priceText: '선택별',
    image: null,
    verifiedPhoto: false,
    facts: [],
    ...item,
    map: item.map || map(item.name, item.address)
  });

  const oripaCaution = '랜덤 봉입 상품이라 기대가치와 당첨이 보장되지 않는다. 환불·교환 조건을 먼저 보고, 초보자는 고액 상품 대신 정가 싱글카드와 비교한다.';
  const arcadeCaution = '크레인게임은 경품 구매가 아니라 플레이 요금이다. 한 기계당 상한을 정하고 막히면 직원에게 배치 도움 가능 여부를 묻는다.';
  const pachinkoCaution = '현금 인출을 추가로 하지 말고 체험 예산을 미리 분리한다. 이 가이드에는 합법 영업장만 수록하며 불법 현금 도박장은 제외한다.';
  const bettingCaution = '20세 미만은 투표권을 살 수 없다. 최소 단위로 체험하고, 정한 상한에 닿으면 손익과 무관하게 종료한다.';

  window.OSAKA_CHANCE_EXPANSION_V7 = {
    goodsGroups: {
      gacha: '가챠·캡슐토이',
      oripa: '오리파',
      tcg: '트레이딩카드',
      arcade: '게임센터·크레인'
    },
    nightlifeGroups: {
      betting: '경마·보트·경륜',
      pachinko: '파친코·슬롯'
    },
    goods: [
      entry({
        id:'gacha-mori-umeda-v7', name:'가챠가챠의 숲 우메다 차야마치', jp:'ガチャガチャの森 梅田茶屋町店',
        coords:[34.7074,135.5002], group:'gacha', chanceType:'gacha', label:'가챠 · 약 2,400대', duration:75,
        address:'大阪市北区茶屋町15-34', priceText:'1회 보통 ¥300~500', best:'평일 개점 직후',
        description:'차야마치 복합 건물의 여러 층을 캡슐토이가 채우는 오사카 최대급 매장.',
        whyGo:'기기 수가 압도적이라 특정 캐릭터를 찾기 좋고, 우메다 쇼핑 동선에서 따로 멀리 갈 필요가 없다.',
        official:'https://www.gachagachanomori.com/shoplist/', facts:['약 2,400대','일~목 10:00~21:00','금·토 10:00~22:00'],
        caution:'재고와 기기 위치는 수시로 바뀐다. 먼저 전 층을 훑은 뒤 돌린다.'
      }),
      entry({
        id:'gacha-mori-otaroad-v7', name:'가챠가챠의 숲 니혼바시 오타로드', jp:'ガチャガチャの森 日本橋オタロード店',
        coords:[34.6610,135.5058], group:'gacha', chanceType:'gacha', label:'가챠 · 약 1,030대', duration:60,
        address:'大阪市浪速区日本橋3-7-22', priceText:'1회 보통 ¥300~500', best:'11:00~13:00',
        description:'애니·피규어 상권 한복판에 약 1,030대가 모인 캡슐토이 전문점.',
        whyGo:'오타로드의 카드점과 중고 굿즈숍 사이에 있어 가챠, 오리파, 피규어를 한 번에 비교하기 가장 쉽다.',
        official:'https://www.gachagachanomori.com/shoplist/', facts:['약 1,030대','11:00~21:00','오타로드 중심'],
        caution:'주말 오후에는 통로가 붐빈다. 캡슐을 넣을 작은 에코백이 유용하다.'
      }),
      entry({
        id:'gacha-mori-abeno-v7', name:'가챠가챠의 숲 아베노 Hoop', jp:'ガチャガチャの森 あべのHoop店',
        coords:[34.6457,135.5122], group:'gacha', chanceType:'gacha', label:'가챠 · 약 670대',
        address:'大阪市阿倍野区阿倍野筋1-2-30 Hoop 4F', priceText:'1회 보통 ¥300~500', best:'11:00~15:00',
        description:'덴노지·아베노 쇼핑 축에 있는 약 670대 규모의 실내 가챠 매장.',
        whyGo:'하루카스·신세카이 코스 중간에 넣기 좋아 니혼바시까지 가지 않는 날의 현실적인 선택지다.',
        official:'https://www.gachagachanomori.com/shoplist/', facts:['약 670대','11:00~21:00','Hoop 4F']
      }),
      entry({
        id:'gacha-mori-tempozan-v7', name:'가챠가챠의 숲 덴포잔', jp:'ガチャガチャの森 天保山マーケットプレース店',
        coords:[34.6547,135.4293], group:'gacha', chanceType:'gacha', label:'가챠 · 약 650대',
        address:'大阪市港区海岸通1-1-10 天保山マーケットプレース3F', priceText:'1회 보통 ¥300~500', best:'가이유칸 관람 뒤',
        description:'가이유칸 옆 마켓플레이스에 약 650대가 모인 베이 지역 매장.',
        whyGo:'수족관·대관람차 코스에 자연스럽게 붙어 이동비가 추가되지 않는다. 해양생물 계열을 찾는 재미도 있다.',
        official:'https://www.gachagachanomori.com/shoplist/', facts:['약 650대','평일 11:00~20:00','주말·공휴일 10:30~20:00']
      }),
      entry({
        id:'gashapon-dept-nipponbashi-v7', name:'가샤폰 백화점 오사카 니혼바시', jp:'ガシャポンのデパート大阪日本橋店',
        coords:[34.6599,135.5037], group:'gacha', chanceType:'gacha', label:'반다이 · 360면', duration:65,
        address:'大阪市浪速区難波中2-1-17 コスモビル1F', priceText:'1회 ¥300~500 중심', best:'10:00~12:00',
        description:'반다이 공식 상품 재고를 웹에서 기기 단위로 확인할 수 있는 360면 매장.',
        whyGo:'무작정 찾는 대신 공식 페이지에서 원하는 시리즈의 재고 ○·△를 확인하고 갈 수 있다는 점이 강하다.',
        official:'https://bandainamco-am.co.jp/others/capsule-toy-store/store/nipponbashi/', facts:['360면','10:00~24:00','공식 사이트 재고 표시'],
        caution:'온라인 재고 표시와 현장 수량에는 시차가 있을 수 있다.'
      }),
      entry({
        id:'gashapon-official-umeda-v7', name:'가샤폰 반다이 공식숍 우메다', jp:'ガシャポンバンダイオフィシャルショップ梅田店',
        coords:[34.7035,135.5015], group:'gacha', chanceType:'gacha', label:'반다이 · 450면', duration:60,
        address:'大阪市北区小松原町3-3 OSビル1F', priceText:'1회 ¥300~500 중심', best:'10:00~12:00',
        description:'2026년 2월 1층으로 확장 이전한 LED 연출형 반다이 가샤폰 플래그십.',
        whyGo:'450면과 대형 모니터, 전시 케이스가 있어 단순 자판기 줄보다 “가샤폰 매장” 경험이 분명하다.',
        official:'https://bandainamco-am.co.jp/en/others/gashapon-bandai-officialshop/store/umeda/', facts:['450면','10:00~24:00','2026년 리뉴얼']
      }),
      entry({
        id:'gashapon-hepfive-v7', name:'가샤폰 백화점 HEP FIVE', jp:'ガシャポンのデパート HEP FIVE店',
        coords:[34.7040,135.5003], group:'gacha', chanceType:'gacha', label:'반다이 · 약 300면', duration:55,
        address:'大阪市北区角田町5-15 HEP FIVE 8F', priceText:'1회 ¥300~500 중심', best:'11:00 개점 직후',
        description:'HEP FIVE 8층의 반다이 공식숍·게임센터·캐릭터숍 복합 구역.',
        whyGo:'가챠만 돌리고 끝나는 곳이 아니라 이치방쿠지, 원피스·반다이 굿즈, 아케이드를 같은 층에서 이어 볼 수 있다.',
        official:'https://bandainamco-am.co.jp/en/others/gashapon-bandai-officialshop/store/hepfive/?tags=gentei', facts:['약 300면','11:00~22:30','HEP FIVE 8F']
      }),
      entry({
        id:'gashapon-iy-abeno-v7', name:'가샤폰 백화점 이토요카도 아베노', jp:'ガシャポンのデパート イトーヨーカドーあべの店',
        coords:[34.6447,135.5116], group:'gacha', chanceType:'gacha', label:'가챠 · 640면', duration:60,
        address:'大阪市阿倍野区阿倍野筋1-6-1 2F', priceText:'1회 ¥300~500 중심', best:'10:00~13:00',
        description:'덴노지역과 직결되는 상업시설 2층의 640면 대형 가샤폰 매장.',
        whyGo:'비 오는 날에도 역에서 거의 실내로 연결되고, 아베노 남부 일정에서 가장 큰 선택지다.',
        official:'https://bandainamco-am.co.jp/en/others/capsule-toy-store/store/iy_abeno/', facts:['640면','10:00~21:00','덴노지역 연결']
      }),
      entry({
        id:'gashapon-skybuilding-v7', name:'가샤폰 공식숍 우메다 스카이빌딩', jp:'ガシャポンバンダイオフィシャルショップ 梅田スカイビル店',
        coords:[34.7053,135.4900], group:'gacha', chanceType:'gacha', label:'반다이 · 310면', duration:40,
        address:'大阪市北区大淀中1-1-88 タワーイースト3F', priceText:'1회 ¥300~500 중심', best:'전망대 입장 전',
        description:'우메다 스카이빌딩 타워 이스트 3층의 310면 공식 매장.',
        whyGo:'공중정원 전망대와 같은 건물이라 가챠를 위해 별도 왕복하지 않고 일몰 대기 시간을 채우기 좋다.',
        official:'https://bandainamco-am.co.jp/others/gashapon-bandai-officialshop/store/umeda_skybldg/', facts:['310면','10:30~21:30','타워 이스트 3F']
      }),
      entry({
        id:'cpla-shinsaibashi-v7', name:'#C-pla+ 오사카 신사이바시스지', jp:'＃C-pla+ 大阪心斎橋筋店',
        coords:[34.6698,135.5012], group:'gacha', chanceType:'gacha', label:'가챠 · 심야까지', duration:50,
        address:'大阪市中央区心斎橋筋2-7-3', priceText:'1회 보통 ¥300~500', best:'10:00~18:00',
        description:'신사이바시 상점가 남쪽에서 밤 11시까지 운영하는 캡슐토이 전문점.',
        whyGo:'도톤보리와 신사이바시 사이에 있어 일정이 늦어져도 들르기 쉽고, 쿠지 코너 재고를 함께 보기 좋다.',
        official:'https://www.shinsaibashi.or.jp/stores/show/334/ja', facts:['10:00~23:00','연중무휴','신사이바시 상점가']
      }),
      entry({
        id:'cpla-umeda-chayamachi-v7', name:'#C-pla 우메다 차야마치', jp:'＃C-pla 梅田茶屋町店',
        coords:[34.7063,135.4998], group:'gacha', chanceType:'gacha', label:'가챠 · 3개 층', duration:60,
        address:'大阪市北区茶屋町2-19 JPR茶屋町ビル1F〜3F', priceText:'1회 보통 ¥300~500', best:'10:00~14:00',
        description:'한큐 우메다 차야마치구치에서 가까운 1~3층 규모 캡슐토이 매장.',
        whyGo:'가챠가챠의 숲과 함께 보면 같은 차야마치 권역에서 재고를 대규모로 비교할 수 있다.',
        official:'https://toshin.jpn.com/', facts:['1F~3F','10:00~23:00','한큐 우메다 약 1분']
      }),
      entry({
        id:'gashacoco-bigstep-v7', name:'gashacoco 신사이바시 BIGSTEP', jp:'ガシャココ 心斎橋BIGSTEP',
        coords:[34.6726,135.4988], group:'gacha', chanceType:'gacha', label:'가챠 · 팝업 연계', duration:45,
        address:'大阪市中央区西心斎橋1-6-14 BIGSTEP 1F', priceText:'1회 보통 ¥300~500', best:'11:00~19:00',
        description:'아메리카무라 BIGSTEP 1층의 캡슐토이점으로 시즌 팝업과 크리에이터 상품이 자주 붙는다.',
        whyGo:'빈티지·스트리트 쇼핑 중 짧게 넣기 좋고, 대형 반다이점과 다른 메이커 구성을 비교하기 쉽다.',
        official:'https://gashacoco.jp/shop-list/291', facts:['11:00~20:00','BIGSTEP 1F','시즌 팝업 확인']
      }),
      entry({
        id:'gashacoco-ebisu-v7', name:'gashacoco 난바 에비스바시스지', jp:'ガシャココ なんば戎橋筋',
        coords:[34.6669,135.5012], group:'gacha', chanceType:'gacha', label:'가챠 · 난바 중심', duration:40,
        address:'大阪市中央区難波3-5-1 なんば一番ビル1F', priceText:'1회 보통 ¥300~500', best:'11:00~20:00',
        description:'난바역과 도톤보리 사이 에비스바시스지의 1층 캡슐토이 매장.',
        whyGo:'호텔이 난바라면 식사 전후 20~40분만 쓰기 좋고, 역 앞점과 재고를 연속 비교할 수 있다.',
        official:'https://gashacoco.jp/tohoku/', facts:['11:00~21:00','에비스바시스지','난바 도보권']
      }),
      entry({
        id:'gashacoco-namba-st-v7', name:'gashacoco 난바역앞', jp:'ガシャココ なんば駅前',
        coords:[34.6668,135.5003], group:'gacha', chanceType:'gacha', label:'가챠 · 지하 매장', duration:40,
        address:'大阪市中央区難波3-6-15 難波第一ビルB2F', priceText:'1회 보통 ¥300~500', best:'10:00~20:00',
        description:'난바역 바로 앞 지하에 있어 날씨와 상관없이 들를 수 있는 캡슐토이점.',
        whyGo:'월요일 출국 전 짧은 마지막 쇼핑이나 비 오는 날의 틈새 일정으로 쓰기 편하다.',
        official:'https://gashacoco.jp/tohoku/', facts:['10:00~21:00','난바역앞 B2F','실내 이동']
      }),

      entry({
        id:'oracleberry-oripa-v7', name:'카드샵 오라클베리', jp:'カードショップ オラクルベリー',
        coords:[34.6608,135.5058], group:'oripa', chanceType:'oripa', label:'오리파 · 공식 판매 확인', duration:45,
        address:'大阪日本橋', priceText:'상품별 · 고액 상품 주의', best:'방문 전 영업 공지 확인',
        description:'포켓몬·원피스·유희왕·바이스 등 여러 종목의 오리파를 판매한다고 공식 명시한 니혼바시 실매장.',
        whyGo:'오리파가 목적일 때 일반 카드숍과 섞지 않고 먼저 확인할 수 있는 전문 후보다.',
        official:'https://oraclebery.official.ec/about', facts:['실매장 운영 공식 명시','포켓몬·원피스 등','재고·영업은 당일 확인'], caution:oripaCaution
      }),
      entry({
        id:'magi-nipponbashi-oripa-v7', name:'magi 오사카 니혼바시', jp:'magi大阪日本橋店',
        coords:[34.6622,135.5051], group:'oripa', chanceType:'oripa', label:'오리파 · 미스터리/블록', duration:50,
        address:'大阪市浪速区日本橋3-6-2', priceText:'상품별 · 고액 상품 주의', best:'13:00 이후',
        description:'희귀 카드 전시와 함께 미스터리 오리파·블록 오리파 판매를 공식 공지한 magi의 노면점.',
        whyGo:'당첨만 노리는 곳보다 고액 싱글카드를 직접 보며 오리파 가격과 실물 가치를 비교하기 좋다.',
        official:'https://magi.camp/news/660/web', facts:['13:00~19:30 공지','유희왕·포켓몬·듀에마','오리파 판매 명시'], caution:oripaCaution
      }),
      entry({
        id:'cardlabo-nipponbashi-oripa-v7', name:'카드라보 오사카 니혼바시', jp:'カードラボ 大阪日本橋店',
        coords:[34.6605,135.5046], group:'oripa', chanceType:'oripa', label:'오리파 · 32석', duration:55,
        address:'大阪市浪速区日本橋西1-1-3 池田ビル2号館5F', priceText:'상품별 · 고액 상품 주의', best:'토·일 10:00 이후',
        description:'공식 매장 페이지가 오리파·특가 코너와 32석 듀얼 스페이스를 명시한 종합 TCG점.',
        whyGo:'오리파만 있는 곳이 아니라 싱글카드, 구축 덱, 플레이 공간을 함께 보며 가격을 비교할 수 있다.',
        official:'https://www.c-labo.jp/shop/nipponbashi/', facts:['오리파 다수 공식 명시','듀얼 스페이스 32석','주말 10:00~20:00'], caution:oripaCaution
      }),
      entry({
        id:'cardshop-joe-oripa-v7', name:'카드샵 Joe 니혼바시', jp:'カードショップJoe@日本橋',
        coords:[34.6601,135.5057], group:'oripa', chanceType:'oripa', label:'오리파 · 포켓몬/원피스', duration:40,
        address:'大阪日本橋', priceText:'상품별 · 고액 상품 주의', best:'공식 SNS 영업 확인',
        description:'포켓몬과 원피스 중심으로 오리파·플레이용 카드를 판매한다고 공식 소개하는 소형점.',
        whyGo:'대형 체인보다 포켓몬·원피스 두 종목에 집중해 보고 싶을 때 후보가 된다.',
        official:'https://seiou.base.shop/about', facts:['포켓몬·원피스 중심','오리파 판매 공식 명시','영업·주소 당일 확인'], caution:oripaCaution
      }),

      entry({
        id:'dorasuta-main-v7', name:'드래곤스타 니혼바시 본점', jp:'ドラゴンスター日本橋本店',
        coords:[34.6601,135.5034], group:'tcg', chanceType:'tcg', label:'TCG · 싱글카드 기준점', duration:55,
        address:'大阪市浪速区難波中2-5-12', priceText:'싱글·팩 상품별', best:'주말 10:30~',
        description:'여러 TCG의 싱글과 특가 카드를 빠르게 비교하는 드래곤스타 본점.',
        whyGo:'니혼바시 카드숍 순회의 기준 가격을 잡기 좋다. 플레이 공간보다 구매·가격 비교가 목적이다.',
        official:'https://dorasuta.jp/shop/detail?scd=4', facts:['평일 12:00~20:00','주말·공휴일 10:30~20:00','듀얼스페이스 없음']
      }),
      entry({
        id:'dorasuta-second-v7', name:'드래곤스타 니혼바시 2호점', jp:'ドラゴンスター日本橋2号店',
        coords:[34.6599,135.5038], group:'tcg', chanceType:'tcg', label:'TCG · 대회/사테라이트', duration:60,
        address:'大阪市浪速区難波中2-1-17 コスモビル6F', priceText:'싱글·팩 상품별', best:'토요일 10:00~',
        description:'공식 대회와 유희왕 OCG 사테라이트 역할까지 하는 6층 매장.',
        whyGo:'단순 구매보다 현지 플레이 문화와 행사 분위기를 보고 싶다면 본점보다 이쪽이 맞다.',
        official:'https://dorasuta.jp/shop', facts:['토 10:00~21:00','일·공휴일 10:00~20:00','KONAMI 사테라이트']
      }),
      entry({
        id:'dorasuta-third-v7', name:'드래곤스타 니혼바시 3호점', jp:'ドラゴンスター日本橋3号店',
        coords:[34.6577,135.5018], group:'tcg', chanceType:'tcg', label:'TCG · 남쪽 지점', duration:50,
        address:'大阪市浪速区敷津東2-1-5', priceText:'싱글·팩 상품별', best:'토요일 10:00~',
        description:'난바 남쪽·기즈 시장 방향에 있는 드래곤스타 지점.',
        whyGo:'오타로드 북쪽 매장이 붐빌 때 남쪽으로 분산해 재고를 비교할 수 있다.',
        official:'https://dorasuta.jp/shop', facts:['평일 14:00~21:00','토 10:00~21:00','일·공휴일 10:00~20:00']
      }),
      entry({
        id:'dorasuta-otaroad-v7', name:'드래곤스타 오타로드 중앙점', jp:'ドラゴンスター オタロード中央店',
        coords:[34.6602,135.5038], group:'tcg', chanceType:'tcg', label:'TCG · MTG 층', duration:55,
        address:'大阪市浪速区難波中2-5-10', priceText:'싱글·팩 상품별', best:'주말 10:00~',
        description:'오타로드 한가운데에 일반 TCG와 MTG 전용 플로어를 함께 둔 지점.',
        whyGo:'여러 종목을 보는 팀과 MTG만 깊게 보는 사람이 같은 건물에서 갈라졌다 만나기 좋다.',
        official:'https://dorasuta.jp/shop', facts:['일반 TCG 플로어','MTG 전용 플로어','주말 10:00~20:00']
      }),
      entry({
        id:'dorasuta-nansan-v7', name:'드래곤스타 난바 난산도리', jp:'ドラゴンスターなんば なんさん通り店',
        coords:[34.6606,135.5024], group:'tcg', chanceType:'tcg', label:'TCG · 난바 접근', duration:50,
        address:'大阪市浪速区難波中', priceText:'싱글·팩 상품별', best:'공식 영업시간 확인',
        description:'난카이 난바에서 카드숍 골목으로 들어갈 때 먼저 보기 쉬운 난산도리 지점.',
        whyGo:'오타로드 깊숙이 들어가기 전에 가격과 재고를 빠르게 확인하는 입구 역할을 한다.',
        official:'https://dorasuta.jp/shop', facts:['난카이 난바 도보권','종목별 싱글카드','당일 영업 확인']
      }),
      entry({
        id:'hareruya2-namba-v7', name:'하레루야2 난바', jp:'晴れる屋2 なんば店',
        coords:[34.6624,135.5029], group:'tcg', chanceType:'tcg', label:'포켓몬카드 · 80석', duration:75,
        address:'大阪市中央区難波千日前7-10 COCONAMBA5F', priceText:'싱글 ¥50부터·상품별', best:'주말 10:00 개점',
        description:'일본 최대급 포켓몬카드 전문점 중 하나로 무료 플레이 공간 80석과 매일 이벤트를 운영한다.',
        whyGo:'신품·구판·구뒷면 카드와 싱글 재고가 깊고, 초보자 설명회까지 있어 포켓몬카드를 실제로 해보고 싶을 때 가장 명확하다.',
        official:'https://www.hareruya2.com/pages/store_namba-en', facts:['무료 플레이 80석','주말·공휴일 10:00~21:00','초보자 체험·매일 이벤트']
      }),
      entry({
        id:'hareruya-mtg-nipponbashi-v7', name:'하레루야 오사카 니혼바시', jp:'晴れる屋 大阪店',
        coords:[34.6595,135.5050], group:'tcg', chanceType:'tcg', label:'MTG 전문', duration:70,
        address:'大阪日本橋', priceText:'싱글·팩·이벤트별', best:'대회 일정 확인',
        description:'Magic: The Gathering 카드, 대회, 플레이 공간에 집중한 전문점.',
        whyGo:'포켓몬·원피스 중심 매장과 달리 MTG 덱 상담과 실제 플레이가 목적일 때 선택이 분명하다.',
        official:'https://www.hareruyamtg.com/ja/shoppage/osaka', facts:['MTG 전문','이벤트 일정 운영','싱글·서플라이']
      }),
      entry({
        id:'magi-otaroad-tcg-v7', name:'magi 오사카 오타로드', jp:'magi大阪オタロード店',
        coords:[34.6619,135.5052], group:'tcg', chanceType:'tcg', label:'TCG · 컬렉터 카드', duration:55,
        address:'大阪市浪速区日本橋3-8-16 安田ビル301', priceText:'희귀 싱글·상품별', best:'공식 SNS 영업 확인',
        description:'포켓몬·유희왕·원피스·바이스의 컬렉터급 싱글을 다루는 magi 지점.',
        whyGo:'플레이용 저가 카드보다 희귀도 높은 실물을 구경하거나 시세를 비교할 때 맞는다.',
        official:'https://cardshopmagi.com/shop/magi-osaka-otaroad/', facts:['포켓몬·유희왕·원피스·바이스','듀얼스페이스 없음','전자·QR 결제']
      }),
      entry({
        id:'magi-namba-st-tcg-v7', name:'magi 오사카 난바역앞', jp:'magi大阪なんば駅前店',
        coords:[34.6624,135.5029], group:'tcg', chanceType:'tcg', label:'TCG · COCONAMBA 6F', duration:50,
        address:'大阪市中央区難波千日前7-10 COCONAMBA6F', priceText:'희귀 싱글·상품별', best:'공식 SNS 영업 확인',
        description:'하레루야2 위층에 있는 포켓몬·원피스·유희왕 컬렉터 카드점.',
        whyGo:'한 건물에서 5층 포켓몬 전문점과 6층 컬렉터 매장을 비교할 수 있어 이동 효율이 매우 좋다.',
        official:'https://cardshopmagi.com/shop/magi-namba-st/', facts:['COCONAMBA 6F','포켓몬·원피스·유희왕','하레루야2와 같은 건물']
      }),
      entry({
        id:'cardlabo-otaroad-v7', name:'카드라보 오타로드 본점', jp:'カードラボ オタロード本店',
        coords:[34.6594,135.5056], group:'tcg', chanceType:'tcg', label:'TCG · 종합', duration:55,
        address:'大阪市浪速区日本橋4-16-1', priceText:'싱글·팩 상품별', best:'토·일 오전',
        description:'오타로드 남쪽의 대형 종합 카드라보 지점으로 여러 종목의 신품·싱글을 취급한다.',
        whyGo:'종목이 서로 다른 세 사람이 한 매장에서 각자 구역을 보기 좋다.',
        official:'https://www.c-labo.jp/shop/', facts:['오타로드 본점','다종목 TCG','대회·재고 당일 확인']
      }),
      entry({
        id:'cardlabo-namba-v7', name:'카드라보 난바점', jp:'カードラボ なんば店',
        coords:[34.6618,135.5050], group:'tcg', chanceType:'tcg', label:'TCG · 난바/니혼바시', duration:50,
        address:'大阪市浪速区日本橋3-8-16 B1F', priceText:'싱글·팩 상품별', best:'토·일 10:00 이후',
        description:'니혼바시 중심의 지하 카드숍으로 여러 공식 게임의 싱글·팩을 비교한다.',
        whyGo:'같은 건물 위층의 magi 오타로드와 성격이 달라 플레이용과 컬렉터용을 한 번에 비교하기 좋다.',
        official:'https://www.c-labo.jp/shop/', facts:['B1F','다종목 TCG','magi 오타로드와 같은 건물']
      }),
      entry({
        id:'hobbystation-nipponbashi-v7', name:'호비스테이션 니혼바시 본점', jp:'ホビーステーション日本橋本店',
        coords:[34.6616,135.5054], group:'tcg', chanceType:'tcg', label:'TCG · 36석', duration:60,
        address:'大阪市浪速区日本橋3-8-12', priceText:'싱글·팩 상품별', best:'11:00~20:00',
        description:'지역 최대급 카드 전문점으로 36석 무료 듀얼 공간과 매일 대회를 운영한다.',
        whyGo:'카드를 사는 것뿐 아니라 실제 현지 플레이어가 모이는 공간을 보고 싶을 때 좋다.',
        official:'https://www.hbst.net/shop/14/', facts:['11:00~20:00','무료 듀얼 36석','매일 대회']
      }),
      entry({
        id:'fullcomp-nipponbashi-v7', name:'풀컴프 오사카 니혼바시', jp:'フルコンプ大阪日本橋店',
        coords:[34.6619,135.5052], group:'tcg', chanceType:'tcg', label:'TCG · 오타로드 4F', duration:50,
        address:'大阪市浪速区日本橋3-8-18 平田ビル4F', priceText:'싱글·팩 상품별', best:'주말 11:00~',
        description:'슈퍼포테이토가 있는 건물 4층의 종합 카드숍.',
        whyGo:'레트로게임과 카드 쇼핑을 한 건물에서 해결해 오타로드 체류 시간을 줄인다.',
        official:'https://players.pokemon-card.com/event/search/10919/list', facts:['평일 12:00~21:00','주말·공휴일 11:00~21:00','오타로드 4F']
      }),
      entry({
        id:'beehonpo-battletower-v7', name:'Bee 본점 배틀타워', jp:'Bee本舗 バトルタワー店',
        coords:[34.6600,135.5037], group:'tcg', chanceType:'tcg', label:'TCG · 공식 취급점', duration:55,
        address:'大阪市浪速区難波中2-1-20', priceText:'싱글·팩·대회별', best:'공식 SNS 영업 확인',
        description:'공식 원피스카드 취급점 목록에 등재된 니혼바시 카드숍·배틀 공간.',
        whyGo:'이름 그대로 구매보다 대회와 플레이 분위기까지 보고 싶은 사람에게 맞는다.',
        official:'https://www.onepiece-cardgame.com/pdf/storelist_authorized-store.pdf', facts:['원피스카드 공식 취급점','난산도리','행사 당일 확인']
      }),
      entry({
        id:'onepiece-shop-shinsaibashi-v7', name:'원피스 카드게임 공식숍 신사이바시', jp:'ONE PIECEカードゲーム 公式ショップ 心斎橋店',
        coords:[34.6752,135.5004], group:'tcg', chanceType:'tcg', label:'원피스카드 · 공식', duration:55,
        address:'大阪市中央区心斎橋筋1-8-3 心斎橋PARCO5F', priceText:'공식 상품별', best:'10:00 개점 직후',
        description:'신사이바시 PARCO 5층에서 공식 상품과 이벤트를 운영하는 원피스카드 전문 숍.',
        whyGo:'정품·공식 이벤트가 우선이라면 일반 카드숍보다 선택이 명확하고 PARCO 굿즈 코스와 바로 이어진다.',
        official:'https://www.onepiece-cardgame.com/pdf/storelist_authorized-store.pdf', facts:['공식숍','신사이바시 PARCO 5F','판매 방식·재고 당일 확인']
      }),
      entry({
        id:'onepiece-shop-umeda-v7', name:'원피스 카드게임 공식숍 오사카 우메다', jp:'ONE PIECEカードゲーム 公式ショップ 大阪梅田店',
        coords:[34.7040,135.5003], group:'tcg', chanceType:'tcg', label:'원피스카드 · 공식', duration:55,
        address:'大阪市北区角田町5-15 HEP FIVE8F', priceText:'공식 상품별', best:'11:00 개점 직후',
        description:'HEP FIVE 8층 반다이남코 복합 공간의 원피스카드 공식숍.',
        whyGo:'가챠·이치방쿠지·아케이드와 같은 층이라 원피스 팬이 아닌 동행도 각자 할 일을 찾기 쉽다.',
        official:'https://www.onepiece-cardgame.com/pdf/storelist_authorized-store.pdf', facts:['공식숍','HEP FIVE 8F','재고·구매 제한 당일 확인']
      }),

      entry({
        id:'gigo-dotonbori-v7', name:'GiGO 오사카 도톤보리 본점', jp:'GiGO大阪道頓堀本店',
        coords:[34.6690,135.5011], group:'arcade', chanceType:'arcade', label:'게임센터 · 420대+', duration:85,
        address:'大阪市中央区道頓堀1-8-22 道頓座ビル1F〜3F', priceText:'1플레이 보통 ¥100~200', best:'저녁 식사 전후',
        description:'3개 층·420대 이상 규모의 GiGO 플래그십으로 크레인, 리듬, 레이싱, 프리쿠라가 모인다.',
        whyGo:'도톤보리 한복판에서 늦게까지 열어 첫날 밤에도 넣을 수 있고, 세 사람이 점수 대결하기 좋다.',
        official:'https://tempo.gendagigo.jp/akihabara/', facts:['420대 이상','게임 구역 10:00~01:00','1F~3F'], caution:arcadeCaution
      }),
      entry({
        id:'taito-namba-v7', name:'타이토 스테이션 난바', jp:'タイトーステーション 難波店',
        coords:[34.6658,135.5018], group:'arcade', chanceType:'arcade', label:'게임센터 · 6개 층', duration:75,
        address:'大阪市中央区難波千日前15-12', priceText:'1플레이 보통 ¥100~200', best:'낮~저녁',
        description:'1~3층 대형 프라이즈 구역과 체감·음악·레이싱 게임을 층별로 나눈 6층 게임센터.',
        whyGo:'크레인만 있는 매장이 아니라 마리오카트·완간·태고 등 일본 아케이드 대표 장르를 한 번에 체험한다.',
        official:'https://www.taito.co.jp/store/topics/00001910/19311/4', facts:['6개 층','1~3F 프라이즈','리듬·레이싱·체감'], caution:arcadeCaution
      }),
      entry({
        id:'taito-nipponbashi-v7', name:'타이토 스테이션 오사카 니혼바시', jp:'タイトーステーション 大阪日本橋店',
        coords:[34.6607,135.5062], group:'arcade', chanceType:'arcade', label:'게임센터 · 오타로드', duration:65,
        address:'大阪市浪速区日本橋4-9-14', priceText:'1플레이 보통 ¥100~200', best:'10:00~18:00',
        description:'오타로드 카드·피규어 쇼핑 중간에 있는 대형 타이토 게임센터.',
        whyGo:'쇼핑 피로를 끊고 크레인·리듬게임으로 분위기를 바꾸기 좋으며 밤 11시 45분까지 운영한다.',
        official:'https://www.taito.co.jp/store/00002024', facts:['평일 10:00~23:45','현금 없는 결제 지원','무료 Wi-Fi'], caution:arcadeCaution
      }),
      entry({
        id:'namco-hepfive-v7', name:'namco HEP FIVE', jp:'namco HEP FIVE店',
        coords:[34.7040,135.5003], group:'arcade', chanceType:'arcade', label:'게임센터 · 프리쿠라', duration:70,
        address:'大阪市北区角田町5-15 HEP FIVE8F・9F', priceText:'1플레이 보통 ¥100~200', best:'11:00~21:00',
        description:'HEP FIVE 8·9층의 프라이즈·프리쿠라·아케이드 복합 공간.',
        whyGo:'우메다 공식 굿즈층과 같은 건물이라 쇼핑에 관심 없는 동행도 게임과 사진으로 시간을 보낼 수 있다.',
        official:'https://bandainamco-am.co.jp/game_center/loc/hepfive/', facts:['11:00~22:30','HEP FIVE 8·9F','프리쿠라 특화 구역'], caution:arcadeCaution
      }),
      entry({
        id:'round1-sennichimae-v7', name:'라운드원 스타디움 센니치마에', jp:'ラウンドワンスタジアム 千日前店',
        coords:[34.6682,135.5029], group:'arcade', chanceType:'arcade', label:'스포차 · 기가크레인', duration:150,
        address:'大阪市中央区難波1-3-1', priceText:'시설·시간대별', best:'2~3시간 비울 때',
        description:'기가 크레인게임, 볼링, 스포차, 가라오케, 다트·탁구까지 한 건물에서 고르는 대형 놀이터.',
        whyGo:'비가 오거나 세 사람이 관광보다 몸 쓰는 놀이를 원할 때 반나절 대체재가 된다.',
        official:'https://www.round1.co.jp/shop/tenpo/osaka-sennichimae.html', facts:['스포차','기가 크레인게임','볼링·가라오케'], caution:'입장형 시설은 시간제 요금이다. 원하는 시설의 운영시간과 마지막 접수를 먼저 확인한다.'
      }),
      entry({
        id:'namco-nipponbashi-v7', name:'namco 오사카 니혼바시', jp:'namco大阪日本橋店',
        coords:[34.6599,135.5037], group:'arcade', chanceType:'arcade', label:'게임센터 · 3개 층', duration:75,
        address:'大阪市浪速区難波中2-1-17 コスモビル1F〜3F', priceText:'1플레이 보통 ¥100~200', best:'10:00~22:00',
        description:'가샤폰 백화점과 같은 건물 1~3층의 아케이드·프라이즈 매장.',
        whyGo:'가챠, 드래곤스타 2호점, 게임센터가 수직으로 겹쳐 니혼바시 취미 코스를 가장 압축할 수 있다.',
        official:'https://bandainamco-am.co.jp/game_center/loc/nipponbashi/index.html', facts:['10:00~24:00','1F~3F','가챠·카드점 같은 건물'], caution:arcadeCaution
      }),
      entry({
        id:'namco-umeda-v7', name:'namco 우메다', jp:'namco梅田店',
        coords:[34.7035,135.5015], group:'arcade', chanceType:'arcade', label:'게임센터 · 심야까지', duration:70,
        address:'大阪市北区小松原町3-3 OSビル1F〜3F', priceText:'1플레이 보통 ¥100~200', best:'10:00~22:00',
        description:'OS빌딩 1~3층에 아케이드와 공식 가샤폰·캐릭터숍을 모은 우메다 대형점.',
        whyGo:'자정까지 열어 우메다 저녁의 마지막 선택지로 쓰기 쉽고, 공식 가샤폰 플래그십과 한 건물이다.',
        official:'https://bandainamco-am.co.jp/game_center/loc/umeda/', facts:['10:00~24:00','1F~3F','캐릭터숍 22:00까지'], caution:arcadeCaution
      }),
      entry({
        id:'namco-nambaparks-v7', name:'namco 난바파크스', jp:'namcoなんばパークス店',
        coords:[34.6617,135.5019], group:'arcade', chanceType:'arcade', label:'게임센터 · 쇼핑몰형', duration:60,
        address:'大阪市浪速区難波中2-10-70 なんばパークス6F', priceText:'1플레이 보통 ¥100~200', best:'11:00~21:00',
        description:'난카이 난바 직결 난바파크스 6층의 깨끗한 쇼핑몰형 게임센터.',
        whyGo:'거리형 게임센터의 소음이 부담스럽거나 식사·쇼핑과 편하게 묶고 싶을 때 좋다.',
        official:'https://bandainamco-am.co.jp/game_center/loc/nambaparks/', facts:['11:00~22:00','난카이 난바 직결','난바파크스 6F'], caution:arcadeCaution
      }),
      entry({
        id:'gigo-namba-avion-v7', name:'GiGO 난바 아비온', jp:'GiGO難波アビオン',
        coords:[34.6610,135.5015], group:'arcade', chanceType:'arcade', label:'게임센터 · B1~4F', duration:75,
        address:'大阪市浪速区難波中2-3-15 MMOビルB1F〜4F', priceText:'1플레이 보통 ¥100~200', best:'낮~밤',
        description:'지하 1층부터 4층까지 장르별 기기를 쌓은 난바의 오래된 대형 아케이드.',
        whyGo:'최신 프라이즈뿐 아니라 리듬·대전·레이싱 게임을 깊게 파고들 때 도톤보리 관광형 매장보다 잘 맞는다.',
        official:'https://tempo.gendagigo.jp/tabid86.html?ctid=45330&hdtype=3&pdid=45330', facts:['B1F~4F','난카이 난바 인접','장르별 플로어'], caution:arcadeCaution
      }),
      entry({
        id:'gigo-kitte-cafe-v7', name:'GiGO Arcade Café KITTE 오사카', jp:'GiGO Arcade Café KITTE大阪',
        coords:[34.6999,135.4930], group:'arcade', chanceType:'arcade', label:'게임·다트·카페', duration:90,
        address:'大阪市北区梅田3-2-2 JP TOWER OSAKA6F', priceText:'음식·게임별', best:'점심 또는 저녁',
        description:'카페·레스토랑, 다트와 아케이드 놀이를 한 공간에 섞은 GiGO의 복합형 매장.',
        whyGo:'게임센터 소음 속에서 계속 서 있기보다 식사와 술, 다트까지 앉아서 이어 가고 싶은 성인 3명에게 특색 있다.',
        official:'https://tempo.gendagigo.jp/tabid86.html?ctid=45330&hdtype=3&pdid=45330', facts:['KITTE 오사카 6F','아케이드+카페','다트·식음'], caution:'음주했다면 예산 판단이 흐려질 수 있다. 게임비와 식음료비를 따로 잡는다.'
      })
    ],
    nightlife: [
      entry({
        id:'wins-dotonbori-v7', name:'JRA WINS 도톤보리', jp:'ウインズ道頓堀',
        coords:[34.6681,135.5047], group:'betting', chanceType:'betting', adultOnly:true, ageLabel:'20+', label:'중앙경마 장외발매', duration:100,
        address:'大阪市中央区道頓堀1-3-3', priceText:'마권 최소 ¥100', best:'9/5 토·9/6 일 09:20~17:00',
        description:'도톤보리에서 JRA 중앙경마를 대형 화면으로 보고 마권을 살 수 있는 공식 장외발매소.',
        whyGo:'여행일 토·일에 JRA 개최가 있어, 관광 동선을 크게 벗어나지 않고 일본 경마장의 열기를 짧게 체험한다.',
        official:'https://www.jra.go.jp/facilities/wins/dotonbori/', facts:['개관 09:10','발매·환급 09:20~17:00','무료석 약 200·유료 라운지 약 160'], risk:bettingCaution
      }),
      entry({
        id:'wins-umeda-v7', name:'JRA WINS 우메다', jp:'ウインズ梅田',
        coords:[34.7060,135.4977], group:'betting', chanceType:'betting', adultOnly:true, ageLabel:'20+', label:'중앙경마 장외발매', duration:100,
        address:'大阪市北区芝田2-1-16・2-2-33', priceText:'마권 최소 ¥100', best:'9/5 토·9/6 일 09:20~17:00',
        description:'A·B 두 동과 유료 Excel 플로어, 경마 정보공간 Gate J.를 갖춘 우메다 장외발매소.',
        whyGo:'우메다 숙소나 쇼핑 일정과 붙이기 쉽고, 초보자가 정보와 화면을 보며 짧게 체험하기 좋다.',
        official:'https://www.jra.go.jp/facilities/wins/umeda/', facts:['개관 09:10','발매·환급 09:20~17:00','유료 지정석 272석'], risk:bettingCaution
      }),
      entry({
        id:'boatrace-suminoe-v7', name:'보트레이스 스미노에', jp:'ボートレース住之江',
        coords:[34.6091,135.4714], group:'betting', chanceType:'betting', adultOnly:true, ageLabel:'20+', label:'보트레이스 · 본장', duration:180,
        address:'大阪市住之江区泉1-1-71', priceText:'舟券 최소 ¥100', best:'9/5 토·9/6 일 본장 개최',
        description:'수면 바로 옆에서 6정의 모터보트가 코너를 도는 일본 공영경기 본장.',
        whyGo:'공식 일정상 9월 1~6일 블루스타컵 본장 경기가 있어, 이번 여행에서 실제 레이스를 볼 수 있는 가장 확실한 선택지다.',
        official:'https://www.boatrace-suminoe.jp/', facts:['9/1~6 본장 개최','9/5 추첨 이벤트','9/6 토크쇼 공지'], risk:bettingCaution
      }),
      entry({
        id:'kishiwada-keirin-v7', name:'기시와다 경륜장', jp:'岸和田競輪場',
        coords:[34.4771,135.3923], group:'betting', chanceType:'betting', adultOnly:true, ageLabel:'20+', label:'경륜 · 벨로드롬', duration:180,
        address:'大阪府岸和田市春木若松町22-38', priceText:'차권 최소 ¥100', best:'개최 일정 확인 후',
        description:'가파른 뱅크를 질주하는 선수와 전술을 현장에서 보는 오사카부의 경륜장.',
        whyGo:'말·보트와 전혀 다른 인간 스프린트와 벨로드롬 구조가 목적일 때 가치가 있다. KIX 방면 난카이선과도 연결된다.',
        official:'https://chalionkun.com/access/', facts:['난카이 하루키역 도보 약 6분','KIX에서 하루키 약 25분','여행일 개최 여부 재확인'], risk:bettingCaution
      }),
      entry({
        id:'shikairow-main-v7', name:'시카이로 본점', jp:'四海樓本店',
        coords:[34.6664,135.5003], group:'pachinko', chanceType:'pachinko', adultOnly:true, ageLabel:'18+', label:'파친코·슬롯 · 565대', duration:70,
        address:'大阪市中央区難波4-2-1 難波御堂筋ビル', priceText:'체험 상한 ¥1,000~3,000 권장', best:'10:00~22:45',
        description:'난바역 13번 출구와 직결된 오사카 토박이 체인의 대표 파친코·슬롯 홀.',
        whyGo:'길을 헤매지 않고 짧게 일본식 파친코 홀의 빛·소리·기계 문화를 체험하기 가장 쉽다.',
        official:'https://www.shikairow.com/store/', facts:['파친코 359대','슬롯 206대','난바역 13번 출구 직결'], risk:pachinkoCaution
      }),
      entry({
        id:'shikairow-slot-theater-v7', name:'슬롯 시어터 시카이로', jp:'スロットシアター四海樓',
        coords:[34.6649,135.5035], group:'pachinko', chanceType:'pachinko', adultOnly:true, ageLabel:'18+', label:'파치슬롯 · 423대', duration:70,
        address:'大阪市中央区千日前2-11-2', priceText:'체험 상한 ¥1,000~3,000 권장', best:'10:00~22:40',
        description:'파친코 없이 슬롯 423대만 둔 센니치마에의 슬롯 전문 홀.',
        whyGo:'파친코 구슬 방식보다 애니·게임 IP의 파치슬롯 기계를 보고 싶은 사람에게 선택이 명확하다.',
        official:'https://www.shikairow.com/store/', facts:['슬롯 423대','난카이 난바 도보 약 5분','10:00~22:40'], risk:pachinkoCaution
      }),
      entry({
        id:'shikairow-air-v7', name:'시카이로 air', jp:'四海樓air店',
        coords:[34.6651,135.5037], group:'pachinko', chanceType:'pachinko', adultOnly:true, ageLabel:'18+', label:'파치슬롯 · 243대', duration:60,
        address:'大阪市中央区千日前2-11-9', priceText:'저가 슬롯 포함 · 현장 확인', best:'10:00~22:40',
        description:'센니치마에의 비교적 작은 슬롯 전용점으로 243대를 운영한다.',
        whyGo:'대형 홀보다 짧게 둘러보고 싶거나 낮은 대여 단가 기종을 확인할 때 후보가 된다.',
        official:'https://www.shikairow.com/store/', facts:['슬롯 243대','10:00~22:40','P-WORLD 최신 기종표 연결'], risk:pachinkoCaution
      }),
      entry({
        id:'shikairow-umeda-v7', name:'시카이로 우메다', jp:'四海樓梅田店',
        coords:[34.7013,135.5023], group:'pachinko', chanceType:'pachinko', adultOnly:true, ageLabel:'18+', label:'파친코·슬롯 · 371대', duration:70,
        address:'大阪市北区曽根崎2-14-17 CIビル', priceText:'저가 슬롯 포함 · 현장 확인', best:'10:00~22:50',
        description:'오하쓰텐진 상점가의 파친코 108대·슬롯 263대 홀.',
        whyGo:'우메다 남쪽 저녁 동선에 붙고, 대형 관광 상권 바로 옆에서 로컬 홀 분위기를 볼 수 있다.',
        official:'https://www.shikairow.com/store/', facts:['파친코 108대','슬롯 263대','오하쓰텐진 상점가'], risk:pachinkoCaution
      }),
      entry({
        id:'shikairow-hepfive-v7', name:'시카이로 HEP FIVE', jp:'四海樓HEP FIVE店',
        coords:[34.7040,135.5003], group:'pachinko', chanceType:'pachinko', adultOnly:true, ageLabel:'18+', label:'파친코·슬롯 · 452대', duration:65,
        address:'大阪市北区角田町5-15 HEP FIVE B2F', priceText:'체험 상한 ¥1,000~3,000 권장', best:'10:00~22:50',
        description:'HEP FIVE 지하 2층의 파친코 386대·슬롯 66대 홀.',
        whyGo:'같은 건물 위층의 가챠·카드·아케이드와 일본식 우연 게임 문화를 수직으로 비교할 수 있다.',
        official:'https://www.shikairow.com/store/', facts:['파친코 386대','슬롯 66대','HEP FIVE B2F'], risk:pachinkoCaution
      }),
      entry({
        id:'maruhan-umeda-v7', name:'마루한 우메다', jp:'マルハン梅田店',
        coords:[34.7030,135.5011], group:'pachinko', chanceType:'pachinko', adultOnly:true, ageLabel:'18+', label:'파친코·슬롯 · 851대', duration:80,
        address:'大阪市北区小松原町4-16 梅田ナナイロB1F・B2F', priceText:'4엔·1엔 파친코 / 46매 슬롯', best:'10:00~22:40',
        description:'2025년 리뉴얼한 우메다 최대급 홀로 파친코 459대와 슬롯 392대를 두 지하층에 둔다.',
        whyGo:'규모와 최신 설비를 우선하면 가장 압도적이다. 전석 금연·충전 환경도 공식 최신 정보에서 확인된다.',
        official:'https://www.maruhan.co.jp/news/2025/07/2501/', facts:['합계 851대','파친코 459·슬롯 392','2025년 리뉴얼'], risk:pachinkoCaution
      })
    ],
    policies: {
      oripa: '오리파는 봉입 비율과 기대가치가 보장되지 않는 랜덤 상품입니다. ¥1,000~3,000 체험 상한을 정하고, 같은 돈의 정가 팩·싱글카드와 먼저 비교하세요.',
      gambling: '공영경기 투표권은 20세 이상, 파친코 홀은 18세 이상입니다. 현금 추가 인출 금지·사전 예산 상한·불법 카지노 제외를 기본으로 합니다.',
      dateNote: '2026-09-05~06 스미노에 본장 개최 확인. JRA WINS는 토·일 개최일 운영. 기시와다 경륜은 여행 직전 공식 개최표를 다시 확인하세요.'
    }
  };
})();
