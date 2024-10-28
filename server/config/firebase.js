// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC1S9R2E4yRt1Ruvvu56m3QXqwGLiON-mI',
  authDomain: 'p-alpha-45596.firebaseapp.com',
  databaseURL: 'https://p-alpha-45596-default-rtdb.firebaseio.com',
  projectId: 'p-alpha-45596',
  storageBucket: 'p-alpha-45596.appspot.com',
  messagingSenderId: '264826956879',
  appId: '1:264826956879:web:b5af28b80e3f91c5af0e3a',
  measurementId: 'G-88D3Z18M27',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
