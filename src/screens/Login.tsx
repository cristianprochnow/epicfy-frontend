import { ChangeEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { api } from '../services/api.ts';
import { ApiUserLoginResponse } from '../types/api.ts';
import { getError } from '../helpers/api.ts';
import suggestHero from '../assets/suggest.svg';
import '../styles/screens/Login.css';
import { error, loading, success } from '../helpers/toast.ts';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAbleToLogin, setAbleToLogin] = useState(true);
  const navigator = useNavigate();

  useEffect(() => {
    setAbleToLogin(!!email && !!password);
  }, [email, password]);

  async function onLoginHandler() {
    try {
      if (!isAbleToLogin) throw new Error('Todos os campos são obrigatórios');

      loading('Realizando login');
      const response = await api.post('/user/login', {
        email, password
      });
      const content: ApiUserLoginResponse = response.data;

      if (content.error) throw new Error(content.error);

      success(`Login realizado com sucesso [${content.data?.token}]`);
      navigator('/');
    } catch (exception) {
      error(getError(exception));
    }
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