import {getCodeSnippetService} from '../services/getCodeSnippetService.js';

export const getCodeSnippetController = (req, res) => {
  const codeSnippetId = req.query.codeSnippetId;

  if (!codeSnippetId) throw new Error('No codeSnippetId provided!');

  try {
    const data = {code: getCodeSnippetService(codeSnippetId, 'display')};
    return res.json(data);
  } catch (err) {
    return res.status(404).send(err.message);
  }
};
