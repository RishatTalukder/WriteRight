// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import {AuthProvider } from "./context/AuthContext";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <>
      <AuthProvider>
        <Header />
        <Routes>
        <Route path="/home" element={<HomePage />} />
          
          <Route path="/" element={<PrivateRoute path="/home" />} />
          
          <Route path="/login" element={<LoginPage />} />
          
          
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
