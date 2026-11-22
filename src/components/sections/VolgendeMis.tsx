import { Eyebrow } from "@/components/ornament";
import { formatDatum, volgendeMis } from "@/data/misrooster";

export function VolgendeMis() {
  const mis = volgendeMis();
  if (!mis) return null;

  return (
    <section aria-label="Volgende Heilige Mis" className="border-y border-gold/25 bg-ink-2">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-1 px-6 py-8 text-center md:flex-row md:flex-wrap md:justify-between md:gap-x-12 md:gap-y-6 md:py-10 md:text-left">
        <Eyebrow className="mb-2 tracking-[0.22em] md:mb-0">Volgende Heilige Mis</Eyebrow>
        <p className="m-0 text-[24px] text-bone md:text-[28px]">
          <time dateTime={mis.datum}>{formatDatum(mis.datum)}</time>
        </p>
        <p className="m-0 text-[19px] italic text-text-3 md:text-[22px]">
          {mis.latijn} — {mis.nederlands}
        </p>
        <p className="m-0 mt-2 font-display text-[20px] font-semibold tracking-[0.1em] md:mt-0 md:text-[22px] text-bone">
          {mis.tijd}
        </p>
      </div>
    </section>
  );
}
