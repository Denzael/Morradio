# Frequency House — digital radio site (Next.js)

A full frontend for a digital radio station, built with Next.js 14 (App Router) +
TypeScript + Tailwind. Ships with two switchable retro/vintage themes and no
backend — plug in your real stream URL and go.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

- `app/` — pages: home, `/schedule`, `/shows`, `/blog`, `/contact`
- `components/` — Header, Footer, Player, ThemeProvider, ThemeSwitch
- `lib/content.ts` — all station copy, schedule, shows and blog posts as
  plain data. Edit this file to rebrand the whole site.

## Themes

Two skins, toggled from the header (persisted in `localStorage`), both
driven by CSS variables in `app/globals.css`:

- **Valve** — 1950s tube-radio console: walnut, brass, cream dial face,
  amber glow. Display type is Fraunces, body is Work Sans.
- **Pirate** — late-70s underground broadcast zine: manila paper, xerox
  halftone texture, mustard + rust. Display type is Oswald, body is Space
  Mono (typewriter feel).

To add a third theme, add a `[data-theme="name"]` block to `globals.css`
with the same variable set, and a button in `components/ThemeSwitch.tsx`.

## Wiring the live stream

`lib/content.ts` has a `streamUrl` — point it at your Icecast/Shoutcast
(or any direct audio) stream URL and the player in `components/Player.tsx`
will play it. The "on air now" line is computed from the `schedule` array
against the visitor's local time, so no CMS is required to keep it current.

## Notes

- The contact form submits via `mailto:` for a zero-backend default —
  swap the `<form>` action in `app/contact-us/page.tsx` for a real endpoint
  when you have one.
- All copy in `lib/content.ts` mirrors www.morradio.co.uk (SoundSphere
  theme content, schedules, podcasts, seasons, and hosts). The live radio
  stream is `https://streaming.radio.co/s7e4c28285/listen`.
- Legacy demo routes redirect in `next.config.js`: `/schedule` →
  `/our-schedule`, `/shows` → `/podcast-list`, `/contact` → `/contact-us`,
  `/meet-your-host` → `/meet-your-hosts`.
