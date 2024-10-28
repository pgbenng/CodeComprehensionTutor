import {jest} from '@jest/globals';
import {fireEvent, render, screen} from '@testing-library/react';
import Dashboard, {DashboardRender, send} from '../components/Dashboard.js';

// https://www.geeksforgeeks.org/how-to-test-react-components-using-jest/

// in case ollama invocation takes longer than expected
jest.setTimeout(20000);

describe('Dashboard', () => {
  const sendMock = jest.fn();
  const getEasyCodeSnippetMock = jest.fn();
  const getMediumCodeSnippetMock = jest.fn();
  const getHardCodeSnippetMock = jest.fn();
  jest.spyOn(window, 'alert').mockImplementation(() => {
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render Dashboard component elements', () => {
    render(<Dashboard/>);

    const inputBox = screen.getByTestId('explanationInput');
    const sendButton = screen.getByTestId('sendButton');
    const easyButton = screen.getByTestId('easyButton');
    const mediumButton = screen.getByTestId('mediumButton');
    const hardButton = screen.getByTestId('hardButton');
    const codeSnippet = screen.getByTestId('codeSnippet');

    expect(inputBox).toBeInTheDocument();
    expect(sendButton).toBeInTheDocument();
    expect(easyButton).toBeInTheDocument();
    expect(mediumButton).toBeInTheDocument();
    expect(hardButton).toBeInTheDocument();
    expect(codeSnippet).toBeInTheDocument();
  });

  it('should call send() when send button is clicked', () => {
    render(<DashboardRender send={sendMock}/>);

    const sendButton = screen.getByTestId('sendButton');

    fireEvent.click(sendButton);
    expect(sendMock).toHaveBeenCalled();
  });

  it('should call getEasyCodeSnippet() when easy button is clicked', () => {
    render(<DashboardRender getEasyCodeSnippet={getEasyCodeSnippetMock}/>);

    const easyButton = screen.getByTestId('easyButton');

    fireEvent.click(easyButton);
    expect(getEasyCodeSnippetMock).toHaveBeenCalled();
  });

  it('should call getMediumCodeSnippet() when medium button is clicked', () => {
    render(<DashboardRender getMediumCodeSnippet={getMediumCodeSnippetMock}/>);

    const mediumButton = screen.getByTestId('mediumButton');

    fireEvent.click(mediumButton);
    expect(getMediumCodeSnippetMock).toHaveBeenCalled();
  });

  it('should call getHardCodeSnippet() when hard button is clicked', () => {
    render(<DashboardRender getHardCodeSnippet={getHardCodeSnippetMock}/>);

    const hardButton = screen.getByTestId('hardButton');

    fireEvent.click(hardButton);
    expect(getHardCodeSnippetMock).toHaveBeenCalled();
  });

  it('should send success alert when send() is invoked successfully', async () => {
    try {
      await send('test explanation');
      expect(window.alert).toHaveBeenCalledWith(
        'Prompt was successfully sent!'
      );
    } catch (e) {
      // fail test here: function should not throw error
      expect(false).toBe(true);
    }
  });

  it('should send error alert with correct error message when send() receives no explanation', async () => {
    try {
      await send(null);
      // fail test here: function should throw error
      expect(false).toBe(true);
    } catch (e) {
      expect(window.alert).toHaveBeenCalledWith('No explanation provided!');
    }
  });
});
