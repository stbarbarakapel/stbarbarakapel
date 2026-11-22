import { Eyebrow } from "@/components/ornament";
import { formatDatum, volgendeMis } from "@/data/misrooster";

export function VolgendeMis() {
  const mis = volgendeMis();
  if (!mis) return null;

  return (
    <section aria-label="Volgende Heilige Mis" className="border-y border-gold/25 bg-ink-2">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-x-12 gap-y-6 px-6 py-10">
        <Eyebrow className="tracking-[0.22em]">Volgende Heilige Mis</Eyebrow>
        <p className="m-0 text-[28px] text-bone">
          <time dateTime={mis.datum}>{formatDatum(mis.datum)}</time>
        </p>
        <p className="m-0 text-[22px] italic text-text-3">
          {mis.latijn} — {mis.nederlands}
        </p>
        <p className="m-0 font-display text-[22px] tracking-[0.1em] text-bone">{mis.tijd}</p>
      </div>
    </section>
  );
}
