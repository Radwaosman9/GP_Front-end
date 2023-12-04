import './Header.css';

import { Link } from "react-router-dom";
const Header = () => {
    return <header className="main-header">
        <nav>
        <label class="logo">AgroFarm</label>
            <ul>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/login"}>Login</Link>
            </li>
            <li>
                <Link to={"/register"}>Register</Link>
            </li>
            <li>
                <Link to={"/logout"}>Logout</Link>
            </li>
            </ul>
            
        </nav>
     </header>
};
export default Header;