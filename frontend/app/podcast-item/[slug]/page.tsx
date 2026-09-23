import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero, homeCrumb } from "@/components/PageHero";
import { podcasts } from "@/lib/content";

export function generateStaticParams() {
  return podcasts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const podcast = podcasts.find((p) => p.slug === params.slug);
  return { title: podcast ? `${podcast.title} – MOR Radio` : "Podcast – MOR Radio" };
}

export default function PodcastItemPage({ params }: { params: { slug: string } }) {
  const podcast = podcasts.find((p) => p.slug === params.slug);
  if (!podcast) notFound();

  return (
    <div className="mor-page mor-section">
      <PageHero
        title={podcast.title}
        crumbs={[homeCrumb, { label: "Podcast List", href: "/podcast-list" }, { label: podcast.title }]}
        intro={`${podcast.episode} · ${podcast.categories.join(" · ")} — listen on:`}
      />
      <div className="mor-split" style={{ marginTop: "2.5rem" }}>
        <div className="mor-card">
          <img decoding="async" width="800" height="750" src={podcast.image} className="attachment-full size-full wp-post-image" alt={podcast.title} />
        </div>
        <div className="mor-card mor-card-body">
          <p className="mor-card-meta">{podcast.episode}</p>
          <div className="qodef-podcast-player" data-playing-id={podcast.slug}>
            <audio preload="none" controls style={{ width: "100%" }}>
              <source src={podcast.audio} type="audio/mp3" />
            </audio>
          </div>
          <p style={{ marginTop: "0.5rem" }}>
            <Link className="qodef-shortcode qodef-m qodef-button qodef-layout--textual qodef-html--link" href="/podcast-list">
              <span className="qodef-m-text">All episodes</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
