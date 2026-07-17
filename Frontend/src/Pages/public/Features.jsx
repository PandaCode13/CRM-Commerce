import "./css/features.css";
import { Avantages, pricingCards } from "../../features/Data/DataFeaturesVisited";
import Footer from "../../Components/Footer";

const Features = () => {
  return (
    <>
      <div className="welcome-container">
        <h3>Bienvenue dans la section Fonctionnalités </h3>
        <p>
          Venez découvrir le fonctionnement du CRM Commercial <br />
          ou communément appelé CRM Commerce
        </p>
      </div>

      <div className="section-divider" aria-hidden="true">
        <div className="divider-line" />
        <div className="divider-diamond" />
        <div className="divider-line" />
      </div>

      <div className="services">
        <h3>Comment ça marche ?</h3>

        <div className="service-container">
            <div className="service-item">
                <h4>
                  <i className="fas fa-search"></i>
                  Découvrir le site 
                </h4>
                <p>Explorez notre site web pour en savoir plus sur nos services et solutions.</p>
            </div>
            <div className="service-item">
                <h4>
                  <i className="fas fa-shopping-cart"></i>
                  Acheter un CRM
                </h4>
                <p>Choisissez et achetez le CRM qui correspond le mieux à vos besoins.</p>
            </div>
            <div className="service-item">
              <h4>
                <i className="fas fa-cogs"></i>
                Personnaliser
              </h4>
              <p>Adaptez le CRM aux spécificités de votre entreprise.</p>
            </div>
            <div className="service-item">
              <h4>
                <i className="fas fa-plug"></i>
                Déployer
              </h4>
              <p>Intégrez le CRM dans votre infrastructure et commencez à l'utiliser.</p>
            </div>
        </div>
      </div>

      <div className="section-divider" aria-hidden="true">
        <div className="divider-line" />
        <div className="divider-diamond" />
        <div className="divider-line" />
      </div>

      <section className="advantages-section">
        <h3>Les avantages CRM Commerce</h3>
        <div className="advantages-container">
          {Avantages.map((avantage) => (
            <article key={avantage.id} className="advantage-card">
              <img src={avantage.image} alt="" className="advantage-card__image" />
              <h4>{avantage.title}</h4>
              <p>{avantage.description}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="section-divider" aria-hidden="true">
        <div className="divider-line" />
        <div className="divider-diamond" />
        <div className="divider-line" />
      </div>

      <div className="pricingCards">
        <h3>Nos offres</h3>
        <div className="pricingCards-container">
          {pricingCards.map((card) => (
            <div key={card.id} className={`pricingCard ${card.featured ? "featured" : ""}`}>
              {card.featured && <div className="badge">{card.badge}</div>}
              <i className={card.icon}></i>
              <h4>{card.title}</h4>
              <p className="price">{card.price}</p>
              {card.secondaryPrice && <p className="secondary-price">{card.secondaryPrice}</p>}
              <p className="billing">{card.billing}</p>
              <p className="description">{card.description}</p>
              <ul>
                {card.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Features;
