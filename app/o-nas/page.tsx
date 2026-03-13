import Header from "@/components/header"
import Footer from "@/components/footer"
import Disclaimer from "@/components/disclaimer"
import Link from "next/link"
import { ShieldCheck, Eye, Handshake, ArrowRight } from "lucide-react"

const values = [
  { icon: ShieldCheck, title: "Nezávislost", desc: "Nejsme v zájmové sféře žádného prodejce vstupenek. Objektivně porovnáváme nabídky, abyste mohli učinit nejlepší rozhodnutí." },
  { icon: Eye, title: "Transparentnost", desc: "Všechny ceny a partneři jsou zobrazeni otevřeně. Žádné skryté poplatky, žádné ovlivněné pořadí – jen fakta." },
  { icon: Handshake, title: "Důvěryhodnost", desc: "Spolupracujeme pouze s ověřenými a bezpečnými partnery. Bezpečnost uživatelů je na prvním místě." },
]

export default function AboutPage() {
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
              O platformě
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 text-balance">
              O nás
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed text-pretty max-w-2xl mx-auto">
              Vstupenkyalert je nezávislá platforma pro porovnání cen vstupenek. Naším cílem je zobrazit na jednom místě ceny u více partnerů, abyste si vybrali nejvýhodnější nabídku.
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 lg:px-8 py-10">
          <Disclaimer />
        </div>

        {/* Info sekce – titulka s čárou + dvousloupec, pravý blok = placky statistik */}
        <section className="max-w-6xl mx-auto px-4 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-baseline gap-4 mb-6">
                <span className="h-1 w-12 rounded-full bg-accent shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Platforma</p>
                  <h2 className="text-3xl font-bold text-foreground">
                    Co je Vstupenkyalert?
                  </h2>
                </div>
              </div>
              <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Nákup vstupenek bývá složitý: musíte procházet více stránek, ceny a podmínky se špatně porovnávají. Vstupenkyalert to zjednodušuje – na jednom přehledném místě shrneme nabídky více důvěryhodných partnerů, zdarma a bez registrace.
                </p>
                <p>
                  Vstupenky neprodáváme. Pouze porovnáváme. Nákup vždy probíhá u vybraného partnera.
                </p>
                <p>
                  Vstupenkyalert funguje na doméně vstupenkyalert.com a jako nezávislý poskytovatel není propojen s prodejní činností partnerů.
                </p>
              </div>
            </div>
            {/* Pravý sloupec – placky se statistikami */}
            <div className="rounded-2xl border-2 border-border bg-muted/30 p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">Stručně</p>
              <div className="space-y-6">
                {[
                  { value: "6+", label: "Porovnávaných partnerů" },
                  { value: "0 Kč", label: "Poplatek za použití" },
                  { value: "100 %", label: "Nezávislá platforma" },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center gap-4 rounded-xl bg-card border border-border px-5 py-4">
                    <span className="text-3xl md:text-4xl font-bold text-accent tabular-nums">{stat.value}</span>
                    <span className="text-muted-foreground font-medium">{stat.label}</span>
                  </div>
                ))}
              </div>
              <Link href="/kontakt" className="inline-flex items-center gap-2 mt-8 text-accent font-semibold hover:underline">
                Kontakt <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Hodnoty – titulka + karty s horním akcentem */}
        <section className="bg-muted/50 py-20 px-4" aria-labelledby="values-heading">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-baseline gap-4 mb-12">
              <span className="h-1 w-12 rounded-full bg-accent shrink-0" aria-hidden="true" />
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Hodnoty</p>
                <h2 id="values-heading" className="text-3xl font-bold text-foreground">
                  Naše hodnoty
                </h2>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300"
                >
                  <div className="h-1.5 w-full bg-accent" aria-hidden="true" />
                  <div className="p-8">
                    <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/15 text-accent mb-6">
                      <v.icon className="w-7 h-7" aria-hidden="true" />
                    </span>
                    <h3 className="font-bold text-foreground text-xl mb-3">{v.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
