import { initializeApp } from "firebase/app";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyD4hykr4DaB3OzfxxJ4Y32qIKyfw5fihR4",
  authDomain: "hangul-chat-ai-be.firebaseapp.com",
  projectId: "hangul-chat-ai-be",
  storageBucket: "hangul-chat-ai-be.firebasestorage.app",
  messagingSenderId: "915829361665",
  appId: "1:915829361665:web:a27949d90e9a615aca4400",
};

const app = initializeApp(firebaseConfig);

export const functions = getFunctions(app);
