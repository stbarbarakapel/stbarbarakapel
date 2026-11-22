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
        alt="De St Barbarakapel bij nacht, met verlichte glas-in-loodramen, tussen de kale bomen van de begraafplaats"
        className="absolute inset-0 h-full w-full object-cover object-[center_42%]"
        fetchPriority="high"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(13,10,8,0.7) 0%, rgba(13,10,8,0) 18%, rgba(13,10,8,0.05) 52%, rgba(13,10,8,0.85) 84%, #0d0a08 100%)",
        }}
      />

      {/* Extra verduistering op smalle schermen, waar de tekst over de ramen valt */}
      <div aria-hidden="true" className="absolute inset-0 bg-ink/30 md:hidden" />

      <nav
        aria-label="Hoofdmenu"
        className="relative flex flex-wrap items-center justify-between gap-x-8 gap-y-4 px-[clamp(20px,5vw,72px)] py-7"
      >
        <a
          href="#top"
          className="font-display text-[15px] font-semibold tracking-[0.22em] text-parchment"
        >
          ST BARBARAKAPEL
        </a>
        <div className="flex flex-wrap gap-x-7 gap-y-2 font-display text-[13px] font-semibold uppercase tracking-[0.16em]">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="py-3">
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <div className="relative mt-auto flex flex-col items-center gap-4 px-6 pb-12 text-center md:pb-14 [text-shadow:0_2px_18px_rgba(13,10,8,0.85)]">
        <h1 className="m-0 font-display text-[clamp(22px,2.4vw,30px)] font-bold tracking-[0.24em] text-bone">
          LATIJNSE MIS
        </h1>
        <CrossDivider />
        <p className="m-0 font-display text-[clamp(15px,1.6vw,20px)] font-semibold tracking-[0.24em] text-gold">
          <span className="whitespace-nowrap">ST BARBARAKAPEL</span> ·{" "}
          <span className="whitespace-nowrap">ZONDAG 17.00u</span>
        </p>
        <div className="mt-3 flex flex-wrap justify-center gap-4">
          <OutlineButton href="#misrooster" className="bg-ink/50 text-bone hover:text-gold-hover">
            Misrooster
          </OutlineButton>
          <a
            href="#route"
            className="inline-flex min-h-12 items-center px-7 font-display text-[13px] font-semibold tracking-[0.18em]"
          >
            ROUTE &amp; ADRES →
          </a>
        </div>
      </div>
    </header>
  );
}
