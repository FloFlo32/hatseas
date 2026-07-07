"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { faqs } from "@/lib/site-data";

export function FaqAccordion({ items }: { items: readonly (typeof faqs)[number][] }) {
  const [open, setOpen] = React.useState<number | null>(0);

  return (
    <div className="divide-y divide-border rounded-2xl border border-border bg-card">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
            >
              <span className="font-medium">{item.q}</span>
              <ChevronDown
                className={cn(
                  "size-4 shrink-0 text-muted-foreground transition-transform duration-200",
                  isOpen && "rotate-180"
                )}
              />
            </button>
            <div
              className={cn(
                "overflow-hidden transition-all duration-300",
                isOpen ? "max-h-[40rem] pb-5" : "max-h-0"
              )}
            >
              <p className="px-6 text-pretty text-muted-foreground">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
