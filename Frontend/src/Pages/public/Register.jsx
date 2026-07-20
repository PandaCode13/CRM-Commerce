import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register, saveSession } from "../../Services/user.services";
import "./css/auth.css";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "", terms: false });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    if (form.password !== form.confirmPassword) return setError("Les mots de passe ne correspondent pas.");
    if (!form.terms) return setError("Vous devez accepter les conditions d'utilisation.");
    setLoading(true);

    try {
      const session = await register({ firstName: form.firstName, lastName: form.lastName, email: form.email, password: form.password });
      saveSession(session);
      navigate(session.user.role === "admin" ? "/dashboard/admin" : "/dashboard/user", { replace: true });
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="auth-page">
      <section className="auth-card" aria-labelledby="register-title">
        <p className="auth-card__eyebrow">Commerce CRM</p>
        <h1 id="register-title">Créer votre compte</h1>
        <p className="auth-card__intro">Commencez à organiser votre activité commerciale.</p>

        {error && <p className="auth-alert" role="alert">{error}</p>}

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-form__grid">
            <div><label htmlFor="firstName">Prénom</label><input id="firstName" name="firstName" value={form.firstName} onChange={handleChange} autoComplete="given-name" required /></div>
            <div><label htmlFor="lastName">Nom</label><input id="lastName" name="lastName" value={form.lastName} onChange={handleChange} autoComplete="family-name" required /></div>
          </div>
          <label htmlFor="email">Adresse email</label>
          <input id="email" name="email" type="email" value={form.email} onChange={handleChange} autoComplete="email" required />
          <label htmlFor="password">Mot de passe</label>
          <input id="password" name="password" type="password" value={form.password} onChange={handleChange} autoComplete="new-password" minLength="8" required />
          <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
          <input id="confirmPassword" name="confirmPassword" type="password" value={form.confirmPassword} onChange={handleChange} autoComplete="new-password" minLength="8" required />
          <label className="auth-form__checkbox" htmlFor="terms">
            <input id="terms" name="terms" type="checkbox" checked={form.terms} onChange={handleChange} required />
            <span>J'accepte les <Link to="/conditions-utilisation" target="_blank" rel="noreferrer">conditions d'utilisation</Link>.</span>
          </label>
          <button type="submit" disabled={loading}>{loading ? "Création…" : "Créer mon compte"}</button>
        </form>

        <p className="auth-card__footer">Vous avez déjà un compte ? <Link to="/login">Se connecter</Link></p>
      </section>
    </main>
  );
};

export default Register;
