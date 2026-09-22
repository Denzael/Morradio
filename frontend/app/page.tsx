import Link from "next/link";
import { Player } from "@/components/Player";
import { station, schedule, shows } from "@/lib/content";

export default function HomePage() {
  const todayIndex = (new Date().getDay() + 6) % 7;
  const today = schedule[todayIndex];

  return (
    <div className="space-y-16">
      <section className="grid gap-10 sm:grid-cols-[1.2fr_1fr] sm:items-center">
        <div>
          <p className="text-xs uppercase tracking-widest" style={{ color: "var(--accent-2)" }}>
            {station.freq}
          </p>
          <h1 className="font-display mt-3 text-4xl leading-tight sm:text-5xl" style={{ color: "var(--paper)" }}>
            {station.tagline}
          </h1>
          <p className="mt-5 max-w-md text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
            {station.blurb}
          </p>
        </div>
        <div
          className="knob mx-auto flex h-48 w-48 items-center justify-center text-center sm:h-56 sm:w-56"
          aria-hidden
        >
          <div className="font-display text-sm" style={{ color: "var(--accent-2)" }}>
            {station.freq}
            <div className="mt-1 text-[10px] tracking-widest" style={{ color: "var(--muted)" }}>
              TUNED IN
            </div>
          </div>
        </div>
      </section>

      <section>
        <Player />
      </section>

      <section className="grid gap-10 sm:grid-cols-2">
        <div>
          <h2 className="font-display text-xl" style={{ color: "var(--paper)" }}>
            On today
          </h2>
          <ul className="mt-4 space-y-3">
            {today.slots.map((slot) => (
              <li
                key={slot.time}
                className="flex items-baseline justify-between border-b pb-3 text-sm"
                style={{ borderColor: "var(--line)" }}
              >
                <span style={{ color: "var(--muted)" }}>{slot.time}</span>
                <span style={{ color: "var(--paper)" }}>{slot.show}</span>
                <span style={{ color: "var(--muted)" }}>{slot.host}</span>
              </li>
            ))}
          </ul>
          <Link href="/schedule" className="mt-4 inline-block text-sm" style={{ color: "var(--accent-2)" }}>
            Full week&apos;s schedule
          </Link>
        </div>

        <div>
          <h2 className="font-display text-xl" style={{ color: "var(--paper)" }}>
            Featured shows
          </h2>
          <ul className="mt-4 space-y-4">
            {shows.slice(0, 3).map((show) => (
              <li key={show.slug} className="border-b pb-4" style={{ borderColor: "var(--line)" }}>
                <Link href={`/shows#${show.slug}`} className="font-display text-lg" style={{ color: "var(--paper)" }}>
                  {show.name}
                </Link>
                <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
                  {show.cadence} &middot; {show.host}
                </p>
              </li>
            ))}
          </ul>
          <Link href="/shows" className="mt-4 inline-block text-sm" style={{ color: "var(--accent-2)" }}>
            All shows
          </Link>
        </div>
      </section>
    </div>
  );
}
