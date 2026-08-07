import { ArrowRight, BadgeCheck } from "lucide-react";

import heroImage from "@/assets/hero.jpg.asset.json";
import logo from "@/assets/logo.png.asset.json";
import { Button } from "@/components/ui/button";

const HIGHLIGHTS = ["Career documents", "Branding & design", "Websites", "Government services"];

export function Hero() {
  return (
    <section id="home" className="border-b border-border bg-muted/50">
      <div className="section-shell grid gap-12 py-16 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:py-24">
        <div>
          <img
            src={logo.url}
            alt="MO Branding Experts"
            width={112}
            height={112}
            className="h-24 w-24 rounded-2xl border border-border bg-background object-contain p-2 sm:h-28 sm:w-28"
          />

          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <BadgeCheck aria-hidden="true" className="h-4 w-4" />
            Nairobi, Kenya
          </p>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] text-primary sm:text-5xl lg:text-6xl">
            Professional Solutions.
            <span className="block text-foreground">One Trusted Partner.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            From career documents and business branding to graphic design, websites and government
            services, MO Branding Experts provides professional solutions tailored to your needs.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="#services">
                View Our Services
                <ArrowRight aria-hidden="true" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 text-sm font-medium text-muted-foreground sm:max-w-lg">
            {HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <img
            src={heroImage.url}
            alt="Consultant reviewing a professionally prepared resume at a desk"
            width={1408}
            height={1008}
            className="w-full rounded-3xl border border-border object-cover shadow-[var(--shadow-lift)]"
          />
          <div className="absolute -bottom-6 left-6 hidden rounded-2xl border border-border bg-background px-5 py-4 shadow-[var(--shadow-card)] sm:block">
            <p className="font-display text-2xl font-extrabold text-primary">5+</p>
            <p className="text-xs font-medium text-muted-foreground">
              service categories under one roof
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
