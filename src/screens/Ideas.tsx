import { useEffect, useState } from 'react';
import { ArrowLeft } from 'react-feather';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { api } from '../services/api';
import '../styles/screens/Ideas.css';
import { ApiIdea } from '../types/api';

type ApiIdeaResponse = {
  data: {
    ideas: ApiIdea[];
  }
};

export function Ideas() {
  const navigate = useNavigate();
  const location = useLocation();
  const search = new URLSearchParams(location.search).get('search') || '';
  const [ideas, setIdeas] = useState<ApiIdea[]>([]);

  useEffect(() => {
    loadIdeas();
  }, []);

  async function loadIdeas() {
    const response = await api.get('/idea/todos');
    const responseIdeas: ApiIdeaResponse = response.data;
    const ideasList = responseIdeas.data.ideas.filter(idea => {
      return idea.title.toLowerCase().includes(search.toLowerCase())
    });

    setIdeas(ideasList);
  }

  function onBackHandler() {
    navigate(-1);
  }

  function onIdeaDetailsHandler(id: number) {
    const idea = ideas.filter(item => item.id === id);

    navigate(`/ideas/${id}`, { state: idea[0] });
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
          <span>
            {ideas.length === 0 ? 'Nenhum resultado' : 'Exibindo resultados'} para "{search}"
          </span>
        </header>

        <div>
          {ideas.map((idea, key) => (
            <div key={key} onClick={() => onIdeaDetailsHandler(idea.id)}>
              <div className='identification'>
                <p>{idea.title}</p>
                <p>{idea.description}</p>
              </div>

              <footer>
                <div className="status">
                  <span>{idea.status}</span>
                </div>
              </footer>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}