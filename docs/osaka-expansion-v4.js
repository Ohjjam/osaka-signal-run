(function () {
  'use strict';

  const restaurant = (id, name, jp, coords, area, areaLabel, group, genreLabel, menu, price, note, imageKey) => ({
    id, name, jp, coords, area, areaLabel, group, genreLabel, menu, price, note, imageKey,
    duration: group === 'drink' || group === 'dessert' || group === 'snack' ? 40 : 70,
    rating: null, reviews: null, precision: 'area',
    tabelog: `https://tabelog.com/osaka/rstLst/?vs=1&sa=%E5%A4%A7%E9%98%AA%E5%BA%9C&sk=${encodeURIComponent(jp || name)}`,
    menuUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name + ' Osaka')}`
  });

  window.OSAKA_EXPANSION_V4 = {
    trip: { checkin: '2026-09-05', checkout: '2026-09-07', adults: 3, rooms: 1, nights: 2 },
    hotelTiers: {},
    hotelOverrides: {},
    hotels: [],
    foodGroups: { all:'전체', rice:'밥·덮밥', snack:'길거리·간식', noodle:'우동·소바·면', ramen:'라멘·츠케멘', konamon:'오코노미야키·코나몬', fried:'튀김·돈카쓰', meat:'야키니쿠·고기', seafood:'스시·해산물', alcohol:'술·이자카야', dessert:'디저트·빵', drink:'커피·차·주스', breakfast:'아침·브런치', special:'오사카 별미' },
    restaurantOverrides: {
      ajinoya:{group:'konamon',imageKey:'okonomiyaki'}, fukutaro:{group:'konamon',imageKey:'okonomiyaki'}, wanaka:{imageKey:'takoyaki'}, marufuku:{imageKey:'coffee'},
      harukoma:{group:'seafood',imageKey:'sushi'}, hanadako:{imageKey:'takoyaki'}, kiji:{group:'konamon',imageKey:'okonomiyaki'}, kidatake:{imageKey:'udon'}, rikuro:{group:'dessert',imageKey:'cheesecake'},
      'jiyuken-v3':{imageKey:'curry'}, 'hokkyokusei-v3':{imageKey:'omurice'}, 'horai551-v3':{imageKey:'butaman'}, 'imai-v3':{imageKey:'udon'}, 'moeyo-v3':{imageKey:'ramen'}, 'mugen-v3':{imageKey:'ramen'},
      'chitose-v3':{group:'special',imageKey:'udon'}, 'yamachan-v3':{imageKey:'takoyaki'}, 'daruma-v3':{group:'fried',imageKey:'kushikatsu'}, 'aizuya-v3':{imageKey:'takoyaki'},
      'lilo-v3':{imageKey:'coffee'}, 'mixjuice-v3':{imageKey:'parfait'}, 'standajito-v3':{imageKey:'highball'}, 'unagidani-v3':{imageKey:'sake'}, 'craftbeer-v3':{imageKey:'beer'},
      'kuromonsanpei-v3':{group:'seafood',imageKey:'sushi'}, 'daikichi-v3':{group:'fried',imageKey:'tempura'}, 'kyochabana-v3':{group:'konamon',imageKey:'okonomiyaki'}, 'melcoffee-v3':{imageKey:'coffee'}
    },
    imageMap: {
      takoyaki:'assets/food-takoyaki.jpg', okonomiyaki:'assets/food-okonomiyaki.jpg', kushikatsu:'assets/food-kushikatsu.jpg', udon:'assets/food-udon.jpg', omurice:'assets/food-omurice.jpg', curry:'assets/food-curry.jpg', ramen:'assets/food-ramen.jpg', sushi:'assets/food-sushi.jpg', yakiniku:'assets/food-yakiniku.jpg', tempura:'assets/food-tempura.jpg', butaman:'assets/food-butaman.jpg', cheesecake:'assets/food-cheesecake.jpg', dango:'assets/food-dango.jpg', sake:'assets/food-sake.jpg', parfait:'assets/food-parfait.jpg', karaage:'assets/food-karaage.jpg', tonkatsu:'assets/food-tonkatsu.jpg', coffee:'assets/food-coffee.jpg', beer:'assets/food-beer.jpg', highball:'assets/food-highball.jpg'
    },
    photoSources: {
      takoyaki:['Takoyaki at Macha Café','https://commons.wikimedia.org/wiki/File:Takoyaki_at_Macha_Café.jpg','CC BY-SA 4.0'], okonomiyaki:['Okonomiyaki From the Food Court At Southland','https://commons.wikimedia.org/wiki/File:Okonomiyaki_From_the_Food_Court_At_Southland.jpg','CC0'], kushikatsu:['KushikatsuDaruma01','https://commons.wikimedia.org/wiki/File:KushikatsuDaruma01.jpg','CC BY-SA 3.0'], udon:['Kitsune Udon','https://commons.wikimedia.org/wiki/File:Kitsune_Udon.jpg','CC0'], omurice:['Omurice in Osaka','https://commons.wikimedia.org/wiki/File:Omurice_with_Demi-glace_Sause_in_Osaka,_Japan.jpg','CC0'], curry:['Beef curry rice 003','https://commons.wikimedia.org/wiki/File:Beef_curry_rice_003.jpg','CC0'], ramen:['A bowl of ramen in Osaka','https://commons.wikimedia.org/wiki/File:A_bowl_of_ramen_in_Osaka,_Japan.jpg','CC BY-SA 4.0'], sushi:['Sushi assortment','https://commons.wikimedia.org/wiki/File:Sushi_assortment.jpg','CC BY-SA 3.0'], yakiniku:['Yakiniku 002','https://commons.wikimedia.org/wiki/File:Yakiniku_002.jpg','CC BY-SA 2.0'], tempura:['Prawn tempura box','https://commons.wikimedia.org/wiki/File:Prawn-tempura-box.jpg','CC BY-SA 4.0'], butaman:['551 nikuman','https://commons.wikimedia.org/wiki/File:551_nikuman.jpg','CC BY 4.0'], cheesecake:['Japanese cheesecake 1','https://commons.wikimedia.org/wiki/File:Japanese_cheesecake_1.jpg','CC BY-SA 4.0'], dango:['Mitarashi dango 001','https://commons.wikimedia.org/wiki/File:Mitarashi_dango_001.jpg','CC0'], sake:['Japanese sake bottles and glasses','https://commons.wikimedia.org/wiki/File:Japanese_sake_bottles_and_glasses.jpg','CC BY-SA 4.0'], parfait:['White peach parfait','https://commons.wikimedia.org/wiki/File:White_peach_and_frozen_yogurt_parfait_20230720.jpg','CC0'], karaage:['Chicken karaage 004','https://commons.wikimedia.org/wiki/File:Chicken_karaage_004.jpg','CC0'], tonkatsu:['Japanese tonkatsu','https://commons.wikimedia.org/wiki/File:Japanese_tonkatsu.jpg','Public domain'], coffee:['Manual drip coffee','https://commons.wikimedia.org/wiki/File:Manual_drip_(pour-over)_coffee.jpg','CC0'], beer:['Beer in glass close up','https://commons.wikimedia.org/wiki/File:Beer_in_glass_close_up.jpg','Public domain'], highball:['Japanese whisky soda 2015','https://commons.wikimedia.org/wiki/File:Japanese_whisky_soda_2015.jpg','CC BY-SA 4.0']
    },
    restaurants: [
      restaurant('mizuno-v4','미즈노','美津の',[34.6687,135.5031],'namba','도톤보리','konamon','오코노미야키','미즈노야키 · 야마이모야키',1800,'도톤보리의 오래된 오코노미야키 전문점.','okonomiyaki'),
      restaurant('chibo-v4','치보 도톤보리 빌딩점','千房 道頓堀ビル店',[34.6685,135.5021],'namba','도톤보리','konamon','오코노미야키','치보야키 · 모던야키',2000,'여럿이 메뉴를 나눠 먹기 쉬운 대형 매장.','okonomiyaki'),
      restaurant('creoru-v4','쿠레오루 도톤보리점','くれおーる 道頓堀店',[34.6687,135.5027],'namba','도톤보리','snack','다코야키','반숙 다코야키 · 소금마요',900,'도톤보리에서 바로 먹는 길거리 간식.','takoyaki'),
      restaurant('acchichi-v4','앗치치혼포 도톤보리점','あっちち本舗 道頓堀店',[34.6689,135.5035],'namba','도톤보리','snack','다코야키','소스 다코야키 · 폰즈',800,'강변 가까이에서 먹기 좋은 다코야키.','takoyaki'),
      restaurant('juhachiban-v4','다코야키 주하치방 도톤보리점','たこ焼き十八番 道頓堀店',[34.6686,135.5018],'namba','도톤보리','snack','다코야키','텐카스 다코야키',900,'바삭한 텐카스 식감이 특징.','takoyaki'),
      restaurant('tsurutontan-v4','츠루톤탄 소에몬초점','つるとんたん 宗右衛門町店',[34.6700,135.5040],'namba','소에몬초','noodle','창작 우동','명란크림 우동 · 카레 우동',1800,'큰 그릇과 다양한 창작 우동.','udon'),
      restaurant('hanamaruken-v4','하나마루켄 난바 호젠지점','花丸軒 難波・法善寺店',[34.6673,135.5028],'namba','호젠지','ramen','돈코쓰 간장 라멘','행복 라멘 · 차슈',1200,'늦은 시간에도 찾기 쉬운 진한 라멘.','ramen'),
      restaurant('kinryu-v4','킨류라멘 도톤보리점','金龍ラーメン 道頓堀店',[34.6687,135.5030],'namba','도톤보리','ramen','돈코쓰 라멘','라멘 · 차슈멘',900,'용 간판으로 유명한 오사카 관광 라멘.','ramen'),
      restaurant('yakiniku-m-v4','마쓰사카규 야키니쿠 M 호젠지요코초점','松阪牛焼肉M 法善寺横丁店',[34.6675,135.5024],'namba','호젠지','meat','마쓰사카규 야키니쿠','마쓰사카규 모둠',6500,'예약해 먹는 고급 소고기 선택지.','yakiniku'),
      restaurant('rikimaru-v4','야키니쿠 리키마루 센니치마에점','焼肉力丸 千日前店',[34.6662,135.5035],'namba','센니치마에','meat','야키니쿠 무한리필','소고기·호르몬 코스',4000,'성인 3명이 배부르게 먹기 쉬운 코스형.','yakiniku'),
      restaurant('hariju-v4','하리주 도톤보리 본점','はり重 道頓堀本店',[34.6681,135.5005],'namba','도톤보리','meat','스키야키','구로게와규 스키야키',9000,'오사카식 소고기 전골의 고급 선택지.','yakiniku'),
      restaurant('kanidoraku-v4','카니도라쿠 도톤보리 본점','かに道楽 道頓堀本店',[34.6683,135.5007],'namba','도톤보리','seafood','게 요리','게 회·구이·전골 코스',6500,'움직이는 게 간판의 본점. 예약 권장.','sushi'),
      restaurant('daiki-sushi-v4','다이키스이산 회전스시 도톤보리점','大起水産 回転寿司 道頓堀店',[34.6685,135.5013],'namba','도톤보리','seafood','회전스시','참치·도미·연어 초밥',2500,'여럿이 취향대로 고르기 쉬운 회전스시.','sushi'),
      restaurant('sushiro-namba-v4','스시로 난바 AMZA점','スシロー 難波アムザ店',[34.6663,135.5042],'namba','난바','seafood','회전스시','초밥 · 디저트',1800,'가격을 낮춘 체인 회전스시 선택지.','sushi'),
      restaurant('gyukatsu-v4','규카쓰 모토무라 난바점','牛かつもと村 難波店',[34.6659,135.5007],'namba','난바','meat','규카쓰','규카쓰 정식',2200,'돌판에 원하는 만큼 익혀 먹는 소고기 커틀릿.','tonkatsu'),
      restaurant('kogaryu-v4','코가류 본점','甲賀流 本店',[34.6724,135.4973],'shinsaibashi','아메리카무라','snack','다코야키','아미아미 마요 다코야키',700,'아메리카무라 삼각공원 앞 간식.','takoyaki'),
      restaurant('zundoya-v4','라멘 즌도야 신사이바시점','ラー麺ずんどう屋 心斎橋店',[34.6744,135.5010],'shinsaibashi','신사이바시','ramen','히메지식 돈코쓰','아지타마 라멘',1200,'등지방 양을 고르는 진한 돈코쓰.','ramen'),
      restaurant('ghar-v4','가르','Ghar',[34.6757,135.4936],'shinsaibashi','니시오하시','rice','스파이스 카레','치킨 키마 · 베지터블 카레',1400,'향신료 중심의 오사카 스파이스 카레.','curry'),
      restaurant('meijiken-v4','메이지켄','明治軒',[34.6725,135.5011],'shinsaibashi','신사이바시','rice','오므라이스','오므라이스 · 쿠시카쓰 세트',1500,'오므라이스와 작은 쿠시카쓰를 함께.','omurice'),
      restaurant('grill-europe-v4','그릴 유럽','グリル欧風軒',[34.6718,135.4998],'shinsaibashi','신사이바시','rice','요쇼쿠','오므라이스 · 함박스테이크',1600,'일본식 양식 한 접시.','omurice'),
      restaurant('elk-v4','ELK 신사이바시','ELK NEW YORK BRUNCH',[34.6740,135.4984],'shinsaibashi','신사이바시','dessert','팬케이크','수플레 팬케이크 · 프렌치토스트',1700,'걷다 쉬며 먹는 디저트 브런치.','parfait'),
      restaurant('kurogin-v4','구로몬 마구로야 구로긴','黒銀 黒門市場本店',[34.6650,135.5069],'nipponbashi','구로몬시장','seafood','참치·해산물','참치회 · 참치덮밥',3000,'시장 안 참치 중심 선택지.','sushi'),
      restaurant('kuromon-fruit-v4','다이와 카엔 구로몬점','ダイワ果園 黒門市場店',[34.6654,135.5064],'nipponbashi','구로몬시장','drink','생과일주스','멜론 · 믹스주스 · 컷과일',900,'시장 산책 중 과일과 주스.','parfait'),
      restaurant('udonbo-v4','우동보 오사카점','うどん棒 大阪本店',[34.6973,135.4986],'umeda','기타신치','noodle','사누키 우동','올리브 소고기 우동 · 붓카케',1300,'기타신치 점심 우동.','udon'),
      restaurant('kamesushi-v4','카메스시 총본점','亀すし 総本店',[34.7032,135.5033],'umeda','우메다','seafood','스시','니기리 · 사시미',3500,'우메다 뒷골목의 활기찬 스시집.','sushi'),
      restaurant('sashisu-v4','스시사카바 사시스 2호점','すし酒場 さしす 2号店',[34.7000,135.4967],'umeda','오사카역앞빌딩','alcohol','스시 이자카야','도톰한 참치 · 스시 · 사와',2800,'스시와 술을 가볍게 묶기 좋다.','sushi'),
      restaurant('honmiyake-v4','혼미야케 한신 우메다점','本みやけ 阪神梅田店',[34.6995,135.4989],'umeda','우메다','meat','스테이크 덮밥','스테키주',1800,'얇은 스테이크를 밥 위에 올린 인기 메뉴.','yakiniku'),
      restaurant('yashichi-v4','라멘 야시치','らーめん弥七',[34.7090,135.4990],'umeda','나카쓰','ramen','닭백탕 라멘','간장 라멘 · 츠케멘',1200,'나카쓰 쪽 닭백탕 계열 라멘.','ramen'),
      restaurant('gozasoro-v4','고자소로 한신 우메다점','御座候 阪神梅田店',[34.6995,135.4989],'umeda','우메다','snack','회전구이 팥빵','붉은팥·흰팥 고자소로',300,'백화점 지하에서 사는 따뜻한 팥 간식.','dango'),
      restaurant('londontea-v4','런던 티룸 도지마점','ロンドンティールーム 堂島店',[34.6969,135.4961],'umeda','도지마','drink','홍차·킷사텐','로열밀크티 · 토스트',1300,'칸막이 좌석의 레트로 홍차 전문점.','coffee'),
      restaurant('lesucre-v4','르 슈크레쾨르 기타신치점','ル・シュクレクール 北新地',[34.6970,135.4968],'umeda','기타신치','breakfast','베이커리','크루아상 · 바게트 · 샌드위치',1500,'아침이나 출국 전 빵 선택지.','coffee'),
      restaurant('sushinooku-v4','스시노오쿠','鮨の奥',[34.7060,135.5112],'tenma','텐마','seafood','스시','니기리 · 사케',4000,'텐마 골목 스시 선택지.','sushi'),
      restaurant('yakiniku-bancho-v4','야키니쿠 반초 텐마점','焼肉万両 天神橋店',[34.7044,135.5107],'tenma','텐마','meat','야키니쿠','소고기 · 호르몬',4500,'텐마에서 예약해 먹는 야키니쿠.','yakiniku'),
      restaurant('tamaya-v4','다코야키 다마야','たこ焼 玉屋',[34.7117,135.5104],'tenma','텐진바시','snack','오마르 새우육수 다코야키','소금 · 소스 다코야키',850,'새우 풍미 반죽의 다코야키.','takoyaki'),
      restaurant('jinseijet-v4','라멘 진세이 JET','ラーメン人生JET',[34.6972,135.4864],'fukushima','후쿠시마','ramen','닭백탕 라멘','토리니코미 소바',1200,'후쿠시마역 가까운 닭백탕.','ramen'),
      restaurant('udonsanku-v4','우동 산쿠','うどん讃く',[34.6943,135.4844],'fukushima','후쿠시마','noodle','아침 우동','카케 우동 · 붓카케',800,'아침부터 가능한 저렴한 우동.','udon'),
      restaurant('endo-v4','엔도스시 중앙시장점','ゑんどう寿司',[34.6829,135.4767],'fukushima','오사카 중앙시장','seafood','츠카미 스시','오마카세 5피스 접시',3500,'시장 안에서 아침 스시.','sushi'),
      restaurant('yaekatsu-v4','야에카쓰','八重勝',[34.6497,135.5054],'shinsekai','장장요코초','fried','쿠시카쓰','소고기·새우·아스파라 꼬치',2800,'장장요코초의 대표적인 쿠시카쓰.','kushikatsu'),
      restaurant('tengu-v4','텐구','てんぐ',[34.6499,135.5052],'shinsekai','장장요코초','fried','쿠시카쓰','쿠시카쓰 · 도테야키',2500,'바 좌석에서 먹는 신세카이식.','kushikatsu'),
      restaurant('yokozuna-v4','쿠시카쓰 요코즈나 쓰텐카쿠점','日本一の串かつ 横綱 通天閣店',[34.6517,135.5056],'shinsekai','쓰텐카쿠','fried','쿠시카쓰','대형 쿠시카쓰 세트',2600,'여럿이 주문하기 쉬운 관광형 매장.','kushikatsu'),
      restaurant('amato-v4','아마토 마에다 아베노 지하점','甘党まえだ あべの地下センター店',[34.6461,135.5133],'abeno','아베노','dessert','미타라시 당고','미타라시 당고 · 안미쓰',900,'달콤짭짤한 당고와 일본식 단맛.','dango'),
      restaurant('menkokoro7-v4','멘토코코로 7','麺と心 7',[34.6426,135.5125],'abeno','아베노','ramen','해산물 백탕 라멘','우오카이라멘',1200,'생선계 국물의 아베노 라멘.','ramen'),
      restaurant('maruyoshi-v4','그릴 마루요시','グリルマルヨシ',[34.6457,135.5134],'abeno','아베노','rice','요쇼쿠','롤캬베츠 · 함박 · 오므라이스',1800,'아베노의 오래된 일본식 양식.','omurice'),
      restaurant('udonkyutaro-v4','우동 큐타로','Udon Kyutaro',[34.6831,135.5027],'honmachi','혼마치','noodle','서서 먹는 우동','스다치 우동 · 붓카케',800,'아침과 점심에 빠르게 먹는 우동.','udon'),
      restaurant('botanicurry-v4','보타니카리','BOTANI:CURRY',[34.6826,135.4991],'honmachi','혼마치','rice','스파이스 카레','보타니카리 · 슈림프 카레',1500,'색감과 향신료가 강한 합성 카레.','curry'),
      restaurant('columbocurry-v4','콜롬비아8 기타하마 본점','Columbia8 北浜本店',[34.6897,135.5071],'kitahama','기타하마','rice','스파이스 카레','키마 카레 · 하나비',1400,'오사카 스파이스 카레 입문.','curry'),
      restaurant('gokan-v4','고칸 기타하마 본관','五感 北浜本館',[34.6908,135.5072],'kitahama','기타하마','dessert','일본식 양과자','롤케이크 · 쌀 디저트',1700,'근대 건축 안에서 먹는 디저트.','cheesecake'),
      restaurant('kitahama-retro-v4','기타하마 레트로','北浜レトロ',[34.6917,135.5074],'kitahama','기타하마','dessert','애프터눈티','스콘 · 케이크 · 홍차',2600,'강변의 영국식 찻집. 대기 가능.','parfait'),
      restaurant('brooklyn-v4','브루클린 로스팅 컴퍼니 기타하마','BROOKLYN ROASTING COMPANY 北浜',[34.6914,135.5085],'kitahama','기타하마','drink','스페셜티 커피','필터 커피 · 라테',900,'강변 테라스와 커피.','coffee'),
      restaurant('takamura-v4','TAKAMURA WINE & COFFEE ROASTERS','TAKAMURA WINE & COFFEE ROASTERS',[34.6861,135.4889],'honmachi','에도보리','drink','와인·커피','핸드드립 · 와인 테이스팅',1400,'낮에는 커피, 저녁에는 와인.','coffee'),
      restaurant('izakayatoyo-v4','이자카야 도요','居酒屋とよ',[34.6990,135.5338],'kyobashi','교바시','alcohol','노상 해산물 이자카야','참치 볼살 구이 · 성게·연어알',3500,'서서 먹는 강렬한 해산물 장면. 영업일 확인 필수.','sushi')
    ]
  };
})();
