import Explication1 from "../../Images/Public/id1.png";
import Explication2 from "../../Images/Public/id2.png";
import Explication3 from "../../Images/Public/id3.png";
import Explication4 from "../../Images/Public/id4.png";

export const pricingCards = [
  {
    id: 1,
    title: "Code source CRM",
    icon: "fa-solid fa-store",
    price: "2 000€-6 000€",
    billing: "Achat unique",
    description: "Code source complet, prêt à déployer.",
    features: [
      "Code source complet",
      "Base de données incluse",
      "Documentation",
      "Guide d'installation",
      "Licence à vie",
    ],
  },
  {
    id: 2,
    title: "Abonnement premium",
    icon: "fa-solid fa-crown",
    price: "15€/mois",
    billing: "Abonnement",
    description: "Accès complet à la marketplace de CRM.",
    features: [
      "20 CRM gratuits",
      "30 CRM premium",
      "Téléchargements illimités",
      "Support prioritaire",
      "Accès anticipé aux nouveautés",
    ],
    featured: true,
    badge: "Le plus populaire",
  },
  {
    id: 3,
    title: "Développement sur mesure",
    icon: "fa-solid fa-screwdriver-wrench",
    price: "350€-650€",
    billing: "Par semaine",
    secondaryPrice: "soit 1 400€-2 000€/mois",
    description: "Des fonctionnalités en plus ? On personnalise votre CRM.",
    features: [
      "Fonctionnalités sur mesure",
      "Amélioration UI/UX",
      "Intégration API",
      "Corrections de bugs",
      "Support technique",
    ],
  },
];

export const Avantages = [
  {
    id: 1,
    title: "Des CRM spécialisés",
    description:
      "Découvrez une marketplace entièrement dédiée aux CRM métier. Chaque solution est pensée pour répondre aux besoins spécifiques de votre secteur d'activité, afin de vous offrir un logiciel immédiatement opérationnel.",
    image: Explication1,
  },
  {
    id: 2,
    title: "Un gain de temps considérable",
    description:
      "Évitez plusieurs mois de développement. Nos CRM sont prêts à être déployés et peuvent être utilisés rapidement tout en restant entièrement personnalisables selon vos besoins.",
    image: Explication2,
  },
  {
    id: 3,
    title: "Un investissement rentable",
    description:
      "Achetez un CRM complet avec son code source et sa documentation plutôt que de repartir de zéro. Réduisez vos coûts de développement tout en gardant la maîtrise de votre solution.",
    image: Explication3,
  },
  {
    id: 4,
    title: "Évolutif et personnalisable",
    description:
      "Ajoutez des fonctionnalités, intégrez vos outils et faites évoluer votre CRM au rythme de votre entreprise grâce à notre service de personnalisation sur mesure.",
    image: Explication4,
  },
];
