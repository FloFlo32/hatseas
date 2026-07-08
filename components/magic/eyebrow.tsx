import { cn } from "@/lib/utils";

/**
 * The site's repeating signature motif: a small gradient dot beside a
 * tracked uppercase label. Used above every section heading so the page
 * reads as authored by one hand.
 */
export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary", className)}>
      <span className="size-1.5 shrink-0 rounded-full bg-gradient-to-br from-primary to-warm" />
      {children}
    </span>
  );
}
