import { ChangeEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import suggestHero from '../assets/suggest.svg';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import '../styles/screens/Login.css';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAbleToLogin, setAbleToLogin] = useState(true);

  useEffect(() => {
    setAbleToLogin(!!email && !!password);
  }, [email, password]);

  function onLoginHandler() {
    if (!isAbleToLogin) return;


  }

  function onEmailChange(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function onPasswordChange(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  return (
    <main id="login-screen">
      <aside className="hero">
        <h1>Epicfy</h1>
        <img src={suggestHero} alt="Pessoas sugerindo melhorias" />
      </aside>

      <div className="wrapper">
        <form className="form">
          <header>
            <h1>Epicfy</h1>
          </header>

          <section>
            <Input value={email} onChange={onEmailChange} id="login-email" label='E-mail' />
            <Input value={password} onChange={onPasswordChange} type="password" id="login-password" label='Senha' />

            <Button disabled={!isAbleToLogin} onHandler={onLoginHandler}>Entrar</Button>
          </section>

          <footer>
            <p>
              Ainda não possui uma conta?
              <Link to="/register">Crie uma aqui</Link>
            </p>
          </footer>
        </form>
      </div>
    </main>
  );
}