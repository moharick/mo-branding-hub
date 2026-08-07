import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";

import logo from "@/assets/logo.png.asset.json";
import { Button } from "@/components/ui/button";
import { CONTACT, NAV_LINKS } from "@/lib/site-data";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="section-shell grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3">
        <a href="#home" className="flex min-w-0 items-center gap-3">
          <img
            src={logo.url}
            alt="MO Branding Experts logo"
            width={44}
            height={44}
            className="h-11 w-11 shrink-0 object-contain"
          />
          <span className="min-w-0">
            <span className="block truncate font-display text-base font-extrabold leading-tight text-primary sm:text-lg">
              MO BRANDING
            </span>
            <span className="block text-[0.65rem] font-semibold tracking-[0.35em] text-muted-foreground">
              EXPERTS
            </span>
          </span>
        </a>

        <div className="flex items-center gap-1">
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <Button asChild className="hidden sm:inline-flex">
            <a href={`tel:${CONTACT.phoneHref}`}>
              <Phone aria-hidden="true" />
              {CONTACT.phoneDisplay}
            </a>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-primary lg:hidden"
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}

          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-border bg-background lg:hidden" aria-label="Mobile">
          <div className="section-shell flex flex-col py-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${CONTACT.phoneHref}`}
              className="rounded-md px-2 py-3 text-sm font-semibold text-primary"
            >
              {CONTACT.phoneDisplay}
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
