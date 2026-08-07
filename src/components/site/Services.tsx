import { Check, FileText, Globe, Landmark, PenTool } from "lucide-react";

import { Button } from "@/components/ui/button";
import { requestService } from "@/lib/request-service";
import { SERVICES } from "@/lib/site-data";


const ICONS = {
  "resume-linkedin": FileText,
  "design-documents": PenTool,
  "website-digital": Globe,
  government: Landmark,
} as const;

export function Services() {
  return (
    <section id="services" className="border-y border-border bg-muted/50 py-16 lg:py-24">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            Our services
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-primary sm:text-4xl">
            Four service areas. One professional standard.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Choose a category below and request the exact service you need. Quotes are shared
            before any work begins.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.id as keyof typeof ICONS];
            return (
              <article
                key={service.id}
                className="flex flex-col rounded-3xl border border-border bg-card p-6 transition-shadow hover:shadow-[var(--shadow-lift)] sm:p-8"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <Icon aria-hidden="true" className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-primary">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                      <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7 pt-1">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto"
                    onClick={() => requestService(service.title)}
                  >
                    Request Service
                  </Button>
                </div>

              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
