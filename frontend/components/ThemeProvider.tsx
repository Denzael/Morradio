"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "valve" | "pirate";

const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (t: Theme) => void;
}>({ theme: "valve", setTheme: () => {} });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("valve");

  useEffect(() => {
    const stored = window.localStorage.getItem("fh-theme") as Theme | null;
    if (stored === "valve" || stored === "pirate") {
      setThemeState(stored);
      document.documentElement.setAttribute("data-theme", stored);
    } else {
      document.documentElement.setAttribute("data-theme", "valve");
    }
  }, []);

  function setTheme(t: Theme) {
    setThemeState(t);
    document.documentElement.setAttribute("data-theme", t);
    try {
      window.localStorage.setItem("fh-theme", t);
    } catch {
      /* ignore storage errors */
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
