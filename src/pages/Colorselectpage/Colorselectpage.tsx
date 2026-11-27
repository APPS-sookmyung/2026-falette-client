import "./Colorselectpage.css"
import { useOutletContext } from "react-router-dom";
import type { LayoutContext } from "../../layouts/Layout";
import Palette from "../../components/Palette/Palette";
import GlassBackgroundWhite from "../../components/GlassBackground_white/GlassBackground_white";
import Colorselector from "../../components/Colorselector/Colorselector";

function Colorselectpage() {
    const { backgroundColor, setBackgroundColor } =
        useOutletContext<LayoutContext>();

    return (
        <div>
            <GlassBackgroundWhite />
            <Palette />
            <Colorselector
                value={backgroundColor}
                onChange={setBackgroundColor}
            />
        </div>
    )
}

export default Colorselectpage;