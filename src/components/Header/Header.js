import { useContext } from 'react';
import moon from '../../assets/icons/icon-moon.svg';
import { ThemeContext } from '../../context/ThemeContext';
import styles from './Header.module.css';

export default function Header() {
  const themeContext = useContext(ThemeContext);
  return (
    <header className={styles.header}>
      <h1>Todo</h1>
      <span className="spacer" />
      <button type="button" onClick={themeContext.toggleTheme}>
        <img src={moon} alt="Toggle to Dark Mode" />
      </button>
    </header>
  );
}
