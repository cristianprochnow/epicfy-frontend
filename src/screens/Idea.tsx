import { ArrowLeft, ThumbsDown, ThumbsUp } from 'react-feather';
import { useParams } from 'react-router-dom';
import { Button } from '../components/Button';
import '../styles/screens/Idea.css';

type IdeaRouteParams = { id?: string };

export function Idea() {
  const params: IdeaRouteParams = useParams();

  function onBackHandler() {}

  return (
    <main id="idea-screen">
      <header className="wrapper">
        <Button onHandler={onBackHandler}>
          <ArrowLeft /> Listagem
        </Button>

        <span>Epicfy</span>
      </header>

      <form className='wrapper'>
        <h1>Adicionar mais emojis ao WhatsApp</h1>
        <p>Uma ideia de aplicação de emojis ao WhatsApp, para aumentar a diversidade</p>

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
      </form>

      <section className='wrapper'>
        <h1>Comentários</h1>

        <div>
          <div className="comment">
            <span>Augusto de Almeida Cavalcante</span>
            <span>20/08/2024 15:06:34</span>
            <p>Uma ideia de aplicação de emojis ao WhatsApp, para aumentar a diversidade</p>
          </div>
        </div>
      </section>
    </main>
  );
}