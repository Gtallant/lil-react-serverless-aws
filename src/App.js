import Hero from './components/Hero';
import { ThemeProvider } from '@mui/material/styles';
import Theme from './assets/theme';
import Experience from './components/Experience';
import CssBaseline from '@mui/material/CssBaseline';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Skills from './components/Skills';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
          <CssBaseline />
          <Hero />
          <Experience />
          <Skills />
          <Certifications />
          <Education />
          <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
