import "./css/dashboard.css";

const AdminProfil = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const fullname = user.fullname || "Admin";

  return (
    <main className="admin-dashboard">
      <h4>Profil de {fullname}</h4>

      <section>
        <p>Les informations de votre profil s’afficheront ici.</p>
      </section>
    </main>
  );
};

export default AdminProfil;
