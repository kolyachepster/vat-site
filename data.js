// data.js - База данных сайта VAT

// ========== НАЧАЛЬНЫЕ ДАННЫЕ ==========
const initialTitles = [
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
        genres: ['Фэнтези', 'Драма', 'Комедия'],
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
        genres: ['Драма', 'Детектив'],
        description: ''
    },
    {
        id: 'hellsing',
        name: 'Хеллсинг',
        nameEng: 'Hellsing',
        image: 'hellsing.jpg',
        type: 'anime',
        seasons: 1,
        episodes: 13,
        year: 2001,
        rating: 4.5,
        genres: ['Экшен', 'Ужасы'],
        description: ''
    }
];

const initialVoices = [
    { id: 'miki-angel', name: 'Miki-angel', image: 'ава-miki.jpg', status: 'Основной состав', joinDate: '2023', bio: 'Основатель', social: { telegram: '@kadrzakadrommikiangel' } },
    { id: 'raskolnikov', name: 'Раскольников', image: 'ава-raskolnikov.jpg', status: 'Основной состав', joinDate: '2024', bio: 'Совладелец', social: {} },
    { id: 'dnt', name: 'DNT', image: 'ава-dnt.jpg', status: 'Основной состав', joinDate: '2025', bio: 'Админ', social: {} },
    { id: 'nemo', name: 'Nemo', image: 'ава-nemo.jpg', status: 'Основной состав', joinDate: '2025', bio: '', social: {} },
    { id: 'atari', name: 'Atari', image: 'ава-atari.jpg', status: 'Основной состав', joinDate: '2025', bio: '', social: {} },
    { id: 'mindal', name: 'Миндаль', image: 'ава-mindal.jpg', status: 'Основной состав', joinDate: '2025', bio: '', social: {} },
    { id: 'natalya', name: 'Наталья Тарасюк', image: 'ава-nat.jpg', status: 'Основной состав', joinDate: '2024', bio: '', social: {} },
    { id: 'runi', name: 'Руни', image: 'ава-runi.jpg', status: 'Основной состав', joinDate: '2025', bio: '', social: {} },
    { id: 'amaryllis', name: 'Amaryllis', image: 'ава-amaryllis.jpg', status: 'Основной состав', joinDate: '2024', bio: '', social: {} },
    { id: 'alex', name: 'Алекс Фостер', image: 'ава-alex.jpg', status: 'Основной состав', joinDate: '2024', bio: '', social: {} },
    { id: 'spartans', name: 'Юный Спартанец', image: 'ава-spart.jpg', status: 'Основной состав', joinDate: '2024', bio: '', social: {} },
    { id: 'fury', name: 'Fury', image: 'ава-fury.jpg', status: 'Основной состав', joinDate: '2025', bio: '', social: {} },
    { id: 'titch', name: 'Titch', image: 'ава-titch.jpg', status: 'Основной состав', joinDate: '2025', bio: '', social: {} },
    { id: 'sakura', name: 'Sakura Hashimoto', image: 'ава-sakura.jpg', status: 'Основной состав', joinDate: '2023', bio: '', social: {} },
    { id: 'mays', name: 'Майс', image: 'ава-mays.jpg', status: 'Основной состав', joinDate: '2025', bio: '', social: {} },
    { id: 'kolli', name: 'Kolli', image: 'ава-kolli.jpg', status: 'Основной состав', joinDate: '2025', bio: '', social: {} },
    { id: 'persik', name: 'Persik', image: 'ава-persik.jpg', status: 'Основной состав', joinDate: '2026', bio: '', social: {} },
    { id: 'enineke', name: 'Enineke', image: 'ава-enineke.jpg', status: 'Доп. состав', joinDate: '2025', bio: '', social: {} },
    { id: 'traxyn', name: 'Traxyn', image: 'ава-traxyn.jpg', status: 'Доп. состав', joinDate: '2025', bio: '', social: {} },
    { id: 'denis', name: 'Денис Груздов', image: 'ава-denis.jpg', status: 'Доп. состав', joinDate: '2024', bio: '', social: {} },
    { id: 'tushkan', name: 'Тушканчик', image: 'ава-tuchkan.jpg', status: 'Доп. состав', joinDate: '2025', bio: '', social: {} },
    { id: 'chep', name: 'chep', image: 'ава-chep.jpg', status: 'Доп. состав', joinDate: '2026', bio: 'Разработчик', social: {} },
    { id: 'juri', name: 'Juri', image: 'ава-jury.jpg', status: 'Доп. состав', joinDate: '2025', bio: '', social: {} },
    { id: 'doza_narkoza', name: 'Doza_Narkoza', image: 'ава-doza.jpg', status: 'Доп. состав', joinDate: '2025', bio: '', social: {} },
    { id: 'penek', name: 'Пенёк', image: 'ава-penek.jpg', status: 'Доп. состав', joinDate: '2024', bio: '', social: {} },
    { id: 'sirius', name: 'Sirius', image: 'ава-sirius.jpg', status: 'Доп. состав', joinDate: '2026', bio: '', social: {} },
    { id: 'general_bibizyan', name: 'Генерал Бибизян', image: 'ава-general.jpg', status: 'Доп. состав', joinDate: '2025', bio: '', social: {} },
    { id: 'parz', name: 'Parz', image: 'ава-parz.jpg', status: 'Доп. состав', joinDate: '2026', bio: '', social: {} },
    { id: 'evangeline', name: 'Evangeline', image: 'ава-evangeline.jpg', status: 'Доп. состав', joinDate: '2024', bio: '', social: {} },
    { id: 'redmonox', name: 'Redmonox', image: 'ава-redmonox.jpg', status: 'Доп. состав', joinDate: '2026', bio: '', social: {} },
    { id: 'hina', name: 'Hina', image: 'ава-tut_hini.jpg', status: 'Доп. состав', joinDate: '2025', bio: '', social: { telegram: 'hiniverse' } },
    { id: 'lumin', name: 'Люмин', image: 'ава-lumin.jpg', status: 'Доп. состав', joinDate: '2026', bio: '', social: {} },
    { id: 'femchik', name: 'Фемчик', image: 'ава-фемчик.jpg', status: 'Доп. состав', joinDate: '2025', bio: '', social: {} },
    { id: 'if', name: 'Иф', image: 'ава-if.jpg', status: 'Доп. состав', joinDate: '2026', bio: '', social: {} },
    { id: 'akva', name: 'Akva', image: 'ава-akva.jpg', status: 'Доп. состав', joinDate: '2024', bio: '', social: {} },
    { id: 'dizzel', name: 'Dizzel', image: 'ава-dizzel.jpg', status: 'Доп. состав', joinDate: '2026', bio: '', social: {} },
    { id: 'kr9k', name: 'Kr9k', image: 'ава-kr9k.jpg', status: 'Доп. состав', joinDate: '2026', bio: '', social: {} },
    { id: 'takoto', name: 'Takoto', image: 'ава-takoto.jpg', status: 'Доп. состав', joinDate: '2026', bio: '', social: {} },
    { id: 'never', name: 'Never', image: 'ава-never.jpg', status: 'Доп. состав', joinDate: '2026', bio: '', social: {} },
    { id: 'sabal', name: 'Sabal', image: 'ава-sabal.jpg', status: 'Доп. состав', joinDate: '2025', bio: '', social: {} },
    { id: 'zheka', name: 'Жека', image: 'ава-zheka.jpg', status: 'Доп. состав', joinDate: '2025', bio: '', social: {} },
    { id: 'koffess', name: 'koffess', image: 'ава-putin.jpg', status: 'Доп. состав', joinDate: '2026', bio: '', social: {} },
    { id: 'actorssss', name: 'ActoRsssS', image: 'ава-actorssss.jpg', status: 'Доп. состав', joinDate: '2026', bio: '', social: {} },
    { id: 'mary', name: 'Mary', image: 'ава-mary.jpg', status: 'Доп. состав', joinDate: '2025', bio: '', social: {} },
    { id: 'rayko', name: 'Rayko', image: 'ава-rayko.jpg', status: 'Доп. состав', joinDate: '2025', bio: '', social: {} }
];

