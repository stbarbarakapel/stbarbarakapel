import { Cross } from "@/components/ornament";
import { contact } from "@/data/misrooster";

export function Footer() {
  return (
    <footer
      id="contact"
      className="flex flex-col items-center gap-[18px] border-t border-gold/25 px-6 pt-24 pb-16 text-center"
    >
      <Cross size={20} className="text-gold" />
      <p className="m-0 text-[26px] italic text-parchment">Introibo ad altare Dei.</p>
      <p className="m-0 text-[18px] text-muted">
        Ik zal opgaan naar het altaar van God. — Psalm 42
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-x-10 gap-y-3 font-display text-[13px] tracking-[0.16em]">
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
        © Latijnse Gemeenschap St Barbarakapel · Utrecht
      </p>
    </footer>
  );
}
