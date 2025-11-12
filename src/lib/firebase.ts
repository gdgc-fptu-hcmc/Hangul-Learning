import { initializeApp } from "firebase/app";
import { connectFunctionsEmulator, getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyAT7vgHMdPyYFuvfY2ddr1g7smPTfx4Djw",
  authDomain: "nguyenductuan-bf7a1.firebaseapp.com",
  projectId: "nguyenductuan-bf7a1",
  storageBucket: "nguyenductuan-bf7a1.firebasestorage.app",
  messagingSenderId: "552862858398",
  appId: "1:552862858398:web:f9811dc60d97d848b54f8f",
  measurementId: "G-VLDBEV8E0Z",
};

const app = initializeApp(firebaseConfig);

const functions = getFunctions(app);

if (import.meta.env.VITE_MODE === "development") {
  connectFunctionsEmulator(functions, "localhost", 5001);
}

export { functions };
