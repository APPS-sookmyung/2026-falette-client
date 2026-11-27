import "./Background.css";
import gradientAsset from "../../assets/background.svg";
import { colorFilters, type BackgroundColor } from "../../types/backgroundColors";

type BackgroundProps = {
    color: BackgroundColor | null;
};

function Background({ color }: BackgroundProps) {
    return (
        <div className="background">
            <img
                className="background_image"
                src={gradientAsset}
                alt=""
                aria-hidden="true"
                draggable={false}
                style={{ filter: color === null ? "none" : colorFilters[color] }}
            />
        </div>
    );
}
export default Background;
