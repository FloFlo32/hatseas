import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { brand } from "@/brand.config";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { TourSection } from "@/components/sections/tour-section";
import { CTA } from "@/components/sections/cta";
import { tours } from "@/lib/site-data";

export const metadata: Metadata = {
  title: { absolute: "Nassau ATV and Buggy Tour Adventure Awaits!" },
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
          image="/ingested/hatseas/fort-fincastle-aerial.jpg"
          alt="Aerial view of the historic Fort Fincastle and Clifton Heritage Park in Nassau, Bahamas"
        />

        <div className="border-b border-border/70 bg-primary py-3 text-center text-sm font-medium text-primary-foreground">
          Ready to Book or have Questions? Call Us 24/7.{" "}
          <a href="tel:5642242627" className="inline-flex items-center gap-1 font-bold underline-offset-4 hover:underline cursor-pointer">
            <Phone className="size-3.5" /> {brand.contact.phone}
          </a>
        </div>

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
