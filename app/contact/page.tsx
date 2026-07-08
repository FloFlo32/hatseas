import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { Map } from "@/components/sections/map";
import { ContactForm } from "@/components/sections/contact-form";
import { Reveal } from "@/components/magic/reveal";
import { WhatsAppIcon, InstagramIcon, FacebookIcon } from "@/components/icons";
import { Phone, Clock, MapPin } from "lucide-react";
import { brand } from "@/brand.config";
import { contactContent } from "@/lib/site-data";

export const metadata: Metadata = {
  title: { absolute: "Contact Hatseas for Bahamas Travel Inquiries" },
  description: "Contact Hatseas for Bahamas travel inquiries. We'd love to hear from you!",
};

export default function ContactPage() {
  const waNumber = brand.contact.whatsapp;

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="Contact"
          title={contactContent.heading}
          subtitle={contactContent.intro}
          image="/ingested/hatseas/pig-island-exuma-bahamas.jpg"
          alt="Friends laughing while swimming with a pig on the beach in the Bahamas"
        />

        <section className="container-px mx-auto max-w-6xl py-20 sm:py-24">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
            <Reveal className="flex flex-col gap-6">
              <div className="rounded-2xl border border-border bg-card p-7">
                <h3 className="font-display text-lg font-bold">Hatseas Bahamas</h3>
                <ul className="mt-4 space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <Clock className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{contactContent.hours}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
                    <a href="tel:5642242627" className="text-muted-foreground hover:text-primary cursor-pointer">
                      {brand.contact.phone} for Booking
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{brand.contact.address}</span>
                  </li>
                </ul>

                {waNumber && (
                  <a
                    href={`https://wa.me/${waNumber}?text=${encodeURIComponent("Hi Hatseas, I have a question.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02] cursor-pointer"
                  >
                    <WhatsAppIcon className="size-4" /> Message us on WhatsApp
                  </a>
                )}
              </div>

              <div className="rounded-2xl border border-border bg-card p-7">
                <h3 className="font-display text-lg font-bold">Find us on social media</h3>
                <div className="mt-4 flex gap-2">
                  <a
                    href={brand.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="grid size-11 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary cursor-pointer"
                  >
                    <InstagramIcon className="size-5" />
                  </a>
                  <a
                    href={brand.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="grid size-11 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary cursor-pointer"
                  >
                    <FacebookIcon className="size-5" />
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <ContactForm />
            </Reveal>
          </div>
        </section>

        <Map />
      </main>
      <Footer />
    </>
  );
}
