import {add} from '../snippets/add.js';
import {divide} from '../snippets/divide.js';
import {binarySearch} from '../snippets/binarySearch.js';
import {twoSum} from '../snippets/twoSum.js';
import {sum} from '../snippets/sum.js';
import {grade} from '../snippets/grade.js';

export const getCodeSnippetService = (codeSnippetId, returnFormat) => {
  if (!codeSnippetId) throw new Error('Inputted ID is empty.');

  if (returnFormat !== 'function' && returnFormat !== 'display')
    throw new Error('Invalid return format.');

  const codeSnippets = {add, divide, binarySearch, twoSum, sum, grade};

  if (!Object.keys(codeSnippets).includes(codeSnippetId))
    throw new Error('Invalid codeSnippetId!');

  return codeSnippets[codeSnippetId][returnFormat];
};
