import { initializeApp } from "firebase/app";
import {collection,getFirestore} from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyAAGUjdIo6IcpuoirBxa6tAfIj5xavSCV0",
    authDomain: "neog-notes.firebaseapp.com",
    projectId: "neog-notes",
    storageBucket: "neog-notes.appspot.com",
    messagingSenderId: "261404271080",
    appId: "1:261404271080:web:c7663833290c10d6aac45d",
    measurementId: "G-8FEBC4LKJY"
  };

// Initialize Firebase
const app=initializeApp(firebaseConfig);

// init service
const db=getFirestore(app);

// collection ref 
const colRef=collection(db,"notes");


export {db,colRef};