import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type ThemeType = 'light' | 'dark';

type ThemeContextType = {
  theme: ThemeType;
  toggleTheme: () => void;
}

type ThemeProviderProps = {
  children: ReactNode;
}

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export function ThemeProvider({ children }: ThemeProviderProps) {

  const [theme, setTheme] = useState<ThemeType>();
  const [loading, setLoading] = useState(true);

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  useEffect(() => {
    const storageTheme = localStorage.getItem('theme');

    if (!storageTheme && !theme) {
      localStorage.setItem('theme', 'light');
      document.body.className = 'light';
      setLoading(false);
    }
    else {
      if (storageTheme && !theme) {
        storageTheme === 'light' ? setTheme('light') : setTheme('dark');
        document.body.className = storageTheme;
        setLoading(false);

        return;
      }
      if (theme && storageTheme !== theme) {
        localStorage.setItem('theme', theme);
        document.body.className = theme;
      }
    }

  }, [theme, loading])

  if (theme && !loading) {
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  }
  else {
    return (
      <div />
    );
  }
}

export const useTheme = () => {
  const theme = useContext(ThemeContext);

  return { ...theme };
}