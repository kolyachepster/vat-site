// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Your web app's Firebase configuration
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

// Для отладки
console.log('Firebase инициализирован:', firebaseConfig.projectId);

// Функции для работы с данными
async function loadTitlesFromFirebase() {
    try {
        const snapshot = await get(child(ref(database), 'titles'));
        if (snapshot.exists()) {
            const data = snapshot.val();
            // Если данные - объект с ключами, преобразуем в массив
            if (typeof data === 'object' && !Array.isArray(data)) {
                return Object.values(data);
            }
            return data;
        }
        return [];
    } catch (error) {
        console.error('Ошибка загрузки тайтлов:', error);
        return [];
    }
}

async function loadVoicesFromFirebase() {
    try {
        const snapshot = await get(child(ref(database), 'voices'));
        if (snapshot.exists()) {
            const data = snapshot.val();
            if (typeof data === 'object' && !Array.isArray(data)) {
                return Object.values(data);
            }
            return data;
        }
        return [];
    } catch (error) {
        console.error('Ошибка загрузки дабберов:', error);
        return [];
    }
}

async function loadRolesFromFirebase() {
    try {
        const snapshot = await get(child(ref(database), 'roles'));
        if (snapshot.exists()) {
            const data = snapshot.val();
            if (typeof data === 'object' && !Array.isArray(data)) {
                return Object.values(data);
            }
            return data;
        }
        return [];
    } catch (error) {
        console.error('Ошибка загрузки ролей:', error);
        return [];
    }
}

async function saveTitlesToFirebase(titles) {
    try {
        await set(ref(database, 'titles'), titles);
        console.log('Тайтлы сохранены');
        return true;
    } catch (error) {
        console.error('Ошибка сохранения:', error);
        return false;
    }
}

async function saveVoicesToFirebase(voices) {
    try {
        await set(ref(database, 'voices'), voices);
        console.log('Дабберы сохранены');
        return true;
    } catch (error) {
        console.error('Ошибка сохранения:', error);
        return false;
    }
}

async function saveRolesToFirebase(roles) {
    try {
        await set(ref(database, 'roles'), roles);
        console.log('Роли сохранены');
        return true;
    } catch (error) {
        console.error('Ошибка сохранения:', error);
        return false;
    }
}

// Аутентификация
async function loginAdmin(email, password) {
    try {
        console.log('Попытка входа:', email);
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log('Успешный вход:', userCredential.user.email);
        return { success: true, user: userCredential.user };
    } catch (error) {
        console.error('Ошибка входа:', error.code, error.message);
        let errorMessage = 'Ошибка входа';
        
        switch(error.code) {
            case 'auth/invalid-email':
                errorMessage = 'Неверный формат email';
                break;
            case 'auth/user-disabled':
                errorMessage = 'Пользователь заблокирован';
                break;
            case 'auth/user-not-found':
                errorMessage = 'Пользователь не найден';
                break;
            case 'auth/wrong-password':
                errorMessage = 'Неверный пароль';
                break;
            case 'auth/too-many-requests':
                errorMessage = 'Слишком много попыток. Попробуйте позже';
                break;
            default:
                errorMessage = error.message;
        }
        
        return { success: false, error: errorMessage };
    }
}

async function logoutAdmin() {
    try {
        await signOut(auth);
        localStorage.removeItem('adminLoggedIn');
        console.log('Выход выполнен');
        return true;
    } catch (error) {
        console.error('Ошибка выхода:', error);
        return false;
    }
}

// Проверка авторизации
function isAdminLoggedIn() {
    return auth.currentUser !== null;
}

// Следим за состоянием авторизации
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log('Пользователь в системе:', user.email);
        localStorage.setItem('adminLoggedIn', 'true');
    } else {
        console.log('Пользователь не в системе');
        localStorage.removeItem('adminLoggedIn');
    }
});

// СОЗДАЁМ ОБЪЕКТ С ВСЕМИ ФУНКЦИЯМИ
const firebaseAPI = {
    loadTitlesFromFirebase,
    loadVoicesFromFirebase,
    loadRolesFromFirebase,
    saveTitlesToFirebase,
    saveVoicesToFirebase,
    saveRolesToFirebase,
    loginAdmin,
    logoutAdmin,
    isAdminLoggedIn
};

// ЭКСПОРТИРУЕМ ПО УМОЛЧАНИЮ (default export)
export default firebaseAPI;

// ТАКЖЕ ЭКСПОРТИРУЕМ КАК ИМЕНОВАННЫЙ ЭКСПОРТ (для обратной совместимости)
export { firebaseAPI as firebase };

// Для глобального доступа (если нужно использовать без модулей)
window.firebase = firebaseAPI;