import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

it('renders without crashing', () => {
  const { asFragment } = render(<App />);

  expect(asFragment()).toMatchSnapshot();
});

it('should display start title', () => {
  let startTitle = 'Start';
  const { getByText } = render(
    <App>{startTitle}</App>
  );
  
  expect(getByText(startTitle)).toBeInTheDocument();
});

it('it displays start options', () => {
  const { getByTestId } = render(<App />);
  const startOptions = getByTestId('start-options');

  expect(startOptions.children.length).toBe(4);
});

it('displays end option', () => {
  const { getByTestId } = render(<App/>);
  const endOptions = getByTestId('end-options');

  expect(endOptions.children.length).toBe(1);
});

it('displays result journey from A to H', () => {
  const { getByTestId, getByText } = render(<App/>);
  
  fireEvent.click(getByText('A'));
  fireEvent.click(getByTestId('search-journey'));
  const resultJourney = getByTestId('result-journey');
  
  expect(resultJourney.children.length).toBe(6);
});

it('displays result journey from B to H', () => {
  const { getByTestId, getByText } = render(<App/>);
  
  fireEvent.click(getByText('B'));
  fireEvent.click(getByTestId('search-journey'));
  const resultJourney = getByTestId('result-journey');
  
  expect(resultJourney.children.length).toBe(4);
});

it('displays result journey from C to H', () => {
  const { getByTestId, getByText } = render(<App/>);
  
  fireEvent.click(getByText('C'));
  fireEvent.click(getByTestId('search-journey'));
  const resultJourney = getByTestId('result-journey');
  
  expect(resultJourney.children.length).toBe(5);
});

it('displays result journey from D to H', () => {
  const { getByTestId, getByText } = render(<App/>);
  
  fireEvent.click(getByText('D'));
  fireEvent.click(getByTestId('search-journey'));
  const resultJourney = getByTestId('result-journey');
  
  expect(resultJourney.children.length).toBe(3);
});
