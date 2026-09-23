import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero, homeCrumb } from "@/components/PageHero";
import { podcasts } from "@/lib/content";

const categories = ["entertainment", "past-podcast"];

export function generateStaticParams() {
  return categories.map((slug) => ({ slug }));
}

function titleFor(slug: string) {
  return slug.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ");
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  return { title: `${titleFor(params.slug)} – MOR Radio` };
}

export default function PodcastCategoryPage({ params }: { params: { slug: string } }) {
  const slug = params.slug.toLowerCase();
  const items = podcasts.filter((p) =>
    p.categories.some((c) => c.toLowerCase().replace(/\s+/g, "-") === slug)
  );
  if (items.length === 0) notFound();

  return (
    <div className="mor-page mor-section">
      <PageHero
        title={titleFor(slug)}
        crumbs={[homeCrumb, { label: "Podcast List", href: "/podcast-list" }, { label: titleFor(slug) }]}
        intro="Listen to the best podcast online."
      />
      <div className="mor-grid-3" style={{ marginTop: "2.5rem" }}>
        {items.map((podcast) => (
          <article key={podcast.slug} className="mor-card podcast-item type-podcast-item status-publish has-post-thumbnail hentry">
            <Link itemProp="url" href={`/podcast-item/${podcast.slug}`} aria-label={podcast.title}>
              <img decoding="async" width="800" height="750" src={podcast.image} className="attachment-full size-full wp-post-image" alt={podcast.title} loading="lazy" />
            </Link>
            <div className="mor-card-body">
              <p className="mor-card-meta">{podcast.episode}</p>
              <h3 className="mor-card-title">
                <Link itemProp="url" href={`/podcast-item/${podcast.slug}`}>
                  {podcast.title}
                </Link>
              </h3>
              <div className="qodef-podcast-player" data-playing-id={podcast.slug}>
                <audio preload="none">
                  <source src={podcast.audio} type="audio/mp3" />
                </audio>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
