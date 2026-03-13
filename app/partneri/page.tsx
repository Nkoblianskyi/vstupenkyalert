import Header from "@/components/header"
import Footer from "@/components/footer"
import Disclaimer from "@/components/disclaimer"
import Link from "next/link"
import { ExternalLink, Shield, BarChart3, CheckCircle, ArrowRight } from "lucide-react"

const partners = [
  {
    name: "Ticketmaster CZ",
    url: "https://www.ticketmaster.cz",
    desc: "Jedna z největších světových platforem pro prodej vstupenek. V Česku silná nabídka koncertů, sportu i festivalů. Přehledné rozhraní a spolehlivý nákup.",
    specialty: "Koncert, Sport, Festival",
    note: "Široká nabídka velkých akcí.",
  },
  {
    name: "Eventim CZ",
    url: "https://www.eventim.cz",
    desc: "Česká větev evropské sítě Eventim. Mezinárodní hvězdy i arénové show, divadlo a klasické koncerty. Bezpečný nákup na osvědčené platformě.",
    specialty: "Koncert, Divadlo, Sport",
    note: "Často výhodné ceny u velkých akcí.",
  },
  {
    name: "StubHub",
    url: "https://stubhub.com",
    desc: "Globální sekundární trh s vstupenkami. Nabízí vstupenky na vyprodané akce. Mezinárodní nabídka, často konkurenceschopné ceny u horkých programů.",
    specialty: "Sekundární trh, vyprodané akce",
    note: "Užitečné, když oficiální vstupenky došly.",
  },
  {
    name: "Viagogo",
    url: "https://viagogo.com",
    desc: "Mezinárodní sekundární prodejce vstupenek. Široká nabídka koncertů, sportu a festivalů. Často dostupné akce, které jinde už nejsou.",
    specialty: "Koncert, Sport, Festival",
    note: "Stojí za to porovnat ceny s ostatními partnery.",
  },
  {
    name: "Slevomat",
    url: "https://www.slevomat.cz",
    desc: "Česká platforma se silným zaměřením na slevy a akce. Obzvlášť silná u festivalů a menších lokálních akcí. Přátelské rozhraní a časté slevy.",
    specialty: "Festival, Lokální akce",
    note: "Dobrá volba pro festivaly.",
  },
  {
    name: "GoOut",
    url: "https://goout.net",
    desc: "Důvěryhodný český prodejce vstupenek. Široká nabídka – koncerty, sport, divadlo, kulturní akce. Rychlé vyřízení a transparentní podmínky.",
    specialty: "Koncert, Sport, Kultura",
    note: "Silná pozice v kultuře a sportu.",
  },
]

const whatWeCompare = [
  "Ceny vstupenek („od“) u každého vybraného partnera u každé události",
  "Přímý odkaz na web partnera – jedním kliknutím vás přesměrujeme",
  "Koncerty, festivaly, sport, divadlo a další akce na jednom místě",
  "Nákup a transakce probíhají výhradně u partnera – my vstupenky neprodáváme",
]

const selectionCriteria = [
  "Platné podnikání a důvěryhodné fungování",
  "Transparentní ceny a nákupní podmínky",
  "Osvědčená zákaznická podpora a řešení reklamací",
  "Vstupenkyalert nedostává od partnerů provize – porovnání zůstává objektivní",
]

