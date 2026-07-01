import { Link } from "react-router-dom";

// import components && tools
import Navbar from "../../Components/Navbar";
import { CardContainerExplication } from "../../features/Data/DataHomeVisited";

// import css && css tools
import "./css/home.css";

const Home = () => {
    return (
        <div className="dashboard-container">
            <Navbar />

            <div className="hero-section">
                <h2 className="title">Bienvenue dans le commerce CRM</h2>
                <p className="subtitle">Découvrez et achetez un CRM correspondant à vos besoins.</p>
                <div className="button">
                    <a href="#crm-section" className="btn">Découvrir les CRM</a>
                    <Link to="/register" className="btn btn-secondary">S'inscrire</Link>
                </div>
            </div>

            <div className="explication-section">
                <h3 className="title">Pourquoi ce commerce CRM ?</h3>
                <div className="card-container">
                    {CardContainerExplication.map((card) => (
                        <div key={card.id} className="card">
                            <img src={card.image} alt={card.title} className="card-image" />
                            <h4 className="card-title">{card.title}</h4>
                            <p className="card-description">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
