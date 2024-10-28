import {generateCodeService} from '../services/generateCodeService.js';

export const sendExplanationController = async (req, res) => {
  const prompt = req.body;

  try {
    const data = await generateCodeService(prompt.explanation);
    return res.status(200).send(data);
  } catch (err) {
    return res.status(400).send(err.message);
  }
};
