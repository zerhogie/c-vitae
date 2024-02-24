import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Enrique Rodríguez Castañeda
        </p>
        <a
          className="App-link"
          href="./downloads/CV-Enrique-Rodriguez-Castaneda-02-2024.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          Descargar CV
        </a>
      </header>
    </div>
  );
}

export default App;
