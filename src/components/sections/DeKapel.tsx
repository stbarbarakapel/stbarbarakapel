import { Eyebrow } from "@/components/ornament";

export function DeKapel() {
  return (
    <section id="kapel" className="border-t border-gold/[0.18] bg-ink-2">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-[72px] px-6 py-[140px]">
        <div className="flex flex-[1_1_380px] justify-center">
          <div className="w-full max-w-[440px] rounded-[50%_50%_0_0/28%_28%_0_0] border border-gold/40 p-2.5">
            <img
              src="/kapel-laan.jpg"
              alt="De bomenlaan over de begraafplaats naar de St Barbarakapel"
              loading="lazy"
              className="block h-[clamp(380px,50vw,560px)] w-full rounded-[50%_50%_0_0/27%_27%_0_0] object-cover"
            />
          </div>
        </div>
        <div className="flex flex-[1_1_420px] flex-col gap-5">
          <Eyebrow>II · De kapel</Eyebrow>
          <h2 className="m-0 font-display text-[clamp(30px,3.6vw,48px)] font-normal leading-[1.2] tracking-[0.06em] text-bone">
            Tussen de oude graven, onder de lindes
          </h2>
          <p className="m-0 text-text-2">
            Midden op de begraafplaats St Barbarakapel staat een kleine neogotische kapel van rode
            baksteen, met spitsboogvensters vol gebrandschilderd glas. Hier wordt de Heilige Mis
            opgedragen zoals zij eeuwenlang gevierd werd: in het Latijn, naar het oosten gericht, in
            stilte en in gregoriaans gezang.
          </p>
          <p className="m-0 text-text-2">
            [Korte geschiedenis van de kapel en van de gemeenschap — door u aan te vullen.]
          </p>
        </div>
      </div>
    </section>
  );
}
