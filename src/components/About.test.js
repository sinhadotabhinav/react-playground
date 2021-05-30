import { fireEvent, render, screen } from '@testing-library/react';
import About from '../components/About';
import { BrowserRouter as Router } from 'react-router-dom'

test('renders version info in about section', () => {
  render(
    <Router>
      <About />
    </Router>);
  const linkElement = screen.getByText(/version 0.0.1/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders link to home page', () => {
  render(
    <Router>
      <About />
    </Router>);
  const linkElement = screen.getByRole('link', {name: /home/i});
  expect(linkElement).toBeInTheDocument();
});

test('renders home page when link is clicked', () => {
  render(
    <Router>
      <About />
    </Router>);
  const linkElement = screen.getByRole('link', {name: /home/i});
  fireEvent.click(linkElement);
  expect(linkElement).toHaveBeenCalled
});