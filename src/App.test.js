import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

afterEach(cleanup);

it('renders without crashing', () => {
  const { asFragment } = render(<App />);

  expect(asFragment()).toMatchSnapshot();
});

it('should display start title', () => {
  const startTitle = 'Start';
  const { getByText } = render(
    <App>{startTitle}</App>
  );

  expect(getByText(startTitle)).toBeInTheDocument()
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
