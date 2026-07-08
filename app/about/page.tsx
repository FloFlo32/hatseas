import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, Gem, Leaf, HeartHandshake, Sparkles } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { CTA } from "@/components/sections/cta";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { Eyebrow } from "@/components/magic/eyebrow";
import { aboutContent } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About",
  description:
    "HatSeas was born from a deep love for the Bahamas. Learn our story, vision, mission and values.",
};

const valueIcons = [Gem, ShieldCheck, Leaf, HeartHandshake, Sparkles];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="About Hatseas"
          title="Our Story"
          subtitle={aboutContent.story[0]}
          image="/ingested/hatseas/queens-staircase-nassau-bahamas.jpg"
          alt="The historic Queen's Staircase carved into limestone rock in Nassau, Bahamas"
        />

        <section className="container-px mx-auto max-w-4xl py-20 sm:py-24">
          <Reveal>
            <p className="text-lg text-pretty leading-relaxed text-muted-foreground">
              {aboutContent.story[1]}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <Reveal className="rounded-2xl border border-border bg-card p-8">
              <h2 className="font-display text-xl font-bold">Our Vision</h2>
              <p className="mt-3 text-pretty text-muted-foreground">{aboutContent.vision}</p>
            </Reveal>
            <Reveal delay={0.08} className="rounded-2xl border border-border bg-card p-8">
              <h2 className="font-display text-xl font-bold">Our Mission</h2>
              <p className="mt-3 text-pretty text-muted-foreground">{aboutContent.mission}</p>
            </Reveal>
          </div>
        </section>

        <section className="border-y border-border/70 bg-card py-20 sm:py-24">
          <div className="container-px mx-auto max-w-6xl">
            <Reveal className="text-center">
              <Eyebrow>What we stand for</Eyebrow>
              <h2 className="mt-3 text-balance text-3xl font-bold sm:text-4xl">
                Our Values
              </h2>
            </Reveal>

            <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {aboutContent.values.map((v, i) => {
                const Icon = valueIcons[i % valueIcons.length];
                return (
                  <RevealItem
                    key={v.name}
                    className="rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
                  >
                    <span className="grid size-11 place-items-center rounded-full bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mt-4 font-semibold">{v.name}</h3>
                    <p className="mt-2 text-sm text-pretty text-muted-foreground">{v.body}</p>
                  </RevealItem>
                );
              })}
            </RevealGroup>
          </div>
        </section>

        <section className="container-px mx-auto max-w-6xl py-20 sm:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <Image
                  src="/ingested/hatseas/pig-island-exuma-bahamas.jpg"
                  alt="Friends smiling and swimming with a pig on a white sand beach in the Exuma cays, Bahamas"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={78}
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <Eyebrow>The Hatseas Promise</Eyebrow>
              <p className="mt-4 text-2xl text-balance font-semibold leading-snug">
                {aboutContent.promise}
              </p>
            </Reveal>
          </div>
        </section>

        <CTA
          title="Ready to live the Bahamas, not just visit it?"
          body="Choose from our exciting tours and rentals to enhance your journey."
          primaryLabel="View Tours"
          primaryHref="/tours"
        />
      </main>
      <Footer />
    </>
  );
}