const initialRoles = [
    { titleId: 'molchalivaya_vedma', voiceId: 'mindal', character: 'Моника Эверетт', type: 'main', episodes: '1-13' },
    { titleId: 'molchalivaya_vedma', voiceId: 'dnt', character: 'Феликс Арк Ридилл', type: 'main', episodes: '1-13' },
    { titleId: 'molchalivaya_vedma', voiceId: 'raskolnikov', character: 'Неро', type: 'main', episodes: '1-13' },
    { titleId: 'molchalivaya_vedma', voiceId: 'raskolnikov', character: 'Сирил Эшли', type: 'main', episodes: '1-13' },
    { titleId: 'molchalivaya_vedma', voiceId: 'fury', character: 'Луис Миллер', type: 'main', episodes: '1-7' },
    { titleId: 'molchalivaya_vedma', voiceId: 'sakura', character: 'Ринзбельфид', type: 'main', episodes: '1,4,7' },
    { titleId: 'molchalivaya_vedma', voiceId: 'nemo', character: 'Эллиотт Говард', type: 'main', episodes: '3-5' },
    { titleId: 'molchalivaya_vedma', voiceId: 'mays', character: 'Изабель Нортон', type: 'main', episodes: '1-7' },
    { titleId: 'molchalivaya_vedma', voiceId: 'miki-angel', character: 'Лана Колетт', type: 'main', episodes: '2-7' },
    { titleId: 'molchalivaya_vedma', voiceId: 'traxyn', character: 'Клаудия Эшли', type: 'main', episodes: '6-7' }
];

