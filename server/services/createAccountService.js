// https://firebase.google.com/docs/auth/web/password-auth

import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../config/firebase.js';

export const createAccountService = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      throw error;
    });
};
