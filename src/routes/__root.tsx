import {
  Outlet,
  createRootRoute,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "../styles.css?url";
import { SITE_URL, DEFAULT_OG_IMAGE } from "../lib/site";

const TITLE = "Latijnse Mis — St Barbarakapel Utrecht";
const DESCRIPTION =
  "De Heilige Mis in de klassieke Latijnse ritus in de St Barbarakapel, Prinsesselaan 4, Utrecht. Misrooster, route en informatie voor een eerste bezoek.";

function Centered({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-5 bg-ink px-6 text-center">
      {children}
    </div>
  );
}

function NotFoundComponent() {
  return (
    <Centered>
      <p className="m-0 font-display text-[13px] tracking-[0.26em] text-gold">404</p>
      <h1 className="m-0 font-display text-4xl font-normal tracking-[0.08em] text-bone">
        Pagina niet gevonden
      </h1>
      <a href="/" className="font-display text-[13px] tracking-[0.18em]">
        ← NAAR DE STARTPAGINA
      </a>
    </Centered>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  return (
    <Centered>
      <h1 className="m-0 font-display text-3xl font-normal tracking-[0.08em] text-bone">
        Er ging iets mis
      </h1>
      <button
        onClick={() => {
          router.invalidate();
          reset();
        }}
        className="min-h-12 cursor-pointer border border-gold bg-transparent px-7 font-display text-[13px] tracking-[0.18em] text-bone"
      >
        OPNIEUW PROBEREN
      </button>
    </Centered>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0d0a08" },
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "nl_NL" },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: DEFAULT_OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: DEFAULT_OG_IMAGE },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&display=swap",
      },
      { rel: "preload", as: "image", href: "/kapel-nacht.jpg" },
    ],
  }),
  shellComponent: RootShell,
  component: Outlet,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
