import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCfAOrzEd03u8fE2XGPBprLrAdotaH6QbI",
  authDomain: "project-with-oblachko.firebaseapp.com",
  projectId: "project-with-oblachko",
  storageBucket: "project-with-oblachko.appspot.com",
  messagingSenderId: "743162372185",
  appId: "1:743162372185:web:707f848e216ceacf901148",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
