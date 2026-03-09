// data.js - База данных сайта VAT

// ===== НАЧАЛЬНЫЕ ДАННЫЕ (ЗАГЛУШКИ) =====
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
    { id: 'mindal', name: 'Миндаль', image: 'ава-mindal.jpg', status: 'Основной состав', bio: '' },
    { id: 'fury', name: 'Fury', image: 'ава-fury.jpg', status: 'Основной состав', bio: '' },
    { id: 'sakura', name: 'Sakura Hashimoto', image: 'ава-sakura.jpg', status: 'Основной состав', bio: '' },
    { id: 'mays', name: 'Майс', image: 'ава-mays.jpg', status: 'Основной состав', bio: '' }
];

const initialRoles = [
    { titleId: 'molchalivaya_vedma', voiceId: 'mindal', character: 'Моника Эверетт', type: 'main' },
    { titleId: 'molchalivaya_vedma', voiceId: 'dnt', character: 'Феликс Арк Ридилл', type: 'main' },
    { titleId: 'molchalivaya_vedma', voiceId: 'raskolnikov', character: 'Неро', type: 'main' },
    { titleId: 'molchalivaya_vedma', voiceId: 'raskolnikov', character: 'Сирил Эшли', type: 'support' },
    { titleId: 'molchalivaya_vedma', voiceId: 'fury', character: 'Луис Миллер', type: 'support' },
    { titleId: 'molchalivaya_vedma', voiceId: 'sakura', character: 'Ринзбельфид', type: 'support' },
    { titleId: 'molchalivaya_vedma', voiceId: 'nemo', character: 'Эллиотт Говард', type: 'support' },
    { titleId: 'molchalivaya_vedma', voiceId: 'mays', character: 'Избель Нортон', type: 'support' },
    { titleId: 'molchalivaya_vedma', voiceId: 'miki-angel', character: 'Лана Колетт', type: 'support' }
];

// ===== ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ =====
window.titlesDatabase = [];
window.voicesDatabase = [];
window.rolesDatabase = [];

// ===== ЗАГРУЗКА ДАННЫХ =====
async function loadData() {
    console.log('🔄 Загрузка данных...');
    
    try {
        // Пробуем загрузить из Firebase
        if (window.firebase) {
            console.log('📡 Подключение к Firebase...');
            
            const [titles, voices, roles] = await Promise.all([
                window.firebase.loadTitles().catch(e => {
                    console.warn('Не удалось загрузить тайтлы:', e);
                    return [];
                }),
                window.firebase.loadVoices().catch(e => {
                    console.warn('Не удалось загрузить дабберов:', e);
                    return [];
                }),
                window.firebase.loadRoles().catch(e => {
                    console.warn('Не удалось загрузить роли:', e);
                    return [];
                })
            ]);
            
            window.titlesDatabase = titles.length ? titles : initialTitles;
            window.voicesDatabase = voices.length ? voices : initialVoices;
            window.rolesDatabase = roles.length ? roles : initialRoles;
            
            console.log(`✅ Загружено: ${window.titlesDatabase.length} тайтлов, ${window.voicesDatabase.length} дабберов, ${window.rolesDatabase.length} ролей`);
        } else {
            // Firebase не подключён, используем локальные данные
            console.log('⚠️ Firebase не найден, используются локальные данные');
            window.titlesDatabase = [...initialTitles];
            window.voicesDatabase = [...initialVoices];
            window.rolesDatabase = [...initialRoles];
        }
    } catch (error) {
        console.error('❌ Ошибка загрузки данных:', error);
        window.titlesDatabase = [...initialTitles];
        window.voicesDatabase = [...initialVoices];
        window.rolesDatabase = [...initialRoles];
    }
    
    // Кешируем в localStorage
    try {
        localStorage.setItem('vat_titles', JSON.stringify(window.titlesDatabase));
        localStorage.setItem('vat_voices', JSON.stringify(window.voicesDatabase));
        localStorage.setItem('vat_roles', JSON.stringify(window.rolesDatabase));
    } catch (e) {
        console.warn('Не удалось сохранить в localStorage:', e);
    }
}

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

window.getRolesByTitleId = function(titleId) {
    return window.rolesDatabase.filter(r => r.titleId === titleId);
};

window.getVoicesByTitleId = function(titleId) {
    const roles = window.getRolesByTitleId(titleId);
    const voiceIds = [...new Set(roles.map(r => r.voiceId))];
    
    return voiceIds.map(voiceId => {
        const voice = window.getVoiceById(voiceId);
        const voiceRoles = roles.filter(r => r.voiceId === voiceId);
        return voice ? { ...voice, roles: voiceRoles } : null;
    }).filter(v => v);
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

// ===== ЗАПУСК ЗАГРУЗКИ =====
loadData();

// Экспорт
window.VATData = {
    getVoiceById: window.getVoiceById,
    getVoiceByName: window.getVoiceByName,
    getRolesByVoiceId: window.getRolesByVoiceId,
    getTitlesByVoiceId: window.getTitlesByVoiceId,
    getRolesByTitleId: window.getRolesByTitleId,
    getVoicesByTitleId: window.getVoicesByTitleId,
    searchDatabase: window.searchDatabase
};