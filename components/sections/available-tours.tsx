import { AutoSlider } from "@/components/magic/auto-slider";
import { ImageCard } from "@/components/magic/image-card";
import { Reveal } from "@/components/magic/reveal";
import { Eyebrow } from "@/components/magic/eyebrow";
import { homeTours } from "@/lib/site-data";

export function AvailableTours() {
  return (
    <section className="container-px mx-auto max-w-6xl py-20 sm:py-24">
      <Reveal>
        <Eyebrow>Available Tours</Eyebrow>
        <h2 className="mt-3 max-w-xl text-balance text-3xl font-bold sm:text-4xl lg:text-5xl">
          We offer the finest tours in the Bahamas
        </h2>
        <p className="mt-3 max-w-lg text-muted-foreground">
          Want a custom tour? Just ask.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-10">
        <AutoSlider itemClassName="w-[85%] sm:w-[55%] lg:w-[31%]">
          {homeTours.map((tour) => (
            <ImageCard
              key={tour.name}
              href={tour.href}
              src={tour.image}
              alt={tour.name}
              eyebrow={tour.price}
              title={tour.name}
              className="h-full"
            />
          ))}
        </AutoSlider>
      </Reveal>
    </section>
  );
}
