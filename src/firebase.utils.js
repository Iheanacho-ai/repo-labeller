// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";


  
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBw3JwS_YtSjp0_2Uom1H-zaAEkDfp2jKY",
  authDomain: "repo-labeller.firebaseapp.com",
  projectId: "repo-labeller",
  storageBucket: "repo-labeller.appspot.com",
  messagingSenderId: "842473876571",
  appId: "1:842473876571:web:468e9b9f27a6144fe4637e",
  measurementId: "G-ZE64P7TZ1P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const provider = new GithubAuthProvider();
provider.addScope('repo');
provider.setCustomParameters({
  prompt: 'select_account'
});



 export const auth = getAuth();
 

