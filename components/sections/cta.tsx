import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { brand } from "@/brand.config";
import { Button } from "@/components/ui/button";
import { GridPattern } from "@/components/magic/grid-pattern";
import { Reveal } from "@/components/magic/reveal";

/** Reusable closing CTA banner used across every page. */
export function CTA({
  title,
  body,
  primaryLabel = "Explore Tours",
  primaryHref = "/tours",
}: {
  title: string;
  body: string;
  primaryLabel?: string;
  primaryHref?: string;
}) {
  return (
    <section className="container-px mx-auto max-w-6xl py-20 sm:py-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center text-primary-foreground sm:px-12 sm:py-20">
          <GridPattern className="opacity-10" />
          <h2 className="relative mx-auto max-w-2xl text-balance text-3xl font-bold sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="relative mx-auto mt-4 max-w-lg text-primary-foreground/85">
            {body}
          </p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" variant="secondary" className="bg-warm text-warm-foreground hover:bg-warm/90">
              <Link href={primaryHref}>
                {primaryLabel} <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            >
              <a href="tel:5642242627">
                <Phone className="size-4" /> {brand.contact.phone}
              </a>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
