import Image from "next/image";
import { Clock } from "lucide-react";
import type { rentalCategories } from "@/lib/site-data";

export function RentalCard({ rental }: { rental: (typeof rentalCategories)[number] }) {
  const lowest = rental.pricing
    .map((p) => Number(p.price.replace(/[^0-9.]/g, "")))
    .reduce((min, n) => Math.min(min, n), Infinity);

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
      <div
        className="relative aspect-[4/3]"
        style={{
          background:
            "radial-gradient(120% 120% at 50% 20%, color-mix(in oklch, var(--color-primary) 10%, var(--color-background)) 0%, var(--color-muted) 100%)",
        }}
      >
        <Image
          src={rental.image}
          alt={`${rental.name} rental in Nassau, Bahamas`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          quality={75}
          className="object-contain p-6"
        />
        <span className="absolute right-4 top-4 rounded-full bg-warm px-3 py-1 text-xs font-bold text-warm-foreground shadow-sm">
          From ${lowest}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-display text-xl font-bold">{rental.name}</h3>
        <p className="text-sm text-pretty text-muted-foreground">{rental.blurb}</p>
        <div className="mt-2 flex-1 space-y-1.5 border-t border-border pt-4">
          {rental.pricing.map((p) => (
            <div key={p.duration} className="flex items-center justify-between text-sm">
              <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                <Clock className="size-3.5" /> {p.duration}
              </span>
              <span className="font-semibold">{p.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
