import { Link } from "react-router-dom";
import "./legal.css";

export default function ConditionsUtilisation() {
  return (
    <main className="legal-page">
      <article className="legal-card">
        <Link className="legal-card__back" to="/register">← Retour à l'inscription</Link>
        <h1>Conditions d'utilisation</h1>
        <p className="legal-card__date">Dernière mise à jour : 20 juillet 2026</p>

        <section>
          <h2>1. Objet du service</h2>
          <p>Commerce CRM met à disposition un espace permettant de gérer des informations commerciales et des utilisateurs autorisés.</p>
        </section>
        <section>
          <h2>2. Création et sécurité du compte</h2>
          <p>Vous fournissez des informations exactes lors de l'inscription et conservez votre mot de passe confidentiel. Vous êtes responsable des actions réalisées depuis votre compte.</p>
        </section>
        <section>
          <h2>3. Utilisation autorisée</h2>
          <p>Le service doit être utilisé conformément aux lois applicables, sans tentative d'accès non autorisé, de perturbation du service ou d'atteinte aux données d'autres utilisateurs.</p>
        </section>
        <section>
          <h2>4. Données personnelles</h2>
          <p>Les données nécessaires au fonctionnement du compte sont traitées afin de fournir le service. Pour toute question relative à vos données, contactez l'administrateur de l'application.</p>
        </section>
        <section>
          <h2>5. Suspension ou suppression</h2>
          <p>Un compte peut être suspendu ou supprimé en cas de non-respect de ces conditions ou pour des raisons de sécurité.</p>
        </section>
        <section>
          <h2>6. Acceptation</h2>
          <p>En créant un compte, vous reconnaissez avoir lu et accepté les présentes conditions d'utilisation.</p>
        </section>
      </article>
    </main>
  );
}
