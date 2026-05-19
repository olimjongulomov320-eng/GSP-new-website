const FIRM = {
  name: "GSP LAW",
  fullName: "Gulyamov, Sadikov and Partners",
  phone1: "+998 71 200 12 11",
  phone2: "+99899 590 99 11",
  phone3: "+99893 098 70 84",
  email: "info@gsplaw.uz",
  address: "г. Ташкент, Яккасарайский район, ул. Яккасарой, дом 5",
  telegram: "https://t.me/gsp_law_firm",
  instagram: "https://www.instagram.com/gsplawuzb/",
  facebook: "https://www.facebook.com/legality.uz",
  youtube: "https://www.youtube.com/channel/UCp1ui0KzRWN4bPKLeBjCEmg",
  stats: [
    { num: "16+", label: "лет опыта" },
    { num: "$100M+", label: "портфель кейсов" },
    { num: "15", label: "адвокатов" },
    { num: "1000+", label: "клиентов" }
  ]
};

const SERVICES = [
  { icon: "⚖️", title: "Корпоративное право и M&A", desc: "Сопровождение сделок слияния и поглощения, корпоративное структурирование, акционерные соглашения" },
  { icon: "💻", title: "IT и киберправо", desc: "Правовое сопровождение IT-компаний, стартапов, защита персональных данных и кибербезопасность" },
  { icon: "🏦", title: "Банковское и финансовое право", desc: "Регуляторные вопросы, финтех, лицензирование, финансовые транзакции" },
  { icon: "📊", title: "Налоговая практика", desc: "Налоговое планирование, оптимизация, споры с налоговыми органами" },
  { icon: "🌐", title: "Экономические споры", desc: "Представление интересов в арбитражных судах, медиация, переговоры" },
  { icon: "📦", title: "Таможенное право", desc: "Сопровождение ВЭД, таможенное оформление, споры с таможенными органами" },
  { icon: "🛡️", title: "Уголовная защита бизнеса", desc: "Защита предпринимателей и руководителей в рамках уголовных дел" },
  { icon: "👥", title: "Трудовое право", desc: "Трудовые договоры, споры с работниками, кадровое делопроизводство" },
  { icon: "💡", title: "Интеллектуальная собственность", desc: "Регистрация товарных знаков, патентование, защита авторских прав" },
  { icon: "🤝", title: "Постоянное обслуживание", desc: "Комплексное юридическое сопровождение коммерческих организаций на постоянной основе" },
  { icon: "📝", title: "Контрактное право", desc: "Разработка и экспертиза договоров, переговоры, урегулирование разногласий" },
  { icon: "🏢", title: "Недвижимость", desc: "Сопровождение сделок с недвижимостью, девелоперские проекты, арендные споры" }
];

