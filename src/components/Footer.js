import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <p>Copyright &copy; 2021 Abhinav Sinha</p>
            {/* to stop pages from reloading when routing use <Link />
            from react-router-dom instead of <a> tags */}
            {/* <a href='/about'>About</a> */}
            <Link to='/about'>About</Link>
        </footer>
    )
}

export default Footer
