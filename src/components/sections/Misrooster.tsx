import { SectionHeading } from "@/components/ornament";
import { celebrant, vasteTijden } from "@/data/misrooster";

export function Misrooster() {
  return (
    <section
      id="misrooster"
      className="mx-auto max-w-[1200px] px-5 py-16 md:px-6 md:pt-[140px] md:pb-[120px]"
    >
      <SectionHeading eyebrow="I · Misrooster" title="Vaste tijden" />
      <div className="grid gap-4 md:gap-6 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
        {vasteTijden.map((t) => (
          <article
            key={t.label}
            className="flex flex-col gap-3 border border-gold/30 bg-ink-2 px-6 py-7 md:px-9 md:py-10"
          >
            <p className="m-0 font-display text-[13px] font-semibold uppercase tracking-[0.2em] text-gold">
              {t.label}
            </p>
            <p className="m-0 font-display text-[32px] leading-tight md:text-[40px] text-bone">
              {t.tijd}
            </p>
            <p className="m-0 text-text-3">{t.toelichting}</p>
          </article>
        ))}
      </div>
      <p className="mt-8 mb-0 text-center italic text-muted md:mt-10">{celebrant}</p>
    </section>
  );
}
