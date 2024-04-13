import { Navigate, useLocation, Route } from "react-router-dom";

function PrivateRoute({ path, element }) {
    const isAuthenticated = true;
  return (
    isAuthenticated ? (
      element
    ) : (
      <Navigate to="/login" />
    )
  );
}

export default PrivateRoute;