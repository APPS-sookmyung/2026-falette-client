// 버튼 스타일 파일 불러오기
import "./button.css";

// Button 컴포넌트가 받을 값의 타입 정의
interface ButtonProps {
    // 버튼 안에 표시될 글자
    text: string;

    // 버튼을 클릭했을 때 실행할 함수
    onClick?: () => void;
}

// 공통으로 사용할 Button 컴포넌트
function Button({ text, onClick }: ButtonProps) {
    return (
        <button
            // 버튼 디자인 적용을 위한 클래스 이름
            className="custom-button"

            // 버튼 클릭 시 부모 컴포넌트에서 전달한 함수 실행
            onClick={onClick}

            // form 안에서 사용할 경우 submit 되는 것을 방지하기 위해
            // 일반 버튼이라는 의미의 type="button" 지정
            type="button"
        >
            {/* 부모에서 전달받은 버튼 글자를 출력 */}
            {text}
        </button>
    );
}


// 다른 파일에서 Button 컴포넌트를 사용할 수 있도록 export
export default Button;