import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/Layout";
import HomePage from "../pages/Homepage/Homepage";
import Mypage from "../pages/Mypage/Mypage";

function AppRouter() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/mypage" element={<Mypage />} />
                <Route path="/concern" />
            </Route>
        </Routes>
    );
}

export default AppRouter;