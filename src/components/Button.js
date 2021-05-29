import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
    // pass color and text as props
    // override a css propety using style parameter
    // create an event on this button
    return <button onClick={onClick} style={{ backgroundColor: color }} className='btn'>{text}</button>
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button