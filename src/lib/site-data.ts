export const CONTACT = {
  email: "mobrandingexperts@gmail.com",
  phoneDisplay: "+254 721 517 679",
  phoneHref: "+254721517679",
  whatsapp: "https://wa.me/254721517679",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export type ServiceCategory = {
  id: string;
  title: string;
  description: string;
  items: string[];
};

export const SERVICES: ServiceCategory[] = [
  {
    id: "resume-linkedin",
    title: "Resume & LinkedIn",
    description:
      "Career documents that pass applicant tracking systems and present you as the obvious hire.",
    items: [
      "ATS-Optimized Resumes and CVs",
      "Modern and Professional Resumes",
      "LinkedIn Profile Optimization",
      "Tailored Cover Letters",
      "Job Portfolios",
      "Recommendation Letters",
      "Personal Statements",
      "Executive Bios",
    ],
  },
  {
    id: "design-documents",
    title: "Design & Documents",
    description:
      "Branding and print-ready documents that make your business look established and credible.",
    items: [
      "Posters",
      "Flyers",
      "Certificates",
      "Business Plans",
      "Proposal Writing",
      "Logos",
      "Business Cards",
      "Social Media Graphics",
      "Menus",
      "Invitation Cards",
    ],
  },
  {
    id: "website-digital",
    title: "Website & Digital Services",
    description:
      "Fast, responsive websites built to win trust and turn visitors into paying customers.",
    items: [
      "Professional Website Design",
      "Business Website Development",
      "Landing Pages",
      "Portfolio Websites",
      "Responsive Mobile-Friendly Websites",
      "Website Redesign",
      "Website Content Setup",
      "Basic Website Maintenance",
    ],
  },
  {
    id: "government",
    title: "Government Services",
    description:
      "Skip the queues and the guesswork on Kenyan government applications and filings.",
    items: [
      "KRA Tax Returns",
      "E-Citizen Services",
      "Passport Applications",
      "Good Conduct Applications",
      "NTSA Services",
      "Business Registration",
      "Birth & Death Certificate Applications",
    ],
  },
];

export const SERVICE_OPTIONS = SERVICES.map((s) => s.title);
