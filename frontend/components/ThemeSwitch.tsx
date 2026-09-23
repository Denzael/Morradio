"use client";

import { useTheme } from "./ThemeProvider";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-1 rounded-full panel-border p-1" style={{ background: "var(--panel-2)" }} role="group" aria-label="Color theme">
      <button
        onClick={() => setTheme("valve")}
        aria-pressed={theme === "valve"}
        aria-label="Light theme"
        className="rounded-full px-3 py-1 text-xs tracking-wide transition-colors"
        style={{
          background: theme === "valve" ? "var(--accent)" : "transparent",
          color: theme === "valve" ? "var(--ink)" : "var(--muted)",
        }}
      >
        Light
      </button>
      <button
        onClick={() => setTheme("pirate")}
        aria-pressed={theme === "pirate"}
        aria-label="Dark theme"
        className="rounded-full px-3 py-1 text-xs tracking-wide transition-colors"
        style={{
          background: theme === "pirate" ? "var(--accent)" : "transparent",
          color: theme === "pirate" ? "var(--ink)" : "var(--muted)",
        }}
      >
        Dark
      </button>
    </div>
  );
}
