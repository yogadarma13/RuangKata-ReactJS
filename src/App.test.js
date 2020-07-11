import React from 'react';
import { render } from '@testing-library/react';
import Footer from './components/Footer';

test("renders footer", () => {
  const { getByText } = render(<Footer />);
  const linkElement = getByText(/Copyright by Ruang Kata/i);
  expect(linkElement).toBeInTheDocument();
});
