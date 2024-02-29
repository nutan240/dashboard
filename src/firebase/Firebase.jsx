
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCeb9T8IMg7m5bmrX-qeHWqRICobck_gas",
  authDomain: "usersdata-20ab4.firebaseapp.com",
  projectId: "usersdata-20ab4",
  storageBucket: "usersdata-20ab4.appspot.com",
  messagingSenderId: "696655402307",
  appId: "1:696655402307:web:10e0345cee0c35f5938bf6",
  measurementId: "G-0LBQJVJNL4"
};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
 const db = getFirestore(app);
 export {  db };