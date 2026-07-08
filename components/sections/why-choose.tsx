import Image from "next/image";
import { Reveal } from "@/components/magic/reveal";
import { Eyebrow } from "@/components/magic/eyebrow";
import { whyChooseBahamas } from "@/lib/site-data";

/**
 * Renders the "Why Choose Bahamas" sections in the exact chronology from the
 * source site: alternating photo/text rows where a section has an image,
 * full-width text panels where it doesn't. Order is never regrouped.
 */
export function WhyChoose() {
  return (
    <section className="border-y border-border/70 bg-card py-20 sm:py-24">
      <div className="container-px mx-auto max-w-6xl">
        <Reveal>
          <Eyebrow>{whyChooseBahamas.title}</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-balance text-3xl font-bold sm:text-4xl lg:text-5xl">
            Nassau rewards first-time visitors and repeat travelers alike
          </h2>
          <p className="mt-4 max-w-2xl text-pretty text-muted-foreground">
            {whyChooseBahamas.intro}
          </p>
        </Reveal>

        <div className="mt-12 flex flex-col gap-6">
          {whyChooseBahamas.sections.map((s, i) =>
            s.image ? (
              <Reveal
                key={s.title}
                className={`grid items-center gap-8 rounded-3xl border border-border bg-background p-6 sm:p-8 lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={75}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold sm:text-2xl">{s.title}</h3>
                  <p className="mt-3 text-pretty text-muted-foreground">{s.body}</p>
                </div>
              </Reveal>
            ) : (
              <Reveal key={s.title} className="rounded-3xl border border-border bg-background p-6 sm:p-8">
                <h3 className="font-display text-xl font-bold sm:text-2xl">{s.title}</h3>
                <p className="mt-3 max-w-3xl text-pretty text-muted-foreground">{s.body}</p>
              </Reveal>
            )
          )}
        </div>
      </div>
    </section>
  );
}
