import { PageHero, homeCrumb } from "@/components/PageHero";

export const metadata = { title: "Who We Are – MOR Radio" };

const blocks = [
  {
    title: "More Than a Station",
    text: "We Are Your Daily Companion. We believe that radio is still one of the most intimate ways to connect with people. MOR Radio serves as a platform for entertainment, enlightenment, and empowerment.",
  },
  {
    title: "Our Story",
    text: "Our story began with a simple idea — to give African voices a global stage. From passionate podcasters to bold live streamers, we built a home for real stories. Today, we empower creators to connect, inspire, and lead in real time.",
  },
  {
    title: "Services",
    text: "We provide powerful tools for podcasting, live streaming, and content distribution. From recording and hosting to promotion and monetization — we’ve got you covered. Whether you're a beginner or a pro, we help you share your voice with the world.",
  },
  {
    title: "Podcast lists",
    text: "At MOR Radio, we go beyond music; we tell stories, amplify voices, and stir up conversations that inspire. Our growing podcast catalogue brings you thought-provoking, soul-lifting, and culture-rich content from a variety of hosts and perspectives. Whether you're tuning in to deepen your faith, learn something new, or just enjoy a good talk, we’ve got something for you. Each podcast is carefully curated to reflect the heartbeat of our community, our faith, and our culture.",
  },
];

export default function WhoWeArePage() {
  return (
    <div className="mor-page mor-section">
      <PageHero
        title="Who We Are"
        crumbs={[homeCrumb, { label: "Who We Are" }]}
        intro="Streaming live from the heart of Willenhall in the West Midlands — a movement, a voice, a growing community."
      />
      <div className="mor-grid-2" style={{ marginTop: "2.5rem" }}>
        {blocks.map((block) => (
          <div key={block.title} className="mor-card mor-card-body">
            <h3 className="mor-card-title">{block.title}</h3>
            <p className="mor-card-text">{block.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
