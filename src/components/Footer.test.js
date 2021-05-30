import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';
import { BrowserRouter as Router } from 'react-router-dom'

test('renders copyright info in footer', () => {
  render(
    <Router>
      <Footer />
    </Router>);
  const linkElement = screen.getByText(/Copyright © 2021 Abhinav Sinha/i);
});

test('renders link to about page in footer', () => {
  render(
    <Router>
      <Footer />
    </Router>);
  const linkElement = screen.getByRole('link', {name: /about/i});
});