import AddTask from './AddTask';
import { fireEvent, render, screen } from '@testing-library/react';

test('renders labels in the form', () => {
  render(<AddTask />);
  expect(screen.getByLabelText(/task/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/day and time/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/reminder/i)).toBeInTheDocument();
});

test('renders input boxes with placeholders in the form', () => {
    render(<AddTask />);
    expect(screen.getByPlaceholderText(/add task/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/add day and time/i)).toBeInTheDocument();
});

test('renders checkbox in the form', () => {
    render(<AddTask />);
    expect(screen.getByRole('checkbox', {name: /reminder/i, checked: false})).toBeInTheDocument();
});

test('renders button in the form', () => {
    render(<AddTask />);
    expect(screen.getByRole('button', {name: /save task/i})).toBeInTheDocument();
});

test('renders change in value of input fields in the form', () => {
    render(<AddTask />);
    const inputTask = screen.getByLabelText(/task/i);
    fireEvent.change(inputTask, {target: {value: 'Doctor\'s appointment'}});
    expect(inputTask.value).toBe('Doctor\'s appointment');
    const inputDayTime = screen.getByLabelText(/day and time/i);
    fireEvent.change(inputDayTime, {target: {value: 'Feb 26th at 5:00pm'}});
    expect(inputDayTime.value).toBe('Feb 26th at 5:00pm');
    const inputReminder = screen.getByLabelText(/reminder/i);
    fireEvent.change(inputReminder, {target: {value: true}});
    expect(inputReminder.value).toBe("true");
});

// test('renders the results of submit form action', async () => {
//     const utils = render(<AddTask />);
//     fireEvent.change(screen.getByLabelText(/task/i), {target: {value: 'test task'}});
//     fireEvent.change(screen.getByLabelText(/day and time/i), {target: {value: 'test date'}});
//     fireEvent.click(screen.getByRole('button', {name: /save task/i}));
// });