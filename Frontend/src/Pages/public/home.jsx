// Import extension 
import {React, useState, useEffect} from "react";

// import components && tools
import Navbar from "../../components/Navbar";
import CRM from "../../features/Data/DataHomeVisited/CRM";
import Temoins from "../../features/Data/DataHomeVisited/Temoignages"; 

// import css && css tools
import "./css/dashboard.css";

const Home = () => {
    return (
        <div className="dashboard-container">
            <Navbar />

            <div className="hero-section">
                <h2 className="title">Bienvenue dans le commerce CRM</h2>
                <p className="subtitle">Découvrez et Achetez un CRM correspondant à vos besoins.</p>
                <div className="button">
                    <a href="#crm-section" className="btn">Découvrir les CRM</a>
                    <a href="register.jsx" className="btn btn-secondary">S'inscrire</a>
                </div>
            </div>

            <div className="explication-section">
                <h3 className="title">Pourquoi ce commerce CRM ?</h3>
                <div className="card-container"></div>
            </div>
        </div>
    )
}
export default Home;