export default function StatCard({ icon, label, value, hint, trend, emphasis = false }) {
  return (
    <article className={`crm-stat-card${emphasis ? " crm-stat-card--emphasis" : ""}`}>
      <div className="crm-stat-card__head">
        <p className="crm-stat-card__label">{label}</p>
        <span className="crm-stat-card__icon" aria-hidden="true">
          <i className={icon}></i>
        </span>
      </div>

      <p className="crm-stat-card__value">{value}</p>

      {trend ? (
        <p className="crm-stat-card__hint crm-stat-card__hint--up">
          <i className="fa-solid fa-arrow-trend-up" aria-hidden="true"></i>
          <span className="num">+{trend.value}</span> {trend.label}
        </p>
      ) : (
        hint && <p className="crm-stat-card__hint">{hint}</p>
      )}
    </article>
  );
}