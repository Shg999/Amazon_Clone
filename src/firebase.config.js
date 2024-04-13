// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFgQrIrse3EHfn_WPuMfXfs2OPm1_MUWo",
  authDomain: "yt-a4124.firebaseapp.com",
  projectId: "yt-a4124",
  storageBucket: "yt-a4124.appspot.com",
  messagingSenderId: "952572647586",
  appId: "1:952572647586:web:3f7b0aa01603ccfbca9ffb",
  measurementId: "G-3KT13SXF3Y"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default firebaseConfig