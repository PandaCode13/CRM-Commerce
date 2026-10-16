import { useState } from "react";
import { Link } from "react-router-dom";
import { crmCatalog } from "../../features/CRM/user/CatalogPage";
import "./css/catalog.css";

export default function Catalog() {
  const [query, setQuery] = useState("");

  const filtered = crmCatalog.filter((crm) =>
    `${crm.name} ${crm.sector} ${crm.description} ${crm.price}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <section className="catalog">
      <h1>Catalogue des CRM sectoriels</h1>

      <input
        type="search"
        placeholder="Rechercher un CRM..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="catalog-grid">
        {filtered.map((crm) => (
          <Link
            key={crm.id}
            className="catalog-card"
            to={`/dashboard/user/catalog/${crm.id}`}
          >
            <div className="catalog-icon" aria-hidden="true">
              {crm.icon}
            </div>
            <h2>{crm.name}</h2>
            <p className="catalog-sector">{crm.sector}</p>
            <p className="catalog-desc">{crm.description}</p>
            <p className="catalog-price">{crm.price}</p>
            <span className="catalog-card__cta">Voir le CRM</span>
          </Link>
        ))}
        {filtered.length === 0 && <p>Aucun CRM trouvé.</p>}
      </div>
    </section>
  );
}
