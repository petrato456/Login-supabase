import { Navigate, Outlet } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useAuth = () => {
    const { token } = useContext(AuthContext);
    if (token !== "") {
        return true;
    } else {
        return false;
    }
};

export function ProtectedRoutes() {
    const auth = useAuth();

    return auth ? <Outlet /> : <Navigate to="/" />;
}
