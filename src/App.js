import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header';
import EducationPage from './components/Education/EducationPage';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark', // Cambia esto a 'light' si quieres el modo claro
    // puedes definir otros colores aquí
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <EducationPage />
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
    </ThemeProvider>
  );
}

export default App;
