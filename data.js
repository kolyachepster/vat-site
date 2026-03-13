// data.js - Полная база данных сайта VAT
// Версия: 1.0 (07.03.2026)

// ========== ТАЙТЛЫ (АНИМЕ, МАНХВА, ГАЧА) ==========
const titlesDatabase = [
    {
        id: 'molchalivaya_vedma',
        name: 'Молчаливая ведьма',
        nameEng: 'The Silent Witch',
        image: 'молч_ведьм.jpg',
        type: 'anime',
        seasons: 1,
        episodes: 13,
        year: 2025,
        rating: 4.8,
        genres: ['Фэнтези', 'Драма', 'Комедия', 'Школьная жизнь'],
        description: ''
    },
    {
        id: 'zvezdnoe_ditya',
        name: 'Звёздное дитя',
        nameEng: 'Oshi No Ko',
        image: 'ЗД.png',
        type: 'anime',
        seasons: 3,
        episodes: 35,
        year: 2023,
        rating: 4.5,
        genres: ['Психологическая драма', 'Детектив', 'Комедия'],
        description: ''
    },
    {
        id: 'hellsing',
        name: 'Хеллсинг: Война с нечистью',
        nameEng: 'Hellsing',
        image: 'hellsing.jpg',
        type: 'anime',
        seasons: 1,
        episodes: 13,
        year: 2001,
        rating: 4.5,
        genres: ['Вампиры', 'Боевик', 'Фэнтези'],
        description: ''
    },
    {
        id: 'hellsing',
        name: 'Хеллсинг: Война с нечистью',
        nameEng: 'Hellsing',
        image: 'hellsing.jpg',
        type: 'movie',
        seasons: 1,
        episodes: 13,
        year: 2001,
        rating: 4.5,
        genres: ['Вампиры', 'Боевик', 'Фэнтези'],
        description: ''
    },
    ];

