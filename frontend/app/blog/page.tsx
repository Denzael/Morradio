import Link from "next/link";
import { PageHero, homeCrumb } from "@/components/PageHero";
import { posts } from "@/lib/content";

export const metadata = { title: "Blog – MOR Radio" };

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default function BlogPage() {
  return (
    <div className="mor-page mor-section">
      <PageHero
        title="News / Listen Now"
        crumbs={[homeCrumb, { label: "Blog" }]}
        intro="Station notes, new programs, exclusive interviews, and special broadcasts."
      />
      <div className="mor-grid-3" style={{ marginTop: "2.5rem" }}>
        {posts.map((post) => (
          <article key={post.slug} className="mor-card mor-card-body">
            <p className="mor-card-meta">{formatDate(post.date)}</p>
            <h3 className="mor-card-title">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h3>
            <p className="mor-card-text">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
