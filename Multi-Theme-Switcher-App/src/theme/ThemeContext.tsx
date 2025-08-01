import { createContext, useContext, useEffect, useState } from 'react';
import { themes, ThemeType } from './themes';

type ThemeContextType = {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: 'theme1',
  setTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>(() => {
    return (localStorage.getItem('app-theme') as ThemeType) || 'theme1';
  });

  useEffect(() => {
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
