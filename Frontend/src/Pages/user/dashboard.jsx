import { getFullName } from "../../Services/user.services";
import "./css/dashboard.css";

const upcomingModules = [
  {
    icon: "fa-solid fa-cart-shopping",
    label: "Commandes",
    detail: "Vos commandes apparaîtront ici dès que le module sera disponible.",
  },
  {
    icon: "fa-solid fa-layer-group",
    label: "CRM visités",
    detail: "L'historique des CRM consultés apparaîtra dès que le catalogue sera relié à l'API.",
  },
  {
    icon: "fa-regular fa-envelope",
    label: "Messages",
    detail: "Vos échanges avec notre équipe apparaîtront ici dès que la messagerie sera disponible.",
  },
];

const UserDashboard = () => {
  const userName = getFullName()?.split(" ")[0] || "utilisateur";

  return (
    <main className="user-dashboard">
      <section className="user-dashboard__hero" aria-labelledby="user-dashboard-title">
        <p className="user-dashboard__eyebrow">Votre espace personnel</p>
        <h1 id="user-dashboard-title">Bonjour, {userName}</h1>
        <p>Retrouvez en un coup d’œil l’activité liée à votre compte.</p>
      </section>

      <section className="user-dashboard__empty" aria-labelledby="next-step-title">
        <p className="user-dashboard__eyebrow">Vue d’ensemble</p>
        <h2 id="next-step-title">Votre activité apparaîtra ici</h2>
        <p>
          Les modules commandes, catalogue CRM et messagerie sont en cours de
          connexion à l’API. Vos données s’afficheront sur cette page dès leur
          disponibilité.
        </p>
      </section>

      <section aria-labelledby="upcoming-title">
        <div className="user-dashboard__section-heading">
          <div>
            <p className="user-dashboard__eyebrow">À venir</p>
            <h2 id="upcoming-title">Modules à venir</h2>
          </div>
        </div>

        <div className="user-dashboard__stats">
          {upcomingModules.map((module) => (
            <article className="user-stat-card" key={module.label}>
              <span className="user-stat-card__icon" aria-hidden="true">
                <i className={module.icon}></i>
              </span>
              <p className="user-stat-card__label">{module.label}</p>
              <p className="user-stat-card__detail">{module.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default UserDashboard;