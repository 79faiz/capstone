// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider} from 'firebase/auth';
import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC50rEzWCY1AiY66jC6tIyHR9Jsk6BhuBY",
    authDomain: "crwn-clothing-db-814f7.firebaseapp.com",
    projectId: "crwn-clothing-db-814f7",
    storageBucket: "crwn-clothing-db-814f7.firebasestorage.app",
    messagingSenderId: "917753140621",
    appId: "1:917753140621:web:53dea0b8d03e0e845119c4"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) =>{
    const userDocRef = doc(db, 'users',userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists())
    {
        const {displayName,email} = userAuth;
        const createAt = new Date();

        try{
            await setDoc(userDocRef,{
                displayName,
                email,
                createAt,
            });
        }catch(error){
            console.log('error creating the user',error.massage);
        }
    }
    return userDocRef;
}