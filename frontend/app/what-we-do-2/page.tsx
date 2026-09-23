import { PageHero, homeCrumb } from "@/components/PageHero";

export const metadata = { title: "What We Do – MOR Radio" };

const blocks = [
  {
    title: "Voices. Vibes. Vision.",
    text: "MOR Radio celebrates African heritage, highlights the stories of the community, and provides a space for meaningful engagement. We bring: - Daily music shows featuring Afrobeat, gospel, jazz, and classics - Topical discussions on love, identity, and personal development - Business, culture, and youth-focused content - A safe platform for real stories and relatable conversations.",
  },
  {
    title: "Our Services",
    text: "At MOR Radio, we are more than just a radio station; we are a growing movement committed to inspiring, informing, and transforming lives through positive and purpose-driven content. We offer a variety of services tailored to meet the needs of our audience, community, and aspiring broadcasters. Whether you’re looking to host your show, promote your brand, or simply enjoy wholesome media, MOR Radio is your go-to platform.",
  },
  {
    title: "Podcast",
    text: "Live Time Podcast connects voices across Africa and beyond — broadcast bold ideas and powerful conversations, 18.00–22.45.",
  },
  {
    title: "Members",
    text: "Meet your hosts and become part of something real — tune in, vibe with us, and join our growing community.",
  },
  {
    title: "Donate",
    text: "Support the sound of change. MOR Radio, Voices. Vibes. Vision.",
  },
  {
    title: "Inspiration",
    text: "Daily music shows featuring Afrobeat, gospel, jazz, and classics, plus topical discussions on love, identity, and personal development.",
  },
];

export default function WhatWeDoPage() {
  return (
    <div className="mor-page mor-section">
      <PageHero
        title="What We Do"
        crumbs={[homeCrumb, { label: "What We Do" }]}
        intro="Voices. Vibes. Vision. — powered by MOR."
      />
      <div className="mor-grid-3" style={{ marginTop: "2.5rem" }}>
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
