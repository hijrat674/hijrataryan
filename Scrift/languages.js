(() => {
    "use strict";

    // Keep the English source alongside both translations so switching languages
    // never uses an already translated page as the source.
    const messages = [
        ["Hijratullah Aryan | Portfolio", "هجرت الله ارین | کاري بېلګې", "هجرت الله ارین | نمونه‌کارها"],
        ["Portfolio website of Hijratullah Aryan, Computer Science graduate, IT professional, and full-stack web developer.", "د هجرت الله ارین د کاري بېلګو وېبپاڼه؛ د کمپیوټر ساینس فارغ، د معلوماتي ټکنالوژۍ مسلکي کارکوونکی او د وېب د مخکینۍ او شاتنۍ برخې جوړوونکی.", "وب‌سایت نمونه‌کارهای هجرت الله ارین؛ فارغ‌التحصیل کمپیوتر ساینس، متخصص تکنالوژی معلوماتی و توسعه‌دهندهٔ بخش‌های کاربری و سرور وب."],
        ["Hijratullah Aryan", "هجرت الله ارین", "هجرت الله ارین"],
        ["Hijratullah Aryan home", "د هجرت الله ارین کورپاڼه", "صفحهٔ اصلی هجرت الله ارین"],
        ["Portfolio", "کاري بېلګې", "نمونه‌کارها"],
        ["Port", "کاري", "نمونه"],
        ["folio", "بېلګې", "کارها"],
        ["Main navigation", "اصلي غورنۍ", "فهرست اصلی"],
        ["Mobile navigation", "د موبایل غورنۍ", "فهرست موبایل"],
        ["Home", "کورپاڼه", "صفحهٔ اصلی"],
        ["About", "زما په اړه", "دربارهٔ من"],
        ["Skills", "مهارتونه", "مهارت‌ها"],
        ["Work", "کارونه", "کارها"],
        ["Projects", "پروژې", "پروژه‌ها"],
        ["Experience", "کاري تجربه", "تجربهٔ کاری"],
        ["Contact", "اړیکه", "تماس"],
        ["Career", "کاري مخینه", "پیشینهٔ کاری"],
        ["Career and experience", "کاري مخینه او تجربه", "پیشینه و تجربهٔ کاری"],
        ["Choose language", "ژبه وټاکئ", "زبان را انتخاب کنید"],
        ["Toggle color theme", "روښانه یا تیاره بڼه وټاکئ", "انتخاب نمای روشن یا تاریک"],
        ["Switch to light mode", "روښانه بڼه فعاله کړئ", "فعال‌کردن نمای روشن"],
        ["Switch to dark mode", "تیاره بڼه فعاله کړئ", "فعال‌کردن نمای تاریک"],
        ["Light", "روښانه", "روشن"],
        ["Dark", "تیاره", "تاریک"],
        ["2026 Edition", "د ۲۰۲۶ کال نسخه", "نسخهٔ ۲۰۲۶"],
        ["Computer Science Graduate / Developer / IT Professional", "د کمپیوټر ساینس فارغ / د سافټویر جوړوونکی / د معلوماتي ټکنالوژۍ مسلکي کارکوونکی", "فارغ‌التحصیل کمپیوتر ساینس / توسعه‌دهنده / متخصص تکنالوژی معلوماتی"],
        ["I build digital systems that are practical, reliable, and thoughtfully designed for teams, students, and organizations.", "زه د کاري ډلو، زده‌کوونکو او ادارو لپاره ګټور، باوري او په غور طرحه شوي ډیجیټلي سیسټمونه جوړوم.", "من برای تیم‌ها، دانشجویان و سازمان‌ها سیستم‌های دیجیتلی کاربردی، قابل اعتماد و سنجیده طراحی می‌کنم."],
        ["My work combines full-stack web development, IT support, networking, system administration, database management, and technical training.", "زما کار د وېب د مخکینۍ او شاتنۍ برخې جوړول، تخنیکي ملاتړ، شبکې، د سیسټمونو اداره، د ډېټابېسونو مدیریت او تخنیکي روزنه رانغاړي.", "کار من توسعهٔ بخش‌های کاربری و سرور وب، پشتیبانی تخنیکی، شبکه‌سازی، ادارهٔ سیستم‌ها، مدیریت دیتابیس و آموزش تخنیکی را در بر می‌گیرد."],
        ["Let's Work Together", "راځئ، ګډ کار وکړو", "بیایید با هم کار کنیم"],
        ["Download CV", "ژوندلیک ښکته کړئ", "دانلود خلص سوانح"],
        ["Open CV", "ژوندلیک وګورئ", "مشاهدهٔ خلص سوانح"],
        ["CV", "ژوندلیک", "خلص سوانح"],
        ["Portrait of Hijratullah Aryan", "د هجرت الله ارین انځور", "عکس هجرت الله ارین"],
        ["IT Professional / Full-Stack Developer", "د معلوماتي ټکنالوژۍ مسلکي کارکوونکی / د وېب د دواړو برخو جوړوونکی", "متخصص تکنالوژی معلوماتی / توسعه‌دهندهٔ بخش‌های کاربری و سرور وب"],
        ["He/Him", "ښاغلی", "آقا"],
        ["Kandahar, Afghanistan", "کندهار، افغانستان", "کندهار، افغانستان"],
        ["About me!", "زما په اړه!", "دربارهٔ من!"],
        ["I am a Bachelor of Computer Science graduate from Kandahar University with more than 3 years of experience across IT operations, networking, technical support, web development, and database management.", "زه د کندهار پوهنتون د کمپیوټر ساینس د لېسانس دورې فارغ یم او د معلوماتي ټکنالوژۍ د چارو، شبکو، تخنیکي ملاتړ، وېب جوړونې او ډېټابېس مدیریت په برخو کې تر درېیو کلونو زیاته تجربه لرم.", "من فارغ‌التحصیل دورهٔ لیسانس کمپیوتر ساینس از پوهنتون کندهار هستم و بیش از سه سال تجربه در امور تکنالوژی معلوماتی، شبکه‌سازی، پشتیبانی تخنیکی، توسعهٔ وب و مدیریت دیتابیس دارم."],
        ["I enjoy turning real needs into useful systems, whether that means maintaining infrastructure, supporting staff, building responsive web applications, or organizing clean digital records.", "زه خوښوم چې رښتینې اړتیاوې په ګټورو سیسټمونو بدلې کړم؛ که هغه د تخنیکي بنسټونو ساتنه وي، د کارکوونکو ملاتړ، له بېلابېلو پردو سره برابرې وېبپاڼې جوړول وي او که د ډیجیټلي اسنادو منظمول.", "علاقه دارم نیازهای واقعی را به سیستم‌های کاربردی تبدیل کنم؛ از نگهداری زیربناهای تخنیکی و پشتیبانی کارمندان گرفته تا ساخت برنامه‌های وب سازگار با اندازه‌های مختلف صفحه و تنظیم اسناد دیجیتلی."],
        ["Hijratullah Aryan working on a laptop", "هجرت الله ارین پر لپټاپ کار کوي", "هجرت الله ارین در حال کار با لپ‌تاپ"],
        ["Code. Support. Improve.", "کوډ لیکنه. ملاتړ. ښه‌والی.", "کدنویسی. پشتیبانی. بهبود."],
        ["What I Do", "زه څه کوم؟", "چه کار می‌کنم؟"],
        ["I work across development, infrastructure, reporting, and training, with a practical focus on helping teams use technology better.", "زه د سافټویر جوړونې، تخنیکي بنسټونو، راپور جوړونې او روزنې په برخو کې کار کوم، څو له کاري ډلو سره د ټکنالوژۍ په غوره کارولو کې مرسته وکړم.", "در بخش‌های توسعهٔ نرم‌افزار، زیربناهای تخنیکی، گزارش‌دهی و آموزش کار می‌کنم تا به تیم‌ها در استفادهٔ بهتر از تکنالوژی کمک کنم."],
        ["Web development", "وېب جوړونه", "توسعهٔ وب"],
        ["Web Development", "وېب جوړونه", "توسعهٔ وب"],
        ["Building responsive websites and web systems with Laravel, PHP, HTML, CSS, JavaScript, and MySQL.", "د Laravel، PHP، HTML، CSS، JavaScript او MySQL په کارولو له بېلابېلو پردو سره برابرې وېبپاڼې او وېب سیسټمونه جوړول.", "ساخت وب‌سایت‌ها و سیستم‌های وب سازگار با اندازه‌های مختلف صفحه با Laravel، PHP، HTML، CSS، JavaScript و MySQL."],
        ["Modern web stacks", "د وېب جوړونې عصري ټکنالوژۍ", "تکنالوژی‌های مدرن وب"],
        ["IT support", "تخنیکي ملاتړ", "پشتیبانی تخنیکی"],
        ["IT Support", "تخنیکي ملاتړ", "پشتیبانی تخنیکی"],
        ["Managing devices, solving technical issues, maintaining software, and supporting day-to-day computer operations.", "د وسایلو مدیریت، د تخنیکي ستونزو حل، د سافټویرونو ساتنه او د کمپیوټر د ورځنیو چارو ملاتړ.", "مدیریت دستگاه‌ها، حل مشکلات تخنیکی، نگهداری نرم‌افزارها و پشتیبانی امور روزمرهٔ کمپیوتر."],
        ["Reliable systems support", "د سیسټمونو باوري ملاتړ", "پشتیبانی قابل اعتماد سیستم‌ها"],
        ["Database management", "د ډېټابېس مدیریت", "مدیریت دیتابیس"],
        ["Database Management", "د ډېټابېس مدیریت", "مدیریت دیتابیس"],
        ["Handling MySQL, SQL, Microsoft Access, reports, backups, and structured digital record systems.", "د MySQL، SQL، Microsoft Access، راپورونو، شاتړ کاپیو او د منظمو ډیجیټلي اسنادو د سیسټمونو سمبالول.", "کار با MySQL، SQL، Microsoft Access، گزارش‌ها، نسخه‌های پشتیبان و سیستم‌های منظم ثبت اسناد دیجیتلی."],
        ["Clean data and reporting", "کره معلومات او راپور جوړونه", "معلومات منظم و گزارش‌دهی"],
        ["Training and coordination", "روزنه او همغږي", "آموزش و هماهنگی"],
        ["Training & Coordination", "روزنه او همغږي", "آموزش و هماهنگی"],
        ["Teaching computer and English skills, guiding users, and improving team confidence with technology.", "د کمپیوټر او انګلیسي مهارتونو ښوونه، کاروونکو ته لارښوونه او د ټکنالوژۍ په کارولو کې د کاري ډلو د باور پیاوړي کول.", "آموزش مهارت‌های کمپیوتر و انگلیسی، راهنمایی کاربران و تقویت اعتماد تیم‌ها در استفاده از تکنالوژی."],
        ["People-focused delivery", "د خلکو اړتیاوو ته پاملرنه", "خدمات با محوریت نیازهای کاربران"],
        ["Selected Work", "غوره شوي کارونه", "کارهای منتخب"],
        ["A few areas where I have delivered practical value through IT management, web development, administration, and support.", "هغه برخې چې ما پکې د معلوماتي ټکنالوژۍ د مدیریت، وېب جوړونې، اداري چارو او تخنیکي ملاتړ له لارې ګټور کارونه ترسره کړي دي.", "چند حوزه که در آن‌ها از طریق مدیریت تکنالوژی معلوماتی، توسعهٔ وب، امور اداری و پشتیبانی خدمات کاربردی ارائه کرده‌ام."],
        ["ALAO Systems", "د ALAO سیسټمونه", "سیستم‌های ALAO"],
        ["IT & Network Management", "د معلوماتي ټکنالوژۍ او شبکو مدیریت", "مدیریت تکنالوژی معلوماتی و شبکه"],
        ["Managed infrastructure, databases, reporting, staff support, and network operations for the organization.", "د ادارې تخنیکي بنسټونه، ډېټابېسونه، راپور جوړونه، د کارکوونکو ملاتړ او د شبکې چارې مې سمبال کړې دي.", "زیربناهای تخنیکی، دیتابیس‌ها، گزارش‌دهی، پشتیبانی کارمندان و امور شبکهٔ سازمان را مدیریت کرده‌ام."],
        ["View Experience", "کاري تجربه وګورئ", "مشاهدهٔ تجربهٔ کاری"],
        ["Hospital IT Desk", "د روغتون د ټکنالوژۍ څانګه", "بخش تکنالوژی معلوماتی شفاخانه"],
        ["System Support", "د سیسټمونو ملاتړ", "پشتیبانی سیستم‌ها"],
        ["Maintained hospital systems, electronic records, administrative workflows, and front-desk support processes.", "د روغتون د سیسټمونو، برېښنايي اسنادو، اداري چارو او د مراجعینو د خدمتونو د بهیر ساتنه او ملاتړ مې کړی دی.", "سیستم‌های شفاخانه، اسناد الکترونیکی، روندهای اداری و خدمات پذیرش را نگهداری و پشتیبانی کرده‌ام."],
        ["Web Solutions", "د وېب حللارې", "راهکارهای وب"],
        ["Development", "د سافټویر جوړونه", "توسعهٔ نرم‌افزار"],
        ["Built and studied full-stack web solutions using Laravel, PHP, JavaScript, Bootstrap, SQL, and REST APIs.", "د Laravel، PHP، JavaScript، Bootstrap، SQL او REST APIs په کارولو مې د وېب د مخکینۍ او شاتنۍ برخې حللارې جوړې کړې او څېړلې دي.", "با استفاده از Laravel، PHP، JavaScript، Bootstrap، SQL و REST APIs راهکارهای بخش‌های کاربری و سرور وب را ساخته و بررسی کرده‌ام."],
        ["View Skills", "مهارتونه وګورئ", "مشاهدهٔ مهارت‌ها"],
        ["Training & Operations", "روزنه او اجرایي چارې", "آموزش و امور اجرایی"],
        ["Teaching / Admin", "ښوونه / اداري چارې", "آموزش / امور اداری"],
        ["Supported learners and staff with computer training, English instruction, records, and digital workflows.", "له زده‌کوونکو او کارکوونکو سره مې د کمپیوټر روزنې، انګلیسي ښوونې، اسنادو تنظیم او ډیجیټلي چارو په برخو کې مرسته کړې ده.", "از دانشجویان و کارمندان در بخش‌های آموزش کمپیوتر و انگلیسی، تنظیم اسناد و روندهای کاری دیجیتلی پشتیبانی کرده‌ام."],
        ["Work Together", "ګډ کار وکړو", "همکاری کنیم"],
        ["From idea to experience", "له مفکورې تر عملي تجربې", "از ایده تا تجربه"],
        ["Completed Projects", "بشپړې شوې پروژې", "پروژه‌های تکمیل‌شده"],
        ["Websites, business systems, desktop applications, and data projects. Explore the collection by category.", "وېبپاڼې، سوداګریز سیسټمونه، ډیسکتاپ پروګرامونه او د معلوماتو پروژې. پروژې د کټګوریو له مخې وګورئ.", "وب‌سایت‌ها، سیستم‌های تجارتی، برنامه‌های دسکتاپ و پروژه‌های معلومات. مجموعه را بر اساس دسته‌بندی مرور کنید."],
        ["Filter projects", "پروژې د کټګورۍ له مخې چاڼ کړئ", "فیلتر پروژه‌ها بر اساس دسته‌بندی"],
        ["All projects", "ټولې پروژې", "همهٔ پروژه‌ها"],
        ["Web", "وېب", "وب"],
        ["Desktop", "ډیسکتاپ", "دسکتاپ"],
        ["Data & Python", "معلومات او Python", "معلومات و Python"],
        ["Completed", "بشپړه شوې", "تکمیل‌شده"],
        ["Personal website", "شخصي وېبپاڼه", "وب‌سایت شخصی"],
        ["My corner of the web.", "په وېب کې زما ځای.", "گوشهٔ من در وب."],
        ["A personal portfolio bringing my experience, skills, and work together in one place. Built with frosted glass surfaces, light and dark themes, and a layout that adapts to phones.", "یوه شخصي وېبپاڼه چې زما تجربه، مهارتونه او کارونه په یوه ځای کې راټولوي. د نیمه رڼو ښیښه‌یي برخو، روښانه او تیاره بڼو او له موبایل سره د برابرې طرحې په کارولو جوړه شوې ده.", "وب‌سایتی شخصی که تجربه، مهارت‌ها و کارهایم را در یک‌جا گرد آورده است؛ با بخش‌های شیشه‌ای مات، نمای روشن و تاریک و چیدمان سازگار با موبایل."],
        ["Responsive layouts for desktop and mobile", "له کمپیوټر او موبایل سره برابرې طرحې", "چیدمان سازگار با کمپیوتر و موبایل"],
        ["Light and dark theme switcher", "د روښانه او تیاره بڼې بدلول", "امکان تغییر نمای روشن و تاریک"],
        ["Smooth section navigation and reveal animations", "د برخو ترمنځ اسانه تګ او د راڅرګندېدو خوځښتونه", "جابه‌جایی روان میان بخش‌ها و پویانمایی هنگام نمایش"],
        ["Technologies used", "کارول شوې ټکنالوژۍ", "تکنالوژی‌های استفاده‌شده"],
        ["Explore portfolio", "کاري بېلګې وګورئ", "مشاهدهٔ نمونه‌کارها"],
        ["Design illustration", "د طرحې انځور", "تصویر طرح"],
        ["Illustrated preview", "انځوریزه کتنه", "پیش‌نمایش تصویری"],
        ["Project details", "د پروژې جزئیات", "جزئیات پروژه"],
        ["Clinic DBMS", "د کلینیک د معلوماتو مدیریت سیسټم", "سیستم مدیریت دیتابیس کلینیک"],
        ["A clinic management application for patient registration, billing, pharmacy sales, doctors, reports, and database backups.", "د کلینیک د مدیریت پروګرام؛ د ناروغانو ثبت، د بلونو جوړول، د درملتون پلور، د ډاکټرانو معلومات، راپورونه او د ډېټابېس شاتړ کاپۍ پکې سمبالېږي.", "برنامهٔ مدیریت کلینیک برای ثبت مریضان، صدور بل، فروش دواخانه، معلومات داکتران، گزارش‌ها و نسخه‌های پشتیبان دیتابیس."],
        ["Patient cards, printable bills, service management, and authenticated staff access.", "د ناروغانو کارتونه، د چاپ وړ بلونه، د خدمتونو مدیریت او د کارکوونکو لپاره د هویت له تایید سره لاسرسی.", "کارت مریضان، بل‌های قابل چاپ، مدیریت خدمات و دسترسی کارمندان با تأیید هویت."],
        ["Cotton Management System", "د پنبې د چارو مدیریت سیسټم", "سیستم مدیریت پنبه"],
        ["A business application connecting cotton intake, production, inventory, sales, and accounting.", "یو سوداګریز پروګرام چې د پنبې ترلاسه کول، تولید، د زېرمې مدیریت، پلور او حسابداري سره نښلوي.", "برنامه‌ای تجارتی که دریافت پنبه، تولید، موجودی، فروش و حسابداری را به هم وصل می‌کند."],
        ["Role-based dashboards for administrators, managers, production, and sales teams.", "د سیسټم چلوونکو، مدیرانو او د تولید او پلور د ډلو لپاره د دندو له مخې ځانګړي مدیریتي مخونه.", "صفحه‌های مدیریتی بر اساس نقش برای مسئولان سیستم، مدیران و تیم‌های تولید و فروش."],
        ["Parking Website", "د موټر تمځای وېبپاڼه", "وب‌سایت پارکینگ"],
        ["A multi-page parking website presenting services, location information, and a contact experience.", "د موټر تمځای څوپاڼیزه وېبپاڼه چې خدمتونه، د ځای معلومات او د اړیکې اسانتیاوې وړاندې کوي.", "وب‌سایتی چندصفحه‌ای برای پارکینگ که خدمات، معلومات موقعیت و راه‌های تماس را ارائه می‌کند."],
        ["Includes dedicated about, services, location, and contact pages.", "د پېژندنې، خدمتونو، ځای او اړیکې لپاره جلا پاڼې لري.", "شامل صفحه‌های جداگانهٔ معرفی، خدمات، موقعیت و تماس است."],
        ["Petrol Station Website", "د تېلو پمپ وېبپاڼه", "وب‌سایت پمپ تیل"],
        ["A petrol station website with service information, location pages, contact forms, and login screens.", "د تېلو پمپ وېبپاڼه چې د خدمتونو معلومات، د ځای پاڼې، د اړیکې فورمې او حساب ته د ننوتلو مخونه لري.", "وب‌سایت پمپ تیل با معلومات خدمات، صفحه‌های موقعیت، فورم‌های تماس و صفحه‌های ورود."],
        ["Groups the related petrol station versions into one project.", "د تېلو پمپ اړوندې بېلابېلې نسخې په یوه پروژه کې راټولوي.", "نسخه‌های مرتبط وب‌سایت پمپ تیل را در یک پروژه گرد می‌آورد."],
        ["Education & Courses Website", "د زده‌کړو او کورسونو وېبپاڼه", "وب‌سایت آموزش و کورس‌ها"],
        ["A Pashto-language educational website presenting courses, student feedback, and contact information.", "یوه پښتو تعلیمي وېبپاڼه چې کورسونه، د زده‌کوونکو نظرونه او د اړیکې معلومات وړاندې کوي.", "وب‌سایتی آموزشی به زبان پشتو که کورس‌ها، نظرهای دانشجویان و معلومات تماس را ارائه می‌کند."],
        ["Separate home, courses, about, student, and contact pages.", "د کورپاڼې، کورسونو، پېژندنې، زده‌کوونکو او اړیکې لپاره جلا پاڼې.", "صفحه‌های جداگانهٔ اصلی، کورس‌ها، معرفی، دانشجویان و تماس."],
        ["Ehsas Literature Website", "د احساس ادبي وېبپاڼه", "وب‌سایت ادبی احساس"],
        ["A literature website bringing together books, poets, biographies, genres, and events.", "یوه ادبي وېبپاڼه چې کتابونه، شاعران، ژوندلیکونه، ادبي ډولونه او غونډې په یوه ځای کې راټولوي.", "وب‌سایتی ادبی که کتاب‌ها، شاعران، زندگی‌نامه‌ها، گونه‌های ادبی و رویدادها را گرد می‌آورد."],
        ["A collection of linked pages dedicated to literary content.", "د یو بل سره تړلو پاڼو ټولګه چې ادبي منځپانګې ته ځانګړې شوې ده.", "مجموعه‌ای از صفحه‌های مرتبط ویژهٔ محتوای ادبی."],
        ["Pashto Portfolio Website", "د کاري بېلګو پښتو وېبپاڼه", "وب‌سایت نمونه‌کارها به زبان پشتو"],
        ["An earlier portfolio website presenting personal information and work in Pashto.", "د کاري بېلګو یوه پخوانۍ وېبپاڼه چې شخصي معلومات او کارونه په پښتو وړاندې کوي.", "نسخهٔ پیشین وب‌سایت نمونه‌کارها که معلومات شخصی و کارها را به زبان پشتو معرفی می‌کند."],
        ["A separate language-focused portfolio design with section navigation.", "په ځانګړې ژبه د کاري بېلګو طرحه چې د برخو ترمنځ د تګ اسانتیا لري.", "طرح جداگانهٔ نمونه‌کارها با تمرکز بر زبان و امکان جابه‌جایی میان بخش‌ها."],
        ["Desktop applications", "ډیسکتاپ پروګرامونه", "برنامه‌های دسکتاپ"],
        ["Hotel Room Booking", "د هوټل د خونو رزرف", "رزرو اتاق هوتل"],
        ["A Java desktop application for browsing room information and managing room availability and bookings.", "په Java جوړ شوی ډیسکتاپ پروګرام چې د خونو معلومات ښيي او د خالي خونو او رزرفونو چارې سمبالوي.", "برنامهٔ دسکتاپ Java برای مشاهدهٔ معلومات اتاق‌ها و مدیریت اتاق‌های خالی و رزروها."],
        ["Room models track room numbers, types, prices, and availability in memory.", "د خونو ماډلونه د خونو شمېرې، ډولونه، بیې او د خالي‌والي حالت په حافظه کې ساتي.", "مدل‌های اتاق، شماره‌ها، نوع‌ها، قیمت‌ها و وضعیت خالی‌بودن اتاق‌ها را در حافظه نگهداری می‌کنند."],
        ["Student Attendance System", "د زده‌کوونکو د حاضرۍ سیسټم", "سیستم حاضری دانشجویان"],
        ["A desktop interface for recording student attendance with student IDs, dates, and attendance status.", "یو ډیسکتاپ پروګرام چې د زده‌کوونکو حاضري د پېژندشمېرو، نېټو او د حاضرۍ د حالت له مخې ثبتوي.", "رابط دسکتاپ برای ثبت حاضری دانشجویان همراه با شمارهٔ شناسایی، تاریخ و وضعیت حاضری."],
        ["Displays attendance records in a table with an in-memory record collection.", "په حافظه کې ساتل شوي د حاضرۍ ریکارډونه په جدول کې ښيي.", "سوابق حاضری ذخیره‌شده در حافظه را در یک جدول نمایش می‌دهد."],
        ["Examination System", "د ازموینو سیسټم", "سیستم امتحانات"],
        ["A Java desktop examination application with questions, answer choices, and result tracking.", "په Java جوړ شوی د ازموینو ډیسکتاپ پروګرام چې پوښتنې، د ځواب انتخابونه او د پایلو ثبت لري.", "برنامهٔ دسکتاپ امتحان با Java که پرسش‌ها، گزینه‌های پاسخ و پیگیری نتایج را فراهم می‌کند."],
        ["Uses question models and a results collection to manage the exam flow.", "د ازموینې د بهیر سمبالولو لپاره د پوښتنو ماډلونه او د پایلو ټولګه کاروي.", "برای مدیریت روند امتحان از مدل‌های پرسش و مجموعهٔ نتایج استفاده می‌کند."],
        ["Advanced Unit Converter", "د واحدونو پرمختللی بدلوونکی", "تبدیل‌کنندهٔ پیشرفتهٔ واحدها"],
        ["A desktop conversion tool with category selection, source and destination units, and result fields.", "د واحدونو د بدلولو ډیسکتاپ وسیله چې د کټګورۍ ټاکنه، لومړنی او وروستی واحد او د پایلې برخې لري.", "ابزار دسکتاپ تبدیل واحد با انتخاب دسته‌بندی، واحدهای مبدأ و مقصد و بخش نمایش نتیجه."],
        ["Includes conversion and clear controls in a structured desktop interface.", "په یوه منظم ډیسکتاپ مخ کې د بدلولو او پاکولو تڼۍ لري.", "در یک رابط منظم دسکتاپ، دکمه‌های تبدیل و پاک‌کردن را فراهم می‌کند."],
        ["Analog & Digital Clock", "عقربه‌یي او ډیجیټلي ساعت", "ساعت عقربه‌ای و دیجیتلی"],
        ["A custom-drawn analog clock paired with a digital time display and date.", "په ځانګړې طرحه جوړ شوی عقربه‌یي ساعت چې وخت او نېټه په ډیجیټلي بڼه هم ښيي.", "ساعت عقربه‌ای با طراحی اختصاصی، همراه با نمایش دیجیتلی زمان و تاریخ."],
        ["Combines a painted clock face with a continuously updated time display.", "د ساعت رسم شوې څېره له پرله‌پسې تازه کېدونکي وخت سره یوځای کوي.", "صفحهٔ ترسیم‌شدهٔ ساعت را با نمایش زمان که پیوسته تازه می‌شود ترکیب می‌کند."],
        ["Number Guessing Game", "د شمېرې د اټکل لوبه", "بازی حدس عدد"],
        ["An interactive desktop number guessing game with feedback, attempt tracking, and a restart control.", "د شمېرې د اټکل ډیسکتاپ لوبه چې لوبغاړي ته لارښوونه کوي، هڅې شمېري او د بیا پیل تڼۍ لري.", "بازی تعاملی حدس عدد برای دسکتاپ، همراه با راهنمایی، شمارش تلاش‌ها و دکمهٔ شروع دوباره."],
        ["Uses a randomly generated target number and a dedicated guessing interface.", "یوه په تصادفي ډول ټاکل شوې شمېره او د اټکل لپاره ځانګړی مخ کاروي.", "از عدد هدف تصادفی و رابط اختصاصی برای حدس‌زدن استفاده می‌کند."],
        ["Weekly Temperature Analysis", "د اوونۍ د تودوخې شننه", "تحلیل درجهٔ حرارت هفتگی"],
        ["An interactive analysis of sample weekly temperatures with charts, summary statistics, and correlations.", "د اوونۍ د تودوخې د بېلګه‌ییزو معلوماتو شننه چې ګرافونه، لنډې احصایې او د معلوماتو ترمنځ اړیکې ښيي.", "تحلیل تعاملی معلومات نمونهٔ درجهٔ حرارت هفتگی، همراه با نمودارها، آمار خلاصه و همبستگی‌ها."],
        ["Includes a one-sample statistical test using SciPy and correlation visualizations.", "د SciPy په کارولو د یوې نمونې احصایوي ازموینه او د معلوماتو د اړیکو انځوریزې بڼې لري.", "شامل آزمون آماری تک‌نمونه‌ای با SciPy و نمودارهای همبستگی است."],
        ["Hospital Data ETL", "د روغتون د معلوماتو ETL", "فرایند ETL معلومات شفاخانه"],
        ["A Python pipeline that extracts patient records from MySQL and applies data cleaning with audit logging.", "په Python جوړ شوی بهیر چې د ناروغانو ریکارډونه له MySQL څخه راوباسي، معلومات پاکوي او د ترسره شویو چارو ثبت ساتي.", "فرایندی با Python که سوابق مریضان را از MySQL استخراج و معلومات را همراه با ثبت گزارش بررسی، پاک‌سازی می‌کند."],
        ["An educational ETL implementation with extraction and cleaning stages.", "د ETL یوه ښوونیزه بېلګه چې د معلوماتو د راایستلو او پاکولو پړاوونه لري.", "نمونهٔ آموزشی ETL با مرحله‌های استخراج و پاک‌سازی معلومات."],
        ["Sales & Inventory Data Pipeline", "د پلور او زېرمې د معلوماتو بهیر", "فرایند معلومات فروش و موجودی"],
        ["A Python data project generating sample sales and inventory records for a PostgreSQL warehouse.", "د Python د معلوماتو پروژه چې د PostgreSQL د معلوماتو د زېرمتون لپاره د پلور او زېرمې بېلګه‌ییز ریکارډونه جوړوي.", "پروژهٔ معلومات با Python که سوابق نمونهٔ فروش و موجودی را برای انبار معلومات PostgreSQL تولید می‌کند."],
        ["Uses generated demonstration data and pandas for the warehouse workflow.", "د معلوماتو د زېرمتون د چارو لپاره جوړ شوي بېلګه‌ییز معلومات او pandas کاروي.", "برای روند کار انبار معلومات از معلومات نمایشی تولیدشده و pandas استفاده می‌کند."],
        ["Text Transformation Demo", "د متن بدلولو ښوونیزه بېلګه", "نمونهٔ آموزشی تبدیل متن"],
        ["A Tkinter learning application exploring text transformation with salt insertion and removal.", "په Tkinter جوړ شوی ښوونیز پروګرام چې په متن کې د اضافي تورو (salt) په ورزیاتولو او لرې کولو د متن بدلون ازمويي.", "برنامهٔ آموزشی Tkinter برای بررسی تبدیل متن با افزودن و حذف نویسه‌های اضافی (salt)."],
        ["An educational text-processing interface.", "د متن د پروسس یو ښوونیز مخ.", "رابط آموزشی پردازش متن."],
        ["ETL Subsystems Learning Toolkit", "د ETL د فرعي سیسټمونو د زده‌کړې ټولګه", "مجموعهٔ آموزشی زیرسیستم‌های ETL"],
        ["A Python learning package exploring simplified implementations of Kimball’s 34 ETL subsystems.", "د Python یوه ښوونیزه ټولګه چې د کیمبال د ETL د ۳۴ فرعي سیسټمونو ساده شوې بېلګې څېړي.", "بستهٔ آموزشی Python برای بررسی پیاده‌سازی‌های ساده‌شدهٔ ۳۴ زیرسیستم ETL کیمبال."],
        ["Includes modules for extraction, cleansing, deduplication, dimensions, auditing, and sample flows.", "د معلوماتو د راایستلو، پاکولو، تکرار لرې کولو، ابعادو، پلټنې او بېلګه‌ییزو بهیرونو برخې لري.", "شامل بخش‌هایی برای استخراج، پاک‌سازی، حذف موارد تکراری، ابعاد، بررسی و جریان‌های نمونه است."],
        ["2025 - Present", "۲۰۲۵ - تر اوسه", "۲۰۲۵ - تاکنون"],
        ["2024 - 2026", "۲۰۲۴ - ۲۰۲۶", "۲۰۲۴ - ۲۰۲۶"],
        ["2023 - 2025", "۲۰۲۳ - ۲۰۲۵", "۲۰۲۳ - ۲۰۲۵"],
        ["2023 - 2026", "۲۰۲۳ - ۲۰۲۶", "۲۰۲۳ - ۲۰۲۶"],
        ["2018 - 2020", "۲۰۱۸ - ۲۰۲۰", "۲۰۱۸ - ۲۰۲۰"],
        ["2025", "۲۰۲۵", "۲۰۲۵"],
        ["Sial Curative Hospital", "سیال معالجوي روغتون", "شفاخانهٔ معالجوی سیال"],
        ["IT Manager / Receptionist", "د معلوماتي ټکنالوژۍ مدیر / د مراجعینو د خدمتونو مسئول", "مدیر تکنالوژی معلوماتی / مسئول پذیرش"],
        ["Darya Sabz Agricultural Services", "د دریا سبز کرنیز خدمتونه", "خدمات زراعتی دریا سبز"],
        ["Sales Officer / IT", "د پلور مسئول / د معلوماتي ټکنالوژۍ چارې", "مسئول فروش / تکنالوژی معلوماتی"],
        ["Afghan Learning Aid Organization", "د افغان زده‌کړو د مرستې اداره", "سازمان کمک به آموزش افغان"],
        ["IT & Network Manager", "د معلوماتي ټکنالوژۍ او شبکو مدیر", "مدیر تکنالوژی معلوماتی و شبکه"],
        ["Education", "زده‌کړې", "تحصیلات"],
        ["Kandahar University", "کندهار پوهنتون", "پوهنتون کندهار"],
        ["Bachelor of Computer Science", "د کمپیوټر ساینس لېسانس", "لیسانس کمپیوتر ساینس"],
        ["English & Computer Programs", "د انګلیسي او کمپیوټر کورسونه", "کورس‌های انگلیسی و کمپیوتر"],
        ["Language, office tools, and design training", "د ژبې، دفتري پروګرامونو او ډیزاین روزنه", "آموزش زبان، برنامه‌های اداری و طراحی"],
        ["Freelancing & Online Business", "خپلواک کار او انلاین سوداګري", "کار آزاد و تجارت آنلاین"],
        ["YHDO three-month course", "د YHDO درې میاشتنی کورس", "کورس سه‌ماههٔ YHDO"],
        ["Technical Skills", "تخنیکي مهارتونه", "مهارت‌های تخنیکی"],
        ["Networking", "د شبکو چارې", "شبکه‌سازی"],
        ["Languages", "ژبې", "زبان‌ها"],
        ["Pashto", "پښتو", "پشتو"],
        ["Dari", "دري", "دری"],
        ["English", "انګلیسي", "انگلیسی"],
        ["Have a project in mind?", "د کومې پروژې فکر لرئ؟", "پروژه‌ای در ذهن دارید؟"],
        ["Let's build something useful together.", "راځئ، په ګډه یو ګټور کار وکړو.", "بیایید با هم چیزی کاربردی بسازیم."],
        ["I am open to opportunities in IT support, web development, administration, training, and database work.", "زه د تخنیکي ملاتړ، وېب جوړونې، اداري چارو، روزنې او ډېټابېس په برخو کې کاري فرصتونو ته چمتو یم.", "آمادهٔ همکاری در بخش‌های پشتیبانی تخنیکی، توسعهٔ وب، امور اداری، آموزش و دیتابیس هستم."],
        ["Contact directly", "مستقیمه اړیکه", "تماس مستقیم"],
        ["Start a Conversation", "خبرې پیل کړئ", "گفت‌وگو را آغاز کنید"],
        ["Email", "برېښنالیک", "ایمیل"],
        ["Call", "زنګ ووهئ", "تماس تلفنی"],
        ["Illustrated preview of this portfolio’s blue typography and glass panels", "د دې کاري بېلګو د وېبپاڼې د آبي لیکنو او ښیښه‌یي برخو انځوریزه کتنه", "پیش‌نمایش تصویری نوشته‌های آبی و بخش‌های شیشه‌ای این وب‌سایت نمونه‌کارها"],
        ["Illustrated clinic dashboard with patient services, billing, and pharmacy panels", "د کلینیک د مدیریتي مخ انځور؛ د ناروغانو خدمتونه، د بلونو جوړول او د درملتون برخې", "تصویر صفحهٔ مدیریتی کلینیک با بخش‌های خدمات مریضان، صدور بل و دواخانه"],
        ["Illustrated cotton management dashboard with intake, production, inventory, and sales information", "د پنبې د مدیریتي مخ انځور؛ د ترلاسه کولو، تولید، زېرمې او پلور معلومات", "تصویر صفحهٔ مدیریت پنبه با معلومات دریافت، تولید، موجودی و فروش"],
        ["Illustrated parking website showing available spaces, parking levels, and booking information", "د موټر تمځای د وېبپاڼې انځور؛ خالي ځایونه، پوړونه او د رزرف معلومات", "تصویر وب‌سایت پارکینگ با جای‌های خالی، طبقه‌ها و معلومات رزرو"],
        ["Illustrated petrol station website with fuel services, station status, and service cards", "د تېلو پمپ د وېبپاڼې انځور؛ د تېلو خدمتونه، د پمپ حالت او د خدمتونو کارتونه", "تصویر وب‌سایت پمپ تیل با خدمات سوخت، وضعیت پمپ و کارت‌های خدمات"],
        ["Illustrated education website with course catalog, learning progress, and student information", "د تعلیمي وېبپاڼې انځور؛ د کورسونو لړلیک، د زده‌کړې پرمختګ او د زده‌کوونکو معلومات", "تصویر وب‌سایت آموزشی با فهرست کورس‌ها، پیشرفت یادگیری و معلومات دانشجویان"],
        ["Illustrated literature website with books, poets, genres, and reading activity", "د ادبي وېبپاڼې انځور؛ کتابونه، شاعران، ادبي ډولونه او د لوستنې فعالیت", "تصویر وب‌سایت ادبی با کتاب‌ها، شاعران، گونه‌های ادبی و فعالیت مطالعه"],
        ["Illustrated preview of a Pashto portfolio with introduction and profile layout", "د پښتو کاري بېلګو انځوریزه کتنه؛ د پېژندنې او شخصي معلوماتو طرحه", "پیش‌نمایش تصویری نمونه‌کارهای پشتو با چیدمان معرفی و مشخصات فردی"],
        ["Hotel booking illustration with room listings and availability", "د هوټل د رزرف انځور؛ د خونو لړلیک او د خالي‌والي حالت", "تصویر رزرو هوتل با فهرست اتاق‌ها و وضعیت خالی‌بودن آن‌ها"],
        ["Attendance interface illustration with a student record table", "د حاضرۍ د مخ انځور د زده‌کوونکو د ریکارډونو له جدول سره", "تصویر رابط حاضری با جدول سوابق دانشجویان"],
        ["Examination interface illustration with multiple choice questions", "د ازموینې د مخ انځور له څوځوابه پوښتنو سره", "تصویر رابط امتحان با پرسش‌های چندگزینه‌ای"],
        ["Unit conversion illustration with source and destination values", "د واحدونو د بدلولو انځور له لومړنیو او وروستیو ارزښتونو سره", "تصویر تبدیل واحد با مقدارهای مبدأ و مقصد"],
        ["Analog and digital clock illustration with time and date displays", "د عقربه‌یي او ډیجیټلي ساعت انځور چې وخت او نېټه ښيي", "تصویر ساعت عقربه‌ای و دیجیتلی با نمایش زمان و تاریخ"],
        ["Number guessing game illustration with guesses and feedback", "د شمېرې د اټکل د لوبې انځور له اټکلونو او لارښوونو سره", "تصویر بازی حدس عدد با حدس‌ها و راهنمایی‌ها"],
        ["Weekly temperature chart illustration with summary statistics", "د اوونۍ د تودوخې د ګراف انځور له لنډو احصایو سره", "تصویر نمودار درجهٔ حرارت هفتگی همراه با آمار خلاصه"],
        ["Hospital ETL illustration showing records moving through cleaning and loading", "د روغتون د ETL انځور چې د ریکارډونو د پاکولو او زېرمه کولو بهیر ښيي", "تصویر ETL شفاخانه که روند پاک‌سازی و بارگذاری سوابق را نشان می‌دهد"],
        ["Sales and inventory data illustration with charts and a warehouse pipeline", "د پلور او زېرمې د معلوماتو انځور له ګرافونو او د معلوماتو د زېرمتون له بهیر سره", "تصویر معلومات فروش و موجودی با نمودارها و فرایند انبار معلومات"],
        ["Text transformation illustration showing input and transformed output", "د متن د بدلولو انځور چې ورکړل شوی متن او بدله شوې پایله ښيي", "تصویر تبدیل متن که ورودی و خروجی تبدیل‌شده را نشان می‌دهد"],
        ["ETL toolkit illustration showing connected data processing modules", "د ETL د ټولګې انځور چې د معلوماتو د پروسس تړلې برخې ښيي", "تصویر مجموعهٔ ETL که بخش‌های مرتبط پردازش معلومات را نشان می‌دهد"]
    ];

    const normalize = (value) => value.replace(/\s+/g, " ").trim();
    const dictionary = new Map(messages.map(([english, ps, dari]) => [
        normalize(english), { ps, "fa-AF": dari }
    ]));
    const supportedLanguages = new Set(["en", "ps", "fa-AF"]);
    const storageKey = "ha-portfolio-language";
    const selectors = Array.from(document.querySelectorAll(".language-select"));
    const languagePickers = [];
    const textBindings = [];
    const attributeBindings = [];
    const originalTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const originalDescription = description?.getAttribute("content");
    let currentLanguage = "en";

    const translate = (english) => {
        if (currentLanguage === "en") return english;
        return dictionary.get(normalize(english))?.[currentLanguage] || english;
    };

    // Bind individual text nodes to preserve links, icons, details controls, and
    // all other nested markup. The project count and theme aria-label are dynamic.
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
            if (node.parentElement?.closest("script, style, .language-picker, .project-count")) {
                return NodeFilter.FILTER_REJECT;
            }
            return dictionary.has(normalize(node.nodeValue))
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_REJECT;
        }
    });
    while (walker.nextNode()) {
        const node = walker.currentNode;
        const original = node.nodeValue;
        textBindings.push({
            node,
            original,
            key: normalize(original),
            leading: original.match(/^\s*/)[0],
            trailing: original.match(/\s*$/)[0]
        });
    }

    document.querySelectorAll("[aria-label], [alt], [title]").forEach((element) => {
        ["aria-label", "alt", "title"].forEach((attribute) => {
            if (attribute === "aria-label" && element.matches(".theme-toggle")) return;
            const original = element.getAttribute(attribute);
            if (original && dictionary.has(normalize(original))) {
                attributeBindings.push({ element, attribute, original });
            }
        });
    });

    window.portfolioLanguage = {
        translate,
        get language() { return currentLanguage; },
        formatProjectCount(count) {
            const locale = currentLanguage === "ps" ? "ps-AF" : currentLanguage;
            const number = new Intl.NumberFormat(locale, {
                numberingSystem: currentLanguage === "en" ? "latn" : "arabext"
            }).format(count);
            if (currentLanguage === "ps") return `${number} ${count === 1 ? "پروژه" : "پروژې"}`;
            if (currentLanguage === "fa-AF") return `${number} پروژه`;
            return `${number} ${count === 1 ? "project" : "projects"}`;
        }
    };

    const applyLanguage = (language) => {
        currentLanguage = supportedLanguages.has(language) ? language : "en";
        document.documentElement.lang = currentLanguage;
        document.documentElement.dir = currentLanguage === "en" ? "ltr" : "rtl";
        selectors.forEach((select) => { select.value = currentLanguage; });
        languagePickers.forEach(({ select, trigger, label, menu, items }) => {
            label.textContent = select.selectedOptions[0].textContent;
            label.lang = currentLanguage;
            trigger.setAttribute("aria-label", `${translate("Choose language")}: ${label.textContent}`);
            menu.setAttribute("aria-label", translate("Choose language"));
            items.forEach((item) => {
                item.setAttribute("aria-checked", String(item.dataset.language === currentLanguage));
            });
        });

        textBindings.forEach(({ node, original, key, leading, trailing }) => {
            node.nodeValue = currentLanguage === "en"
                ? original
                : leading + dictionary.get(key)[currentLanguage] + trailing;
        });
        attributeBindings.forEach(({ element, attribute, original }) => {
            element.setAttribute(attribute, translate(original));
        });
        document.title = translate(originalTitle);
        if (description && originalDescription) {
            description.setAttribute("content", translate(originalDescription));
        }
        try {
            localStorage.setItem(storageKey, currentLanguage);
        } catch {
            // Language switching still works when browser storage is unavailable.
        }
        window.dispatchEvent(new CustomEvent("portfolio:languagechange", {
            detail: { language: currentLanguage }
        }));
    };

    selectors.forEach((select) => {
        select.addEventListener("change", () => applyLanguage(select.value));
    });

    const closePicker = (picker, restoreFocus = false) => {
        picker.wrapper.classList.remove("is-open");
        picker.trigger.setAttribute("aria-expanded", "false");
        picker.menu.inert = true;
        picker.menu.setAttribute("aria-hidden", "true");
        if (restoreFocus) picker.trigger.focus();
    };

    const openPicker = (picker, index = picker.select.selectedIndex) => {
        languagePickers.forEach((other) => {
            if (other !== picker) closePicker(other);
        });
        picker.menu.inert = false;
        picker.menu.setAttribute("aria-hidden", "false");
        picker.trigger.setAttribute("aria-expanded", "true");
        picker.wrapper.classList.add("is-open");
        picker.items[index]?.focus();
    };

    // Enhance the native select with a themed menu while keeping its change events.
    selectors.forEach((select, index) => {
        const wrapper = select.closest(".language-picker");
        if (!wrapper) return;
        const trigger = document.createElement("button");
        trigger.type = "button";
        trigger.className = "language-trigger";
        trigger.setAttribute("aria-haspopup", "menu");
        trigger.setAttribute("aria-expanded", "false");
        trigger.setAttribute("aria-controls", `language-menu-${index}`);
        trigger.innerHTML = '<span class="language-current" dir="auto"></span><svg class="language-chevron" viewBox="0 0 20 20" aria-hidden="true"><path d="m5 7.5 5 5 5-5"/></svg>';
        const label = trigger.querySelector(".language-current");
        const menu = document.createElement("div");
        menu.id = `language-menu-${index}`;
        menu.className = "language-menu";
        menu.setAttribute("role", "menu");
        menu.setAttribute("aria-hidden", "true");
        menu.inert = true;
        const items = Array.from(select.options, (option) => {
            const item = document.createElement("button");
            item.type = "button";
            item.className = "language-option";
            item.dataset.language = option.value;
            item.setAttribute("role", "menuitemradio");
            item.setAttribute("aria-checked", "false");
            item.tabIndex = -1;
            const text = document.createElement("span");
            text.lang = option.lang;
            text.dir = "auto";
            text.textContent = option.textContent;
            item.append(text);
            item.insertAdjacentHTML("beforeend", '<svg class="language-check" viewBox="0 0 20 20" aria-hidden="true"><path d="m4.5 10 3.5 3.5 7.5-7.5"/></svg>');
            menu.append(item);
            return item;
        });
        const picker = { wrapper, select, trigger, label, menu, items };
        languagePickers.push(picker);
        trigger.addEventListener("click", () => {
            if (trigger.getAttribute("aria-expanded") === "true") closePicker(picker, true);
            else openPicker(picker);
        });
        items.forEach((item) => {
            item.addEventListener("click", () => {
                select.value = item.dataset.language;
                select.dispatchEvent(new Event("change", { bubbles: true }));
                closePicker(picker, true);
            });
        });
        wrapper.addEventListener("keydown", (event) => {
            const activeIndex = items.indexOf(document.activeElement);
            if (activeIndex >= 0 && ["Enter", " "].includes(event.key)) {
                event.preventDefault();
                items[activeIndex].click();
            } else if (["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) {
                event.preventDefault();
                let nextIndex = activeIndex < 0 ? select.selectedIndex : activeIndex;
                if (event.key === "Home") nextIndex = 0;
                else if (event.key === "End") nextIndex = items.length - 1;
                else if (activeIndex >= 0) nextIndex = (activeIndex + (event.key === "ArrowDown" ? 1 : -1) + items.length) % items.length;
                openPicker(picker, nextIndex);
            } else if (event.key === "Escape" && trigger.getAttribute("aria-expanded") === "true") {
                event.preventDefault();
                closePicker(picker, true);
            } else if (event.key === "Tab") {
                requestAnimationFrame(() => closePicker(picker));
            } else if (activeIndex >= 0 && event.key.length === 1 && event.key !== " " && !event.ctrlKey && !event.metaKey && !event.altKey) {
                const match = items.find((item) => item.textContent.trim().toLocaleLowerCase().startsWith(event.key.toLocaleLowerCase()));
                if (match) { event.preventDefault(); match.focus(); }
            }
        });
        wrapper.addEventListener("focusout", (event) => {
            if (!wrapper.contains(event.relatedTarget)) closePicker(picker);
        });
        wrapper.append(trigger, menu);
        select.hidden = true;
    });

    document.addEventListener("pointerdown", (event) => {
        languagePickers.forEach((picker) => {
            if (!picker.wrapper.contains(event.target)) closePicker(picker);
        });
    });

    let savedLanguage = "en";
    try {
        savedLanguage = localStorage.getItem(storageKey) || "en";
    } catch {
        // Fall back to English when browser storage is unavailable.
    }
    applyLanguage(savedLanguage);
})();
