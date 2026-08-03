import { Outlet } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

export default function ProtectedLayout({ role }) {
  return (
    <ProtectedRoute role={role}>
      <Outlet />
    </ProtectedRoute>
  );
}
