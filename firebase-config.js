// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
// 1. 스토리지 모듈 임포트 추가
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCUTHfXL4S5BL8AhKB_PZcNGhQqZFU74rw",
  authDomain: "my-home-86c46.firebaseapp.com",
  projectId: "my-home-86c46",
  storageBucket: "my-home-86c46.firebasestorage.app", // 여기에 적힌 스토리지 버킷을 사용하게 됨
  messagingSenderId: "291756289238",
  appId: "1:291756289238:web:ecb3c3ccc8066dd91a2d77",
  measurementId: "G-4J44LK94E0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app); // 2. 스토리지 내보내기 추가
