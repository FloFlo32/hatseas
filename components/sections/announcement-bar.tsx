import { Phone } from "lucide-react";
import { brand } from "@/brand.config";

/**
 * Slim top strip carrying the site's persistent call-to-book banner
 * ("Ready to Book or have Questions? Call Us 24/7.") that appears on every
 * page of the source site, just above the nav.
 */
export function AnnouncementBar() {
  const digits = brand.contact.phone.replace(/[^0-9A-Z]/gi, "");
  return (
    <div className="w-full bg-foreground text-background">
      <div className="container-px mx-auto flex max-w-6xl items-center justify-center gap-2 py-2 text-center text-xs font-medium sm:text-sm">
        <span>Ready to Book or have Questions? Call Us 24/7.</span>
        <a
          href={`tel:5642242627`}
          className="inline-flex items-center gap-1 font-semibold text-warm underline-offset-4 hover:underline cursor-pointer"
        >
          <Phone className="size-3.5" />
          {brand.contact.phone}
        </a>
      </div>
    </div>
  );
}
