import React from 'react';
import { render, screen } from '@testing-library/react';
import courseCard from './index.tsx';

test('renders component successfully', () => {
  render(<courseCard  />);
  const element = screen.getByTestId(/test/i);
  expect(element).toBeInTheDocument();
});