

import "./css/register.css";

const Register = () => {
    return (
        <div className="register-container">
            <h2>Inscription</h2>
            <form action="/register" method="POST">
                <div className="form-group">
                    <label htmlFor="firstName">Prénom</label>
                    <input type="text" id="firstName" name="firstName" required />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Nom</label>
                    <input type="text" id="lastName" name="lastName" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" required />
                </div>
                <div className="form-group">
                    <label htmlFor="terms">
                        <input type="checkbox" id="terms" name="terms" required />
                        J'accepte les <a href="/conditions-d-utilisation" target="_blank" rel="noopener noreferrer">conditions d'utilisation</a>
                    </label>
                </div>
                <button type="submit">S'inscrire</button>

                <p className="login-link">
                    Déjà un compte ? <a href="/login">Connectez-vous ici</a>
                </p>
            </form>
        </div>
    )
}
export default Register;
