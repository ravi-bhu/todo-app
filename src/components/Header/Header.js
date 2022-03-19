import { useContext } from 'react';
import moon from '../../assets/icons/icon-moon.svg';
import sun from '../../assets/icons/icon-sun.svg';
import { ThemeContext } from '../../context/ThemeContext';
import styles from './Header.module.css';

export default function Header() {
  const themeContext = useContext(ThemeContext);
  const themeSwitcherIcon = themeContext.getTheme() === 'dark' ? sun : moon;
  return (
    <header className={styles.header}>
      <h1>Todo</h1>
      <span className="spacer" />
      <button type="button" onClick={themeContext.toggleTheme}>
        <img src={themeSwitcherIcon} alt="Toggle Theme" />
      </button>
    </header>
  );
}
