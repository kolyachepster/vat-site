// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, set, get, child, push, remove, update } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC-LWCtieKF69kWRRY53Snvor_1KGgCY_A",
  authDomain: "vat-site-43783.firebaseapp.com",
  projectId: "vat-site-43783",
  storageBucket: "vat-site-43783.firebasestorage.app",
  messagingSenderId: "987773125200",
  appId: "1:987773125200:web:04cfdc68e320c426090755",
  databaseURL: "https://vat-site-43783-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

console.log('✅ Firebase инициализирован');

// ===== АУТЕНТИФИКАЦИЯ =====
async function register(email, password, name) {
    try {
        // 1. Создаем пользователя в Authentication
        const res = await createUserWithEmailAndPassword(auth, email, password);
        
        // 2. Обновляем профиль (имя)
        await updateProfile(res.user, { displayName: name });
        
        // 3. СОЗДАЕМ ЗАПИСЬ В БАЗЕ ДАННЫХ
        await set(ref(database, 'users/' + res.user.uid), {
            name: name,
            email: email,
            role: 'user',
            achievements: ['newbie'],
            friends: {},
            joinDate: new Date().toISOString().split('T')[0]
        });
        
        return { success: true, user: res.user };
    } catch (error) {
        console.error('Ошибка регистрации:', error);
        return { success: false, error: error.message };
    }
}

async function login(email, password) {
    try {
        const res = await signInWithEmailAndPassword(auth, email, password);
        return { success: true, user: res.user };
    } catch (error) {
        let message = 'Ошибка входа';
        if (error.code === 'auth/user-not-found') message = 'Пользователь не найден';
        if (error.code === 'auth/wrong-password') message = 'Неверный пароль';
        if (error.code === 'auth/invalid-email') message = 'Неверный email';
        return { success: false, error: message };
    }
}

async function logout() {
    await signOut(auth);
    localStorage.removeItem('adminLoggedIn');
}

function getCurrentUser() {
    return auth.currentUser;
}

function isAdminLoggedIn() {
    return auth.currentUser !== null;
}

// ===== РАБОТА С ДАННЫМИ =====
async function loadTitles() {
    try {
        const snapshot = await get(child(ref(database), 'titles'));
        if (snapshot.exists()) {
            const data = snapshot.val();
            return Array.isArray(data) ? data : Object.values(data);
        }
        return [];
    } catch (error) {
        console.error('Ошибка загрузки тайтлов:', error);
        return [];
    }
}

async function loadVoices() {
    try {
        const snapshot = await get(child(ref(database), 'voices'));
        if (snapshot.exists()) {
            const data = snapshot.val();
            return Array.isArray(data) ? data : Object.values(data);
        }
        return [];
    } catch (error) {
        console.error('Ошибка загрузки дабберов:', error);
        return [];
    }
}

async function loadRoles() {
    try {
        const snapshot = await get(child(ref(database), 'roles'));
        if (snapshot.exists()) {
            const data = snapshot.val();
            return Array.isArray(data) ? data : Object.values(data);
        }
        return [];
    } catch (error) {
        console.error('Ошибка загрузки ролей:', error);
        return [];
    }
}

async function saveTitles(data) {
    try {
        await set(ref(database, 'titles'), data);
        return true;
    } catch (error) {
        console.error('Ошибка сохранения тайтлов:', error);
        return false;
    }
}

async function saveVoices(data) {
    try {
        await set(ref(database, 'voices'), data);
        return true;
    } catch (error) {
        console.error('Ошибка сохранения дабберов:', error);
        return false;
    }
}

async function saveRoles(data) {
    try {
        await set(ref(database, 'roles'), data);
        return true;
    } catch (error) {
        console.error('Ошибка сохранения ролей:', error);
        return false;
    }
}

// ===== ПОЛЬЗОВАТЕЛИ =====
async function getUserData(uid) {
    try {
        const snapshot = await get(child(ref(database), `users/${uid}`));
        return snapshot.exists() ? snapshot.val() : null;
    } catch (error) {
        console.error('Ошибка загрузки пользователя:', error);
        return null;
    }
}

// ===== КОММЕНТАРИИ И ОЦЕНКИ =====
async function addComment(titleId, text, rating) {
    if (!auth.currentUser) return { success: false, error: 'Не авторизован' };
    
    try {
        const user = auth.currentUser;
        const userData = await getUserData(user.uid);
        const newRef = push(ref(database, `comments/${titleId}`));
        
        await set(newRef, {
            uid: user.uid,
            name: user.displayName || userData?.name || 'Пользователь',
            text: text,
            rating: rating,
            time: Date.now()
        });
        
        // Даем достижение за первый комментарий
        await grantAchievement(user.uid, 'critic');
        
        return { success: true };
    } catch (error) {
        console.error('Ошибка добавления комментария:', error);
        return { success: false, error: error.message };
    }
}

async function getComments(titleId) {
    try {
        const snapshot = await get(child(ref(database), `comments/${titleId}`));
        if (snapshot.exists()) {
            const data = snapshot.val();
            return Object.values(data).sort((a, b) => b.time - a.time);
        }
        return [];
    } catch (error) {
        console.error('Ошибка загрузки комментариев:', error);
        return [];
    }
}

// ===== ДОСТИЖЕНИЯ =====
async function grantAchievement(uid, achId) {
    try {
        const userRef = ref(database, `users/${uid}/achievements`);
        const snapshot = await get(userRef);
        let list = snapshot.exists() ? snapshot.val() : [];
        
        if (!list.includes(achId)) {
            list.push(achId);
            await set(userRef, list);
        }
    } catch (error) {
        console.error('Ошибка добавления достижения:', error);
    }
}

// ===== ДРУЗЬЯ =====
async function addFriend(friendUid) {
    if (!auth.currentUser) return false;
    
    try {
        await update(ref(database, `users/${auth.currentUser.uid}/friends`), {
            [friendUid]: true
        });
        return true;
    } catch (error) {
        console.error('Ошибка добавления друга:', error);
        return false;
    }
}

async function getFriends(uid) {
    try {
        const snapshot = await get(child(ref(database), `users/${uid}/friends`));
        if (snapshot.exists()) {
            const friendIds = Object.keys(snapshot.val());
            const friends = [];
            
            for (const id of friendIds) {
                const friendData = await getUserData(id);
                if (friendData) {
                    friends.push({ uid: id, ...friendData });
                }
            }
            return friends;
        }
        return [];
    } catch (error) {
        console.error('Ошибка загрузки друзей:', error);
        return [];
    }
}

// ===== АДМИН-ФУНКЦИИ =====
async function loginAdmin(email, password) {
    return login(email, password);
}

// Отслеживание состояния
onAuthStateChanged(auth, (user) => {
    if (user) {
        localStorage.setItem('adminLoggedIn', 'true');
        console.log('✅ Пользователь авторизован:', user.email);
    } else {
        localStorage.removeItem('adminLoggedIn');
        console.log('❌ Пользователь не авторизован');
    }
});

// Экспорт API
const firebaseAPI = {
    // Аутентификация
    register,
    login,
    logout,
    getCurrentUser,
    isAdminLoggedIn,
    loginAdmin,
    
    // Данные
    loadTitles,
    loadVoices,
    loadRoles,
    saveTitles,
    saveVoices,
    saveRoles,
    
    // Пользователи
    getUserData,
    
    // Комментарии
    addComment,
    getComments,
    
    // Достижения
    grantAchievement,
    
    // Друзья
    addFriend,
    getFriends,
    
    // База данных
    database,
    auth
};

window.firebase = firebaseAPI;
export default firebaseAPI;