// ========== ДАББЕРЫ (АКТЁРЫ ОЗВУЧКИ) ==========
const voicesDatabase = [
    // ===== ОСНОВНОЙ СОСТАВ (18 человек) =====
    { 
        id: 'miki-angel',
        name: 'Miki-angel', 
        image: 'ава-miki.jpg',
        status: 'Основной состав',
        joinDate: '2023',
        bio: 'Девиз: "Из унылого говна, резко в сытого кота"',
        social: {
            telegram: '@kadrzakadrommikiangel',
        }
    },
    { 
        id: 'raskolnikov',
        name: 'Раскольников', 
        image: 'ава-raskolnikov.jpg',
        status: 'Основной состав',
        joinDate: '2024',
        bio: 'Девиз : "Тварь ли я дрожащая или право имею"',
        social: {}
    },
    { 
        id: 'dnt',
        name: 'DNT', 
        image: 'ава-dnt.jpg',
        status: 'Основной состав',
        joinDate: '2025',
        bio: 'Девиз: «Смелость открывает двери к успеху»',
        social: {}
    },
    { 
        id: 'nemo',
        name: 'Nemo', 
        image: 'ава-nemo.jpg',
        status: 'Основной состав',
        joinDate: '2025',
        bio: '',
        social: {}
    },
    { 
        id: 'atari',
        name: 'Atari', 
        image: 'ава-atari.jpg',
        status: 'Основной состав',
        joinDate: '2025',
        bio: '',
        social: {}
    },
    { 
        id: 'mindal',
        name: 'Миндаль', 
        image: 'ава-mindal.jpg',
        status: 'Основной состав',
        joinDate: '2025',
        bio: '',
        social: {}
    },
    { 
        id: 'natalya',
        name: 'Наталья Тарасюк', 
        image: 'ава-nat.jpg',
        status: 'Основной состав',
        joinDate: '2024',
        bio: '',
        social: {}
    },
    { 
        id: 'runi',
        name: 'Руни', 
        image: 'ава-runi.jpg',
        status: 'Основной состав',
        joinDate: '2025',
        bio: '',
        social: {}
    },
    { 
        id: 'amaryllis',
        name: 'Amaryllis', 
        image: 'ава-amaryllis.jpg',
        status: 'Основной состав',
        joinDate: '2024',
        bio: '',
        social: {}
    },
    { 
        id: 'alex',
        name: 'Алекс Фостер', 
        image: 'ава-alex.jpg',
        status: 'Основной состав',
        joinDate: '2024',
        bio: '',
        social: {}
    },
    { 
        id: 'spartans',
        name: 'Юный Спартанец', 
        image: 'ава-spart.jpg',
        status: 'Основной состав',
        joinDate: '2024',
        bio: '',
        social: {}
    },
    { 
        id: 'fury',
        name: 'Fury', 
        image: 'ава-fury.jpg',
        status: 'Основной состав',
        joinDate: '2025',
        bio: '',
        social: {}
    },
    { 
        id: 'titch',
        name: 'Titch', 
        image: 'ава-titch.jpg',
        status: 'Основной состав',
        joinDate: '2025',
        bio: '',
        social: {}
    },
    { 
        id: 'sakura',
        name: 'Sakura Hashimoto', 
        image: 'ава-sakura.jpg',
        status: 'Основной состав',
        joinDate: '2023',
        bio: '',
        social: {}
    },
    { 
        id: 'mays',
        name: 'Майс', 
        image: 'ава-mays.jpg',
        status: 'Основной состав',
        joinDate: '2025',
        bio: 'Девиз: "Кто пукнул, тот сам и понюхал."',
        social: {}
    },
    { 
        id: 'kolli',
        name: 'Kolli', 
        image: 'ава-kolli.jpg',
        status: 'Основной состав',
        joinDate: '2025',
        bio: 'Девиз: "Человек неисправим"',
        social: {}
    },
    { 
        id: 'persik',
        name: 'Persik', 
        image: 'ава-persik.jpg',
        status: 'Основной состав',
        joinDate: '2026',
        bio: '',
        social: {}
    },
    
    // ===== ДОПОЛНИТЕЛЬНЫЙ СОСТАВ (25 человек) =====
    { 
        id: 'enineke',
        name: 'Enineke', 
        image: 'ава-enineke.jpg',
        status: 'Доп. состав',
        joinDate: '2025',
        bio: '',
        social: {}
    },
    { 
        id: 'traxyn',
        name: 'Traxyn', 
        image: 'ава-traxyn.jpg',
        status: 'Доп. состав',
        joinDate: '2025',
        bio: '',
        social: {}
    },
    { 
        id: 'denis',
        name: 'Денис Груздов', 
        image: 'ава-denis',
        status: 'Доп. состав',
        joinDate: '2024',
        bio: '',
        social: {}
    },
    { 
        id: 'tushkan',
        name: 'Тушканчик', 
        image: 'ава-tuchkan.jpg',
        status: 'Доп. состав',
        joinDate: '2025',
        bio: 'Девиз: "Кто рано встаёт, того беднягу жаль"',
        social: {}
    },
    { 
        id: 'chep',
        name: 'chep', 
        image: 'ава-chep.jpg',
        status: 'Доп. состав',
        joinDate: '2026',
        bio: 'Девиз: "Не сдавайся, позорься дальше"',
        social: {}
    },
    { 
        id: 'juri',
        name: 'Juri', 
        image: 'ава-jury.jpg',
        status: 'Доп. состав',
        joinDate: '2025',
        bio: '',
        social: {}
    },
    { 
        id: 'doza_narkoza',
        name: 'Doza_Narkoza', 
        image: 'ава-Doza.jpg',
        status: 'Доп. состав',
        joinDate: '2025',
        bio: '',
        social: {}
    },
    { 
        id: 'penek',
        name: 'Пенёк', 
        image: 'ава-penek.jpg',
        status: 'Доп. состав',
        joinDate: '2024',
        bio: '',
        social: {}
    },
    { 
        id: 'sirius',
        name: 'Sirius', 
        image: 'ава-sirius.jpg',
        status: 'Доп. состав',
        joinDate: '2026',
        bio: '',
        social: {}
    },
    { 
        id: 'general_bibizyan',
        name: 'Генерал Бибизян', 
        image: 'ава-general.jpg',
        status: 'Доп. состав',
        joinDate: '2025',
        bio: '',
        social: {}
    },
    { 
        id: 'parz',
        name: 'Parz', 
        image: 'ава-Parz.jpg',
        status: 'Доп. состав',
        joinDate: '2026',
        bio: '',
        social: {}
    },
    { 
        id: 'evangeline',
        name: 'Evangeline', 
        image: 'ава-evangeline.jpg',
        status: 'Доп. состав',
        joinDate: '2024',
        bio: '',
        social: {}
    },
    { 
        id: 'redmonox',
        name: 'Redmonox', 
        image: 'ава-redmonox.jpg',
        status: 'Доп. состав',
        joinDate: '2026',
        bio: '',
        social: {}
    },
    { 
        id: 'hina',
        name: 'Hina', 
        image: 'ава-tut_hini.jpg',
        status: 'Доп. состав',
        joinDate: '2025',
        bio: 'Девиз: "Идти вперёд спокойно, оставаться доброй к людям и находить радость даже в мелочах."',
        social: {
            telegram: 'hiniverse'
        }
    },
    { 
        id: 'lumin',
        name: 'Люмин', 
        image: 'ава-lumin.jpg',
        status: 'Доп. состав',
        joinDate: '2026',
        bio: '',
        social: {}
    },
    { 
        id: 'femchik',
        name: 'Фемчик', 
        image: 'ава-фемчик.jpg',
        status: 'Доп. состав',
        joinDate: '2025',
        bio: '',
        social: {}
    },
    { 
        id: 'if',
        name: 'Иф', 
        image: 'ава-if.jpg',
        status: 'Доп. состав',
        joinDate: '2026',
        bio: '',
        social: {}
    },
    { 
        id: 'akva',
        name: 'Akva', 
        image: 'ава-Akva.jpg',
        status: 'Доп. состав',
        joinDate: '2024',
        bio: '',
        social: {}
    },
    { 
        id: 'dizzel',
        name: 'Dizzel', 
        image: 'ава-dizzel',
        status: 'Доп. состав',
        joinDate: '2026',
        bio: '',
        social: {}
    },
    { 
        id: 'kr9k',
        name: 'Kr9k', 
        image: 'ава-Kr9k',
        status: 'Доп. состав',
        joinDate: '2026',
        bio: '',
        social: {}
    },
    { 
        id: 'takoto',
        name: 'Takoto', 
        image: 'ава-takoto.jpg',
        status: 'Доп. состав',
        joinDate: '2026',
        bio: '',
        social: {}
    },
    { 
        id: 'never',
        name: 'Never', 
        image: 'ава-Never.jpg',
        status: 'Доп. состав',
        joinDate: '2026',
        bio: '',
        social: {}
    },
    { 
        id: 'sabal',
        name: 'Sabal', 
        image: 'ава-Sabal.jpg',
        status: 'Доп. состав',
        joinDate: '2025',
        bio: '',
        social: {}
    },
    { 
        id: 'zheka',
        name: 'Жека', 
        image: 'ава-zheka',
        status: 'Доп. состав',
        joinDate: '2025',
        bio: '',
        social: {}
    },
    { 
        id: 'koffess',
        name: 'koffess', 
        image: 'ава-putin.jpg',
        status: 'Доп. состав',
        joinDate: '2026',
        bio: 'Девиз: "Похуй, пляшем"',
        social: {}
    },
    { 
        id: 'actorssss',
        name: 'ActoRsssS', 
        image: 'ава-actorssss.jpg',
        status: 'Доп. состав',
        joinDate: '2026',
        bio: '',
        social: {}
    },
    { 
        id: 'mary',
        name: 'Mary', 
        image: 'ава-mary.jpg',
        status: 'Доп. состав',
        joinDate: '2025',
        bio: '',
        social: {}
    },
    { 
        id: 'rayko',
        name: 'Rayko', 
        image: 'ава-Rayko.jpg',
        status: 'Доп. состав',
        joinDate: '67/69/52/42/1488',
        bio: '',
        social: {}
    },
];
// ========== РОЛИ (СВЯЗЬ ДАББЕРОВ С ТАЙТЛАМИ) ==========
const rolesDatabase = [
    // ===== МОЛЧАЛИВАЯ ВЕДЬМА =====
    // Главные роли
    { titleId: 'molchalivaya_vedma', voiceId: 'mindal', character: 'Моника Эверетт', characterImage: 'monicaEverett.webp', episodes: '1-13', type: 'main' },
    { titleId: 'molchalivaya_vedma', voiceId: 'dnt', character: 'Феликс Арк Ридилл', characterImage: 'FelixArcRiddil.webp', episodes: '1-13', type: 'main' },
    { titleId: 'molchalivaya_vedma', voiceId: 'raskolnikov', character: 'Неро', characterImage: 'nero.webp', episodes: '1-13', type: 'main' },
    { titleId: 'molchalivaya_vedma', voiceId: 'raskolnikov', character: 'Сирил Эшли', characterImage: 'siril.webp', episodes: '1-13', type: 'main' },
    { titleId: 'molchalivaya_vedma', voiceId: 'fury', character: 'Луис Миллер', characterImage: 'luis.webp', episodes: '1-5,6-7', type: 'main' },
    { titleId: 'molchalivaya_vedma', voiceId: 'sakura', character: 'Ринзбельфид', characterImage: 'rin.webp', episodes: '1,4,7', type: 'main' },
    { titleId: 'molchalivaya_vedma', voiceId: 'nemo', character: 'Эллиотт Говард', characterImage: 'ellyott.webp', episodes: '3-5', type: 'main' },
    { titleId: 'molchalivaya_vedma', voiceId: 'mays', character: 'Изабель Нортон', characterImage: 'izabel.webp', episodes: '1-4,6-7', type: 'main' },
    { titleId: 'molchalivaya_vedma', voiceId: 'miki-angel', character: 'Лана Колетт', characterImage: 'lana.webp', episodes: '2-4,6-7', type: 'main' },
    { titleId: 'molchalivaya_vedma', voiceId: 'traxyn', character: 'Клаудия Эшли', characterImage: 'klaudiya.webp', episodes: '6,7', type: 'main' },
    
    // Второстепенные роли
    { titleId: 'molchalivaya_vedma', voiceId: 'titch', character: 'Вильдиан', episodes: '', type: 'supporting' },
    { titleId: 'molchalivaya_vedma', voiceId: 'titch', character: 'Рассказчик', episodes: '', type: 'supporting' },
    { titleId: 'molchalivaya_vedma', voiceId: 'atari', character: 'Агата', episodes: '', type: 'supporting' },
    { titleId: 'molchalivaya_vedma', voiceId: 'miki-angel', character: 'Энни', episodes: '', type: 'supporting' },
    { titleId: 'molchalivaya_vedma', voiceId: 'nemo', character: 'Аарон', episodes: '', type: 'supporting' },
    { titleId: 'molchalivaya_vedma', voiceId: 'femchik', character: 'Сельма', episodes: '', type: 'supporting' },
    { titleId: 'molchalivaya_vedma', voiceId: 'spartans', character: 'Виктор', episodes: '', type: 'supporting' },
    { titleId: 'molchalivaya_vedma', voiceId: 'traxyn', character: 'Бриджит', episodes: '', type: 'supporting' },
    { titleId: 'molchalivaya_vedma', voiceId: 'nemo', character: 'Нил', episodes: '', type: 'supporting' },
    { titleId: 'molchalivaya_vedma', voiceId: 'runi', character: 'Кэролайн', episodes: '', type: 'supporting' },
    { titleId: 'molchalivaya_vedma', voiceId: 'spartans', character: 'Профессор Уильям', episodes: '', type: 'supporting' },
    { titleId: 'molchalivaya_vedma', voiceId: 'spartans', character: 'Учитель Войд', episodes: '', type: 'supporting' },
    { titleId: 'molchalivaya_vedma', voiceId: 'runi', character: 'Кейси', episodes: '', type: 'supporting' },
    
];

