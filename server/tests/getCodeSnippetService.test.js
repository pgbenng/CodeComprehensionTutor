import {describe, expect, it} from '@jest/globals';
import {getCodeSnippetService} from '../services/getCodeSnippetService.js';
import {add} from '../snippets/add.js';
import {divide} from '../snippets/divide.js';
import {binarySearch} from '../snippets/binarySearch.js';
import {twoSum} from '../snippets/twoSum.js';
import {sum} from '../snippets/sum.js';
import {grade} from '../snippets/grade.js';

describe('GetCodeSnippetService', () => {
  it('should throw error for null codeSnippetId', async () => {
    try {
      await getCodeSnippetService(null);
      // fail test here: function should throw error
      expect(false).toBe(true);
    } catch (err) {
      expect(err.message).toEqual('Inputted ID is empty.');
    }
  });

  it('should throw error for invalid return format', async () => {
    try {
      await getCodeSnippetService('add', 'invalid');
      // fail test here: function should throw error
      expect(false).toBe(true);
    } catch (err) {
      expect(err.message).toEqual('Invalid return format.');
    }
  });

  it('should throw error for invalid codeSnippetId ', async () => {
    try {
      await getCodeSnippetService('doesNotExistId', 'function');
      // fail test here: function should throw error
      expect(false).toBe(true);
    } catch (err) {
      expect(err.message).toEqual('Invalid codeSnippetId!');
    }
  });

  it('should return add function in string display format for existing codeSnippetId', async () => {
    const addCode = add.display;
    try {
      const data = await getCodeSnippetService('add', 'display');
      expect(data).toEqual(addCode);
    } catch (err) {
      // fail test here: no errors should be caught
      expect(false).toBe(true);
    }
  });

  it('should return add function in function format for existing codeSnippetId', async () => {
    const addFunction = add.function;
    try {
      const data = await getCodeSnippetService('add', 'function');
      expect(data).toEqual(addFunction);
    } catch (err) {
      // fail test here: no errors should be caught
      expect(false).toBe(true);
    }
  });

  it('should return divide function in string display format for existing codeSnippetId', async () => {
    const divideCode = divide.display;
    try {
      const data = await getCodeSnippetService('divide', 'display');
      expect(data).toEqual(divideCode);
    } catch (err) {
      // fail test here: no errors should be caught
      expect(false).toBe(true);
    }
  });

  it('should return divide function in function format for existing codeSnippetId', async () => {
    const divideFunction = divide.function;
    try {
      const data = await getCodeSnippetService('divide', 'function');
      expect(data).toEqual(divideFunction);
    } catch (err) {
      // fail test here: no errors should be caught
      expect(false).toBe(true);
    }
  });

  it('should return binarySearch function in string display format for existing codeSnippetId', async () => {
    const binaryCode = binarySearch.display;
    try {
      const data = await getCodeSnippetService('binarySearch', 'display');
      expect(data).toEqual(binaryCode);
    } catch (err) {
      // fail test here: no errors should be caught
      expect(false).toBe(true);
    }
  });

  it('should return binarySearch function in function format for existing codeSnippetId', async () => {
    const binarySearchFunction = binarySearch.function;
    try {
      const data = await getCodeSnippetService('binarySearch', 'function');
      expect(data).toEqual(binarySearchFunction);
    } catch (err) {
      // fail test here: no errors should be caught
      expect(false).toBe(true);
    }
  });

  it('should return twoSum function in string display format for existing codeSnippetId', async () => {
    const twoSumCode = twoSum.display;
    try {
      const data = await getCodeSnippetService('twoSum', 'display');
      expect(data).toEqual(twoSumCode);
    } catch (err) {
      // fail test here: no errors should be caught
      expect(false).toBe(true);
    }
  });

  it('should return twoSum function in function format for existing codeSnippetId', async () => {
    const twoSumFunction = twoSum.function;
    try {
      const data = await getCodeSnippetService('twoSum', 'function');
      expect(data).toEqual(twoSumFunction);
    } catch (err) {
      // fail test here: no errors should be caught
      expect(false).toBe(true);
    }
  });

  it('should return sum function in string display format for existing codeSnippetId', async () => {
    const sumCode = sum.display;
    try {
      const data = await getCodeSnippetService('sum', 'display');
      expect(data).toEqual(sumCode);
    } catch (err) {
      // fail test here: no errors should be caught
      expect(false).toBe(true);
    }
  });

  it('should return sum function in function format for existing codeSnippetId', async () => {
    const sumFunction = sum.function;
    try {
      const data = await getCodeSnippetService('sum', 'function');
      expect(data).toEqual(sumFunction);
    } catch (err) {
      // fail test here: no errors should be caught
      expect(false).toBe(true);
    }
  });

  it('should return grade function in string display format for existing codeSnippetId', async () => {
    const gradeCode = grade.display;
    try {
      const data = await getCodeSnippetService('grade', 'display');
      expect(data).toEqual(gradeCode);
    } catch (err) {
      // fail test here: no errors should be caught
      expect(false).toBe(true);
    }
  });

  it('should return grade function in function format for existing codeSnippetId', async () => {
    const gradeFunction = grade.function;
    try {
      const data = await getCodeSnippetService('grade', 'function');
      expect(data).toEqual(gradeFunction);
    } catch (err) {
      // fail test here: no errors should be caught
      expect(false).toBe(true);
    }
  });
});
