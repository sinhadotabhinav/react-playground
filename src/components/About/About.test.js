import About from './About';
import { createMemoryHistory } from 'history';
import { BrowserRouter, Router } from 'react-router-dom'
import { fireEvent, render, screen } from '@testing-library/react';

test('renders version info in about section', () => {
  render(
    <BrowserRouter>
      <About />
    </BrowserRouter>);
  expect(screen.getByText(/version 0.0.1/i)).toBeInTheDocument();
});

test('renders link to home page', () => {
  render(
    <BrowserRouter>
      <About />
    </BrowserRouter>);
  expect(screen.getByRole('link', {name: /home/i})).toBeInTheDocument();
});

test('renders home page when link is clicked', async () => {
  const history = createMemoryHistory()
  render(
    <Router history={history}>
      <About />
    </Router>);
  fireEvent.click(screen.getByText(/home/i));
  expect(history.location.pathname).toBe('/')
});