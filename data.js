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
        seasons: 3,
        episodes: 36,
        year: 2025,
        rating: 4.8,
        genres: ['Фэнтези', 'Драма', 'Комедия', 'Школьная жизнь'],
        description: ''
    },
    {
        id: 'zvezdnoe_ditya',
        name: 'Звёздное дитя',
        nameEng: 'Oshi No Ko',
        image: 'https://via.placeholder.com/200x280/001a8c/ffffff?text=Аниме+2',
        type: 'anime',
        seasons: 3,
        episodes: 24,
        year: 2025,
        rating: 4.5,
        genres: ['Экшен', 'Приключения', 'Фэнтези'],
        description: ''
    },
    ];

// ========== ДАББЕРЫ (АКТЁРЫ ОЗВУЧКИ) ==========
const voicesDatabase = [
    // ===== ОСНОВНОЙ СОСТАВ (18 человек) =====
    { 
        id: 'miki-angel',
        name: 'Miki-angel', 
        image: 'https://via.placeholder.com/200/001a8c/ffffff?text=Miki',
        status: 'Основной состав',
        joinDate: '',
        bio: '',
        social: {}
    },
    { 
        id: 'raskolnikov',
        name: 'Раскольников', 
        image: 'https://via.placeholder.com/200/320063/ffffff?text=Raskol',
        status: 'Основной состав',
        joinDate: '',
        bio: '',
        social: {}
    },
    { 
        id: 'dnt',
        name: 'DNT', 
        image: 'https://via.placeholder.com/200/4a0072/ffffff?text=DNT',
        status: 'Основной состав',
        joinDate: '',
        bio: '',
        social: {}
    },
    { 
        id: 'nemo',
        name: 'Nemo', 
        image: 'https://via.placeholder.com/200/001a8c/ffffff?text=Nemo',
        status: 'Основной состав',
        joinDate: '',
        bio: '',
        social: {}
    },
    { 
        id: 'anonym8',
        name: 'Anonym8', 
        image: 'https://via.placeholder.com/200/320063/ffffff?text=Anon',
        status: 'Основной состав',
        joinDate: '',
        bio: '',
        social: {}
    },
    { 
        id: 'atari',
        name: 'Atari', 
        image: 'https://via.placeholder.com/200/4a0072/ffffff?text=Atari',
        status: 'Основной состав',
        joinDate: '',
        bio: '',
        social: {}
    },
    { 
        id: 'mindal',
        name: 'Миндаль', 
        image: 'https://via.placeholder.com/200/001a8c/ffffff?text=Миндаль',
        status: 'Основной состав',
        joinDate: '',
        bio: '',
        social: {}
    },
    { 
        id: 'natalya',
        name: 'Наталья Тарасюк', 
        image: 'https://via.placeholder.com/200/320063/ffffff?text=Наталья',
        status: 'Основной состав',
        joinDate: '',
        bio: '',
        social: {}
    },
    { 
        id: 'runi',
        name: 'Руни', 
        image: 'https://via.placeholder.com/200/4a0072/ffffff?text=Руни',
        status: 'Основной состав',
        joinDate: '',
        bio: '',
        social: {}
    },
    { 
        id: 'amaryllis',
        name: 'Amaryllis', 
        image: 'https://via.placeholder.com/200/001a8c/ffffff?text=Ama',
        status: 'Основной состав',
        joinDate: '',
        bio: '',
        social: {}
    },
    { 
        id: 'alex',
        name: 'Алекс Фостер', 
        image: 'https://via.placeholder.com/200/320063/ffffff?text=Алекс',
        status: 'Основной состав',
        joinDate: '',
        bio: '',
        social: {}
    },
    { 
        id: 'spartans',
        name: 'Юный Спартанец', 
        image: 'https://via.placeholder.com/200/4a0072/ffffff?text=Спартанец',
        status: 'Основной состав',
        joinDate: '',
        bio: '',
        social: {}
    },
    { 
        id: 'fury',
        name: 'Fury', 
        image: 'https://via.placeholder.com/200/001a8c/ffffff?text=Fury',
        status: 'Основной состав',
        joinDate: '',
        bio: '',
        social: {}
    },
    { 
        id: 'titch',
        name: 'Titch', 
        image: 'https://via.placeholder.com/200/320063/ffffff?text=Titch',
        status: 'Основной состав',
        joinDate: '',
        bio: '',
        social: {}
    },
    { 
        id: 'sakura',
        name: 'Sakura Hashimoto', 
        image: 'https://via.placeholder.com/200/4a0072/ffffff?text=Sakura',
        status: 'Основной состав',
        joinDate: '',
        bio: '',
        social: {}
    },
    { 
        id: 'mays',
        name: 'Майс', 
        image: 'https://via.placeholder.com/200/001a8c/ffffff?text=Майс',
        status: 'Основной состав',
        joinDate: '',
        bio: '',
        social: {}
    },
    { 
        id: 'kolli',
        name: 'Kolli', 
        image: 'https://via.placeholder.com/200/320063/ffffff?text=Kolli',
        status: 'Основной состав',
        joinDate: '',
        bio: '',
        social: {}
    },
    { 
        id: 'persik',
        name: 'Persik', 
        image: 'https://via.placeholder.com/200/4a0072/ffffff?text=Persik',
        status: 'Основной состав',
        joinDate: '',
        bio: '',
        social: {}
    },
    
    // ===== ДОПОЛНИТЕЛЬНЫЙ СОСТАВ (25 человек) =====
    { 
        id: 'enineke',
        name: 'Enineke', 
        image: 'https://via.placeholder.com/200/666666/ffffff?text=Eni',
        status: 'Доп. состав',
        joinDate: '',
        bio: '',
        social: {}
    },
    { 
        id: 'traxyn',
        name: 'Traxyn', 
        image: 'https://via.placeholder.com/200/555555/ffffff?text=Trax',
        status: 'Доп. состав',
        joinDate: '',
        bio: '',
        social: {}
    },
    { 
        id: 'tut_hini',
        name: 'tut_Hini', 
        image: 'https://via.placeholder.com/200/444444/ffffff?text=Hini',
        status: 'Доп. состав',
        joinDate: '',
        bio: '',
        social: {}
    },
    { 
        id: 'denis',
        name: 'Денис Груздов', 
        image: 'https://via.placeholder.com/200/333333/ffffff?text=Груздов',
        status: 'Доп. состав',
        joinDate: '',
        bio: '',
        social: {}
    },
    { 
        id: 'tushkan',
        name: 'Тушканчик', 
        image: 'https://via.placeholder.com/200/666666/ffffff?text=Тушкан',
        status: 'Доп. состав',
        joinDate: '',
        bio: '',
        social: {}
    },
    { 
        id: 'chep',
        name: 'chep', 
        image: 'https://via.placeholder.com/200/001a8c/ffffff?text=chep',
        status: 'Доп. состав',
        joinDate: '',
        bio: '',
        social: {}
    },
    { 
        id: 'juri',
        name: 'Juri', 
        image: 'https://via.placeholder.com/200/555555/ffffff?text=Juri',
        status: 'Доп. состав',
        joinDate: '',
        bio: '',
        social: {}
    },
    { 
        id: 'doza_narkoza',
        name: 'Doza_Narkoza', 
        image: 'https://via.placeholder.com/200/444444/ffffff?text=Doza',
        status: 'Доп. состав',
        joinDate: '',
        bio: '',
        social: {}
    },
    { 
        id: 'penek',
        name: 'Пенёк', 
        image: 'https://via.placeholder.com/200/333333/ffffff?text=Пенёк',
        status: 'Доп. состав',
        joinDate: '',
        bio: '',
        social: {}
    },
    { 
        id: 'sirius',
        name: 'Sirius', 
        image: 'https://via.placeholder.com/200/666666/ffffff?text=Sirius',
        status: 'Доп. состав',
        joinDate: '',
        bio: '',
        social: {}
    },
    { 
        id: 'general_bibizyan',
        name: 'Генерал Бибизян', 
        image: 'https://via.placeholder.com/200/555555/ffffff?text=Бибизян',
        status: 'Доп. состав',
        joinDate: '',
        bio: '',
        social: {}
    },
    { 
        id: 'parz',
        name: 'Parz', 
        image: 'https://via.placeholder.com/200/444444/ffffff?text=Parz',
        status: 'Доп. состав',
        joinDate: '',
        bio: '',
        social: {}
    },
    { 
        id: 'evangeline',
        name: 'Evangeline', 
        image: 'https://via.placeholder.com/200/333333/ffffff?text=Eva',
        status: 'Доп. состав',
        joinDate: '',
        bio: '',
        social: {}
    },
    { 
        id: 'redmonox',
        name: 'Redmonox', 
        image: 'https://via.placeholder.com/200/666666/ffffff?text=Red',
        status: 'Доп. состав',
        joinDate: '',
        bio: '',
        social: {}
    },
    { 
        id: 'hina',
        name: 'Hina', 
        image: 'https://via.placeholder.com/200/555555/ffffff?text=Hina',
        status: 'Доп. состав',
        joinDate: '',
        bio: '',
        social: {}
    },
    { 
        id: 'lumin',
        name: 'Люмин', 
        image: 'https://via.placeholder.com/200/444444/ffffff?text=Люмин',
        status: 'Доп. состав',
        joinDate: '',
        bio: '',
        social: {}
    },
    { 
        id: 'femchik',
        name: 'Фемчик', 
        image: 'https://via.placeholder.com/200/333333/ffffff?text=Фемчик',
        status: 'Доп. состав',
        joinDate: '',
        bio: '',
        social: {}
    },
    { 
        id: 'if',
        name: 'Иф', 
        image: 'https://via.placeholder.com/200/666666/ffffff?text=Иф',
        status: 'Доп. состав',
        joinDate: '',
        bio: '',
        social: {}
    },
    { 
        id: 'akva',
        name: 'Akva', 
        image: 'https://via.placeholder.com/200/555555/ffffff?text=Akva',
        status: 'Доп. состав',
        joinDate: '',
        bio: '',
        social: {}
    },
    { 
        id: 'dizzel',
        name: 'Dizzel', 
        image: 'https://via.placeholder.com/200/444444/ffffff?text=Dizzel',
        status: 'Доп. состав',
        joinDate: '',
        bio: '',
        social: {}
    },
    { 
        id: 'kr9k',
        name: 'Kr9k', 
        image: 'https://via.placeholder.com/200/333333/ffffff?text=Kr9k',
        status: 'Доп. состав',
        joinDate: '',
        bio: '',
        social: {}
    },
    { 
        id: 'takoto',
        name: 'Takoto', 
        image: 'https://via.placeholder.com/200/666666/ffffff?text=Takoto',
        status: 'Доп. состав',
        joinDate: '',
        bio: '',
        social: {}
    },
    { 
        id: 'never',
        name: 'Never', 
        image: 'https://via.placeholder.com/200/555555/ffffff?text=Never',
        status: 'Доп. состав',
        joinDate: '',
        bio: '',
        social: {}
    },
    { 
        id: 'sabal',
        name: 'Sabal', 
        image: 'https://via.placeholder.com/200/444444/ffffff?text=Sabal',
        status: 'Доп. состав',
        joinDate: '',
        bio: '',
        social: {}
    },
    { 
        id: 'zheka',
        name: 'Жека', 
        image: 'https://via.placeholder.com/200/333333/ffffff?text=Жека',
        status: 'Доп. состав',
        joinDate: '',
        bio: '',
        social: {}
    }
];

