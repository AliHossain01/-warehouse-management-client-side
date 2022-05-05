import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCBYqgtxkVWQpShLIWQ9_zIbaoUmtYGvv8",
    authDomain: "photography-services-e857d.firebaseapp.com",
    projectId: "photography-services-e857d",
    storageBucket: "photography-services-e857d.appspot.com",
    messagingSenderId: "425371888802",
    appId: "1:425371888802:web:6fbb22825d37db8d02fbfb"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;