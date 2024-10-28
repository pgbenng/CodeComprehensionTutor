import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../config/firebase.js';

export const userLoginService = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
