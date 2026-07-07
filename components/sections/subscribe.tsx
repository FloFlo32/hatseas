"use client";

import * as React from "react";
import { Mail, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/magic/reveal";
import { AuroraBackground } from "@/components/magic/aurora-background";

export function Subscribe() {
  const [email, setEmail] = React.useState("");
  const [done, setDone] = React.useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
  }

  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <AuroraBackground className="opacity-60" />
      <div className="container-px relative mx-auto max-w-2xl text-center">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Subscribe
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold sm:text-4xl">
            Get the best Bahamas travel deals in your inbox
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          {done ? (
            <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-3 text-sm font-medium text-primary">
              <Check className="size-4" /> You&apos;re signed up. Welcome aboard!
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="subscribe-email" className="sr-only">
                Email
              </label>
              <div className="relative flex-1">
                <Mail className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  id="subscribe-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="h-12 w-full rounded-full border border-input bg-card pl-10 pr-4 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
              <Button type="submit" size="lg" className="rounded-full">
                Sign up
              </Button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
