import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD8fSORQY6ZETAm7jEWNLMAGXPZAjh10A",
  authDomain: "futraderx.firebaseapp.com",
  projectId: "futraderx",
  storageBucket: "futraderx.appspot.com",
  messagingSenderId: "845777708353",
  appId: "1:845777708353:web:3fbf6cf59102d4c51aa9fc"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