export default function PartnersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section
          className="relative py-20 md:py-28 px-4 overflow-hidden"
          style={{
            background: "linear-gradient(180deg, oklch(0.20 0.07 255) 0%, oklch(0.22 0.06 258) 100%)",
          }}
        >
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              Naši partneři
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 text-balance">
              S kým porovnáváme
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-4">
              Vstupenkyalert neprodává vstupenky – pouze zobrazujeme ceny a nabídky těchto partnerů na jednom místě.
            </p>
            <p className="text-white/75 text-base max-w-2xl mx-auto">
              Nákup vždy probíhá na webu vybraného partnera. My pouze porovnáváme, abyste našli nejvýhodnější nabídku.
            </p>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 lg:px-8 py-10">
          <Disclaimer />
        </div>

        {/* Info sekce – číslovaný seznam, originální titulka */}
        <section className="py-16 px-4 bg-muted/50" aria-labelledby="compare-heading">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-baseline gap-4 mb-8">
              <span className="h-1 w-12 rounded-full bg-accent shrink-0" aria-hidden="true" />
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Informace</p>
                <h2 id="compare-heading" className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2">
                  <BarChart3 className="w-7 h-7 text-accent shrink-0" />
                  Co přesně porovnáváme?
                </h2>
              </div>
            </div>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              U každé vybrané události zobrazujeme v jedné tabulce ceny partnerů a odkaz na jejich web. Na jednom místě tak uvidíte, kde je nejvýhodnější cena, a jedním kliknutím přejdete k nákupu.
            </p>
            <ul className="space-y-4">
              {whatWeCompare.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                    {i + 1}
                  </span>
                  <span className="text-foreground leading-relaxed pt-0.5">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Karty partnerů – s levým akcentem a plackou specializace */}
        <section className="py-16 px-4 bg-background" aria-label="Seznam partnerů">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-baseline gap-4 mb-12">
              <span className="h-1 w-12 rounded-full bg-accent shrink-0" aria-hidden="true" />
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Prodejci</p>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Naši partneři
                </h2>
                <p className="text-muted-foreground mt-2 max-w-2xl">
                  Níže uvedené prodejce vstupenek porovnáváme. Klikněte na „Web“ pro otevření stránek partnera.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {partners.map((partner, index) => (
                <article
                  key={partner.name}
                  className="flex rounded-2xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300"
                >
                  <div className="w-1.5 shrink-0 bg-accent rounded-l-2xl" aria-hidden="true" />
                  <div className="flex-1 p-6 md:p-8 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent font-bold text-lg">
                        {index + 1}
                      </span>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{partner.name}</h3>
                        <span className="inline-block mt-2 rounded-full bg-muted px-3 py-1 text-xs font-semibold text-foreground">
                          {partner.specialty}
                        </span>
                        <p className="text-muted-foreground leading-relaxed mt-4 text-sm">
                          {partner.desc}
                        </p>
                        {partner.note && (
                          <p className="text-sm text-foreground/80 font-medium flex items-center gap-2 mt-3">
                            <ArrowRight className="w-4 h-4 text-accent shrink-0" />
                            {partner.note}
                          </p>
                        )}
                      </div>
                    </div>
                    <a
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground hover:opacity-90 transition-opacity shrink-0 self-start sm:self-center"
                      aria-label={`Web ${partner.name} (nové okno)`}
                    >
                      Web <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Jak vybíráme – titulka + karty s ikonou */}
        <section className="py-20 px-4 bg-muted/50" aria-labelledby="selection-heading">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-baseline gap-4 mb-12">
              <span className="h-1 w-12 rounded-full bg-accent shrink-0" aria-hidden="true" />
              <div className="text-center sm:text-left">
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/15 text-accent mb-4">
                  <Shield className="w-7 h-7" aria-hidden="true" />
                </span>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Kritéria</p>
                <h2 id="selection-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  Jak vybíráme partnery?
                </h2>
                <p className="text-muted-foreground leading-relaxed max-w-2xl">
                  Zobrazujeme pouze partnery, kteří splňují naše požadavky na bezpečnost a důvěryhodnost.
                </p>
              </div>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {selectionCriteria.map((item, i) => (
                <li key={i} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-center text-muted-foreground mt-8 text-sm">
              Vstupenkyalert nedostává od partnerů provize – porovnání zůstává nezávislé a objektivní.
            </p>
          </div>
        </section>

        {/* CTA – placka styl */}
        <section className="py-14 px-4 bg-background">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-foreground font-semibold mb-4">Připraveni porovnávat?</p>
            <Link
              href="/udalosti"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Prohlédnout události <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
