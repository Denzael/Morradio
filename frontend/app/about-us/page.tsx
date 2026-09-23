import { PageHero, homeCrumb } from "@/components/PageHero";
import { station } from "@/lib/content";

export const metadata = { title: "About Us – MOR Radio" };

const blocks = [
  {
    title: "Powered by CACMOR",
    text: "MOR Radio is a vision birthed from CACMOR, a Christian charity based in the West Midlands. With a strong commitment to uplifting the Willenhall community and the broader Midlands region, CACMOR promotes youth empowerment, cultural expression, and meaningful dialogue.",
  },
  {
    title: "Working and Professional Skills",
    text: "The radio platform is one of our ways of amplifying unheard voices, inspiring creativity, and building bridges across generations through music, stories, and everyday experiences.",
  },
  {
    title: "Live time podcast",
    text: "Broadcast bold ideas and powerful conversations. Live Time Podcast connects voices across Africa and beyond.",
  },
  {
    title: "Africa Speaks: The World Listens.",
    text: "Empowering African creators to share real stories in real time. Connect, engage, and broadcast without borders.",
  },
];

export default function AboutUsPage() {
  return (
    <div className="mor-page mor-section">
      <PageHero
        title="About MOR Radio"
        crumbs={[homeCrumb, { label: "About Us" }]}
        intro={station.blurb}
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
