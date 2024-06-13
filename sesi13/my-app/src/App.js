import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [pokemons, setPokemons] = useState([]);

  const handleMutation = (type) => {
    switch (type) {
      case 'increment':
        if (counter < 3) {
          setCounter(counter + 1);
        }
        break;
      case 'decrement':
        if (counter > 0) {
          setCounter(counter - 1);
        }
        break;
      default:
        break;
    }
  };

  const getPokemons = async () => {
    const response = await fetch(
      'https://pokeapi.co/api/v2/pokemon/'
    );
    const data = await response.json();

    setPokemons(data.results);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1 data-testid="counter-text">{counter}</h1>
        <button
          onClick={() => handleMutation('increment')}
          data-testid="increment-button"
        >
          +
        </button>
        <button
          onClick={() => handleMutation('decrement')}
          data-testid="decrement-button"
        >
          -
        </button>
        <table>
          <thead>
            <tr>
              <th>Pokemon Name</th>
            </tr>
          </thead>
          <tbody>
            {pokemons.map((pokemon, i) => {
              return (
                <tr key={pokemon.url + i}>
                  <td>{pokemon.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
