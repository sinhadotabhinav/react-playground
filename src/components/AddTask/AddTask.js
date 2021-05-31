import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    // defaults
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        // accessing events
        // e.preventDefault because so it doesnt submit to a page
        e.preventDefault()
        // perform validations as per the form inputs
        if (!text) {
            alert("Please add task name")
            return
        } else if (!day) {
            alert("Please add day entry")
            return
        }
        // perform add/ submit operation
        onAdd({ text, day, reminder })
        // clear the form
        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label htmlFor='task-input'>Task</label>
                <input 
                    id='task-input'
                    type='text'
                    placeholder='Add Task'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label htmlFor='day-time-input'>Day and Time</label>
                <input 
                    id='day-time-input'
                    type='text'
                    placeholder='Add Day and Time'
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                />
            </div>
            <div className='form-control form-control-check'>
                <label htmlFor='reminder-input'>Set Reminder</label>
                <input 
                    id='reminder-input'
                    type='checkbox'
                    checked={reminder}
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div>
            <input className='btn btn-block' type='submit' value='Save Task' />
        </form>
    )
}

export default AddTask
