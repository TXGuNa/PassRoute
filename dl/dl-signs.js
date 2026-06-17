/* dl-signs.js — inline SVG road-sign graphics + image-based sign-recognition questions, appended to
   the DL "Road Signs" Learning Test. Loaded after dl-data.js. Teaches the standard US (MUTCD) signs
   visually. Each appended question carries a `sign` key; the DL app renders SIGN_SVG[sign] above it. */
(function(){
  var S = window.SIGN_SVG = {};
  // helpers keep each sign a clean, recognizable 120x120 SVG
  function svg(inner){ return '<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" role="img" style="width:150px;height:150px;max-width:60vw">'+inner+'</svg>'; }
  // colors follow the US MUTCD palette: red #c8102e, warning yellow #ffcd00, orange #f47b20,
  // school/ped yellow-green #b6d957, services blue #003f87, regulatory black #1a1a1a.
  S.stop      = svg('<polygon points="37,4 83,4 116,37 116,83 83,116 37,116 4,83 4,37" fill="#c8102e"/><polygon points="41,12 79,12 108,41 108,79 79,108 41,108 12,79 12,41" fill="none" stroke="#fff" stroke-width="3.5"/><text x="60" y="71" font-family="Arial,Helvetica,sans-serif" font-weight="800" font-size="27" fill="#fff" text-anchor="middle" letter-spacing="1">STOP</text>');
  S.yield     = svg('<polygon points="6,15 114,15 60,111" fill="#c8102e"/><polygon points="27,27 93,27 60,86" fill="#fff"/><text x="60" y="52" font-family="Arial,Helvetica,sans-serif" font-weight="800" font-size="17" fill="#c8102e" text-anchor="middle">YIELD</text>');
  S.donotenter= svg('<circle cx="60" cy="60" r="55" fill="#c8102e"/><rect x="22" y="50" width="76" height="20" rx="2" fill="#fff"/>');
  S.wrongway  = svg('<rect x="8" y="32" width="104" height="56" rx="3" fill="#c8102e"/><text x="60" y="56" font-family="Arial,Helvetica,sans-serif" font-weight="800" font-size="17" fill="#fff" text-anchor="middle">WRONG</text><text x="60" y="79" font-family="Arial,Helvetica,sans-serif" font-weight="800" font-size="17" fill="#fff" text-anchor="middle">WAY</text>');
  S.oneway    = svg('<rect x="4" y="42" width="112" height="36" rx="2" fill="#1a1a1a"/><path d="M18 60 H74 M74 60 l-13 -8 M74 60 l-13 8" stroke="#fff" stroke-width="5" fill="none" stroke-linejoin="round"/><text x="95" y="64" font-family="Arial,Helvetica,sans-serif" font-weight="700" font-size="8.5" fill="#fff" text-anchor="middle">ONE WAY</text>');
  S.speed     = svg('<rect x="22" y="5" width="76" height="110" rx="5" fill="#fff" stroke="#1a1a1a" stroke-width="4"/><text x="60" y="33" font-family="Arial,Helvetica,sans-serif" font-weight="700" font-size="13" fill="#1a1a1a" text-anchor="middle">SPEED</text><text x="60" y="49" font-family="Arial,Helvetica,sans-serif" font-weight="700" font-size="13" fill="#1a1a1a" text-anchor="middle">LIMIT</text><text x="60" y="95" font-family="Arial,Helvetica,sans-serif" font-weight="800" font-size="36" fill="#1a1a1a" text-anchor="middle">55</text>');
  S.warning   = svg('<polygon points="60,6 114,60 60,114 6,60" fill="#ffcd00" stroke="#1a1a1a" stroke-width="3"/><text x="60" y="84" font-family="Arial,Helvetica,sans-serif" font-weight="800" font-size="58" fill="#1a1a1a" text-anchor="middle">!</text>');
  S.curve     = svg('<polygon points="60,6 114,60 60,114 6,60" fill="#ffcd00" stroke="#1a1a1a" stroke-width="3"/><path d="M46 98 C46 72 74 70 74 46 L74 34" stroke="#1a1a1a" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M62 40 L74 28 L86 40" stroke="#1a1a1a" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round"/>');
  S.school    = svg('<polygon points="60,5 111,43 91,109 29,109 9,43" fill="#b6d957" stroke="#1a1a1a" stroke-width="3.5"/><g fill="#1a1a1a"><circle cx="46" cy="48" r="6.5"/><path d="M46 55 l-7 18 M46 55 l8 16 M40 60 l-9 5 M50 60 l9 4 M39 73 l-3 18 M54 71 l4 18" stroke="#1a1a1a" stroke-width="4.5" fill="none" stroke-linecap="round"/><circle cx="73" cy="50" r="6"/><path d="M73 56 l6 16 M73 56 l-7 15 M67 61 l-8 4 M79 60 l8 5 M79 72 l3 17 M66 71 l-3 18" stroke="#1a1a1a" stroke-width="4" fill="none" stroke-linecap="round"/></g>');
  S.railroad  = svg('<circle cx="60" cy="60" r="55" fill="#ffcd00" stroke="#1a1a1a" stroke-width="3"/><path d="M40 40 L80 80 M80 40 L40 80" stroke="#1a1a1a" stroke-width="6" stroke-linecap="round"/><text x="32" y="50" font-family="Arial,Helvetica,sans-serif" font-weight="800" font-size="22" fill="#1a1a1a">R</text><text x="70" y="86" font-family="Arial,Helvetica,sans-serif" font-weight="800" font-size="22" fill="#1a1a1a">R</text>');
  S.nopassing = svg('<polygon points="8,14 112,14 8,98" fill="#ffcd00" stroke="#1a1a1a" stroke-width="3"/><text x="42" y="36" font-family="Arial,Helvetica,sans-serif" font-weight="800" font-size="13" fill="#1a1a1a" text-anchor="middle">NO</text><text x="40" y="52" font-family="Arial,Helvetica,sans-serif" font-weight="800" font-size="12" fill="#1a1a1a" text-anchor="middle">PASSING</text><text x="34" y="67" font-family="Arial,Helvetica,sans-serif" font-weight="800" font-size="12" fill="#1a1a1a" text-anchor="middle">ZONE</text>');
  S.construction = svg('<polygon points="60,6 114,60 60,114 6,60" fill="#f47b20" stroke="#1a1a1a" stroke-width="3"/><g fill="#1a1a1a"><circle cx="60" cy="36" r="7"/><path d="M50 30 a10 7 0 0 1 20 0" fill="#1a1a1a"/><path d="M60 44 l-8 22 M60 44 l8 22" stroke="#1a1a1a" stroke-width="5" stroke-linecap="round"/><path d="M44 58 L74 70" stroke="#1a1a1a" stroke-width="5" stroke-linecap="round"/><rect x="40" y="80" width="40" height="9" rx="2"/><path d="M44 89 L54 80 M58 89 L68 80" stroke="#1a1a1a" stroke-width="3"/></g>');
  S.pedestrian= svg('<polygon points="60,6 114,60 60,114 6,60" fill="#b6d957" stroke="#1a1a1a" stroke-width="3"/><g fill="#1a1a1a"><circle cx="58" cy="36" r="7"/><path d="M58 44 l-2 24 M58 50 l-12 6 M58 48 l13 8 M56 68 l-9 22 M56 68 l8 22" stroke="#1a1a1a" stroke-width="5" fill="none" stroke-linecap="round"/></g>');
  S.services  = svg('<rect x="8" y="22" width="104" height="76" rx="4" fill="#003f87"/><rect x="50" y="40" width="20" height="40" fill="#fff"/><rect x="40" y="50" width="40" height="20" fill="#fff"/>');

  if(!window.DL_DATA || !window.DL_I18N) return;
  var D=window.DL_DATA, I=window.DL_I18N, LET=["A","B","C","D"];
  var cat=D.categories.find(function(c){return c.id==="learn-road-signs";}); if(!cat) return;

  // image questions: {sign, q, options[4], answer, expl}  + 5-lang option labels
  var Q=[
    {sign:"stop", a:0, opts:["Come to a complete stop","Slow down only","Yield to the right","No turns"], expl:"The red octagon means STOP — come to a complete stop."},
    {sign:"yield", a:0, opts:["Give the right of way (yield)","Stop completely","No entry","One way"], expl:"The inverted triangle means YIELD — give the right of way."},
    {sign:"donotenter", a:0, opts:["Do not enter","Roundabout ahead","No parking","Hospital"], expl:"A red circle with a white bar means DO NOT ENTER."},
    {sign:"wrongway", a:0, opts:["You are going the wrong way","Detour ahead","Dead end","Construction"], expl:"WRONG WAY — you are driving against traffic; turn around."},
    {sign:"oneway", a:0, opts:["Traffic flows one way (arrow)","Two-way traffic","No passing","Bike lane"], expl:"ONE WAY — travel only in the direction of the arrow."},
    {sign:"speed", a:0, opts:["Maximum speed limit","Minimum speed","Recommended curve speed","Distance marker"], expl:"A white rectangle with a number is the maximum SPEED LIMIT."},
    {sign:"warning", a:0, opts:["General warning / hazard ahead","Stop ahead","Speed limit","Rest area"], expl:"A yellow diamond is a WARNING of a hazard or condition ahead."},
    {sign:"curve", a:0, opts:["Curve in the road ahead","Slippery road","Merge","Divided highway"], expl:"A yellow diamond with a curving arrow warns of a CURVE ahead."},
    {sign:"school", a:0, opts:["School zone / crossing","Pedestrian mall","Playground only","No children"], expl:"A 5-sided (pentagon) sign marks a SCHOOL ZONE or crossing."},
    {sign:"railroad", a:0, opts:["Railroad crossing ahead","Road work","Hospital","Crossroad"], expl:"A round yellow sign with RR warns of a RAILROAD CROSSING ahead."},
    {sign:"nopassing", a:0, opts:["No passing zone","Yield","Narrow bridge","Lane ends"], expl:"A pennant (side triangle) on the left marks a NO PASSING zone."},
    {sign:"construction", a:0, opts:["Construction / work zone","School zone","Scenic area","Rest stop"], expl:"An ORANGE diamond means a CONSTRUCTION or work zone."},
    {sign:"pedestrian", a:0, opts:["Pedestrian crossing","Bus stop","No walking","Hospital"], expl:"A fluorescent yellow-green sign warns of a PEDESTRIAN crossing."},
    {sign:"services", a:0, opts:["Motorist services (e.g. hospital)","Recreation area","Detour","Toll road"], expl:"A BLUE sign shows motorist services like hospitals, gas, or food."}
  ];
  // localized question stem + short option translations
  var STEM={en:"What does this road sign mean?",es:"¿Qué significa esta señal de tránsito?",ru:"Что означает этот дорожный знак?",tr:"Bu trafik işareti ne anlama gelir?",hi:"इस सड़क संकेत का क्या अर्थ है?",ar:"ماذا تعني إشارة المرور هذه؟"};
  var TR={ // option text -> {es,ru,tr,hi}
    "Come to a complete stop":{es:"Detenerse por completo",ru:"Полная остановка",tr:"Tamamen dur",hi:"पूरी तरह रुकें"},
    "Give the right of way (yield)":{es:"Ceder el paso",ru:"Уступить дорогу",tr:"Yol ver",hi:"रास्ता दें"},
    "Do not enter":{es:"No entrar",ru:"Въезд запрещён",tr:"Girilmez",hi:"प्रवेश निषेध"},
    "You are going the wrong way":{es:"Va en sentido contrario",ru:"Вы едете не туда",tr:"Yanlış yöne gidiyorsunuz",hi:"आप गलत दिशा में हैं"},
    "Traffic flows one way (arrow)":{es:"Sentido único (flecha)",ru:"Одностороннее движение",tr:"Tek yön (ok)",hi:"एकतरफा यातायात"},
    "Maximum speed limit":{es:"Límite máximo de velocidad",ru:"Максимальная скорость",tr:"Azami hız sınırı",hi:"अधिकतम गति सीमा"},
    "General warning / hazard ahead":{es:"Advertencia / peligro adelante",ru:"Предупреждение об опасности",tr:"Genel uyarı / ileride tehlike",hi:"सामान्य चेतावनी / आगे खतरा"},
    "Curve in the road ahead":{es:"Curva adelante",ru:"Впереди поворот",tr:"İleride viraj",hi:"आगे मोड़"},
    "School zone / crossing":{es:"Zona escolar / cruce",ru:"Школьная зона / переход",tr:"Okul bölgesi / geçidi",hi:"स्कूल क्षेत्र / क्रॉसिंग"},
    "Railroad crossing ahead":{es:"Cruce de ferrocarril adelante",ru:"Впереди ж/д переезд",tr:"İleride demir yolu geçidi",hi:"आगे रेलवे क्रॉसिंग"},
    "No passing zone":{es:"Zona de no rebasar",ru:"Зона запрета обгона",tr:"Geçiş yasağı bölgesi",hi:"ओवरटेक निषेध क्षेत्र"},
    "Construction / work zone":{es:"Zona de construcción",ru:"Зона дорожных работ",tr:"İnşaat / çalışma bölgesi",hi:"निर्माण / कार्य क्षेत्र"},
    "Pedestrian crossing":{es:"Cruce de peatones",ru:"Пешеходный переход",tr:"Yaya geçidi",hi:"पैदल यात्री क्रॉसिंग"},
    "Motorist services (e.g. hospital)":{es:"Servicios al conductor",ru:"Услуги для водителей",tr:"Sürücü hizmetleri",hi:"चालक सेवाएँ"},
    // distractors (best-effort short)
    "Slow down only":{es:"Solo reducir",ru:"Только замедлиться",tr:"Sadece yavaşla",hi:"केवल धीमा करें"},
    "Yield to the right":{es:"Ceder a la derecha",ru:"Уступить справа",tr:"Sağa yol ver",hi:"दाईं ओर रास्ता दें"},
    "No turns":{es:"Sin giros",ru:"Без поворотов",tr:"Dönüş yok",hi:"कोई मोड़ नहीं"},
    "Stop completely":{es:"Detenerse del todo",ru:"Полностью остановиться",tr:"Tamamen dur",hi:"पूरी तरह रुकें"},
    "No entry":{es:"Prohibido el paso",ru:"Нет въезда",tr:"Giriş yok",hi:"प्रवेश नहीं"},
    "One way":{es:"Sentido único",ru:"Односторонняя",tr:"Tek yön",hi:"एकतरफा"},
    "Roundabout ahead":{es:"Rotonda adelante",ru:"Впереди круг",tr:"İleride dönel kavşak",hi:"आगे गोलचक्कर"},
    "No parking":{es:"No estacionar",ru:"Стоянка запрещена",tr:"Park yasak",hi:"पार्किंग नहीं"},
    "Hospital":{es:"Hospital",ru:"Больница",tr:"Hastane",hi:"अस्पताल"},
    "Detour ahead":{es:"Desvío adelante",ru:"Впереди объезд",tr:"İleride sapma",hi:"आगे मोड़मार्ग"},
    "Dead end":{es:"Sin salida",ru:"Тупик",tr:"Çıkmaz yol",hi:"बंद रास्ता"},
    "Construction":{es:"Construcción",ru:"Стройка",tr:"İnşaat",hi:"निर्माण"},
    "Two-way traffic":{es:"Doble sentido",ru:"Двустороннее движение",tr:"Çift yön",hi:"दोतरफा यातायात"},
    "No passing":{es:"No rebasar",ru:"Обгон запрещён",tr:"Geçme yasak",hi:"ओवरटेक मना"},
    "Bike lane":{es:"Carril de bici",ru:"Велополоса",tr:"Bisiklet şeridi",hi:"साइकिल लेन"},
    "Minimum speed":{es:"Velocidad mínima",ru:"Минимальная скорость",tr:"Asgari hız",hi:"न्यूनतम गति"},
    "Recommended curve speed":{es:"Velocidad en curva",ru:"Скорость на повороте",tr:"Viraj hızı",hi:"मोड़ की गति"},
    "Distance marker":{es:"Marcador de distancia",ru:"Указатель расстояния",tr:"Mesafe işareti",hi:"दूरी चिह्न"},
    "Stop ahead":{es:"Alto adelante",ru:"Впереди стоп",tr:"İleride dur",hi:"आगे रुकें"},
    "Speed limit":{es:"Límite de velocidad",ru:"Ограничение скорости",tr:"Hız sınırı",hi:"गति सीमा"},
    "Rest area":{es:"Área de descanso",ru:"Зона отдыха",tr:"Dinlenme alanı",hi:"विश्राम क्षेत्र"},
    "Slippery road":{es:"Camino resbaloso",ru:"Скользкая дорога",tr:"Kaygan yol",hi:"फिसलन भरी सड़क"},
    "Merge":{es:"Incorporación",ru:"Слияние",tr:"Birleşme",hi:"विलय"},
    "Divided highway":{es:"Vía dividida",ru:"Разделённое шоссе",tr:"Bölünmüş yol",hi:"विभाजित राजमार्ग"},
    "Pedestrian mall":{es:"Paseo peatonal",ru:"Пешеходная зона",tr:"Yaya bölgesi",hi:"पैदल बाज़ार"},
    "Playground only":{es:"Solo parque infantil",ru:"Только площадка",tr:"Sadece oyun alanı",hi:"केवल खेल का मैदान"},
    "No children":{es:"Sin niños",ru:"Без детей",tr:"Çocuk yok",hi:"कोई बच्चे नहीं"},
    "Road work":{es:"Obras",ru:"Дорожные работы",tr:"Yol çalışması",hi:"सड़क कार्य"},
    "Crossroad":{es:"Encrucijada",ru:"Перекрёсток",tr:"Kavşak",hi:"चौराहा"},
    "Narrow bridge":{es:"Puente angosto",ru:"Узкий мост",tr:"Dar köprü",hi:"संकरा पुल"},
    "Lane ends":{es:"Fin de carril",ru:"Полоса заканчивается",tr:"Şerit biter",hi:"लेन समाप्त"},
    "Scenic area":{es:"Área escénica",ru:"Живописная зона",tr:"Manzara alanı",hi:"दर्शनीय क्षेत्र"},
    "Rest stop":{es:"Parada de descanso",ru:"Место отдыха",tr:"Dinlenme durağı",hi:"विश्राम स्थल"},
    "Bus stop":{es:"Parada de autobús",ru:"Автобусная остановка",tr:"Otobüs durağı",hi:"बस स्टॉप"},
    "No walking":{es:"No caminar",ru:"Ходьба запрещена",tr:"Yürünmez",hi:"पैदल मना"},
    "Recreation area":{es:"Área recreativa",ru:"Зона отдыха",tr:"Rekreasyon alanı",hi:"मनोरंजन क्षेत्र"},
    "Detour":{es:"Desvío",ru:"Объезд",tr:"Sapma",hi:"मोड़मार्ग"},
    "Toll road":{es:"Carretera de peaje",ru:"Платная дорога",tr:"Paralı yol",hi:"टोल सड़क"}
  };
  // Arabic option translations (the 6th language) — merged into the TR map above
  var AR={"Come to a complete stop":"توقّف توقفاً كاملاً","Give the right of way (yield)":"امنح حق المرور (أفسح الطريق)","Do not enter":"ممنوع الدخول","You are going the wrong way":"أنت تسير في الاتجاه الخاطئ","Traffic flows one way (arrow)":"المرور باتجاه واحد (السهم)","Maximum speed limit":"الحد الأقصى للسرعة","General warning / hazard ahead":"تحذير عام / خطر في الأمام","Curve in the road ahead":"منعطف في الطريق أمامك","School zone / crossing":"منطقة مدرسة / معبر","Railroad crossing ahead":"مزلقان سكة حديد أمامك","No passing zone":"منطقة ممنوع التجاوز","Construction / work zone":"منطقة إنشاءات / عمل","Pedestrian crossing":"معبر مشاة","Motorist services (e.g. hospital)":"خدمات للسائقين (مثل المستشفى)","Slow down only":"أبطئ فقط","Yield to the right":"أفسح لليمين","No turns":"ممنوع الانعطاف","Stop completely":"توقّف تماماً","No entry":"ممنوع الدخول","One way":"اتجاه واحد","Roundabout ahead":"دوّار أمامك","No parking":"ممنوع الوقوف","Hospital":"مستشفى","Detour ahead":"تحويلة أمامك","Dead end":"طريق مسدود","Construction":"إنشاءات","Two-way traffic":"مرور باتجاهين","No passing":"ممنوع التجاوز","Bike lane":"مسار دراجات","Minimum speed":"السرعة الدنيا","Recommended curve speed":"سرعة المنعطف الموصى بها","Distance marker":"علامة مسافة","Stop ahead":"توقّف أمامك","Speed limit":"حد السرعة","Rest area":"منطقة استراحة","Slippery road":"طريق زلق","Merge":"اندماج","Divided highway":"طريق مقسوم","Pedestrian mall":"ممشى للمشاة","Playground only":"ملعب فقط","No children":"ممنوع الأطفال","Road work":"أعمال طرق","Crossroad":"تقاطع طرق","Narrow bridge":"جسر ضيق","Lane ends":"نهاية المسار","Scenic area":"منطقة ذات مناظر","Rest stop":"محطة استراحة","Bus stop":"موقف حافلات","No walking":"ممنوع المشي","Recreation area":"منطقة ترفيهية","Detour":"تحويلة","Toll road":"طريق برسوم"};
  Object.keys(AR).forEach(function(o){ TR[o]=TR[o]||{}; TR[o].ar=AR[o]; });
  function trOpt(o,L){ if(L==="en") return o; var m=TR[o]; return (m&&m[L])||o; }

  var startIdx=cat.questions.length;
  Q.forEach(function(item,k){
    var idx=startIdx+k;
    cat.questions.push({ q:STEM.en, options:item.opts.slice(), answer:item.a, explanation:item.expl, handbook:item.expl, hbref:"Road signs", sign:item.sign, qid:"DL-SIGNIMG-"+(k+1) });
    ["ru","tr","es","hi","ar"].forEach(function(L){ I.q[L]=I.q[L]||{}; I.q[L]["learn-road-signs"]=I.q[L]["learn-road-signs"]||{};
      I.q[L]["learn-road-signs"][idx]={ q:STEM[L]||STEM.en, options:item.opts.map(function(o){return trOpt(o,L);}), explanation:item.expl }; });
  });
})();
