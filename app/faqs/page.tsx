import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { CTA } from "@/components/sections/cta";
import { Reveal } from "@/components/magic/reveal";
import { brand } from "@/brand.config";
import { faqs } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "FAQ's",
  description: "Frequently asked questions about booking tours and rentals with Hatseas in the Bahamas.",
};

export default function FaqsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="FAQ's"
          title="Frequently Asked Questions"
          subtitle={`Please reach us at ${brand.contact.phone} if you cannot find an answer to your question.`}
          image="/ingested/hatseas/blue-lagoon-bahamas.jpg"
          alt="Turquoise lagoon and palm trees on a Bahamas beach"
        />

        <section className="container-px mx-auto max-w-3xl py-20 sm:py-24">
          <Reveal>
            <FaqAccordion items={faqs} />
          </Reveal>
        </section>

        <CTA
          title="Still have questions?"
          body="Our team is here to help you plan the perfect Bahamas adventure."
          primaryLabel="Contact Us"
          primaryHref="/contact"
        />
      </main>
      <Footer />
    </>
  );
}
