import { Navbar } from "@/components/sections/navbar";
import { HomeHero } from "@/components/sections/home-hero";
import { AvailableTours } from "@/components/sections/available-tours";
import { WhyChoose } from "@/components/sections/why-choose";
import { Subscribe } from "@/components/sections/subscribe";
import { CTA } from "@/components/sections/cta";
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
        <CTA
          title="Discover Your Dream Island Adventures with Us"
          body="At Hatseas, we specialize in unforgettable Bahamas travel experiences that cater to all types of travelers. Our curated island adventures allow you to explore the vibrant beauty and culture of the islands, ensuring an experience you won't forget. Choose from our exciting tours and rentals to enhance your journey."
          primaryLabel="Explore Tours"
          primaryHref="/tours"
        />
      </main>
      <Footer />
    </>
  );
}
