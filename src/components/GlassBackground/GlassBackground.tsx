import "./GlassBackground.css";
import type { ReactNode } from "react";

interface GlassBackgroundProps {
    children?: ReactNode;
    className?: string;
    scrollable?: boolean;
}

function GlassBackground({
        children,
        className = "",
    }: GlassBackgroundProps) {
    const classes = [
        "glass-background",
        className,
    ]
        .filter(Boolean)
        .join(" ");

    return <div className={classes}>{children}</div>;
}

export default GlassBackground;