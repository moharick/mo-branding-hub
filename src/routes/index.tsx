import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { FeaturedWebsite } from "@/components/site/FeaturedWebsite";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Portfolio } from "@/components/site/Portfolio";
import { Process } from "@/components/site/Process";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";

const TITLE = "MO Branding Experts | CVs, Branding, Websites & Gov Services";
const DESCRIPTION =
  "MO Branding Experts delivers ATS resumes, LinkedIn optimization, branding and design, professional websites and Kenyan government services from one trusted partner.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "MO Branding Experts",
          slogan: "Professional Solutions. One Trusted Partner.",
          description: DESCRIPTION,
          email: "mobrandingexperts@gmail.com",
          telephone: "+254721517679",
          areaServed: "KE",
          address: { "@type": "PostalAddress", addressCountry: "KE" },
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <FeaturedWebsite />
        <Process />
        <Portfolio />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
