import Tasks from './Tasks';
import { BrowserRouter as Router } from 'react-router-dom'
import { render, screen } from '@testing-library/react';

const tasks = [
    {
      "text": "Doctor's appointment",
      "day": "Feb 5th at 2:00pm",
      "reminder": true
    },
    {
      "text": "Meeting at school",
      "day": "Feb 6th at 9:00am",
      "reminder": false
    },
  ];

test('renders every task names', () => {
    render(
        <Router>
          <Tasks tasks={tasks}/>
        </Router>);
    for (var counter = 0; counter < tasks.length; counter++) {
        expect(screen.getByText(tasks[counter].text)).toBeInTheDocument();
    };
});

test('renders fatimes icons', () => {
    render(
        <Router>
          <Tasks tasks={tasks}/>
        </Router>);
    expect(screen.getAllByTitle(/pointer-icon/i).length).toEqual(tasks.length);
});

test('renders every task day and time', () => {
    render(
        <Router>
          <Tasks tasks={tasks}/>
        </Router>);
    for (var counter = 0; counter < tasks.length; counter++) {
        expect(screen.getByText(tasks[counter].day)).toBeInTheDocument();
    };
});