import { useEffect, useState } from "react";
import { getCurrentUser, API_URL } from "../../Services/user.services";
import "./css/dashboard.css";

const AdminDashboard = () => {
  const [fullname, setFullname] = useState("Admin");
  const [usersTotal, setUsersTotal] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    getCurrentUser()
      .then(({ user }) => {
        if (user?.fullname) setFullname(user.fullname);
      })
      .catch(() => {});

    fetch(`${API_URL}/users/count`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) setUsersTotal(data.total);
      })
      .catch(() => setError("Impossible de charger les statistiques."));
  }, []);

  const stats = [
    { label: "Utilisateurs", value: usersTotal !== null ? usersTotal : "—" },
    { label: "Commandes", value: "—" },
    { label: "Produits CRM", value: "—" },
    { label: "Messages", value: "—" },
  ];

  return (
    <main className="admin-dashboard">
      <h4>Dashboard {fullname}</h4>

      {error && <p className="admin-dashboard__error" role="alert">{error}</p>}

      <div className="stats">
        {stats.map((stat) => (
          <div key={stat.label} className="admin-stat">
            <h3 className="admin-stat__number">{stat.value}</h3>
            <p className="admin-stat__text">{stat.label}</p>
          </div>
        ))}
      </div>

      <section className="admin-dashboard__note">
        <p>
          Les compteurs de commandes, produits et messages seront reliés à
          l’API dès que les modules correspondants seront disponibles.
        </p>
      </section>
    </main>
  );
};

export default AdminDashboard;