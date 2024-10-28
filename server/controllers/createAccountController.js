import {createAccountService} from '../services/createAccountService.js';

export const createAccountController = (req, res) => {
  const email = req.body.address;
  const password = req.body.pass;

  createAccountService(email, password)
    .then((userCredential) => {
      res.status(200).send({message: 'Signup successful!'});
    })
    .catch((error) => {
      res.status(400).send({message: 'Error signing up: ' + error.message});
    });
};
