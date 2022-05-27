import { render, screen } from '@testing-library/react';
import Client from '../client';





test('should render page Client div', () => {

  render(<Client />);
  const element = screen.getByTestId('client-div')
  expect(element).toBeInTheDocument();
});

test('should render LIST OF COMPANIES ICON div', () => {

  render(<Client />);
  const element = screen.getByTestId('list-of-icons')
  expect(element).toBeInTheDocument();
});

test('should render page Client text', () => {

  render(<Client />);
  const text = screen.getByText("CLIENTS");
  expect(text).toBeInTheDocument();
});


