import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero, homeCrumb } from "@/components/PageHero";
import { hosts, seasons, station } from "@/lib/content";

export function generateStaticParams() {
  return hosts
    .filter((h) => h.page.startsWith("/") && !["/meet-your-hosts"].includes(h.page))
    .map((h) => ({ slug: h.page.replace("/", "") }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const host = hosts.find((h) => h.page === `/${params.slug}`);
  return { title: host ? `${host.name} – MOR Radio` : "Host – MOR Radio" };
}

export default function HostPage({ params }: { params: { slug: string } }) {
  const host = hosts.find((h) => h.page === `/${params.slug}`);
  if (!host) notFound();
  const season = seasons.find((s) => s.slug === host.seasonSlug);

  return (
    <div className="mor-page mor-section">
      <PageHero
        title={host.name}
        crumbs={[homeCrumb, { label: "Meet Your Hosts", href: "/meet-your-hosts" }, { label: host.name }]}
        intro="Host on MOR Radio — African music, culture, and conversation."
      />
      <div className="mor-split" style={{ marginTop: "2.5rem" }}>
        <div className="mor-card">
          <img decoding="async" width="650" height="650" src={host.image} className="attachment-soundsphere_core_image_size_square size-soundsphere_core_image_size_square wp-post-image" alt={host.name} />
        </div>
        <div className="mor-card mor-card-body">
          <p className="mor-card-text">
            {host.name} hosts on MOR Radio, streaming live from the heart of Willenhall in the West Midlands.
          </p>
          {season && (
            <p className="mor-card-text">
              Season:{" "}
              <Link href={`/podcast-season/${season.slug}`}>
                {season.host} — {season.tagline}
              </Link>
            </p>
          )}
          <p className="mor-card-text">
            Contact the studio: <a href={`mailto:${station.email}`}>{station.email}</a> ·{" "}
            <a href={station.phoneHref}>{station.phone}</a>
          </p>
          <p>
            <Link className="qodef-shortcode qodef-m qodef-button qodef-layout--textual qodef-html--link" href="/meet-your-hosts">
              <span className="qodef-m-text">Meet all hosts</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
