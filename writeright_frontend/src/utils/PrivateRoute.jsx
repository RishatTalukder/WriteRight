import { useContext, useState } from "react";
import { Navigate, useLocation, Route } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function PrivateRoute({ path }) {
  const { user } = useContext(AuthContext);
  const isAuthenticated = user ? true : false;
  return (
    <div>
      {isAuthenticated ? (
        <Navigate to="/home"z/>
      ) : (
        <Navigate to="/login"/>
      )}
    </div>
  )
}

export default PrivateRoute;
