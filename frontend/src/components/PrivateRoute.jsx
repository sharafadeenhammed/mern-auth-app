import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import UserContext from "../context/UserContext";
const PrivateRoute = () => {
  console.log("redering Private component...");
  const {
    userDispatchReducer,
    userData: { userData },
  } = useContext(UserContext);
  console.log("user data: ", userData);
  return !userData ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
