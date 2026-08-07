import { ArrowRight, Check } from "lucide-react";

import websiteImage from "@/assets/website.jpg.asset.json";
import { Button } from "@/components/ui/button";
import { requestService } from "@/lib/request-service";

const FEATURES = [
  "Modern design",
  "Mobile responsive",
  "Fast and user-friendly",
  "Professional business presentation",
  "Contact and inquiry forms",
  "Social media integration",
];

export function FeaturedWebsite() {
  return (
    <section className="bg-primary py-16 text-primary-foreground lg:py-24">
      <div className="section-shell grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground/70">
            Featured service
          </p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Take Your Business Online</h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/80">
            We design professional, responsive websites that give your business a strong online
            presence and make it easier for customers to find, understand and contact you.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {FEATURES.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm">
                <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <Button
            size="lg"
            variant="secondary"
            className="mt-9"
            onClick={() => requestService("Website & Digital Services")}
          >
            Build My Website
            <ArrowRight aria-hidden="true" />
          </Button>
        </div>
        <img
          src={websiteImage.url}
          alt="A responsive business website shown on a laptop and a smartphone"
          width={1200}
          height={912}
          loading="lazy"
          className="w-full rounded-3xl border border-primary-foreground/15 object-cover"
        />
      </div>
    </section>
  );
}
