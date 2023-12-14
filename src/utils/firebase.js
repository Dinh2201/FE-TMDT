import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey : "AIzaSyB_zxm26PDdNJXCHkOccfeVkHSjyl4fqU0" , 
  authDomain : "ticketboxve2.firebaseapp.com" , 
  projectId : "ticketboxve2" , 
  storageBucket : "ticketboxve2.appspot.com" , 
  messagingSenderId : "101913990092" , 
  appId : "1:101913990092:web:9759b052afa1ae1f238369" , 
  measurementId : "G-BXKWF6BK5S" 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const storage = getStorage(app);
export { storage, analytics };
