import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders task tracker header', () => {
  render(<App />);
  const linkElement = screen.getByText(/task tracker/i);
  expect(linkElement).toBeInTheDocument();
});