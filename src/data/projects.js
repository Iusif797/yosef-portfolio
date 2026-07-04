export const PROJECT_TYPES = {
  platform: { ru: 'Платформа', en: 'Platform', he: 'פלטפורמה', category: 'app' },
  landing: { ru: 'Лендинг', en: 'Landing', he: 'עמוד נחיתה', category: 'web' },
  brand: { ru: 'Бренд-сайт', en: 'Brand site', he: 'אתר מותג', category: 'web' },
  shop: { ru: 'E-commerce', en: 'E-commerce', he: 'מסחר', category: 'web' },
  service: { ru: 'Сервисный сайт', en: 'Service site', he: 'אתר שירות', category: 'web' },
  education: { ru: 'Образование', en: 'Education', he: 'חינוך', category: 'web' },
  app: { ru: 'Веб-приложение', en: 'Web app', he: 'אפליקציית ווב', category: 'app' },
  realty: { ru: 'Недвижимость', en: 'Real estate', he: 'נדל"ן', category: 'web' },
  travel: { ru: 'Travel', en: 'Travel', he: 'תיירות', category: 'web' },
  personal: { ru: 'Персональный сайт', en: 'Personal site', he: 'אתר אישי', category: 'web' },
  music: { ru: 'Music promo', en: 'Music promo', he: 'קידום מוזיקה', category: 'web' },
};

export const PROJECTS = [
  { slug: 'prague-carsharing', name: 'Prague Carsharing', link: 'https://prague-carsharing-website.usifmamedov5.workers.dev', typeKey: 'platform', tags: ['React', 'Maps', 'Booking'], desc: { ru: 'Платформа поминутной аренды авто в Праге с картой и бронированием.', en: 'Per-minute car-sharing platform in Prague with live map and booking.', he: 'פלטפורמת שיתוף רכב לפי דקות בפראג עם מפה והזמנה.' } },
  { slug: 'dodge-challenger', name: 'Dodge Challenger', link: 'https://dodge-challenger-lending.vercel.app/', typeKey: 'landing', tags: ['Motion', 'Landing', 'Brand'], desc: { ru: 'Кинематографичный лендинг мускул-кара с динамичными анимациями.', en: 'Cinematic muscle-car landing page with dynamic motion.', he: 'עמוד נחיתה קולנועי לרכב שריר עם אנימציות דינמיות.' } },
  { slug: 'neran', name: 'Neran', link: 'https://neran.io/', typeKey: 'brand', tags: ['Product', 'Luxury UI', 'Responsive'], desc: { ru: 'Современный продуктовый сайт бренда с чистой типографикой.', en: 'Modern product brand site with clean editorial typography.', he: 'אתר מותג מוצר מודרני עם טיפוגרפיה נקייה.' } },
  { slug: 'luxe-shop', name: 'LUXE', link: 'https://luxe-shop-theta.vercel.app', typeKey: 'shop', tags: ['Catalog', 'E-commerce', 'Minimal UI'], desc: { ru: 'E-commerce премиальной моды: каталог и минималистичный UI.', en: 'Premium fashion e-commerce with a refined minimalist UI.', he: 'מסחר אופנה פרימיום עם ממשק מינימליסטי.' } },
  { slug: 'wine', name: 'Wine House', link: 'https://wine-iusif-project.vercel.app', typeKey: 'brand', tags: ['Catalog', 'Editorial', 'Atmosphere'], desc: { ru: 'Атмосферный сайт винного бренда с дегустациями и каталогом.', en: 'Atmospheric winery site with tastings and catalog.', he: 'אתר יקב אווירתי עם טעימות וקטלוג.' } },
  { slug: 'mindvia', name: 'MindVia', link: 'https://www.psymindvia.com', typeKey: 'education', tags: ['Courses', 'Consulting', 'Content'], desc: { ru: 'Школа психологии с курсами, консультациями и блогом.', en: 'Psychology school with courses, consultations and blog.', he: 'בית ספר לפסיכולוגיה עם קורסים וייעוץ.' } },
  { slug: 'cleaningtwg-cz', name: 'Cleaning TWG', link: 'https://cleaningtwg.cz', typeKey: 'service', tags: ['Booking', 'Local SEO', 'Service'], desc: { ru: 'Профессиональный клининг в Праге с онлайн-заказом.', en: 'Professional cleaning service in Prague with online booking.', he: 'שירות ניקיון מקצועי בפראג עם הזמנה מקוונת.' } },
  { slug: 'cafe', name: 'Latte Cafe', link: 'https://cafe-nine-zeta.vercel.app', typeKey: 'brand', tags: ['Menu', 'Cafe', 'Landing'], desc: { ru: 'Элегантный сайт кофейни со спешелти-кофе и меню.', en: 'Elegant cafe website with specialty coffee and menu.', he: 'אתר בית קפה אלגנטי עם קפה איכותי ותפריט.' } },
  { slug: 'bakery', name: 'Bakery', link: 'https://bakeryiusifdeveloping.netlify.app', typeKey: 'service', tags: ['Catalog', 'Orders', 'Local'], desc: { ru: 'Тёплый сайт пекарни с витриной выпечки и заказом.', en: 'Warm bakery site with a product showcase and ordering.', he: 'אתר מאפייה חמים עם מוצרים והזמנה.' } },
  { slug: 'dubai-realty', name: 'Dubai Realty', link: 'https://dubai-appartmentsproject.netlify.app', typeKey: 'realty', tags: ['Listings', 'Luxury', 'Lead Form'], desc: { ru: 'Премиальная недвижимость Дубая: каталог и консультации.', en: 'Premium Dubai real estate: listings and consultations.', he: 'נדל"ן יוקרה בדובאי: מודעות וייעוץ.' } },
  { slug: 'indonesia', name: 'Discover Indonesia', link: 'https://indonesia-project.netlify.app', typeKey: 'travel', tags: ['Travel', 'Gallery', 'Storytelling'], desc: { ru: 'Тревел-портал для путешествий по Индонезии.', en: 'Travel portal to explore the beauty of Indonesia.', he: 'פורטל תיירות לחקר יופייה של אינדונזיה.' } },
  { slug: 'iskatel', name: 'Iskatel School', link: 'https://www.iskatel.school/', typeKey: 'education', tags: ['Courses', 'Community', 'Schedule'], desc: { ru: 'Образовательная платформа школы «Искатель».', en: "Educational platform of the 'Iskatel' school.", he: "פלטפורמת חינוך של בית הספר 'איסקטל'." } },
  { slug: 'chabad-shifts', name: 'Chabad Shifts', link: 'https://chabad-shifts.netlify.app', typeKey: 'app', tags: ['Dashboard', 'Auth', 'Scheduling'], desc: { ru: 'Приложение учёта смен и расписания для команды.', en: 'Shift and schedule management app for teams.', he: 'אפליקציית ניהול משמרות ולוח זמנים.' } },
];

export const getDomain = (link) => {
  try {
    return new URL(link).hostname.replace(/^www\./, '');
  } catch {
    return '';
  }
};

export const localized = (field, language) => field[language] ?? field.en;
