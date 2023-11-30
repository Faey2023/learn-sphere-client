// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
// };
const firebaseConfig = {
  apiKey: "AIzaSyCRp5eehx8QcAf2ZOatnEdAMpZEVINHsLw",
  authDomain: "learn-sphere.firebaseapp.com",
  projectId: "learn-sphere",
  storageBucket: "learn-sphere.appspot.com",
  messagingSenderId: "355181049539",
  appId: "1:355181049539:web:3395ff6124831313d3d476",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
