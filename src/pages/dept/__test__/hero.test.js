import { render, screen } from '@testing-library/react';
import Hero from './../hero';




test('should render page Hero div', () => {

  render(<Hero/>);
  const element = screen.getByTestId('hero-div')
  expect(element).toBeInTheDocument();
});

test('should render page Header', () => {

  render(<Hero/>);
  const element = screen.getByTestId('header')
  expect(element).toBeInTheDocument();
});


test('should render the work text', () => {

  render(<Hero/>);
  const text = screen.getByText("WORK");
  expect(text).toBeInTheDocument();
});

test('should render the VIEW CASE text', () => {

  render(<Hero/>);
  const text = screen.getByText("VIEW CASE");
  expect(text).toBeInTheDocument();
});
