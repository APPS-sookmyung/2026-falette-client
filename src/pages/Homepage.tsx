import "./Homepage.css";
import homelogo from "../assets/homelogo.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMe, startAsGuest, loginWithGoogle } from "../utils/auth.ts";

function Homepage() {
    const navigate = useNavigate();
    const [showLoginModal, setShowLoginModal] = useState(false);

    // GET /auth/me → 200(구글/비회원)이면 고민 선택, 401(null)이면 로그인 팝업
    const handleStart = async () => {
        try {
            const user = await getMe();
            if (user) {
                navigate("/concern");
            } else {
                setShowLoginModal(true);
            }
        } catch (error) {
            console.error("로그인 상태 확인 실패:", error);
            setShowLoginModal(true);
        }
    };

    const handleGoogleLogin = () => {
        loginWithGoogle();
        navigate("/concern");   // ★ 백엔드 연결 시 : 실제 연동 후엔 구글 페이지에 갔다가 /로 돌아오므로 삭제
    };

    const handleGuestStart = () => {
        startAsGuest();
        navigate("/concern");
    };

    return (
        <div className="homepage">
            <section className="common-section">
                <img src={homelogo} alt="Logo"/>
                <p className="exp">당신의 운명이 그리는 색채, FALETTE에서 만나는 나의 마음</p>
                <button className="start-button" data-text="start" onClick={handleStart}>
                    start
                </button>
            </section>

            {showLoginModal && (
                <div className="login-modal-backdrop" onClick={() => setShowLoginModal(false)}>
                    <div className="login-modal" onClick={(e) => e.stopPropagation()}>
                        <p className="login-modal-title">
                            안녕하세요<br />
                            falette 입니다!
                        </p>
                        <div className="login-modal-buttons">
                            <button className="login-modal-btn" onClick={handleGoogleLogin}>
                                Google로 시작하기
                            </button>
                            <button className="login-modal-btn" onClick={handleGuestStart}>
                                비회원 체험하기
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Homepage;