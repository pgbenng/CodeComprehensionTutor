import {createAccountService} from '../services/createAccountService';
import {describe, expect, it} from '@jest/globals';

describe('CreateAccountService', () => {
  it('should throw error for null email', async () => {
    try {
      await createAccountService(null, 'password');
      // fail test here: function should throw error
      expect(false).toBe(true);
    } catch (err) {
      expect(err.message).toEqual('Firebase: Error (auth/missing-email).');
    }
  });

  it('should throw error for null password', async () => {
    try {
      await createAccountService('emailadress@gmail.com', null);
      // fail test here: function should throw error
      expect(false).toBe(true);
    } catch (err) {
      expect(err.message).toEqual('Firebase: Error (auth/missing-password).');
    }
  });

  it('should throw error for missing password', async () => {
    try {
      await createAccountService('password');
      // fail test here: function should throw error
      expect(false).toBe(true);
    } catch (err) {
      expect(err.message).toEqual('Firebase: Error (auth/missing-password).');
    }
  });

  it('should throw error for incorrect email format', async () => {
    try {
      await createAccountService('something@a', 'password');
      // fail test here: function should throw error
      expect(false).toBe(true);
    } catch (err) {
      expect(err.message).toEqual('Firebase: Error (auth/invalid-email).');
    }
  });

  it('should throw error for duplicate email', async () => {
    try {
      await createAccountService('test1@gmail.com', 'password');
      // fail test here: function should throw error
      expect(false).toBe(true);
    } catch (err) {
      expect(err.message).toEqual(
        'Firebase: Error (auth/email-already-in-use).'
      );
    }
  });
});
