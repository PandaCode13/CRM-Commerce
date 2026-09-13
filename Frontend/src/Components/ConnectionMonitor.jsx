import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { clearSession } from "../Services/user.services";

const API_ORIGIN = (() => {
  try {
    return new URL(import.meta.env.VITE_API_URL || "http://localhost:5000/api").origin;
  } catch {
    return "http://localhost:5000";
  }
})();

const CHECK_INTERVAL_MS = 5000;
const FAILURES_BEFORE_DISCONNECT = 2;

export default function ConnectionMonitor() {
  const navigate = useNavigate();

  useEffect(() => {
    let failures = 0;
    let stopped = false;

    const check = async () => {
      if (stopped) return;

      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 3000);
        const response = await fetch(`${API_ORIGIN}/`, {
          signal: controller.signal,
          cache: "no-store",
        });
        clearTimeout(timeout);
        failures = response.ok ? 0 : failures + 1;
      } catch {
        failures += 1;
      }

      if (failures >= FAILURES_BEFORE_DISCONNECT && localStorage.getItem("token")) {
        clearSession();
        navigate("/home", { replace: true });
        stopped = true;
      }
    };

    check();
    const interval = setInterval(check, CHECK_INTERVAL_MS);

    return () => {
      stopped = true;
      clearInterval(interval);
    };
  }, [navigate]);

  return null;
}