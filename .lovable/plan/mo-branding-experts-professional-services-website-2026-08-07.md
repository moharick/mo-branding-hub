# MO Branding Experts — Professional Services Website

A single-page, premium corporate site built on the navy-blue logo identity, with all sections from the brief and a working contact form.

## Brand system

- Navy primary (from logo), white and light grey surfaces, subtle navy tints for accents. No gradients, no clutter.
- Strong sans-serif typography pairing (bold display headings, highly readable body), generous spacing, rounded cards, soft elevation on hover only.
- Uploaded logo used in the header, hero and footer; also set as the site favicon.

## Page sections (single page, smooth-scroll anchors)

1. Sticky header — logo, nav (Home, About, Services, Portfolio, Contact), phone CTA; mobile slide-out menu.
2. Hero — "Professional Solutions. One Trusted Partner." with the supporting paragraph, logo lockup, and two CTAs: View Our Services / Contact Us.
3. About — concise positioning copy plus a "Why Choose Us" row of five points (Professional & Reliable, Tailored Solutions, Quality Work, Convenient Service, One-Stop Business Support).
4. Services — four category cards, each with an icon, short description, its full list of items, and a "Request Service" button that jumps to the contact form with that service preselected: Resume & LinkedIn, Design & Documents, Website & Digital Services, Government Services.
5. Featured — "Take Your Business Online" website-building section with the six benefit points, a supporting image, and a "Build My Website" CTA.
6. Our Process — 4 numbered steps.
7. Portfolio — filterable card gallery (All / Logos / Posters / Business Cards / Resumes / Social Media / Websites) with generated sample images.
8. Why Choose Us — "Everything You Need. Under One Brand." one-stop-provider statement.
9. Contact — clickable email and phone, prominent WhatsApp button (wa.me link to +254721517679), and a form: Name, Phone, Email, Service Required (select), Message.
10. Footer — logo, tagline, nav links, contact details, social icons.

## Contact form

Enable Lovable Cloud so submissions are stored in a database table you can review, with validation on both the form and the server. Success and error states shown inline. The WhatsApp and email links work regardless as instant alternatives.

## Imagery

Generated, on-brand photography and portfolio mockups (resume/CV desk, design workspace, website on devices, government/document services). No reuse of the uploaded poster artwork.

## Technical notes

- TanStack Start route at `/` with per-route SEO head: unique title, description, og/twitter tags, single H1, semantic sections, alt text on all images.
- Design tokens (navy, greys, radii, shadows) defined in `src/styles.css`; components use semantic tokens only.
- Logo uploaded via Lovable Assets and referenced by CDN pointer; square favicon copy in `public/`.
- Mobile-first responsive layout; scroll-reveal kept subtle and minimal.
- Sections split into focused components under `src/components/`.
