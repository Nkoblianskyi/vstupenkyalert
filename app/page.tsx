import Link from "next/link"
import { Search, ArrowRight, Shield, Zap, BarChart3, ChevronRight, Users, Ticket, CheckCircle2 } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroSearch from "@/components/hero-search"
import Disclaimer from "@/components/disclaimer"
import EventCard from "@/components/event-card"
import { allEvents } from "@/lib/events"

const featuredEvents = allEvents.slice(0, 3)
const partnerNames = ["Ticketmaster CZ", "Eventim CZ", "StubHub", "Viagogo", "Slevomat", "GoOut"]

const steps = [
  { step: 1, title: "Vyhledávání", desc: "Zadejte název události nebo místo do vyhledávání." },
  { step: 2, title: "Porovnání", desc: "Na jednom místě uvidíte aktuální ceny u více partnerů." },
  { step: 3, title: "Výběr", desc: "Vyberte nejvýhodnější nabídku a klikněte na „Nabídka“." },
  { step: 4, title: "Nákup", desc: "Nákup proběhne bezpečně na webu vybraného partnera." },
]

const stats = [
  { value: "6+", label: "partnerů" },
  { value: "0 Kč", label: "poplatek" },
  { value: "100 %", label: "nezávislé" },
]

const whyBlocks = [
  { icon: Zap, title: "Rychle a jednoduše", text: "Jedním vyhledáváním uvidíte všechny nabídky. Bez registrace a skrytých poplatků." },
  { icon: Shield, title: "Pouze ověření partneři", text: "Zobrazujeme jen prověřené prodejce vstupenek. Nákup probíhá u nich." },
  { icon: BarChart3, title: "Transparentní ceny", text: "Ceny všech partnerů v přehledné tabulce. Nejlepší nabídku vyberete jedním kliknutím." },
]

