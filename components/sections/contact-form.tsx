"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons";
import { brand } from "@/brand.config";

/**
 * The source site's "Send" button posts to a GoDaddy form backend we don't
 * have. WhatsApp is the one verified, working channel HatSeas actually
 * publishes, so submitting routes the message there instead of a dead form
 * post or an invented mailto address.
 */
export function ContactForm() {
  const [sent, setSent] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    const text = [
      `Hi Hatseas, my name is ${name || "a website visitor"}.`,
      message,
      `You can reach me at ${email}.`,
    ]
      .filter(Boolean)
      .join(" ");
    window.open(`https://wa.me/${brand.contact.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-primary/30 bg-primary/5 p-10 text-center">
        <span className="grid size-12 place-items-center rounded-full bg-primary/10 text-primary">
          <Check className="size-6" />
        </span>
        <p className="mt-4 text-lg font-semibold">Thanks for reaching out!</p>
        <p className="mt-1 text-sm text-muted-foreground">
          We opened WhatsApp with your message ready to send.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1.5 h-11 w-full rounded-lg border border-input bg-background px-3.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium">
            Email*
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1.5 h-11 w-full rounded-lg border border-input bg-background px-3.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1.5 w-full resize-none rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>
      <p className="mt-3 text-xs text-muted-foreground">
        This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of
        Service apply.
      </p>
      <div className="mt-4 flex gap-3">
        <Button type="submit">
          <WhatsAppIcon className="size-4" /> Send
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => {
            setName("");
            setEmail("");
            setMessage("");
          }}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}
