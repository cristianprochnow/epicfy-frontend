import { ArrowLeft, ArrowRight, ThumbsDown, ThumbsUp } from 'react-feather';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import '../styles/screens/Ideas.css';

export function Ideas() {
  const navigate = useNavigate();
  const location = useLocation();
  const search = new URLSearchParams(location.search).get('search');

  function onBackHandler() {}

  function onPreviousPageHandler() {}

  function onNextPageHandler() {}

  function onIdeaDetailsHandler(id: number) {
    navigate(`/ideas/${id}`);
  }

  return (
    <main id="ideas-screen">
      <header className='wrapper'>
        Epicfy
      </header>

      <section className='wrapper'>
        <header>
          <Button onHandler={onBackHandler}>
            <ArrowLeft />
            Voltar
          </Button>
          <span>Exibindo resultados para "{search}"</span>
        </header>

        <div>
          <div onClick={() => onIdeaDetailsHandler(1)}>
            <div className='identification'>
              <p>Adicionar mais emojis ao WhatsApp</p>
              <p>Uma ideia de aplicação de emojis ao WhatsApp, para aumentar a diversidade</p>
            </div>

            <footer>
              <div className="status">
                <span>Em progresso</span>
              </div>

              <div className='votes'>
                <span title='Like'>
                  <ThumbsUp />
                  <span>50</span>
                </span>
                <span title='Dislike'>
                  <ThumbsDown />
                  <span>10</span>
                </span>
              </div>

            </footer>
          </div>
        </div>
      </section>

      <footer className='wrapper'>
        <Button onHandler={onPreviousPageHandler}>
          <ArrowLeft /> Anterior
        </Button>
        <Button onHandler={onNextPageHandler}>
          Próxima <ArrowRight />
        </Button>
      </footer>
    </main>
  );
}