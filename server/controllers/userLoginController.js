// https://firebase.google.com/docs/auth/web/password-auth#web_2

import {userLoginService} from '../services/userLoginService.js';

export const userLoginController = (req, res) => {
  const {email, password} = req.body;

  userLoginService(email, password)
    .then(() => {
      res.status(200).send({message: 'Login successful!'});
    })
    .catch((error) => {
      res.status(401).send({message: 'Error logging in: ' + error.message});
    });
};
