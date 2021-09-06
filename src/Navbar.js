const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Ariobes</h1>
            <div className="links">
                <a href="/">Homepage</a>
                <a href="/about" style={{
                    backgroundColor: "steelblue",
                    color:"white",
                    borderRadius:"16px",
                }}>About Us</a>
                <a href="contact">Contact Us</a>
            </div>
        </nav>
     );
}
 
export default Navbar;