import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from './index';

test('renders component successfully', () => {
  render(<Input  />);
  const element = screen.getByTestId(/test/i);
  expect(element).toBeInTheDocument();
});