// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyDEXAMPLEEXAMPLEEXAMPLE",
    authDomain: "yavoy-app.firebaseapp.com",
    projectId: "yavoy-app",
    storageBucket: "yavoy-app.appspot.com",
    messagingSenderId: "1234567890",
    appId: "1:1234567890:web:abcdef1234567890"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Common Functions
function showAlert(message, type = 'success') {
    const alertDiv = document.createElement('div');
    alertDiv.className = `fixed top-4 right-4 p-4 rounded-md shadow-lg ${
        type === 'success' ? 'bg-green-500' : 'bg-red-500'
    } text-white`;
    alertDiv.textContent = message;
    document.body.appendChild(alertDiv);
    setTimeout(() => alertDiv.remove(), 3000);
}

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('button[class*="md:hidden"]');
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            const nav = document.querySelector('nav[class*="md:flex"]');
            nav.classList.toggle('hidden');
            nav.classList.toggle('flex');
            nav.classList.toggle('flex-col');
            nav.classList.toggle('absolute');
            nav.classList.toggle('top-16');
            nav.classList.toggle('right-4');
            nav.classList.toggle('bg-white');
            nav.classList.toggle('p-4');
            nav.classList.toggle('rounded-md');
            nav.classList.toggle('shadow-lg');
        });
    }
});