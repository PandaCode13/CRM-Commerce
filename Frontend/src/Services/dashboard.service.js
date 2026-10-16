const MINUTE = 60 * 1000;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

const REQUEST_STATUS = {
  new: { label: "Nouvelle", tone: "brand" },
  in_progress: { label: "En cours", tone: "info" },
  handled: { label: "Traitée", tone: "success" },
  refused: { label: "Refusée", tone: "error" },
};

const ORDER_STATUS = {
  pending: { label: "En attente", tone: "warning" },
  validated: { label: "Validée", tone: "success" },
  shipped: { label: "Expédiée", tone: "info" },
  completed: { label: "Terminée", tone: "neutral" },
  cancelled: { label: "Annulée", tone: "error" },
};

const ACTIVITY_ICONS = {
  request_received: "fa-solid fa-envelope-open-text",
  request_updated: "fa-solid fa-file-pen",
  request_handled: "fa-solid fa-circle-check",
  order_created: "fa-solid fa-cart-shopping",
  order_validated: "fa-solid fa-cart-shopping",
  order_shipped: "fa-solid fa-truck-fast",
  document_generated: "fa-solid fa-file-lines",
};

export function getRequestStatus(status) {
  return REQUEST_STATUS[status] || { label: status, tone: "neutral" };
}

export function getOrderStatus(status) {
  return ORDER_STATUS[status] || { label: status, tone: "neutral" };
}

export function getActivityIcon(type) {
  return ACTIVITY_ICONS[type] || "fa-solid fa-circle-dot";
}

export function formatRelativeDate(isoDate) {
  const elapsed = Date.now() - new Date(isoDate).getTime();

  if (elapsed < MINUTE) return "À l’instant";
  if (elapsed < HOUR) return `Il y a ${Math.round(elapsed / MINUTE)} min`;
  if (elapsed < DAY) return `Il y a ${Math.round(elapsed / HOUR)} h`;
  if (elapsed < 2 * DAY) return "Hier";
  if (elapsed < 7 * DAY) return `Il y a ${Math.round(elapsed / DAY)} jours`;

  return new Date(isoDate).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "short",
  });
}

export function formatAmount(amount) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(amount);
}