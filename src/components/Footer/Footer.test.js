import Footer from './Footer';
import { createMemoryHistory } from 'history';
import { BrowserRouter, Router } from 'react-router-dom'
import { fireEvent, render, screen } from '@testing-library/react';

test('renders copyright info in footer', () => {
  render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>);
  expect(screen.getByText(/Copyright © 2021 Abhinav Sinha/i)).toBeInTheDocument();
});

test('renders link to about page in footer', () => {
  render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>);
  expect(screen.getByRole('link', {name: /about/i})).toBeInTheDocument();
});

test('renders about page when link is clicked', async () => {
  const history = createMemoryHistory()
  render(
    <Router history={history}>
      <Footer />
    </Router>);
  fireEvent.click(screen.getByText(/about/i));
  expect(history.location.pathname).toBe('/about')
});