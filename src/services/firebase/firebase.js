import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'

const firebaseConfig = {

    apiKey: "AIzaSyC_3SVZzOaNdg1Gjg6TpagEsrBjhMe3SXA",
    authDomain: "trabajoreact-coder.firebaseapp.com",
    projectId: "trabajoreact-coder",
    storageBucket: "trabajoreact-coder.appspot.com",
    messagingSenderId: "153141903948",
    appId: "1:153141903948:web:1ca2538fad7e6f401b2ae9"

};

// conexion con firebase
const app = initializeApp(firebaseConfig);

//conexion con firestore
export const firestoreDataBase = getFirestore(app)