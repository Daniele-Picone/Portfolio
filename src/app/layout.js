
import { ThemeProvider } from "./context/ThemeContext";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import './context/ThemeContext.css'


export  const metadata = {
  title: "Il mio portfolio - Daniele Picone",
  description: "Portfolio di Daniele Picone : Junior developer fullstack",
  keywords: ["portfolio", "web developer", "Next.js", "React", "Fullstack"],
  authors: [{ name: "Daniele Picone" }],
  
  openGraph: {
    title: "Portfolio di Daniele Picone",
    description: "Junior developer fullstack",
    verification: {
    google: "8EfOLGlCCjd0xIx6kmaWB18SF_rQjPqIrYaACGvzuRY",
    },
    url: "https://portfolio-clg8i4qo0b.vercel.app/",
    siteName: "Portfolio Nome Cognome",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "it_IT",
    type: "website",
  },
};

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