import { useState } from "react";
import { Cross, CrossDivider, OutlineButton } from "@/components/ornament";

const NAV = [
  { href: "#misrooster", label: "Misrooster" },
  { href: "#kapel", label: "De kapel" },
  { href: "#eerste-bezoek", label: "Eerste bezoek" },
  { href: "#route", label: "Route" },
  { href: "#contact", label: "Contact" },
];

/**
 * Mobiel: foto bovenaan, zo bijgesneden dat de hele kapel zichtbaar is, met de tekst
 * eronder op donkere achtergrond. Desktop: foto schermvullend met de tekst onderin.
 */
export function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header id="top" className="relative flex flex-col md:min-h-[900px] md:overflow-hidden">
      {/* Foto */}
      <div className="relative aspect-[9/8] w-full overflow-hidden md:absolute md:inset-0 md:aspect-auto md:h-full">
        <img
          src="/kapel-nacht.jpg"
          alt="De St Barbarakapel bij nacht, met verlichte glas-in-loodramen, tussen de kale bomen van de begraafplaats"
          className="absolute inset-0 h-full w-full object-cover object-[48%_center] md:object-[center_42%]"
          fetchPriority="high"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,10,8,0.6)_0%,rgba(13,10,8,0)_22%,rgba(13,10,8,0)_70%,#0d0a08_100%)] md:bg-[linear-gradient(180deg,rgba(13,10,8,0.7)_0%,rgba(13,10,8,0)_18%,rgba(13,10,8,0.05)_52%,rgba(13,10,8,0.85)_84%,#0d0a08_100%)]"
        />
      </div>

      {/* Navigatie */}
      <nav
        aria-label="Hoofdmenu"
        className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-5 py-4 md:relative md:px-[clamp(20px,5vw,72px)] md:py-7"
      >
        <a
          href="#top"
          className="font-display text-[14px] font-semibold tracking-[0.22em] text-parchment md:text-[15px]"
        >
          ST BARBARAKAPEL
        </a>

        <div className="hidden gap-x-7 font-display text-[13px] font-semibold uppercase tracking-[0.16em] md:flex">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="py-3">
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-controls="mobiel-menu"
          className="flex h-11 w-11 cursor-pointer flex-col items-center justify-center gap-[6px] border-0 bg-transparent md:hidden"
        >
          <span className="sr-only">{menuOpen ? "Menu sluiten" : "Menu openen"}</span>
          <span
            className={`block h-px w-6 bg-parchment transition-transform ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-parchment transition-transform ${menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {/* Mobiel uitklapmenu */}
      {menuOpen && (
        <div
          id="mobiel-menu"
          className="absolute inset-x-0 top-[76px] z-10 border-y border-gold/25 bg-ink/95 backdrop-blur-sm md:hidden"
        >
          <ul className="m-0 list-none p-0">
            {NAV.map((item) => (
              <li key={item.href} className="border-b border-gold/10 last:border-b-0">
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-5 py-4 font-display text-[14px] font-semibold uppercase tracking-[0.18em]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Titel */}
      <div className="relative -mt-6 flex flex-col items-center gap-4 px-6 pb-12 text-center md:mt-auto md:pb-14 md:[text-shadow:0_2px_18px_rgba(13,10,8,0.85)]">
        <h1 className="m-0 font-display text-[clamp(24px,2.4vw,30px)] font-bold tracking-[0.24em] text-bone">
          LATIJNSE MIS
        </h1>
        <div className="md:hidden">
          <Cross className="text-gold" />
        </div>
        <div className="hidden md:block">
          <CrossDivider />
        </div>
        <p className="m-0 flex flex-col gap-1 font-display text-[15px] font-semibold tracking-[0.22em] text-gold md:block md:text-[clamp(15px,1.6vw,20px)] md:tracking-[0.24em]">
          <span>ST BARBARAKAPEL</span>
          <span className="hidden md:inline"> · </span>
          <span>ZONDAG 17.00u</span>
        </p>
        <div className="mt-3 grid w-full max-w-[340px] grid-cols-2 gap-3 md:flex md:w-auto md:max-w-none md:justify-center md:gap-4">
          <OutlineButton
            href="#misrooster"
            className="justify-center bg-ink/50 px-4 text-bone hover:text-gold-hover md:px-7"
          >
            Misrooster
          </OutlineButton>
          <OutlineButton
            href="#route"
            className="justify-center border-gold/40 px-4 md:border-transparent md:px-7"
          >
            Route
          </OutlineButton>
        </div>
      </div>
    </header>
  );
}
