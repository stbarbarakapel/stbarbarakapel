import { Eyebrow, OutlineButton } from "@/components/ornament";
import { adres, route } from "@/data/misrooster";

export function Route() {
  return (
    <section id="route" className="border-t border-gold/[0.18] bg-ink-2">
      <div className="mx-auto flex max-w-[1200px] flex-wrap justify-between gap-14 px-6 py-[120px]">
        <div className="flex flex-[1_1_360px] flex-col gap-[18px]">
          <Eyebrow>IV · Route</Eyebrow>
          <h2 className="m-0 font-display text-[clamp(30px,3.6vw,48px)] font-normal tracking-[0.06em] text-bone">
            {adres.naam}
          </h2>
          <address className="text-[24px] not-italic leading-[1.5] text-parchment">
            {adres.straat}
            <br />
            {adres.postcodePlaats}
          </address>
          <OutlineButton href={adres.kaartUrl} className="self-start px-6">
            Open in kaart →
          </OutlineButton>
        </div>
        <div className="grid flex-[1_1_420px] gap-8 [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]">
          {route.map((r) => (
            <div key={r.titel} className="flex flex-col gap-2">
              <h3 className="m-0 font-display text-[15px] font-medium uppercase tracking-[0.16em] text-gold">
                {r.titel}
              </h3>
              <p className="m-0 text-text-3">{r.tekst}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
