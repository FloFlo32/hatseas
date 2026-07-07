"use client";

/**
 * Hatseas ships light-only by design (clean, sun-bright Bahamas palette).
 * This stub keeps the <head> script contract (no flash-of-wrong-theme) without
 * offering a dark mode to toggle into.
 */
export function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: "document.documentElement.classList.remove('dark');",
      }}
    />
  );
}
