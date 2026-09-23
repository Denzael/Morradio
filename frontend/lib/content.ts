export const station = {
  name: "MOR Radio",
  freq: "Live Stream",
  tagline: "Welcome to MOR Radio",
  blurb:
    "Streaming live from the heart of Willenhall in the West Midlands, MOR Radio is more than just an online station. It’s a movement. A voice. A growing community of listeners from across the UK and beyond who are passionate about African music, culture, and conversation. Powered by CACMOR, we’re here to make online radio personal, powerful, and deeply engaging. Tune in, vibe with us, and become part of something real.",
  streamUrl: "https://streaming.radio.co/s7e4c28285/listen",
  logo: "/wp-content/uploads/2025/07/WhatsApp_Image_2025-07-31_at_19.10.05_9543ac7f-removebg-preview.png",
  favicon32: "/wp-content/uploads/2025/01/cropped-favicon-1-100x100.png",
  address: ["MOR Radio", "1 - 3 Market Place,", "Willenhall, WV13 2AA", "United Kingdom"],
  email: "sound@morradio.co.uk",
  phone: "+44 7565 541996",
  phoneHref: "tel:+447565541996",
};

export const menuItems = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/who-we-are-2", label: "Who We Are" },
  { href: "/what-we-do-2", label: "What We Do" },
  { href: "/meet-your-hosts", label: "Meet Your Hosts" },
  { href: "/our-schedule", label: "Our Schedule" },
  { href: "/donate", label: "Donate" },
  { href: "/contact-us", label: "Contact Us" },
  { href: "/shop", label: "Shop" },
];

export type Podcast = {
  slug: string;
  title: string;
  episode: string;
  categories: string[];
  image: string;
  audio: string;
};

export const podcasts: Podcast[] = [
  {
    slug: "journey-through-jazz",
    title: "Journey Through Jazz",
    episode: "S8 E01",
    categories: ["Entertainment", "Past Podcast"],
    image: "/wp-content/uploads/2024/06/Podcast-list-29.jpg",
    audio: "/wp-content/uploads/2024/04/Free-Ambient-Loop-1.mp3",
  },
  {
    slug: "designing-your-world",
    title: "Designing Your World",
    episode: "S8 E02",
    categories: ["Entertainment"],
    image: "/wp-content/uploads/2024/06/Podcast-list-30.jpg",
    audio: "/wp-content/uploads/2024/04/b-audio-everytings-nice-1.mp3",
  },
  {
    slug: "the-art-of-living",
    title: "The Art of Living",
    episode: "S8 E03",
    categories: ["Entertainment", "Past Podcast"],
    image: "/wp-content/uploads/2024/06/Podcast-list-31.jpg",
    audio: "/wp-content/uploads/2024/04/Fingers-In-The-Noise-Elixir-1.mp3",
  },
  {
    slug: "broadcast-buzz",
    title: "Broadcast Buzz",
    episode: "S8 E04",
    categories: ["Entertainment", "Past Podcast"],
    image: "/wp-content/uploads/2024/06/Podcast-list-32.jpg",
    audio: "/wp-content/uploads/2024/04/Josh-Woodward-Gravity-1.mp3",
  },
  {
    slug: "brushstrokes-beats",
    title: "Brushstrokes & Beats",
    episode: "S8 E05",
    categories: ["Entertainment", "Past Podcast"],
    image: "/wp-content/uploads/2024/06/Podcast-list-33.jpg",
    audio: "/wp-content/uploads/2024/04/b-audio-everytings-nice-1.mp3",
  },
  {
    slug: "cultural-kaleidoscope",
    title: "Cultural Kaleidoscope",
    episode: "S8 E06",
    categories: ["Entertainment", "Past Podcast"],
    image: "/wp-content/uploads/2024/06/Podcast-list-28.jpg",
    audio: "/wp-content/uploads/2024/04/Fingers-In-The-Noise-Elixir-1.mp3",
  },
  {
    slug: "crossroads-of-identity-how-culture-influences-our-lives",
    title: "Crossroads of Identity: How Culture Influences Our Lives",
    episode: "S4 E04",
    categories: ["Entertainment"],
    image: "/wp-content/uploads/2024/09/home-2-podcast-10.jpg",
    audio: "/wp-content/uploads/2024/04/Free-Ambient-Loop-1.mp3",
  },
  {
    slug: "from-folklore-to-futurism-the-evolution-of-cultural-expressions",
    title: "From Folklore to Futurism: The Evolution of Cultural Expressions",
    episode: "S4 E05",
    categories: ["Entertainment"],
    image: "/wp-content/uploads/2024/09/home-2-podcast-11.jpg",
    audio: "/wp-content/uploads/2024/04/Free-Ambient-Loop-1.mp3",
  },
  {
    slug: "cultural-footprints-the-impact-of-history-on-modern-society",
    title: "Cultural Footprints: The Impact of History on Modern Society",
    episode: "S4 E06",
    categories: ["Entertainment"],
    image: "/wp-content/uploads/2024/09/home-2-podcast-12.jpg",
    audio: "/wp-content/uploads/2024/04/Free-Ambient-Loop-1.mp3",
  },
];

