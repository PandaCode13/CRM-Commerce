import { Link, Navigate, useParams } from "react-router-dom";
import { crmCatalog } from "../../features/CRM/user/CatalogPage";
import { plannedFeatures, socleFeatures } from "../../features/CRM/user/socleFeatures";
import "./css/catalog.css";
import "./css/crm-detail.css";

export default function UserCrmDetail() {
  const { id } = useParams();
  const crm = crmCatalog.find((item) => item.id === id);

  if (!crm) {
    return <Navigate to="/dashboard/user/catalog" replace />;
  }

  const others = crmCatalog.filter((item) => item.id !== crm.id).slice(0, 3);

  return (
    <main className="crm-detail">
      <div className="crm-detail__inner">
        <nav className="crm-detail__crumbs" aria-label="Fil d’Ariane">
          <Link to="/dashboard/user/catalog">Catalogue</Link>
          <i className="fa-solid fa-angle-right" aria-hidden="true"></i>
          <span aria-current="page">CRM {crm.name}</span>
        </nav>

        <header className="crm-detail__header">
          <div className="crm-detail__headings">
            <p className="crm-eyebrow">{crm.sector}</p>
            <h1 className="crm-detail__title">CRM {crm.name}</h1>
            <p className="crm-detail__subtitle">{crm.description}</p>
          </div>

          <div className="crm-detail__purchase">
            <span className="crm-status-badge crm-status-badge--success">Disponible</span>
            <p className="crm-detail__price num">{crm.price}</p>
            <Link className="crm-detail__cta" to="/dashboard/user/contact">
              Obtenir ce CRM
            </Link>
          </div>
        </header>

        <div className="crm-detail__grid">
          <div className="crm-detail__main">
            <section className="crm-panel">
              <header className="crm-panel__head">
                <h2 className="crm-panel__title">Le socle commun</h2>
                <p className="crm-panel__meta">Inclus dans les 10 CRM sectoriels</p>
              </header>
              <p className="crm-detail__lead">
                Chaque CRM sectoriel part du même socle : un ensemble de modules fixes,
                personnalisé ensuite selon le métier. Voici ce qui est livré avec
                « CRM {crm.name} ».
              </p>
            </section>

            <section className="crm-detail__section">
              <h2 className="crm-detail__section-title">Toutes les fonctionnalités</h2>
              <div className="crm-detail__features">
                {socleFeatures.map((group) => (
                  <article className="crm-feature" key={group.title}>
                    <span className="crm-feature__icon" aria-hidden="true">
                      <i className={group.icon}></i>
                    </span>
                    <h3 className="crm-feature__title">{group.title}</h3>
                    <ul className="crm-feature__list">
                      {group.items.map((item) => (
                        <li className="crm-feature__item" key={item}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section className="crm-detail__section">
              <h2 className="crm-detail__section-title">Évolutions prévues</h2>
              <ul className="crm-detail__planned">
                {plannedFeatures.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="crm-detail__section">
              <h2 className="crm-detail__section-title">Voir aussi</h2>
              <div className="crm-detail__more">
                {others.map((item) => (
                  <Link
                    className="catalog-card"
                    key={item.id}
                    to={`/dashboard/user/catalog/${item.id}`}
                  >
                    <div className="catalog-icon" aria-hidden="true">
                      {item.icon}
                    </div>
                    <h2>{item.name}</h2>
                    <p className="catalog-sector">{item.sector}</p>
                    <p className="catalog-desc">{item.description}</p>
                    <p className="catalog-price">{item.price}</p>
                    <span className="catalog-card__cta">Voir le CRM</span>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          <aside className="crm-detail__aside">
            <article className="crm-panel">
              <header className="crm-panel__head">
                <h2 className="crm-panel__title">Fiche technique</h2>
              </header>

              <dl className="crm-specs">
                <div className="crm-specs__row">
                  <dt className="crm-specs__label">Secteur</dt>
                  <dd className="crm-specs__value">{crm.sector}</dd>
                </div>
                <div className="crm-specs__row">
                  <dt className="crm-specs__label">Module</dt>
                  <dd className="crm-specs__value num">{crm.folder}</dd>
                </div>
                <div className="crm-specs__row">
                  <dt className="crm-specs__label">Version</dt>
                  <dd className="crm-specs__value num">{crm.version}</dd>
                </div>
                <div className="crm-specs__row">
                  <dt className="crm-specs__label">Stack</dt>
                  <dd className="crm-specs__value">{crm.stack}</dd>
                </div>
                <div className="crm-specs__row">
                  <dt className="crm-specs__label">Prix</dt>
                  <dd className="crm-specs__value num">{crm.price}</dd>
                </div>
                <div className="crm-specs__row">
                  <dt className="crm-specs__label">Statut</dt>
                  <dd className="crm-specs__value">Disponible</dd>
                </div>
              </dl>
            </article>
          </aside>
        </div>
      </div>
    </main>
  );
}
