import { Link } from 'react-router-dom';
import notFoundHero from '../assets/not-found.svg';
import '../styles/screens/NotFound.css';

export function NotFound() {
  return (
    <main id="not-found-screen">
      <header>
        <img src={notFoundHero} alt="Not Found Hero" />
      </header>

      <div>
        <h1>Ooops...</h1>
        <p>
          Infelizmente nada foi encontrado aqui. O que acha
          de <Link to="/">voltar ao início</Link> e tentar novamente?
        </p>
      </div>
    </main>
  );
}