// ========== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ==========

function getVoiceById(id) {
    return voicesDatabase.find(v => v.id === id) || null;
}

//
function getVoiceByName(name) {
    return voicesDatabase.find(v => v.name === name) || null;
}
function getRolesByVoiceId(voiceId) {
    return rolesDatabase.filter(r => r.voiceId === voiceId);
}


function getTitlesByVoiceId(voiceId) {
    const roles = getRolesByVoiceId(voiceId);
    const titleIds = [...new Set(roles.map(r => r.titleId))]; // уникальные ID
    
    return titleIds.map(titleId => {
        const title = titlesDatabase.find(t => t.id === titleId);
        const voiceRoles = roles.filter(r => r.titleId === titleId);
        return {
            ...title,
            roles: voiceRoles
        };
    }).filter(t => t); // убираем null
}

function getVoicesByTitleId(titleId) {
    const roles = rolesDatabase.filter(r => r.titleId === titleId);
    const voiceIds = [...new Set(roles.map(r => r.voiceId))];
    
    return voiceIds.map(voiceId => {
        const voice = getVoiceById(voiceId);
        const titleRoles = roles.filter(r => r.voiceId === voiceId);
        return {
            ...voice,
            roles: titleRoles
        };
    }).filter(v => v);
}

function groupRolesByType(roles) {
    return {
        main: roles.filter(r => r.type === 'main'),
        recurring: roles.filter(r => r.type === 'recurring'),
        supporting: roles.filter(r => r.type === 'supporting'),
        guest: roles.filter(r => r.type === 'guest')
    };
}


