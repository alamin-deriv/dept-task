import { render, screen } from '@testing-library/react';
import Content from './../content';
import {listOfContents} from './mockData';




test('should render page Content div', () => {

  render(<Content listOfContents={listOfContents}/>);
  const element = screen.getByTestId('content-div')
  expect(element).toBeInTheDocument();
});

test('should render page filter', () => {

  render(<Content listOfContents={listOfContents}/>);
  const element = screen.getByTestId('filter')
  expect(element).toBeInTheDocument();
});

test('should render page Main section', () => {

  render(<Content listOfContents={listOfContents}/>);
  const element = screen.getByTestId('main-section')
  expect(element).toBeInTheDocument();
});

test('should render page Quote section', () => {

  render(<Content listOfContents={listOfContents}/>);
  const element = screen.getByTestId('quote-section')
  expect(element).toBeInTheDocument();
});
