import { useContext } from "react";
import { Navigate, useLocation, Route } from "react-router-dom";
import AuthContext from "../context/AuthContext"; 

function PrivateRoute({ path, element }) {
    const {user} = useContext(AuthContext)
    const isAuthenticated = user ? true : false
  return (
    isAuthenticated ? (
      element
    ) : (
      <Navigate to="/login" />
    )
  );
}

export default PrivateRoute;