import { initializeApp } from 'firebase/app';
import {
  getFirestore, collection, query, addDoc,
} from 'firebase/firestore';
import firebaseConfig from './config';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const addCourse = async (state) => await addDoc(collection(db, 'cursos'), state);

export const queryCollection = () => {
  const q = query(collection(db, 'cursos'));
  return q;
};
