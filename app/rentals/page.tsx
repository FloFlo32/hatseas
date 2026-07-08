import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { RentalCard } from "@/components/sections/rental-card";
import { CTA } from "@/components/sections/cta";
import { Button } from "@/components/ui/button";
import { RevealGroup, RevealItem } from "@/components/magic/reveal";
import { rentalCategories, rentalNote } from "@/lib/site-data";

export const metadata: Metadata = {
  title: { absolute: "Vehicle Rentals in Nassau Bahamas - Book Now!" },
  description: "Vehicle Rentals in Nassau, Bahamas. Jeep Wrangler, ATV, Scooter, Buggy, E-Bike and Golf Cart rentals.",
};

export default function RentalsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="Rentals"
          title="Vehicle Rentals in Nassau, Bahamas"
          subtitle="From Jeep Wranglers to golf carts, pick the ride that fits your island day."
          image="/ingested/hatseas/rental-jeep-wrangler.jpg"
          alt="Silver Jeep Wrangler available for rental in Nassau, Bahamas"
        />

        <section className="container-px mx-auto max-w-6xl py-20 sm:py-24">
          <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rentalCategories.map((rental) => (
              <RevealItem key={rental.slug}>
                <RentalCard rental={rental} />
              </RevealItem>
            ))}
          </RevealGroup>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-border bg-card p-6 text-center sm:flex-row sm:text-left">
            <p className="text-sm text-pretty text-muted-foreground">{rentalNote}</p>
            <Button asChild className="shrink-0">
              <Link href="/contact">Book your ride today</Link>
            </Button>
          </div>
        </section>

        <CTA
          title="Not sure which ride is right for you?"
          body="Tell us where you're headed and how many are in your group, we'll match you with the perfect vehicle."
          primaryLabel="Contact Us"
          primaryHref="/contact"
        />
      </main>
      <Footer />
    </>
  );
}
