// data.js - Полная база данных сайта VAT
// Версия: 2.0 (20.03.2026)

// ========== ТАЙТЛЫ ==========
const titlesDatabase = [
    {
        id: 'molchalivaya_vedma',
        name: 'Молчаливая ведьма',
        nameEn: 'The Silent Witch',
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
        nameEn: 'Oshi No Ko',
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
        name: 'Хеллсинг',
        nameEn: 'Hellsing',
        image: 'hellsing.jpg',
        type: 'anime',
        seasons: 1,
        episodes: 13,
        year: 2001,
        rating: 4.5,
        genres: ['Экшен', 'Ужасы', 'Вампиры'],
        description: ''
    }
];

// ========== ДАББЕРЫ ==========
const voicesDatabase = [
    // ===== ОСНОВНОЙ СОСТАВ (17 человек) =====
    { 
        id: 'miki-angel',
        name: 'Miki-angel',
        nameRu: 'Мики-ангел',
        image: 'ава-miki.jpg',
        status: 'Основной состав',
        joinDate: '2023',
        bio: 'Основатель, сводчик, дура дубляжа',
        social: { telegram: '@kadrzakadrommikiangel' }
    },
    { 
        id: 'raskolnikov',
        name: 'Раскольников',
        nameEn: 'Raskolnikov',
        image: 'ава-raskolnikov.jpg',
        status: 'Основной состав',
        joinDate: '2024',
        bio: 'Совладелец, актёр дубляжа',
        social: {}
    },
    { 
        id: 'dnt',
        name: 'DNT',
        nameRu: 'ДНТ',
        image: 'ава-dnt.jpg',
        status: 'Основной состав',
        joinDate: '2025',
        bio: 'Ст.админ, СВОдчик, актёр дубляжа',
        social: {}
    },
    { 
        id: 'nemo',
        name: 'Nemo',
        nameRu: 'Немо',
        image: 'ава-nemo.jpg',
        status: 'Основной состав',
        joinDate: '2025',
        bio: 'Админ, актриса дубляжа(фембойчик наш)',
        social: {}
    },
    { 
        id: 'atari',
        name: 'Atari',
        nameRu: 'Атари',
        image: 'ава-atari.jpg',
        status: 'Основной состав',
        joinDate: '2025',
        bio: 'Актриса дубляжа',
        social: {}
    },
    { 
        id: 'mindal',
        name: 'Миндаль',
        nameEn: 'Mindal',
        image: 'ава-mindal.jpg',
        status: 'Основной состав',
        joinDate: '2025',
        bio: 'Актриса дубляжа',
        social: {}
    },
    { 
        id: 'natalya',
        name: 'Наталья Тарасюк',
        nameEn: 'Natalya Tarasyuk',
        image: 'ава-nat.jpg',
        status: 'Основной состав',
        joinDate: '2024',
        bio: 'Актриса дубляжа',
        social: {}
    },
    { 
        id: 'runi',
        name: 'Руни',
        nameEn: 'Runi',
        image: 'ава-runi.jpg',
        status: 'Основной состав',
        joinDate: '2025',
        bio: 'Актриса дубляжа',
        social: {}
    },
    { 
        id: 'amaryllis',
        name: 'Amaryllis',
        nameRu: 'Амариллис',
        image: 'ава-amaryllis.jpg',
        status: 'Основной состав',
        joinDate: '2024',
        bio: 'Актриса дубляжа',
        social: {}
    },
    { 
        id: 'alex',
        name: 'Алекс Фостер',
        nameEn: 'Alex Foster',
        image: 'ава-alex.jpg',
        status: 'Основной состав',
        joinDate: '2024',
        bio: 'Актёр дубляжа',
        social: {}
    },
    { 
        id: 'spartans',
        name: 'Юный Спартанец',
        nameEn: 'Young Spartan',
        image: 'ава-spart.jpg',
        status: 'Основной состав',
        joinDate: '2024',
        bio: 'Админ, СВОдчик, актёр дубляжа',
        social: {}
    },
    { 
        id: 'fury',
        name: 'Fury',
        nameRu: 'Фьюри',
        image: 'ава-fury.jpg',
        status: 'Основной состав',
        joinDate: '2025',
        bio: 'Актёр дубляжа',
        social: {}
    },
    { 
        id: 'titch',
        name: 'Titch',
        nameRu: 'Титч',
        image: 'ава-titch.jpg',
        status: 'Основной состав',
        joinDate: '2025',
        bio: 'Актёр дубляжа',
        social: {}
    },
    { 
        id: 'sakura',
        name: 'Sakura Hashimoto',
        nameRu: 'Сакура Хашимото',
        image: 'ава-sakura.jpg',
        status: 'Основной состав',
        joinDate: '2023',
        bio: 'Актриса дубляжа',
        social: {}
    },
    { 
        id: 'mays',
        name: 'Майс',
        nameEn: 'Mays',
        image: 'ава-mays.jpg',
        status: 'Основной состав',
        joinDate: '2025',
        bio: 'Актриса дубляжа',
        social: {}
    },
    { 
        id: 'kolli',
        name: 'Kolli',
        nameRu: 'Колли',
        image: 'ава-kolli.jpg',
        status: 'Основной состав',
        joinDate: '2025',
        bio: 'Звукорежиссёр, актёр дубляжа',
        social: {}
    },
    { 
        id: 'persik',
        name: 'Persik',
        nameRu: 'Персик',
        image: 'ава-persik.jpg',
        status: 'Основной состав',
        joinDate: '2026',
        bio: 'Актриса дубляжа',
        social: {}
    },
    
    // ===== ДОПОЛНИТЕЛЬНЫЙ СОСТАВ (28 человек) =====
    { 
        id: 'enineke',
        name: 'Enineke',
        nameRu: 'Энинеке',
        image: 'ава-enineke.jpg',
        status: 'Доп. состав',
        joinDate: '2025',
        bio: 'Актриса дубляжа',
        social: {}
    },
    { 
        id: 'traxyn',
        name: 'Traxyn',
        nameRu: 'Траксин',
        image: 'ава-traxyn.jpg',
        status: 'Доп. состав',
        joinDate: '2025',
        bio: 'Милфа дубляжа',
        social: {}
    },
    { 
        id: 'denis',
        name: 'Денис Груздов',
        nameEn: 'Denis Gruzdov',
        image: 'ава-denis.jpg',
        status: 'Доп. состав',
        joinDate: '2024',
        bio: 'Актёр дубляжа',
        social: {}
    },
    { 
        id: 'tushkan',
        name: 'Тушканчик',
        nameEn: 'Tushkanchik',
        image: 'ава-tuchkan.jpg',
        status: 'Доп. состав',
        joinDate: '2025',
        bio: 'Актриса дубляжа',
        social: {}
    },
    { 
        id: 'chep',
        name: 'chep',
        nameRu: 'чеп',
        image: 'ава-chep.jpg',
        status: 'Доп. состав',
        joinDate: '2026',
        bio: 'Актёр дубляжа, разработчик',
        social: { telegram: 'chepsdub' }
    },
    { 
        id: 'juri',
        name: 'Juri',
        nameRu: 'Юри',
        image: 'ава-jury.jpg',
        status: 'Доп. состав',
        joinDate: '2025',
        bio: 'Актриса дубляжа',
        social: {}
    },
    { 
        id: 'doza_narkoza',
        name: 'Doza_Narkoza',
        nameRu: 'Доза_Наркоза',
        image: 'ава-doza.jpg',
        status: 'Доп. состав',
        joinDate: '2025',
        bio: 'Актёр дубляжа',
        social: {}
    },
    { 
        id: 'penek',
        name: 'Пенёк',
        nameEn: 'Penek',
        image: 'ава-penek.jpg',
        status: 'Доп. состав',
        joinDate: '2024',
        bio: 'Актёр дубляжа',
        social: {}
    },
    { 
        id: 'sirius',
        name: 'Sirius',
        nameRu: 'Сириус',
        image: 'ава-sirius.jpg',
        status: 'Доп. состав',
        joinDate: '2026',
        bio: 'Актёр дубляжа',
        social: {}
    },
    { 
        id: 'general_bibizyan',
        name: 'Генерал Бибизян',
        nameEn: 'General Bibizyan',
        image: 'ава-general.jpg',
        status: 'Доп. состав',
        joinDate: '2025',
        bio: 'Актёр дубляжа',
        social: {}
    },
    { 
        id: 'parz',
        name: 'Parz',
        nameRu: 'Парз',
        image: 'ава-parz.jpg',
        status: 'Доп. состав',
        joinDate: '2026',
        bio: 'Актёр дубляжа',
        social: {}
    },
    { 
        id: 'evangeline',
        name: 'Evangeline',
        nameRu: 'Евангелина',
        image: 'ава-evangeline.jpg',
        status: 'Доп. состав',
        joinDate: '2024',
        bio: 'Актриса дубляжа',
        social: {}
    },
    { 
        id: 'redmonox',
        name: 'Redmonox',
        nameRu: 'Редмонокс',
        image: 'ава-redmonox.jpg',
        status: 'Доп. состав',
        joinDate: '2026',
        bio: 'Актёр дубляжа',
        social: {}
    },
    { 
        id: 'hina',
        name: 'Hina',
        nameRu: 'Хина',
        image: 'ава-tut_hini.jpg',
        status: 'Доп. состав',
        joinDate: '2025',
        bio: 'Актриса дубляжа',
        social: { telegram: 'hiniverse' }
    },
    { 
        id: 'lumin',
        name: 'Люмин',
        nameEn: 'Lumin',
        image: 'ава-lumin.jpg',
        status: 'Доп. состав',
        joinDate: '2026',
        bio: 'Актриса дубляжа',
        social: {}
    },
    { 
        id: 'femchik',
        name: 'Фемчик',
        nameEn: 'Femchik',
        image: 'ава-фемчик.jpg',
        status: 'Доп. состав',
        joinDate: '2025',
        bio: 'Актриса дубляжа',
        social: {}
    },
    { 
        id: 'if',
        name: 'Иф',
        nameEn: 'If',
        image: 'ава-if.jpg',
        status: 'Доп. состав',
        joinDate: '2026',
        bio: 'Актёр дубляжа',
        social: {}
    },
    { 
        id: 'akva',
        name: 'Akva',
        nameRu: 'Аква',
        image: 'ава-akva.jpg',
        status: 'Доп. состав',
        joinDate: '2024',
        bio: 'Актриса дубляжа',
        social: {}
    },
    { 
        id: 'dizzel',
        name: 'Dizzel',
        nameRu: 'Дизель',
        image: 'ава-dizzel.jpg',
        status: 'Доп. состав',
        joinDate: '2026',
        bio: 'Актёр дубляжа',
        social: {}
    },
    { 
        id: 'kr9k',
        name: 'Kr9k',
        nameRu: 'Кр9к',
        image: 'ава-kr9k.jpg',
        status: 'Доп. состав',
        joinDate: '2026',
        bio: 'Актриса дубляжа',
        social: {}
    },
    { 
        id: 'takoto',
        name: 'Takoto',
        nameRu: 'Такото',
        image: 'ава-takoto.jpg',
        status: 'Доп. состав',
        joinDate: '2026',
        bio: 'Актриса дубляжа',
        social: {}
    },
    { 
        id: 'never',
        name: 'Never',
        nameRu: 'Невер',
        image: 'ава-never.jpg',
        status: 'Доп. состав',
        joinDate: '2026',
        bio: 'Актёр дубляжа',
        social: {}
    },
    { 
        id: 'sabal',
        name: 'Sabal',
        nameRu: 'Сабаl',
        image: 'ава-sabal.jpg',
        status: 'Доп. состав',
        joinDate: '2025',
        bio: 'Актёр дубляжа',
        social: {}
    },
    { 
        id: 'zheka',
        name: 'Жека',
        nameEn: 'Zheka',
        image: 'ава-zheka.jpg',
        status: 'Доп. состав',
        joinDate: '2025',
        bio: 'Актриса дубляжа',
        social: {}
    },
    { 
        id: 'koffess',
        name: 'koffess',
        nameRu: 'кофесс',
        image: 'ава-putin.jpg',
        status: 'Доп. состав',
        joinDate: '2026',
        bio: 'Актриса дубляжа',
        social: {}
    },
    { 
        id: 'actorssss',
        name: 'ActoRsssS',
        nameRu: 'АкторсссС',
        image: 'ава-actorssss.jpg',
        status: 'Доп. состав',
        joinDate: '2026',
        bio: 'Актёр дубляжа',
        social: {}
    },
    { 
        id: 'mary',
        name: 'Mary',
        nameRu: 'Мэри',
        image: 'ава-mary.jpg',
        status: 'Доп. состав',
        joinDate: '2025',
        bio: 'Актриса дубляжа',
        social: {}
    },
    { 
        id: 'rayko',
        name: 'Rayko',
        nameRu: 'Райко',
        image: 'ава-rayko.jpg',
        status: 'Доп. состав',
        joinDate: '2025',
        bio: 'Актёр дубляжа',
        social: {}
    }
];

