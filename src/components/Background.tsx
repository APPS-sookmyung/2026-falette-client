import "./Background.css";

function Background() {
    // 색선택 버튼 클릭 시 색이 변화하는 함수 추가 예정!
    return (
        <div className='background'>
            <svg className="wave_wide_center" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                <path d="M 150,1000 C 250,250 750,750 1000,0">
                    <animate
                        attributeName="d"
                        dur="6s"
                        repeatCount="indefinite"
                        values="
                            M 150,1000 C 250,250 750,750 1000,0;
                            M 150,1000 C 350,350 650,650 1000,0;
                            M 150,1000 C 200,150 800,850 1000,0;
                            M 150,1000 C 250,250 750,750 1000,0
                        "
                    />
                </path>
            </svg>
            <svg className="wave_narrow_center" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                <path d="M 150,1000 C 500,50 750,900 1000,0"/>
            </svg>
            <svg className="wave_top" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                <path d="M -50, 100 C 300,-50 600,300 900,-50"/>
            </svg>
            <svg className="wave_bottom" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                <path d="M -50,900 C 300,300 600,1000 1000,1000"/>
            </svg>
        </div>
    );
}

export default Background;