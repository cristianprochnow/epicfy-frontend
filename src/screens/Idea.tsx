import { ArrowLeft, Heart } from 'react-feather';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import '../styles/screens/Idea.css';
import { ApiIdea } from '../types/api';
import { useEffect, useState } from 'react';
import { api } from '../services/api.ts';

type ApiLikes = {
  idea_id: number;
  idea_title: string;
  likeCount: number;
};

type ApiComments = {
  commentId: number;
  content: string;
  created_at: string;
  user_id: number;
  idea_id: number;
  ideaTitle: string;
  username: string;
};

type ApiLikesResponse = {
  data: {
    votes: ApiLikes[];
  };
  ok: boolean;
};

type ApiCommentsResponse = {
  data: {
    comments: ApiComments[];
  };
  ok: boolean;
};

export function Idea() {
  const navigate = useNavigate();
  const location = useLocation();
  const idea: ApiIdea = location.state;
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState<ApiComments[]>([]);

  useEffect(() => {
    loadLikes();
    loadComments();
  }, []);

  async function loadLikes() {
    const response = await api.get('/vote/todos');
    const responseLikes: ApiLikesResponse = response.data;
    const ideaLikes = responseLikes.data.votes
      .filter(vote => vote.idea_id === idea.id);

    setLikes(ideaLikes[0].likeCount || 0);
  }

  async function loadComments() {
    const response = await api.get('/comment/todos');
    const responseComments: ApiCommentsResponse = response.data;
    const ideaComments = responseComments.data.comments
      .filter(comment => comment.idea_id === idea.id)
      .map(comment => {
        const createdAt = (new Date(comment.created_at));
        const newDate = `${createdAt.getDate()}/${createdAt.getMonth() + 1}/${createdAt.getFullYear()}`;
        const newHours = `${createdAt.getHours()}:${createdAt.getMinutes()}:${createdAt.getSeconds()}`;
        comment.created_at = `${newDate} ${newHours}`;

        return comment;
      });

    setComments(ideaComments);
  }

  function onBackHandler() {
    navigate(-1);
  }

  return (
    <main id="idea-screen">
      <header className="wrapper">
        <Button onHandler={onBackHandler}>
          <ArrowLeft /> Listagem
        </Button>

        <span>Epicfy</span>
      </header>

      <form className='wrapper'>
        <h1>{idea.title}</h1>
        <p>{idea.description}</p>

        <footer>
          <div className="status">
            <span>{idea.status}</span>
          </div>

          <div className='votes'>
            <span title='Like'>
              <Heart />
              <span>{likes}</span>
            </span>
          </div>
        </footer>
      </form>

      <section className='wrapper'>
        <h1>Comentários</h1>

        <div>
          {comments.map((comment, key) => (
            <div className="comment" key={key}>
              <span>{comment.username}</span>
              <span>{comment.created_at}</span>
              <p>{comment.content}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}