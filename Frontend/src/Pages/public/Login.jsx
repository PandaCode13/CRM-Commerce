import "./css/login.css";

const Login = () => {
    return (
        <div className="login-container">
            <h2>Connexion</h2>
            <form action="/login" method="POST">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Se connecter</button>
            </form>

            <p className="register-link">
                Pas encore de compte ? <a href="/register">Inscrivez-vous ici</a>
            </p>
        </div>
    )
}
export default Login;
