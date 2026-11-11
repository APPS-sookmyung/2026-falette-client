import "./Header.css"
import logo from "../assets/logo.png";
import { Link, useLocation } from 'react-router-dom';

function Header () {
    const location = useLocation();

    return (
        <header className="app-header">
            <div className="logo">
                <img src={logo} alt="Logo"/>
                <p>Falette</p>
            </div>
            <nav className="header-nav">
                <Link 
                to="/" 
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                >
                Home
                </Link>
                <Link 
                to="/cardgallery" 
                className={`nav-link ${location.pathname === '/cardgallery' ? 'active' : ''}`}
                >
                Card Gallery
                </Link>
                <Link 
                to="/mypage"
                className={`nav-link ${location.pathname === '/mypage' ? 'active' : ''}`}
                >
                My Page
                </Link>
            </nav>
        </header>
    );
}

export default Header;