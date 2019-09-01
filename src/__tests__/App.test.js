import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

// afterEach(cleanup);

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

it('should display end title', () => {
  const endTitle = 'End';
  const { getByText } = render(
    <App>{endTitle}</App>
  );

  expect(getByText(endTitle)).toBeInTheDocument()
});

it('it displays start options', () => {
  const { getByTestId } = render(<App />);
  const startOptions = getByTestId('start-options');

  expect(startOptions.children.length).toBe(4);
});

it('displays end options', () => {
  const { getByTestId } = render(<App/>);
  const endOptions = getByTestId('end-options');

  expect(endOptions.children.length).toBe(4);
});

it('displays result journey from B to H', () => {
  const { getByTestId, getByText } = render(<App/>);
  
  fireEvent.click(getByText('B'));
  fireEvent.click(getByText('H'));
  fireEvent.click(getByTestId('search-journey'));
  const resultJourney = getByTestId('result-journey');
  
  expect(resultJourney.children.length).toBe(4);
});
