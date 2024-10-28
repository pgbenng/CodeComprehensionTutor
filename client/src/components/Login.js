import React, {useState} from 'react';
import {Button, Container, Form} from 'react-bootstrap';
import {userLogin} from '../services/api.js';

export const LoginRender = ({handleSubmit}) => {
  // State hooks
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <h2>Login</h2>

      <Form onSubmit={(event) => handleSubmit(event, email, password)}>
        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            data-testid={'emailEntry'}
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            data-testid={'passwordEntry'}
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" data-testid={'submitButton'}>
          Login
        </Button>
      </Form>
    </Container>
  );
};

export const handleSubmit = async (event, email, password) => {
  event.preventDefault();

  if (!email || !password) {
    alert('Please enter both email and password.');
    return;
  }

  try {
    await userLogin(email, password);
    alert('Login successful!');
    window.location.href = 'http://localhost:3000/dashboard';
  } catch (error) {
    alert('Error logging in: ' + error.message);
  }
};

const Login = () => {
  return <LoginRender handleSubmit={handleSubmit}/>;
};

export default Login;
