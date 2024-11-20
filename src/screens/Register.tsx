import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import suggestHero from '../assets/suggest.svg';
import '../styles/screens/Login.css';
import { api, getError } from '../services/api.ts';
import { ApiUserCreationResponse } from '../types/api.ts';

export function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isAbleToRegister, setAbleToRegister] = useState(false);

  useEffect(() => {
    setAbleToRegister(!!name && !!email && !!password && !!confirmPassword);
  }, [name, email, password, confirmPassword]);

  async function onSubmitHandler() {
    try {
      if (!isAbleToRegister) throw new Error('Todos os campos são obrigatórios.');
      if (password !== confirmPassword) throw new Error('Senhas inseridas não batem.');

      const response = await api.post('/user', {
        email, password, username: name, is_company: false
      });
      const content: ApiUserCreationResponse = response.data;

      if (content.error) throw new Error(content.error);

      toast.success('Criado com sucesso!');
    } catch (exception) {
      toast.error(getError(exception));
    }
  }

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
            <Input
              id="login-name"
              label="Nome"
              value={name}
              onChange={event => setName(event.target.value)} />
            <Input
              id="login-email"
              label="E-mail"
              value={email}
              onChange={event => setEmail(event.target.value)} />
            <Input
              type="password"
              id="login-password"
              label="Senha"
              value={password}
              onChange={event => setPassword(event.target.value)} />
            <Input
              type="password"
              id="login-confirm-password"
              label="Confirme a senha"
              value={confirmPassword}
              onChange={event => setConfirmPassword(event.target.value)} />

            <Button disabled={!isAbleToRegister} onHandler={onSubmitHandler}>Criar conta</Button>
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