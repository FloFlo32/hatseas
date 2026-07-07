import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, MapPin } from "lucide-react";
import { brand } from "@/brand.config";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/magic/reveal";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-px mx-auto grid max-w-6xl items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:py-28">
        <div>
          <Reveal>
            <Badge variant="accent">
              <MapPin className="size-3.5" /> Nassau, Bahamas
            </Badge>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-6 max-w-xl text-balance text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
              Island Excursions in the <span className="text-primary">Bahamas</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-lg text-lg text-pretty text-muted-foreground">
              Explore vibrant beauty and culture through Bahamas travel, where you can
              enjoy island adventures at unbeatable prices with our exceptional tours
              and rentals.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg">
                <Link href="/tours">
                  View Tours <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="tel:5642242627">
                  <Phone className="size-4" /> {brand.contact.phone}
                </a>
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-primary/15 sm:aspect-[4/4.2]">
            <Image
              src="/ingested/hatseas/home-hero.jpg"
              alt="A local Bahamian guide warmly welcomes a visitor with a handshake on the Nassau waterfront"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={80}
              className="object-cover"
            />
            <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-2xl bg-card/95 p-4 shadow-lg backdrop-blur">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-warm text-warm-foreground">
                <MapPin className="size-5" />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-semibold">Real Bahamian hospitality</p>
                <p className="text-xs text-muted-foreground">Curated island adventures, every day</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