export type Season = {
  slug: string;
  host: string;
  tagline: string;
  image: string;
  episodes?: { title: string; length: string; audio: string; slug: string }[];
};

export const seasons: Season[] = [
  {
    slug: "oloruniyi",
    host: "A.F. OLORUNNIYI",
    tagline: "WAKATI ISINI-NIYE",
    image:
      "/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-02-at-15.59.36_f34f97c1-648x650.jpg",
  },
  {
    slug: "gist",
    host: "Gist and Giggle",
    tagline: "Updates Related To Your Podcast's Focus",
    image: "/wp-content/uploads/2025/08/PHOTO-2025-08-07-22-34-16-1-650x650.jpg",
  },
  {
    slug: "isaac-acheampong",
    host: "Governor (Isaac Acheampong)",
    tagline: "A Time with the Local African Professionals (L.A.P)",
    image: "/wp-content/uploads/2025/08/IMG-20250801-WA0065-650x650.jpg",
  },
  {
    slug: "jessica-olayinka",
    host: "Miss Jessica Olayinka",
    tagline: "At his feet",
    image:
      "/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-01-at-21.31.03_931f5ced-e1754070039433-650x650.jpg",
  },
  {
    slug: "peter-onalaja",
    host: "Mr Peter Onalaja",
    tagline: "Between Us",
    image:
      "/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-01-at-11.46.21-PM-650x650.jpg",
    episodes: [
      {
        title: "Cultural Footprints: The Impact of History on Modern Society",
        length: "0:30",
        audio: "/wp-content/uploads/2024/04/Free-Ambient-Loop-1.mp3",
        slug: "cultural-footprints-the-impact-of-history-on-modern-society",
      },
      {
        title: "From Folklore to Futurism: The Evolution of Cultural Expressions",
        length: "0:30",
        audio: "/wp-content/uploads/2024/04/Free-Ambient-Loop-1.mp3",
        slug: "from-folklore-to-futurism-the-evolution-of-cultural-expressions",
      },
      {
        title: "Crossroads of Identity: How Culture Influences Our Lives",
        length: "0:30",
        audio: "/wp-content/uploads/2024/04/Free-Ambient-Loop-1.mp3",
        slug: "crossroads-of-identity-how-culture-influences-our-lives",
      },
    ],
  },
  {
    slug: "o-g",
    host: "Opeyemi Gbadebo (Joy)",
    tagline: "Heartlines",
    image:
      "/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-31-at-19.09.08_459836c9-650x650.jpg",
  },
];

export type Host = { name: string; page: string; image: string; seasonSlug?: string };

