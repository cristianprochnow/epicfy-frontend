import { useParams } from 'react-router-dom';
import '../styles/screens/Idea.css';

type IdeaRouteParams = { id?: string };

export function Idea() {
  const params: IdeaRouteParams = useParams();

  return (
    <main id="idea-screen">
      Rota com o ID {params.id}
    </main>
  );
}