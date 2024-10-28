// https://www.geeksforgeeks.org/node-js-fs-writefile-method/
// https://stackoverflow.com/questions/43622337/using-import-fs-from-fs
// https://stackoverflow.com/questions/50827216/use-jest-run-or-jest-runcli-to-run-all-tests-or-ways-to-run-jest-programmati

import fs from 'fs';
import * as path from 'node:path';
import {dirname} from 'path';
import {fileURLToPath} from 'url';
import {addTests} from '../snippets-tests/add.test.js';
import {binarySearchTests} from '../snippets-tests/binarySearch.test.js';
import {divideTests} from '../snippets-tests/divide.test.js';
import {gradeTests} from '../snippets-tests/grade.test.js';
import {sumTests} from '../snippets-tests/sum.test.js';
import {twoSumTests} from '../snippets-tests/twoSum.test.js';
import jest from 'jest';

const {runCLI} = jest;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const completePath = path.resolve(__dirname, '../llm_code.js');

export const testCodeService = async (code, codeSnippetId) => {
  const codeString = code.toString();

  const codeSnippetIdTestMap = {
    add: addTests,
    binarySearch: binarySearchTests,
    divide: divideTests,
    grade: gradeTests,
    sum: sumTests,
    twoSum: twoSumTests,
  };

  const stringToWrite = codeString + codeSnippetIdTestMap[codeSnippetId];

  fs.writeFile(completePath, stringToWrite, (err) => {
    if (err) console.log(err);
    else {
      console.log('File written successfully\n');
      console.log(fs.readFileSync(completePath, 'utf8'));
    }
  });

  const options = {
    testMatch: ['**/llm_code.js'],
    silent: true,
    json: true,
  };

  return runCLI(options, [__dirname]);
};
