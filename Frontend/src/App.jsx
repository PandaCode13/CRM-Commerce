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
import UserCatalog from "./Pages/user/catalog";
import UserFavorites from "./Pages/user/favorites";
import UserOrders from "./Pages/user/orders";
import UserContact from "./Pages/user/contact";
import UserProfil from "./Pages/user/profil";

//ADMIN
import AdminDashboard from "./Pages/admin/dashboard";
import AdminUsers from "./Pages/admin/users";
import AdminOrders from "./Pages/admin/orders";
import AdminProducts from "./Pages/admin/products";
import AdminResponses from "./Pages/admin/responses";
import AdminMessages from "./Pages/admin/messages";
import AdminJuridique from "./Pages/admin/juridique";
import AdminProfil from "./Pages/admin/profil";
import AdminContrats from "./Pages/admin/contrats";

import ProtectedLayout from "./Components/ProtectedLayout";

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
        <Route element={<ProtectedLayout role="user" />}>
          <Route path="/dashboard/user" element={<UserDashboard />} />
          <Route path="/dashboard/user/catalog" element={<UserCatalog />} />
          <Route path="/dashboard/user/favorites" element={<UserFavorites />} />
          <Route path="/dashboard/user/orders" element={<UserOrders />} />
          <Route path="/dashboard/user/contact" element={<UserContact />} />
          <Route path="/dashboard/user/profil" element={<UserProfil />} />
          <Route path="/dashboard/user/*" element={<Navigate to="/dashboard/user" replace />} />
        </Route>

        {/* ADMIN */}
        <Route element={<ProtectedLayout role="admin" />}>
          <Route path="/dashboard/admin" element={<AdminDashboard />} />
          <Route path="/dashboard/admin/users" element={<AdminUsers />} />
          <Route path="/dashboard/admin/orders" element={<AdminOrders />} />
          <Route path="/dashboard/admin/products" element={<AdminProducts />} />
          <Route path="/dashboard/admin/messages" element={<AdminMessages />} />
          <Route path="/dashboard/admin/reponses" element={<AdminResponses />} />
          <Route path="/dashboard/admin/juridique" element={<AdminJuridique />} />
          <Route path="/dashboard/admin/contrats" element={<AdminContrats />} />
          <Route path="/dashboard/admin/profil" element={<AdminProfil />} />
          <Route path="/dashboard/admin/*" element={<Navigate to="/dashboard/admin" replace />} />
        </Route>

        {/* FALLBACK */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  );
}
