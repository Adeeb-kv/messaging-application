// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfiUJCsXMDZ0TLK38OBOgRRKUfJW-ZRgY",
  authDomain: "adeeb-eb1b5.firebaseapp.com",
  projectId: "adeeb-eb1b5",
  storageBucket: "adeeb-eb1b5.appspot.com",
  messagingSenderId: "60526477218",
  appId: "1:60526477218:web:5143468b7ade2a802a3cfb",
  measurementId: "G-9CRTZY47B7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);