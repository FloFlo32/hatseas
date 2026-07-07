import Image from "next/image";
import { Clock, MapPinned, Flag, Check } from "lucide-react";
import { Reveal } from "@/components/magic/reveal";
import type { tours } from "@/lib/site-data";

export function TourSection({ tour, reverse }: { tour: (typeof tours)[number]; reverse?: boolean }) {
  return (
    <section
      id={tour.slug}
      className="container-px mx-auto max-w-6xl border-t border-border/70 py-16 sm:py-20"
    >
      <div className={`grid gap-10 lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <Reveal>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg shadow-primary/10">
            <Image
              src={tour.image}
              alt={tour.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={78}
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="flex h-full flex-col">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h2 className="font-display text-3xl font-bold sm:text-4xl">{tour.name}</h2>
              <span className="shrink-0 rounded-full bg-warm px-4 py-1.5 text-sm font-bold text-warm-foreground">
                {tour.price}
              </span>
            </div>
            <p className="mt-4 text-pretty text-muted-foreground">{tour.intro}</p>

            <div className="mt-6 flex flex-wrap gap-4">
              {tour.details.map((d) => (
                <div key={d.label} className="flex items-center gap-2 text-sm">
                  <DetailIcon label={d.label} />
                  <span className="text-muted-foreground">{d.label}:</span>
                  <span className="font-medium">{d.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-card p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Tour Inclusions
              </h3>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {tour.inclusions.map((inc) => (
                  <li key={inc} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.12} className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {tour.stops.map((stop) => (
          <div key={stop.title} className="rounded-2xl border border-border bg-card p-5">
            <h4 className="font-semibold">{stop.title}</h4>
            <p className="mt-2 text-sm text-pretty text-muted-foreground">{stop.body}</p>
          </div>
        ))}
      </Reveal>

      {"whatToBring" in tour && tour.whatToBring && (
        <Reveal delay={0.16} className="mt-6 rounded-2xl border border-border bg-card p-6">
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            What to Bring
          </h3>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {tour.whatToBring.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      )}

      <p className="mt-6 text-sm text-pretty text-muted-foreground">{tour.note}</p>
    </section>
  );
}

function DetailIcon({ label }: { label: string }) {
  if (/time/i.test(label)) return <Clock className="size-4 text-primary" />;
  if (/stop/i.test(label)) return <Flag className="size-4 text-primary" />;
  return <MapPinned className="size-4 text-primary" />;
}
