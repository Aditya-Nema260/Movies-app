import { useSelector } from "react-redux";
import { Navigate, Outlet } from 'react-router-dom'; 

const ProtectedRoute = () => {
//   const isAuth = useSelector((state) => state.authentication.isLoggedIn);

//   console.log("Route isAuth:", isAuth);

//   return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;