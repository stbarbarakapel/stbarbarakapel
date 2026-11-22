import { SectionHeading } from "@/components/ornament";

const PUNTEN = [
  {
    nr: "I",
    titel: "Stilte",
    tekst: "Grote delen van de Mis worden stil gebeden. Volg in uw eigen tempo en laat u meenemen.",
  },
  {
    nr: "II",
    titel: "Het misboekje",
    tekst:
      "Een tweetalig misboekje (Latijn–Nederlands) helpt u de teksten te volgen. [Beschikbaar bij de ingang?]",
  },
  {
    nr: "III",
    titel: "De communie",
    tekst: "De communie wordt geknield en op de tong ontvangen, aan de communiebank.",
  },
];

export function EersteBezoek() {
  return (
    <section id="eerste-bezoek" className="mx-auto max-w-[1200px] px-6 py-[140px]">
      <SectionHeading
        eyebrow="III · Eerste bezoek"
        title="Wees welkom"
        intro="Nieuw in de oude ritus? Niemand verwacht dat u alles al kent."
      />
      <div className="grid gap-14 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
        {PUNTEN.map((p) => (
          <div key={p.nr} className="flex flex-col gap-3 text-center">
            <p className="m-0 font-display text-[32px] text-gold">{p.nr}</p>
            <h3 className="m-0 font-display text-[20px] font-semibold uppercase tracking-[0.12em] text-bone">
              {p.titel}
            </h3>
            <p className="m-0 text-text-3">{p.tekst}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
