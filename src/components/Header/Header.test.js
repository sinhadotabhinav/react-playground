import Header from './Header';
import { BrowserRouter as Router } from 'react-router-dom'
import { fireEvent, render, screen } from '@testing-library/react';

test('configures header with default props', () => {
    expect(Header.propTypes.title).toBeDefined();
    expect(Header.defaultProps.title).toBeDefined();
  });

test('renders hello message', () => {
  render(
    <Router>
      <Header />
    </Router>);
  expect(screen.getByText('Hello: ' + Header.defaultProps.title)).toBeInTheDocument();
});

test('renders add button', () => {
    render(
      <Router>
        <Header />
      </Router>);
    expect(screen.getByRole('button', {name: /add/i})).toBeInTheDocument();
});

test('renders form control when add button is clicked', () => { 
    const onAdd = jest.fn();
    render(
      <Router>
        <Header onAdd={onAdd}/>
      </Router>);
    fireEvent.click(screen.getByRole('button', {name: /add/i}));
    expect(onAdd).toHaveBeenCalledTimes(1);
});