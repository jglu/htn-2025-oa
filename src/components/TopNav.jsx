import { Link } from "react-router-dom";
import "./TopNav.css";

// either "Events" or "Log In"
const TopNav = () => {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/events" className="nav-button">
                    Events
                </Link>
                <Link to="/login" className="nav-button">
                    Log In
                </Link>
            </div>
        </nav>
    )
}

export default TopNav;