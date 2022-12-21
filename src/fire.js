import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBLQtjLe_Q6u91PGU2kHzXANDsQYfsFI8w",
  authDomain: "hackathon-e2339.firebaseapp.com",
  projectId: "hackathon-e2339",
  storageBucket: "hackathon-e2339.appspot.com",
  messagingSenderId: "498094423912",
  appId: "1:498094423912:web:ed236c7f5e6886656360dd",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
