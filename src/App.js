import logo from './logo2.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
        MONET
        </h1>
        <p>Intermediación Inmobiliaria</p>
        <a
          className="App-link"
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aviso de Privacidad
        </a>
      </header>
    </div>
  );
}

export default App;
