import {initializeApp} from "firebase/app";
import {firebaseConfig} from './firebaseConfig'
import {getFirestore} from "firebase/firestore";

export const firebase = initializeApp(firebaseConfig);
export const db = getFirestore();