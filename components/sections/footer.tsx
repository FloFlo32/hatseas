import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { brand } from "@/brand.config";
import { navItems } from "@/lib/site-data";
import { InstagramIcon, FacebookIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border/70 bg-card">
      <div className="container-px mx-auto grid max-w-6xl gap-10 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/brand/hatseas-logo.png"
              alt={`${brand.name} logo`}
              width={56}
              height={56}
              className="size-14 object-contain"
            />
            <span className="font-display text-lg font-bold tracking-tight">
              {brand.name}
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-pretty text-muted-foreground">
            Discover unforgettable island excursions and adventures in the Bahamas with
            HatSeas. Book your dream tours and rentals today!
          </p>
          <div className="mt-5 flex gap-2">
            <a
              href={brand.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary cursor-pointer"
            >
              <InstagramIcon className="size-4" />
            </a>
            <a
              href={brand.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary cursor-pointer"
            >
              <FacebookIcon className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Explore
          </h4>
          <ul className="mt-4 space-y-2.5">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-foreground/80 transition-colors hover:text-primary cursor-pointer"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Get in touch
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-foreground/80">
            <li>
              <a href="tel:5642242627" className="inline-flex items-center gap-2 hover:text-primary cursor-pointer">
                <Phone className="size-4 shrink-0 text-primary" />
                {brand.contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${brand.social.email}`} className="inline-flex items-center gap-2 hover:text-primary cursor-pointer">
                <Mail className="size-4 shrink-0 text-primary" />
                {brand.social.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>{brand.contact.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/70 py-6">
        <div className="container-px mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 text-xs text-muted-foreground sm:flex-row">
          <p>Copyright © 2026 Hatseas - All Rights Reserved.</p>
          <p>We use cookies to analyze website traffic and optimize your website experience.</p>
        </div>
      </div>
    </footer>
  );
}
