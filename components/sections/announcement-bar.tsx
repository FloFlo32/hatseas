import { Phone, MapPin } from "lucide-react";
import { brand } from "@/brand.config";

/** Slim utility strip: location + phone. Neutral chrome, not source copy. */
export function AnnouncementBar() {
  return (
    <div className="w-full bg-foreground text-background">
      <div className="container-px mx-auto flex max-w-6xl items-center justify-center gap-5 py-2 text-center text-xs font-medium sm:text-sm">
        <span className="hidden items-center gap-1.5 sm:inline-flex">
          <MapPin className="size-3.5 text-warm" />
          Nassau, Bahamas
        </span>
        <a
          href="tel:5642242627"
          className="inline-flex items-center gap-1.5 font-semibold text-warm underline-offset-4 hover:underline cursor-pointer"
        >
          <Phone className="size-3.5" />
          {brand.contact.phone}
        </a>
      </div>
    </div>
  );
}
