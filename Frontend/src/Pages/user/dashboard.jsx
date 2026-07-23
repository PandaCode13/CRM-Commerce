import "./css/dashboard.css";

const UserDashboard = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const firstName = user.firstName || "utilisateur";
  const stats = [
    { label: "Commandes", value: "0", detail: "Aucune commande pour le moment", icon: "🛍️" },
    { label: "CRM visités", value: "0", detail: "Explorez le catalogue de CRM", icon: "🔎" },
    { label: "Messages envoyés", value: "0", detail: "Vos échanges apparaîtront ici", icon: "✉️" },
  ];

  return (
    <main className="user-dashboard">
      <section className="user-dashboard__hero" aria-labelledby="user-dashboard-title">
        <p className="user-dashboard__eyebrow">Votre espace personnel</p>
        <h1 id="user-dashboard-title">Bonjour, {firstName}</h1>
        <p>Retrouvez en un coup d’œil l’activité liée à votre compte.</p>
      </section>

      <section aria-labelledby="activity-title">
        <div className="user-dashboard__section-heading">
          <div>
            <p className="user-dashboard__eyebrow">Vue d’ensemble</p>
            <h2 id="activity-title">Votre activité</h2>
          </div>
          <span className="user-dashboard__period">Depuis la création du compte</span>
        </div>

        <div className="user-dashboard__stats">
          {stats.map((stat) => (
            <article className="user-stat-card" key={stat.label}>
              <span className="user-stat-card__icon" aria-hidden="true">{stat.icon}</span>
              <p className="user-stat-card__label">{stat.label}</p>
              <strong className="user-stat-card__value">{stat.value}</strong>
              <p className="user-stat-card__detail">{stat.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="user-dashboard__empty" aria-labelledby="next-step-title">
        <p className="user-dashboard__eyebrow">Prochaine étape</p>
        <h2 id="next-step-title">Votre activité apparaîtra ici</h2>
        <p>Les données seront reliées à l’API dès que les modules commandes, catalogue CRM et messagerie seront disponibles.</p>
      </section>
    </main>
  );
};

export default UserDashboard;
