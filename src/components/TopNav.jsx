import { Link } from "react-router-dom";
import "./TopNav.css";

// either "Events" or "Log In"
const TopNav = () => {
    const randomGradient = () => {
        const colors = ["#9bb1fc", "#6e8df9"]; // from htn
        const randomDeg = Math.floor(Math.random() * 360);
        return `linear-gradient(${randomDeg}deg, ${colors[0]}, ${colors[1]})`;
    };


    return (
        <nav className="navbar" style={{ background: randomGradient() }}>
            <h2 className="nav-title no-select">Hackathon Global Inc.™</h2>
            <div className="nav-buttons">
                <Link to="/events" className="nav-button">
                    events
                </Link>
                <Link to="/login" className="nav-button">
                    log in
                </Link>
            </div>
        </nav>
    )
}

export default TopNav;