// ========== РОЛИ (СВЯЗЬ ДАББЕРОВ С ТАЙТЛАМИ) ==========
const rolesDatabase = [
    // ===== МОЛЧАЛИВАЯ ВЕДЬМА =====
    // Главные роли
    { titleId: 'molchalivaya_vedma', voiceId: 'miki-angel', character: '', characterImage: 'https://via.placeholder.com/150/001a8c/ffffff?text=角色', episodes: '', type: 'main' },
    { titleId: 'molchalivaya_vedma', voiceId: 'raskolnikov', character: '', characterImage: 'https://via.placeholder.com/150/320063/ffffff?text=角色', episodes: '', type: 'main' },
    { titleId: 'molchalivaya_vedma', voiceId: 'dnt', character: '', characterImage: 'https://via.placeholder.com/150/4a0072/ffffff?text=角色', episodes: '', type: 'main' },
    { titleId: 'molchalivaya_vedma', voiceId: 'nemo', character: '', characterImage: 'https://via.placeholder.com/150/666666/ffffff?text=角色', episodes: '', type: 'recurring' },
    
    // Второстепенные роли
    { titleId: 'molchalivaya_vedma', voiceId: 'atari', character: '', episodes: '', type: 'supporting' },
    { titleId: 'molchalivaya_vedma', voiceId: 'mindal', character: '', episodes: '', type: 'supporting' },
    { titleId: 'molchalivaya_vedma', voiceId: 'natalya', character: '', episodes: '', type: 'supporting' },
    { titleId: 'molchalivaya_vedma', voiceId: 'runi', character: '', episodes: '', type: 'supporting' },
    { titleId: 'molchalivaya_vedma', voiceId: 'amaryllis', character: '', episodes: '', type: 'supporting' },
    { titleId: 'molchalivaya_vedma', voiceId: 'alex', character: '', episodes: '', type: 'supporting' },
    { titleId: 'molchalivaya_vedma', voiceId: 'spartans', character: '', episodes: '', type: 'supporting' },
    { titleId: 'molchalivaya_vedma', voiceId: 'fury', character: '', episodes: '', type: 'supporting' },
    { titleId: 'molchalivaya_vedma', voiceId: 'titch', character: '', episodes: '', type: 'supporting' },
    
    // Эпизодические роли
    { titleId: 'molchalivaya_vedma', voiceId: 'sakura', character: '', episodes: '', type: 'guest' },
    { titleId: 'molchalivaya_vedma', voiceId: 'mays', character: '', episodes: '', type: 'guest' },
    { titleId: 'molchalivaya_vedma', voiceId: 'kolli', character: '', episodes: '', type: 'guest' },
    { titleId: 'molchalivaya_vedma', voiceId: 'persik', character: '', episodes: '', type: 'guest' },
    { titleId: 'molchalivaya_vedma', voiceId: 'chep', character: '', episodes: '', type: 'guest' },
    
    // Доп. состав в эпизодических ролях
    { titleId: 'molchalivaya_vedma', voiceId: 'enineke', character: '', episodes: '', type: 'guest' },
    { titleId: 'molchalivaya_vedma', voiceId: 'traxyn', character: '', episodes: '', type: 'guest' },
    { titleId: 'molchalivaya_vedma', voiceId: 'tut_hini', character: '', episodes: '', type: 'guest' },
    { titleId: 'molchalivaya_vedma', voiceId: 'denis', character: '', episodes: '', type: 'guest' },
    { titleId: 'molchalivaya_vedma', voiceId: 'tushkan', character: '', episodes: '', type: 'guest' },
    { titleId: 'molchalivaya_vedma', voiceId: 'juri', character: '', episodes: '', type: 'guest' },
    { titleId: 'molchalivaya_vedma', voiceId: 'doza_narkoza', character: '', episodes: '', type: 'guest' },
    { titleId: 'molchalivaya_vedma', voiceId: 'penek', character: '', episodes: '', type: 'guest' },
    { titleId: 'molchalivaya_vedma', voiceId: 'sirius', character: '', episodes: '', type: 'guest' },
    { titleId: 'molchalivaya_vedma', voiceId: 'general_bibizyan', character: '', episodes: '', type: 'guest' },
    { titleId: 'molchalivaya_vedma', voiceId: 'parz', character: '', episodes: '', type: 'guest' },
    { titleId: 'molchalivaya_vedma', voiceId: 'evangeline', character: '', episodes: '', type: 'guest' },
    { titleId: 'molchalivaya_vedma', voiceId: 'redmonox', character: '', episodes: '', type: 'guest' },
    { titleId: 'molchalivaya_vedma', voiceId: 'hina', character: '', episodes: '', type: 'guest' },
    { titleId: 'molchalivaya_vedma', voiceId: 'lumin', character: '', episodes: '', type: 'guest' },
    { titleId: 'molchalivaya_vedma', voiceId: 'femchik', character: '', episodes: '', type: 'guest' },
    { titleId: 'molchalivaya_vedma', voiceId: 'if', character: '', episodes: '', type: 'guest' },
    { titleId: 'molchalivaya_vedma', voiceId: 'akva', character: '', episodes: '', type: 'guest' },
    { titleId: 'molchalivaya_vedma', voiceId: 'dizzel', character: '', episodes: '', type: 'guest' },
    { titleId: 'molchalivaya_vedma', voiceId: 'kr9k', character: '', episodes: '', type: 'guest' },
    { titleId: 'molchalivaya_vedma', voiceId: 'takoto', character: '', episodes: '', type: 'guest' },
    { titleId: 'molchalivaya_vedma', voiceId: 'never', character: '', episodes: '', type: 'guest' },
    { titleId: 'molchalivaya_vedma', voiceId: 'sabal', character: '', episodes: '', type: 'guest' },
    { titleId: 'molchalivaya_vedma', voiceId: 'zheka', character: '', episodes: '', type: 'guest' },
    
];

