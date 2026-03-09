// data.js - База данных сайта VAT

// ===== НАЧАЛЬНЫЕ ДАННЫЕ =====
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
            
            // Если данные есть, используем их
            if (titles && titles.length > 0) {
                window.titlesDatabase = titles;
                console.log(`✅ Загружено ${titles.length} тайтлов из Firebase`);
            } else {
                window.titlesDatabase = [...initialTitles];
                console.log('📁 Используются локальные тайтлы');
            }
            
            if (voices && voices.length > 0) {
                window.voicesDatabase = voices;
                console.log(`✅ Загружено ${voices.length} дабберов из Firebase`);
            } else {
                window.voicesDatabase = [...initialVoices];
                console.log('📁 Используются локальные дабберы');
            }
            
            if (roles && roles.length > 0) {
                window.rolesDatabase = roles;
                console.log(`✅ Загружено ${roles.length} ролей из Firebase`);
            } else {
                window.rolesDatabase = [...initialRoles];
                console.log('📁 Используются локальные роли');
            }
        } else {
            // Firebase не подключён, используем локальные данные
            console.log('⚠️ Firebase не найден, используются локальные данные');
            window.titlesDatabase = [...initialTitles];
            window.voicesDatabase = [...initialVoices];
            window.rolesDatabase = [...initialRoles];
        }
    } catch (error) {
        console.error('❌ Ошибка загрузки данных:', error);
        // В случае ошибки используем локальные данные
        window.titlesDatabase = [...initialTitles];
        window.voicesDatabase = [...initialVoices];
        window.rolesDatabase = [...initialRoles];
    }
    
    // Сохраняем в localStorage для кеширования
    try {
        localStorage.setItem('vat_titles', JSON.stringify(window.titlesDatabase));
        localStorage.setItem('vat_voices', JSON.stringify(window.voicesDatabase));
        localStorage.setItem('vat_roles', JSON.stringify(window.rolesDatabase));
    } catch (e) {
        console.warn('Не удалось сохранить в localStorage:', e);
    }
    
    console.log('📊 Итоговая статистика:');
    console.log(`- Тайтлов: ${window.titlesDatabase.length}`);
    console.log(`- Дабберов: ${window.voicesDatabase.length}`);
    console.log(`- Ролей: ${window.rolesDatabase.length}`);
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

// Экспортируем функции
window.VATData = {
    getVoiceById: window.getVoiceById,
    getVoiceByName: window.getVoiceByName,
    getRolesByVoiceId: window.getRolesByVoiceId,
    getTitlesByVoiceId: window.getTitlesByVoiceId,
    getRolesByTitleId: window.getRolesByTitleId,
    getVoicesByTitleId: window.getVoicesByTitleId,
    searchDatabase: window.searchDatabase
};