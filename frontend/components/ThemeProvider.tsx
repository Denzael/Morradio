"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "valve" | "pirate";

const STORAGE_KEY = "mor-theme";

const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (t: Theme) => void;
}>({ theme: "valve", setTheme: () => {} });

function applyTheme(t: Theme) {
  const root = document.documentElement;
  root.setAttribute("data-theme", t);
  // Bridge to the mirrored SoundSphere skin classes so the copied
  // theme stylesheets (qodef-skin--dark / qodef-skin--light) follow
  // the same global switch on every page.
  document.body.classList.remove("qodef-skin--dark", "qodef-skin--light");
  document.body.classList.add(t === "valve" ? "qodef-skin--dark" : "qodef-skin--light");
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("valve");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
    // Migrate the legacy Frequency House key if present.
    const legacy = window.localStorage.getItem("fh-theme") as Theme | null;
    const initial = stored === "valve" || stored === "pirate" ? stored : legacy;
    if (initial === "valve" || initial === "pirate") {
      setThemeState(initial);
      applyTheme(initial);
    } else {
      applyTheme("valve");
    }
  }, []);

  function setTheme(t: Theme) {
    setThemeState(t);
    applyTheme(t);
    try {
      window.localStorage.setItem(STORAGE_KEY, t);
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
