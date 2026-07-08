import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { brand } from "@/brand.config";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/magic/reveal";

/**
 * The homepage's closing section, mirrored from the source in order:
 * heading -> featured image -> subheading -> paragraph -> video.
 */
export function DiscoverSection() {
  return (
    <section className="container-px mx-auto max-w-5xl py-20 sm:py-24">
      <Reveal className="text-center">
        <h2 className="mx-auto max-w-3xl text-balance text-3xl font-bold sm:text-4xl lg:text-5xl">
          Discover Your Dream Island Adventures with Us
        </h2>
      </Reveal>

      <Reveal delay={0.08} className="mt-10">
        <div className="relative aspect-[16/9] overflow-hidden rounded-3xl shadow-xl shadow-primary/10">
          <Image
            src="/ingested/hatseas/fort-charlotte-aerial.jpg"
            alt="Aerial view of a coastal fortress and harbor with lush greenery and blue ocean"
            fill
            sizes="(max-width: 1024px) 100vw, 900px"
            quality={78}
            className="object-cover"
          />
        </div>
      </Reveal>

      <Reveal delay={0.14} className="mx-auto mt-10 max-w-2xl text-center">
        <h3 className="font-display text-2xl font-bold">Unforgettable Island Excursions</h3>
        <p className="mt-3 text-pretty text-muted-foreground">
          At Hatseas, we specialize in unforgettable Bahamas travel experiences that cater
          to all types of travelers. Our curated island adventures allow you to explore
          the vibrant beauty and culture of the islands, ensuring an experience you
          won&apos;t forget. Choose from our exciting tours and rentals to enhance your
          journey.
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/tours">
              Explore Tours <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="tel:5642242627">
              <Phone className="size-4" /> {brand.contact.phone}
            </a>
          </Button>
        </div>
      </Reveal>

      <Reveal delay={0.2} className="mx-auto mt-10 max-w-3xl">
        <div className="aspect-video overflow-hidden rounded-2xl border border-border shadow-lg">
          <iframe
            className="size-full"
            src="https://www.youtube.com/embed/zsc84OuM_hA?rel=0"
            title={`${brand.name} video`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </Reveal>
    </section>
  );
}
