// data.js - База данных сайта

// Начальные данные (если Firebase пустой)
// В начало файла data.js добавьте эти строки
window.titlesDatabase = [];
window.voicesDatabase = [];
window.rolesDatabase = [];
const initialTitles = [
    { id: 'molchalivaya_vedma', name: 'Молчаливая ведьма', nameEng: 'The Silent Witch', image: 'молч_ведьм.jpg', type: 'anime', seasons: 1, episodes: 13 },
    { id: 'zvezdnoe_ditya', name: 'Звёздное дитя', nameEng: 'Oshi No Ko', image: 'ЗД.png', type: 'anime', seasons: 3, episodes: 35 },
    { id: 'hellsing', name: 'Хеллсинг', nameEng: 'Hellsing', image: 'hellsing.jpg', type: 'anime', seasons: 1, episodes: 13 }
];

const initialVoices = [
    { id: 'miki-angel', name: 'Miki-angel', image: 'ава-miki.jpg', status: 'Основной состав', bio: 'Основатель' },
    { id: 'raskolnikov', name: 'Раскольников', image: 'ава-raskolnikov.jpg', status: 'Основной состав', bio: 'Совладелец' },
    { id: 'dnt', name: 'DNT', image: 'ава-dnt.jpg', status: 'Основной состав', bio: 'Админ' },
    { id: 'nemo', name: 'Nemo', image: 'ава-nemo.jpg', status: 'Основной состав', bio: '' },
    { id: 'atari', name: 'Atari', image: 'ава-atari.jpg', status: 'Основной состав', bio: '' },
    { id: 'mindal', name: 'Миндаль', image: 'ава-mindal.jpg', status: 'Основной состав', bio: '' },
    { id: 'natalya', name: 'Наталья Тарасюк', image: 'ава-nat.jpg', status: 'Основной состав', bio: '' },
    { id: 'runi', name: 'Руни', image: 'ава-runi.jpg', status: 'Основной состав', bio: '' },
    { id: 'amaryllis', name: 'Amaryllis', image: 'ава-amaryllis.jpg', status: 'Основной состав', bio: '' },
    { id: 'alex', name: 'Алекс Фостер', image: 'ава-alex.jpg', status: 'Основной состав', bio: '' },
    { id: 'spartans', name: 'Юный Спартанец', image: 'ава-spart.jpg', status: 'Основной состав', bio: '' },
    { id: 'fury', name: 'Fury', image: 'ава-fury.jpg', status: 'Основной состав', bio: '' },
    { id: 'titch', name: 'Titch', image: 'ава-titch.jpg', status: 'Основной состав', bio: '' },
    { id: 'sakura', name: 'Sakura Hashimoto', image: 'ава-sakura.jpg', status: 'Основной состав', bio: '' },
    { id: 'mays', name: 'Майс', image: 'ава-mays.jpg', status: 'Основной состав', bio: '' },
    { id: 'kolli', name: 'Kolli', image: 'ава-kolli.jpg', status: 'Основной состав', bio: '' },
    { id: 'persik', name: 'Persik', image: 'ава-persik.jpg', status: 'Основной состав', bio: '' }
];

const initialRoles = [
    { titleId: 'molchalivaya_vedma', voiceId: 'mindal', character: 'Моника Эверетт', type: 'main' },
    { titleId: 'molchalivaya_vedma', voiceId: 'dnt', character: 'Феликс Арк Ридилл', type: 'main' },
    { titleId: 'molchalivaya_vedma', voiceId: 'raskolnikov', character: 'Неро', type: 'main' }
];

// Глобальные переменные
window.titlesDatabase = [];
window.voicesDatabase = [];
window.rolesDatabase = [];

// Загрузка данных из Firebase
async function loadData() {
    try {
        if (window.firebase) {
            const [titles, voices, roles] = await Promise.all([
                window.firebase.loadTitles(),
                window.firebase.loadVoices(),
                window.firebase.loadRoles()
            ]);
            
            window.titlesDatabase = titles.length ? titles : initialTitles;
            window.voicesDatabase = voices.length ? voices : initialVoices;
            window.rolesDatabase = roles.length ? roles : initialRoles;
            
            console.log('✅ Данные загружены из Firebase');
        } else {
            window.titlesDatabase = initialTitles;
            window.voicesDatabase = initialVoices;
            window.rolesDatabase = initialRoles;
            console.log('⚠️ Используются локальные данные');
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

// ===== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ =====
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

window.searchDatabase = function(query) {
    if (!query) return { titles: [], voices: [] };
    
    const q = query.toLowerCase().trim();
    const titles = window.titlesDatabase.filter(t => 
        t.name.toLowerCase().includes(q) || (t.nameEng && t.nameEng.toLowerCase().includes(q))
    );
    const voices = window.voicesDatabase.filter(v => 
        v.name.toLowerCase().includes(q)
    );
    
    return { titles, voices };
};