const LAWYERS = [
  {
    id: 1,
    slug: "sadikov-ruslan",
    photo: "photos/abdulloh-sodiq.jpeg",
    externalUrl: "https://olimjongulomov320-eng.github.io/Abdulloh_Sodiq/",
    name: "Sodiq Abdulloh G'ulom o'g'li",
    title: "Основатель, Управляющий партнёр",
    specialization: ["Экономические споры", "Корпоративное право", "M&A"],
    experience: "15+ лет",
    cases: "300+",
    initials: "СР",
    accentColor: "#1a2332",
    bio: { ru: "Управляющий партнёр GSP LAW. Специализируется на разрешении сложных экономических споров и сопровождении крупных M&A-сделок. Лично представлял интересы клиентов в судах всех инстанций.", uz: "GSP LAW boshqaruvchi sherigi. Murakkab iqtisodiy nizolarni hal etish va yirik M&A bitimlarini qo'llab-quvvatlashga ixtisoslashgan. Barcha instansiyalardagi sudlarda mijozlar manfaatlarini shaxsan himoya qilgan.", en: "Managing Partner of GSP LAW. Specializes in resolving complex economic disputes and supporting major M&A transactions. Has personally represented clients in courts at all levels." },
    description: { ru: "Руслан Гуламбаевич руководит стратегическим направлением фирмы и ведёт наиболее сложные дела в области корпоративного права. Под его руководством фирма сопроводила сделки на сумму более $100 млн.", uz: "U firmaning strategik yo'nalishini boshqaradi va korporativ huquq sohasidagi eng murakkab ishlarni olib boradi. Uning rahbarligi ostida firma $100 mln dan ortiq hajmdagi bitimlarni qo'llab-quvvatladi.", en: "He leads the firm's strategic direction and handles the most complex cases in corporate law. Under his leadership, the firm has supported transactions totaling over $100 million." },
    howIHelp: { ru: "Я специализируюсь на защите бизнеса в спорных и кризисных ситуациях — от арбитражных споров до враждебных поглощений. Помогаю структурировать бизнес так, чтобы минимизировать правовые риски.", uz: "Men biznesni nizoli va inqirozli vaziyatlarda himoya qilishga ixtisoslanganman — arbitraj nizolaridan to dushmanona qo'shib olishgacha. Huquqiy risklarni minimallashtirish uchun biznesni to'g'ri tuzilishiga yordam beraman.", en: "I specialize in protecting businesses in disputed and crisis situations — from arbitration to hostile takeovers. I help structure businesses to minimize legal risks." },
    services: ["Разрешение корпоративных споров", "Сопровождение сделок M&A", "Реструктуризация бизнеса", "Арбитражное производство", "Корпоративное управление", "Due Diligence"],
    blog: [
      { title: "M&A в Узбекистане: тренды 2024", date: "10 ноября 2024", tag: "Рынок", excerpt: "Анализ рынка слияний и поглощений в Узбекистане и прогнозы на следующий год. Какие сектора наиболее активны..." },
      { title: "Корпоративные споры: как их предотвратить", date: "25 октября 2024", tag: "Советы", excerpt: "Практические советы по структурированию акционерных соглашений для избежания конфликтов между партнёрами..." },
      { title: "Due Diligence: полное руководство", date: "5 октября 2024", tag: "Руководство", excerpt: "Что нужно проверить перед покупкой бизнеса в Узбекистане. Чеклист из 50+ пунктов..." }
    ],
    education: [
      { degree: "Магистр права (LLM), Корпоративное право", institution: "London School of Economics, Великобритания", year: "2012" },
      { degree: "Бакалавр права", institution: "Ташкентский государственный юридический университет", year: "2010" }
    ],
    achievements: [
      "Председатель комитета по корпоративному праву ТПП Узбекистана (2021–2024)",
      "Best M&A Lawyer Uzbekistan — Deal Makers Awards (2022)",
      "Сопровождение сделок общим объёмом свыше $100 млн",
      "Спикер Ташкентского международного инвестиционного форума (2021, 2022, 2023, 2024)"
    ],
    publications: [
      { title: "M&A в развивающихся рынках Центральной Азии: тенденции и правовые барьеры", journal: "Корпоративное право и управление", year: "2024" },
      { title: "Корпоративное управление в Узбекистане: реформы и практика", journal: "Право и экономика", year: "2023" }
    ]
  },
  {
    id: 2,
    slug: "gulyamov-said",
    photo: "photos/gulyamov-said.jpeg",
    externalUrl: "https://gulyamov.org",
    name: "Гулямов Саид Саидахрарович",
    title: "Основатель, Партнёр, Профессор",
    specialization: ["Киберправо", "IT-право", "Цифровое право"],
    experience: "20+ лет",
    cases: "200+",
    initials: "ГС",
    accentColor: "#c9a96e",
    bio: { ru: "Профессор и ведущий партнёр GSP LAW. Доктор юридических наук, признанный эксперт в области киберправа и цифрового законодательства Центральной Азии. Автор более 50 научных работ, регулярный докладчик на международных конференциях.", uz: "Doktor va GSP LAW yetakchi sherigi. Yuridik fanlar doktori, Markaziy Osiyo kiberhuquq va raqamli qonunchilik sohasida tan olingan ekspert. 50 dan ortiq ilmiy ishlar muallifi, xalqaro konferentsiyalarda muntazam ma'ruzachi.", en: "Professor and Leading Partner of GSP LAW. Doctor of Law, recognized expert in cyber law and digital legislation in Central Asia. Author of over 50 academic works, regular speaker at international conferences." },
    description: { ru: "Саид Саидахрарович — один из основателей фирмы и пионер в области IT-права в Узбекистане. Он консультирует государственные органы по вопросам цифрового законодательства и лично сопроводил более 200 проектов для ведущих IT-компаний региона.", uz: "Said Saidaxrarovich — firmaning asoschisi va O'zbekistonda IT-huquq sohasidagi kashshof. U raqamli qonunchilik masalalari bo'yicha davlat organlarini maslahat beradi va mintaqaning yetakchi IT-kompaniyalari uchun 200 dan ortiq loyihalarni shaxsan qo'llab-quvvatlagan.", en: "Said Saidakhrarovich is one of the firm's founders and a pioneer in IT law in Uzbekistan. He advises government bodies on digital legislation and has personally supported over 200 projects for leading IT companies in the region." },
    howIHelp: { ru: "Я помогаю IT-компаниям и стартапам выстраивать правовую архитектуру бизнеса с нуля, защищать интеллектуальную собственность и соответствовать требованиям регуляторов в сфере персональных данных.", uz: "Men IT-kompaniyalar va startaplarga noldan biznes huquqiy arxitekturasini qurishga, intellektual mulkni himoyalashga va shaxsiy ma'lumotlar sohasidagi regulyator talablariga javob berishga yordam beraman.", en: "I help IT companies and startups build legal architecture from scratch, protect intellectual property, and comply with data protection regulations." },
    services: ["Правовое регулирование IT-компаний", "Защита персональных данных", "Интеллектуальная собственность", "Киберпреступления", "Консультации по цифровому праву", "Лицензирование ПО"],
    blog: [
      { title: "Киберправо в эпоху искусственного интеллекта", date: "15 октября 2024", tag: "Аналитика", excerpt: "Как новые технологии меняют правовую систему и что это означает для бизнеса в Узбекистане. Разбираем ключевые вопросы ответственности за действия ИИ-систем..." },
      { title: "Защита персональных данных: новые требования 2024", date: "3 сентября 2024", tag: "Законодательство", excerpt: "Обзор последних изменений в законодательстве о персональных данных и их влияние на IT-компании. Что нужно сделать прямо сейчас..." },
      { title: "IT-стартапы и правовые риски", date: "20 августа 2024", tag: "Стартапы", excerpt: "Топ-10 юридических ошибок, которые совершают стартапы на начальном этапе, и как их избежать. Практический чеклист..." }
    ],
    education: [
      { degree: "Доктор юридических наук", institution: "Ташкентский государственный юридический университет", year: "2005" },
      { degree: "LLM, Информационное право", institution: "Duke University School of Law, США", year: "2003" },
      { degree: "Бакалавр права (с отличием)", institution: "Ташкентский государственный юридический университет", year: "2000" }
    ],
    achievements: [
      "Профессор кафедры информационного права ТГЮУ (с 2010 г.)",
      "Советник по цифровому праву Министерства цифрового развития РУ (2020–2024)",
      "Legal Awards — «Лучший юрист в сфере IT-права», Центральная Азия (2023)",
      "Автор 3 монографий и более 50 научных статей по IT-праву и кибербезопасности"
    ],
    publications: [
      { title: "Правовое регулирование систем искусственного интеллекта в странах СНГ", journal: "Право и цифровая экономика (ВАК)", year: "2024" },
      { title: "Кибербезопасность как объект правового регулирования в Центральной Азии", journal: "Журнал международного права", year: "2023" },
      { title: "Защита персональных данных в эпоху Big Data: сравнительно-правовой анализ", journal: "Государство и право (ВАК)", year: "2022" }
    ]
  },
  {
    id: 3,
    slug: "abraev-firuz",
    photo: "photos/abraev-firuz.jpeg",
    name: "Абраев Фируз Шавкатович",
    title: "Партнёр, Специалист по контрактам",
    specialization: ["Контрактное право", "Банковское право", "ВЭД"],
    experience: "13+ лет",
    cases: "400+",
    initials: "АФ",
    accentColor: "#7b2d8b",
    bio: { ru: "Партнёр GSP LAW, ведущий эксперт по контрактному праву и внешнеэкономической деятельности. Разработал более 400 контрактов для крупных коммерческих организаций и международных компаний.", uz: "GSP LAW sherigi, shartnoma huquqi va tashqi iqtisodiy faoliyat bo'yicha yetakchi ekspert. Yirik tijorat tashkilotlari va xalqaro kompaniyalar uchun 400 dan ortiq shartnomalar ishlab chiqqan.", en: "Partner at GSP LAW, leading expert in contract law and foreign economic activity. Has drafted over 400 contracts for major commercial organizations and international companies." },
    description: { ru: "Фируз Шавкатович специализируется на разработке сложных коммерческих договоров и сопровождении ВЭД-сделок. Имеет глубокую экспертизу в банковском законодательстве Узбекистана.", uz: "Firuz Shavkatovich murakkab tijorat shartnomalari ishlab chiqish va tashqi savdo bitimlarini qo'llab-quvvatlashga ixtisoslashgan. O'zbekiston bank qonunchiligi sohasida chuqur tajribaga ega.", en: "Firuz Shavkatovich specializes in drafting complex commercial contracts and supporting foreign trade transactions. He has deep expertise in Uzbekistan's banking legislation." },
    howIHelp: { ru: "Создаю договоры, которые реально защищают ваши интересы, а не просто выглядят красиво. Анализирую риски в каждом пункте и помогаю вести переговоры с контрагентами.", uz: "Chiroyli ko'rinadigan emas, balki manfaatlaringizni haqiqatda himoya qiladigan shartnomalar tuzaman. Har bir bandda risklarni tahlil qilaman va kontragentlar bilan muzokaralarda yordam beraman.", en: "I draft contracts that genuinely protect your interests, not just look good. I analyze risks in every clause and help you negotiate with counterparties." },
    services: ["Разработка коммерческих договоров", "Экспертиза контрактов", "ВЭД-сделки", "Банковские гарантии", "Аккредитивы", "Переговоры с контрагентами"],
    blog: [
      { title: "10 опасных пунктов в договорах, которые вы не замечаете", date: "5 ноября 2024", tag: "Контракты", excerpt: "Разбираем самые распространённые юридические ловушки в коммерческих договорах, которые обходятся бизнесу миллионами..." },
      { title: "ВЭД в 2024: что изменилось", date: "20 октября 2024", tag: "ВЭД", excerpt: "Обзор ключевых изменений в регулировании внешнеэкономической деятельности для узбекских компаний..." },
      { title: "Банковские гарантии как инструмент защиты бизнеса", date: "8 октября 2024", tag: "Банки", excerpt: "Когда и как использовать банковские гарантии для обеспечения обязательств в коммерческих сделках..." }
    ],
    education: [
      { degree: "LLM, Международное торговое право", institution: "Венский университет экономики и бизнеса, Австрия", year: "2014" },
      { degree: "Бакалавр права", institution: "Ташкентский государственный юридический университет", year: "2011" }
    ],
    achievements: [
      "Сертифицированный специалист ICC по торговому финансированию (2016)",
      "Член Международной торговой палаты (ICC), комитет по банковским техникам (2018–н.в.)",
      "Разработал типовые контрактные формы для 3 крупных узбекских банков",
      "Победитель конкурса «Лучший корпоративный юрист» Ассоциации юристов Узбекистана (2021)"
    ],
    publications: [
      { title: "Регулирование ВЭД в Узбекистане: практика применения новых норм", journal: "Внешнеэкономическая деятельность", year: "2024" },
      { title: "Банковские гарантии в международных торговых сделках: сравнительный анализ", journal: "Банковское право (ВАК)", year: "2023" }
    ]
  },
  {
    id: 4,
    slug: "khayitmurodov-ulugbek",
    photo: "photos/xaytmurodov-ulugbek.jpeg",
    name: "Хайитмуродов Улугбек Отабекович",
    title: "Партнёр | Руководитель отдела корпоративного обслуживания",
    specialization: ["Корпоративное право", "Экономические споры", "Интеллектуальная собственность"],
    experience: "8+ лет",
    cases: "250+",
    initials: "ХУ",
    accentColor: "#2d6a4f",
    bio: { ru: "Партнёр GSP LAW и руководитель отдела постоянного юридического обслуживания корпоративных клиентов. 8 лет опыта в адвокатуре. Специализируется на экономических делах, бизнес-праве и интеллектуальной собственности. Кандидат юридических наук (PhD).", uz: "GSP LAW sherigi va korporativ mijozlarga doimiy yuridik xizmat ko'rsatish bo'limi boshlig'i. Advokatlik sohasida 8 yillik ish tajribasi. Iqtisodiy ishlar, biznes huquqi va intellektual mulk huquqi bo'yicha mutaxassis. Yuridik fanlar nomzodi (PhD).", en: "Partner at GSP LAW and Head of Permanent Legal Services for Corporate Clients. 8 years of experience in advocacy. Specializes in economic cases, business law and intellectual property. PhD in Law." },
    description: { ru: "Улугбек Хайитмуродов руководит отделом постоянного юридического сопровождения и ведёт сложные корпоративные дела для ключевых клиентов фирмы. Обладает академической базой Ташкентского государственного юридического университета на всех трёх уровнях образования (бакалавриат, магистратура, PhD) и глубокой экспертизой в экономических спорах и IP.", uz: "Ulug'bek Xayitmurodov doimiy yuridik qo'llab-quvvatlash bo'limini boshqaradi va firmaning asosiy mijozlari uchun murakkab korporativ ishlarni olib boradi. Toshkent davlat yuridik universitetida barcha uch ta'lim bosqichida (bakalavr, magistratura, PhD) akademik bazaga ega va iqtisodiy nizolar hamda IP sohasida chuqur tajribaga ega.", en: "Ulugbek Khayitmurodov heads the permanent legal support department and handles complex corporate cases for the firm's key clients. Has an academic foundation from Tashkent State University of Law at all three levels (bachelor's, master's, PhD) and deep expertise in economic disputes and IP." },
    howIHelp: { ru: "Обеспечиваю полное юридическое сопровождение бизнеса на постоянной основе — от ежедневных корпоративных вопросов до стратегических сделок. Специализируюсь на защите интеллектуальной собственности и ведении экономических споров.", uz: "Biznesni doimiy asosda to'liq yuridik qo'llab-quvvatlayman — kundalik korporativ masalalardan strategik bitimlaргача. Intellektual mulkni himoya qilish va iqtisodiy nizolarni yuritishga ixtisoslanganman.", en: "I provide full legal support to businesses on an ongoing basis — from daily corporate matters to strategic transactions. I specialize in intellectual property protection and handling economic disputes." },
    services: ["Постоянное юридическое сопровождение", "Экономические споры", "Бизнес-право", "Интеллектуальная собственность", "Корпоративные консультации", "Due Diligence"],
    blog: [
      { title: "Как правильно выбрать форму юрлица для стартапа", date: "1 ноября 2024", tag: "Стартапы", excerpt: "ООО, АО или ИП? Разбираем плюсы и минусы каждой формы для технологических стартапов в Узбекистане..." },
      { title: "Опционные программы для команды: руководство", date: "18 октября 2024", tag: "HR-право", excerpt: "Как мотивировать ключевых сотрудников долей в компании: ESOP, SAR и другие инструменты в правовом поле УЗ..." },
      { title: "Привлечение венчурных инвестиций: правовая сторона", date: "2 октября 2024", tag: "Инвестиции", excerpt: "Что нужно знать основателям о term sheet, инвестиционных договорах и защите прав при привлечении раунда..." }
    ],
    education: [
      { degree: "PhD (кандидат юридических наук)", institution: "Ташкентский государственный юридический университет", year: "" },
      { degree: "Магистр права", institution: "Ташкентский государственный юридический университет", year: "" },
      { degree: "Бакалавр права (частное право)", institution: "Ташкентский государственный юридический университет", year: "" }
    ],
    achievements: [
      "8 лет опыта в адвокатуре",
      "Руководитель отдела постоянного юридического обслуживания корпоративных клиентов GSP LAW",
      "Кандидат юридических наук (PhD)",
      "Специализация в экономических спорах, бизнес-праве и интеллектуальной собственности"
    ],
    publications: []
  },
  {
    id: 5,
    slug: "mikhilyev-saidulla",
    photo: "photos/mikhilyev-saidulla.jpeg",
    name: "Михилиев Саидулла",
    title: "Адвокат",
    specialization: ["Гражданское право", "Административное право", "Экономические споры"],
    experience: "15+ лет",
    cases: "200+",
    initials: "МС",
    accentColor: "#17435a",
    bio: { ru: "Адвокат с более чем 15-летним опытом руководства и судебной работы. Специализируется на гражданских, экономических и административных делах. Бывший председатель суда и судья в ряде судов Ташкента и Сурхандарьинской области — смотрит на каждое дело «взглядом судьи».", uz: "15 yildan ortiq rahbarlik va sudyalik tajribasiga ega advokat. Fuqarolik, iqtisodiy va ma'muriy ishlarga ixtisoslashgan. Sobiq sud raisi va Toshkent hamda Surxondaryo sudlarida sudya — har bir ishga \"sudya nigohi\" bilan qaraydi.", en: "Advocate with over 15 years of leadership and judicial experience. Specializes in civil, economic and administrative cases. Former court chairman and judge in several Tashkent and Surkhandarya courts — views every case through the 'judge's eye'." },
    description: { ru: "Саидулла Михилиев — бывший председатель Бектемирского районного административного суда и судья экономических, гражданских и административных судов Ташкента и Сурхандарьи (2017–2020 и ранее). Имеет академическое образование в ТГЮУ (бакалавриат) и Университете мировой экономики и дипломатии (магистратура). Свободно владеет узбекским, русским и английским языками. С марта 2024 года — адвокат GSP LAW.", uz: "Saydulla Mixliyev — Bektemir tumanlararo ma'muriy sudining sobiq raisi va Toshkent hamda Surxondaryo iqtisodiy, fuqarolik va ma'muriy sudlarida sudya (2017–2020 va undan avval). TDYU (bakalavr) va Jahon iqtisodiyoti va diplomatiya universiteti (magistratura) da akademik ta'lim olgan. O'zbek, rus va ingliz tillarini erkin biladi. 2024-yil mart oyidan GSP LAW advokati.", en: "Saidulla Mikhilyev is a former chairman of Bektemir District Administrative Court and judge in economic, civil and administrative courts of Tashkent and Surkhandarya (2017–2020 and earlier). Has academic education at TSLU (bachelor's) and University of World Economy and Diplomacy (master's). Fluent in Uzbek, Russian and English. Since March 2024 — advocate at GSP LAW." },
    howIHelp: { ru: "Используя многолетний опыт судебной работы на всех уровнях, строю сильную позицию клиента в гражданских, экономических и административных делах. Вижу дело так, как его видит судья — это ключевое преимущество при выработке стратегии.", uz: "Barcha darajalardagi sud ishidagi ko'p yillik tajribadan foydalanib, fuqarolik, iqtisodiy va ma'muriy ishlarda mijozning kuchli pozitsiyasini quramаn. Ishni sudya ko'zi bilan ko'raman — bu strategiya ishlab chiqishda asosiy ustunlik.", en: "Using years of judicial experience at all levels, I build a strong position for clients in civil, economic and administrative cases. I see the case as a judge does — this is the key advantage when developing strategy." },
    services: ["Гражданские споры", "Экономические дела", "Административное право", "Судебное представительство", "Апелляция и кассация", "Правовая экспертиза"],
    blog: [
      { title: "Как работает судебная система Узбекистана изнутри", date: "10 ноября 2024", tag: "Аналитика", excerpt: "Взгляд изнутри на процедуры и практику узбекских судов..." },
      { title: "Административные споры: стратегии защиты", date: "25 октября 2024", tag: "Советы", excerpt: "Ключевые ошибки при оспаривании административных решений и как их избежать..." }
    ],
    education: [
      { degree: "Магистр права", institution: "Университет мировой экономики и дипломатии", year: "2007" },
      { degree: "Бакалавр права", institution: "Ташкентский государственный юридический университет", year: "2005" }
    ],
    achievements: [
      "Председатель Бектемирского районного административного суда г. Ташкента (2017–2020)",
      "Судья Ташкентского городского экономического суда, Мирабадского межрайонного гражданского суда, Ташкентского межрайонного административного суда",
      "Судья Кумкурганского межрайонного гражданского суда, Сурхандарья",
      "Свободное владение узбекским, русским и английским языками"
    ],
    publications: []
  },
  {
    id: 6,
    slug: "isamutdinov-ulugbek",
    photo: "photos/isamutdinov-ulugbek.jpeg",
    name: "Исамутдинов Улугбек",
    title: "Финансовый юрист | Аудитор",
    specialization: ["Налоговое право", "Финансовые споры", "Бухгалтерский учёт и аудит"],
    experience: "10+ лет",
    cases: "150+",
    initials: "ИУ",
    accentColor: "#c9a96e",
    bio: { ru: "Высококвалифицированный финансист и эксперт в области бухгалтерского учёта, финансов и налоговых споров. Помогает бизнесу защититься от налоговых рисков, выстроить законную и эффективную финансовую систему и разрешить сложные экономические споры.", uz: "Ko'p yillik amaliy tajribaga ega yuqori malakali moliyachi, buxgalteriya hisobi, moliya va soliq nizolari bo'yicha yetuk ekspert. Biznesni soliq xavflaridan himoya qilish, moliyaviy tizimni qonuniy va samarali shakllantirish hamda murakkab iqtisodiy nizolarni yechishda professional ko'mak beradi.", en: "Highly qualified financial specialist and expert in accounting, finance and tax disputes. Helps businesses protect against tax risks, build a legal and effective financial system and resolve complex economic disputes." },
    description: { ru: "Улугбек Исамутдинов — эксперт на стыке финансов и права. Специализируется на защите предпринимателей в налоговых спорах, финансовом и налоговом аудите, постановке бухгалтерского учёта по международным стандартам (МСФО/НСБУ), а также на финансовом консалтинге для повышения рентабельности бизнеса.", uz: "Isamutdinov Ulug'bek — moliya va huquq kesishmasidagi ekspert. Tadbirkorlarni soliq nizolarida himoya qilish, moliyaviy va soliq auditi, xalqaro standartlar (BHMS/MHXS) asosida buxgalteriya tizimini yo'lga qo'yish va biznes rentabelligini oshirish bo'yicha moliyaviy konsaltingga ixtisoslashgan.", en: "Isamutdinov Ulugbek is an expert at the intersection of finance and law. Specializes in protecting entrepreneurs in tax disputes, financial and tax auditing, accounting setup according to international standards (IFRS/NSBU), and financial consulting to increase business profitability." },
    howIHelp: { ru: "Защищаю бизнес от налоговых доначислений, провожу финансовый аудит для выявления скрытых рисков, настраиваю бухгалтерский учёт с нуля по МСФО и консультирую по оптимизации финансовых потоков.", uz: "Biznesni soliq qo'shimcha hisob-kitoblaridan himoya qilaman, yashirin xavflarni aniqlash uchun moliyaviy audit o'tkazaman, BHMS bo'yicha buxgalteriya tizimini noldan sozlayman va moliyaviy oqimlarni optimallashtirish bo'yicha maslahat beraman.", en: "I protect businesses from additional tax assessments, conduct financial audits to identify hidden risks, set up accounting from scratch according to IFRS and advise on optimizing financial flows." },
    services: ["Налоговые споры", "Финансовый аудит", "Бухгалтерский учёт (МСФО)", "Налоговое планирование", "Финансовый консалтинг", "Комплаенс"],
    blog: [
      { title: "Налоговые споры в Узбекистане: как выиграть", date: "8 ноября 2024", tag: "Налоги", excerpt: "Практические советы по успешному оспариванию налоговых доначислений..." },
      { title: "Внутренний аудит как инструмент защиты бизнеса", date: "22 октября 2024", tag: "Аудит", excerpt: "Почему регулярный внутренний аудит снижает налоговые риски компании..." }
    ],
    education: [
      { degree: "Магистр финансового права", institution: "Ташкентский финансовый институт", year: "2014" },
      { degree: "Сертифицированный аудитор (CIA)", institution: "Institute of Internal Auditors", year: "2016" }
    ],
    achievements: [
      "Успешное оспаривание налоговых доначислений на сумму свыше $3 млн",
      "Разработал систему внутреннего аудита для 20+ компаний",
      "Эксперт по финансовому праву Торгово-промышленной палаты Узбекистана"
    ],
    publications: [
      { title: "Налоговые споры в условиях цифровизации: новые подходы", journal: "Финансы и налоги", year: "2024" },
      { title: "Внутренний аудит как инструмент минимизации правовых рисков", journal: "Бухгалтерский учёт и аудит", year: "2023" }
    ]
  },
  {
    id: 7,
    slug: "sardor",
    photo: "photos/sardor.jpeg",
    name: "Sardor Abduxamidov",
    title: "Юрист",
    specialization: ["Уголовное право", "Киберпреступления", "Корпоративное право"],
    experience: "3+ лет",
    cases: "30+",
    initials: "SA",
    accentColor: "#17435a",
    bio: { ru: "Юрист GSP LAW, специализирующийся на уголовном праве и киберпреступлениях. Обеспечивает защиту клиентов на стадии тergova и в суде, особенно по делам, связанным с электронными доказательствами и цифровыми технологиями.", uz: "GSP LAW yuristи, jinoyat huquqi va kiberjinoyatlar bo'yicha ixtisoslashgan. Tergov va sud bosqichida, ayniqsa elektron dalillar va raqamli texnologiyalar bilan bog'liq ishlarda mijozlarni himoya qiladi.", en: "Lawyer at GSP LAW specializing in criminal law and cybercrime. Provides client defense at the investigation and court stages, especially in cases involving electronic evidence and digital technologies." },
    description: { ru: "Сардор Абдухамидов специализируется на уголовном праве с акцентом на киберпреступления — анализ электронных доказательств, цифровая криминалистика, защита в делах, связанных с Telegram, WhatsApp и международной юрисдикцией. Также обслуживает IT-компании и стартапы по корпоративным вопросам: контракты, due diligence, трудовые отношения и защита интеллектуальной собственности.", uz: "Sardor Abduxamidov jinoyat huquqi, ayniqsa kiberjinoyatlar bo'yicha ixtisoslashgan — elektron dalillarni tahlil qilish, raqamli ekspertiza, Telegram, WhatsApp va xalqaro yurisdiktsiya bilan bog'liq ishlarda himoya. Shuningdek, IT-kompaniyalar va startaplarga korporativ masalalarda xizmat ko'rsatadi.", en: "Sardor Abduxamidov specializes in criminal law with a focus on cybercrime — electronic evidence analysis, digital forensics, defense in cases involving Telegram, WhatsApp and international jurisdiction. Also serves IT companies and startups on corporate matters." },
    howIHelp: { ru: "Помогаю клиентам в уголовных делах по киберпреступлениям: анализирую цифровые доказательства, выстраиваю стратегию защиты на следствии и в суде. IT-компаниям помогаю с контрактами, IP и правовой структурой бизнеса.", uz: "Kiberjinoyatlar bo'yicha jinoyat ishlarida mijozlarga yordam beraman: raqamli dalillarni tahlil qilaman, tergov va sudda himoya strategiyasini quramан. IT-kompaniyalarga shartnomalar, IP va biznesning huquqiy tuzilmasida yordam beraman.", en: "I help clients in criminal cybercrime cases: analyze digital evidence, build defense strategies at investigation and court stages. I help IT companies with contracts, IP and business legal structure." },
    services: ["Уголовная защита", "Киберпреступления", "Электронные доказательства", "IT-компании", "Корпоративные договоры", "Интеллектуальная собственность"],
    blog: [], education: [
      { degree: "Магистр права", institution: "Академия правоохранительных органов Республики Узбекистан", year: "2022" },
      { degree: "Бакалавр права", institution: "Ташкентский государственный юридический университет", year: "2020" }
    ], achievements: [
      "Специализация в цифровой криминалистике и анализе электронных доказательств",
      "Опыт защиты в делах с международной юрисдикцией и мессенджерами",
      "Юридическое сопровождение IT-компаний и стартапов"
    ], publications: []
  },
  {
    id: 8,
    slug: "alijonova-daria",
    photo: "photos/alijonova-daria.jpeg",
    name: "Алижонова Дарья",
    title: "Адвокат | Международный юрист",
    specialization: ["Уголовное право", "Киберправо", "Космическое право"],
    experience: "11+ лет",
    cases: "100+",
    initials: "АД",
    accentColor: "#2d4a7a",
    bio: { ru: "Высококвалифицированный адвокат и международный юрист с более чем 11-летним опытом. Сочетает экспертизу в уголовном праве с передовыми знаниями в области цифровых технологий, кибербезопасности и космического права. Одна из немногих юристов в Центральной Азии, специализирующихся на космическом праве.", uz: "11 yildan ortiq tajribaga ega yuqori malakali advokat va xalqaro yurist. Jinoyat huquqi sohasidagi bilimlarini raqamli texnologiyalar, kiberxavfsizlik va kosmik huquq bo'yicha ilg'or bilimlar bilan uyg'unlashtiradi. Markaziy Osiyoda kosmik huquq bo'yicha ixtisoslashgan kamdan-kam yuristlardan biri.", en: "Highly accomplished advocate and international lawyer with over 11 years of experience. Combines expertise in criminal law with cutting-edge knowledge in cybersecurity, digital law and space law. One of the few lawyers in Central Asia specializing in space law." },
    description: { ru: "Дарья Алижонова начала карьеру в судебной системе, занимая должности в сфере уголовного судопроизводства. Сегодня она — признанный международный юрист, объединяющий тюркоязычные государства в своей практике и выстраивающий правовые мосты между Узбекистаном и зарубежными юрисдикциями. Консультирует иностранные государственные органы и частные компании по вопросам кибербезопасности и защиты данных.", uz: "Dariya Alijonova karerini sud tizimida jinoyat sudlovida boshlaган. Bugun u — o'z amaliyotida turkiy davlatlarni birlashtiruvchi va O'zbekiston bilan xorijiy yurisdiktsiyalar o'rtasida huquqiy ko'priklar qurayotgan tan olingan xalqaro yurist. Xorijiy davlat idoralari va xususiy kompaniyalarga kiberxavfsizlik va ma'lumotlarni himoya qilish bo'yicha konsultatsiya beradi.", en: "Daria Alijonova began her career in the judicial system in criminal proceedings. Today she is a recognised international lawyer uniting Turkic-speaking nations in her practice and building legal bridges between Uzbekistan and foreign jurisdictions. She advises foreign government institutions and private companies on cybersecurity and data protection." },
    howIHelp: { ru: "Помогаю в уголовных делах, защищаю права клиентов в цифровой среде и консультирую по международному праву. Моя специализация на стыке традиционного права и новых технологий — от киберпреступлений до правового регулирования космических технологий.", uz: "Jinoyat ishlarida yordam beraman, raqamli muhitda mijozlar huquqlarini himoya qilaman va xalqaro huquq bo'yicha maslahat beraman. Mening ixtisosligim an'anaviy huquq va yangi texnologiyalar kesishmasida — kiberjinoyatlardan tortib kosmik texnologiyalarni huquqiy tartibga solishgacha.", en: "I assist in criminal cases, protect clients' rights in the digital environment and advise on international law. My specialization is at the intersection of traditional law and new technologies — from cybercrime to legal regulation of space technologies." },
    services: ["Уголовная защита", "Киберправо", "Цифровое право", "Международное право", "Космическое право", "Кибербезопасность"],
    blog: [], education: [
      { degree: "Бакалавр права", institution: "Ташкентский государственный юридический университет", year: "2013" }
    ], achievements: [
      "11+ лет опыта в уголовном и международном праве",
      "Один из немногих специалистов по космическому праву в Центральной Азии",
      "Консультант иностранных государственных органов по кибербезопасности",
      "Международная практика в тюркоязычных государствах"
    ], publications: []
  },
  {
    id: 9,
    slug: "boytrayev-dilshod",
    photo: "photos/boytrayev-dilshod.jpeg",
    name: "Boyturayev Dilshod",
    title: "Адвокат",
    specialization: ["Уголовное право", "Экономические споры", "Корпоративное право"],
    experience: "6+ лет",
    cases: "70+",
    initials: "БД",
    accentColor: "#1a4a6e",
    bio: { ru: "Адвокат с многолетним практическим опытом, ранее работавший в органах прокуратуры и руководивший юридической службой крупных компаний. Глубокая экспертиза в уголовном, экономическом и корпоративном праве.", uz: "Ko'p yillik amaliy tajribaga ega advokat, prokuratura organlarida va yirik kompaniyalarning yuridik xizmati boshlig'i sifatida faoliyat yuritgan. Jinoyat, iqtisodiy va korporativ huquqda chuqur tajriba.", en: "Lawyer with years of practical experience, formerly worked in the prosecutor's office and headed the legal service of major companies. Deep expertise in criminal, economic and corporate law." },
    description: { ru: "Дилшод Бойтураев прошёл путь от следователя прокуратуры до государственного обвинителя, достигнув должности прокурора отдела надзора Джизакской областной прокуратуры. Сегодня в качестве адвоката защищает интересы предпринимателей и физических лиц в экономических, корпоративных и уголовных делах. Знание системы изнутри позволяет ему выстраивать наиболее эффективные стратегии защиты.", uz: "Dilshod Boyturayev tergov xodimidan davlat ayblovchisiga qadar, Jizzax viloyati prokuraturasida nazorat bo'limi prokurori lavozimigacha ko'tarilgan. Bugun advokat sifatida tadbirkorlar va jismoniy shaxslarning iqtisodiy, korporativ va jinoyat ishlarida manfaatlarini himoya qiladi.", en: "Dilshod Boyturayev rose from prosecutor's investigator to state prosecutor, reaching the position of supervising prosecutor at Jizzax regional prosecutor's office. Today as an advocate he defends interests of entrepreneurs and individuals in economic, corporate and criminal cases." },
    howIHelp: { ru: "Используя многолетний опыт в прокуратуре, помогаю клиентам выстраивать сильную защитную позицию в уголовных и экономических делах, сопровождаю бизнес в корпоративных спорах и договорных отношениях.", uz: "Prokuraturadagi ko'p yillik tajribadan foydalanib, mijozlarga jinoyat va iqtisodiy ishlarda kuchli himoya pozitsiyasini qurishga yordam beraman, biznesni korporativ nizo va shartnoma munosabatlarida qo'llab-quvvatlayman.", en: "Using years of experience in the prosecutor's office, I help clients build a strong defense position in criminal and economic cases, and support businesses in corporate disputes and contractual relations." },
    services: ["Уголовная защита", "Экономические споры", "Корпоративные вопросы", "Судебное представительство", "Договорное право"],
    blog: [], education: [
      { degree: "Юридическое образование", institution: "Ташкентский государственный юридический университет", year: "" }
    ], achievements: [
      "Прокурор отдела надзора за исполнением законодательства в экономической сфере, Джизакская областная прокуратура",
      "Государственный обвинитель по уголовным делам",
      "Следователь прокуратуры с опытом расследования сложных уголовных дел",
      "Научно-практическая деятельность по корпоративному праву и предпринимательству"
    ], publications: []
  },
  {
    id: 10,
    slug: "ergasheva-sevinch",
    photo: "photos/ergasheva-sevinch.jpeg",
    name: "Эргашева Севинч",
    title: "Адвокат",
    specialization: ["Корпоративное право", "Экономические споры", "Гражданское право"],
    experience: "4+ лет",
    cases: "50+",
    initials: "ЭС",
    accentColor: "#3a5c8a",
    bio: { ru: "Адвокат GSP LAW, специализирующаяся на корпоративном праве, экономических и гражданских спорах. Завершает магистратуру Ташкентского государственного юридического университета. Отличается стратегическим подходом и нацеленностью на результат.", uz: "GSP LAW advokati, korporativ huquq, iqtisodiy va fuqarolik nizolariga ixtisoslashgan. Toshkent davlat yuridik universitetining magistratura bosqichini yakunlamoqda. Strategik yondashuv va natijaga yo'nalganligi bilan ajralib turadi.", en: "Advocate at GSP LAW specializing in corporate law, economic and civil disputes. Completing a Master's degree at Tashkent State University of Law. Stands out for strategic thinking and results-oriented approach." },
    description: { ru: "Севинч Эргашева занимается полным сопровождением корпоративных процедур — от создания компаний до разрешения споров между акционерами. В экономических делах профессионально защищает интересы предпринимателей в судах. В гражданских делах ведёт широкий спектр споров: имущество, наследство, долги, трудовые и семейные дела.", uz: "Sevinch Ergasheva korporativ protseduralarni to'liq qo'llab-quvvatlaydi — kompaniyalar ta'sisidan aksiyadorlar o'rtasidagi nizolarni hal etishgacha. Iqtisodiy ishlarda iqtisodiy sudlarda tadbirkorlar manfaatlarini professional himoya qiladi. Fuqarolik ishlarida mulk, meros, qarz, mehnat va oilaviy nizolarning keng doirasini olib boradi.", en: "Sevinch Ergasheva provides full support of corporate procedures — from company incorporation to resolving shareholder disputes. In economic cases, she professionally defends entrepreneurs' interests in courts. In civil cases, she handles a wide range of disputes: property, inheritance, debts, labor and family matters." },
    howIHelp: { ru: "Помогаю бизнесу решать корпоративные и экономические вопросы — от учредительных документов до судебных споров. Частным лицам — в гражданских делах любой сложности: имущество, семья, долги, трудовые конфликты.", uz: "Biznesga korporativ va iqtisodiy masalalarni hal etishda yordam beraman — ta'sis hujjatlaridan sud nizolarigacha. Jismoniy shaxslarga — har qanday murakkablikdagi fuqarolik ishlarida: mulk, oila, qarz, mehnat nizolari.", en: "I help businesses resolve corporate and economic issues — from founding documents to court disputes. For individuals — in civil cases of any complexity: property, family, debts, labor conflicts." },
    services: ["Корпоративное право", "Экономические споры", "Гражданские дела", "Учредительные документы", "Имущественные споры", "Семейное право"],
    blog: [], education: [
      { degree: "Магистратура (в процессе)", institution: "Ташкентский государственный юридический университет", year: "2025" },
      { degree: "Бакалавр права", institution: "Ташкентский государственный юридический университет", year: "2023" }
    ], achievements: [
      "Стратегический подход к ведению корпоративных и экономических дел",
      "Опыт в гражданских делах: имущество, наследство, семейное право",
      "Полное сопровождение корпоративных процедур"
    ], publications: []
  },
  {
    id: 11,
    slug: "saidov-elyor",
    photo: "photos/saidov-elyor.jpeg",
    name: "Саидов Элёрбек",
    title: "Юрист",
    specialization: ["Корпоративное право", "Коммерческое право", "Инвестиционное право"],
    experience: "4+ лет",
    cases: "45+",
    initials: "СЭ",
    accentColor: "#2c3e6b",
    bio: { ru: "Юрист GSP LAW, специализирующийся на корпоративном, коммерческом и инвестиционном праве. Оказывает правовые услуги местным и иностранным клиентам по вопросам контрактного права, инвестиций, корпоративных структур и коммерческих споров.", uz: "GSP LAW yuristи, korporativ, tijorat va investitsion huquq bo'yicha ixtisoslashgan. Shartnoma huquqi, investitsiyalar, korporativ tuzilmalar va tijorat nizolari bo'yicha mahalliy va xorijiy mijozlarga huquqiy xizmatlar ko'rsatadi.", en: "Lawyer at GSP LAW specializing in corporate, commercial and investment law. Provides legal services to local and foreign clients on contract law, investments, corporate structures and commercial disputes." },
    description: { ru: "Элёрбек Саидов имеет опыт в международных инвестиционных проектах, правовых аудитах, реструктуризации уставного капитала и нормативно-правовом соответствии. Разрабатывает коммерческие соглашения, ведёт переговоры и представляет клиентов в суде. Работает над развитием компетенций в области M&A и международной правовой практики.", uz: "Elyorbek Saidov xorijiy investitsiyalar, huquqiy auditlar, ustav kapitalini restrukturizatsiya qilish va normativ-huquqiy muvofiqlik loyihalarida tajribaga ega. Tijorat shartnomalari ishlab chiqadi, muzokaralar olib boradi va sudda mijozlar manfaatlarini himoya qiladi.", en: "Elyorbek Saidov has experience in international investment projects, legal audits, authorized capital restructuring and regulatory compliance. Drafts commercial agreements, conducts negotiations and represents clients in court. Developing expertise in M&A and international legal practice." },
    howIHelp: { ru: "Помогаю местным и иностранным компаниям в вопросах корпоративного структурирования, заключения контрактов, привлечения инвестиций и разрешения коммерческих споров в Узбекистане.", uz: "Mahalliy va xorijiy kompaniyalarga O'zbekistonda korporativ tuzilma, shartnomalar tuzish, investitsiyalar jalb qilish va tijorat nizolarini hal etish masalalarida yordam beraman.", en: "I help local and foreign companies with corporate structuring, contracting, attracting investments and resolving commercial disputes in Uzbekistan." },
    services: ["Корпоративное право", "Коммерческие контракты", "Инвестиционные проекты", "Правовой аудит", "Корпоративные споры", "M&A"],
    blog: [], education: [
      { degree: "Бакалавр права", institution: "Ташкентский государственный юридический университет", year: "" }
    ], achievements: [
      "Опыт в международных инвестиционных проектах",
      "Участие в реструктуризации уставного капитала компаний",
      "Разработка комплексных стратегий управления правовыми рисками"
    ], publications: []
  },
  {
    id: 12,
    slug: "zayniyev-mujohid",
    photo: "photos/zayniyev-mujohid.jpeg",
    name: "Зайниев Муджохид",
    title: "Адвокат",
    specialization: ["Бизнес-право", "Корпоративное право", "Уголовное право"],
    experience: "3+ лет",
    cases: "40+",
    initials: "ЗМ",
    accentColor: "#17435a",
    bio: { ru: "Адвокат GSP LAW с академическим фундаментом Ташкентского государственного юридического университета. Специализируется на защите бизнеса, корпоративном праве и уголовных делах. Выделяется стратегическим мышлением и применением инновационных цифровых решений в юридической практике.", uz: "Toshkent davlat yuridik universitetining akademik poydevori bilan GSP LAW advokati. Biznesni himoya qilish, korporativ huquq va jinoyat ishlariga ixtisoslashgan. Strategik fikrlashi va yuridik amaliyotda innovatsion raqamli yechimlarni qo'llashi bilan ajralib turadi.", en: "Advocate at GSP LAW with an academic foundation from Tashkent State University of Law. Specializes in business protection, corporate law and criminal cases. Stands out for strategic thinking and application of innovative digital solutions in legal practice." },
    description: { ru: "Муджохид Зайниев — молодой, но высококвалифицированный адвокат GSP LAW. Специализируется на бизнес-праве (создание компаний, инвестиции, корпоративная документация), корпоративном праве (споры акционеров, защита от рисков) и уголовном праве (особенно по экономическим, финансовым и бизнес-преступлениям). Применяет новейшие цифровые и системные решения в юридической практике.", uz: "Mujohid Zayniyev — GSP LAW ning yosh, lekin yuqori malakali advokati. Biznes huquqi (kompaniya ta'sisi, investitsiyalar, korporativ hujjatlar), korporativ huquq (aksiyadorlar nizolari, risklardan himoya) va jinoyat huquqi (ayniqsa iqtisodiy, moliyaviy va biznes jinoyatlari) bo'yicha ixtisoslashgan.", en: "Mujohid Zayniyev is a young but highly qualified advocate at GSP LAW. Specializes in business law (company incorporation, investments, corporate documentation), corporate law (shareholder disputes, risk protection) and criminal law (especially economic, financial and business crimes). Applies the latest digital and systemic solutions in legal practice." },
    howIHelp: { ru: "Помогаю бизнесу на всех стадиях — от создания компании до защиты от корпоративных рисков. Особая специализация — уголовная защита в делах, связанных с бизнесом и финансовыми преступлениями.", uz: "Biznesga barcha bosqichlarda yordam beraman — kompaniya ta'sisidan korporativ risklardan himoyagacha. Alohida ixtisoslashuv — biznes va moliyaviy jinoyatlar bilan bog'liq jinoyat ishlarida himoya.", en: "I help businesses at all stages — from company incorporation to protection against corporate risks. Special specialization — criminal defense in cases related to business and financial crimes." },
    services: ["Бизнес-право", "Корпоративное право", "Уголовная защита", "Создание компаний", "Инвестиции", "Акционерные споры"],
    blog: [], education: [
      { degree: "Бакалавр права", institution: "Ташкентский государственный юридический университет", year: "2025" }
    ], achievements: [
      "Специализация в уголовной защите по экономическим и финансовым делам",
      "Применение инновационных цифровых решений в юридической практике",
      "Комплексная правовая поддержка бизнеса на всех стадиях"
    ], publications: []
  },
  {
    id: 13,
    slug: "sattorov-shohruh",
    photo: "photos/sattorov-shohruh.jpeg",
    name: "Саттаров Шохрух",
    title: "Юрист",
    specialization: ["Корпоративное право", "Коммерческое право", "Гражданское право"],
    experience: "4+ лет",
    cases: "50+",
    initials: "СШ",
    accentColor: "#1f3a5f",
    bio: { ru: "Юрист GSP LAW, специализирующийся на корпоративном и коммерческом праве. Оказывает правовую поддержку бизнесу в вопросах корпоративной документации, договорных отношений и гражданских споров.", uz: "GSP LAW yuristи, korporativ va tijorat huquqiga ixtisoslashgan. Korporativ hujjatlar, shartnoma munosabatlari va fuqarolik nizolari masalalarida biznesga huquqiy yordam ko'rsatadi.", en: "Lawyer at GSP LAW specializing in corporate and commercial law. Provides legal support to businesses on corporate documentation, contractual relations and civil disputes." },
    description: { ru: "Шохрух Саттаров ведёт корпоративные и коммерческие дела, помогает клиентам в подготовке договоров и правовой документации, а также в разрешении гражданских споров на досудебном и судебном этапах.", uz: "Shohruh Sattorov korporativ va tijorat ishlarini olib boradi, shartnomalar va huquqiy hujjatlarni tayyorlashda mijozlarga yordam beradi, shuningdek fuqarolik nizolarini sudgacha va sud bosqichida hal qiladi.", en: "Shohruh Sattorov handles corporate and commercial cases, helps clients prepare contracts and legal documentation, and resolves civil disputes at pre-trial and trial stages." },
    howIHelp: { ru: "Помогаю компаниям и физическим лицам решать корпоративные и коммерческие вопросы, подготавливаю договоры и представляю клиентов в гражданских спорах.", uz: "Kompaniyalar va jismoniy shaxslarga korporativ va tijorat masalalarini hal etishga yordam beraman, shartnomalar tayyorlayman va fuqarolik nizolarida mijozlarni himoya qilaman.", en: "I help companies and individuals resolve corporate and commercial matters, prepare contracts and represent clients in civil disputes." },
    services: ["Корпоративная документация", "Коммерческие договоры", "Гражданские споры", "Правовая экспертиза"],
    blog: [], education: [], achievements: [], publications: []
  },
  {
    id: 14,
    slug: "orinov-xayrullo",
    photo: "photos/orinov-xayrullo.jpeg",
    name: "O'rinov Xayrullo",
    title: "Адвокат",
    specialization: ["Корпоративное право", "Международное право", "Инвестиционный арбитраж"],
    experience: "3+ лет",
    cases: "30+",
    initials: "ОХ",
    accentColor: "#c9a96e",
    bio: { ru: "Адвокат GSP LAW, специализирующийся на корпоративном и международном праве. Консультирует бизнес-субъектов и защищает их интересы в государственных органах. Специализируется на международном коммерческом арбитраже и инвестиционных спорах.", uz: "GSP LAW advokati, korporativ va xalqaro huquq bo'yicha ixtisoslashgan. Biznes subyektlariga maslahat beradi va ularning manfaatlarini davlat organlarida himoya qiladi. Xalqaro tijorat arbitraji va investitsion nizolar bo'yicha ixtisoslashgan.", en: "Advocate at GSP LAW specializing in corporate and international law. Advises business entities and protects their interests in government authorities. Specializes in international commercial arbitration and investment disputes." },
    description: { ru: "Хайрулло О'ринов специализируется на правовой экспертизе коммерческих договоров, разработке контрактных структур и инвестиционном праве. Имеет опыт в работе с иностранными инвесторами при структурировании сделок и совместных предприятиях, применяя международную коммерческую практику (Incoterms, UNIDROIT, CISG). Нацелен на международный коммерческий арбитраж (ICC, SIAC, HKIAC) и инвестиционные споры ICSID.", uz: "Xayrullo O'rinov tijorat shartnomalari huquqiy ekspertizasi, shartnoma tuzilmalarini ishlab chiqish va investitsion huquq bo'yicha ixtisoslashgan. Xorijiy investorlar bilan bitimlar tuzish va qo'shma korxonalarda tajribaga ega, xalqaro tijorat amaliyotini (Incoterms, UNIDROIT, CISG) qo'llaydi.", en: "Xayrullo O'rinov specializes in legal review of commercial contracts, developing contract structures and investment law. Has experience working with foreign investors in deal structuring and joint ventures, applying international commercial practice (Incoterms, UNIDROIT, CISG). Focused on international commercial arbitration (ICC, SIAC, HKIAC) and ICSID investment disputes." },
    howIHelp: { ru: "Помогаю компаниям минимизировать регуляторные риски, структурировать договоры с иностранными партнёрами и защищать интересы в международных арбитражных разбирательствах.", uz: "Kompaniyalarga regulyator risklarni minimallashtirshda, xorijiy hamkorlar bilan shartnomalar tuzilmalashtirishda va xalqaro arbitraj jarayonlarida manfaatlarni himoya qilishda yordam beraman.", en: "I help companies minimize regulatory risks, structure contracts with foreign partners and protect interests in international arbitration proceedings." },
    services: ["Корпоративное право", "Международный арбитраж", "Инвестиционные споры", "Коммерческие договоры", "Совместные предприятия", "Due Diligence"],
    blog: [], education: [
      { degree: "Бакалавр права (LLB)", institution: "Ташкентский государственный юридический университет", year: "" }
    ], achievements: [
      "Специализация в международном коммерческом арбитраже (ICC, SIAC, HKIAC)",
      "Опыт в инвестиционных спорах в рамках ICSID",
      "Признание и исполнение иностранных арбитражных решений в Узбекистане"
    ], publications: []
  },
  {
    id: 15,
    slug: "azimjon-zuxurov",
    photo: "photos/azimjon-zuxurov.jpeg",
    name: "Azimjon Zuxurov",
    title: "Адвокат | Профессиональный медиатор",
    specialization: ["Экономическое право", "Корпоративное право", "Медиация"],
    experience: "10+ лет",
    cases: "200+",
    initials: "AZ",
    accentColor: "#2d5a8e",
    bio: { ru: "Профессиональный адвокат с многолетним опытом в сложных экономических спорах, корпоративном управлении и правовой защите бизнеса. Медиа-эксперт с аудиторией 600 000+ в проекте «Yurist Zukhurov». Постоянный эксперт O'zbekiston24, Zo'r TV и Sevimli.", uz: "Murakkab iqtisodiy nizolar, korporativ boshqaruv va biznesni huquqiy himoya qilish sohasida ko'p yillik tajribaga ega professional advokat. \"Yurist Zukhurov\" loyihasi orqali 600 000+ auditoriyaga ega media-ekspert. O'zbekiston24, Zo'r TV va Sevimli kanallarining doimiy eksperti.", en: "Professional lawyer with years of experience in complex economic disputes, corporate governance and legal protection of business. Media expert with 600,000+ audience through the 'Yurist Zukhurov' project. Regular expert on O'zbekiston24, Zo'r TV and Sevimli channels." },
    description: { ru: "Азимжон Зухуров — профессиональный адвокат с уникальным сочетанием опыта государственного управления и судебной практики. Работал на ответственных должностях в государственном учреждении при Министерстве, что позволяет ему понимать систему изнутри. Сегодня — не только практикующий адвокат, но и признанный медиа-эксперт, системно содействующий верховенству закона в обществе через проект «Yurist Zukhurov» и регулярные выступления на ведущих телеканалах страны.", uz: "Azimjon Zuxurov — davlat boshqaruvi va sud amaliyotining noyob uyg'unligiga ega professional advokat. Vazirlik huzuridagi davlat muassasasida mas'uliyatli lavozimlarda faoliyat yuritgan, bu tizimni ichidan tushunishiga imkon beradi. Bugun u nafaqat amaliyotchi advokat, balki \"Yurist Zukhurov\" loyihasi va yetakchi telekanallar orqali jamiyatda qonun ustuvorligini ta'minlashga tizimli hissa qo'shayotgan media-ekspertdir.", en: "Azimjon Zuxurov is a professional lawyer with a unique combination of public administration and judicial practice experience. Worked in responsible positions at a government institution under the Ministry, giving him an inside understanding of the system. Today he is not only a practicing lawyer but also a recognized media expert systematically contributing to the rule of law through the 'Yurist Zukhurov' project and regular appearances on leading TV channels." },
    howIHelp: { ru: "Специализируюсь на защите бизнеса в сложных экономических и корпоративных спорах. Как профессиональный медиатор помогаю разрешать конфликты без суда. Мой опыт государственной службы позволяет эффективно взаимодействовать с государственными органами в интересах клиентов.", uz: "Murakkab iqtisodiy va korporativ nizolarda biznesni himoya qilishga ixtisoslanganman. Professional mediator sifatida nizolarni sudgacha hal etishga yordam beraman. Davlat xizmati tajribam davlat organlari bilan mijozlar manfaatlarida samarali ishlash imkonini beradi.", en: "I specialize in protecting business in complex economic and corporate disputes. As a professional mediator I help resolve conflicts without court. My public service experience allows effective interaction with government authorities in clients' interests." },
    services: ["Экономические споры", "Корпоративное управление", "Медиация", "Правовая защита бизнеса", "Взаимодействие с госорганами", "Консультации"],
    blog: [], education: [], achievements: [
      "Профессиональный медиатор",
      "Медиа-эксперт: проект «Yurist Zukhurov» — 600 000+ подписчиков",
      "Постоянный эксперт O'zbekiston24, Zo'r TV, Sevimli",
      "Опыт государственной службы при Министерстве"
    ], publications: []
  },
]

