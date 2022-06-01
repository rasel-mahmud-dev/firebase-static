
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


// firebase account config your should be different than me. 
//  {
//     apiKey: "***********",
//     authDomain: "**********",
//     projectId: "***************",
//     storageBucket: "**************",
//     messagingSenderId: "****************",
//     appId: "**************************"
// };

import firebaseConfig from "./config"


// Initialize Firebase
 const app = initializeApp(firebaseConfig)
 export const db = getFirestore(app)