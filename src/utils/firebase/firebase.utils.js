import {initializeApp} from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCrw7P1MHhUOIg8nkQsap_1DYOR74daQ98",
    authDomain: "ecom-cia-db.firebaseapp.com",
    projectId: "ecom-cia-db",
    storageBucket: "ecom-cia-db.appspot.com",
    messagingSenderId: "148354982470",
    appId: "1:148354982470:web:58ba0265d14c2d76d86047"
  };
  
  
  // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
  
const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth) => {

    const userDocRef = doc(db, 'users', userAuth.uid);
    const useSnapshot = await getDoc(userDocRef);
    //if user data doesn't exist
    //create/set the document with the data from userAuth
    if(!useSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createAt = new Date();

        try{
            await setDoc(userDocRef,{
                displayName,
                email,
                createAt
            });
            }catch(error){
              console.log('error creating the user', error.message)
            }
    }
    //if user data exist, return userDocRef
    return userDocRef;
    
}