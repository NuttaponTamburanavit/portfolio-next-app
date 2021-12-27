---
to: <%= absPath %>/index.test.tsx
---
import React from 'react';
import { render, screen } from '@testing-library/react';
import <%= component_name.charAt(0).toUpperCase() + component_name.slice(1) %> from './index';

test('<<%= component_name.charAt(0).toUpperCase() + component_name.slice(1) %> /> render successful', () => {
  render(<<%= component_name.charAt(0).toUpperCase() + component_name.slice(1) %>  />);
  const element = screen.getByTestId(/test/i);
  expect(element).toBeInTheDocument();
});