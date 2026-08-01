import "./css/dashboard.css";

const AdminDashboard = () => {

    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const fullname = user.fullname || "Admin";

    return (
        <main className="admin-dashboard">
            <h4>Dashboard {fullname}</h4>

            <div className="stats">
               <div className="users">
                    <h3 className="users-number" id="users-number">0</h3>
                    <p className="users-text">Utilisateurs</p>
                </div>
                <div className="orders">
                    <h3 className="orders-number" id="orders-number">0</h3>
                    <p className="orders-text">Commandes</p>
                </div>
                <div className="products">
                    <h3 className="products-number" id="products-number">0</h3>
                    <p className="products-text">Produits CRM</p>
                </div>
                <div className="messages">
                    <h3 className="messages-number" id="messages-number">0</h3>
                    <p className="messages-text">Messages</p>
                </div>
            </div>
        </main>
    );
};

export default AdminDashboard;
