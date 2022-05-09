import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBXQU8K_ck27TC2Ks7BR9I0P43gXsA6RFY",
    authDomain: "warehouse-management-8e867.firebaseapp.com",
    projectId: "warehouse-management-8e867",
    storageBucket: "warehouse-management-8e867.appspot.com",
    messagingSenderId: "596099471306",
    appId: "1:596099471306:web:d41faae624783a1ec6a133"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;