import Link from "next/link";
import { PageHero, homeCrumb } from "@/components/PageHero";

export const metadata = { title: "Shop – MOR Radio" };

export default function ShopPage() {
  return (
    <div className="mor-page mor-section">
      <PageHero
        title="Shop"
        crumbs={[homeCrumb, { label: "Shop" }]}
        intro="Great things are on the horizon."
      />
      <div className="mor-grid-2" style={{ marginTop: "2.5rem" }}>
        <div className="mor-card mor-card-body">
          <h3 className="mor-card-title">Opening soon</h3>
          <p className="mor-card-text">
            Something big is brewing! Our store is in the works and will be launching soon. In the meantime, support
            the station via our <Link href="/donate">donate</Link> page.
          </p>
        </div>
        <div className="mor-card mor-card-body">
          <h3 className="mor-card-title">Never miss an episode</h3>
          <p className="mor-card-text">
            Be the first to hear about new radio programs, exclusive interviews, and special broadcasts —{" "}
            <Link href="/#sub">subscribe</Link> for station updates.
          </p>
        </div>
      </div>
    </div>
  );
}
