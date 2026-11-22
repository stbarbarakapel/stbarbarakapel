import { SectionHeading } from "@/components/ornament";
import { celebrant, vasteTijden } from "@/data/misrooster";

export function Misrooster() {
  return (
    <section id="misrooster" className="mx-auto max-w-[1200px] px-6 pt-[140px] pb-[120px]">
      <SectionHeading eyebrow="I · Misrooster" title="Vaste tijden" />
      <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
        {vasteTijden.map((t) => (
          <article
            key={t.label}
            className="flex flex-col gap-3 border border-gold/30 bg-ink-2 px-9 py-10"
          >
            <p className="m-0 font-display text-[13px] uppercase tracking-[0.2em] text-gold">
              {t.label}
            </p>
            <p className="m-0 font-display text-[40px] leading-tight text-bone">{t.tijd}</p>
            <p className="m-0 text-text-3">{t.toelichting}</p>
          </article>
        ))}
      </div>
      <p className="mt-10 mb-0 text-center italic text-muted">Celebrant: {celebrant}</p>
    </section>
  );
}
