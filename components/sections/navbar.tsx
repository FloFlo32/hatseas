"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { brand } from "@/brand.config";
import { navItems } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { AnnouncementBar } from "@/components/sections/announcement-bar";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => setOpen(false), [pathname]);

  return (
    <div className="sticky top-0 z-50 w-full">
      <AnnouncementBar />
      <header
        className={cn(
          "w-full border-b transition-all duration-300",
          scrolled
            ? "border-border/70 bg-background/85 backdrop-blur-xl shadow-sm"
            : "border-transparent bg-background"
        )}
      >
        <nav className="container-px mx-auto flex h-20 max-w-6xl items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <Image
              src="/brand/hatseas-logo.png"
              alt={`${brand.name} logo`}
              width={56}
              height={56}
              priority
              className="size-12 object-contain sm:size-14"
            />
            <span className="hidden font-display text-lg font-bold tracking-tight sm:inline">
              {brand.name}
            </span>
          </Link>

          <div className="hidden items-center gap-1 rounded-full border border-border/70 bg-card/60 p-1.5 lg:flex">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors cursor-pointer",
                    active
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-foreground/70 hover:bg-accent hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="tel:5642242627"
              className="hidden items-center gap-2 text-sm font-semibold text-foreground/80 hover:text-primary md:inline-flex cursor-pointer"
            >
              <Phone className="size-4" />
              {brand.contact.phone}
            </a>
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <Link href="/contact">Book Now</Link>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </nav>

        {open && (
          <div className="border-t border-border/70 bg-background lg:hidden">
            <div className="container-px mx-auto flex max-w-6xl flex-col gap-1 py-4">
              {navItems.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-lg px-3 py-2.5 text-sm font-medium cursor-pointer",
                      active
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground/80 hover:bg-accent"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Button asChild className="mt-2">
                <Link href="/contact">Book Now</Link>
              </Button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