// ========== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ==========

/**
 * Получить даббера по ID
 * @param {string} id - ID даббера
 * @returns {object|null} - Объект даббера или null
 */
function getVoiceById(id) {
    return voicesDatabase.find(v => v.id === id) || null;
}

/**
 * Получить даббера по имени
 * @param {string} name - Имя даббера
 * @returns {object|null} - Объект даббера или null
 */
function getVoiceByName(name) {
    return voicesDatabase.find(v => v.name === name) || null;
}

/**
 * Получить все роли даббера
 * @param {string} voiceId - ID даббера
 * @returns {array} - Массив ролей
 */
function getRolesByVoiceId(voiceId) {
    return rolesDatabase.filter(r => r.voiceId === voiceId);
}

/**
 * Получить все тайтлы, в которых участвовал даббер
 * @param {string} voiceId - ID даббера
 * @returns {array} - Массив тайтлов с ролями
 */
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

/**
 * Получить всех дабберов для тайтла
 * @param {string} titleId - ID тайтла
 * @returns {array} - Массив дабберов с ролями
 */
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

/**
 * Сгруппировать роли по типу
 * @param {array} roles - Массив ролей
 * @returns {object} - Объект с分组ами
 */
function groupRolesByType(roles) {
    return {
        main: roles.filter(r => r.type === 'main'),
        recurring: roles.filter(r => r.type === 'recurring'),
        supporting: roles.filter(r => r.type === 'supporting'),
        guest: roles.filter(r => r.type === 'guest')
    };
}

/**
 * Получить статистику по дабберу
 * @param {string} voiceId - ID даббера
 * @returns {object} - Статистика
 */
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

/**
 * Поиск по базе данных
 * @param {string} query - Поисковый запрос
 * @returns {object} - Результаты поиска
 */
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