const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
const API_URL_BACKEND = "CRM-Commerce-Backend";

export function clearSession() {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  localStorage.removeItem("user");
}

function goHome() {
  if (window.location.pathname !== "/home") {
    window.location.assign("/home");
  }
}

async function request(path, options = {}) {
  let response;

  try {
    response = await fetch(`${API_URL || API_URL_BACKEND}${path}`, {
      headers: { "Content-Type": "application/json", ...options.headers },
      ...options,
    });
  } catch {
    if (localStorage.getItem("token")) {
      clearSession();
      goHome();
    }
    throw new Error("Connexion au serveur perdue.");
  }

  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.message || "Une erreur est survenue.");
  return data;
}

export function login(credentials) {
  return request("/auth/login", {
    method: "POST",
    body: JSON.stringify(credentials),
  });
}

export function register(user) {
  return request("/auth/register", {
    method: "POST",
    body: JSON.stringify(user),
  });
}

export function saveSession({ token, user }) {
  localStorage.setItem("token", token);
  localStorage.setItem("role", user.role);
  localStorage.setItem("user", JSON.stringify(user));
}

export function getFullName() {
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? user.fullname : null;
}