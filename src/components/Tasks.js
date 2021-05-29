import Task from './Task'
const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        // setTasks func can be used to edit state value
        // empty fragment <></>
        // below is example for backend data which automaticall
        // assigns a key id for each row just like a database
        // and that key can be accessed using index param
        <>
            {tasks.map((task, index) => (
                // needs a key to avoid warning
                <Task
                    key={index}
                    task={task}
                    onDelete={onDelete}
                    onToggle={onToggle}
                />
            ))}
        </>
        // below is example for static data
        // <>
        // {tasks.map((task) => (
        //     // needs a key to avoid warning
        //     <Task
        //         key={task.id}
        //         task={task}
        //         onDelete={onDelete}
        //         onToggle={onToggle}
        //     />
        // ))}
        // </>
    )
}

export default Tasks