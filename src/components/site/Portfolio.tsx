import { useState } from "react";

import cardsImage from "@/assets/cards.jpg.asset.json";
import designImage from "@/assets/design.jpg.asset.json";
import govImage from "@/assets/gov.jpg.asset.json";
import heroImage from "@/assets/hero.jpg.asset.json";
import socialImage from "@/assets/social.jpg.asset.json";
import websiteImage from "@/assets/website.jpg.asset.json";

type Item = { title: string; category: string; url: string; alt: string };

const ITEMS: Item[] = [
  {
    title: "Corporate logo & brand kit",
    category: "Logos",
    url: designImage.url,
    alt: "Navy brand guideline booklet with logo and colour palette",
  },
  {
    title: "Event poster series",
    category: "Posters",
    url: socialImage.url,
    alt: "Navy event poster and matching social media graphic",
  },
  {
    title: "Executive business cards",
    category: "Business Cards",
    url: cardsImage.url,
    alt: "Stack of navy business cards on letterhead",
  },
  {
    title: "ATS-optimized resume",
    category: "Resumes",
    url: heroImage.url,
    alt: "Professionally formatted resume being reviewed at a desk",
  },
  {
    title: "Social media campaign set",
    category: "Social Media",
    url: socialImage.url,
    alt: "Social media graphics displayed on a smartphone",
  },
  {
    title: "Business website build",
    category: "Websites",
    url: websiteImage.url,
    alt: "Responsive business website on laptop and phone",
  },
  {
    title: "Government document support",
    category: "Documents",
    url: govImage.url,
    alt: "Passport, ID and tax documents prepared for filing",
  },
];

const FILTERS = ["All", ...Array.from(new Set(ITEMS.map((item) => item.category)))];

export function Portfolio() {
  const [active, setActive] = useState("All");
  const visible = active === "All" ? ITEMS : ITEMS.filter((item) => item.category === active);

  return (
    <section id="portfolio" className="border-y border-border bg-muted/50 py-16 lg:py-24">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            Our work
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-primary sm:text-4xl">
            A sample of what we deliver
          </h2>
        </div>

        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter portfolio">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              aria-pressed={active === filter}
              onClick={() => setActive(filter)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                active === filter
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-muted-foreground hover:text-primary"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item) => (
            <figure
              key={item.title}
              className="overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-[var(--shadow-lift)]"
            >
              <img
                src={item.url}
                alt={item.alt}
                width={1000}
                height={800}
                loading="lazy"
                className="h-56 w-full object-cover transition-transform duration-300 hover:scale-[1.03]"
              />
              <figcaption className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  {item.category}
                </p>
                <p className="mt-1 font-semibold text-foreground">{item.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
