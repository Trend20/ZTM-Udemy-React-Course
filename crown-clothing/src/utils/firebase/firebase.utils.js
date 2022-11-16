// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKEv6NWkPIZvEvBLTL9LkubGCdpk4LfKE",
  authDomain: "decent-7e4df.firebaseapp.com",
  projectId: "decent-7e4df",
  storageBucket: "decent-7e4df.appspot.com",
  messagingSenderId: "713076058673",
  appId: "1:713076058673:web:167f3ee92270b99eb0c310"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// provider instance of the googleAuthProvider
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);