import { useContext } from 'react';
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
      </main>
    </div>
  );
}

export default App;
