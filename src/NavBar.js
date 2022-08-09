import { Link } from 'react-router-dom';

const NavBar = () => {
    return ( 
        <nav className='navbar'>
            <h1>Catherine Stewart</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
            </div>
        </nav>
     );
}
 
export default NavBar;