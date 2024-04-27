'use client'
import { useState, useContext , createContext} from 'react';

const ThemesContext = createContext({
    theme: 'light',
    setTheme: () => {},
  });
  export const ThemesProvider = ({ children }) => { 
    const [theme, setTheme] = useState('light'); //Initial Theme
  
   const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
    };
  
    return (
      <ThemesContext.Provider value={{ theme, setTheme, toggleTheme }}>
        {children}
      </ThemesContext.Provider>
    );
  };

  export const useTheme = () => {
    const context = useContext(ThemesContext);
  
    if (context === undefined) {
      throw new Error('useTheme must be used within a ThemesProvider');
    }
  
    return { theme: context.theme, toggleTheme: context.toggleTheme };
  };
  
