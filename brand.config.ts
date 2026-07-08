/**
 * ────────────────────────────────────────────────────────────────────────────
 *  BRAND CONFIG — the single source of truth for this site.
 * ────────────────────────────────────────────────────────────────────────────
 *
 *  This is the ONLY file most people need to edit to make the starter their own.
 *
 *  1. Edit the values below.
 *  2. Run:  npm run brand
 *
 *  The `brand` script propagates everything that can't be imported at runtime
 *  (package.json name, README title, theme colors in globals.css, env hints).
 *  Everything else (site name in the UI, <title>, OG metadata, footer, links)
 *  is imported directly from this file, so it updates the instant you save.
 *
 *  Colors use OKLCH — a perceptual color space. Keep the same lightness/chroma
 *  and just change the hue (the 3rd number) to re-skin the whole site:
 *    hue 265 = violet · 230 = blue · 160 = emerald · 25 = red · 70 = amber
 */

export const brand = {
  /** Product / company name. Shows in the nav, hero, footer, <title>, OG tags. */
  name: "Hatseas",

  /** One-line value prop. Used in the hero sub-headline + meta description. */
  tagline: "Island Excursions in the Bahamas",

  /** Longer description for SEO / Open Graph. ~150 chars is ideal. */
  description:
    "Discover unforgettable island excursions and adventures in the Bahamas with HatSeas. Book your dream tours and rentals today!",

  /** Primary domain WITHOUT protocol. `/build` sets this to <project>.getyetti.com. */
  domain: "hatseas.getyetti.com",

  /** Theme — drives the whole color system. Run `npm run brand` after editing. */
  theme: {
    /** Brand hue in OKLCH degrees (0–360). This single number re-skins the site. */
    hue: 206,
    /** Corner style. "sharp" = modern/editorial, "rounded" = friendly, "pill" = playful. */
    corners: "rounded" as "sharp" | "rounded" | "pill",
    /** Default color scheme on first paint. */
    defaultScheme: "light" as "light" | "dark",
  },

  /** Fonts. Any Google Font name works — edit, then run `npm run brand`. */
  fonts: {
    /** Big headlines. Pick something with PERSONALITY — this is what breaks the AI look. */
    display: "Sora",
    /** Body / UI text. Keep it clean and readable. */
    sans: "Inter",
    /** Code / labels / kbd. */
    mono: "JetBrains Mono",
  },

  /** Links shown in the footer + used by deploy scripts. */
  social: {
    github: "",
    x: "",
    instagram: "https://www.instagram.com/hatseas_bahamas",
    facebook: "https://www.facebook.com/profile.php?id=716511461555456",
    /** No verified public email on the source site (its "Email Us" is a form widget) — leave blank rather than invent one. */
    email: "",
  },

  /**
   * Contact + location. `npm run ingest` fills these from the scraped site.
   * - whatsapp: digits only, country code first, no "+". Set it and a click-to-chat
   *   widget appears (components/widget/whatsapp-widget.tsx).
   * - address + mapQuery: set them and the <Map> section renders a pin + embedded map.
   *   mapQuery is a search string for the embed, so it can be ordered for accuracy
   *   even though the displayed `address` matches the source's literal wording.
   */
  contact: {
    whatsapp: "16317075887",
    phone: "564-BAHAMAS",
    address: "Bahamas, New Providence, Nassau",
    mapQuery: "Nassau, Bahamas",
  },
} as const;

export type Brand = typeof brand;
export default brand;
