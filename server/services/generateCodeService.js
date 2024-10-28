// Ollama Javascript library
// https://www.npmjs.com/package/ollama
// https://stackoverflow.com/questions/74165121/next-js-fetch-request-gives-error-typeerror-fetch-failed

import {Ollama} from 'ollama';

const ollama = new Ollama({host: 'http://ollama:11434'});

export const generateCodeService = (prompt) => {
  // Update this descriptor accordingly to achieve specific output from ollama
  const descriptor =
    'Return this as javascript function foo in a codeblock. Do not include example usages nor comments. Return a single function';

  // Specifies LLM model and prompt that will be used for generation
  const llm_model = 'tinyllama';
  const llm_prompt = descriptor + prompt;

  //  Call Ollama
  try {
    const response = ollama.generate({
      model: llm_model,
      prompt: llm_prompt,
      options: {
        top_p: 0.2, // Paramater to help create more consistent responses
      },
    });
    return response;
  } catch (err) {
    throw err;
  }
};
