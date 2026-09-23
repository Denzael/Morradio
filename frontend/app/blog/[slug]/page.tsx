import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero, homeCrumb } from "@/components/PageHero";
import { posts } from "@/lib/content";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  return { title: post ? `${post.title} – MOR Radio` : "News – MOR Radio" };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <div className="mor-page mor-section">
      <PageHero
        title={post.title}
        crumbs={[homeCrumb, { label: "Blog", href: "/blog" }, { label: post.title }]}
        intro={formatDate(post.date)}
      />
      <div className="mor-card mor-card-body" style={{ marginTop: "2.5rem" }}>
        <p className="mor-card-text" style={{ fontSize: "1.05rem" }}>{post.excerpt}</p>
        <p>
          <Link className="qodef-shortcode qodef-m qodef-button qodef-layout--textual qodef-html--link" href="/blog">
            <span className="qodef-m-text">All news</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
