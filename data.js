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
        image: 'ава-miki.jpg',
        status: 'Основной состав',
        joinDate: '2023',
        bio: '',
        social: {}
    },
    { 
        id: 'raskolnikov',
        name: 'Раскольников', 
        image: 'ава-raskolnikov.jpg',
        status: 'Основной состав',
        joinDate: '2024',
        bio: '',
        social: {}
    },
    { 
        id: 'dnt',
        name: 'DNT', 
        image: 'ава-dnt.jpg',
        status: 'Основной состав',
        joinDate: '2025',
        bio: '',
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
        joinDate: '',
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
        image: 'https://via.placeholder.com/200/320063/ffffff?text=Наталья',
        status: 'Основной состав',
        joinDate: '',
        bio: '',
        social: {}
    },
    { 
        id: 'runi',
        name: 'Руни', 
        image: 'ава-runi.jpg',
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
        image: 'ава-alex.jpg',
        status: 'Основной состав',
        joinDate: '',
        bio: '',
        social: {}
    },
    { 
        id: 'spartans',
        name: 'Юный Спартанец', 
        image: 'ава-spart.jpg',
        status: 'Основной состав',
        joinDate: '',
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
        image: 'https://via.placeholder.com/200/320063/ffffff?text=Titch',
        status: 'Основной состав',
        joinDate: '',
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
        image: 'https://via.placeholder.com/200/001a8c/ffffff?text=Майс',
        status: 'Основной состав',
        joinDate: '2025',
        bio: '',
        social: {}
    },
    { 
        id: 'kolli',
        name: 'Kolli', 
        image: 'ава-kolli.jpg',
        status: 'Основной состав',
        joinDate: '',
        bio: '',
        social: {}
    },
    { 
        id: 'persik',
        name: 'Persik', 
        image: 'ава-persik.jpg',
        status: 'Основной состав',
        joinDate: '',
        bio: '',
        social: {}
    },
    
    // ===== ДОПОЛНИТЕЛЬНЫЙ СОСТАВ (25 человек) =====
    { 
        id: 'enineke',
        name: 'Enineke', 
        image: 'ава-enineke.jpg',
        status: 'Доп. состав',
        joinDate: '',
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
        image: 'https://via.placeholder.com/200/333333/ffffff?text=Груздов',
        status: 'Доп. состав',
        joinDate: '',
        bio: '',
        social: {}
    },
    { 
        id: 'tushkan',
        name: 'Тушканчик', 
        image: 'ава-tuchkan.jpg',
        status: 'Доп. состав',
        joinDate: '',
        bio: '',
        social: {}
    },
    { 
        id: 'chep',
        name: 'chep', 
        image: 'ава-chep.jpg',
        status: 'Доп. состав',
        joinDate: '2026',
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
        image: 'ава-sirius.jpg',
        status: 'Доп. состав',
        joinDate: '',
        bio: '',
        social: {}
    },
    { 
        id: 'general_bibizyan',
        name: 'Генерал Бибизян', 
        image: 'ава-general.jpg',
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
        image: 'ава-evangeline.jpg',
        status: 'Доп. состав',
        joinDate: '',
        bio: '',
        social: {}
    },
    { 
        id: 'redmonox',
        name: 'Redmonox', 
        image: 'ава-redmonox.jpg',
        status: 'Доп. состав',
        joinDate: '',
        bio: '',
        social: {}
    },
    { 
        id: 'hina',
        name: 'Hina', 
        image: 'ава-tut_hini.jpg',
        status: 'Доп. состав',
        joinDate: '',
        bio: '',
        social: {}
    },
    { 
        id: 'lumin',
        name: 'Люмин', 
        image: 'ава-lumin.jpg',
        status: 'Доп. состав',
        joinDate: '',
        bio: '',
        social: {}
    },
    { 
        id: 'femchik',
        name: 'Фемчик', 
        image: 'ава-фемчик.jpg',
        status: 'Доп. состав',
        joinDate: '',
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
    },
    { 
        id: 'koffess',
        name: 'koffess', 
        image: 'ава-putin.jpg',
        status: 'Доп. состав',
        joinDate: '2026',
        bio: '',
        social: {}
    }
];

