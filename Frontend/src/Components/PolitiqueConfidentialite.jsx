import React from "react";
import "./legal.css";

export default function PolitiqueConfidentialite() {
  return (
    <div className="legal-page">
      <div className="legal-card">
        <a href="/" className="legal-card__back">← Retour à l'accueil</a>

        <h1>Politique de confidentialité</h1>
        <p className="legal-card__date">Dernière mise à jour : [à compléter]</p>

        <section>
          <h2>Introduction</h2>
          <p>
            CRM Commerce attache une grande importance à la protection des
            données personnelles de ses utilisateurs. Cette politique
            explique quelles données sont collectées, pourquoi elles sont
            utilisées et quels sont vos droits.
          </p>
        </section>

        <section>
          <h2>Données collectées</h2>
          <p>Selon votre utilisation du site, nous pouvons collecter :</p>
          <ul>
            <li>Nom et prénom</li>
            <li>Adresse e-mail</li>
            <li>Informations liées au compte utilisateur</li>
            <li>Historique des commandes</li>
            <li>Liste des favoris</li>
            <li>Messages envoyés via les formulaires de contact</li>
            <li>Données techniques (adresse IP, navigateur, appareil)</li>
          </ul>
        </section>

        <section>
          <h2>Finalités</h2>
          <p>Les données sont utilisées afin de :</p>
          <ul>
            <li>créer et gérer votre compte ;</li>
            <li>traiter vos commandes ;</li>
            <li>répondre à vos demandes ;</li>
            <li>assurer le fonctionnement du site ;</li>
            <li>améliorer l'expérience utilisateur ;</li>
            <li>assurer la sécurité de la plateforme.</li>
          </ul>
        </section>

        <section>
          <h2>Conservation des données</h2>
          <p>
            Les données sont conservées uniquement pendant la durée
            nécessaire aux finalités pour lesquelles elles ont été
            collectées, conformément à la réglementation en vigueur.
          </p>
        </section>

        <section>
          <h2>Partage des données</h2>
          <p>
            CRM Commerce ne vend pas les données personnelles de ses
            utilisateurs. Les données peuvent uniquement être communiquées à
            des prestataires techniques indispensables au fonctionnement du
            service ou lorsqu'une obligation légale l'impose.
          </p>
        </section>

        <section>
          <h2>Paiement</h2>
          <p>
            Les achats sont actuellement réalisés par virement bancaire.
            Après validation d'une commande, les coordonnées bancaires
            nécessaires au paiement sont transmises au client par courrier
            électronique. CRM Commerce ne stocke pas les informations
            bancaires des utilisateurs.
          </p>
        </section>

        <section>
          <h2>Sécurité</h2>
          <p>
            Des mesures techniques et organisationnelles sont mises en œuvre
            afin de protéger les données personnelles contre tout accès non
            autorisé, perte ou modification.
          </p>
        </section>

        <section>
          <h2>Vos droits</h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données
            (RGPD), vous disposez notamment des droits suivants :
          </p>
          <ul>
            <li>droit d'accès ;</li>
            <li>droit de rectification ;</li>
            <li>droit d'effacement ;</li>
            <li>droit à la limitation du traitement ;</li>
            <li>droit d'opposition ;</li>
            <li>droit à la portabilité de vos données.</li>
          </ul>
          <p>
            Toute demande peut être adressée à l'adresse e-mail de contact.
          </p>
        </section>

        <section>
          <h2>Cookies</h2>
          <p>
            Le site peut utiliser des cookies techniques nécessaires à son
            fonctionnement ainsi que des cookies de mesure d'audience.
            Lorsque cela est requis, votre consentement sera demandé avant
            leur utilisation.
          </p>
        </section>

        <section>
          <h2>Modification de cette politique</h2>
          <p>
            Cette politique de confidentialité peut être mise à jour à tout
            moment afin de tenir compte des évolutions du site ou de la
            réglementation.
          </p>
        </section>
      </div>
    </div>
  );
}