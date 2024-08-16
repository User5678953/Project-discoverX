// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI5ehZPT3HH1bVoJ8pFMR-cbyFS2E4fC8",
  authDomain: "discoverx-f0d05.firebaseapp.com",
  projectId: "discoverx-f0d05",
  storageBucket: "discoverx-f0d05.appspot.com",
  messagingSenderId: "222849315203",
  appId: "1:222849315203:web:20d2aad373ccf2ff1486b6",
  measurementId: "G-J6LS0BTB12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export the `db` instance so it can be used in other files
export { db };
