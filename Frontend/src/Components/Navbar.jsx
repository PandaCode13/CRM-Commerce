import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import "./navbar.css";

export default function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const [lightMode, setLightMode] = useState(() => localStorage.getItem("theme") === "light");
  const prevScrollY = useRef(0);

  useEffect(() => {
    document.body.classList.toggle("light-mode", lightMode);
    localStorage.setItem("theme", lightMode ? "light" : "dark");
  }, [lightMode]);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 50);
      if (currentY > prevScrollY.current && currentY > 100) {
        setHideNav(true);
      } else {
        setHideNav(false);
      }
      prevScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const logout = () => {
    localStorage.clear();
    setMenuOpen(false);
    navigate("/home");
  };

  const navClass = [
    "navbar",
    scrolled ? "navbar--scrolled" : "",
    hideNav ? "navbar--hidden" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <nav className={navClass}>
      <div className="navbar__inner">
        <div className="navbar__logo">
          <img
            src={logo}
            alt="CRM Commerce logo"
            className="navbar__logo-img"
            width={50}
            height={50}
          />
          <Link to="/" onClick={closeMenu} className="navbar__brand">
            Commerce CRM
          </Link>
        </div>

        <button
          className="navbar__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <span className={`navbar__toggle-icon ${menuOpen ? "navbar__toggle-icon--open" : ""}`}>
            ☰
          </span>
        </button>

        <div className={`navbar__menu ${menuOpen ? "navbar__menu--open" : ""}`}>
          {!token && (
            <>
              <Link to="/home" onClick={closeMenu} className="nav-link">
                Accueil
              </Link>
              <Link to="/features" onClick={closeMenu} className="nav-link">
                Fonctionnalités
              </Link>
              <Link to="/login" onClick={closeMenu} className="nav-link">
                Connexion
              </Link>
              <Link to="/register" onClick={closeMenu} className="nav-btn nav-btn--outline">
                S'inscrire
              </Link>
            </>
          )}

          {token && role === "user" && (
            <>
              <Link to="/dashboard/user" onClick={closeMenu} className="nav-link">
                Tableau de bord
              </Link>
              <Link to="/dashboard/user/catalog" onClick={closeMenu} className="nav-link">
                Catalogue
              </Link>
              <Link to="/dashboard/user/favorites" onClick={closeMenu} className="nav-link">
                Favoris
              </Link>
              <Link to="/dashboard/user/orders" onClick={closeMenu} className="nav-link">
                Commandes
              </Link>
              <Link to="/dashboard/user/profiles" onClick={closeMenu} className="nav-link">
                Profil
              </Link>
              <button onClick={logout} className="nav-btn nav-btn--primary">
                Déconnexion
              </button>
            </>
          )}

          {token && role === "admin" && (
            <>
              <Link to="/dashboard/admin" onClick={closeMenu} className="nav-link">
                Tableau de bord
              </Link>
              <Link to="/dashboard/admin/users" onClick={closeMenu} className="nav-link">
                Utilisateurs
              </Link>
              <Link to="/dashboard/admin/books" onClick={closeMenu} className="nav-link">
                Livres
              </Link>
              <Link to="/dashboard/admin/categories" onClick={closeMenu} className="nav-link">
                Catégories
              </Link>
              <Link to="/dashboard/admin/import-books" onClick={closeMenu} className="nav-link">
                Importer Livres
              </Link>
              <button onClick={logout} className="nav-btn nav-btn--primary">
                Déconnexion
              </button>
            </>
          )}

          <button
            type="button"
            className="nav-btn nav-btn--theme"
            onClick={() => setLightMode((currentMode) => !currentMode)}
            aria-label={lightMode ? "Activer le mode sombre" : "Activer le mode clair"}
            title={lightMode ? "Mode sombre" : "Mode clair"}
          >
            <i className={`fa-solid ${lightMode ? "fa-moon" : "fa-sun"}`} aria-hidden="true" />
          </button>

        </div>
      </div>
    </nav>
  );
}
