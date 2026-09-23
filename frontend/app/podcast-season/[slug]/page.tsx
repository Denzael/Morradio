import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero, homeCrumb } from "@/components/PageHero";
import { seasons } from "@/lib/content";

export function generateStaticParams() {
  return seasons.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const season = seasons.find((s) => s.slug === params.slug);
  return { title: season ? `${season.host} – MOR Radio` : "Season – MOR Radio" };
}

export default function PodcastSeasonPage({ params }: { params: { slug: string } }) {
  const season = seasons.find((s) => s.slug === params.slug);
  if (!season) notFound();

  return (
    <div className="mor-page mor-section">
      <PageHero
        title={season.host}
        crumbs={[homeCrumb, { label: "Podcast List", href: "/podcast-list" }, { label: season.host }]}
        intro={season.tagline}
      />
      <div className="mor-split" style={{ marginTop: "2.5rem" }}>
        <div className="mor-card">
          <img decoding="async" width="648" height="650" src={season.image} className="attachment-soundsphere_core_image_size_square size-soundsphere_core_image_size_square" alt={season.host} />
        </div>
        <div className="mor-card mor-card-body">
          <h3 className="mor-card-title">{season.tagline}</h3>
          {season.episodes ? (
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {season.episodes.map((episode) => (
                <li key={episode.slug} className="mor-list-row" style={{ flexDirection: "column", alignItems: "stretch" }}>
                  <Link href={`/podcast-item/${episode.slug}`} style={{ fontWeight: 600 }}>
                    {episode.title}
                  </Link>
                  <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                    <div className="qodef-podcast-player" data-playing-id={episode.slug} style={{ flex: 1 }}>
                      <audio preload="none" controls style={{ width: "100%" }}>
                        <source src={episode.audio} type="audio/mp3" />
                      </audio>
                    </div>
                    <span className="mor-card-meta">{episode.length}</span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mor-card-text">
              New episodes from {season.host} are on the way. Tune in live and never miss an episode.
            </p>
          )}
          <p>
            <Link className="qodef-shortcode qodef-m qodef-button qodef-layout--textual qodef-html--link" href="/podcast-list">
              <span className="qodef-m-text">View all episodes</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
