const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Play & Share Mind Games</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{color: '#2E0249', backgroundColor: 'goldenrod', borderRadius: '8px'}}>New Game</a>
            </div>
        </nav>
    );
}
 
export default Navbar;