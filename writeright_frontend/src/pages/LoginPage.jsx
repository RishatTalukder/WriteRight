import React from "react";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const LoginPage = () => {
  let { loginUser,user } = useContext(AuthContext);

  return (
    <div>
      {user ? <Navigate to="/home" /> : (
        <form onSubmit={loginUser}>
        <input type="text" name="username" placeholder="Enter Username" />
        <input type="password" name="password" placeholder="Enter Password" />
        <input type="submit" />
      </form>
      )}
      
    </div>
  );
};

export default LoginPage;