const faqs = [
  { q: "Co je Vstupenkyalert?", a: "Vstupenkyalert je nezávislá porovnávací služba. U jedné události shrneme ceny od více prodejců vstupenek (Ticketmaster, Eventim, StubHub atd.), takže na jednom místě uvidíte, kde je nejvýhodnější cena. Sami vstupenky neprodáváme – nákup vždy probíhá u vybraného partnera." },
  { q: "Je služba zdarma?", a: "Ano. Vstupenkyalert je zcela zdarma, bez registrace. Neúčtujeme žádný poplatek a od partnerů nedostáváme provize – porovnání zůstává objektivní." },
  { q: "Proč se ceny u partnerů liší?", a: "Každý prodejce má vlastní cenotvorbu, akce a servisní poplatky. My je zobrazíme v jedné tabulce, abyste si vybrali nejvýhodnější nabídku." },
  { q: "Je nákup u partnera bezpečný?", a: "Ano. Zobrazujeme pouze partnery, kteří jsou známí a důvěryhodní prodejci. Transakce probíhá na jejich webu podle jejich bezpečnostních a ochranných zásad." },
]

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero – Bento: disclaimer nahoře, pak mřížka (nadpis + vyhledávání + 3 stat buňky), bez fotky */}
        <section
          className="relative flex flex-col min-h-[88vh] overflow-hidden"
          aria-label="Úvod"
        >
          <div className="relative z-10 shrink-0">
            <Disclaimer variant="hero" />
          </div>

          {/* Gradient mesh pozadí – žádná fotka */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background: `
                radial-gradient(ellipse 80% 50% at 70% 40%, oklch(0.35 0.12 260 / 0.4), transparent 50%),
                radial-gradient(ellipse 60% 80% at 20% 80%, oklch(0.45 0.15 250 / 0.35), transparent 45%),
                linear-gradient(180deg, oklch(0.18 0.06 255) 0%, oklch(0.22 0.07 258) 50%, oklch(0.16 0.05 260) 100%)
              `,
            }}
          />
          <div
            className="absolute inset-0 z-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(oklch(1 0 0) 1px, transparent 1px),
                               linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)`,
              backgroundSize: "48px 48px",
            }}
          />

          <div className="relative z-10 flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 flex flex-col justify-center">
            {/* Bento grid: nadpis | vyhledávání */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-6 lg:mb-8">
              {/* Levý blok – nadpis */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
                  Porovnání cen vstupenek
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.05]">
                  Jedno místo.
                  <br />
                  <span className="text-accent">Všechny ceny.</span>
                </h1>
                <p className="text-white/80 text-lg mt-6 max-w-md">
                  Vyhledávejte, porovnávejte, šetřete. Zdarma a bez registrace.
                </p>
              </div>

              {/* Pravý blok – vyhledávání v „bento“ kartě */}
              <div className="lg:col-span-5 flex items-center">
                <div className="w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 lg:p-8 shadow-2xl">
                  <HeroSearch />
                  <p className="text-white/60 text-xs mt-4 text-center">Porovnáváme partnery</p>
                  <div className="flex flex-wrap justify-center gap-1.5 mt-3">
                    {partnerNames.map((p) => (
                      <span key={p} className="text-[11px] font-medium text-white/70 bg-white/10 rounded-md px-2 py-0.5">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Spodní řádek – 3 stat buňky v bento stylu */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm px-5 py-4 flex items-center gap-4"
                >
                  <span className="text-2xl sm:text-3xl font-bold text-accent tabular-nums">{s.value}</span>
                  <span className="text-white/80 text-sm font-medium">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Jak to funguje – vertikální timeline na mobilu, horizontální na desktopu, jiné karty */}
        <section className="py-20 lg:py-28 px-4 bg-secondary" aria-labelledby="how-heading">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 id="how-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                Jak to funguje?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Ve čtyřech krocích najdete nejvýhodnější cenu vstupenek.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {steps.map((s) => (
                <div
                  key={s.step}
                  className="relative bg-card rounded-2xl border-2 border-border p-6 lg:p-8 shadow-sm hover:border-accent/40 hover:shadow-lg transition-all"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent text-accent-foreground font-bold text-xl mb-5">
                    {s.step}
                  </div>
                  <h3 className="font-bold text-foreground text-xl mb-2">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Náhled událostí – velký nadpis vlevo, karty v gridu 3 sloupce, jiný styl karet */}
        <section className="py-20 lg:py-28 px-4 bg-background" aria-labelledby="featured-heading">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
              <div>
                <h2 id="featured-heading" className="text-3xl md:text-4xl font-bold text-foreground">
                  Vybrané události
                </h2>
                <p className="text-muted-foreground mt-2 max-w-xl">
                  Koncerty, festivaly, sport i divadlo – porovnejte ceny na jednom místě.
                </p>
              </div>
              <Link
                href="/udalosti"
                className="inline-flex items-center gap-2 text-accent font-semibold hover:underline shrink-0"
              >
                Všechny události <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>

        {/* Statistiky – jeden široký pruh, čísla s oddělovači */}
        <section
          className="py-16 lg:py-20 px-4 text-primary-foreground"
          style={{ backgroundColor: "var(--footer-bg)" }}
          aria-label="Statistiky"
        >
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 text-center">
              {stats.map((s, i) => (
                <div key={s.label} className={i < 2 ? "sm:border-r sm:border-primary-foreground/20" : ""}>
                  <p className="text-4xl md:text-5xl font-bold text-accent">{s.value}</p>
                  <p className="text-primary-foreground/90 mt-2 text-lg">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proč Vstupenkyalert – karty v řadě s ikonami a odlišným layoutem */}
        <section className="py-20 lg:py-28 px-4 bg-secondary" aria-labelledby="why-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="why-heading" className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
              Proč Vstupenkyalert?
            </h2>
            <p className="text-muted-foreground text-center max-w-xl mx-auto mb-14 text-lg">
              Nezávislá platforma – pouze porovnáváme, vstupenky neprodáváme.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyBlocks.map((b) => (
                <div
                  key={b.title}
                  className="bg-card rounded-2xl border-2 border-border p-8 shadow-sm hover:shadow-lg hover:border-accent/30 transition-all"
                >
                  <span className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/15 text-accent mb-6">
                    <b.icon className="w-8 h-8" aria-hidden="true" />
                  </span>
                  <h3 className="font-bold text-foreground text-xl mb-3">{b.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partneři – větší sekce: úvodní text, co porovnáváme (box), pak velké karty partnerů */}
        <section className="py-20 lg:py-28 px-4 bg-background" aria-labelledby="partners-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="partners-heading" className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
              S kým porovnáváme
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10 text-lg">
              Vstupenky neprodáváme – pouze zobrazujeme nabídky těchto partnerů na jednom místě.
            </p>
            <div className="bg-secondary rounded-2xl border-2 border-border p-8 md:p-10 mb-12 max-w-3xl mx-auto">
              <h3 className="font-bold text-foreground text-lg mb-4 flex items-center gap-2">
                <Ticket className="w-5 h-5 text-accent" aria-hidden="true" />
                Co přesně porovnáváme?
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                  Ceny vstupenek („od“) u každého partnera
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                  Dostupnost a odkaz na web partnera
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                  Koncerty, festivaly, sport, divadlo na jednom místě
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                  Nákup probíhá u vybraného partnera – my pouze porovnáváme
                </li>
              </ul>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {partnerNames.map((p) => (
                <span
                  key={p}
                  className="px-6 py-3.5 bg-card border-2 border-border rounded-xl font-semibold text-foreground shadow-sm hover:border-accent/50 hover:shadow-md transition-all"
                >
                  {p}
                </span>
              ))}
            </div>
            <p className="text-center mt-12">
              <Link href="/partneri" className="inline-flex items-center gap-1 text-accent font-semibold hover:underline">
                Více o partnerech <ChevronRight className="w-4 h-4" />
              </Link>
            </p>
          </div>
        </section>

        {/* O nás – dvousloupcový layout: text + minikarty statistik */}
        <section className="py-20 lg:py-28 px-4 bg-secondary" aria-labelledby="about-us-heading">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 id="about-us-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-5">
                  O nás
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                  Vstupenkyalert je nezávislá česká služba pro porovnání cen vstupenek. Naším cílem je, abyste nemuseli prohlížet desítky stránek – na jednom místě uvidíte nejvýhodnější nabídky, zdarma a bez registrace.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                  Vstupenky neprodáváme. Pouze porovnáváme ceny u partnerů. Nákup vždy probíhá u vybraného partnera.
                </p>
                <Link
                  href="/o-nas"
                  className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
                >
                  <Users className="w-5 h-5" /> Více o nás
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {["6+ partnerů", "0 Kč poplatek", "100 % nezávislé"].map((t) => (
                  <div
                    key={t}
                    className="bg-card rounded-2xl p-6 border-2 border-border text-center shadow-sm"
                  >
                    <p className="font-bold text-foreground text-base leading-tight">{t}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ – přepracovaný vzhled */}
        <section className="py-20 lg:py-28 px-4 bg-background" aria-labelledby="faq-heading">
          <div className="max-w-3xl mx-auto">
            <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Časté dotazy
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="bg-card border-2 border-border rounded-2xl overflow-hidden group"
                >
                  <summary className="px-6 py-5 font-semibold text-foreground cursor-pointer list-none flex items-center justify-between gap-3">
                    {faq.q}
                    <span className="shrink-0 text-accent group-open:rotate-90 transition-transform">
                      <ChevronRight className="w-5 h-5" />
                    </span>
                  </summary>
                  <div className="px-6 pb-5 pt-0 border-t border-border">
                    <p className="text-muted-foreground leading-relaxed pt-4">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
