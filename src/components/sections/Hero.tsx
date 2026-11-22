import { CrossDivider, OutlineButton } from "@/components/ornament";

const NAV = [
  { href: "#misrooster", label: "Misrooster" },
  { href: "#kapel", label: "De kapel" },
  { href: "#eerste-bezoek", label: "Eerste bezoek" },
  { href: "#route", label: "Route" },
  { href: "#contact", label: "Contact" },
];

export function Hero() {
  return (
    <header
      id="top"
      className="relative flex min-h-[min(900px,100svh)] flex-col overflow-hidden md:min-h-[900px]"
    >
      <img
        src="/kapel-nacht.jpg"
        alt="De St Barbarakapel bij nacht, met verlichte glas-in-loodramen"
        className="absolute inset-0 h-full w-full object-cover object-[center_40%]"
        fetchPriority="high"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(13,10,8,0.75) 0%, rgba(13,10,8,0.05) 22%, rgba(13,10,8,0.15) 55%, rgba(13,10,8,0.92) 86%, #0d0a08 100%)",
        }}
      />

      {/* Extra verduistering op smalle schermen, waar de tekst over de ramen valt */}
      <div aria-hidden="true" className="absolute inset-0 bg-ink/45 md:hidden" />

      <nav
        aria-label="Hoofdmenu"
        className="relative flex flex-wrap items-center justify-between gap-x-8 gap-y-4 px-[clamp(20px,5vw,72px)] py-7"
      >
        <a href="#top" className="font-display text-[15px] tracking-[0.22em] text-parchment">
          ST BARBARAKAPEL
        </a>
        <div className="flex flex-wrap gap-x-7 gap-y-2 font-display text-[13px] uppercase tracking-[0.16em]">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="py-3">
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <div className="relative mt-auto flex flex-col items-center gap-5 px-6 pb-24 text-center [text-shadow:0_2px_18px_rgba(13,10,8,0.85)]">
        <h1 className="m-0 font-display text-[clamp(44px,7.5vw,112px)] font-normal leading-[1.05] tracking-[0.16em] text-bone">
          LATIJNSE MIS
        </h1>
        <CrossDivider />
        <p className="m-0 font-display text-[clamp(14px,1.4vw,18px)] tracking-[0.24em] text-gold">
          ST BARBARAKAPEL · UTRECHT
        </p>
        <p className="mt-2 mb-0 max-w-[560px] text-[22px] italic text-text-2">
          De Heilige Mis in de klassieke Latijnse ritus, in een neogotische kapel op de
          begraafplaats aan de Prinsesselaan.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          <OutlineButton href="#misrooster" className="bg-ink/50 text-bone hover:text-gold-hover">
            Misrooster
          </OutlineButton>
          <a
            href="#route"
            className="inline-flex min-h-12 items-center px-7 font-display text-[13px] tracking-[0.18em]"
          >
            ROUTE &amp; ADRES →
          </a>
        </div>
      </div>
    </header>
  );
}
