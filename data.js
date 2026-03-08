// data.js - База данных с Firebase

// Загружаем начальные данные
async function initializeData() {
    try {
        const [titles, voices, roles] = await Promise.all([
            window.firebase.loadTitlesFromFirebase(),
            window.firebase.loadVoicesFromFirebase(),
            window.firebase.loadRolesFromFirebase()
        ]);
        
        window.titlesDatabase = titles.length ? titles : [];
        window.voicesDatabase = voices.length ? voices : [];
        window.rolesDatabase = roles.length ? roles : [];
        
        console.log('Данные загружены из Firebase');
    } catch (error) {
        console.error('Ошибка загрузки из Firebase:', error);
        // Если ошибка, используем локальные данные как запасной вариант
        window.titlesDatabase = window.titlesDatabase || [];
        window.voicesDatabase = window.voicesDatabase || [];
        window.rolesDatabase = window.rolesDatabase || [];
    }
}

// Запускаем загрузку
initializeData();

// ========== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ==========

function getVoiceById(id) {
    return window.voicesDatabase.find(v => v.id === id) || null;
}

function getVoiceByName(name) {
    return window.voicesDatabase.find(v => v.name === name) || null;
}

function getRolesByVoiceId(voiceId) {
    return window.rolesDatabase.filter(r => r.voiceId === voiceId);
}

function getTitlesByVoiceId(voiceId) {
    const roles = getRolesByVoiceId(voiceId);
    const titleIds = [...new Set(roles.map(r => r.titleId))];
    
    return titleIds.map(titleId => {
        const title = window.titlesDatabase.find(t => t.id === titleId);
        const voiceRoles = roles.filter(r => r.titleId === titleId);
        return {
            ...title,
            roles: voiceRoles
        };
    }).filter(t => t);
}

function getVoicesByTitleId(titleId) {
    const roles = window.rolesDatabase.filter(r => r.titleId === titleId);
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

function searchDatabase(query) {
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
}

// Экспортируем
window.getVoiceById = getVoiceById;
window.getVoiceByName = getVoiceByName;
window.getRolesByVoiceId = getRolesByVoiceId;
window.getTitlesByVoiceId = getTitlesByVoiceId;
window.getVoicesByTitleId = getVoicesByTitleId;
window.groupRolesByType = groupRolesByType;
window.getVoiceStats = getVoiceStats;
window.searchDatabase = searchDatabase;