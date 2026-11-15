// 팝업 전용 CSS 파일 불러오기
import "./popup.css";
import Button from "../button/button";

// Popup 컴포넌트
function Popup() {
    return (
        // popup-box 클래스가 적용된 div
        <div className="popup-box">
                <Button text="직관적 끌림" />
        </div>
    );
}

// 다른 파일에서 Popup 컴포넌트를 사용할 수 있도록 export
export default Popup;