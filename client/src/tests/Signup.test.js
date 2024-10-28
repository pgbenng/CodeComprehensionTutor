import {jest} from '@jest/globals';
import {fireEvent, render, screen} from '@testing-library/react';
import Signup, {handleSubmit, SignupRender} from '../components/Signup.js';

// https://www.geeksforgeeks.org/how-to-test-react-components-using-jest/

const handleSubmitMock = jest.fn();

//https://stackoverflow.com/a/53614252
jest.spyOn(window, 'alert').mockImplementation(() => {
});

// mocking window.location.href: https://stackoverflow.com/a/54021633
Object.defineProperty(window, 'location', {
  value: {
    href: '',
  },
  writable: true,
});

describe('Signup', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render all Signup component elements', () => {
    render(<Signup/>);

    const emailField = screen.getByTestId('email');
    const passField = screen.getByTestId('password');
    const checkBox = screen.getByTestId('checkbox');
    const createAccountButton = screen.getByTestId('create');

    expect(emailField).toBeInTheDocument();
    expect(passField).toBeInTheDocument();
    expect(checkBox).toBeInTheDocument();
    expect(createAccountButton).toBeInTheDocument();
  });

  it('should call handleSubmit() when submit button is clicked', () => {
    render(<SignupRender handleSubmit={handleSubmitMock}/>);

    const createAccountButton = screen.getByTestId('create');

    fireEvent.click(createAccountButton);
    expect(handleSubmitMock).toHaveBeenCalled();
  });

  it('should send an error alert if user does not input an email', async () => {
    await handleSubmit(new Event('form'), null, 'password', 'on', null);
    expect(window.alert).toHaveBeenCalledWith(
      'Please enter both email and password.'
    );
  });

  it('should send an error alert if user does not input a password', async () => {
    await handleSubmit(new Event('submit'), 'e@e', null, 'on', null);
    expect(window.alert).toHaveBeenCalledWith(
      'Please enter both email and password.'
    );
  });

  it('should return undefined if user did not click checkbox', async () => {
    const res = await handleSubmit(
      new Event('submit'),
      'e123123@gmail.com',
      'test12345',
      'off',
      null
    );
    expect(res).toBe(undefined);
  });

  it('should return a successful alert if signup is successful with valid inputs', async () => {
    // generate random email and pw for no duplicate signups
    const randomNumber =
      Math.floor(Math.random() * (200000 - 100000 + 1)) + 100000;

    try {
      await handleSubmit(
        new Event('submit'),
        `test${randomNumber}@gmail.com`,
        `test${randomNumber}`,
        'on',
        null
      );
      expect(window.alert).toHaveBeenCalledWith('Signup successful!');
      expect(window.location.href).toContain('/login');
    } catch (e) {
      // fail test here: function should not throw error
      expect(false).toBe(true);
    }
  });

  it('should return an alert with error message if signup is unsuccessful with account that already exists', async () => {
    try {
      await handleSubmit(
        new Event('submit'),
        'test1234@gmail.com',
        'test1234',
        true,
        (bool) => {
        }
      );
      // fail test here: function should throw error
      expect(false).toBe(true);
    } catch (e) {
      expect(window.alert).toHaveBeenCalledWith(
        'Request failed with status code 400'
      );
    }
  });
});
