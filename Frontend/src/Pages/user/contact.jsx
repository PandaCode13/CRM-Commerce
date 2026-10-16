import { useState } from "react";
import { Link } from "react-router-dom";
import { getFullName, getSessionEmail } from "../../Services/user.services";
import "./css/contact.css";

const SUPPORT_EMAIL = "contact@crm-commerce.com";
const MIN_MESSAGE_LENGTH = 10;

const SUBJECTS = [
  "Question sur une commande",
  "Question sur un CRM du catalogue",
  "Problème technique",
  "Documents et factures",
  "Autre demande",
];

const FAQ = [
  {
    question: "Que fait ce formulaire exactement ?",
    answer:
      "Il ouvre votre logiciel de messagerie avec un message pré-rempli. Rien n’est envoyé ni enregistré par le site : vous validez l’envoi dans votre messagerie.",
  },
  {
    question: "L’équipe sait-elle qui je suis ?",
    answer:
      "Oui. Le nom et l’adresse e-mail de votre compte sont ajoutés au message pour que la réponse puisse vous être envoyée.",
  },
  {
    question: "Une question sur mes données personnelles ?",
    answer:
      "Le traitement des données est détaillé dans la politique de confidentialité de CRM Commerce.",
  },
];

export default function UserContact() {
  const [subject, setSubject] = useState(SUBJECTS[0]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const sender = [getFullName(), getSessionEmail()].filter(Boolean).join(" — ");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (message.trim().length < MIN_MESSAGE_LENGTH) {
      setError(`Décrivez votre demande en ${MIN_MESSAGE_LENGTH} caractères minimum.`);
      return;
    }

    setError("");

    const signature = sender ? `\n\n— ${sender}` : "";
    const body = `${message.trim()}${signature}`;

    window.location.assign(
      `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    );
  };

  return (
    <main className="crm-contact">
      <div className="crm-contact__inner">
        <header className="crm-contact__header">
          <p className="crm-eyebrow">Support</p>
          <h1 className="crm-contact__title">Contactez l’équipe CRM Commerce</h1>
          <p className="crm-contact__subtitle">
            Une question sur une commande, un CRM du catalogue ou vos documents ? Rédigez
            votre message ci-dessous : il s’ouvrira dans votre messagerie, prêt à être envoyé.
          </p>
        </header>

        <div className="crm-contact__grid">
          <div className="crm-contact__main">
            <section className="crm-panel" aria-labelledby="contact-form-title">
              <div className="crm-panel__head">
                <h2 className="crm-panel__title" id="contact-form-title">
                  Votre message
                </h2>
              </div>

              <form className="crm-contact__form" onSubmit={handleSubmit} noValidate>
                <div className="crm-contact__field">
                  <label className="crm-contact__label" htmlFor="contact-subject">
                    Sujet
                  </label>
                  <select
                    className="crm-contact__control"
                    id="contact-subject"
                    name="subject"
                    value={subject}
                    onChange={(event) => setSubject(event.target.value)}
                  >
                    {SUBJECTS.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="crm-contact__field">
                  <label className="crm-contact__label" htmlFor="contact-message">
                    Message
                  </label>
                  <textarea
                    className="crm-contact__control crm-contact__control--message"
                    id="contact-message"
                    name="message"
                    rows={7}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder="Décrivez votre demande, et votre numéro de commande s’il y en a une."
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? "contact-message-error" : undefined}
                    required
                  />
                  {error && (
                    <p className="crm-contact__field-error" id="contact-message-error" role="alert">
                      {error}
                    </p>
                  )}
                </div>

                <button className="crm-contact__submit" type="submit">
                  Ouvrir dans ma messagerie
                  <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                </button>

                <p className="crm-contact__note">
                  Le message est adressé à {SUPPORT_EMAIL} depuis votre logiciel de messagerie.
                  Aucune donnée n’est envoyée par le site.
                  {sender && ` Vous écrivez en tant que ${sender}.`}
                </p>
              </form>
            </section>

            <section className="crm-panel" aria-labelledby="contact-shortcuts-title">
              <div className="crm-panel__head">
                <h2 className="crm-panel__title" id="contact-shortcuts-title">
                  À vérifier d’abord
                </h2>
              </div>

              <ul className="crm-contact__shortcuts">
                <li>
                  <Link to="/dashboard/user/orders">Suivre une commande</Link>
                </li>
                <li>
                  <Link to="/dashboard/user/catalog">Comparer les CRM du catalogue</Link>
                </li>
                <li>
                  <Link to="/dashboard/user/favorites">Retrouver mes favoris</Link>
                </li>
              </ul>
            </section>
          </div>

          <div className="crm-contact__aside">
            <section className="crm-panel" aria-labelledby="contact-details-title">
              <div className="crm-panel__head">
                <h2 className="crm-panel__title" id="contact-details-title">
                  Nous joindre
                </h2>
              </div>

              <p className="crm-contact__hint">
                Un message écrit directement reste le plus rapide pour une question sur un
                document ou une commande.
              </p>

              <a className="crm-link" href={`mailto:${SUPPORT_EMAIL}`}>
                {SUPPORT_EMAIL}
                <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </a>

              <ul className="crm-contact__legal">
                <li>
                  <Link to="/conditions-utilisation">Conditions d’utilisation</Link>
                </li>
                <li>
                  <Link to="/politique-confidentialite">Politique de confidentialité</Link>
                </li>
              </ul>
            </section>

            <section className="crm-panel" aria-labelledby="contact-faq-title">
              <div className="crm-panel__head">
                <h2 className="crm-panel__title" id="contact-faq-title">
                  Avant d’écrire
                </h2>
              </div>

              <ul className="crm-contact__faq">
                {FAQ.map((item) => (
                  <li key={item.question}>
                    <details className="crm-contact__faq-item">
                      <summary className="crm-contact__faq-question">{item.question}</summary>
                      <p className="crm-contact__faq-answer">{item.answer}</p>
                    </details>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}