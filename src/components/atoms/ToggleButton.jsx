"use client";

import { useTheme } from '../../app/context/ThemeContext.jsx';
import './ToggleButton.css';

export default function ToggleButton() {
  const { theme, toggleTheme } = useTheme(); // <-- qui prende lo stato
  const isDark = theme === "dark";           // <-- vero se siamo in dark

  return (
    <button
      onClick={toggleTheme}
      className={`toggle-btn ${isDark ? "dark" : "light"}`}
    >
      <span className="icon sun">🌞</span>
      <span className="icon moon">🌙</span>
      <span
  className="circle"
  style={{ transform: isDark ? "translateX(0px)" : "translateX(30px)" }}
></span>
    </button>
  );
}
