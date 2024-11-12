import { Link } from 'react-router-dom';
import suggestHero from '../assets/suggest.svg';
import '../styles/screens/Login.css';

export function Login() {
  return (
    <main id="login-screen">
      <aside className="hero">
        <h1>Epicfy</h1>
        <img src={suggestHero} alt="Pessoas dando sugestões de melhorias" />
      </aside>

      <div className="wrapper">
        <form className="form">
          <header>
            <h1>Epicfy</h1>
          </header>

          <section>
            <div className="input-group">
              <label htmlFor="login-email">E-mail</label>
              <input type="text" id="login-email" />
            </div>

            <div className="input-group">
              <label htmlFor="login-password">Senha</label>
              <input type="password" id="login-password" />
            </div>

            <button>Entrar</button>
          </section>

          <footer>
            <p>
              Ainda não possui uma conta?
              <Link to="/register">Crie uma agora</Link>
            </p>
          </footer>
        </form>
      </div>
    </main>
  );
}