import { Clock, Gem, Handshake, Layers, ShieldCheck } from "lucide-react";

import designImage from "@/assets/design.jpg.asset.json";

const REASONS = [
  { icon: ShieldCheck, title: "Professional & Reliable", text: "Clear communication and deadlines you can plan around." },
  { icon: Handshake, title: "Tailored Solutions", text: "Every document and design is built for your specific goal." },
  { icon: Gem, title: "Quality Work", text: "Polished, market-ready output that reflects well on you." },
  { icon: Clock, title: "Convenient Service", text: "Order remotely from anywhere in Kenya, delivered digitally." },
  { icon: Layers, title: "One-Stop Business Support", text: "Career, branding, digital and government needs in one place." },
];

export function About() {
  return (
    <section id="about" className="py-16 lg:py-24">
      <div className="section-shell grid gap-12 lg:grid-cols-2 lg:items-center">
        <img
          src={designImage.url}
          alt="Brand guideline booklet, business cards and posters laid out on a desk"
          width={1000}
          height={800}
          loading="lazy"
          className="w-full rounded-3xl border border-border object-cover shadow-[var(--shadow-card)]"
        />
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            About us
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-primary sm:text-4xl">
            A professional partner for people and businesses that want to be taken seriously
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            MO Branding Experts provides professional branding, career documentation, design,
            digital and administrative services for individuals, businesses and organizations. We
            help job seekers present themselves with confidence, help businesses look established
            from day one, and handle the paperwork most people would rather not deal with.
          </p>
        </div>
      </div>

      <div className="section-shell mt-14">
        <h3 className="text-xl font-bold text-primary">Why choose us</h3>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {REASONS.map(({ icon: Icon, title, text }) => (
            <li
              key={title}
              className="rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-[var(--shadow-card)]"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <Icon aria-hidden="true" className="h-5 w-5" />
              </span>
              <p className="mt-4 font-semibold text-foreground">{title}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
