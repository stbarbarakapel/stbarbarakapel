# St Barbarakapel — Latijnse Mis Utrecht

Website van de Latijnse Misgemeenschap in de St Barbarakapel, Prinsesselaan 4, Utrecht.
Ontwerp: **Nocturne** (nachtfoto, Cinzel, goud).

Zelfde opzet als `vanars-website`: TanStack Start + Vite + Tailwind v4, gebouwd met Bun en
gedeployed op Vercel via de nitro `vercel`-preset (CI/CD op `main`).

## Ontwikkelen

```bash
bun install
bun run dev      # http://localhost:3000 (of de poort die Vite toont)
bun run build    # schrijft .vercel/output
bun run lint
```

## Inhoud aanpassen

Bijna alle tekst staat in `src/data/misrooster.ts`:

- `komendeMissen` — de eerstvolgende Mis (vanaf vandaag) verschijnt automatisch in de balk onder de header
- `vasteTijden`, `celebrant` — het misrooster
- `route`, `adres`, `contact` — route- en contactgegevens

Tekst tussen `[BLOKHAKEN]` moet nog ingevuld worden. Het domein staat in `src/lib/site.ts`.

## Structuur

```
src/
  routes/__root.tsx        HTML-shell, meta/OG-tags, fonts
  routes/index.tsx         de one-pager
  components/sections/     Hero, VolgendeMis, Misrooster, DeKapel, EersteBezoek, Route, Footer
  components/ornament.tsx  kruis, scheidingslijn, koppen, knoppen
  data/misrooster.ts       alle inhoud
  styles.css               Nocturne-kleuren en -fonts (Tailwind theme)
public/                    foto's, og-image, robots.txt
```
