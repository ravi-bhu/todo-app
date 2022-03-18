import { useContext } from 'react';
import Footer from './components/Footer';
import Header from './components/Header/Header';
import Todo from './components/Todo';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const theme = useContext(ThemeContext);
  return (
    <div className="app" data-theme={theme.getTheme()}>
      <main className="container">
        <Header />
        <Todo />
        <Footer />
      </main>
    </div>
  );
}

export default App;
