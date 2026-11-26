import { Outlet } from "react-router-dom";
import Background from "../components/Background/Background";
import Header from "../components/Header/Header";

function MainLayout() {
    return (
        <div className="app">
            <Background />
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default MainLayout;