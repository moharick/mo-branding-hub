import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const PILLARS = [
  { title: "Career services", text: "Resumes, cover letters, LinkedIn and portfolios." },
  { title: "Branding & design", text: "Logos, print, social graphics and documents." },
  { title: "Websites", text: "Design, development and ongoing maintenance." },
  { title: "Government services", text: "KRA, eCitizen, NTSA and business registration." },
];

export function WhyUs() {
  return (
    <section className="py-16 lg:py-24">
      <div className="section-shell rounded-3xl border border-border bg-accent/60 px-6 py-12 sm:px-10 lg:px-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
              Everything You Need. Under One Brand.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Instead of chasing a different provider for every task, clients access career
              services, branding, design, websites and government-related services from one
              accountable team. That means consistent quality, one point of contact and far less
              time lost coordinating between suppliers.
            </p>
            <Button asChild size="lg" className="mt-8">
              <a href="#contact">
                Talk to us
                <ArrowRight aria-hidden="true" />
              </a>
            </Button>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {PILLARS.map((pillar) => (
              <li key={pillar.title} className="rounded-2xl border border-border bg-background p-5">
                <p className="font-semibold text-primary">{pillar.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{pillar.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
