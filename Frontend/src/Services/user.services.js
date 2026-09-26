const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export { API_URL };

function getToken() {
  return localStorage.getItem("token");
}

export function clearSession() {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  localStorage.removeItem("user");
}

export function goHome() {
  if (window.location.pathname !== "/home") {
    window.location.assign("/home");
  }
}

async function request(path, options = {}) {
  const token = getToken();
  let response;

  try {
    response = await fetch(`${API_URL}${path}`, {
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...options.headers,
      },
      ...options,
    });
  } catch {
    if (token) {
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

export function getCurrentUser() {
  return request("/auth/me");
}

export function saveSession({ token, user }) {
  localStorage.setItem("token", token);
  localStorage.setItem("role", user.role);
  localStorage.setItem("user", JSON.stringify(user));
}

export function logout() {
  clearSession();
  goHome();
}

export function getFullName() {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.fullname) return user.fullname;
    if (user?.firstName || user?.lastName) {
      return `${user.firstName || ""} ${user.lastName || ""}`.trim();
    }
    return null;
  } catch {
    return null;
  }
}