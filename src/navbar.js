import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

export default function Navbar(){
    return(
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-danger">
            <Link to="/" className="navbar-brand mx-3 mt-3">
                <p id="title">ticketsnatcher</p>
            </Link>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-3">
                {/* <li className="nav-item">
                <Link to="/home" className="nav-link" id="home">Home</Link>
                </li> */}
                <li className="nav-item">
                <Link to="/login" className="nav-link" id="login">Login</Link>
                </li>
                {/* <li className="nav-item">
                <Link to="/register" className="nav-link" id="regis">Register</Link>
                </li> */}
            </ul>
            </div>
        </nav>
        </div>
    );
}