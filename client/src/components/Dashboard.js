import React, {useState} from 'react';
import styles from './Dashboard.module.css';
import {getCodeSnippet, sendExplanation, testCode} from '../services/api.js';

export const send = async (explanation, functionName, setTestResults) => {
  try {
    if (!explanation) alert('No explanation provided!');
    const output = await sendExplanation(explanation);
    alert('Prompt was successfully sent!');
    const just_the_code = output.response
      .split('```javascript')[1]
      .split('```')[0];
    const testResponse = await testCode(just_the_code, functionName);
    setTestResults(testResponse.data.testResults);
  } catch (err) {
    console.error(err.message);
  }
};

export const handleGetCodeSnippet = (
  setCodeSnippet,
  codeSnippetId,
  setFunctionName
) => {
  getCodeSnippet(codeSnippetId).then((res) => {
    setCodeSnippet(res.code);
    setFunctionName(codeSnippetId);
  });
};

export const getEasyCodeSnippet = (
  setCodeSnippet,
  easySnippetIds,
  setFunctionName
) => {
  handleGetCodeSnippet(
    setCodeSnippet,
    easySnippetIds[Math.floor(Math.random() * easySnippetIds.length)],
    setFunctionName
  );
};

export const getMediumCodeSnippet = (
  setCodeSnippet,
  mediumSnippetIds,
  setFunctionName
) => {
  handleGetCodeSnippet(
    setCodeSnippet,
    mediumSnippetIds[Math.floor(Math.random() * mediumSnippetIds.length)],
    setFunctionName
  );
};

export const getHardCodeSnippet = (
  setCodeSnippet,
  hardSnippetIds,
  setFunctionName
) => {
  handleGetCodeSnippet(
    setCodeSnippet,
    hardSnippetIds[Math.floor(Math.random() * hardSnippetIds.length)],
    setFunctionName
  );
};

export const DashboardRender = ({
                                  send,
                                  getEasyCodeSnippet,
                                  getMediumCodeSnippet,
                                  getHardCodeSnippet,
                                }) => {
  const [explanation, setExplanation] = useState('');
  const [codeSnippet, setCodeSnippet] = useState('');
  const [functionName, setFunctionName] = useState('');
  const [testResults, setTestResults] = useState(null);
  const easySnippetIds = ['add', 'divide'];
  const mediumSnippetIds = ['grade', 'sum'];
  const hardSnippetIds = ['binarySearch', 'twoSum'];

  return (
    <div style={{margin: '20px'}}>
      <div>
        <button
          data-testid={'easyButton'}
          onClick={() =>
            getEasyCodeSnippet(setCodeSnippet, easySnippetIds, setFunctionName)
          }
        >
          Easy
        </button>
        <button
          data-testid={'mediumButton'}
          onClick={() =>
            getMediumCodeSnippet(
              setCodeSnippet,
              mediumSnippetIds,
              setFunctionName
            )
          }
        >
          Medium
        </button>
        <button
          data-testid={'hardButton'}
          onClick={() =>
            getHardCodeSnippet(setCodeSnippet, hardSnippetIds, setFunctionName)
          }
        >
          Hard
        </button>
      </div>
      <pre data-testid={'codeSnippet'}>{codeSnippet}</pre>
      <p>
        <b>Please always start your explanations with 'This function'.</b>
      </p>
      <input
        data-testid={'explanationInput'}
        className={styles.explanation}
        placeholder={'Provide your explanation here'}
        onChange={(e) => setExplanation(e.target.value)}
      ></input>
      <button
        data-testid={'sendButton'}
        onClick={() => send(explanation, functionName, setTestResults)}
      >
        Send
      </button>
      {testResults
        ? testResults.map((testResult) => (
          <div>
            <p>
              <b>
                <u>Test Description: {testResult.title}</u>
              </b>
            </p>
            <p>
              <b>Test Status: </b>
              {testResult.status}
            </p>
            {testResult.failureDetails ? (
              <div>
                <p>
                  <b>Expected: </b>
                  {testResult.failureDetails[0]?.matcherResult?.expected}
                </p>
                <p>
                  <b>Actual: </b>
                  {testResult.failureDetails[0]?.matcherResult?.actual}
                </p>
              </div>
            ) : null}
          </div>
        ))
        : null}
    </div>
  );
};

const Dashboard = () => {
  return (
    <DashboardRender
      send={send}
      getEasyCodeSnippet={getEasyCodeSnippet}
      getMediumCodeSnippet={getMediumCodeSnippet}
      getHardCodeSnippet={getHardCodeSnippet}
    />
  );
};

export default Dashboard;
