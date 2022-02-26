// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//import a la funcion que obtiene la instancia de firestore
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIP3CW7C-RV1CJ7JJS6AIdrxq2NxqEBB0",
  authDomain: "compumundo-hiper.firebaseapp.com",
  projectId: "compumundo-hiper",
  storageBucket: "compumundo-hiper.appspot.com",
  messagingSenderId: "71860939295",
  appId: "1:71860939295:web:cf513c4a8ad7dffa24432a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//export a la base de datos de firestore
export const dataBase = getFirestore(app);