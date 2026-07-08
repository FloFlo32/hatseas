import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Sailboat, Waves, PalmtreeIcon, PartyPopper, UtensilsCrossed } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { CTA } from "@/components/sections/cta";
import { Button } from "@/components/ui/button";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { vipPackage } from "@/lib/site-data";

export const metadata: Metadata = {
  title: { absolute: "VIP Package | Travel Services by Hatseas" },
  description: "Snorkeling & Swimming with Pigs. A 4-hour catamaran VIP adventure to Rose Island.",
};

const icons = [Sailboat, Waves, PalmtreeIcon, PartyPopper];

export default function VipPackagePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="VIP Package"
          title={vipPackage.title}
          subtitle={vipPackage.intro}
          image="/ingested/hatseas/catamaran-tour.jpg"
          alt="Guests relaxing aboard a Hatseas catamaran on turquoise Bahamian waters"
        />

        <section className="container-px mx-auto max-w-6xl py-20 sm:py-24">
          <RevealGroup className="grid gap-6 sm:grid-cols-2">
            {vipPackage.sections.map((s, i) => {
              const Icon = icons[i % icons.length];
              return (
                <RevealItem
                  key={s.title}
                  className="rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
                >
                  <span className="grid size-11 place-items-center rounded-full bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-pretty text-muted-foreground">{s.body}</p>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </section>

        <section className="border-y border-border/70 bg-card py-20 sm:py-24">
          <div className="container-px mx-auto max-w-5xl">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <Reveal>
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                  <Image
                    src="/ingested/hatseas/pig-island-exuma-bahamas.jpg"
                    alt="Friends swimming and feeding the famous Exuma pigs on a white sand beach in the Bahamas"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={78}
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="font-display text-3xl font-bold sm:text-4xl">
                  Gourmet Delights, Choose Your Feast
                </h2>
                <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-warm px-4 py-1.5 text-sm font-bold text-warm-foreground">
                  <UtensilsCrossed className="size-4" /> {vipPackage.price}
                </span>
                <p className="mt-4 text-pretty text-muted-foreground">{vipPackage.menuIntro}</p>
                <ul className="mt-5 grid grid-cols-2 gap-2">
                  {vipPackage.menu.map((item, i) => (
                    <li
                      key={item}
                      className={`rounded-full border border-border bg-background px-3 py-1.5 text-center text-sm ${
                        i === vipPackage.menu.length - 1 ? "col-span-2" : ""
                      }`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-muted-foreground">{vipPackage.menuNote}</p>
                <Button asChild size="lg" className="mt-6">
                  <Link href="/contact">Book VIP Package</Link>
                </Button>
              </Reveal>
            </div>
          </div>
        </section>

        <CTA
          title="Ready to swim with the famous Exuma pigs?"
          body="Reserve your VIP catamaran adventure to Rose Island today."
          primaryLabel="Book VIP Package"
          primaryHref="/contact"
        />
      </main>
      <Footer />
    </>
  );
}
