import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";

import logo from "@/assets/logo.png.asset.json";
import { CONTACT, NAV_LINKS } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-primary py-14 text-primary-foreground">
      <div className="section-shell grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-foreground">
              <img
                src={logo.url}
                alt="MO Branding Experts logo"
                width={40}
                height={40}
                loading="lazy"
                className="h-10 w-10 object-contain"
              />
            </span>
            <span>
              <span className="block font-display text-base font-extrabold">MO BRANDING</span>
              <span className="block text-[0.65rem] font-semibold tracking-[0.35em] text-primary-foreground/70">
                EXPERTS
              </span>
            </span>
          </div>
          <p className="mt-5 text-sm text-primary-foreground/80">
            Professional Solutions. One Trusted Partner.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em]">Navigate</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-primary-foreground/80 hover:text-primary-foreground">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em]">Get in touch</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={`tel:${CONTACT.phoneHref}`}
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground"
              >
                <Phone aria-hidden="true" className="h-4 w-4 shrink-0" />
                {CONTACT.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex min-w-0 items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground"
              >
                <Mail aria-hidden="true" className="h-4 w-4 shrink-0" />
                <span className="truncate">{CONTACT.email}</span>
              </a>
            </li>
          </ul>
          <div className="mt-5 flex gap-3">
            {[
              { Icon: Facebook, label: "Facebook", href: "https://facebook.com" },
              { Icon: Instagram, label: "Instagram", href: "https://instagram.com" },
              { Icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
            ].map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-primary-foreground/25 transition-colors hover:bg-primary-foreground/10"
              >
                <Icon aria-hidden="true" className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="section-shell mt-10 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/70">
        &copy; {new Date().getFullYear()} MO Branding Experts. All rights reserved.
      </div>
    </footer>
  );
}
