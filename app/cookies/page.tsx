import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

const cookieTypes = [
  { name: "Nezbytné cookies", desc: "Potřebné pro základní fungování webu. Nelze je vypnout. Neukládají osobní údaje.", examples: "Relace, bezpečnostní token", duration: "Do konce relace" },
  { name: "Analytické cookies", desc: "Pomáhají pochopit, jak návštěvníci stránku používají. Údaje jsou anonymizované.", examples: "Návštěvnost stránek, statistiky použití", duration: "Nejvýše 26 měsíců" },
  { name: "Funkční cookies", desc: "Používáme je pro některé personalizované funkce (např. zapamatování nastavení).", examples: "Uložení preferencí", duration: "Nejvýše 1 rok" },
]

export default function CookiesPage() {
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
              Cookies
            </h1>
            <p className="text-white/90">Naposledy aktualizováno: 2026</p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 lg:px-8 py-14">
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-12 text-base">
              Vstupenkyalert (vstupenkyalert.com) používá cookies pro správné fungování a rozvoj služby. Níže stručně shrnujeme, jaké cookies používáme a k čemu.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-8 mt-14">
              Jaké cookies používáme?
            </h2>

            <div className="space-y-8 mb-14">
              {cookieTypes.map((ct) => (
                <article key={ct.name} className="bg-card border-2 border-border rounded-2xl p-8 shadow-sm">
                  <h3 className="text-xl font-bold text-foreground mb-3">{ct.name}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-5">{ct.desc}</p>
                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <div><dt className="text-muted-foreground font-medium">Příklady:</dt><dd className="text-foreground font-medium">{ct.examples}</dd></div>
                    <div><dt className="text-muted-foreground font-medium">Uchovávání:</dt><dd className="text-foreground font-medium">{ct.duration}</dd></div>
                  </dl>
                </article>
              ))}
            </div>

            <article className="bg-secondary rounded-2xl p-8 border-2 border-border">
              <h2 className="text-xl font-bold text-foreground mb-4">Správa cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Ve většině prohlížečů lze cookies spravovat v nastavení. Vypnutí nezákladních cookies může ovlivnit některé funkce.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                V případě dotazů pište na{" "}
                <Link href="mailto:info@vstupenkyalert.com" className="text-accent font-semibold hover:underline">
                  info@vstupenkyalert.com
                </Link>
                .
              </p>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
