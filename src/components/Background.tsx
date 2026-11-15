import "./Background.css";
import gradientAsset from "../assets/background.svg";

function Background() {
    return (
        <div className="background">
            <img
                className="background_image"
                src={gradientAsset}
                alt=""
                aria-hidden="true"
                draggable="false"
            />
        </div>
    );
}

export default Background;
