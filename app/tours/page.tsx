import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { TourSection } from "@/components/sections/tour-section";
import { CTA } from "@/components/sections/cta";
import { tours } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Tours",
  description: "Nassau ATV and Buggy Tour Adventure Awaits! Explore our full lineup of Bahamas island tours.",
};

export default function ToursPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="Tours"
          title="Nassau ATV and Buggy Tour Adventure Awaits!"
          subtitle="We offer the finest tours in the Bahamas. Want a custom tour? Just ask."
          image="/ingested/hatseas/fort-fincastle-aerial.jpg"
          alt="Aerial view of the historic Fort Fincastle and Clifton Heritage Park in Nassau, Bahamas"
        />

        {tours.map((tour, i) => (
          <TourSection key={tour.slug} tour={tour} reverse={i % 2 === 1} />
        ))}

        <CTA
          title="Have a different adventure in mind?"
          body="Want a custom tour? Just ask, we're happy to build the perfect day around you."
          primaryLabel="Contact Us"
          primaryHref="/contact"
        />
      </main>
      <Footer />
    </>
  );
}
