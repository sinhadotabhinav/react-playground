import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`}
             onDoubleClick={() => onToggle(task.id)}>
            <h3>
                {task.text}{' '}
                <FaTimes
                    style={{ color: 'red', cursor: 'pointer'}}
                    onClick={() => onDelete(task.id)}
                    title='pointer-icon'
                />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task

// onDelete is an action which is passed up to App.js via Tasks.js and 
// states are passed down from App.js through to Task.js