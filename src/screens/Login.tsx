import { Link } from 'react-router-dom';
import suggestHero from '../assets/suggest.svg';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
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
            <Input id="login-email" label='E-mail' />
            <Input type="password" id="login-password" label='Senha' />

            <Button onHandler={() => alert('login!')}>Entrar</Button>
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