import "./NaviBar.css"
import { Link } from "react-router-dom";

const NaviBar = () => {
    return ( 
        <div className="navbar">
            <div className="nav-left">
                <ul className="link-left">
                    <li><a href="home" className="link">Home</a></li>
                    <li><a href="about" className="link">About</a></li>
                </ul>
            </div>
            <div className="nav-center">
                <img src="/images/RissaLogo.png" alt="Rissa Logo" className="logo-image"></img>
            </div>
            <div className="nav-right">
                <ul className="link-right">
                    <li><a href="contact" className="link">Contact</a></li>
                    <li><Link to="/events" className="link">Events</Link></li>
                </ul>
            </div>
        </div>

                    
                    

            
     );
}
 
export default NaviBar;