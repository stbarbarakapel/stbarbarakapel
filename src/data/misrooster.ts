// Inhoud van de site. Pas hier tijden, aankondigingen en contactgegevens aan.
// Tekst tussen [BLOKHAKEN] is nog in te vullen.

export type Mis = {
  /** Datum in ISO-formaat (JJJJ-MM-DD) */
  datum: string;
  /** Liturgische naam in het Latijn */
  latijn: string;
  /** Nederlandse naam */
  nederlands: string;
  tijd: string;
};

/**
 * Komende Missen. De eerstvolgende (vanaf vandaag) wordt bovenaan de
 * pagina getoond. Voeg nieuwe data toe en laat oude gerust staan.
 */
export const komendeMissen: Mis[] = [
  {
    datum: "2026-11-29",
    latijn: "Dominica I Adventus",
    nederlands: "Eerste Zondag van de Advent",
    tijd: "17.00u",
  },
  {
    datum: "2026-12-06",
    latijn: "Dominica II Adventus",
    nederlands: "Tweede Zondag van de Advent",
    tijd: "17.00u",
  },
  {
    datum: "2026-12-13",
    latijn: "Dominica III Adventus",
    nederlands: "Zondag Gaudete",
    tijd: "17.00u",
  },
  {
    datum: "2026-12-20",
    latijn: "Dominica IV Adventus",
    nederlands: "Vierde Zondag van de Advent",
    tijd: "17.00u",
  },
  {
    datum: "2026-12-24",
    latijn: "In Nativitate Domini — Missa in nocte",
    nederlands: "Kerstmis, Nachtmis",
    tijd: "[TIJD]",
  },
];

export type VasteTijd = { label: string; tijd: string; toelichting: string };

export const vasteTijden: VasteTijd[] = [
  {
    label: "Zondag",
    tijd: "17.00u",
    toelichting: "[Gezongen Mis / Hoogmis]. Biechtgelegenheid vanaf [TIJD] vóór de Mis.",
  },
  {
    label: "Doordeweeks",
    tijd: "[DAG · TIJD]",
    toelichting: "Stille Mis. Raadpleeg de aankondigingen voor wijzigingen.",
  },
  {
    label: "Hoogfeesten",
    tijd: "Kerstmis",
    toelichting: "Nachtmis op 24 december om [TIJD]. Overige feestdagen volgens aankondiging.",
  },
];

export const celebrant = "Latijnse Gemeenschap Sint Barbarakapel";

export const adres = {
  naam: "St Barbarakapel",
  straat: "Prinsesselaan 4",
  postcodePlaats: "3583 GZ Utrecht",
  kaartUrl: "https://maps.app.goo.gl/ZJQtcMN4BwiWHQfu7",
};

export type RouteItem = {
  titel: string;
  tekst: string;
  link?: { href: string; label: string };
};

export const route: RouteItem[] = [
  {
    titel: "Auto",
    tekst: "De kapel is goed bereikbaar via de A28, A27 en A12.",
  },
  {
    titel: "Parkeren",
    tekst: "Parkeren kan bij de Parkeerplaats Begraafplaats St Barbara.",
    link: {
      href: "https://maps.app.goo.gl/73mKB2qEdjRdGAhF8",
      label: "Bekijk op de kaart →",
    },
  },
  {
    titel: "Openbaar vervoer",
    tekst: "Vanaf Utrecht Centraal rijden meerdere bussen naar bushalte Utrecht Oorsprongpark.",
  },
  {
    titel: "Te voet",
    tekst: "Volg vanaf de ingang van de begraafplaats de bomenlaan; de kapel ligt aan het einde.",
  },
  {
    titel: "Toegankelijkheid",
    tekst: "De kapel is toegankelijk met een rolstoel.",
  },
];

export const contact = {
  email: "[E-MAILADRES]",
  nieuwsbriefUrl: "#contact",
  giftenUrl: "#contact",
};

/** Geeft de eerstvolgende Mis vanaf `vandaag` terug, of undefined. */
export function volgendeMis(vandaag: Date = new Date()): Mis | undefined {
  const d = new Date(vandaag.getFullYear(), vandaag.getMonth(), vandaag.getDate());
  return [...komendeMissen]
    .sort((a, b) => a.datum.localeCompare(b.datum))
    .find((m) => {
      const [j, mnd, dag] = m.datum.split("-").map(Number);
      return new Date(j, mnd - 1, dag) >= d;
    });
}

const DAGEN = ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"];
const MAANDEN = [
  "januari",
  "februari",
  "maart",
  "april",
  "mei",
  "juni",
  "juli",
  "augustus",
  "september",
  "oktober",
  "november",
  "december",
];

/** "2026-11-29" → "Zondag 29 november" */
export function formatDatum(iso: string): string {
  const [j, m, d] = iso.split("-").map(Number);
  const dag = DAGEN[new Date(j, m - 1, d).getDay()];
  return `${dag[0].toUpperCase()}${dag.slice(1)} ${d} ${MAANDEN[m - 1]}`;
}
