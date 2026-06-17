/* translations-ar-cat.js — Arabic CDL category names/blurbs (I18N.cat.ar was missing, so cards fell
   back to English) + the engagement UI keys (streak/review/share/specReq) that translations-ar.js's
   full I18N.ui.ar assignment would otherwise drop. Loaded on demand right after translations-ar.js. */
window.I18N = window.I18N || {}; window.I18N.cat = window.I18N.cat || {};
window.I18N.cat.ar = {
  "general":     { "name": "المعرفة العامة", "blurb": "الاختبار الأساسي لكل متقدّم لرخصة CDL: القيادة الآمنة، وإدارة السرعة والمسافة، والمخاطر، والحمولة، والطوارئ." },
  "airbrakes":   { "name": "الفرامل الهوائية", "blurb": "كيف تعمل أنظمة الفرامل الهوائية، وكيفية فحصها واستخدامها بأمان. مطلوبة لإزالة قيد الفرامل الهوائية." },
  "combination": { "name": "المركبات المركّبة", "blurb": "الجرّارات والمقطورات والتركيبات الأخرى: الاقتران، والانعطاف الداخلي، وفرامل المقطورة، ومنع الانقلاب." },
  "hazmat":      { "name": "المواد الخطرة (H)", "blurb": "المواد الخطرة: أوراق الشحن، واللافتات، وفئات الخطر، والتحميل الآمن، وما يجب فعله عند التسرّب أو الطوارئ." },
  "tanker":      { "name": "الصهاريج (N)", "blurb": "المركبات الصهريجية: تموّج السوائل، والفراغ العلوي، وارتفاع مركز الثقل، والحواجز مقابل الفواصل، والتباطؤ لمنع الانقلاب." },
  "doubles":     { "name": "المقطورات المزدوجة/الثلاثية (T)", "blurb": "سحب أكثر من مقطورة: تأثير ضرب السوط والانقلاب، وعربات التحويل، وفحوص الاقتران وخطوط الهواء، والتوجيه السلس." },
  "passenger":   { "name": "نقل الركاب (P)", "blurb": "نقل الركاب في حافلة: عناصر السلامة قبل الرحلة، وخط الوقوف، ومعابر السكك الحديدية والجسور المتحركة، وفحوص ما بعد الرحلة." },
  "schoolbus":   { "name": "الحافلات المدرسية (S)", "blurb": "الحافلات المدرسية: مناطق الخطر والمرايا، والتحميل/التنزيل بالأضواء الكهرمانية والحمراء وذراع التوقف، ومعابر السكك الحديدية، وفحص الأطفال بعد الرحلة." },
  "special":     { "name": "المتطلبات الخاصة", "blurb": "قواعد خاصة بالولاية: حجم المركبة، والإضاءة، والأعلام، والفرامل، والقطر، والتعليم. يجب اجتيازه أولاً." }
};
/* re-apply engagement + special-requirements UI keys (kept here so the lazy I18N.ui.ar assignment can't drop them) */
window.I18N.ui = window.I18N.ui || {}; window.I18N.ui.ar = window.I18N.ui.ar || {};
Object.assign(window.I18N.ui.ar, {
  "streakN": "سلسلة {n} يوم", "streakStart": "ابدأ سلسلة اليوم", "goalToday": "{c}/{g} سؤالاً اليوم",
  "reviewCard": "راجع أخطاءك", "reviewSub": "تدرّب على الأسئلة الـ{n} التي أخطأت فيها — تُحذف من القائمة عند إجابتها بشكل صحيح.",
  "reviewBtn": "ابدأ المراجعة", "reviewLabel": "مراجعة الأخطاء", "share": "مشاركة النتيجة", "reviewEmpty": "لا أخطاء للمراجعة — أحسنت!",
  "specReq": "المتطلبات الخاصة"
});
