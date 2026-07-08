import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, MapPin } from "lucide-react";
import { brand } from "@/brand.config";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/magic/reveal";
import { GridPattern } from "@/components/magic/grid-pattern";

const facts = [
  { value: "6", label: "signature island tours" },
  { value: "6", label: "vehicle types to rent" },
  { value: "50", label: "guests welcomed per tour" },
];

export function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      <GridPattern className="opacity-70" />
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

          <Reveal delay={0.24}>
            <dl className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-border pt-6">
              {facts.map((f) => (
                <div key={f.label}>
                  <dt className="sr-only">{f.label}</dt>
                  <dd className="font-display text-3xl font-bold text-primary">{f.value}</dd>
                  <p className="mt-1 text-xs text-muted-foreground">{f.label}</p>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-primary/15 sm:aspect-[4/4.2]">
            <Image
              src="/ingested/hatseas/parliament-square-nassau-bahamas.jpg"
              alt="Colorful colonial buildings decorated for Bahamian Independence Day under a bright sky"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={80}
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
