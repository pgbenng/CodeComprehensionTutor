import {testCodeService} from '../services/testCodeService.js';

export const testCodeController = async (req, res) => {
  const {code, codeSnippetId} = req.body;

  try {
    const data = await testCodeService(code, codeSnippetId);
    return res
      .status(200)
      .json({testResults: data.results.testResults[0].testResults});
  } catch (err) {
    return res.status(400).send(err.message);
  }
};
