import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Login";
import Home from "./Home";

import { PublicRoutes } from "./components/PublicRoutes";
import { ProtectedRoutes } from "./components/ProtectedRoutes";

export function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/home" element={<ProtectedRoutes />}>
                        <Route path="/home" element={<Home />} />
                    </Route>

                    <Route path="/" element={<PublicRoutes />}>
                        <Route path="/" element={<Login />} />
                    </Route>
                </Routes>
            </Router>
        </>
    );
}
