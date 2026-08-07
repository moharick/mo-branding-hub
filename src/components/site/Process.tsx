const STEPS = [
  { title: "Tell Us What You Need", text: "Share your goal, deadline and any files you already have." },
  { title: "Get a Quote", text: "We confirm scope and send a clear price before starting." },
  { title: "We Create & Refine", text: "You receive a draft and we revise it until it is right." },
  { title: "Receive Your Final Product", text: "Final files delivered in the formats you need." },
];

export function Process() {
  return (
    <section className="py-16 lg:py-24">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            Our process
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-primary sm:text-4xl">
            Simple, transparent, four steps
          </h2>
        </div>
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-border bg-card p-6">
              <span className="font-display text-3xl font-extrabold text-accent-foreground/40">
                0{index + 1}
              </span>
              <p className="mt-3 font-semibold text-foreground">{step.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
