import { Link } from "react-router-dom";

const QUICK_ACTIONS = [
  {
    to: "/dashboard/user/orders",
    icon: "fa-solid fa-cart-shopping",
    label: "Mes commandes",
    detail: "Suivre et télécharger mes factures",
  },
  {
    to: "/dashboard/user/catalog",
    icon: "fa-solid fa-layer-group",
    label: "Catalogue CRM",
    detail: "Comparer les CRM métier disponibles",
  },
  {
    to: "/dashboard/user/favorites",
    icon: "fa-solid fa-heart",
    label: "Mes favoris",
    detail: "Retrouver les CRM enregistrés",
  },
  {
    to: "/dashboard/user/contact",
    icon: "fa-regular fa-envelope",
    label: "Contacter l’équipe",
    detail: "Écrire au support CRM Commerce",
  },
];

export default function QuickActions() {
  return (
    <nav className="crm-panel" aria-label="Actions rapides">
      <header className="crm-panel__head">
        <h2 className="crm-panel__title">Actions rapides</h2>
      </header>

      <ul className="crm-quick-actions">
        {QUICK_ACTIONS.map((action) => (
          <li key={action.to}>
            <Link className="crm-quick-action" to={action.to}>
              <span className="crm-quick-action__icon" aria-hidden="true">
                <i className={action.icon}></i>
              </span>

              <span className="crm-quick-action__text">
                <span className="crm-quick-action__label">{action.label}</span>
                <span className="crm-quick-action__detail">{action.detail}</span>
              </span>

              <i className="fa-solid fa-chevron-right crm-quick-action__caret" aria-hidden="true"></i>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}