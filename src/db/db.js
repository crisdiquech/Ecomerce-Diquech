
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore" 

const firebaseConfig = {
  apiKey: "AIzaSyApBzvA_p-91Wq2HRsgYJo6jf6bjtplnJE",
  authDomain: "ecomerce-82c36.firebaseapp.com",
  projectId: "ecomerce-82c36",
  storageBucket: "ecomerce-82c36.appspot.com",
  messagingSenderId: "539973761054",
  appId: "1:539973761054:web:e8509f605a016b0485560f"
};


initializeApp(firebaseConfig);

const db = getFirestore ()

export default db 