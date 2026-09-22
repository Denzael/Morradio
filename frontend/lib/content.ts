export const station = {
  name: "Frequency House",
  freq: "98.6 FM",
  tagline: "Broadcasting from the attic since 1979.",
  blurb:
    "An independent station run out of a converted loft, mixing found sound, night jazz, and the kind of talk radio you used to fall asleep to.",
  streamUrl: "https://stream.example.com/frequency-house.mp3",
};

export type ShowSlot = {
  day: string;
  slots: { time: string; show: string; host: string }[];
};

export const schedule: ShowSlot[] = [
  {
    day: "Monday",
    slots: [
      { time: "06:00", show: "Milk Round", host: "Aggie Vane" },
      { time: "10:00", show: "The Static Hour", host: "R. Okafor" },
      { time: "19:00", show: "Night Freight", host: "Lomax" },
    ],
  },
  {
    day: "Tuesday",
    slots: [
      { time: "06:00", show: "Milk Round", host: "Aggie Vane" },
      { time: "13:00", show: "Dead Air Society", host: "Pim & Cato" },
      { time: "21:00", show: "The Shipping Report", host: "Lomax" },
    ],
  },
  {
    day: "Wednesday",
    slots: [
      { time: "08:00", show: "Wireless Kitchen", host: "Bea Solomon" },
      { time: "15:00", show: "Aerial View", host: "R. Okafor" },
      { time: "22:00", show: "Valve & Vinyl", host: "Denny Marsh" },
    ],
  },
  {
    day: "Thursday",
    slots: [
      { time: "06:00", show: "Milk Round", host: "Aggie Vane" },
      { time: "12:00", show: "Splice & Dice", host: "Pim & Cato" },
      { time: "20:00", show: "Long Wave Confessions", host: "Iris Kade" },
    ],
  },
  {
    day: "Friday",
    slots: [
      { time: "09:00", show: "Wireless Kitchen", host: "Bea Solomon" },
      { time: "17:00", show: "Drivetime Static", host: "Lomax" },
      { time: "23:00", show: "Pirate Hour", host: "Unknown Caller" },
    ],
  },
  {
    day: "Saturday",
    slots: [
      { time: "10:00", show: "Repair Shop", host: "Denny Marsh" },
      { time: "16:00", show: "Aerial View: Weekend", host: "R. Okafor" },
    ],
  },
  {
    day: "Sunday",
    slots: [
      { time: "09:00", show: "Sunday Service", host: "Iris Kade" },
      { time: "18:00", show: "Long Wave Confessions: Rewind", host: "Iris Kade" },
    ],
  },
];

export type Show = {
  slug: string;
  name: string;
  host: string;
  cadence: string;
  description: string;
};

export const shows: Show[] = [
  {
    slug: "the-static-hour",
    name: "The Static Hour",
    host: "R. Okafor",
    cadence: "Mondays, 10am",
    description:
      "Field recordings, shortwave interference, and interviews with people who still fix radios for a living.",
  },
  {
    slug: "dead-air-society",
    name: "Dead Air Society",
    host: "Pim & Cato",
    cadence: "Tuesdays, 1pm",
    description:
      "Two hosts, one microphone, and a rule against talking over silence. A slow show for a fast week.",
  },
  {
    slug: "night-freight",
    name: "Night Freight",
    host: "Lomax",
    cadence: "Weeknights, into the small hours",
    description: "Long-haul music for anyone still awake. No requests, no chat, just the road.",
  },
  {
    slug: "wireless-kitchen",
    name: "Wireless Kitchen",
    host: "Bea Solomon",
    cadence: "Wed & Fri mornings",
    description: "Recipes read aloud over a slow jazz bed. Write them down or don't; we repeat the good ones.",
  },
  {
    slug: "valve-and-vinyl",
    name: "Valve & Vinyl",
    host: "Denny Marsh",
    cadence: "Wednesdays, 10pm",
    description: "A working tube amp, a crate of 45s, and forty years of opinions about both.",
  },
  {
    slug: "long-wave-confessions",
    name: "Long Wave Confessions",
    host: "Iris Kade",
    cadence: "Thursdays & Sundays",
    description: "Listener letters read on air, unedited. Bring tissues or don't; either way, bring the letters.",
  },
];

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
};

export const posts: Post[] = [
  {
    slug: "the-transmitter-almost-died-twice",
    title: "The transmitter almost died twice this month",
    date: "2026-09-14",
    excerpt:
      "A capacitor gave out during Night Freight and nobody noticed for eleven minutes. Here's what we replaced it with, and why we're keeping the old one on the shelf.",
  },
  {
    slug: "listener-mail-the-good-kind",
    title: "Listener mail: the good kind this time",
    date: "2026-09-08",
    excerpt:
      "Three letters, one cassette, and a hand-drawn map to a house that apparently still has our old frequency stuck on the dial.",
  },
  {
    slug: "why-we-still-run-the-milk-round",
    title: "Why we still run Milk Round at 6am",
    date: "2026-08-30",
    excerpt:
      "Nobody's numbers say a 6am slot makes sense in 2026. Aggie explains why the numbers aren't the point.",
  },
  {
    slug: "a-short-history-of-our-aerial",
    title: "A short history of our aerial",
    date: "2026-08-19",
    excerpt:
      "It was scaffolding pipe and a car battery in 1979. It is, somehow, still mostly scaffolding pipe.",
  },
];
