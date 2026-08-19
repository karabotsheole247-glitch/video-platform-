// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHGXnyDrv3IOBDAIbKTd1fpiIaHNAn25Q",
  authDomain: "video-platform-9056b.firebaseapp.com",
  projectId: "video-platform-9056b",
  storageBucket: "video-platform-9056b.firebasestorage.app",
  messagingSenderId: "150988203312",
  appId: "1:150988203312:web:68780234ce978458cc94f5",
  measurementId: "G-ZWPMNSCZ8B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
