import "./Gradient_top.css";
import { colorFilters, type BackgroundColor } from "../../types/backgroundColors";

type GradientTopProps = {
    color: BackgroundColor | null;
};

function Gradient_top({ color }: GradientTopProps) {
    return (
        <div className="gradient-top">
            <svg
                viewBox="0 0 1920 462"
                fill="none"
                aria-hidden="true"
                style={{
                    filter: color === null ? "none" : colorFilters[color],
                }}
            >
                <rect
                    width="1920"
                    height="462"
                    fill="url(#paint0_linear_1_70)"
                />
                <defs>
                    <linearGradient
                        id="paint0_linear_1_70"
                        x1="960"
                        y1="0"
                        x2="960"
                        y2="462"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#3D59D2" />
                        <stop
                            offset="1"
                            stopColor="#6680F1"
                            stopOpacity="0"
                        />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
}

export default Gradient_top;
