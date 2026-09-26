import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { clearSession, getCurrentUser } from "../Services/user.services";

export default function ProtectedRoute({ children, role }) {
  const token = localStorage.getItem("token");
  const [state, setState] = useState({
    status: token ? "loading" : "unauthenticated",
    user: null,
  });

  useEffect(() => {
    if (!token) return undefined;

    let cancelled = false;

    getCurrentUser()
      .then(({ user }) => {
        if (cancelled) return;
        setState({ status: "valid", user });
      })
      .catch(() => {
        if (cancelled) return;
        clearSession();
        setState({ status: "unauthenticated", user: null });
      });

    return () => {
      cancelled = true;
    };
  }, [token]);

  if (state.status === "loading") {
    return <div className="protected-loading" role="status">Vérification de la session…</div>;
  }

  if (state.status === "unauthenticated") {
    return <Navigate to="/login" replace />;
  }

  if (role && state.user.role !== role) {
    return <Navigate to="/home" replace />;
  }

  return children;
}