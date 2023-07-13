// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoDAR9GfVuetvF9J2Ec0GkOjDqD7SLmCI",
  authDomain: "farmmart12.firebaseapp.com",
  projectId: "farmmart12",
  storageBucket: "farmmart12.appspot.com",
  messagingSenderId: "636582050944",
  appId: "1:636582050944:web:becc1cc9e1a32ff7c63a65",
  measurementId: "G-KWKBV9G4L0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db=getFirestore(app);