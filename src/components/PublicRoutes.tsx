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

export function PublicRoutes() {
    const auth = useAuth();

    return auth ? <Navigate to="/home" /> : <Outlet />;
}
