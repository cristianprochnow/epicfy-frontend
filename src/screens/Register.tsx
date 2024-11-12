import { Link } from 'react-router-dom';
import suggestHero from '../assets/suggest.svg';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import '../styles/screens/Login.css';

export function Register() {
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
            <Input id="login-name" label='Nome' />
            <Input id="login-email" label='E-mail' />
            <Input type="password" id="login-password" label='Senha' />
            <Input type="password" id="login-confirm-password" label='Confirme a senha' />

            <Button onHandler={() => alert('register!')}>Criar conta</Button>
          </section>

          <footer>
            <p>
              Já possui uma conta?
              <Link to="/login">Entre por aqui</Link>
            </p>
          </footer>
        </form>
      </div>
    </main>
  );
}