/* ===== CASES ===== */
const CASES = [
  {
    id: 1, tag: 'IT-право', icon: '💻', color: '#1565c0',
    title: 'Защита IT-компании в споре на $5.2 млн',
    desc: 'Успешная защита узбекского IT-стартапа в споре с международным партнёром по нарушению лицензионного соглашения. Урегулировано через медиацию без судебного разбирательства.',
    result: 'Экономия $5.2 млн', year: '2024', lawyer: 'Гулямов С.С.',
    challenge: 'Международный партнёр предъявил претензии на $5.2 млн, утверждая о нарушении эксклюзивного лицензионного соглашения. IT-стартап оказался под угрозой ликвидации.',
    approach: 'Провели детальный анализ договорной документации, выявили процедурные нарушения со стороны истца и подготовили контрпретензию. Инициировали медиацию в нейтральной юрисдикции.',
    duration: '4 месяца',
    jurisdiction: 'Узбекистан / Международный арбитраж'
  },
  {
    id: 2, tag: 'Уголовное право', icon: '🛡️', color: '#37474f',
    title: 'Прекращение уголовного дела против CEO',
    desc: 'Защита генерального директора производственной компании от обвинений в уклонении от уплаты налогов. Дело прекращено на стадии следствия за отсутствием состава преступления.',
    result: 'Дело прекращено', year: '2024', lawyer: 'Рашидов Ж.А.',
    challenge: 'Генеральный директор оказался под уголовным преследованием с угрозой лишения свободы до 5 лет. Компания рисковала прекратить деятельность.',
    approach: 'Обеспечили немедленный доступ к клиенту, провели параллельный налоговый аудит, доказали правомерность спорных операций документально. Оспорили процессуальные нарушения следствия.',
    duration: '3 месяца',
    jurisdiction: 'Ташкент, Узбекистан'
  },
  {
    id: 3, tag: 'M&A', icon: '🤝', color: '#c9a96e',
    title: 'Сопровождение сделки слияния на $18 млн',
    desc: 'Юридическое сопровождение поглощения телеком-компании с активами в трёх регионах Узбекистана: due diligence, структурирование сделки, переговоры и закрытие.',
    result: 'Сделка закрыта', year: '2024', lawyer: "Sodiq A.G.",
    challenge: 'Сделка осложнялась скрытыми обязательствами цели, разногласиями акционеров и необходимостью регуляторного согласования в сфере телекоммуникаций.',
    approach: 'Провели всестороннюю проверку (due diligence) за 6 недель, структурировали сделку с условиями escrow для снижения рисков. Добились согласования регулятора в рекордные сроки.',
    duration: '6 месяцев',
    jurisdiction: 'Узбекистан'
  },
  {
    id: 4, tag: 'Налоговое право', icon: '📊', color: '#c62828',
    title: 'Возврат незаконно взысканного НДС — $1.2 млн',
    desc: 'Успешное оспаривание решения налоговых органов и возврат незаконно взысканных сумм НДС и налога на прибыль для крупного производственного предприятия.',
    result: 'Возвращено $1.2 млн', year: '2023', lawyer: 'Тошматова З.Б.',
    challenge: 'Налоговые органы доначислили $1.2 млн НДС и налога на прибыль, ссылаясь на ненадлежащее оформление экспортных операций. Угроза банкротства предприятия.',
    approach: 'Провели анализ 3 лет первичной документации, доказали правомерность налоговых вычетов. Представляли интересы клиента во всех инстанциях — от налоговой до Высшего суда.',
    duration: '8 месяцев',
    jurisdiction: 'Узбекистан, судебные инстанции всех уровней'
  },
  {
    id: 5, tag: 'Интеллект. собственность', icon: '💡', color: '#6a1b9a',
    title: 'Защита бренда от международного плагиата',
    desc: 'Регистрация товарного знака и защита исключительных прав клиента против иностранного конкурента, незаконно использовавшего идентичный бренд на рынке Узбекистана.',
    result: 'Бренд защищён', year: '2024', lawyer: 'Холматова Д.У.',
    challenge: 'Иностранная компания использовала идентичный бренд клиента на территории Узбекистана, создавая путаницу на рынке и нанося ущерб репутации.',
    approach: 'Провели параллельную регистрацию товарного знака по системе Мадрида, подали иск о пресечении незаконного использования и взыскании убытков.',
    duration: '5 месяцев',
    jurisdiction: 'Узбекистан / Международная система Мадрида'
  },
  {
    id: 6, tag: 'Трудовое право', icon: '👥', color: '#00695c',
    title: 'Коллективный трудовой спор с 47 сотрудниками',
    desc: 'Представление интересов крупной компании в коллективном трудовом споре. Достигнуто мировое соглашение на условиях, полностью защищающих интересы работодателя.',
    result: 'Мировое соглашение', year: '2024', lawyer: 'Юсупова М.С.',
    challenge: 'Организованная группа из 47 сотрудников подала коллективный иск с требованиями на сумму свыше $800 тысяч. Риск репутационного ущерба и медиаогласки.',
    approach: 'Провели аудит трудовой документации, выявили процессуальные слабости исков. Организовали конфиденциальные переговоры и достигли мирового соглашения на выгодных условиях.',
    duration: '2.5 месяца',
    jurisdiction: 'Ташкент, Узбекистан'
  }
];

