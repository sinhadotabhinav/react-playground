import Button from './Button';
import { render, screen } from '@testing-library/react';

test('renders button', () => {
  render(<Button />);
  expect(screen.getAllByText(/.*/i)[0]).toBeInTheDocument();
});

test('configures button with default props', () => {
    expect(Button.propTypes.color).toBeDefined();
    expect(Button.propTypes.text).toBeDefined();
    expect(Button.propTypes.onClick).toBeDefined();
    expect(Button.defaultProps.color).toBeDefined();
    expect(Button.defaultProps.color).toBe('steelblue');
  });