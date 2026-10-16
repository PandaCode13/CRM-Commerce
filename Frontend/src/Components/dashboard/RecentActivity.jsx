import { formatRelativeDate, getActivityIcon } from "../../Services/dashboard.service";

export default function RecentActivity({ activities, limit = 6 }) {
  return (
    <article className="crm-panel">
      <header className="crm-panel__head">
        <h2 className="crm-panel__title">Activité récente</h2>
      </header>

      <ol className="crm-timeline">
        {activities.slice(0, limit).map((activity) => (
          <li className="crm-timeline__item" key={activity.id}>
            <span className="crm-timeline__icon" aria-hidden="true">
              <i className={getActivityIcon(activity.type)}></i>
            </span>

            <div className="crm-timeline__body">
              <p className="crm-timeline__message">{activity.message}</p>
              <p className="crm-timeline__time">
                <time dateTime={activity.createdAt}>{formatRelativeDate(activity.createdAt)}</time>
              </p>
            </div>
          </li>
        ))}
      </ol>
    </article>
  );
}