import { PageHero, homeCrumb } from "@/components/PageHero";
import { weekdaySchedule } from "@/lib/content";

export const metadata = { title: "Our Schedule – MOR Radio" };

export default function OurSchedulePage() {
  return (
    <div className="mor-page mor-section">
      <PageHero
        title="Live Time New"
        crumbs={[homeCrumb, { label: "Our Schedule" }]}
        intro="At MOR Radio, staying connected with you means everything to us. Whether you’re a loyal listener, a curious first-timer, or one of our passionate presenters, we believe that every connection creates a ripple."
      />
      <div className="mor-grid" style={{ marginTop: "2.5rem" }}>
        {weekdaySchedule.map((day) => (
          <div key={day.day} className="mor-card mor-card-body">
            <h3 className="mor-card-title">
              {day.day === "Monday – Friday" ? "Weekday Schedule" : "Weekend Schedule"}
            </h3>
            <p className="mor-card-meta">{day.day}</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {day.slots.map((slot) => (
                <li key={slot.show} className="mor-list-row" style={{ flexDirection: "column", alignItems: "stretch", gap: "0.35rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
                    <span className="mor-card-text">{slot.time}</span>
                    <span style={{ fontWeight: 700, textAlign: "right" }}>{slot.show}</span>
                  </div>
                  <p className="mor-card-text" style={{ margin: 0 }}>
                    {slot.desc}
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
