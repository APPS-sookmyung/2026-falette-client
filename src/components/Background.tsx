import "./Background.css";
import Gradient_top from "./Gradient_top";

function Background() {
    // 색선택 버튼 클릭 시 색이 변화하는 함수 추가 예정!
    return (
        <div>
            <div className="background">
                {/* 고정 레이어: 한 번만 그려지고 이후 다시 계산되지 않음 */}
                <svg className="layer" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                    <defs>
                        <filter id="blur_static" filterUnits="userSpaceOnUse" x="-200" y="-200" width="1400" height="1400">
                            <feGaussianBlur stdDeviation="45" />
                        </filter>
                    </defs>
                    <g filter="url(#blur_static)">
                        <path className="wave_bottom" d="M 300,1100 C 450,800 600,650 1050,650" />
                        <path className="wave_top" d="M 450,-100 C 600,150 800,250 1050,100" />
                        <path className="wave_narrow_center" d="M 130,1100 C 500,50 750,900 1050,-50" />
                    </g>
                </svg>

                {/* 움직이는 레이어: 블러는 한 번만 그리고 div를 transform/opacity로만 움직임 */}
                <div className="layer drift">
                    <svg className="layer" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                        <defs>
                            <filter id="blur_wide" filterUnits="userSpaceOnUse" x="-200" y="-200" width="1400" height="1400">
                                <feGaussianBlur stdDeviation="45" />
                            </filter>
                        </defs>
                        <path
                            className="wave_wide_center"
                            filter="url(#blur_wide)"
                            d="M 130,1100 C 250,250 750,750 1050,-50"
                        />
                    </svg>
                </div>
            </div>
            <Gradient_top/>
        </div>
    );
}

export default Background;