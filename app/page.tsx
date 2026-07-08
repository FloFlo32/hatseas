import { Navbar } from "@/components/sections/navbar";
import { HomeHero } from "@/components/sections/home-hero";
import { AvailableTours } from "@/components/sections/available-tours";
import { WhyChoose } from "@/components/sections/why-choose";
import { Subscribe } from "@/components/sections/subscribe";
import { DiscoverSection } from "@/components/sections/discover-section";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HomeHero />
        <AvailableTours />
        <WhyChoose />
        <Subscribe />
        <DiscoverSection />
      </main>
      <Footer />
    </>
  );
}
