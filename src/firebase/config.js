import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhu2kHI1m8MdHlbVHWyjrTm4-sywYpYuI",
  authDomain: "twitter-clone-6b6b0.firebaseapp.com",
  projectId: "twitter-clone-6b6b0",
  storageBucket: "twitter-clone-6b6b0.appspot.com",
  messagingSenderId: "140445338543",
  appId: "1:140445338543:web:ab8b8b144d928e82a6fd5a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth hizmetinin referansını al
export const auth = getAuth(app);

// google sağlayıcısının kurulumu
export const provider = new GoogleAuthProvider();

// veritbanının referansını al
export const db = getFirestore(app);

// storage referansını al
export const storage = getStorage(app);