// ========== РОЛИ (СВЯЗЬ ДАББЕРОВ С ТАЙТЛАМИ) ==========
const rolesDatabase = [
    // ===== МОЛЧАЛИВАЯ ВЕДЬМА =====
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
    { titleId: 'molchalivaya_vedma', voiceId: 'runi', character: 'Кейси', episodes: '', type: 'supporting' }
];

// ========== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ==========

function getVoiceById(id) {
    return voicesDatabase.find(v => v.id === id) || null;
}

function getVoiceByName(name) {
    return voicesDatabase.find(v => v.name === name) || null;
}

function getRolesByVoiceId(voiceId) {
    return rolesDatabase.filter(r => r.voiceId === voiceId);
}

function getTitlesByVoiceId(voiceId) {
    const roles = getRolesByVoiceId(voiceId);
    const titleIds = [...new Set(roles.map(r => r.titleId))];
    
    return titleIds.map(titleId => {
        const title = titlesDatabase.find(t => t.id === titleId);
        const voiceRoles = roles.filter(r => r.titleId === titleId);
        return {
            ...title,
            roles: voiceRoles
        };
    }).filter(t => t);
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

// ========== ПОИСК (с поддержкой русского и английского) ==========
function searchDatabase(query) {
    if (!query || query.trim() === '') return { titles: [], voices: [] };
    
    const lowerQuery = query.toLowerCase().trim();
    
    // Поиск по тайтлам (русское и английское название)
    const titles = titlesDatabase.filter(title => 
        title.name.toLowerCase().includes(lowerQuery) || 
        (title.nameEn && title.nameEn.toLowerCase().includes(lowerQuery))
    );
    
    // Поиск по дабберам (основное имя, русская версия, английская версия)
    const voices = voicesDatabase.filter(voice => 
        voice.name.toLowerCase().includes(lowerQuery) ||
        (voice.nameRu && voice.nameRu.toLowerCase().includes(lowerQuery)) ||
        (voice.nameEn && voice.nameEn.toLowerCase().includes(lowerQuery))
    );
    
    return { titles, voices };
}

// ========== ЭКСПОРТ ==========
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

console.log('✅ data.js загружен');
console.log(`📊 Тайтлов: ${titlesDatabase.length}`);
console.log(`🎭 Дабберов: ${voicesDatabase.length}`);
console.log(`🔗 Ролей: ${rolesDatabase.length}`);