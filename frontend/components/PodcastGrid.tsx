import Link from "next/link";
import { podcasts } from "@/lib/content";

/** Shared podcast card grid used by /podcast-list and /podcast-list-dark. */
export function PodcastGrid({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`mor-grid-2${dark ? " qodef-skin--light" : ""}`} style={{ marginTop: "2.5rem" }}>
      {podcasts.map((podcast) => (
        <article key={podcast.slug} className="mor-card podcast-item type-podcast-item status-publish has-post-thumbnail hentry">
          <Link itemProp="url" href={`/podcast-item/${podcast.slug}`} aria-label={podcast.title}>
            <img decoding="async" width="800" height="750" src={podcast.image} className="attachment-full size-full wp-post-image" alt={podcast.title} loading="lazy" />
          </Link>
          <div className="mor-card-body">
            <p className="mor-card-meta">
              {podcast.episode} · {podcast.categories.join(" · ")}
            </p>
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
  );
}