/* ===== METRICS ===== */
const METRICS = [
  { num: "94%",   key: "winRate",      icon: "🏆" },
  { num: "$250M+",key: "portfolioVal", icon: "💼" },
  { num: "120+",  key: "combinedExp",  icon: "⚖️" },
  { num: "45+",   key: "intlCases",    icon: "🌐" },
  { num: "98%",   key: "satisfaction", icon: "⭐" },
  { num: "15+",   key: "industries",   icon: "🏢" },
  { num: "1000+", key: "clients",      icon: "🤝" },
  { num: "16+",   key: "yearsOnMkt",   icon: "📅" },
  { num: "3",     key: "languages",    icon: "🗣️" },
  { num: "24/7",  key: "support",      icon: "🔔" }
];

/* ===== NEWS ===== */
const NEWS = [
  {
    id: 1, tag: 'AI-право', tagColor: '#4527a0', date: 'Апрель 2026',
    title: 'Закон об ИИ ЕС 2026: полное применение с августа. Что нужно знать бизнесу',
    excerpt: 'С 2 августа 2026 года EU AI Act вступает в полную силу. Каждая страна-член ЕС обязана создать национальный регуляторный «песочницы» для ИИ. Эксперты предупреждают: аналогичное регулирование в СНГ неизбежно.',
    source: 'European Commission',
    url: 'https://artificialintelligenceact.eu/'
  },
  {
    id: 2, tag: 'Конфиденциальность', tagColor: '#1565c0', date: 'Январь 2026',
    title: 'Privacy & Cybersecurity 2025–2026: вызовы и тренды для бизнеса',
    excerpt: 'White & Case опубликовал обзор ключевых изменений в законодательстве о защите данных. Число штатов США с действующими законами о конфиденциальности выросло с 9 до 20. Глобальный тренд — ужесточение киберответственности.',
    source: 'White & Case LLP',
    url: 'https://www.whitecase.com/insight-alert/privacy-and-cybersecurity-2025-2026-insights-challenges-and-trends-ahead'
  },
  {
    id: 3, tag: 'Крипто / Финтех', tagColor: '#e65100', date: 'Январь 2026',
    title: 'Цифровые активы 2025–2026: знаковый год и новые горизонты',
    excerpt: 'Cleary Gottlieb подвёл итоги переломного 2025 года для регулирования крипторынка: принятие GENIUS Act в США, полное внедрение MiCA в ЕС, реформы KYC/AML. Рынок вступает в фазу зрелого регулирования.',
    source: 'Cleary Gottlieb',
    url: 'https://www.clearygottlieb.com/news-and-insights/publication-listing/2026-digital-assets-regulatory-update-a-landmark-2025-but-more-developments-on-the-horizon'
  },
  {
    id: 4, tag: 'Арбитраж', tagColor: '#00695c', date: 'Январь 2026',
    title: 'Тренды международного арбитража 2026: ИИ, торговые споры и новые правила',
    excerpt: 'Cleary Gottlieb выявил ключевые тенденции: рост споров M&A и ценных бумаг, интеграция ИИ в арбитражные процессы, новые арбитражные законы Англии (2025) и Китая (2026), усиление ОАЭ как площадки для разрешения споров.',
    source: 'Cleary Gottlieb',
    url: 'https://www.clearygottlieb.com/news-and-insights/publication-listing/international-arbitration-trends-and-topics-for-2026'
  },
  {
    id: 5, tag: 'M&A', tagColor: '#2e7d32', date: 'Декабрь 2025',
    title: 'M&A 2025: рекордный год и прогноз на 2026. ИИ-сделки доминируют',
    excerpt: 'По итогам 2025 года рынок слияний и поглощений установил рекорды. SoftBank вложил $40 млрд в OpenAI. Проект Stargate — $500 млрд в AI-инфраструктуру. В 2026 году ожидается дальнейший рост транзакций в секторе ИИ.',
    source: 'Cleary Gottlieb',
    url: 'https://www.clearygottlieb.com/news-and-insights/publication-listing/ma-2025-in-review-and-a-look-ahead-to-2026'
  },
  {
    id: 6, tag: 'Данные / Технологии', tagColor: '#c62828', date: 'Январь 2026',
    title: 'Baker McKenzie: что ждёт сферу данных, технологий и кибербезопасности в 2026',
    excerpt: 'Ведущая международная фирма опубликовала прогноз: ужесточение технических и организационных требований по кибербезопасности, обязательные оценки рисков, управление цепочками поставок и новые органы по киберрегулированию.',
    source: 'Baker McKenzie',
    url: 'https://www.bakermckenzie.com/en/insight/publications/2026/01/whats-on-the-horizon-for-data-technology'
  },
  {
    id: 7, tag: 'AI-законы США', tagColor: '#37474f', date: 'Апрель 2026',
    title: 'Битва за регулирование ИИ: федеральный уровень против законов штатов',
    excerpt: 'В 2025 году в США было внесено более 1 000 законопроектов об ИИ. Белый дом создал «AI Litigation Task Force» для оспаривания законов штатов. Colorado AI Act вступит в силу 30 июня 2026 года.',
    source: 'Cooley LLP',
    url: 'https://www.cooley.com/news/insight/2026/2026-04-24-state-ai-laws-where-are-they-now'
  },
  {
    id: 8, tag: 'Крипто — глобально', tagColor: '#558b2f', date: 'Март 2026',
    title: 'Крипторегулирование 2026: демократизация цифровых активов',
    excerpt: 'K&L Gates: 2026 год станет поворотным для институционального принятия цифровых активов. Банковские регуляторы расширяют перечень разрешённых операций с криптовалютой. GENIUS Act начинает реализацию.',
    source: 'K&L Gates',
    url: 'https://www.klgates.com/Crypto-in-2026-The-Democratization-of-Digital-Assets-1-29-2026'
  }
];

