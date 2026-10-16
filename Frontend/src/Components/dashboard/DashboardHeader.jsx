const WEEKDAYS = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];

const MONTHS = [
  "janvier", "février", "mars", "avril", "mai", "juin",
  "juillet", "août", "septembre", "octobre", "novembre", "décembre",
];

function formatToday() {
  const now = new Date();
  const day = now.getDate() === 1 ? "1er" : String(now.getDate());

  return `${WEEKDAYS[now.getDay()]} ${day} ${MONTHS[now.getMonth()]} ${now.getFullYear()}`;
}

export default function DashboardHeader({ firstName }) {
  return (
    <header className="crm-dashboard__header">
      <div className="crm-dashboard__header-main">
        <p className="crm-eyebrow">Votre activité</p>
        <h1 className="crm-dashboard__title">
          Bonjour, {firstName}
          <i className="fa-solid fa-hand crm-dashboard__title-icon" aria-hidden="true"></i>
        </h1>
        <p className="crm-dashboard__subtitle">Voici un aperçu de votre activité.</p>
      </div>

      <p className="crm-dashboard__date">
        <i className="fa-regular fa-calendar" aria-hidden="true"></i>
        <time dateTime={new Date().toISOString().slice(0, 10)}>{formatToday()}</time>
      </p>
    </header>
  );
}