const TONES = {
  brand: "crm-status-badge--brand",
  info: "crm-status-badge--info",
  success: "crm-status-badge--success",
  warning: "crm-status-badge--warning",
  error: "crm-status-badge--error",
  neutral: "crm-status-badge--neutral",
};

export default function StatusBadge({ tone = "neutral", children }) {
  return (
    <span className={`crm-status-badge ${TONES[tone] || TONES.neutral}`}>{children}</span>
  );
}