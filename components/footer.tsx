import Link from "next/link"
import { MapPin, Mail } from "lucide-react"

const OFFICE_ADDRESS = {
  line1: "Office Center Budapest",
  line2: "Váci út 45.",
  city: "1134 Budapest",
  country: "Maďarsko",
}

export default function Footer() {
  return (
    <footer
      className="mt-auto text-primary-foreground"
      style={{ backgroundColor: "var(--footer-bg)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand + address block */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <img src="/icon.svg" alt="Vstupenkyalert" width={44} height={44} className="rounded-xl" />
              <span className="text-xl font-bold">Vstupenkyalert</span>
            </div>
            <p className="text-primary-foreground/85 text-sm leading-relaxed max-w-sm mb-6">
              Nezávislá platforma pro porovnání cen vstupenek. Neprodáváme vstupenky – pouze porovnáváme ceny partnerů, abyste si vybrali nejvýhodnější nabídku.
            </p>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/90">
              <span className="font-semibold text-primary-foreground/95 flex items-center gap-2">
                <MapPin className="w-4 h-4 shrink-0" aria-hidden="true" />
                Adresa kanceláře (Maďarsko)
              </span>
              <address className="not-italic pl-6">
                {OFFICE_ADDRESS.line1}<br />
                {OFFICE_ADDRESS.line2}<br />
                {OFFICE_ADDRESS.city}<br />
                {OFFICE_ADDRESS.country}
              </address>
              <a
                href="mailto:info@vstupenkyalert.com"
                className="inline-flex items-center gap-2 text-accent hover:underline pl-6 mt-1"
              >
                <Mail className="w-4 h-4 shrink-0" />
                info@vstupenkyalert.com
              </a>
            </div>
          </div>

          {/* Stránky */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-primary-foreground/60 mb-5">
              Stránky
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { href: "/udalosti", label: "Události" },
                { href: "/partneri", label: "Partneři" },
                { href: "/o-nas", label: "O nás" },
                { href: "/kontakt", label: "Kontakt" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-primary-foreground/85 hover:text-primary-foreground transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Právní */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-primary-foreground/60 mb-5">
              Právní informace
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/ochrana-udaju"
                  className="text-sm text-primary-foreground/85 hover:text-primary-foreground transition-colors"
                >
                  Ochrana osobních údajů
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-sm text-primary-foreground/85 hover:text-primary-foreground transition-colors"
                >
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-12 pt-8 border-t border-primary-foreground/10"
          aria-label="Právní upozornění"
        >
          <p className="text-xs text-primary-foreground/50 leading-relaxed max-w-3xl">
            Vstupenkyalert je nezávislá porovnávací služba. Neprodáváme vstupenky. Kliknutím na tlačítko „Nabídka“ přejdete na web vybraného partnera; nákup probíhá výhradně u partnera.
          </p>
          <p className="mt-4 text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Vstupenkyalert. Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  )
}
