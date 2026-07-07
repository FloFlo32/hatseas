import Image from "next/image";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { whyChooseBahamas } from "@/lib/site-data";

export function WhyChoose() {
  const [withImage, textOnly] = split(whyChooseBahamas.sections);

  return (
    <section className="border-y border-border/70 bg-card py-20 sm:py-24">
      <div className="container-px mx-auto max-w-6xl">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {whyChooseBahamas.title}
          </span>
          <h2 className="mt-3 max-w-2xl text-balance text-3xl font-bold sm:text-4xl lg:text-5xl">
            Nassau rewards first-time visitors and repeat travelers alike
          </h2>
          <p className="mt-4 max-w-2xl text-pretty text-muted-foreground">
            {whyChooseBahamas.intro}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {withImage.map((s) => (
            <Reveal key={s.title} className="flex flex-col overflow-hidden rounded-2xl border border-border bg-background">
              <div className="relative aspect-[16/10]">
                <Image
                  src={s.image!}
                  alt={s.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  quality={75}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-6">
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="text-sm text-pretty text-muted-foreground">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <RevealGroup className="mt-6 grid gap-6 sm:grid-cols-3">
          {textOnly.map((s) => (
            <RevealItem
              key={s.title}
              className="rounded-2xl border border-border bg-background p-6"
            >
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-pretty text-muted-foreground">{s.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

function split<T extends { image?: string }>(items: readonly T[]) {
  const withImage: T[] = [];
  const textOnly: T[] = [];
  for (const item of items) (item.image ? withImage : textOnly).push(item);
  return [withImage, textOnly] as const;
}
