import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0EgUnM1MfdEHQ1EYsLC18GtTVKQbrKfg",
  authDomain: "netflix-project-d3265.firebaseapp.com",
  projectId: "netflix-project-d3265",
  storageBucket: "netflix-project-d3265.appspot.com",
  messagingSenderId: "88759753704",
  appId: "1:88759753704:web:c9699d368b1b899f4b625d",
  measurementId: "G-6VLT068FKZ"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

export default auth;


