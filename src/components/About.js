import { Link } from 'react-router-dom'
const About = () => {
    return (
        <div>
            <h4>Version 0.0.1</h4>
            {/* to stop pages from reloading when routing use <Link />
            from react-router-dom instead of <a> tags */}
            {/* <a href='/'>Home</a> */}
            <Link to='/'>Home</Link>
        </div>
    )
}

export default About