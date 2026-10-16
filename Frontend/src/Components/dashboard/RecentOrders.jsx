import { Link } from "react-router-dom";
import { formatAmount, formatRelativeDate, getOrderStatus } from "../../Services/dashboard.service";
import StatusBadge from "./StatusBadge";

export default function RecentOrders({ orders, total, limit = 5 }) {
  const visible = orders.slice(0, limit);

  return (
    <article className="crm-panel">
      <header className="crm-panel__head">
        <h2 className="crm-panel__title">Commandes récentes</h2>
        <p className="crm-panel__meta num">
          {visible.length} sur {total}
        </p>
      </header>

      <ul className="crm-list">
        {visible.map((order) => {
          const status = getOrderStatus(order.status);

          return (
            <li className="crm-row" key={order.id}>
              <div className="crm-row__main">
                <p className="crm-row__title num">#{order.id}</p>
                <p className="crm-row__sub">{order.client}</p>
              </div>

              <p className="crm-row__detail num">{formatAmount(order.amount)}</p>

              <p className="crm-row__meta">
                <span>{formatRelativeDate(order.createdAt)}</span>
              </p>

              <StatusBadge tone={status.tone}>{status.label}</StatusBadge>
            </li>
          );
        })}
      </ul>

      <footer className="crm-panel__foot">
        <Link className="crm-link" to="/dashboard/user/orders">
          Voir toutes les commandes
          <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
        </Link>
      </footer>
    </article>
  );
}