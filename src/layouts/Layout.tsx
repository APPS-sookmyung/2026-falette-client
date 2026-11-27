import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Background from "../components/Background/Background";
import type { BackgroundColor } from "../types/backgroundColors";
import { useLocation } from "react-router-dom";

const colorEnabledPaths = [
    "/color",
];

export type LayoutContext = {
    backgroundColor: BackgroundColor | null;
    setBackgroundColor:
        React.Dispatch<React.SetStateAction<BackgroundColor | null>>;
};

function MainLayout() {
    const [backgroundColor, setBackgroundColor] =
        useState<BackgroundColor | null >(null);

    const { pathname } = useLocation();

    const isColorEnabledPage = colorEnabledPaths.some(
        (path) => pathname === path || pathname.startsWith(`${path}/`)
    );
    const visibleColor = isColorEnabledPage ? backgroundColor : null;

    return (
        <div className="app">
            <Background color={visibleColor} />
            <Header backgroundColor={visibleColor} />
            <main>
                <Outlet context={{ backgroundColor, setBackgroundColor }} />
            </main>
        </div>
    );
}

export default MainLayout;