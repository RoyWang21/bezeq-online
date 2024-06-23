// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_tX2jjV-6rkBKCy8Jh2X_kSeFqLqLd0M",
  authDomain: "bezeq-online.firebaseapp.com",
  projectId: "bezeq-online",
  storageBucket: "bezeq-online.appspot.com",
  messagingSenderId: "247969793579",
  appId: "1:247969793579:web:08235cd81d034ef2744c6e",
  measurementId: "G-JBEZQDBQ2R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);