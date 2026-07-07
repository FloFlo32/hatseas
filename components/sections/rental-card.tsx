import Image from "next/image";
import { Clock } from "lucide-react";
import type { rentalCategories } from "@/lib/site-data";

export function RentalCard({ rental }: { rental: (typeof rentalCategories)[number] }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
      <div className="relative aspect-[4/3] bg-muted">
        <Image
          src={rental.image}
          alt={`${rental.name} rental in Nassau, Bahamas`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          quality={75}
          className="object-contain p-6"
        />
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
