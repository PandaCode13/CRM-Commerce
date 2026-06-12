import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";

import "./App.css";

// PUBLIC
import Home from "./Pages/public/Home";
import Features from "./Pages/public/Features";
import Login from "./Pages/public/Login";
import Register from "./pages/public/Register";
// import ForgotPassword from "./Pages/public/ForgotPassword";
// import ResetPassword from "./Pages/public/ResetPassword";

// USER 
import UserDashboard from "./Pages/user/UserDashboard";


import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  const location = useLocation();

  const hideNavbar =
    location.pathname.startsWith("/books/") ||
    location.pathname.startsWith("/dashboard/user/Userdashboard/");

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>

        {/* DEFAULT */}
        <Route path="/" element={<Navigate to="/home" replace />} />

        {/* PUBLIC */}
        <Route path="/home" element={<Home />} />
        <Route path="/features" element={<Features />} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
{/* 
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} /> */}

        {/* USER */}
        <Route path="/dashboard/user/Userdashboard" element={
          <ProtectedRoute>
            <UserDashboard />
          </ProtectedRoute>
        } />


      </Routes>
    </>
  );
}