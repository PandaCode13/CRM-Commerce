import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";

// PUBLIC
import Home from "./Pages/public/Home";
import Features from "./Pages/public/Features";
import Login from "./Pages/public/Login";
import Register from "./Pages/public/Register";
import ConditionsUtilisation from "./Components/ConditionsUtilisation";
import PolitiqueConfidentialite from "./Components/PolitiqueConfidentialite";
import MentionsLegales from "./Components/MentionsLegales";
// import ForgotPassword from "./Pages/public/ForgotPassword";
// import ResetPassword from "./Pages/public/ResetPassword";

// USER 
import UserDashboard from "./Pages/user/dashboard";
import AdminDashboard from "./Pages/admin/dashboard";

import ProtectedRoute from "./Components/ProtectedRoute";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* DEFAULT */}
        <Route path="/" element={<Navigate to="/home" replace />} />

        {/* PUBLIC */}
        <Route path="/home" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/conditions-utilisation" element={<ConditionsUtilisation />} />
        <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
        <Route path="/legal" element={<MentionsLegales />} />

        {/* USER */}
        <Route path="/dashboard/user" element={
          <ProtectedRoute role="user">
            <UserDashboard />
          </ProtectedRoute>
        } />
        <Route path="/dashboard/user/*" element={<Navigate to="/dashboard/user" replace />} />

        {/* ADMIN */}
        <Route path="/dashboard/admin" element={
          <ProtectedRoute role="admin">
            <AdminDashboard />
          </ProtectedRoute>
        } />
        <Route path="/dashboard/admin/*" element={<Navigate to="/dashboard/admin" replace />} />

        {/* FALLBACK */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  );
}
