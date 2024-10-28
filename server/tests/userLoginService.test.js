import {describe, expect, it} from '@jest/globals';
import {userLoginService} from '../services/userLoginService.js';

describe('UserLoginService', () => {
  it('should throw error for null email', async () => {
    try {
      await userLoginService(null, 'password');
      // fail test here: function should throw error
      expect(false).toBe(true);
    } catch (err) {
      expect(err.message).toEqual('Firebase: Error (auth/missing-email).');
    }
  });

  it('should throw error for null password', async () => {
    try {
      await userLoginService('emailadress@gmail.com', null);
      // fail test here: function should throw error
      expect(false).toBe(true);
    } catch (err) {
      expect(err.message).toEqual('Firebase: Error (auth/missing-password).');
    }
  });

  it('should throw error for email with invalid format', async () => {
    try {
      await userLoginService('something@', 'password');
      // fail test here: function should throw error
      expect(false).toBe(true);
    } catch (err) {
      expect(err.message).toEqual('Firebase: Error (auth/invalid-email).');
    }
  });

  it('should throw error for valid email that does not exist', async () => {
    try {
      await userLoginService('something@a', 'password');
      // fail test here: function should throw error
      expect(false).toBe(true);
    } catch (err) {
      expect(err.message).toEqual('Firebase: Error (auth/invalid-credential).');
    }
  });

  it('should throw error for incorrect password for valid email', async () => {
    try {
      await userLoginService('test1234@gmail.com', 'password');
      // fail test here: function should throw error
      expect(false).toBe(true);
    } catch (err) {
      expect(err.message).toEqual('Firebase: Error (auth/invalid-credential).');
    }
  });

  it('should correctly log user in if email and password are valid and exists', async () => {
    try {
      const res = await userLoginService('test1234@gmail.com', 'test1234');
      expect(res).not.toBeNull();
      expect(res.user.email).toEqual('test1234@gmail.com');
    } catch (err) {
      // fail test here: function should not throw error
      expect(false).toBe(true);
    }
  });
});
