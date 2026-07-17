import "./legal-pages.css";

export default function MentionsLegales() {
  return (
    <main className="legal-page">
      <div className="legal-page__content">
        <header className="legal-page__header">
          <p className="legal-page__eyebrow">CRM Commerce</p>
          <h1>Mentions légales</h1>
        </header>

        <section>
          <h2>Éditeur du site</h2>
          <p>Le site <strong>CRM Commerce</strong> est édité par son propriétaire.</p>
          <p>Les informations d'identification de l'éditeur (nom, adresse, numéro SIREN/SIRET, statut juridique et coordonnées) seront communiquées conformément à la réglementation applicable avant la mise en ligne officielle du service.</p>
          <h3>Contact</h3>
          <ul>
            <li>E-mail : <a href="mailto:saidmedabdo13@gmail.com">saidmedabdo13@gmail.com</a></li>
            <li>Site : https://crm-commerce.com <em>(à modifier)</em></li>
          </ul>
        </section>

        <section>
          <h2>Hébergement</h2>
          <p>Le site est hébergé par un prestataire d'hébergement dont les coordonnées seront précisées lors de la mise en production.</p>
        </section>

        <section>
          <h2>Propriété intellectuelle</h2>
          <p>L'ensemble des contenus présents sur CRM Commerce (textes, images, illustrations, logos, icônes, éléments graphiques, logiciels, bases de données et code source du site) est protégé par les lois relatives à la propriété intellectuelle.</p>
          <p>Toute reproduction, diffusion, modification ou exploitation, totale ou partielle, sans autorisation écrite préalable est interdite.</p>
        </section>

        <section>
          <h2>Responsabilité</h2>
          <p>CRM Commerce met tout en œuvre afin de fournir des informations exactes et régulièrement mises à jour.</p>
          <p>Cependant, aucune garantie ne peut être apportée quant à l'exactitude, l'exhaustivité ou l'actualité des informations diffusées.</p>
          <p>L'utilisateur demeure seul responsable de l'utilisation qu'il fait des informations disponibles sur le site.</p>
        </section>

        <section>
          <h2>Liens externes</h2>
          <p>Le site peut contenir des liens vers des sites tiers. CRM Commerce ne peut être tenu responsable du contenu ou du fonctionnement de ces sites externes.</p>
        </section>

        <section>
          <h2>Droit applicable</h2>
          <p>Les présentes mentions légales sont régies par le droit français.</p>
          <p>En cas de litige, les juridictions compétentes seront celles du ressort du siège de l'éditeur, sauf disposition légale contraire.</p>
        </section>
      </div>
    </main>
  );
}