export const hosts: Host[] = [
  {
    name: "Opeyemi Gbadebo",
    page: "/opeyemi-gbadebo",
    image:
      "/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-31-at-19.09.08_459836c9-650x650.jpg",
    seasonSlug: "o-g",
  },
  {
    name: "L.A.P",
    page: "/l-a-p",
    image: "/wp-content/uploads/2025/08/IMG-20250801-WA0065-650x650.jpg",
    seasonSlug: "isaac-acheampong",
  },
  {
    name: "Miss Jessica Olayinka",
    page: "/miss-jessica-olayinka",
    image:
      "/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-01-at-21.31.03_931f5ced-e1754070039433-650x650.jpg",
    seasonSlug: "jessica-olayinka",
  },
  {
    name: "Mr Peter Onalaja",
    page: "/mr-peter-onalaja",
    image:
      "/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-01-at-11.46.21-PM-650x650.jpg",
    seasonSlug: "peter-onalaja",
  },
  {
    name: "WAKATI ISINI-NIYE",
    page: "/wakati-isini-niye",
    image: "/wp-content/uploads/2025/08/PHOTO-2025-08-07-22-34-16-650x650.jpg",
    seasonSlug: "oloruniyi",
  },
  {
    name: "Gist and Giggle with Skelebobo",
    page: "/gist-and-giggle",
    image: "/wp-content/uploads/2025/08/PHOTO-2025-08-08-10-17-11-650x650.jpg",
    seasonSlug: "gist",
  },
  {
    name: "The enterprise mindset and defeating limited belief.",
    page: "/meet-your-hosts",
    image: "/wp-content/uploads/2025/08/PHOTO-2025-08-07-19-48-43-650x650.jpg",
  },
  { name: "Mor Sport", page: "/meet-your-hosts", image: "/wp-content/uploads/2025/08/PHOTO-2025-08-07-22-34-16-1-650x650.jpg" },
];

export type ScheduleDay = { day: string; slots: { time: string; show: string; desc: string }[] };

export const weekdaySchedule: ScheduleDay[] = [
  {
    day: "Monday – Friday",
    slots: [
      {
        time: "5:00 AM - 7:00 AM",
        show: "Morning Inspiration",
        desc: "African gospel music, motivational quotes, and prayers. Featured segment: “Daily Proverbs” – African wisdom for the day.",
      },
      {
        time: "7:00 AM - 9:00 AM",
        show: "Good Morning Africa",
        desc: "News updates from Africa and the Diaspora. Local traffic and weather reports. Special interviews with African personalities and community leaders.",
      },
      {
        time: "9:00 AM - 11:00 AM",
        show: "AfroBeats Brunch",
        desc: "A mix of the latest Afrobeat hits, Amapiano, and Afropop. Audience call-ins to share song requests or dedications.",
      },
      {
        time: "11:00 AM - 1:00 PM",
        show: "Business & Development Hour",
        desc: "Discussions on entrepreneurship, investment opportunities in Africa, and Diaspora success stories. Weekly guest speakers: African entrepreneurs, business experts, and thought leaders.",
      },
      {
        time: "1:00 PM - 3:00 PM",
        show: "Lunch Hour Mix",
        desc: "High-energy DJ mixes featuring classic African hits and international tunes. Light-hearted conversations, jokes, and trivia competitions.",
      },
      {
        time: "3:00 PM - 5:00 PM",
        show: "Culture & Heritage Show",
        desc: "Focus on African traditions, languages, and cuisines. Interviews with historians, chefs, and cultural ambassadors. Weekly storytelling segment: “Tales from the Motherland.”",
      },
      {
        time: "5:00 PM - 7:00 PM",
        show: "Drive Time Vibes",
        desc: "Latest African and Diaspora news. Interactive games and giveaways for callers. Music countdown: Top 10 African hits of the week.",
      },
      {
        time: "7:00 PM - 9:00 PM",
        show: "African Politics & Current Affairs",
        desc: "Analysis of African and global political developments. Live discussions with political analysts and commentators.",
      },
      {
        time: "9:00 PM - 11:00 PM",
        show: "Love & Relationships Talk",
        desc: "Conversations on love, marriage, and family life in the Diaspora. Listener call-ins to share stories and seek advice.",
      },
      {
        time: "11:00 PM - 1:00 AM",
        show: "Late-Night Chill",
        desc: "Smooth African jazz, soul, and R&B. Spoken word poetry and reflective conversations.",
      },
      {
        time: "1:00 AM - 5:00 AM",
        show: "Midnight Safari",
        desc: "Traditional African music, lullabies, and relaxing sounds for night owls.",
      },
    ],
  },
  {
    day: "Saturday – Sunday",
    slots: [
      {
        time: "6:00 AM - 8:00 AM",
        show: "Weekend Inspiration",
        desc: "Extended gospel music and sermons by guest pastors.",
      },
      {
        time: "8:00 AM - 11:00 AM",
        show: "Youth Corner",
        desc: "Focus on African youth in the Diaspora: music, trends, and youth culture.",
      },
      {
        time: "11:00 AM - 2:00 PM",
        show: "African Kitchen Live",
        desc: "Cooking show with recipes from various African regions. Guest appearances by chefs and food critics.",
      },
      {
        time: "2:00 PM - 5:00 PM",
        show: "African Sports Roundup",
        desc: "Coverage of African and global sports events. Community sports updates and interviews with athletes.",
      },
      {
        time: "5:00 PM - 7:00 PM",
        show: "Diaspora Highlights",
        desc: "Focus on the achievements of Africans abroad. Discussions on cultural integration and challenges.",
      },
      {
        time: "7:00 PM - 9:00 PM",
        show: "Highlife & Classics",
        desc: "Highlife, Makossa, and other traditional African music genres. Audience call-ins to share memories associated with the songs. DJ mixes for the weekend vibe: Afrobeat, Amapiano, and Afro-house.",
      },
    ],
  },
];

