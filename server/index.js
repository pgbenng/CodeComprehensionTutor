// Citation: https://stackoverflow.com/questions/9177049/express-js-req-body-undefined
// https://stackoverflow.com/a/62892482
import express from 'express';
import cors from 'cors';
import {fileURLToPath} from 'url';
import {dirname} from 'path';
import {sendExplanationController} from './controllers/sendExplanationController.js';
import {getCodeSnippetController} from './controllers/getCodeSnippetController.js';
import {userLoginController} from './controllers/userLoginController.js';
import {createAccountController} from './controllers/createAccountController.js';
import {testCodeController} from './controllers/testCodeController.js';

const app = express();
const port = 80;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.json());
app.use(cors());

// https://expressjs.com/en/guide/routing.html

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/tests', (req, res) => {
  res.sendFile(__dirname + '/test-report.html');
});

app.post('/explanation', (req, res) => {
  sendExplanationController(req, res);
});

app.get('/codeSnippets', (req, res) => {
  getCodeSnippetController(req, res);
});

app.post('/signup', (req, res) => {
  createAccountController(req, res);
});

app.post('/login', (req, res) => {
  userLoginController(req, res);
});

app.post('/testCode', (req, res) => {
  testCodeController(req, res);
});

app.listen(port, () => {
  console.log(
    `Server started on port ${port}, access via http://localhost:${port}`
  );
});
