import { useEffect, useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Mail, MessageCircle, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { onRequestService } from "@/lib/request-service";
import { CONTACT, SERVICE_OPTIONS } from "@/lib/site-data";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name (at least 2 characters)").max(100, "Name must be under 100 characters"),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(30, "Phone number must be under 30 characters")
    .regex(/^[0-9+()\-.\s]+$/, "Phone can only contain numbers, spaces and + ( ) -"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be under 255 characters"),
  service: z.string().trim().min(1, "Please select a service").max(100),
  message: z
    .string()
    .trim()
    .min(10, "Tell us a little more (at least 10 characters)")
    .max(2000, "Message must be under 2000 characters"),
});

const EMPTY = { name: "", phone: "", email: "", service: "", message: "" };
type Field = keyof typeof EMPTY;
type Status = { kind: "success" | "error"; text: string } | null;

export function Contact() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<Status>(null);

  useEffect(
    () =>
      onRequestService((service) => {
        setValues((prev) => ({ ...prev, service }));
        setErrors((prev) => ({ ...prev, service: undefined }));
      }),
    [],
  );

  const set = (key: Field, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validateField = (key: Field) => {
    const result = schema.shape[key].safeParse(values[key]);
    setErrors((prev) => ({
      ...prev,
      [key]: result.success ? undefined : result.error.issues[0]?.message,
    }));
  };

  const fieldProps = (key: Field) => ({
    "aria-invalid": Boolean(errors[key]),
    "aria-describedby": errors[key] ? `${key}-error` : undefined,
    onBlur: () => validateField(key),
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors: Partial<Record<Field, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as Field;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      const count = Object.keys(fieldErrors).length;
      setStatus({
        kind: "error",
        text: `Please fix ${count} ${count === 1 ? "field" : "fields"} below before sending.`,
      });
      const first = document.getElementById(Object.keys(fieldErrors)[0] ?? "name");
      first?.focus();
      return;
    }

    setErrors({});
    setSubmitting(true);
    const { error } = await supabase.from("contact_submissions").insert(parsed.data);
    setSubmitting(false);

    if (error) {
      const text = "We couldn't send your message. Please try WhatsApp or email instead.";
      setStatus({ kind: "error", text });
      toast.error(text);
      return;
    }

    const text = "Message sent. We'll get back to you shortly.";
    setStatus({ kind: "success", text });
    toast.success(text);
    setValues(EMPTY);
  }


  return (
    <section id="contact" className="border-t border-border bg-muted/50 py-16 lg:py-24">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-primary sm:text-4xl">
            Tell us what you need
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Send a message and we'll reply with a quote and timeline. Prefer to talk? WhatsApp is
            usually fastest.
          </p>

          <div className="mt-8 space-y-3">
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-3 rounded-2xl border border-border bg-background p-4 transition-colors hover:border-primary"
            >
              <Mail aria-hidden="true" className="h-5 w-5 shrink-0 text-primary" />
              <span className="min-w-0 truncate text-sm font-medium">{CONTACT.email}</span>
            </a>
            <a
              href={`tel:${CONTACT.phoneHref}`}
              className="flex items-center gap-3 rounded-2xl border border-border bg-background p-4 transition-colors hover:border-primary"
            >
              <Phone aria-hidden="true" className="h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm font-medium">{CONTACT.phoneDisplay}</span>
            </a>
            <Button asChild size="lg" className="w-full">
              <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer noopener">
                <MessageCircle aria-hidden="true" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={values.name}
                maxLength={100}
                onChange={(e) => set("name", e.target.value)}
                placeholder="Your full name"
              />
              {errors["name"] ? (
                <p className="text-xs text-destructive">{errors["name"]}</p>
              ) : null}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                type="tel"
                value={values.phone}
                maxLength={30}
                onChange={(e) => set("phone", e.target.value)}
                placeholder="07XX XXX XXX"
              />
              {errors["phone"] ? (
                <p className="text-xs text-destructive">{errors["phone"]}</p>
              ) : null}
            </div>
            <div className="grid gap-2 sm:col-span-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={values.email}
                maxLength={255}
                onChange={(e) => set("email", e.target.value)}
                placeholder="you@example.com"
              />
              {errors["email"] ? (
                <p className="text-xs text-destructive">{errors["email"]}</p>
              ) : null}
            </div>
            <div className="grid gap-2 sm:col-span-2">
              <Label htmlFor="service">Service required</Label>
              <select
                id="service"
                value={values.service}
                onChange={(e) => set("service", e.target.value)}
                className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="">Select a service</option>
                {SERVICE_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
                <option value="Other">Other</option>
              </select>
              {errors["service"] ? (
                <p className="text-xs text-destructive">{errors["service"]}</p>
              ) : null}
            </div>
            <div className="grid gap-2 sm:col-span-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                rows={5}
                value={values.message}
                maxLength={2000}
                onChange={(e) => set("message", e.target.value)}
                placeholder="Briefly describe what you need and when you need it."
              />
              {errors["message"] ? (
                <p className="text-xs text-destructive">{errors["message"]}</p>
              ) : null}
            </div>
          </div>
          <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto" disabled={submitting}>
            <Send aria-hidden="true" />
            {submitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </section>
  );
}
