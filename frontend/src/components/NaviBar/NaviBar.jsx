import "./NaviBar.css"

const NaviBar = () => {
    return ( 
        <div className="nav-container">
            <div className="nav-left">
                <ul className="link-left">
                    <li>Home</li>
                    <li>About</li>
                </ul>
            </div>
            <div className="nav-center">
                <img src="/images/RissaLogo.png" alt="Rissa Logo" className="logo-image"></img>
            </div>
            <div className="nav-right">
                <ul className="link-right">
                    <li>Contact</li>
                    <li>Events</li>
                </ul>
            </div>
        </div>

                    
                    

            
     );
}
 
export default NaviBar;