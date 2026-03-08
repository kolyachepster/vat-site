// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, set, get, child, remove, push } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { getAuth, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

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

// Функции для работы с данными
async function loadTitlesFromFirebase() {
    const snapshot = await get(child(ref(database), 'titles'));
    if (snapshot.exists()) {
        return Object.values(snapshot.val());
    }
    return [];
}

async function loadVoicesFromFirebase() {
    const snapshot = await get(child(ref(database), 'voices'));
    if (snapshot.exists()) {
        return Object.values(snapshot.val());
    }
    return [];
}

async function loadRolesFromFirebase() {
    const snapshot = await get(child(ref(database), 'roles'));
    if (snapshot.exists()) {
        return Object.values(snapshot.val());
    }
    return [];
}

async function saveTitlesToFirebase(titles) {
    await set(ref(database, 'titles'), titles);
}

async function saveVoicesToFirebase(voices) {
    await set(ref(database, 'voices'), voices);
}

async function saveRolesToFirebase(roles) {
    await set(ref(database, 'roles'), roles);
}

// Аутентификация
async function loginAdmin(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return { success: true, user: userCredential.user };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

async function logoutAdmin() {
    await signOut(auth);
    localStorage.removeItem('adminLoggedIn');
}

// Проверка авторизации
function isAdminLoggedIn() {
    return auth.currentUser !== null;
}

// Экспортируем
window.firebase = {
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