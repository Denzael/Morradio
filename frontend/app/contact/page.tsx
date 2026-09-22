import { station } from "@/lib/content";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="grid gap-12 sm:grid-cols-2">
      <div>
        <h1 className="font-display text-3xl" style={{ color: "var(--paper)" }}>
          Get in touch
        </h1>
        <p className="mt-4 max-w-sm text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
          Song requests, letters for Long Wave Confessions, or reports of dead air — we read
          everything, eventually.
        </p>
        <dl className="mt-8 space-y-3 text-sm">
          <div>
            <dt style={{ color: "var(--accent-2)" }}>Studio line</dt>
            <dd style={{ color: "var(--paper)" }}>+44 20 7946 0958</dd>
          </div>
          <div>
            <dt style={{ color: "var(--accent-2)" }}>Post</dt>
            <dd style={{ color: "var(--paper)" }}>
              {station.name}, The Loft, 14 Cable Street, London
            </dd>
          </div>
          <div>
            <dt style={{ color: "var(--accent-2)" }}>Email</dt>
            <dd style={{ color: "var(--paper)" }}>hello@frequencyhouse.example</dd>
          </div>
        </dl>
      </div>

      <form
        className="space-y-4 rounded-lg panel-border p-6"
        style={{ background: "var(--panel)" }}
        action="mailto:hello@frequencyhouse.example"
        method="post"
        encType="text/plain"
      >
        <div>
          <label htmlFor="name" className="text-xs" style={{ color: "var(--muted)" }}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1 w-full rounded border bg-transparent px-3 py-2 text-sm outline-none"
            style={{ borderColor: "var(--line)", color: "var(--paper)" }}
          />
        </div>
        <div>
          <label htmlFor="email" className="text-xs" style={{ color: "var(--muted)" }}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded border bg-transparent px-3 py-2 text-sm outline-none"
            style={{ borderColor: "var(--line)", color: "var(--paper)" }}
          />
        </div>
        <div>
          <label htmlFor="message" className="text-xs" style={{ color: "var(--muted)" }}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="mt-1 w-full rounded border bg-transparent px-3 py-2 text-sm outline-none"
            style={{ borderColor: "var(--line)", color: "var(--paper)" }}
          />
        </div>
        <button
          type="submit"
          className="rounded px-5 py-2 text-sm font-medium"
          style={{ background: "var(--accent)", color: "var(--ink)" }}
        >
          Send message
        </button>
      </form>
    </div>
  );
}
