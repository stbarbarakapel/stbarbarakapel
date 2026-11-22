import { Eyebrow, OutlineButton } from "@/components/ornament";
import { adres, route } from "@/data/misrooster";

export function Route() {
  return (
    <section id="route" className="border-t border-gold/[0.18] bg-ink-2">
      <div className="mx-auto flex max-w-[1200px] flex-wrap justify-between gap-10 px-5 py-16 md:gap-14 md:px-6 md:py-[120px]">
        <div className="flex flex-[1_1_300px] flex-col gap-[18px]">
          <Eyebrow>IV · Route</Eyebrow>
          <h2 className="m-0 font-display text-[clamp(26px,3.6vw,48px)] font-medium tracking-[0.06em] text-bone">
            {adres.naam}
          </h2>
          <address className="text-[22px] not-italic md:text-[24px] leading-[1.5] text-parchment">
            {adres.straat}
            <br />
            {adres.postcodePlaats}
          </address>
          <OutlineButton href={adres.kaartUrl} external className="self-start px-6">
            Open in kaart →
          </OutlineButton>
        </div>
        <div className="grid min-w-0 flex-[1_1_300px] grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">
          {route.map((r) => (
            <div key={r.titel} className="flex flex-col gap-2">
              <h3 className="m-0 font-display text-[15px] font-semibold uppercase tracking-[0.16em] text-gold">
                {r.titel}
              </h3>
              <p className="m-0 text-text-3">{r.tekst}</p>
              {r.link && (
                <a
                  href={r.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-start whitespace-nowrap font-display text-[13px] font-semibold tracking-[0.14em] uppercase"
                >
                  {r.link.label}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
