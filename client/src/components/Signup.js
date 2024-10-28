// Citations: https://react-bootstrap.netlify.app/docs/forms/overview
import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import {createAccount} from '../services/api.js';

export const SignupRender = ({handleSubmit}) => {
  //State hooks
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkbox, setCheckBox] = useState(false);
  const [validated, setValidated] = useState(false);

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={(e) => handleSubmit(e, email, password, checkbox, setValidated)}
    >
      <h1>Sign Up</h1>

      <Form.Group className="mb-3" controlId="formEmail" data-testid="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Control.Feedback type="invalid">
          Please enter valid email address.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group
        className="mb-3"
        controlId="formPassword"
        data-testid="password"
      >
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formCheckbox">
        <Form.Check
          required
          label="I agree to all the Terms and Conditions"
          feedback="Please agree to Terms and Conditions to create account"
          feedbackType="invalid"
          data-testid="checkbox"
          value={checkbox ?? 'on'}
          onChange={() => setCheckBox(!checkbox)}
        />
      </Form.Group>

      <Button variant="primary" type="submit" data-testid="create">
        Create Account
      </Button>
    </Form>
  );
};

// Function for handling form submission
export const handleSubmit = async (
  e,
  email,
  password,
  checkbox,
  setValidated
) => {
  e.preventDefault();
  const form = e.currentTarget;

  if (form?.checkValidity() === false) {
    e.stopPropagation();
  }
  if (setValidated) setValidated(true);

  // Ensure neither email or password fields are empty
  if (!email || !password) {
    alert('Please enter both email and password.');
    return;
  }

  // Ensure checkbox is clicked
  if (!checkbox) {
    return;
  }

  try {
    await createAccount(email, password);
    alert('Signup successful!');
    window.location.href = 'http://localhost:3000/login';
  } catch (err) {
    alert(err.message);
  }
};

const Signup = () => {
  return <SignupRender handleSubmit={handleSubmit}/>;
};

export default Signup;
