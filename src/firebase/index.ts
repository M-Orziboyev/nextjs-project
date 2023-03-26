import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDX06xp4f7_1wkrj-6CZ8gaFuvpcULX1PY",
    authDomain: "mo-movie-ap.firebaseapp.com",
    projectId: "mo-movie-ap",
    storageBucket: "mo-movie-ap.appspot.com",
    messagingSenderId: "805925696574",
    appId: "1:805925696574:web:2074ed38a1dd7346334d6f"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { db, auth }