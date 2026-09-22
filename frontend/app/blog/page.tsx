import { posts } from "@/lib/content";

export const metadata = { title: "Log" };

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default function BlogPage() {
  return (
    <div>
      <h1 className="font-display text-3xl" style={{ color: "var(--paper)" }}>
        The Log
      </h1>
      <p className="mt-2 max-w-xl text-sm" style={{ color: "var(--muted)" }}>
        Station notes, equipment trouble, and listener mail.
      </p>

      <div className="mt-10 space-y-10">
        {posts.map((post) => (
          <article key={post.slug} className="border-b pb-8" style={{ borderColor: "var(--line)" }}>
            <p className="text-xs" style={{ color: "var(--accent-2)" }}>
              {formatDate(post.date)}
            </p>
            <h2 className="font-display mt-1 text-2xl" style={{ color: "var(--paper)" }}>
              {post.title}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              {post.excerpt}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
