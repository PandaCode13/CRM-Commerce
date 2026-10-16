import { getFullName } from "../../Services/user.services";
import DashboardHeader from "../../Components/dashboard/DashboardHeader";
import StatCard from "../../Components/dashboard/StatCard";
import RecentRequests from "../../Components/dashboard/RecentRequests";
import RecentOrders from "../../Components/dashboard/RecentOrders";
import RecentActivity from "../../Components/dashboard/RecentActivity";
import QuickActions from "../../Components/dashboard/QuickActions";
import "../../Components/dashboard/dashboard.css";

const STATS = [
  { key: "requests", label: "Demandes reçues", icon: "fa-solid fa-inbox" },
  { key: "orders", label: "Commandes", icon: "fa-solid fa-cart-shopping" },
  { key: "pending", label: "À traiter", icon: "fa-solid fa-hourglass-half", emphasis: true },
  { key: "documents", label: "Documents", icon: "fa-solid fa-file-lines" },
];

const OVERVIEW = {
  stats: {
    requests: { value: 0 },
    orders: { value: 0 },
    pending: { value: 0 },
    documents: { value: 0 },
  },
  recentRequests: [],
  recentOrders: [],
  recentActivities: [],
};

export default function UserDashboard() {
  const firstName = getFullName()?.split(" ")[0] || "utilisateur";
  const { stats, recentRequests, recentOrders, recentActivities } = OVERVIEW;

  return (
    <main className="crm-dashboard">
      <div className="crm-dashboard__inner">
        <DashboardHeader firstName={firstName} />

        <div className="crm-dashboard__grid">
          {STATS.map((stat) => (
            <div className="crm-dashboard__cell crm-dashboard__cell--stat" key={stat.key}>
              <StatCard
                icon={stat.icon}
                label={stat.label}
                emphasis={stat.emphasis}
                value={stats[stat.key].value}
              />
            </div>
          ))}

          <div className="crm-dashboard__cell crm-dashboard__cell--requests">
            <RecentRequests requests={recentRequests} total={stats.requests.value} />
          </div>

          <div className="crm-dashboard__cell crm-dashboard__cell--orders">
            <RecentOrders orders={recentOrders} total={stats.orders.value} />
          </div>

          <div className="crm-dashboard__cell crm-dashboard__cell--activity">
            <RecentActivity activities={recentActivities} />
          </div>

          <div className="crm-dashboard__cell crm-dashboard__cell--quick">
            <QuickActions />
          </div>
        </div>
      </div>
    </main>
  );
}
