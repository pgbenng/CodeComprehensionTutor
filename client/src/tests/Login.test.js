import {jest} from '@jest/globals';
import {fireEvent, render, screen} from '@testing-library/react';
import Login, {handleSubmit, LoginRender} from '../components/Login.js';

// https://www.geeksforgeeks.org/how-to-test-react-components-using-jest/
const handleSubmitMock = jest.fn();

// https://stackoverflow.com/a/53614252
jest.spyOn(window, 'alert').mockImplementation(() => {
});

// mocking window.location.href: https://stackoverflow.com/a/54021633
Object.defineProperty(window, 'location', {
  value: {
    href: '',
  },
  writable: true,
});

describe('Login', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render all Login component elements', () => {
    render(<Login/>);

    const emailField = screen.getByTestId('emailEntry');
    const passwordField = screen.getByTestId('passwordEntry');
    const submitButton = screen.getByTestId('submitButton');

    expect(emailField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('should call handleSubmit() when submit button is clicked', () => {
    render(<LoginRender handleSubmit={handleSubmitMock}/>);

    const submitButton = screen.getByTestId('submitButton');

    fireEvent.click(submitButton);
    expect(handleSubmitMock).toHaveBeenCalled();
  });

  it('should send an error alert if user does not input an email', () => {
    handleSubmit(new Event('submit'), null, 'password');
    expect(window.alert).toHaveBeenCalledWith(
      'Please enter both email and password.'
    );
  });

  it('should send an error alert if user does not input a password', async () => {
    await handleSubmit(new Event('submit'), 'e@e', null);
    expect(window.alert).toHaveBeenCalledWith(
      'Please enter both email and password.'
    );
  });

  it('should send a success alert and redirect user to dashboard if login is successful', async () => {
    // inputted email and password is valid and exists
    try {
      await handleSubmit(new Event('submit'), 'test1234@gmail.com', 'test1234');
      expect(window.alert).toHaveBeenCalledWith('Login successful!');
      expect(window.location.href).toContain('/dashboard');
    } catch (e) {
      // fail test here: function should not throw error
      expect(false).toBe(true);
    }
  });

  it('should send an error alert with error message if login with valid inputs but email does not exist', async () => {
    // inputted email and password is valid but email does not exist
    try {
      await handleSubmit(
        new Event('submit'),
        'doesnotexist@gmail.com',
        'test1234'
      );
      // fail test here: function should throw error
      expect(false).toBe(true);
    } catch (e) {
      expect(window.alert).toHaveBeenCalledWith(
        'Error logging in: Request failed with status code 401'
      );
    }
  });

  it('should send an error alert with error message if login with valid inputs but password is incorrect', async () => {
    // inputted email and password is valid but password for email is incorrect
    try {
      await handleSubmit(
        new Event('submit'),
        'test1234@gmail.com',
        'test12345'
      );
      // fail test here: function should throw error
      expect(false).toBe(true);
    } catch (e) {
      expect(window.alert).toHaveBeenCalledWith(
        'Error logging in: Request failed with status code 401'
      );
    }
  });
});
