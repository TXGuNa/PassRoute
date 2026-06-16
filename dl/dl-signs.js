/* dl-signs.js — inline SVG road-sign graphics + image-based sign-recognition questions, appended to
   the DL "Road Signs" Learning Test. Loaded after dl-data.js. Teaches the standard US (MUTCD) signs
   visually. Each appended question carries a `sign` key; the DL app renders SIGN_SVG[sign] above it. */
(function(){
  var S = window.SIGN_SVG = {};
  // helpers keep each sign a clean, recognizable 120x120 SVG
  function svg(inner){ return '<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" role="img" style="width:150px;height:150px;max-width:60vw">'+inner+'</svg>'; }
  S.stop      = svg('<polygon points="38,6 82,6 114,38 114,82 82,114 38,114 6,82 6,38" fill="#c1121f" stroke="#fff" stroke-width="5"/><text x="60" y="72" font-family="Arial" font-weight="800" font-size="26" fill="#fff" text-anchor="middle">STOP</text>');
  S.yield     = svg('<polygon points="60,112 8,16 112,16" fill="#fff" stroke="#c1121f" stroke-width="12"/><text x="60" y="58" font-family="Arial" font-weight="800" font-size="18" fill="#c1121f" text-anchor="middle">YIELD</text>');
  S.donotenter= svg('<circle cx="60" cy="60" r="54" fill="#c1121f"/><rect x="24" y="50" width="72" height="20" rx="3" fill="#fff"/>');
  S.wrongway  = svg('<rect x="10" y="30" width="100" height="60" rx="4" fill="#c1121f"/><text x="60" y="55" font-family="Arial" font-weight="800" font-size="16" fill="#fff" text-anchor="middle">WRONG</text><text x="60" y="78" font-family="Arial" font-weight="800" font-size="16" fill="#fff" text-anchor="middle">WAY</text>');
  S.oneway    = svg('<rect x="6" y="40" width="108" height="40" rx="3" fill="#111"/><path d="M22 60 H78 M78 60 l-12 -8 M78 60 l-12 8" stroke="#fff" stroke-width="5" fill="none"/><text x="92" y="66" font-family="Arial" font-weight="700" font-size="9" fill="#fff" text-anchor="middle">ONE WAY</text>');
  S.speed     = svg('<rect x="20" y="6" width="80" height="108" rx="6" fill="#fff" stroke="#111" stroke-width="4"/><text x="60" y="34" font-family="Arial" font-weight="700" font-size="13" fill="#111" text-anchor="middle">SPEED</text><text x="60" y="50" font-family="Arial" font-weight="700" font-size="13" fill="#111" text-anchor="middle">LIMIT</text><text x="60" y="92" font-family="Arial" font-weight="800" font-size="34" fill="#111" text-anchor="middle">55</text>');
  S.warning   = svg('<polygon points="60,8 112,60 60,112 8,60" fill="#ffd200" stroke="#111" stroke-width="4"/><text x="60" y="68" font-family="Arial" font-weight="800" font-size="40" fill="#111" text-anchor="middle">!</text>');
  S.curve     = svg('<polygon points="60,8 112,60 60,112 8,60" fill="#ffd200" stroke="#111" stroke-width="4"/><path d="M48 96 C48 70 72 64 72 44 L72 30 M72 30 l-9 10 M72 30 l9 10" stroke="#111" stroke-width="6" fill="none"/>');
  S.school    = svg('<polygon points="60,6 110,44 92,108 28,108 10,44" fill="#c6e63b" stroke="#111" stroke-width="4"/><circle cx="48" cy="56" r="7" fill="#111"/><circle cx="72" cy="56" r="7" fill="#111"/><path d="M40 84 q20 14 40 0" stroke="#111" stroke-width="5" fill="none"/>');
  S.railroad  = svg('<circle cx="60" cy="60" r="54" fill="#ffd200" stroke="#111" stroke-width="4"/><text x="38" y="70" font-family="Arial" font-weight="800" font-size="30" fill="#111">R</text><text x="74" y="70" font-family="Arial" font-weight="800" font-size="30" fill="#111">R</text><path d="M48 36 L72 84 M72 36 L48 84" stroke="#111" stroke-width="5"/>');
  S.nopassing = svg('<polygon points="10,30 110,30 30,90" fill="#ffd200" stroke="#111" stroke-width="4"/><text x="56" y="52" font-family="Arial" font-weight="700" font-size="11" fill="#111" text-anchor="middle">NO</text><text x="50" y="66" font-family="Arial" font-weight="700" font-size="10" fill="#111" text-anchor="middle">PASSING</text>');
  S.construction = svg('<polygon points="60,8 112,60 60,112 8,60" fill="#ff7a00" stroke="#111" stroke-width="4"/><rect x="50" y="34" width="20" height="34" rx="3" fill="#111"/><circle cx="60" cy="82" r="7" fill="#111"/>');
  S.pedestrian= svg('<polygon points="60,6 110,44 92,108 28,108 10,44" fill="#c6e63b" stroke="#111" stroke-width="4"/><circle cx="60" cy="40" r="8" fill="#111"/><path d="M60 50 L60 78 M60 58 L46 70 M60 58 L74 70 M60 78 L50 100 M60 78 L70 100" stroke="#111" stroke-width="5" fill="none"/>');
  S.services  = svg('<rect x="10" y="20" width="100" height="80" rx="5" fill="#0057b8"/><path d="M60 38 v44 M38 60 h44" stroke="#fff" stroke-width="10"/>');

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
  var STEM={en:"What does this road sign mean?",es:"¿Qué significa esta señal de tránsito?",ru:"Что означает этот дорожный знак?",tr:"Bu trafik işareti ne anlama gelir?",hi:"इस सड़क संकेत का क्या अर्थ है?"};
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
  function trOpt(o,L){ if(L==="en") return o; var m=TR[o]; return (m&&m[L])||o; }

  var startIdx=cat.questions.length;
  Q.forEach(function(item,k){
    var idx=startIdx+k;
    cat.questions.push({ q:STEM.en, options:item.opts.slice(), answer:item.a, explanation:item.expl, handbook:item.expl, hbref:"Road signs", sign:item.sign, qid:"DL-SIGNIMG-"+(k+1) });
    ["ru","tr","es","hi"].forEach(function(L){ I.q[L]=I.q[L]||{}; I.q[L]["learn-road-signs"]=I.q[L]["learn-road-signs"]||{};
      I.q[L]["learn-road-signs"][idx]={ q:STEM[L]||STEM.en, options:item.opts.map(function(o){return trOpt(o,L);}), explanation:item.expl }; });
  });
})();
