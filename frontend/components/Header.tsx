import Link from "next/link";
import { station } from "@/lib/content";
import { ThemeSwitch } from "./ThemeSwitch";

const links = [
  { href: "/schedule", label: "Schedule" },
  { href: "/shows", label: "Shows" },
  { href: "/blog", label: "Log" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="border-b" style={{ borderColor: "var(--line)" }}>
      <div className="mx-auto flex max-w-content flex-wrap items-center justify-between gap-4 px-6 py-5">
        <Link href="/" className="font-display text-xl" style={{ color: "var(--paper)" }}>
          {station.name}
          <span className="ml-2 text-sm font-normal" style={{ color: "var(--accent-2)" }}>
            {station.freq}
          </span>
        </Link>
        <nav className="flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm transition-colors hover:opacity-80"
              style={{ color: "var(--muted)" }}
            >
              {l.label}
            </Link>
          ))}
          <ThemeSwitch />
        </nav>
      </div>
    </header>
  );
}
