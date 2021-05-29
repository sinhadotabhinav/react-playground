import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from "./Button";

const headerStyle = {
    color: 'black',
    // backgroundColor: 'black',
}

const Header = (props) => {
    // react-router-dom offers useLocation which is a hook to 
    // find out current route in the active session. below we will
    // ue location.patname and add conditional statement to view/ unview
    // the add/ cancel button
    const location = useLocation()

    return (
        <header className='header'>
            {/* inline style example: */}
            {/* <h1 style={{ color: 'red', backgroundColor: 'black'}}> */}
            <h1 style={headerStyle}>Hello: {props.title}</h1>
            {location.pathname === '/' && (<Button
                color={props.showForm ? 'steelblue' : 'green'}
                text={props.showForm ? 'Cancel' : 'Add'}
                onClick={props.onAdd}
            />)}
        </header>
    )
}

// another way to pass the exact prop by descontructing the props
// const Header = ({ title }) => {
//     return (
//         <header>
//             <h1>Task Tracker says hello to: {title}</h1>
//         </header>
//     )
// }

// when no title prop is sent to Header component in App.js
// set default value
Header.defaultProps = {
    title: 'Abhinav'
}

// when you want to validate against the data type
// if a number/ boolean is passed react-DOM still renders but
// throws warnings when you open browserinspect console
Header.propTypes = {
    title: PropTypes.string
    // title: PropTypes.string.isRequired - mandate
}

export default Header