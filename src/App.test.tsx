import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders the initial layout correctly', () => {
  render(<App />);
  expect(screen.getByText(/Max Number to Print/i)).toBeInTheDocument();
  expect(screen.getByText(/Height/i)).toBeInTheDocument();
  expect(screen.getByText(/Width/i)).toBeInTheDocument();
  expect(screen.getByText(/The printed numbers/i)).toBeInTheDocument();
  expect(screen.getByText(/The calculated area is printed here/i)).toBeInTheDocument();
});

test('displays numbers up to the input number', () => {
  render(<App />);
  const input = screen.getByLabelText(/Max Number to Print/i);
  fireEvent.change(input, { target: { value: '5' } });
  expect(screen.getByText('1, 2, 3, 4, 5')).toBeInTheDocument();
});

test('displays the area of a triangle given height and width', () => {
  render(<App />);
  const heightInput = screen.getByLabelText(/Height/i);
  const widthInput = screen.getByLabelText(/Width/i);

  fireEvent.change(heightInput, { target: { value: '10' } });
  fireEvent.change(widthInput, { target: { value: '5' } });

  expect(screen.getByText(/Area of Triangle: 25/i)).toBeInTheDocument();
});
