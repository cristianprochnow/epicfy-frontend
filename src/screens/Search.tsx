import { ChangeEvent, useState } from 'react';
import '../styles/screens/Search.css';

export function Search() {
  const [search, setSearch] = useState<string>('');

  function onSearchChange(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  return (
    <main id="search-screen">
      <header>
        Epicfy
      </header>
      <section>
        <div className="input-group">
          <span>S</span>
          <input value={search} onChange={onSearchChange} type="text" />
        </div>
      </section>
      <footer></footer>
    </main>
  );
}