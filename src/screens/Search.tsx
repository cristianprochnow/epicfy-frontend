import { ChangeEvent, useState } from 'react';
import { Search as SearchIcon } from 'react-feather';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import '../styles/screens/Search.css';

export function Search() {
  const navigator = useNavigate();
  const [search, setSearch] = useState<string>('');

  function onSearchChange(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  function onSearchHandler() {
    if (!search.trim()) return;

    navigator({
      pathname: '/ideas',
      search: createSearchParams({ search }).toString()
    });
  }

  return (
    <main id="search-screen">
      <header className='wrapper'>
        Epicfy
      </header>
      <form className='wrapper'>
        <p>Comece pesquisando por uma palavra-chave, uma funcionalidade ou uma aplicação existente para ajudar a melhorar qualquer solução...</p>

        <div className="input-group">
          <span>
            <SearchIcon />
          </span>
          <input value={search} onChange={onSearchChange} type="text" />
        </div>

        <Button onHandler={onSearchHandler}>Pesquisar</Button>
      </form>
    </main>
  );
}