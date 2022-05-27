import { render, screen } from '@testing-library/react';
import Footer from '../footer';





test('should render page Footer div', () => {

  render(<Footer />);
  const element = screen.getByTestId('footer-div')
  expect(element).toBeInTheDocument();
});

test('should render mainFooter div', () => {

  render(<Footer />);
  const element = screen.getByTestId('mainFooter')
  expect(element).toBeInTheDocument();
});

test('should render toUp div', () => {

  render(<Footer />);
  const element = screen.getByTestId("toUp");
  expect(element).toBeInTheDocument();
});


