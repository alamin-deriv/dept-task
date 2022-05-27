import { render, screen } from '@testing-library/react';
import Question from '../question';





test('should render page Client div', () => {

  render(<Question />);
  const element = screen.getByTestId('question-section')
  expect(element).toBeInTheDocument();
});

test('should render Form inputs div',  () => {

  render(<Question />);
  const elements =  screen.getByTestId('form')
  expect(elements).toBeInTheDocument()
});

test('should render  QUESTION? WE ARE HERE TO HELP! text', () => {

  render(<Question />);
  const text = screen.getByText("QUESTION? WE ARE HERE TO HELP!");
  expect(text).toBeInTheDocument();
});