function getVoiceStats(voiceId) {
    const roles = getRolesByVoiceId(voiceId);
    const titles = getTitlesByVoiceId(voiceId);
    const grouped = groupRolesByType(roles);
    
    return {
        totalTitles: titles.length,
        totalRoles: roles.length,
        mainRoles: grouped.main.length,
        recurringRoles: grouped.recurring.length,
        supportingRoles: grouped.supporting.length,
        guestRoles: grouped.guest.length
    };
}

//
function searchDatabase(query) {
    if (!query) return { titles: [], voices: [] };
    
    const lowerQuery = query.toLowerCase().trim();
    
    // Поиск по тайтлам
    const titles = titlesDatabase.filter(title => 
        title.name.toLowerCase().includes(lowerQuery) ||
        (title.nameEng && title.nameEng.toLowerCase().includes(lowerQuery))
    );
    
    // Поиск по дабберам
    const voices = voicesDatabase.filter(voice => 
        voice.name.toLowerCase().includes(lowerQuery)
    );
    
    return { titles, voices };
}


// Экспортируем всё в глобальную область (для доступа из HTML)
window.titlesDatabase = titlesDatabase;
window.voicesDatabase = voicesDatabase;
window.rolesDatabase = rolesDatabase;
window.getVoiceById = getVoiceById;
window.getVoiceByName = getVoiceByName;
window.getRolesByVoiceId = getRolesByVoiceId;
window.getTitlesByVoiceId = getTitlesByVoiceId;
window.getVoicesByTitleId = getVoicesByTitleId;
window.groupRolesByType = groupRolesByType;
window.getVoiceStats = getVoiceStats;
window.searchDatabase = searchDatabase;
