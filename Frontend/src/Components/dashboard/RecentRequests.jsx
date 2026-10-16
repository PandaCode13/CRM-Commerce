import { formatRelativeDate, getRequestStatus } from "../../Services/dashboard.service";
import StatusBadge from "./StatusBadge";

export default function RecentRequests({ requests, total, limit = 5 }) {
  const visible = requests.slice(0, limit);

  return (
    <article className="crm-panel">
      <header className="crm-panel__head">
        <h2 className="crm-panel__title">Demandes récentes</h2>
        <p className="crm-panel__meta num">
          {visible.length} sur {total}
        </p>
      </header>

      <ul className="crm-list">
        {visible.map((request) => {
          const status = getRequestStatus(request.status);

          return (
            <li className="crm-row" key={request.id}>
              <div className="crm-row__main">
                <p className="crm-row__title">{request.name}</p>
                <a className="crm-row__sub" href={`mailto:${request.email}`}>
                  {request.email}
                </a>
              </div>

              <p className="crm-row__detail">{request.subject}</p>

              <p className="crm-row__meta">
                <span className="crm-row__ref num">#{request.id}</span>
                <span>{formatRelativeDate(request.createdAt)}</span>
              </p>

              <StatusBadge tone={status.tone}>{status.label}</StatusBadge>
            </li>
          );
        })}
      </ul>
    </article>
  );
}