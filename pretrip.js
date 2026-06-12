/* =====================================================================
   PassRoute — Pre-Trip Inspection visual guide data (EN/TR/RU).
   The skills-test pre-trip is verbal: point to each part, name it, and
   say what you check and what a defect looks like. Loaded before app JS.
   ===================================================================== */
window.PRETRIP = {
  en:{
    intro:"On the skills test the pre-trip is verbal: point to each part, name it, and say what you check and what a defect would look like. Work through the engine, the cab, the lights, a full walk-around, the coupling, the trailer, and the air-brake check.",
    sections:[
      {ico:"🔧",t:"Engine compartment",items:["Engine oil at the proper level","Coolant level OK (radiator / overflow)","Power-steering fluid OK","Belts not frayed, cracked, or loose","Hoses not cracked or leaking","No puddles or leaks under the engine","Alternator and water pump mounted secure"]},
      {ico:"🪑",t:"In the cab / start up",items:["Parking brake set, gearshift in neutral","Start up: oil pressure rises, gauges normal","Warning lights and buzzers go out","Air pressure builds to normal","Horn (city and air) works","Wipers, washer, heater / defroster work","Mirrors and windshield clean","Seat belt secure and not torn"]},
      {ico:"💡",t:"Lights & signals",items:["Low and high beam headlights","Left and right turn signals","Four-way hazard flashers","Brake lights come on","Marker, clearance, and tail lights","Reflectors clean and the correct color"]},
      {ico:"🚚",t:"Front of the vehicle",items:["Windshield clean, not badly cracked","Wiper blades not worn or stiff","Front lights and reflectors clean","Front tires: tread, inflation, no cuts","Steering parts tight, not worn"]},
      {ico:"🛞",t:"Driver & fuel side",items:["Door and mirror mounted secure","Fuel tank secure, cap tight, no leaks","Frame and cross-members not cracked","Tires: good tread, even wear, proper air, no cuts","Wheels / rims: no cracks, lug nuts tight","Suspension: springs, shocks, mounts OK","Brakes: drum, linings, slack adjuster, hoses, chamber"]},
      {ico:"🔗",t:"Coupling system",items:["Fifth wheel locked, no gap to the apron","Kingpin and apron secure","Locking jaws closed around the kingpin","Release arm in the locked position","Mounting bolts present and tight","Air & electrical lines connected, not dragging","Landing gear fully raised, handle secured"]},
      {ico:"🚛",t:"Rear & trailer",items:["Trailer frame and body in good shape","Doors and cargo ties secure","Lights and reflectors work","Mud flaps present and secure","Rear (ICC) bumper secure","Trailer tires and wheels OK","License plate present and lit"]},
      {ico:"🛑",t:"Air-brake check (3 parts)",items:["Charge the system, then turn the engine off","Released brakes: pressure drop within limit in 1 min","Apply brakes: pressure drop within limit","Pump down: low-air warning by about 60 psi","Keep pumping: spring brakes pop out (~20–45 psi)","Rebuild to governor cut-out (~125 psi)","Roll at ~5 mph and test the service brakes"]}
    ]
  },
  tr:{
    intro:"Beceri sınavında pre-trip sözlüdür: her parçayı göster, adını söyle ve neyi kontrol ettiğini, arıza belirtisinin neye benzediğini anlat. Sırayla motor, kabin, ışıklar, tam tur, bağlantı, römork ve hava freni kontrolünü yap.",
    sections:[
      {ico:"🔧",t:"Motor bölmesi",items:["Motor yağı uygun seviyede","Soğutma sıvısı seviyesi tamam","Hidrolik direksiyon sıvısı tamam","Kayışlar yıpranmamış, çatlak veya gevşek değil","Hortumlar çatlak değil, sızdırmıyor","Motor altında gölet veya kaçak yok","Alternatör ve su pompası sağlam takılı"]},
      {ico:"🪑",t:"Kabin / çalıştırma",items:["El freni çekili, vites boşta","Çalıştır: yağ basıncı yükselir, göstergeler normal","Uyarı ışıkları ve sesleri söner","Hava basıncı normale yükselir","Korna (şehir ve hava) çalışır","Silecek, fıskiye, kalorifer / defroster çalışır","Aynalar ve ön cam temiz","Emniyet kemeri sağlam, yırtık değil"]},
      {ico:"💡",t:"Işıklar ve sinyaller",items:["Kısa ve uzun far","Sol ve sağ sinyal","Dörtlü flaşörler","Fren lambaları yanar","Gabari, kenar ve stop lambaları","Yansıtıcılar temiz ve doğru renkte"]},
      {ico:"🚚",t:"Aracın önü",items:["Ön cam temiz, ağır çatlak yok","Silecek lastikleri yıpranmamış","Ön ışıklar ve yansıtıcılar temiz","Ön lastikler: diş, hava, kesik yok","Direksiyon parçaları sıkı, aşınmamış"]},
      {ico:"🛞",t:"Sürücü ve yakıt tarafı",items:["Kapı ve ayna sağlam takılı","Yakıt deposu sağlam, kapağı sıkı, kaçak yok","Şasi ve traversler çatlak değil","Lastikler: diş, düzgün aşınma, doğru hava, kesik yok","Jantlar: çatlak yok, bijonlar sıkı","Süspansiyon: yaylar, amortisörler, bağlantılar tamam","Frenler: kampana, balata, slack adjuster, hortum, körük"]},
      {ico:"🔗",t:"Bağlantı (coupling) sistemi",items:["Beşinci teker kilitli, apron ile boşluk yok","Kingpin ve apron sağlam","Kilit çeneleri kingpin etrafında kapalı","Açma kolu kilitli konumda","Montaj cıvataları var ve sıkı","Hava ve elektrik hatları bağlı, sürtmüyor","Landing gear tam yukarıda, kolu sabit"]},
      {ico:"🚛",t:"Arka ve römork",items:["Römork şasi ve gövdesi iyi durumda","Kapılar ve yük bağları sağlam","Işıklar ve yansıtıcılar çalışır","Paçalıklar var ve sağlam","Arka (ICC) tampon sağlam","Römork lastik ve jantları tamam","Plaka var ve aydınlatılmış"]},
      {ico:"🛑",t:"Hava freni kontrolü (3 parça)",items:["Sistemi doldur, sonra motoru kapat","Frenler bırakık: 1 dakikada basınç düşüşü limitte","Fren uygula: basınç düşüşü limitte","Pompala: düşük hava uyarısı ~60 psi'de","Pompalamaya devam: yay frenleri ~20–45 psi'de devreye","Tekrar governor cut-out'a (~125 psi) doldur","~5 mph'te yuvarlanıp servis frenini test et"]}
    ]
  },
  ru:{
    intro:"На экзамене навыков pre-trip — устный: показывай каждую деталь, называй её и говори, что проверяешь и как выглядит неисправность. Пройди двигатель, кабину, огни, полный обход, сцепку, прицеп и проверку пневмотормозов.",
    sections:[
      {ico:"🔧",t:"Моторный отсек",items:["Уровень моторного масла в норме","Уровень охлаждающей жидкости в норме","Жидкость ГУР в норме","Ремни не потёрты, не треснуты и не ослаблены","Шланги без трещин и течей","Под двигателем нет луж и течей","Генератор и помпа закреплены надёжно"]},
      {ico:"🪑",t:"Кабина / запуск",items:["Стояночный тормоз включён, передача нейтральная","Запуск: давление масла растёт, приборы в норме","Контрольные лампы и зуммеры гаснут","Давление воздуха растёт до нормы","Сигнал (городской и пневмо) работает","Дворники, омыватель, печка / обдув работают","Зеркала и лобовое стекло чистые","Ремень безопасности цел и не порван"]},
      {ico:"💡",t:"Огни и сигналы",items:["Ближний и дальний свет","Левые и правые поворотники","Аварийная сигнализация","Стоп-сигналы загораются","Габаритные, контурные и задние огни","Светоотражатели чистые и нужного цвета"]},
      {ico:"🚚",t:"Перед автомобиля",items:["Лобовое стекло чистое, без сильных трещин","Щётки дворников не изношены","Передние огни и отражатели чистые","Передние шины: протектор, давление, без порезов","Детали рулевого затянуты, не изношены"]},
      {ico:"🛞",t:"Сторона водителя и бак",items:["Дверь и зеркало закреплены","Топливный бак закреплён, крышка плотная, без течи","Рама и поперечины без трещин","Шины: протектор, ровный износ, давление, без порезов","Диски: без трещин, гайки затянуты","Подвеска: рессоры, амортизаторы, крепления в норме","Тормоза: барабан, накладки, slack adjuster, шланги, камера"]},
      {ico:"🔗",t:"Сцепное устройство",items:["Седло заперто, нет зазора с апроном","Шкворень и апрон закреплены","Челюсти сомкнуты вокруг шкворня","Рычаг расцепки в запертом положении","Болты крепления на месте и затянуты","Воздушные и электролинии подключены, не волочатся","Опоры полностью подняты, рукоятка закреплена"]},
      {ico:"🚛",t:"Зад и прицеп",items:["Рама и кузов прицепа в порядке","Двери и крепления груза надёжны","Огни и отражатели работают","Брызговики на месте и закреплены","Задний (ICC) бампер закреплён","Шины и диски прицепа в норме","Номерной знак на месте и подсвечен"]},
      {ico:"🛑",t:"Проверка пневмотормозов (3 части)",items:["Накачай систему, затем заглуши двигатель","Тормоза отпущены: падение давления в пределах за 1 мин","Нажми тормоз: падение давления в пределах","Спускай: предупреждение низкого давления около 60 psi","Качай дальше: пружинные тормоза срабатывают (~20–45 psi)","Накачай снова до cut-out (~125 psi)","Прокатись ~5 миль/ч и проверь рабочие тормоза"]}
    ]
  }
};
