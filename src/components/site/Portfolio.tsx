import { useState } from "react";

import adoyoLogo from "@/assets/Adoyo_1.png.asset.json";
import adoyoFlyer from "@/assets/Adoyo_Flyer_2.png.asset.json";
import adoyoMenu from "@/assets/Food_Menu_2.png.asset.json";
import bahariCover from "@/assets/Cover_photo.png.asset.json";
import bahariLogo from "@/assets/Logo_2.png.asset.json";
import bahariPoster from "@/assets/Poster_1.png.asset.json";
import evergreenFlyer from "@/assets/Evergreen_Peri.png.asset.json";
import evergreenLogo from "@/assets/Evergreen_3.png.asset.json";
import jgLogo from "@/assets/JG_Logo_1_1.png.asset.json";
import moPoster from "@/assets/Mo_Branding.png.asset.json";
import bahariWebsite from "@/assets/bahari-website.png.asset.json";

type Item = { title: string; client: string; category: string; url: string; alt: string };

const ITEMS: Item[] = [
  {
    title: "Adoyo Jikoni brand logo",
    client: "Adoyo Jikoni",
    category: "Logos",
    url: adoyoLogo.url,
    alt: "Adoyo Jikoni logo with chef illustration inside a red heart outline",
  },
  {
    title: "Bahari Careers logo",
    client: "Bahari Careers",
    category: "Logos",
    url: bahariLogo.url,
    alt: "Bahari Careers cruise recruitment logo with navy ship and gold compass",
  },
  {
    title: "Evergreen Peri Academy badge",
    client: "Evergreen Peri Academy",
    category: "Logos",
    url: evergreenLogo.url,
    alt: "Green circular school badge logo with children on a pencil",
  },
  {
    title: "JG Thrift & Trend logo",
    client: "JG Thrift & Trend",
    category: "Logos",
    url: jgLogo.url,
    alt: "JG Thrift and Trend retro green wordmark logo with shopper illustration",
  },
  {
    title: "Cruise recruitment poster",
    client: "Bahari Careers",
    category: "Posters",
    url: bahariPoster.url,
    alt: "Navy and gold cruise recruitment poster listing career services",
  },
  {
    title: "Resume review services poster",
    client: "MO Branding Experts",
    category: "Posters",
    url: moPoster.url,
    alt: "Orange and navy poster advertising resume review and critique services",
  },
  {
    title: "Academy admissions flyer",
    client: "Evergreen Peri Academy",
    category: "Flyers",
    url: evergreenFlyer.url,
    alt: "School admissions flyer with classroom photo and enrolment details",
  },
  {
    title: "Catering service flyer",
    client: "Adoyo Jikoni",
    category: "Flyers",
    url: adoyoFlyer.url,
    alt: "Catering service flyer with plated food photography and service list",
  },
  {
    title: "Food menu design",
    client: "Adoyo Jikoni",
    category: "Menus",
    url: adoyoMenu.url,
    alt: "Dark textured food menu listing snacks and prices in Kenyan shillings",
  },
  {
    title: "Facebook cover banner",
    client: "Bahari Careers",
    category: "Social Media",
    url: bahariCover.url,
    alt: "Wide social media cover banner with cruise ship and service icons",
  },
  {
    title: "Bahari Careers website",
    client: "Bahari Careers",
    category: "Websites",
    url: bahariWebsite.url,
    alt: "Bahari Careers website homepage showing cruise recruitment services",
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
            Sample works from real clients
          </h2>
          <p className="mt-3 text-muted-foreground">
            Logos, posters, flyers, menus, websites and social media designs delivered for
            businesses and schools across Kenya.
          </p>
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
              <div className="flex h-64 items-center justify-center bg-muted p-3">
                <img
                  src={item.url}
                  alt={item.alt}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-[1.03]"
                />
              </div>
              <figcaption className="border-t border-border p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  {item.category} · {item.client}
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
