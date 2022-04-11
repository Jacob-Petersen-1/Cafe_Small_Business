import "./NaviBar.css"
import { Link } from "react-router-dom";

const NaviBar = () => {
    return ( 
        <div className="navbar">
            <div className="nav-left">
                <ul className="link-left">
                    <li><a href="home">Home</a></li>
                    <li><a href="about">About</a></li>
                </ul>
            </div>
            <div className="nav-center">
                <img src="/images/RissaLogo.png" alt="Rissa Logo" className="logo-image"></img>
            </div>
            <div className="nav-right">
                <ul className="link-right">
                    <li><a href="contact">Contact</a></li>
                    <li><Link to="/events">Events</Link></li>
                </ul>
            </div>
        </div>

                    
                    

            
     );
}
 
export default NaviBar;