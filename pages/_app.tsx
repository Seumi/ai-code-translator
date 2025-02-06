import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

function App({ Component, pageProps }: AppProps<{}>) {
  useEffect(() => {
    // Check if theme exists in localStorage or use system preference
    const isDark = localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    // Set initial theme class
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  return (
    <main className={`${inter.className} min-h-screen bg-[var(--color-bg-primary)]`}>
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <Component {...pageProps} />
    </main>
  );
}

export default App;