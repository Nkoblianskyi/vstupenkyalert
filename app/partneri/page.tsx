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
        <section
          className="relative py-20 md:py-28 px-4 bg-primary"
          style={{ backgroundImage: "url(/images/hero-bg.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-primary/80" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 text-balance">
              S kým porovnáváme
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-4">
              Vstupenkyalert neprodává vstupenky – pouze zobrazujeme ceny a nabídky těchto partnerů na jednom místě.
            </p>
            <p className="text-white/80 text-base max-w-2xl mx-auto">
              Nákup vždy probíhá na webu vybraného partnera. My pouze porovnáváme, abyste našli nejvýhodnější nabídku.
            </p>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 lg:px-8 py-10">
          <Disclaimer />
        </div>

        <section className="py-16 px-4 bg-secondary" aria-labelledby="compare-heading">
          <div className="max-w-4xl mx-auto">
            <h2 id="compare-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center gap-2">
              <BarChart3 className="w-7 h-7 text-accent" />
              Co přesně porovnáváme?
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              U každé vybrané události zobrazujeme v jedné tabulce ceny partnerů a odkaz na jejich web. Na jednom místě tak uvidíte, kde je nejvýhodnější cena, a jedním kliknutím přejdete k nákupu.
            </p>
            <ul className="space-y-4">
              {whatWeCompare.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-16 px-4 bg-background" aria-label="Seznam partnerů">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 text-center">
              Naši partneři
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Níže uvedené prodejce vstupenek porovnáváme. Klikněte na „Web“ pro otevření stránek partnera.
            </p>

            <div className="space-y-8">
              {partners.map((partner, index) => (
                <article
                  key={partner.name}
                  className="bg-card border-2 border-border rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:border-accent/30 transition-all duration-300"
                >
                  <div className="p-6 md:p-8 lg:p-10">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/15 text-accent font-bold text-lg shrink-0">
                          {index + 1}
                        </span>
                        <div>
                          <h3 className="text-2xl font-bold text-foreground">{partner.name}</h3>
                          <span className="inline-block mt-1.5 bg-accent/15 text-accent text-sm font-semibold px-3 py-1 rounded-lg">
                            {partner.specialty}
                          </span>
                        </div>
                      </div>
                      <a
                        href={partner.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground hover:opacity-90 transition-opacity shrink-0"
                        aria-label={`Web ${partner.name} (nové okno)`}
                      >
                        Web <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {partner.desc}
                    </p>
                    {partner.note && (
                      <p className="text-sm text-foreground/80 font-medium flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-accent shrink-0" />
                        {partner.note}
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-secondary" aria-labelledby="selection-heading">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center mb-12">
              <span className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/15 text-accent mb-5">
                <Shield className="w-8 h-8" aria-hidden="true" />
              </span>
              <h2 id="selection-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Jak vybíráme partnery?
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                Zobrazujeme pouze partnery, kteří splňují naše požadavky na bezpečnost a důvěryhodnost.
              </p>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {selectionCriteria.map((item, i) => (
                <li key={i} className="flex items-start gap-3 bg-card rounded-2xl p-5 border-2 border-border">
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

        <section className="py-14 px-4 bg-background">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-foreground font-semibold mb-4">
              Připraveni porovnávat?
            </p>
            <Link
              href="/udalosti"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
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
