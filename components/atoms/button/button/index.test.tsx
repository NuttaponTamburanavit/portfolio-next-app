import React from 'react';
import { render, screen } from '@testing-library/react';
import button from './index.tsx';

test('renders component successfully', () => {
  render(<button  />);
  const element = screen.getByTestId(/test/i);
  expect(element).toBeInTheDocument();
});