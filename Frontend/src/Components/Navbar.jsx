import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import "./navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("dashboard-theme") || "dark");
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.documentElement.dataset.appTheme = theme;
    localStorage.setItem("dashboard-theme", theme);
  }, [theme]);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("user");
    closeMenu();
    navigate("/home");
  };

  const dashboardPath = role === "admin" ? "/dashboard/admin" : "/dashboard/user";
  const roleClass = role === "admin" ? "navbar--admin" : "navbar--user";

  return (
    <nav className={`navbar ${token ? roleClass : ""}`}>
      <div className="navbar__inner">
        <div className="navbar__logo">
          <img src={logo} alt="CRM Commerce logo" className="navbar__logo-img" width={50} height={50} />
          <Link to={token ? dashboardPath : "/home"} onClick={closeMenu} className="navbar__brand">Commerce CRM</Link>
        </div>

        <button className="navbar__toggle" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-label="Ouvrir le menu">
          ☰
        </button>

        <div className={`navbar__menu ${menuOpen ? "navbar__menu--open" : ""}`}>
          {!token && <>
            <Link to="/home" onClick={closeMenu} className="nav-link">Accueil</Link>
            <Link to="/features" onClick={closeMenu} className="nav-link">Fonctionnalités</Link>
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="nav-btn nav-btn--theme">
              {theme === "dark" ? "Mode clair" : "Mode sombre"}
            </button>
            <Link to="/login" onClick={closeMenu} className="nav-link">Connexion</Link>
            <Link to="/register" onClick={closeMenu} className="nav-btn nav-btn--outline">S'inscrire</Link>

          </>}

          {token && role === "user" && <>
            <Link to="/dashboard/user" onClick={closeMenu} className="nav-link">Tableau de bord</Link>
            <Link to="/dashboard/user/catalog" onClick={closeMenu} className="nav-link">Catalogue</Link>
            <Link to="/dashboard/user/favorites" onClick={closeMenu} className="nav-link">Favoris</Link>
            <Link to="/dashboard/user/orders" onClick={closeMenu} className="nav-link">Commandes</Link>
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="nav-btn nav-btn--theme">
              {theme === "dark" ? "Mode clair" : "Mode sombre"}
            </button>
            <button onClick={logout} className="nav-btn nav-btn--primary">Déconnexion</button>
          </>}

          {token && role === "admin" && <>
            <Link to="/dashboard/admin" onClick={closeMenu} className="nav-link">Tableau de bord</Link>
            <Link to="/dashboard/admin/users" onClick={closeMenu} className="nav-link">Utilisateurs</Link>
            <Link to="/dashboard/admin/books" onClick={closeMenu} className="nav-link">CRM</Link>
            <Link to="/dashboard/admin/categories" onClick={closeMenu} className="nav-link">Catégories</Link>
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="nav-btn nav-btn--theme">
              {theme === "dark" ? "Mode clair" : "Mode sombre"}
            </button>
            <button onClick={logout} className="nav-btn nav-btn--primary">Déconnexion</button>
          </>}
        </div>
      </div>
    </nav>
  );
}
