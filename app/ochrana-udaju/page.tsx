import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

const sections = [
  { title: "1. Správce údajů", body: "Vstupenkyalert (dále „my\", „poskytovatel\") provozuje web vstupenkyalert.com. Kontakt: info@vstupenkyalert.com." },
  { title: "2. Jaké údaje zpracováváme?", body: "Při vyplnění kontaktního formuláře zpracováváme jméno a e-mail pro odpověď na dotaz. Automaticky a v anonymizované formě sbíráme údaje o návštěvnosti (např. zobrazení stránek) pro zajištění fungování služby a plnění zákonných povinností." },
  { title: "3. Využití údajů", body: "Údaje využíváme výhradně k odpovídání na dotazy, provozu webu a v souladu se zákonem. Údaje neprodáváme třetím stranám." },
  { title: "4. Uchovávání údajů", body: "Údaje vztahující se ke kontaktním zprávám uchováváme nejvýše 2 roky. Anonymizovaná analytická data nejvýše 26 měsíců." },
  { title: "5. Vaše práva", body: "Podle GDPR máte právo na přístup ke svým osobním údajům, jejich opravu, výmaz nebo omezení zpracování. Žádost můžete zaslat na info@vstupenkyalert.com." },
  { title: "6. Cookies", body: "Podrobnosti o cookies najdete na stránce Cookies." },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section
          className="relative py-20 md:py-28 px-4 bg-primary"
          style={{ backgroundImage: "url(/images/hero-bg.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-primary/85" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 text-balance">
              Ochrana osobních údajů
            </h1>
            <p className="text-white/90">Naposledy aktualizováno: 2026</p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 lg:px-8 py-14">
          <div className="space-y-10">
            {sections.map((section) => (
              <article key={section.title} className="bg-card border-2 border-border rounded-2xl p-8 shadow-sm">
                <h2 className="text-xl font-bold text-foreground mb-4">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-12 text-center text-muted-foreground">
            <Link href="/cookies" className="text-accent font-semibold hover:underline">Informace o cookies</Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
