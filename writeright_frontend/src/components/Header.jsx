import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Header = () => {
  let { user } = useContext(AuthContext);
  return (
    <div>
      {user ? (
        <>
          <Link to="/home">Home</Link>
          <span> | </span>
          <Link to="$">Logout</Link>
          <div>
            <span>{user.username}</span>
          </div>
        </>
      ) : (
        <>
          <Link to="/">Home</Link>
          <span> | </span>
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );
};

export default Header;
