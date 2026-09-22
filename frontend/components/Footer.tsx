import { station } from "@/lib/content";

export function Footer() {
  return (
    <footer className="mt-24 border-t" style={{ borderColor: "var(--line)" }}>
      <div className="mx-auto max-w-content px-6 py-10 text-sm" style={{ color: "var(--muted)" }}>
        <p>
          {station.name} &middot; {station.freq} &middot; broadcasting from a loft that really
          exists.
        </p>
        <p className="mt-2">&copy; {new Date().getFullYear()}. No requests during Night Freight.</p>
      </div>
    </footer>
  );
}
