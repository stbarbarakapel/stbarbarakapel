import { Cross } from "@/components/ornament";
import { contact } from "@/data/misrooster";

export function Footer() {
  return (
    <footer
      id="contact"
      className="flex flex-col items-center gap-[18px] border-t border-gold/25 px-5 pt-16 pb-12 md:px-6 md:pt-24 md:pb-16 text-center"
    >
      <Cross size={20} className="text-gold" />
      <p className="m-0 text-[23px] italic md:text-[26px] text-parchment">
        Introibo ad altare Dei.
      </p>
      <p className="m-0 text-[18px] text-muted">
        Ik zal opgaan naar het altaar van God. <span className="whitespace-nowrap">— Psalm 42</span>
      </p>
      <div className="mt-4 flex flex-col items-center gap-0 md:mt-8 md:flex-row md:flex-wrap justify-center md:gap-x-10 md:gap-y-3 font-display text-[13px] font-semibold tracking-[0.16em]">
        <a href={`mailto:${contact.email}`} className="py-3">
          {contact.email}
        </a>
        <a href={contact.nieuwsbriefUrl} className="py-3">
          NIEUWSBRIEF
        </a>
        <a href={contact.giftenUrl} className="py-3">
          GIFTEN
        </a>
      </div>
      <p className="mt-6 mb-0 text-[15px] text-faint">
        © Latijnse Gemeenschap Sint Barbarakapel · Utrecht
      </p>
    </footer>
  );
}