// ========== ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ ==========
window.titlesDatabase = [];
window.voicesDatabase = [];
window.rolesDatabase = [];

// ========== ЗАГРУЗКА ДАННЫХ ==========
async function loadData() {
    try {
        if (window.firebase) {
            const [titles, voices, roles] = await Promise.all([
                window.firebase.loadTitlesFromFirebase(),
                window.firebase.loadVoicesFromFirebase(),
                window.firebase.loadRolesFromFirebase()
            ]);
            
            window.titlesDatabase = titles.length ? titles : initialTitles;
            window.voicesDatabase = voices.length ? voices : initialVoices;
            window.rolesDatabase = roles.length ? roles : initialRoles;
            
            console.log('✅ Данные загружены из Firebase');
        } else {
            window.titlesDatabase = initialTitles;
            window.voicesDatabase = initialVoices;
            window.rolesDatabase = initialRoles;
            console.log('✅ Используются локальные данные');
        }
    } catch (error) {
        console.error('Ошибка загрузки:', error);
        window.titlesDatabase = initialTitles;
        window.voicesDatabase = initialVoices;
        window.rolesDatabase = initialRoles;
    }
}

// Запускаем загрузку
loadData();

// ========== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ==========
window.getVoiceById = function(id) {
    return window.voicesDatabase.find(v => v.id === id) || null;
};

window.getVoiceByName = function(name) {
    return window.voicesDatabase.find(v => v.name === name) || null;
};

window.getRolesByVoiceId = function(voiceId) {
    return window.rolesDatabase.filter(r => r.voiceId === voiceId);
};

window.getTitlesByVoiceId = function(voiceId) {
    const roles = window.getRolesByVoiceId(voiceId);
    const titleIds = [...new Set(roles.map(r => r.titleId))];
    
    return titleIds.map(titleId => {
        const title = window.titlesDatabase.find(t => t.id === titleId);
        const voiceRoles = roles.filter(r => r.titleId === titleId);
        return title ? { ...title, roles: voiceRoles } : null;
    }).filter(t => t);
};

window.getVoicesByTitleId = function(titleId) {
    const roles = window.rolesDatabase.filter(r => r.titleId === titleId);
    const voiceIds = [...new Set(roles.map(r => r.voiceId))];
    
    return voiceIds.map(voiceId => {
        const voice = window.getVoiceById(voiceId);
        const titleRoles = roles.filter(r => r.voiceId === voiceId);
        return voice ? { ...voice, roles: titleRoles } : null;
    }).filter(v => v);
};

window.searchDatabase = function(query) {
    if (!query) return { titles: [], voices: [] };
    
    const lowerQuery = query.toLowerCase().trim();
    
    const titles = window.titlesDatabase.filter(title => 
        title.name.toLowerCase().includes(lowerQuery) ||
        (title.nameEng && title.nameEng.toLowerCase().includes(lowerQuery))
    );
    
    const voices = window.voicesDatabase.filter(voice => 
        voice.name.toLowerCase().includes(lowerQuery)
    );
    
    return { titles, voices };
};

console.log('✅ data.js загружен');