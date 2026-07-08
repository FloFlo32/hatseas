import Image from "next/image";
import { Reveal } from "@/components/magic/reveal";
import { Eyebrow } from "@/components/magic/eyebrow";
import { GridPattern } from "@/components/magic/grid-pattern";

/**
 * Shared hero for every inner page: a real photo, a short eyebrow, a big
 * display headline and a one-line subtitle. Text sits below the image on a
 * solid surface, not laid over it, so it stays crisp and readable.
 */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  alt,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
  alt: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border/70 bg-card">
      <GridPattern className="opacity-60" />
      <div className="container-px mx-auto max-w-6xl py-16 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="mt-4 text-balance text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-5 max-w-xl text-lg text-pretty text-muted-foreground">
                {subtitle}
              </p>
            )}
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl shadow-primary/10">
              <Image
                src={image}
                alt={alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={78}
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
