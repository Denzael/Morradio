import { schedule } from "@/lib/content";

export const metadata = { title: "Schedule" };

export default function SchedulePage() {
  return (
    <div>
      <h1 className="font-display text-3xl" style={{ color: "var(--paper)" }}>
        This week
      </h1>
      <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
        All times local. Repeats happen when someone forgets to update this page.
      </p>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {schedule.map((day) => (
          <div key={day.day} className="rounded-lg panel-border p-5" style={{ background: "var(--panel)" }}>
            <h2 className="font-display text-lg" style={{ color: "var(--accent-2)" }}>
              {day.day}
            </h2>
            <ul className="mt-3 space-y-3">
              {day.slots.map((slot) => (
                <li key={slot.time + slot.show} className="text-sm">
                  <div className="flex justify-between" style={{ color: "var(--paper)" }}>
                    <span>{slot.time}</span>
                    <span>{slot.show}</span>
                  </div>
                  <p className="text-xs" style={{ color: "var(--muted)" }}>
                    {slot.host}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
