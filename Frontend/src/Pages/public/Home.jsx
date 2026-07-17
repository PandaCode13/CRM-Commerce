import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { CardContainerExplication } from "../../features/Data/DataHomeVisited";
import { CRM } from "../../features/Data/DataHomeVisited";
import { Temoignages } from "../../features/Data/DataHomeVisited";
import Footer from "../../Components/Footer";
import "./css/home.css";

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": CRM.map((crm, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "item": {
      "@type": "SoftwareApplication",
      "name": crm.name,
      "description": crm.description,
      "applicationCategory": "CRM",
      "operatingSystem": "Web",
    },
  })),
};

const reviewJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": Temoignages.map((t, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "item": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": t.stars,
        "bestRating": 5,
      },
      "author": { "@type": "Person", "name": t.name },
      "reviewBody": t.description,
    },
  })),
};

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = containerRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const renderStars = (stars = 0) => (
    <>
      {[...Array(5)].map((_, index) => (
        <i
          key={index}
          className={`fa-${index < stars ? "solid" : "regular"} fa-star`}
          style={{
            color: index < stars ? "#FFD43B" : "#CFCFCF",
            marginRight: "4px",
          }}
        />
      ))}
    </>
  );

  return (
    <div className="public-container page-enter" ref={containerRef}>
      <script type="application/ld+json">
        {JSON.stringify(productJsonLd)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(reviewJsonLd)}
      </script>

      <div className="hero-section">
        <h1 className="title">Bienvenue dans le commerce CRM</h1>
        <p className="subtitle">Découvrez et achetez un CRM correspondant à vos besoins.</p>
        <div className="button">
          <a href="#crm-exploration-section" className="btn">
            Découvrir les CRM
          </a>
          <Link to="/register" className="btn btn-secondary">
            S'inscrire
          </Link>
        </div>
      </div>

      <div className="section-divider" aria-hidden="true">
        <div className="divider-line" />
        <div className="divider-diamond" />
        <div className="divider-line" />
      </div>

      <section className="engagement-section">
        <h2 className="title animate-on-scroll">Nos engagements</h2>
        <div className="card-container">
          {CardContainerExplication.map((card) => (
            <article key={card.id} className="card animate-on-scroll">
              <img src={card.image} alt={card.title} className="card-image" />
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="section-divider" aria-hidden="true">
        <div className="divider-line" />
        <div className="divider-diamond" />
        <div className="divider-line" />
      </div>

      <div className="proposition-section">
        <h2 className="title animate-on-scroll">Découvrez nos CRM</h2>
        <div className="card-container" id="crm-exploration-section">
          {CRM.map((card) => (
            <article key={card.id} className="card-crm animate-on-scroll" itemScope itemType="https://schema.org/SoftwareApplication">
              <meta itemProp="applicationCategory" content="CRM" />
              <meta itemProp="operatingSystem" content="Web" />
              <img
                src={card.image}
                alt={card.name}
                className="card-image-crm"
                itemProp="image"
              />
              <h3 className="card-title-crm" itemProp="name">{card.name}</h3>
              <p className="card-description-crm" itemProp="description">{card.description}</p>
              <Link to={card.url_frontend} className="btn btn-secondary" itemProp="url">
                Visiter
              </Link>
            </article>
          ))}
        </div>
      </div>

      <div className="section-divider" aria-hidden="true">
        <div className="divider-line" />
        <div className="divider-diamond" />
        <div className="divider-line" />
      </div>

      <div className="temoignages-section">
        <h2 className="title animate-on-scroll">Témoignages de nos clients</h2>
        <div className="card-container" id="temoignages-container">
          {Temoignages.map((temoignage) => (
            <article
              key={temoignage.id}
              className="card-temoignage animate-on-scroll"
              itemScope
              itemType="https://schema.org/Review"
            >
              <div className="rating" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                <meta itemProp="ratingValue" content={temoignage.stars} />
                <meta itemProp="bestRating" content="5" />
                {renderStars(temoignage.stars)}
              </div>
              <img
                src={temoignage.image}
                alt={temoignage.name}
                className="card-temoignage-image"
              />
              <h3 className="card-temoignage-title" itemProp="author" itemScope itemType="https://schema.org/Person">
                <span itemProp="name">{temoignage.name}</span>
              </h3>
              <p className="card-temoignage-description" itemProp="reviewBody">
                {temoignage.description}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="section-divider" aria-hidden="true">
        <div className="divider-line" />
        <div className="divider-diamond" />
        <div className="divider-line" />
      </div>

      <div className="commencement-section">
        <h2 className="title animate-on-scroll">Commencez dès maintenant</h2>
        <div className="button">
          <Link to="/register" className="btn">
            S'inscrire pour commencer
          </Link>
          <Link to="/login" className="btn btn-secondary">
            Se connecter pour commander
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
