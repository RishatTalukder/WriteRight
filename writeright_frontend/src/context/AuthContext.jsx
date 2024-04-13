import { createContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  let [authTokens, setAuthTokens] = useState();
  let [user, setUser] = useState();

  const loginUser = async (e) => {
    e.preventDefault();
    let username = e.target.username.value;
    let password = e.target.password.value;
    console.log("form submitted");
    try {
      const response = await axios.post("http://localhost:8000/log_api/token/", {
        username,
        password,
      });

      // The response object will contain the data returned from the API.
      // You can access it using response.data.
      console.log(response.data);

      // If the login was successful, you might want to save the token in local storage
      // localStorage.setItem('token', response.data.token);

      // Return the response data in case it needs to be used by the caller
      console.log(response.data);
      return response.data;
    } catch (error) {
      // Handle the error
      console.error("An error occurred while logging in:", error);

      // If the login failed, you might want to show an error message
      // setError('Failed to log in');

      // Re-throw the error in case it needs to be handled by the caller
      throw error;
    }
  };

  let contextData = {
    loginUser: loginUser,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
