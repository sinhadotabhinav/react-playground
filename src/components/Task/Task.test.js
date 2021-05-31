import Task from './Task';
import { BrowserRouter as Router } from 'react-router-dom'
import { render, screen } from '@testing-library/react';

const task = {
    "text": "Doctor's appointment",
    "day": "Feb 5th at 2:00pm",
    "reminder": true
};

test('renders task name', () => {
    render(
        <Router>
          <Task task={task}/>
        </Router>);
    expect(screen.getByText(task.text)).toBeInTheDocument();
});

test('renders fatimes icon', () => {
    render(
        <Router>
          <Task task={task}/>
        </Router>);
    expect(screen.getByTitle(/pointer-icon/i)).toBeInTheDocument();
});

test('renders task day and time', () => {
    render(
        <Router>
          <Task task={task}/>
        </Router>);
    expect(screen.getByText(task.day)).toBeInTheDocument();
});