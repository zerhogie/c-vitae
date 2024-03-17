import './App.scss';
import Header from './components/Header/Header';
import EducationPage from './components/Education/EducationPage';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ProfessionalExperience from './components/ProfesionalExperience/ProfesionalExperience';

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
        <ProfessionalExperience />
      </div>
    </ThemeProvider>
  );
}

export default App;
