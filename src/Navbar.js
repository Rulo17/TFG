import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Play & Share Mind Games</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{color: '#2E0249', backgroundColor: 'goldenrod', borderRadius: '8px'}}>New Game</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;