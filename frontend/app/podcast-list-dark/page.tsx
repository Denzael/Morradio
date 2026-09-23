import { PageHero, homeCrumb } from "@/components/PageHero";
import { PodcastGrid } from "@/components/PodcastGrid";

export const metadata = { title: "Podcast List Dark – MOR Radio" };

export default function PodcastListDarkPage() {
  return (
    <div className="mor-page mor-section">
      <PageHero
        title="Podcast List"
        crumbs={[homeCrumb, { label: "Podcast List Dark" }]}
        intro="Music / Enjoy — listen to the best podcast online."
      />
      <PodcastGrid dark />
    </div>
  );
}
