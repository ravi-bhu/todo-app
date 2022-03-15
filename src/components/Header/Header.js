import moon from '../../assets/icons/icon-moon.svg';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Todo</h1>
      <span className="spacer" />
      <button type="button">
        <img src={moon} alt="Toggle to Dark Mode" />
      </button>
    </header>
  );
}