export const marqueeBands = [
  { items: ["Live Time Podcast", "Voices. Vibes. Vision.", "Africa Speaks: The World Listens"], bg: "#FF9859", color: "#FFFFFF" },
  { items: ["Good Morning Africa", "AfroBeats Brunch", "Drive Time Vibes"], bg: "#FFFFFF", color: "#000000" },
];

export const outlineLinks = [
  { title: "Podcasts /", label: "Play Now", href: "/podcast-list" },
  { title: "Music /", label: "Enjoy", href: "/podcast-list-dark" },
  { title: "News /", label: "Listen Now", href: "/blog" },
  { title: "Schedule /", label: "Love All", href: "/our-schedule" },
];

/* Backwards-compatible aliases for legacy demo components */
export const schedule: { day: string; slots: { time: string; show: string; host: string }[] }[] =
  weekdaySchedule.map((d) => ({
    day: d.day,
    slots: d.slots.map((s) => ({ ...s, host: "MOR Radio" })),
  }));

export type Show = { slug: string; name: string; host: string; cadence: string; description: string };

export const shows: Show[] = podcasts.slice(0, 6).map((p) => ({
  slug: p.slug,
  name: p.title,
  host: "MOR Radio",
  cadence: p.episode,
  description: p.categories.join(" · "),
}));

export type Post = { slug: string; title: string; date: string; excerpt: string };

export const posts: Post[] = [
  {
    slug: "welcome-to-mor-radio",
    title: "Welcome to MOR Radio",
    date: "2025-08-01",
    excerpt:
      "Streaming live from the heart of Willenhall in the West Midlands — a movement, a voice, a growing community passionate about African music, culture, and conversation.",
  },
  {
    slug: "live-time-podcast",
    title: "Live Time Podcast: 18.00–22.45",
    date: "2025-08-02",
    excerpt:
      "Broadcast bold ideas and powerful conversations. Live Time Podcast connects voices across Africa and beyond.",
  },
  {
    slug: "africa-speaks",
    title: "Africa Speaks: The World Listens",
    date: "2025-08-03",
    excerpt:
      "Empowering African creators to share real stories in real time. Connect, engage, and broadcast without borders.",
  },
];
