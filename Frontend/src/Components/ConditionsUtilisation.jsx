import "./legal-pages.css";

const sections = [
  { title: "Article 1 – Objet", paragraphs: ["Les présentes Conditions Générales d'Utilisation (CGU) ont pour objet de définir les modalités d'accès et d'utilisation de la plateforme CRM Commerce.", "En utilisant le site, l'utilisateur reconnaît avoir pris connaissance des présentes CGU et les accepter sans réserve."] },
  { title: "Article 2 – Présentation du service", paragraphs: ["CRM Commerce est une marketplace permettant aux professionnels de découvrir, comparer et acquérir des CRM métier prêts à l'emploi.", "La plateforme propose également des prestations de personnalisation, d'accompagnement et de développement sur mesure."] },
  { title: "Article 3 – Création d'un compte", paragraphs: ["Certaines fonctionnalités nécessitent la création d'un compte utilisateur.", "L'utilisateur s'engage à :"], items: ["fournir des informations exactes ;", "maintenir ses informations à jour ;", "préserver la confidentialité de ses identifiants ;", "être responsable de toute activité réalisée depuis son compte."] },
  { title: "Article 4 – Utilisation de la plateforme", paragraphs: ["L'utilisateur s'engage à utiliser CRM Commerce conformément à la loi et aux présentes CGU.", "Il est notamment interdit de :"], items: ["perturber le fonctionnement du site ;", "tenter d'accéder aux données d'autres utilisateurs ;", "reproduire ou redistribuer le contenu du site sans autorisation ;", "utiliser la plateforme à des fins frauduleuses ou illicites."] },
  { title: "Article 5 – Propriété intellectuelle", paragraphs: ["Tous les éléments composant la plateforme (textes, logos, illustrations, interfaces, code du site, marques et contenus) demeurent la propriété exclusive de CRM Commerce ou de leurs titulaires respectifs.", "Toute reproduction ou utilisation non autorisée est interdite.", "Les CRM vendus sur la plateforme sont soumis aux conditions de licence précisées dans le contrat remis lors de la vente."] },
  { title: "Article 6 – Commandes", paragraphs: ["La commande d'un CRM s'effectue directement depuis la plateforme.", "Après réception de la demande :"], items: ["la commande est examinée par notre équipe ;", "un devis ou une facture est établi selon le contexte ;", "un contrat de vente et de licence est transmis au client ;", "le paiement est effectué par virement bancaire ;", "la livraison intervient après confirmation du paiement."], afterItems: "Les modalités détaillées sont définies dans les Conditions Générales de Vente (CGV)." },
  { title: "Article 7 – Maintenance et évolutions", paragraphs: ["Sauf contrat spécifique de maintenance ou d'assistance, CRM Commerce n'assure pas les mises à jour, la maintenance, l'hébergement, l'administration ou la sécurisation des CRM après leur livraison.", "Le client est responsable de l'exploitation du logiciel, de son hébergement, de ses sauvegardes, de la gestion des accès et de la protection des données qu'il traite."] },
  { title: "Article 8 – Responsabilité", paragraphs: ["CRM Commerce met tout en œuvre pour assurer la disponibilité de la plateforme.", "Toutefois, la responsabilité de CRM Commerce ne pourra être engagée en cas :"], items: ["d'interruption temporaire du service ;", "de maintenance technique ;", "de force majeure ;", "de mauvaise utilisation du logiciel par le client ;", "de modifications apportées au CRM par le client ou par un tiers."], afterItems: "Les responsabilités respectives des parties sont précisées dans le contrat conclu lors de la vente." },
  { title: "Article 9 – Données personnelles", paragraphs: ["Les données personnelles sont traitées conformément à la Politique de confidentialité disponible sur le site."] },
  { title: "Article 10 – Suspension ou suppression du compte", paragraphs: ["CRM Commerce se réserve le droit de suspendre ou supprimer tout compte utilisateur en cas de non-respect des présentes CGU ou d'utilisation frauduleuse de la plateforme."] },
  { title: "Article 11 – Modification des CGU", paragraphs: ["CRM Commerce peut modifier les présentes Conditions Générales d'Utilisation à tout moment.", "Les nouvelles conditions prennent effet dès leur publication sur le site."] },
  { title: "Article 12 – Droit applicable", paragraphs: ["Les présentes CGU sont soumises au droit français.", "Tout litige relatif à leur interprétation ou à leur exécution sera soumis aux juridictions compétentes, sauf disposition légale contraire."] },
];

export default function ConditionsUtilisation() {
  return (
    <main className="legal-page">
      <div className="legal-page__content">
        <header className="legal-page__header">
          <p className="legal-page__eyebrow">CRM Commerce</p>
          <h1>Conditions Générales d&apos;Utilisation</h1>
          <p>Dernière mise à jour : 18 juillet 2026</p>
        </header>
        {sections.map(({ title, paragraphs, items, afterItems }) => (
          <section key={title}>
            <h2>{title}</h2>
            {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {items && <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>}
            {afterItems && <p>{afterItems}</p>}
          </section>
        ))}
      </div>
    </main>
  );
}
