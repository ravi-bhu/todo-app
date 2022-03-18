import { createContext, useState } from 'react';

export const ThemeContext = createContext({
  getTheme: () => {},
  toggleTheme: () => {},
});

const getUserPreference = () => {
  let defaultDark = window.matchMedia('(prefers-color-scheme: dark').matches;
  return defaultDark ? 'dark' : 'light';
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getUserPreference());

  const getTheme = () => theme;

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const themeContext = { getTheme, toggleTheme };

  return (
    <ThemeContext.Provider value={themeContext}>
      {children}
    </ThemeContext.Provider>
  );
}
