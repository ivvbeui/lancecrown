import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCUTHfXL4S5BL8AhKB_PZcNGhQqZFU74rw",
  authDomain: "my-home-86c46.firebaseapp.com",
  projectId: "my-home-86c46",
  storageBucket: "my-home-86c46.firebasestorage.app",
  messagingSenderId: "291756289238",
  appId: "1:291756289238:web:ecb3c3ccc8066dd91a2d77",
  measurementId: "G-4J44LK94E0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
