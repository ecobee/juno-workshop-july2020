import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders main app title', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText('Juno x ecobee: Pair Programming Exercise');

  expect(titleElement).toBeInTheDocument();
});
