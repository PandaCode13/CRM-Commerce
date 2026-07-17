import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__content">
        <div className="site-footer__intro">
          <Link to="/home" className="site-footer__brand">CRM Commerce</Link>
          <p>Des solutions CRM adaptées à votre activité, de la découverte au déploiement.</p>
        </div>

        <nav className="site-footer__links" aria-label="Navigation du pied de page">
          <h3>Navigation</h3>
          <Link to="/home">Accueil</Link>
          <Link to="/features">Fonctionnalités</Link>
          <Link to="/register">Créer un compte</Link>
          <Link to="/mentions-legales">Mentions légales</Link>
          <Link to="/politique-confidentialite">Confidentialité</Link>
        </nav>

        <div className="site-footer__contact">
          <h3>Besoin d'aide ?</h3>
          <a href="mailto:saidmedabdo13@gmail.com">saidmedabdo13@gmail.com</a>
          <Link to="/login" className="site-footer__cta">Se connecter <i className="fa-solid fa-arrow-right" aria-hidden="true" /></Link>
        </div>
      </div>

      <div className="site-footer__bottom">
        <span>© {new Date().getFullYear()} CRM Commerce</span>
        <span>Conçu pour simplifier votre gestion client.</span>
      </div>
    </footer>
  );
}
