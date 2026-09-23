import Link from "next/link";
import { PageHero, homeCrumb } from "@/components/PageHero";
import { hosts } from "@/lib/content";

export const metadata = { title: "Meet Your Hosts – MOR Radio" };

export default function MeetYourHostsPage() {
  return (
    <div className="mor-page mor-section">
      <PageHero
        title="Our Hosts"
        crumbs={[homeCrumb, { label: "Meet Your Hosts" }]}
        intro="Each podcast is carefully curated to reflect the heartbeat of our community, our faith, and our culture. From engaging interviews to themed discussions, our lineup blends spirituality, lifestyle, and inspiration in ways that resonate with real lives."
      />
      <div className="mor-grid-4" style={{ marginTop: "2.5rem" }}>
        {hosts.map((host) => (
          <div key={host.name} className="mor-card">
            <img decoding="async" width="650" height="650" src={host.image} alt={host.name} loading="lazy" />
            <div className="mor-card-body">
              <h3 className="mor-card-title">{host.name}</h3>
              <Link className="mor-card-meta" href={host.page}>
                View More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
