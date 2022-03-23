import { initializeApp } from 'firebase/app'
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCoqZ_cR6UtozlRG6jW8N2vE5UyBcFm7HQ",
    authDomain: "crwn-clothing-db-571da.firebaseapp.com",
    projectId: "crwn-clothing-db-571da",
    storageBucket: "crwn-clothing-db-571da.appspot.com",
    messagingSenderId: "999956310615",
    appId: "1:999956310615:web:7a41c7f8e2bcb86a5f5112"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
