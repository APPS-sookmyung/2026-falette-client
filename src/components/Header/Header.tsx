import "./Header.css"
import logo from "../../assets/logo.svg";
import logoutIcon from "../../assets/logout.svg";
import Gradient_top from './Gradient_top.tsx'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { getMe, logout } from "../../utils/auth.ts";

function Header () {
    const location = useLocation();
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        getMe()
            .then((user) => {
                console.log("getMe 결과:", user);
                setIsLoggedIn(user?.isAuthenticated === true);
            })
            .catch((error) => {
                console.error("로그인 상태 확인 실패:", error);
                setIsLoggedIn(false);
            });
    }, []);

    const handleLogout = async () => {
        if (!window.confirm("로그아웃 하시겠습니까?")) return;

        try {
            await logout();
            setIsLoggedIn(false);
            navigate("/");
        } catch (error) {
            console.error("로그아웃 실패:", error);
            alert("로그아웃에 실패했습니다. 다시 시도해주세요.");
        }
    };

    return (
        <header className="app-header">
            <Gradient_top/>
            <img className="header-logo" src={logo} alt="Falette"/>
            <nav className="header-nav">
                <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                    Home
                </Link>
                <Link to="/cardgallery" className={`nav-link ${location.pathname === '/cardgallery' ? 'active' : ''}`}>
                    Card Gallery
                </Link>
                <Link to="/mypage"className={`nav-link ${location.pathname === '/mypage' ? 'active' : ''}`}>
                    My Page
                </Link>
            </nav>
            {isLoggedIn && (
                <img
                    className="logout"
                    src={logoutIcon}
                    alt="Logout"
                    onClick={handleLogout}
                />
            )}
        </header>
    );
}

export default Header;