import axios from 'axios';
/* 
Files inside client/src/services are for managing API calls
*/

const path = 'http://localhost:80';

export const sendExplanation = (explanation) => {
  return axios
    .post(`${path}/explanation`, {explanation})
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};

export const createAccount = (email, password) => {
  return axios
    .post(`${path}/signup`, {address: email, pass: password})
    .catch((err) => {
      throw err;
    });
};

export const testCode = (code, codeSnippetId) => {
  return axios
    .post(`${path}/testCode`, {code, codeSnippetId})
    .catch((err) => {
      throw err;
    });
};

export const getCodeSnippet = (codeSnippetId) => {
  return axios
    .get(`${path}/codeSnippets`, {params: {codeSnippetId}})
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};

export const userLogin = (email, password) => {
  return axios.post(`${path}/login`, {email, password}).catch((err) => {
    throw err;
  });
};
