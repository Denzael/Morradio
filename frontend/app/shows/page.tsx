import { shows } from "@/lib/content";

export const metadata = { title: "Shows" };

export default function ShowsPage() {
  return (
    <div>
      <h1 className="font-display text-3xl" style={{ color: "var(--paper)" }}>
        Shows
      </h1>
      <p className="mt-2 max-w-xl text-sm" style={{ color: "var(--muted)" }}>
        Every regular slot on the station, and who&apos;s behind the desk.
      </p>

      <div className="mt-10 space-y-8">
        {shows.map((show) => (
          <article
            key={show.slug}
            id={show.slug}
            className="scroll-mt-24 border-b pb-8"
            style={{ borderColor: "var(--line)" }}
          >
            <h2 className="font-display text-2xl" style={{ color: "var(--paper)" }}>
              {show.name}
            </h2>
            <p className="mt-1 text-sm" style={{ color: "var(--accent-2)" }}>
              {show.cadence} &middot; hosted by {show.host}
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              {show.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
