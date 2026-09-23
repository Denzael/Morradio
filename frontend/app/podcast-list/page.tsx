import { PageHero, homeCrumb } from "@/components/PageHero";
import { PodcastGrid } from "@/components/PodcastGrid";

export const metadata = { title: "Podcast List – MOR Radio" };

export default function PodcastListPage() {
  return (
    <div className="mor-page mor-section">
      <PageHero
        title="Podcast List"
        crumbs={[homeCrumb, { label: "Podcast List" }]}
        intro="Listen to the best podcast online."
      />
      <PodcastGrid />
    </div>
  );
}
