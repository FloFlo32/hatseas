"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "hatseas-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function respond(choice: "accepted" | "declined") {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {}
    setVisible(false);
  }

  return (
    <div
      role="dialog"
      aria-label="Cookie notice"
      aria-hidden={!visible}
      className={cn(
        "fixed inset-x-0 bottom-0 z-[70] transition-transform duration-300 motion-reduce:transition-none",
        visible ? "translate-y-0" : "pointer-events-none translate-y-full"
      )}
    >
      <div className="container-px mx-auto max-w-6xl pb-4">
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-xl sm:flex-row sm:justify-between">
          <p className="text-pretty text-center text-sm text-muted-foreground sm:text-left">
            We use cookies to analyze website traffic and optimize your website experience. By
            accepting our use of cookies, your data will be aggregated with all other user data.
          </p>
          <div className="flex shrink-0 gap-2">
            <Button variant="outline" size="sm" onClick={() => respond("declined")}>
              Decline
            </Button>
            <Button size="sm" onClick={() => respond("accepted")}>
              Accept
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
