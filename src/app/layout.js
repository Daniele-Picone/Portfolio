"use client"; // se usi hook dentro Header/Footer

import { ThemeProvider } from "./context/ThemeContext";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import './context/ThemeContext.css'

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>
        {/* ThemeProvider avvolge tutto */}
        <ThemeProvider>
          <Header />
         {children}
        
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}