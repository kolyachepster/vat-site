// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Конфигурация Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC-LWCtieKF69kWRRY53Snvor_1KGgCY_A",
  authDomain: "vat-site-43783.firebaseapp.com",
  projectId: "vat-site-43783",
  storageBucket: "vat-site-43783.firebasestorage.app",
  messagingSenderId: "987773125200",
  appId: "1:987773125200:web:04cfdc68e320c426090755"
};

// Инициализация
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

console.log('✅ Firebase инициализирован');

// ===== ФУНКЦИИ ДЛЯ РАБОТЫ С ДАННЫМИ =====
async function loadTitles() {
    try {
        const snapshot = await get(child(ref(database), 'titles'));
        return snapshot.exists() ? Object.values(snapshot.val()) : [];
    } catch (error) {
        console.error('Ошибка загрузки тайтлов:', error);
        return [];
    }
}

async function loadVoices() {
    try {
        const snapshot = await get(child(ref(database), 'voices'));
        return snapshot.exists() ? Object.values(snapshot.val()) : [];
    } catch (error) {
        console.error('Ошибка загрузки дабберов:', error);
        return [];
    }
}

async function loadRoles() {
    try {
        const snapshot = await get(child(ref(database), 'roles'));
        return snapshot.exists() ? Object.values(snapshot.val()) : [];
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
        console.error('Ошибка сохранения:', error);
        return false;
    }
}

async function saveVoices(data) {
    try {
        await set(ref(database, 'voices'), data);
        return true;
    } catch (error) {
        console.error('Ошибка сохранения:', error);
        return false;
    }
}

async function saveRoles(data) {
    try {
        await set(ref(database, 'roles'), data);
        return true;
    } catch (error) {
        console.error('Ошибка сохранения:', error);
        return false;
    }
}

// ===== АУТЕНТИФИКАЦИЯ =====
async function loginAdmin(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return { success: true, user: userCredential.user };
    } catch (error) {
        let message = 'Ошибка входа';
        if (error.code === 'auth/user-not-found') message = 'Пользователь не найден';
        if (error.code === 'auth/wrong-password') message = 'Неверный пароль';
        if (error.code === 'auth/invalid-email') message = 'Неверный email';
        return { success: false, error: message };
    }
}

async function logoutAdmin() {
    await signOut(auth);
    localStorage.removeItem('adminLoggedIn');
}

function isAdminLoggedIn() {
    return auth.currentUser !== null;
}

// Отслеживание состояния авторизации
onAuthStateChanged(auth, (user) => {
    if (user) {
        localStorage.setItem('adminLoggedIn', 'true');
        console.log('✅ Админ авторизован:', user.email);
    } else {
        localStorage.removeItem('adminLoggedIn');
        console.log('❌ Админ не авторизован');
    }
});

// Экспорт
const firebaseAPI = {
    loadTitles,
    loadVoices,
    loadRoles,
    saveTitles,
    saveVoices,
    saveRoles,
    loginAdmin,
    logoutAdmin,
    isAdminLoggedIn
};

// Делаем доступным глобально
window.firebase = firebaseAPI;

export default firebaseAPI;