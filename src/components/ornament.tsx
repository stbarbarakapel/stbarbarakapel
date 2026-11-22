import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Cross({ className, size = 14 }: { className?: string; size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={(size * 22) / 14}
      viewBox="0 0 14 22"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.2}
      className={className}
    >
      <path d="M7 1v20M1 7h12" />
    </svg>
  );
}

export function CrossDivider() {
  return (
    <div aria-hidden="true" className="flex items-center gap-[18px] text-gold">
      <span className="block h-px w-[clamp(56px,16vw,120px)] bg-gold" />
      <Cross />
      <span className="block h-px w-[clamp(56px,16vw,120px)] bg-gold" />
    </div>
  );
}

/** Kleine kapitale kop in goud, bv. "I · MISROOSTER" */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "m-0 font-display text-[13px] font-semibold uppercase tracking-[0.26em] text-gold",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="mb-10 flex md:mb-16 flex-col items-center gap-[14px] text-center">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="m-0 font-display text-[clamp(28px,4vw,52px)] font-medium tracking-[0.08em] text-bone">
        {title}
      </h2>
      {intro && <p className="m-0 max-w-[620px] italic text-text-3">{intro}</p>}
    </div>
  );
}

export function OutlineButton({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex min-h-12 items-center border border-gold px-7 font-display text-[13px] font-semibold uppercase tracking-[0.18em]",
        className,
      )}
    >
      {children}
    </a>
  );
}
