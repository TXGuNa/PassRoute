/* =====================================================================
   PassRoute — Skills Test detailed guides (EN/TR/RU).
   Three separate parts, each with its own detail page:
     pre-trip (uses the full Pre-Trip Inspection Guide),
     basic vehicle control, and the on-road driving test,
   plus shared "what to bring" and "attempts/fees" cards.
   ===================================================================== */
window.SKILLS = {
  en:{
    intro:"After you pass the knowledge tests and hold your CLP at least 14 days (and finish ELDT), you take the in-person skills test. It has three separate parts — all scored, all must be passed. In Texas it is given by a DPS-approved third-party tester: you schedule and pay at the testing site and provide your own representative Class A vehicle.",
    tests:[
      {ico:"📋",t:"Pre-Trip Vehicle Inspection",route:"pretrip",blurb:"Verbal walk-around — name each part and say what you check. About 30–45 minutes."},
      {ico:"🔄",t:"Basic Vehicle Control",route:"basic",blurb:"Closed-course backing and parking maneuvers, scored on touches, pull-ups and accuracy."},
      {ico:"🛣️",t:"On-Road Driving Test",route:"road",blurb:"Drive a set route in real traffic with the examiner. About 30–60 minutes."}
    ],
    basic:{ico:"🔄",t:"Basic Vehicle Control",
      intro:"On a closed course you perform backing and parking maneuvers that show you can judge clearances and place the vehicle precisely. The examiner counts boundary touches/crossings, pull-ups (stopping and pulling forward to reposition), and how far your final stop is from the target — fewer points is better.",
      items:[
        "Straight-line backing: back in a straight line between two rows of cones without touching them or pulling forward",
        "Offset back (right or left): while backing, move the rig over into a lane offset to one side, then straighten",
        "Parallel park — driver side: back into a parallel space on your left and get fully inside the box",
        "Parallel park — conventional / sight side: back into a space on your right (harder, it's your blind side)",
        "Alley dock: back into a 90° dock from the side and stop with the rear of the trailer near the back line",
        "A 'pull-up' (stop, pull forward, re-try) is allowed but costs points — still better than touching a line",
        "Touching or crossing a boundary line or cone adds points; your final stop should be square and on the line",
        "Use both mirrors constantly, go slow, and steer with small corrections"]},
    road:{ico:"🛣️",t:"On-Road Driving Test",
      intro:"You drive a set route on public roads while the examiner gives directions and scores how safely you handle real traffic. Drive smoothly, keep space, signal early, and obey every sign and signal.",
      items:[
        "Turns: get into the correct lane early, signal, don't swing wide before a right turn, and check mirrors",
        "Intersections: scan left and right, yield the right-of-way, stop behind the line, and go only when clear",
        "Lane changes & merging: check mirrors and blind spots, signal, and move over smoothly with a safe gap",
        "Curves & grades: slow down before a curve; choose a safe low gear on hills and don't ride the brakes",
        "Railroad crossings: look and listen, never stop on the tracks, and cross only when it is clear",
        "Speed & space: keep a safe following distance and adjust speed for traffic and weather",
        "Stops: brake smoothly and stop fully behind lines and crosswalks",
        "Scored on lane keeping, signaling, mirror checks, obeying signs/signals, and overall smoothness"]},
    bring:{ico:"🎒",t:"What to bring",items:[
      "Your validated Commercial Learner's Permit (held at least 14 days)",
      "A valid DOT medical certificate (less than 2 years old)",
      "A licensed CDL driver (21+) of the same class or higher, riding with you",
      "Your own representative Class A vehicle that has passed inspection",
      "The vehicle's valid registration and proof of insurance"]},
    attempts:{ico:"🔁",t:"Attempts, fees & timing",items:[
      "You generally get up to 3 attempts within the testing period; after 3 fails you re-apply and pay again",
      "Third-party skills testers set and charge their own fee, often per attempt",
      "Hold the CLP at least 14 days and finish ELDT before testing",
      "Plan 2–3 hours total and arrive 30–45 minutes early",
      "Always confirm the current attempt limits and fees with DPS or your testing site"]}
  },
  tr:{
    intro:"Yazılı sınavları geçip CLP'ni en az 14 gün taşıdıktan (ve ELDT'yi bitirdikten) sonra yüz yüze beceri sınavına girersin. Üç ayrı parçadan oluşur — hepsi puanlanır, üçünü de geçmen gerekir. Texas'ta bunu DPS onaylı üçüncü taraf görevli yapar: randevu ve ödeme test merkezinde olur ve kendi Class A aracını getirirsin.",
    tests:[
      {ico:"📋",t:"Sefer Öncesi Araç Muayenesi",route:"pretrip",blurb:"Sözlü tur — her parçayı adlandır ve neyi kontrol ettiğini söyle. Yaklaşık 30–45 dakika."},
      {ico:"🔄",t:"Temel Araç Kontrolü",route:"basic",blurb:"Kapalı alanda geri/park manevraları; değme, pull-up ve isabete göre puanlanır."},
      {ico:"🛣️",t:"Yolda Sürüş Sınavı",route:"road",blurb:"Sınav görevlisiyle gerçek trafikte belirlenen rotada sür. Yaklaşık 30–60 dakika."}
    ],
    basic:{ico:"🔄",t:"Temel Araç Kontrolü",
      intro:"Kapalı alanda, açıklıkları değerlendirip aracı hassas yerleştirebildiğini gösteren geri/park manevraları yaparsın. Görevli; çizgi/koniye değme-geçme, pull-up (durup ileri çekerek yeniden konumlanma) ve son duruşun hedeften ne kadar şaştığını sayar — az puan iyidir.",
      items:[
        "Düz çizgide geri: iki koni sırası arasında, değmeden ve ileri çekmeden düz geri git",
        "Offset geri (sağ/sol): geri giderken aracı bir yana kaymış şeride al, sonra doğrult",
        "Paralel park — sürücü tarafı: solundaki paralel boşluğa geri gir ve tamamen içine al",
        "Paralel park — geleneksel / görüş tarafı: sağındaki boşluğa geri gir (daha zor, kör tarafın)",
        "Alley dock: yandan 90°'lik dock'a geri gir ve römork arkası arka çizgi yakınında dursun",
        "'Pull-up' (durup ileri çekip yeniden deneme) serbest ama puan götürür — yine de çizgiye değmekten iyidir",
        "Sınır çizgisine/koniye değmek veya geçmek puan ekler; son duruşun düzgün ve çizgide olmalı",
        "İki aynayı sürekli kullan, yavaş git ve küçük düzeltmelerle direksiyon kır"]},
    road:{ico:"🛣️",t:"Yolda Sürüş Sınavı",
      intro:"Sınav görevlisi yön verirken gerçek trafikte belirlenen rotada sürersin; trafiği ne kadar güvenli yönettiğin puanlanır. Yumuşak sür, mesafe bırak, erken sinyal ver ve tüm işaret/ışıklara uy.",
      items:[
        "Dönüşler: erkenden doğru şeride gir, sinyal ver, sağa dönmeden geniş açılma, aynaları kontrol et",
        "Kavşaklar: sol-sağ tara, geçiş hakkını ver, çizgi gerisinde dur ve sadece yol açıkken geç",
        "Şerit değişimi ve katılma: ayna ve kör noktayı kontrol et, sinyal ver, güvenli boşlukla yumuşak geç",
        "Viraj ve yokuşlar: virajdan önce yavaşla; yokuşta güvenli düşük vites seç, frene sürekli basma",
        "Hemzemin geçitler: bak-dinle, rayda asla durma, sadece yol açıkken geç",
        "Hız ve mesafe: güvenli takip mesafesi tut, hızı trafik ve havaya göre ayarla",
        "Duruşlar: yumuşak frenle; çizgi ve yaya geçidi gerisinde tam dur",
        "Şeritte kalma, sinyal, ayna kontrolü, işaret/ışık uyumu ve genel yumuşaklık puanlanır"]},
    bring:{ico:"🎒",t:"Yanında getir",items:[
      "Onaylı CLP'n (en az 14 gün taşınmış)",
      "Geçerli DOT medical sertifikası (2 yıldan eski olmayan)",
      "Aynı sınıf veya üstü, ehliyetli bir CDL sürücüsü (21+) yanında",
      "Muayeneden geçmiş, kendi Class A temsili aracın",
      "Aracın geçerli ruhsatı ve sigorta kanıtı"]},
    attempts:{ico:"🔁",t:"Deneme, ücret ve zamanlama",items:[
      "Genelde test döneminde 3 deneme hakkın olur; 3 kez kalırsan yeniden başvurup tekrar ödersin",
      "Üçüncü taraf görevliler kendi ücretini belirler, genelde deneme başına alır",
      "Sınavdan önce CLP'yi en az 14 gün taşı ve ELDT'yi bitir",
      "Toplam 2–3 saat ayır ve 30–45 dakika erken git",
      "Güncel deneme sınırı ve ücretleri DPS veya test merkezinden teyit et"]}
  },
  ru:{
    intro:"Сдав письменные тесты и продержав CLP минимум 14 дней (и закончив ELDT), ты идёшь на очный экзамен навыков. Он из трёх отдельных частей — все оцениваются, нужно сдать все три. В Техасе его принимает одобренный DPS сторонний экзаменатор: запись и оплата на площадке, и ты предоставляешь свой представительный автомобиль класса A.",
    tests:[
      {ico:"📋",t:"Предрейсовый осмотр ТС",route:"pretrip",blurb:"Устный обход — называй каждую деталь и что проверяешь. Около 30–45 минут."},
      {ico:"🔄",t:"Базовое управление",route:"basic",blurb:"Манёвры задним ходом и парковка на площадке; оценка за касания, pull-up и точность."},
      {ico:"🛣️",t:"Экзамен по вождению",route:"road",blurb:"Едешь по маршруту в реальном трафике с экзаменатором. Около 30–60 минут."}
    ],
    basic:{ico:"🔄",t:"Базовое управление",
      intro:"На площадке выполняешь манёвры задним ходом и парковку, показывая, что верно оцениваешь зазоры и точно ставишь ТС. Экзаменатор считает касания/пересечения границ, повторные подачи (pull-up) и насколько финальная остановка отклонилась от цели — меньше баллов лучше.",
      items:[
        "Задним ходом по прямой: между двумя рядами конусов, не касаясь их и не выезжая вперёд",
        "Со смещением (вправо/влево): при сдаче назад перемести состав в смещённую полосу и выровняй",
        "Параллельная парковка — со стороны водителя: задним ходом в место слева, полностью в коробке",
        "Параллельная — обычная / со стороны видимости: задним ходом вправо (труднее, слепая сторона)",
        "Постановка в карман (alley dock): задним ходом в 90° карман сбоку, стоп у задней линии",
        "«Pull-up» (остановиться, подать вперёд, повторить) разрешён, но снимает баллы — лучше, чем задеть линию",
        "Касание/пересечение границы или конуса добавляет баллы; финальная остановка — ровно по линии",
        "Постоянно смотри в оба зеркала, двигайся медленно и руль — мелкими поправками"]},
    road:{ico:"🛣️",t:"Экзамен по вождению",
      intro:"Едешь по заданному маршруту по дорогам общего пользования, экзаменатор даёт указания и оценивает, насколько безопасно ты ведёшь в реальном трафике. Веди плавно, держи дистанцию, сигналь заранее и соблюдай все знаки и сигналы.",
      items:[
        "Повороты: заранее займи нужную полосу, сигналь, не виляй перед правым поворотом, смотри в зеркала",
        "Перекрёстки: осмотрись по сторонам, уступи приоритет, остановись за линией и поезжай только когда чисто",
        "Смена полос и перестроение: проверь зеркала и слепые зоны, сигналь, перестройся плавно с запасом",
        "Повороты и подъёмы: снижай скорость перед поворотом; на горке выбери низшую передачу, не «вешайся» на тормоз",
        "Ж/д переезды: смотри и слушай, никогда не стой на путях, переезжай только когда чисто",
        "Скорость и дистанция: держи безопасную дистанцию и подстраивай скорость под трафик и погоду",
        "Остановки: тормози плавно и останавливайся за линиями и переходами",
        "Оценка за удержание полосы, сигналы, проверку зеркал, соблюдение знаков и общую плавность"]},
    bring:{ico:"🎒",t:"Что взять с собой",items:[
      "Подтверждённый CLP (продержанный не менее 14 дней)",
      "Действующую DOT-медсправку (моложе 2 лет)",
      "Лицензированного водителя CDL (21+) того же класса или выше рядом",
      "Свой представительный автомобиль класса A, прошедший техосмотр",
      "Действующую регистрацию ТС и подтверждение страховки"]},
    attempts:{ico:"🔁",t:"Попытки, оплата и сроки",items:[
      "Обычно до 3 попыток за период тестирования; после 3 провалов — повторная подача и оплата",
      "Сторонние экзаменаторы устанавливают свою плату, часто за попытку",
      "Перед экзаменом продержи CLP минимум 14 дней и закончи ELDT",
      "Заложи 2–3 часа и приезжай на 30–45 минут раньше",
      "Всегда уточняй текущие лимиты попыток и оплату в DPS или на площадке"]}
  }
};
