import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { ThemeProvider } from './Contexts/Theme';

export function App() {

  return (
    <ThemeProvider>
      <Header />
      <Home />
      <Footer />
    </ThemeProvider>
  )
}
