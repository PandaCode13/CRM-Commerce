
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login, saveSession } from "../../Services/user.services";
import "./css/auth.css";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const session = await login(form);
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
      <section className="auth-card" aria-labelledby="login-title">
        <p className="auth-card__eyebrow">Commerce CRM</p>
        <h1 id="login-title">Bon retour parmi nous</h1>
        <p className="auth-card__intro">Connectez-vous pour accéder à votre espace.</p>

        {error && <p className="auth-alert" role="alert">{error}</p>}

        <form className="auth-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Adresse email</label>
          <input id="email" name="email" type="email" value={form.email} onChange={handleChange} autoComplete="email" required />

          <label htmlFor="password">Mot de passe</label>
          <input id="password" name="password" type="password" value={form.password} onChange={handleChange} autoComplete="current-password" required />

          <button type="submit" disabled={loading}>
            {loading ? "Connexion…" : "Se connecter"}
          </button>
        </form>

        <p className="auth-card__footer">Pas encore de compte ? <Link to="/register">Créer un compte</Link></p>
      </section>
    </main>
  );
};

export default Login;
