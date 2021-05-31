import './App.css';
import About from './components/About/About'
import AddTask from './components/AddTask/AddTask'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Tasks from './components/Tasks/Tasks'
import logo from './logo.svg';
// using react state across multiple components
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  const name = 'Abhinav'
  const flag = true
  const [showAddTask, setShowAddTask] = useState(false)
  // for using fake REST API json-server as the backend data store
  // which can be accessed on localhost:5000/<json key>
  // port is defined in package.json npm scripts
  // start json server as mentioned in package.json
  // npm run server and then port 5000 is accessible
  const [tasks, setTasks] = useState([])
  // for using static data set
  // const [tasks, setTasks] = useState([
  //   {
  //       id: 1,
  //       text: 'Doctor\'s appointment',
  //       day: 'Feb 5th at 2:00pm',
  //       reminder: true,
  //   },
  //   {
  //       id: 2,
  //       text: 'Meeting at school',
  //       day: 'Feb 6th at 9:00am',
  //       reminder: true,
  //   },    
  // ])
  
  // react module to create side effects and is used when you
  // want something to happen when the page loads
  // in our case we want to load the data from json-server as
  // soon as the page loads
  useEffect(() => {
    const getTasks = async () => {
      // call the async function defined below to perform the GET request
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    // finally call the getTasks function
    // if you want to run this only when a value is identified such
    // as user auth, etc, then pass in the value in the dependency array
    // in our case we do not have any dependency value so we can pass an empty array
    // to the useEffect function as below
    getTasks()
  }, [])

  // fetch data - replace the below with any backend
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    })
    const data = await res.json()
    console.log(data)
    return data
  }

  // fetch single task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    console.log(data)
    return data
  }

  // // add task for static data
  // const addTask = (task) => {
  //   console.log(task)
  //   const id = Math.floor(Math.random() * 10000) + 1
  //   const newTask = { id, ...task }
  //   setTasks([...tasks, newTask])
  // }

  // add task for serve data
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task)
    })
    const data = await res.json()
    setTasks([...tasks, data])
  }

  // // delete task static data
  // const deleteTask = (id) => {
  //   console.log('delete', id)
  //   setTasks(tasks.filter((task) => task.id !== id))
  // }
  
  // delete task server data
  // use backticks when you need a variable inside a string
  const deleteTask = async (id) => {
    console.log('deleting task with id:', id)
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // // Toggle reminder for static data
  // const toggleReminder = (id) => {
  //   setTasks(
  //     tasks.map((task) => 
  //       task.id === id ? {...task, reminder: !task.reminder} : task)
  //     )
  // }

  // Toggle reminder for server data
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updatedTask = {...taskToToggle, 
      reminder: !taskToToggle.reminder}
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json', 
      },
      body: JSON.stringify(updatedTask)
    })
    const data = await res.json()
    setTasks(
      tasks.map((task) => 
        task.id === id ? {...task, reminder: data.reminder} : task
      )
    )
  }

  return (
    <Router>
      <div className="container">
        <h2>{flag ? name : "No name"}'s Task Tracker</h2>
        <Header title='Nukku' showForm={showAddTask} onAdd={() => setShowAddTask(!showAddTask)}/>        
        <Route path='/' exact render={(props) => (
          <>
            {showAddTask && <AddTask onAdd={addTask}/>}
            {tasks.length > 0 ? (
              <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
              ) : (
                'No tasks available'
              )
            }
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>          
          </>
        )} />
        <Route path='/about' component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// class based App.js component can also be used instead of function based above:
// import React from 'react'
// class App extends React.Component {
//   render() {
//     return <h1>Hello from class component</h1>
//   }
// }
// export default App

// props
// to pass a string
// <Header title='Shikha' />
// to pass a boolean or number
// <Header title={1} />
// <Header title={true} />