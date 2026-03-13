import Link from "next/link"
import { MapPin, Mail } from "lucide-react"

const OFFICE_ADDRESS = {
  country: "Česko",
  city: "Praha",
  address: "Panská 1, 110 00",
}

export default function Footer() {
  return (
    <footer
      className="mt-auto"
      style={{ backgroundColor: "var(--footer-bg)" }}
    >
      {/* Horní accent pruh */}
      <div className="h-1 w-full rounded-t-full" style={{ backgroundColor: "var(--accent)" }} aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand blok – logo v kroužku + název + popis */}
          <div className="lg:col-span-5 flex flex-col">
            <Link href="/" className="inline-flex items-center gap-4 mb-5 w-fit">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent/20 ring-2 ring-accent/40">
                <img src="/icon.svg" alt="" width={32} height={32} className="rounded-lg" />
              </span>
              <span className="text-xl font-bold text-primary-foreground tracking-tight">
                Vstupenkyalert
              </span>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-sm mb-8">
              Nezávislá platforma pro porovnání cen vstupenek. Neprodáváme vstupenky – pouze porovnáváme ceny partnerů.
            </p>
            {/* Adresa + e-mail jako kompaktní placky */}
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3 text-primary-foreground/90 text-sm">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-accent" aria-hidden="true" />
                <div>
                  <span className="font-semibold text-primary-foreground/95 block mb-1">Adresa kanceláře</span>
                  <address className="not-italic">
                    {OFFICE_ADDRESS.country}<br />
                    {OFFICE_ADDRESS.city}<br />
                    {OFFICE_ADDRESS.address}
                  </address>
                </div>
              </div>
              <a
                href="mailto:info@vstupenkyalert.com"
                className="inline-flex items-center gap-2 text-sm text-accent hover:underline w-fit font-medium"
              >
                <Mail className="w-4 h-4 shrink-0" />
                info@vstupenkyalert.com
              </a>
            </div>
          </div>

          {/* Stránky */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-primary-foreground/50 mb-5">
              Stránky
            </h3>
            <ul className="flex flex-col gap-2.5">
              {[
                { href: "/udalosti", label: "Události" },
                { href: "/partneri", label: "Partneři" },
                { href: "/o-nas", label: "O nás" },
                { href: "/kontakt", label: "Kontakt" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Právní */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-primary-foreground/50 mb-5">
              Právní informace
            </h3>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link
                  href="/ochrana-udaju"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Ochrana osobních údajů
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Spodní pruh – disclaimer + copyright */}
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