/* ===== I18N / TRANSLATIONS ===== */
const LANG = {
  ru: {
    nav: { about: 'О нас', services: 'Услуги', team: 'Команда', consult: 'Консультация', news: 'Новости' },
    stats: ['лет опыта', 'портфель кейсов', 'адвокатов', 'клиентов'],
    hero: {
      tag: 'Юридическая фирма в Ташкенте',
      desc: 'Узкопрофильная команда экспертов в сфере IT-права, корпоративного права и разрешения экономических споров',
      btn1: 'Наша команда', btn2: 'Получить консультацию'
    },
    about: {
      sTag: 'О фирме', sTitle: 'Профессионализм. Доверие. Результат.',
      p1: 'GSP LAW — узкопрофильная юридическая фирма, специализирующаяся на комплексном правовом сопровождении IT-бизнеса, стартапов и коммерческих организаций в Узбекистане и за рубежом.',
      p2: 'Наша команда объединяет опытных адвокатов с глубокими знаниями в области киберправа, корпоративного права, налогового и банковского законодательства.',
      li: ['Высокий профессионализм','Индивидуальный подход к каждому клиенту','Оперативность и чёткость в работе','Абсолютная конфиденциальность'],
      mTitle: 'Наша миссия', mText: 'Мы ставим интересы клиента на первое место, обеспечивая максимальную защиту прав и законных интересов в любой правовой ситуации.',
      yearsLabel: 'лет',
      teamTag: 'Ключевые партнёры', teamTitle: 'Основатели и партнёры'
    },
    metrics: {
      sTag: 'Показатели', sTitle: 'Эффективность в цифрах', sDesc: 'Результаты, которые говорят сами за себя',
      winRate: 'Победный процент', portfolioVal: 'Стоимость портфеля', combinedExp: 'Лет совокупного опыта',
      intlCases: 'Международных дел', satisfaction: 'Удовлетворённость клиентов', industries: 'Отраслей практики',
      clients: 'Клиентов обслужено', yearsOnMkt: 'Лет на рынке', languages: 'Языка практики', support: 'Поддержка клиентов'
    },
    services: {
      sTag: 'Практика', sTitle: 'Области права', sDesc: 'Комплексное юридическое сопровождение бизнеса по всем ключевым направлениям',
      items: [
        { title: 'Корпоративное право и M&A', desc: 'Сопровождение сделок слияния и поглощения, корпоративное структурирование, акционерные соглашения' },
        { title: 'IT и киберправо', desc: 'Правовое сопровождение IT-компаний, стартапов, защита персональных данных и кибербезопасность' },
        { title: 'Банковское и финансовое право', desc: 'Регуляторные вопросы, финтех, лицензирование, финансовые транзакции' },
        { title: 'Налоговая практика', desc: 'Налоговое планирование, оптимизация, споры с налоговыми органами' },
        { title: 'Экономические споры', desc: 'Представление интересов в арбитражных судах, медиация, переговоры' },
        { title: 'Таможенное право', desc: 'Сопровождение ВЭД, таможенное оформление, споры с таможенными органами' },
        { title: 'Уголовная защита бизнеса', desc: 'Защита предпринимателей и руководителей в рамках уголовных дел' },
        { title: 'Трудовое право', desc: 'Трудовые договоры, споры с работниками, кадровое делопроизводство' },
        { title: 'Интеллектуальная собственность', desc: 'Регистрация товарных знаков, патентование, защита авторских прав' },
        { title: 'Постоянное обслуживание', desc: 'Комплексное юридическое сопровождение коммерческих организаций на постоянной основе' },
        { title: 'Контрактное право', desc: 'Разработка и экспертиза договоров, переговоры, урегулирование разногласий' },
        { title: 'Недвижимость', desc: 'Сопровождение сделок с недвижимостью, девелоперские проекты, арендные споры' }
      ]
    },
    cases: {
      sTag: 'Кейсы', sTitle: 'Выигранные дела', sDesc: 'Реальные результаты, которых мы добились для наших клиентов', result: 'Результат', year: 'Год', lawyer: 'Адвокат',
      allCasesBtn: 'Все кейсы →',
      items: [
        { tag: 'IT-право', title: 'Защита IT-компании в споре на $5.2 млн', desc: 'Успешная защита узбекского IT-стартапа в споре с международным партнёром по нарушению лицензионного соглашения. Урегулировано через медиацию без судебного разбирательства.', result: 'Экономия $5.2 млн' },
        { tag: 'Уголовное право', title: 'Прекращение уголовного дела против CEO', desc: 'Защита генерального директора производственной компании от обвинений в уклонении от уплаты налогов. Дело прекращено на стадии следствия за отсутствием состава преступления.', result: 'Дело прекращено' },
        { tag: 'M&A', title: 'Сопровождение сделки слияния на $18 млн', desc: 'Юридическое сопровождение поглощения телеком-компании с активами в трёх регионах Узбекистана: due diligence, структурирование сделки, переговоры и закрытие.', result: 'Сделка закрыта' },
        { tag: 'Налоговое право', title: 'Возврат незаконно взысканного НДС — $1.2 млн', desc: 'Успешное оспаривание решения налоговых органов и возврат незаконно взысканных сумм НДС и налога на прибыль для крупного производственного предприятия.', result: 'Возвращено $1.2 млн' },
        { tag: 'Интеллект. собственность', title: 'Защита бренда от международного плагиата', desc: 'Регистрация товарного знака и защита исключительных прав клиента против иностранного конкурента, незаконно использовавшего идентичный бренд на рынке Узбекистана.', result: 'Бренд защищён' },
        { tag: 'Трудовое право', title: 'Коллективный трудовой спор с 47 сотрудниками', desc: 'Представление интересов крупной компании в коллективном трудовом споре. Достигнуто мировое соглашение на условиях, полностью защищающих интересы работодателя.', result: 'Мировое соглашение' }
      ]
    },
    lawyers: {
      sTag: 'Команда', sTitle: 'Наши адвокаты и юристы', sDesc: 'Каждый специалист имеет глубокую экспертизу в своей области права', exp: 'опыт', casesLbl: 'дел', more: 'Подробнее →',
      titleMap: {},
      specMap: {}
    },
    news: { sTag: 'Новости', sTitle: 'Право и технологии', sDesc: 'Актуальные новости о кибербезопасности, IT-праве и юридическом мире — 2025', read: 'Читать далее →' },
    contact: {
      sTag: 'Контакты', sTitle: 'Свяжитесь с нами', sDesc: 'Первая консультация — бесплатно. Мы ответим в течение часа.',
      addr: 'Адрес', phone: 'Телефон', email: 'Email', formTitle: 'Задать вопрос',
      ph: { name: 'Ваше имя', tel: 'Номер телефона', email: 'Email (необязательно)', svc: 'Выберите услугу', msg: 'Кратко опишите вашу ситуацию или вопрос...' },
      submit: 'Отправить запрос →', success: '✓ Запрос отправлен! Мы свяжемся с вами в ближайшее время.',
      svcOptions: ['Корпоративное право и M&A','IT и киберправо','Налоговая практика','Банковское и финансовое право','Трудовое право','Интеллектуальная собственность','Таможенное право','Уголовная защита бизнеса','Экономические споры','Другое']
    },
    footer: {
      rights: '© 2025 GSP LAW — Gulyamov, Sadikov and Partners. Все права защищены.',
      sTitle: 'Услуги', cTitle: 'Контакты',
      servicesList: ['Корпоративное право','IT и киберправо','Налоговая практика','Банковское право','Трудовое право','Интеллект. собственность']
    },
    lp: {
      back: 'Назад к команде', bio: 'Биография', help: 'Как я могу помочь', services: 'Услуги',
      consultTitle: 'Записаться на консультацию', sendBtn: 'Отправить запрос',
      expLbl: 'Опыт работы', casesLbl: 'Завершённых дел', firm: 'Фирма', office: 'Офис',
      blogTag: 'Блог', blogDesc: 'Экспертные статьи и аналитика', info: 'Информация',
      educationTitle: 'Образование', achievementsTitle: 'Достижения и награды', publicationsTitle: 'Публикации',
      otherTag: 'Команда', otherTitle: 'Другие специалисты', allTeam: 'Вся команда →', readMore: 'Читать далее →',
      heroTag: 'Специалист GSP LAW', visitWebsite: '🔗 Вебсайт', notFound: 'Страница не найдена'
    },
    casesPage: {
      heroTag: 'Наша практика', heroTitle: 'Выигранные дела', heroDesc: 'Реальные результаты для реальных клиентов',
      challenge: 'Задача', approach: 'Наш подход', outcome: 'Результат',
      durationLabel: 'Длительность', jurLabel: 'Юрисдикция', lawyerLabel: 'Адвокат',
      filterAll: 'Все дела',
      backBtn: '← На главную'
    }
  },
  uz: {
    nav: { about: 'Biz haqida', services: 'Xizmatlar', team: 'Jamoa', consult: 'Konsultatsiya', news: 'Yangiliklar' },
    stats: ['yillik tajriba', 'ish portfeli', 'advokat', 'mijozlar'],
    hero: {
      tag: 'Toshkentdagi yuridik firma',
      desc: "IT-huquq, korporativ huquq va iqtisodiy nizolarni hal etish sohasidagi mutaxassislar jamoasi",
      btn1: 'Bizning jamoa', btn2: 'Konsultatsiya olish'
    },
    about: {
      sTag: 'Firma haqida', sTitle: 'Professionallik. Ishonch. Natija.',
      p1: "GSP LAW — IT-biznes, startaplar va tijorat tashkilotlarini O'zbekiston va xorijda yuridik jihatdan to'liq qo'llab-quvvatlashga ixtisoslashgan yuridik firma.",
      p2: 'Bizning jamoamiz kiberhuquq, korporativ huquq, soliq va bank qonunchiligida chuqur bilimlarga ega tajribali advokatlarni birlashtiradi.',
      li: ["Yuqori professionallik","Har bir mijozga individual yondashuv","Tezkorlik va aniqlik","To'liq maxfiylik"],
      mTitle: 'Bizning missiyamiz', mText: "Biz mijoz manfaatlarini birinchi o'ringa qo'yamiz, har qanday huquqiy vaziyatda huquq va qonuniy manfaatlarni maksimal darajada himoya qilamiz.",
      yearsLabel: 'yil',
      teamTag: 'Asosiy hamkorlar', teamTitle: 'Asoschiler va hamkorlar'
    },
    metrics: {
      sTag: 'Ko\'rsatkichlar', sTitle: 'Raqamlarda samaradorlik', sDesc: "O'z-o'zidan gapiradigan natijalar",
      winRate: "G'alaba foizi", portfolioVal: 'Portfolio qiymati', combinedExp: 'Yillik tajriba',
      intlCases: 'Xalqaro ishlar', satisfaction: 'Mijozlar mamnuniyati', industries: 'Amaliyot sohalari',
      clients: 'Xizmat ko\'rsatilgan mijozlar', yearsOnMkt: 'Bozorda yillar', languages: 'Amaliyot tillari', support: 'Mijozlarni qo\'llab-quvvatlash'
    },
    services: {
      sTag: 'Amaliyot', sTitle: 'Huquq sohalari', sDesc: "Barcha asosiy yo'nalishlarda biznesni yuridik jihatdan to'liq qo'llab-quvvatlash",
      items: [
        { title: 'Korporativ huquq va M&A', desc: "Birlashtirish va sotib olish bitimlarini qo'llab-quvvatlash, korporativ tuzilma, aksionerlik shartnomalari" },
        { title: 'IT va kiberhuquq', desc: "IT-kompaniyalar, startaplarni huquqiy qo'llab-quvvatlash, shaxsiy ma'lumotlarni himoyalash va kiberxavfsizlik" },
        { title: 'Bank va moliya huquqi', desc: 'Tartibga solish masalalari, fintech, litsenziyalash, moliyaviy tranzaksiyalar' },
        { title: 'Soliq amaliyoti', desc: 'Soliq rejalashtirish, optimallashtirish, soliq organlari bilan nizolar' },
        { title: 'Iqtisodiy nizolar', desc: 'Arbitraj sudlarida manfaatlarni ifodalash, mediatsiya, muzokaralar' },
        { title: 'Bojxona huquqi', desc: "Tashqi savdo bitimlarini qo'llab-quvvatlash, bojxona rasmiylashtiruvi, bojxona organlari bilan nizolar" },
        { title: 'Biznesni jinoiy himoyalash', desc: 'Tadbirkorlar va rahbarlarni jinoiy ishlarda himoyalash' },
        { title: 'Mehnat huquqi', desc: 'Mehnat shartnomalari, xodimlar bilan nizolar, kadrlar ish yuritish' },
        { title: 'Intellektual mulk', desc: "Tovar belgilarini ro'yxatga olish, patentlash, mualliflik huquqini himoyalash" },
        { title: "Doimiy xizmat ko'rsatish", desc: 'Tijorat tashkilotlariga doimiy asosda kompleks yuridik xizmat' },
        { title: 'Shartnoma huquqi', desc: "Shartnomalarni ishlab chiqish va ekspertiza, muzokaralar, kelishmovchiliklarni hal etish" },
        { title: "Ko'chmas mulk", desc: "Ko'chmas mulk bilan bitimlarni qo'llab-quvvatlash, developer loyihalar, ijara nizolari" }
      ]
    },
    cases: {
      sTag: 'Ishlar', sTitle: "G'alaba qozonilgan ishlar", sDesc: 'Mijozlarimiz uchun erishilgan real natijalar', result: 'Natija', year: 'Yil', lawyer: 'Advokat',
      allCasesBtn: "Barcha ishlar →",
      items: [
        { tag: 'IT huquqi', title: "IT-kompaniyani $5.2 mln nizosida himoyalash", desc: "O'zbek IT startapini xalqaro hamkor bilan litsenziya shartnomasi buzilishi bo'yicha nizoda muvaffaqiyatli himoyalash. Sud ishlarisiz mediatsiya orqali hal qilindi.", result: '$5.2 mln tejaldi' },
        { tag: 'Jinoiy huquq', title: "Bosh direktor jinoiy ishi to'xtatildi", desc: "Ishlab chiqarish kompaniyasi bosh direktorini soliq to'lashdan bo'yin tovlash aybi bo'yicha himoyalash. Ish tergov bosqichida jinoyat tarkibi yo'qligi sababli to'xtatildi.", result: "Ish to'xtatildi" },
        { tag: 'M&A', title: "$18 mln birlashtirish bitimini qo'llab-quvvatlash", desc: "O'zbekistonning uch hududidagi aktivlarga ega telekommunikatsiya kompaniyasini sotib olishni yuridik qo'llab-quvvatlash: due diligence, bitimni tuzish, muzokaralar va yakunlash.", result: 'Bitim yopildi' },
        { tag: 'Soliq huquqi', title: "Noqonuniy undirilgan QQS — $1.2 mln qaytarildi", desc: "Soliq organi qarorini muvaffaqiyatli ixtilof qilish va yirik ishlab chiqarish korxonasi uchun noqonuniy undirilgan QQS va daromad solig'ini qaytarish.", result: '$1.2 mln qaytarildi' },
        { tag: 'Intellektual mulk', title: 'Brendni xalqaro plagiatdan himoyalash', desc: "Tovar belgisini ro'yxatga olish va O'zbekiston bozorida bir xil brenddan noqonuniy foydalangan xorijiy raqibga qarshi mijozning eksklyuziv huquqlarini himoyalash.", result: 'Brend himoyalandi' },
        { tag: 'Mehnat huquqi', title: '47 xodim bilan jamoaviy mehnat nizosi', desc: "Yirik kompaniyaning jamoaviy mehnat nizosida manfaatlarini ifodalash. Ish beruvchi manfaatlarini to'liq himoya qiluvchi shartlarda sulh kelishuvi tuzildi.", result: 'Sulh kelishuvi' }
      ]
    },
    lawyers: {
      sTag: 'Jamoa', sTitle: 'Bizning advokatlar va yuristlar', sDesc: "Har bir mutaxassis o'z huquq sohasida chuqur tajribaga ega", exp: 'tajriba', casesLbl: 'ish', more: 'Batafsil →',
      titleMap: {
        'Партнёр, Профессор': 'Sherik, Professor',
        'Управляющий партнёр': 'Boshqaruvchi sherik',
        'Партнёр, Корпоративный юрист': 'Sherik, Korporativ yurist',
        'Партнёр, Специалист по контрактам': 'Sherik, Shartnoma mutaxassisi',
        'Старший юрист': 'Katta yurist',
        'Юрист': 'Yurist',
        'Младший юрист': 'Kichik yurist'
      },
      specMap: {
        'Киберправо': 'Kiberhuquq', 'IT-право': 'IT-huquq', 'Цифровое право': 'Raqamli huquq',
        'Экономические споры': 'Iqtisodiy nizolar', 'Корпоративное право': 'Korporativ huquq', 'M&A': 'M&A',
        'Регистрация бизнеса': "Biznesni ro'yxatga olish", 'Стартапы': 'Startaplar',
        'Контрактное право': 'Shartnoma huquqi', 'Банковское право': 'Bank huquqi', 'ВЭД': 'Tashqi savdo',
        'Налоговое право': 'Soliq huquqi', 'Финансовое право': 'Moliya huquqi', 'Аудит': 'Audit',
        'Уголовное право': 'Jinoiy huquq', 'Защита бизнеса': 'Biznesni himoyalash', 'Экономические преступления': 'Iqtisodiy jinoyatlar',
        'Трудовое право': 'Mehnat huquqi', 'HR-консалтинг': 'HR-konsalting', 'Миграционное право': 'Migratsiya huquqi',
        'Финтех': 'Fintech', 'Платёжные системы': "To'lov tizimlari",
        'Интеллектуальная собственность': 'Intellektual mulk', 'Авторское право': 'Mualliflik huquqi', 'Товарные знаки': 'Tovar belgilari',
        'Таможенное право': 'Bojxona huquqi', 'Логистика': 'Logistika',
        'Недвижимость': "Ko'chmas mulk", 'Строительство': 'Qurilish', 'Девелопмент': 'Development',
        'Медиация': 'Mediatsiya', 'Переговоры': 'Muzokaralar', 'Разрешение споров': 'Nizolarni hal etish',
        'Семейное право': 'Oila huquqi', 'Наследство': 'Meros', 'Личные активы': 'Shaxsiy aktivlar',
        'Государственные закупки': 'Davlat xaridlari', 'Тендеры': 'Tenderlar', 'Госконтракты': 'Davlat shartnomalari',
        'Экологическое право': 'Ekologiya huquqi', 'Промышленная безопасность': 'Sanoat xavfsizligi', 'Комплаенс': 'Komplaens'
      }
    },
    news: { sTag: 'Yangiliklar', sTitle: 'Huquq va texnologiyalar', sDesc: 'Kiberxavfsizlik, IT-huquq va yuridik dunyo haqidagi dolzarb yangiliklar — 2025', read: "Ko'proq o'qish →" },
    contact: {
      sTag: 'Aloqa', sTitle: "Biz bilan bog'laning", sDesc: 'Birinchi konsultatsiya — bepul. Bir soat ichida javob beramiz.',
      addr: 'Manzil', phone: 'Telefon', email: 'Email', formTitle: 'Savol berish',
      ph: { name: 'Ismingiz', tel: 'Telefon raqamingiz', email: 'Email (ixtiyoriy)', svc: 'Xizmatni tanlang', msg: 'Vaziyatingizni yoki savolingizni qisqacha tavsiflang...' },
      submit: "So'rov yuborish →", success: "✓ So'rovingiz yuborildi! Tez orada siz bilan bog'lanamiz.",
      svcOptions: ['Korporativ huquq va M&A','IT va kiberhuquq','Soliq amaliyoti','Bank va moliya huquqi','Mehnat huquqi','Intellektual mulk','Bojxona huquqi','Biznesni jinoiy himoyalash','Iqtisodiy nizolar','Boshqa']
    },
    footer: {
      rights: '© 2025 GSP LAW — Gulyamov, Sadikov and Partners. Barcha huquqlar himoyalangan.',
      sTitle: 'Xizmatlar', cTitle: 'Aloqa',
      servicesList: ['Korporativ huquq','IT va kiberhuquq','Soliq amaliyoti','Bank huquqi','Mehnat huquqi','Intellektual mulk']
    },
    lp: {
      back: 'Jamoaga qaytish', bio: 'Biografiya', help: 'Qanday yordam bera olaman', services: 'Xizmatlar',
      consultTitle: 'Konsultatsiyaga yozilish', sendBtn: "So'rov yuborish",
      expLbl: 'Ish tajribasi', casesLbl: 'Yakunlangan ishlar', firm: 'Firma', office: 'Ofis',
      blogTag: 'Blog', blogDesc: 'Ekspert maqolalar va tahlil', info: "Ma'lumot",
      educationTitle: "Ta'lim", achievementsTitle: 'Yutuqlar va mukofotlar', publicationsTitle: 'Nashrlar',
      otherTag: 'Jamoa', otherTitle: 'Boshqa mutaxassislar', allTeam: 'Barcha jamoa →', readMore: "Ko'proq o'qish →",
      heroTag: 'GSP LAW mutaxassisi', visitWebsite: '🔗 Veb-sayt', notFound: 'Sahifa topilmadi'
    },
    casesPage: {
      heroTag: 'Bizning amaliyot', heroTitle: "G'alaba qozonilgan ishlar", heroDesc: 'Haqiqiy mijozlar uchun haqiqiy natijalar',
      challenge: 'Vazifa', approach: 'Bizning yondashuv', outcome: 'Natija',
      durationLabel: 'Davomiyligi', jurLabel: 'Yurisdiksiya', lawyerLabel: 'Advokat',
      filterAll: 'Barcha ishlar',
      backBtn: '← Bosh sahifaga'
    }
  },
  en: {
    nav: { about: 'About', services: 'Services', team: 'Team', consult: 'Consultation', news: 'News' },
    stats: ['years of experience', 'case portfolio', 'attorneys', 'clients'],
    hero: {
      tag: 'Law Firm in Tashkent',
      desc: 'A specialized team of experts in IT law, corporate law, and economic dispute resolution',
      btn1: 'Our Team', btn2: 'Get Consultation'
    },
    about: {
      sTag: 'About the Firm', sTitle: 'Professionalism. Trust. Results.',
      p1: 'GSP LAW is a specialized law firm providing comprehensive legal support for IT businesses, startups, and commercial organizations in Uzbekistan and abroad.',
      p2: 'Our team brings together experienced lawyers with deep expertise in cyber law, corporate law, tax and banking legislation.',
      li: ['High professionalism','Individual approach to every client','Efficiency and clarity','Complete confidentiality'],
      mTitle: 'Our Mission', mText: "We put our clients' interests first, ensuring maximum protection of rights and legitimate interests in any legal situation.",
      yearsLabel: 'years',
      teamTag: 'Key Partners', teamTitle: 'Founders & Partners'
    },
    metrics: {
      sTag: 'Performance', sTitle: 'Effectiveness in Numbers', sDesc: 'Results that speak for themselves',
      winRate: 'Win Rate', portfolioVal: 'Portfolio Value', combinedExp: 'Combined Experience',
      intlCases: 'International Cases', satisfaction: 'Client Satisfaction', industries: 'Practice Industries',
      clients: 'Clients Served', yearsOnMkt: 'Years on Market', languages: 'Practice Languages', support: 'Client Support'
    },
    services: {
      sTag: 'Practice Areas', sTitle: 'Areas of Law', sDesc: 'Comprehensive legal support for businesses across all key practice areas',
      items: [
        { title: 'Corporate Law & M&A', desc: 'M&A transaction support, corporate structuring, shareholder agreements' },
        { title: 'IT & Cyber Law', desc: 'Legal support for IT companies, startups, data protection and cybersecurity' },
        { title: 'Banking & Finance Law', desc: 'Regulatory matters, fintech, licensing, financial transactions' },
        { title: 'Tax Practice', desc: 'Tax planning, optimization, disputes with tax authorities' },
        { title: 'Economic Disputes', desc: 'Representation in arbitration courts, mediation, negotiations' },
        { title: 'Customs Law', desc: 'Foreign trade support, customs clearance, disputes with customs authorities' },
        { title: 'Criminal Business Defense', desc: 'Defense of entrepreneurs and executives in criminal cases' },
        { title: 'Labor Law', desc: 'Employment contracts, employee disputes, HR administration' },
        { title: 'Intellectual Property', desc: 'Trademark registration, patents, copyright protection' },
        { title: 'Ongoing Legal Service', desc: 'Comprehensive ongoing legal support for commercial organizations' },
        { title: 'Contract Law', desc: 'Contract drafting and review, negotiations, dispute resolution' },
        { title: 'Real Estate', desc: 'Real estate transactions, development projects, lease disputes' }
      ]
    },
    cases: {
      sTag: 'Cases', sTitle: 'Cases Won', sDesc: 'Real results we have achieved for our clients', result: 'Result', year: 'Year', lawyer: 'Attorney',
      allCasesBtn: 'All Cases →',
      items: [
        { tag: 'IT Law', title: 'Defending an IT Company in a $5.2M Dispute', desc: 'Successful defense of an Uzbek IT startup in a dispute with an international partner over a license agreement violation. Resolved through mediation without litigation.', result: 'Saved $5.2M' },
        { tag: 'Criminal Law', title: 'CEO Criminal Case Dismissed', desc: 'Defense of a manufacturing company CEO against tax evasion charges. Case closed at investigation stage due to absence of corpus delicti.', result: 'Case dismissed' },
        { tag: 'M&A', title: 'Supporting an $18M Merger Transaction', desc: 'Legal support for the acquisition of a telecom company with assets in three regions of Uzbekistan: due diligence, deal structuring, negotiations and closing.', result: 'Deal closed' },
        { tag: 'Tax Law', title: 'Recovery of Illegally Collected VAT — $1.2M', desc: 'Successful challenge of a tax authority decision and recovery of illegally collected VAT and income tax for a major manufacturing enterprise.', result: 'Recovered $1.2M' },
        { tag: 'Intellectual Property', title: 'Brand Protection Against International Plagiarism', desc: "Trademark registration and protection of the client's exclusive rights against a foreign competitor illegally using an identical brand in the Uzbekistan market.", result: 'Brand protected' },
        { tag: 'Labor Law', title: 'Collective Labor Dispute with 47 Employees', desc: "Representing a major company in a collective labor dispute. Settlement agreement reached on terms fully protecting the employer's interests.", result: 'Settlement reached' }
      ]
    },
    lawyers: {
      sTag: 'Team', sTitle: 'Our Attorneys & Lawyers', sDesc: 'Each specialist has deep expertise in their area of law and real-world experience', exp: 'experience', casesLbl: 'cases', more: 'View Profile →',
      titleMap: {
        'Партнёр, Профессор': 'Partner, Professor',
        'Управляющий партнёр': 'Managing Partner',
        'Партнёр, Корпоративный юрист': 'Partner, Corporate Lawyer',
        'Партнёр, Специалист по контрактам': 'Partner, Contract Specialist',
        'Старший юрист': 'Senior Lawyer',
        'Юрист': 'Lawyer',
        'Младший юрист': 'Junior Lawyer'
      },
      specMap: {
        'Киберправо': 'Cyber Law', 'IT-право': 'IT Law', 'Цифровое право': 'Digital Law',
        'Экономические споры': 'Economic Disputes', 'Корпоративное право': 'Corporate Law', 'M&A': 'M&A',
        'Регистрация бизнеса': 'Business Registration', 'Стартапы': 'Startups',
        'Контрактное право': 'Contract Law', 'Банковское право': 'Banking Law', 'ВЭД': 'Foreign Trade',
        'Налоговое право': 'Tax Law', 'Финансовое право': 'Financial Law', 'Аудит': 'Audit',
        'Уголовное право': 'Criminal Law', 'Защита бизнеса': 'Business Defense', 'Экономические преступления': 'Economic Crimes',
        'Трудовое право': 'Labor Law', 'HR-консалтинг': 'HR Consulting', 'Миграционное право': 'Immigration Law',
        'Финтех': 'Fintech', 'Платёжные системы': 'Payment Systems',
        'Интеллектуальная собственность': 'Intellectual Property', 'Авторское право': 'Copyright', 'Товарные знаки': 'Trademarks',
        'Таможенное право': 'Customs Law', 'Логистика': 'Logistics',
        'Недвижимость': 'Real Estate', 'Строительство': 'Construction', 'Девелопмент': 'Development',
        'Медиация': 'Mediation', 'Переговоры': 'Negotiations', 'Разрешение споров': 'Dispute Resolution',
        'Семейное право': 'Family Law', 'Наследство': 'Inheritance', 'Личные активы': 'Personal Assets',
        'Государственные закупки': 'Public Procurement', 'Тендеры': 'Tenders', 'Госконтракты': 'Government Contracts',
        'Экологическое право': 'Environmental Law', 'Промышленная безопасность': 'Industrial Safety', 'Комплаенс': 'Compliance'
      }
    },
    news: { sTag: 'News', sTitle: 'Law & Technology', sDesc: 'Latest news on cybersecurity, IT law, and the legal world — 2025', read: 'Read more →' },
    contact: {
      sTag: 'Contact', sTitle: 'Get In Touch', sDesc: "First consultation is free. We'll respond within one hour.",
      addr: 'Address', phone: 'Phone', email: 'Email', formTitle: 'Ask a Question',
      ph: { name: 'Your Name', tel: 'Phone Number', email: 'Email (optional)', svc: 'Select a service', msg: 'Briefly describe your situation or question...' },
      submit: 'Send Request →', success: '✓ Request sent! We will contact you shortly.',
      svcOptions: ['Corporate Law & M&A','IT & Cyber Law','Tax Practice','Banking & Finance Law','Labor Law','Intellectual Property','Customs Law','Criminal Business Defense','Economic Disputes','Other']
    },
    footer: {
      rights: '© 2025 GSP LAW — Gulyamov, Sadikov and Partners. All rights reserved.',
      sTitle: 'Services', cTitle: 'Contact',
      servicesList: ['Corporate Law','IT & Cyber Law','Tax Practice','Banking Law','Labor Law','Intellectual Property']
    },
    lp: {
      back: 'Back to Team', bio: 'Biography', help: 'How I Can Help', services: 'Services',
      consultTitle: 'Book a Consultation', sendBtn: 'Send Request',
      expLbl: 'Experience', casesLbl: 'Cases Completed', firm: 'Firm', office: 'Office',
      blogTag: 'Blog', blogDesc: 'Expert articles and analysis', info: 'Information',
      educationTitle: 'Education', achievementsTitle: 'Achievements & Awards', publicationsTitle: 'Publications',
      otherTag: 'Team', otherTitle: 'Other Specialists', allTeam: 'Full Team →', readMore: 'Read more →',
      heroTag: 'GSP LAW Specialist', visitWebsite: '🔗 Visit Website', notFound: 'Page Not Found'
    },
    casesPage: {
      heroTag: 'Our Practice', heroTitle: 'Cases Won', heroDesc: 'Real results for real clients',
      challenge: 'Challenge', approach: 'Our Approach', outcome: 'Outcome',
      durationLabel: 'Duration', jurLabel: 'Jurisdiction', lawyerLabel: 'Attorney',
      filterAll: 'All Cases',
      backBtn: '← Back to Home'
    }
  }
};