// ========== РОЛИ (СВЯЗЬ ДАББЕРОВ С ТАЙТЛАМИ) ==========
const rolesDatabase = [
    // ===== МОЛЧАЛИВАЯ ВЕДЬМА =====
    // Главные роли
    { titleId: 'molchalivaya_vedma', voiceId: 'mindal', character: 'Моника Эверетт', characterImage: 'https://via.placeholder.com/150/001a8c/ffffff?text=角色', episodes: '1-13', type: 'main' },
    { titleId: 'molchalivaya_vedma', voiceId: 'dnt', character: 'Феликс Арк Ридилл', characterImage: 'https://via.placeholder.com/150/320063/ffffff?text=角色', episodes: '1-13', type: 'main' },
    { titleId: 'molchalivaya_vedma', voiceId: 'raskolnikov', character: 'Неро', characterImage: 'https://via.placeholder.com/150/4a0072/ffffff?text=角色', episodes: '1-13', type: 'main' },
    { titleId: 'molchalivaya_vedma', voiceId: 'raskolnikov', character: 'Сирил Эшли', characterImage: 'https://via.placeholder.com/150/666666/ffffff?text=角色', episodes: '1-13', type: 'main' },
    { titleId: 'molchalivaya_vedma', voiceId: 'fury', character: 'Луис Миллер', characterImage: 'https://via.placeholder.com/150/666666/ffffff?text=角色', episodes: '1-5,6-7', type: 'main' },
    { titleId: 'molchalivaya_vedma', voiceId: 'sakura', character: 'Ринзбельфид', characterImage: 'https://via.placeholder.com/150/666666/ffffff?text=角色', episodes: '1,4,7', type: 'main' },
    { titleId: 'molchalivaya_vedma', voiceId: 'nemo', character: 'Эллиотт Говард', characterImage: 'https://via.placeholder.com/150/666666/ffffff?text=角色', episodes: '3-5', type: 'main' },
    { titleId: 'molchalivaya_vedma', voiceId: 'mays', character: 'Изабель Нортон', characterImage: 'https://via.placeholder.com/150/666666/ffffff?text=角色', episodes: '1-4,6-7', type: 'main' },
    { titleId: 'molchalivaya_vedma', voiceId: 'miki-angel', character: 'Лана Колетт', characterImage: 'https://via.placeholder.com/150/666666/ffffff?text=角色', episodes: '2-4,6-7', type: 'main' },
    { titleId: 'molchalivaya_vedma', voiceId: 'traxyn', character: 'Клаудия Эшли', characterImage: 'https://via.placeholder.com/150/666666/ffffff?text=角色', episodes: '6,7', type: 'main' },
    
    // Второстепенные роли
    { titleId: 'molchalivaya_vedma', voiceId: 'titch', character: 'Вильдиан', episodes: '', type: 'supporting' },
    { titleId: 'molchalivaya_vedma', voiceId: 'titch', character: 'Рассказчик', episodes: '', type: 'supporting' },
    { titleId: 'molchalivaya_vedma', voiceId: 'atari', character: 'Агата', episodes: '', type: 'supporting' },
    { titleId: 'molchalivaya_vedma', voiceId: 'miki-angel', character: 'Энни', episodes: '', type: 'supporting' },
    { titleId: 'molchalivaya_vedma', voiceId: 'nemo', character: 'Аарон', episodes: '', type: 'supporting' },
    { titleId: 'molchalivaya_vedma', voiceId: 'femchik', character: 'Сельма', episodes: '', type: 'supporting' },
    { titleId: 'molchalivaya_vedma', voiceId: 'spartans', character: 'Виктор', episodes: '', type: 'supporting' },
    { titleId: 'molchalivaya_vedma', voiceId: 'titch', character: 'Бриджит', episodes: '', type: 'supporting' },
    { titleId: 'molchalivaya_vedma', voiceId: 'titch', character: 'Нил', episodes: '', type: 'supporting' },
    { titleId: 'molchalivaya_vedma', voiceId: 'titch', character: 'Кэролайн', episodes: '', type: 'supporting' },
    { titleId: 'molchalivaya_vedma', voiceId: 'titch', character: 'Профессор Уильям', episodes: '', type: 'supporting' },
    { titleId: 'molchalivaya_vedma', voiceId: 'titch', character: 'Учитель Войд', episodes: '', type: 'supporting' },
    { titleId: 'molchalivaya_vedma', voiceId: 'titch', character: 'Кейси', episodes: '', type: 'supporting' },
    { titleId: 'molchalivaya_vedma', voiceId: 'titch', character: 'Глен', episodes: '', type: 'supporting' },
    
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