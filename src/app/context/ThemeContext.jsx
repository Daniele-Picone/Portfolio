
"use client";
import { createContext, useContext, useState, useEffect } from "react";
import './ThemeContext.css'

const ThemeContext = createContext();

// Componente provider

export function ThemeProvider({ children }) {

const [theme, setTheme] = useState("dark")

useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

   
  const isLightTheme = theme === "light";
  const isdark =  theme ==="dark";

//   valore Condiviso 

const value = {
  theme,
  toggleTheme,
  isLightTheme,
  isdark,
};

  return(
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )

};

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme deve essere usato dentro ThemeProvider");
  }
  return context;
}



