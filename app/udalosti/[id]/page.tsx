import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar, MapPin, Info, Ticket, ExternalLink } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import EventCard from "@/components/event-card"
import { allEvents, getEventById, getEventDescription, partners } from "@/lib/events"

function getPartnerPrices(priceFrom: number) {
  const base = priceFrom
  return partners.map((p, i) => ({
    name: p.name,
    price: Math.round(base * (0.92 + (i % 5) * 0.04) / 100) * 100,
  }))
}

export default async function EventPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const eventId = parseInt(id, 10)
  if (Number.isNaN(eventId)) notFound()

  const event = getEventById(eventId)
  if (!event) notFound()

  const description = getEventDescription(event.id)
  const partnerPrices = getPartnerPrices(event.priceFrom)
  const lowestPrice = Math.min(...partnerPrices.map((r) => r.price))
  const related = allEvents.filter((e) => e.id !== event.id).slice(0, 3)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section
          className="relative min-h-[380px] md:min-h-[450px] flex flex-col justify-end bg-primary"
          aria-label={event.title}
          style={{ backgroundImage: `url(${event.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-primary/60 to-transparent" />
          <div className="relative z-10 max-w-6xl mx-auto w-full px-4 lg:px-8 pb-10 pt-24">
            <Link href="/udalosti" className="inline-flex items-center gap-2 text-sm text-white/90 hover:text-white mb-5 w-fit font-medium">
              <ArrowLeft className="w-4 h-4" /> Všechny události
            </Link>
            <span className="inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-foreground mb-4">
              {event.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-balance mb-4 drop-shadow-md">
              {event.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-white/95 text-base">
              <span className="flex items-center gap-2"><Calendar className="w-5 h-5 shrink-0" /> {event.date}</span>
              <span className="flex items-center gap-2"><MapPin className="w-5 h-5 shrink-0" /> {event.venue}</span>
            </div>
          </div>
        </section>

        <div className="bg-foreground text-background py-4 px-4" role="complementary" aria-label="Upozornění">
          <div className="max-w-6xl mx-auto flex items-center gap-3 text-sm">
            <Info className="w-5 h-5 text-accent shrink-0" />
            <span>Vstupenkyalert je nezávislá porovnávací služba. Neprodáváme vstupenky. Nákup probíhá u vybraného partnera.</span>
          </div>
        </div>

        <section className="max-w-6xl mx-auto px-4 lg:px-8 py-14" aria-labelledby="about-heading">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 id="about-heading" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Info className="w-6 h-6 text-accent" /> O události
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{description}</p>
            </div>
            <div className="bg-secondary rounded-2xl p-8 border-2 border-border">
              <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-6">Detaily</h3>
              <dl className="space-y-5">
                <div><dt className="text-xs text-muted-foreground mb-1">Datum</dt><dd className="font-semibold text-foreground text-lg">{event.date}</dd></div>
                <div><dt className="text-xs text-muted-foreground mb-1">Místo</dt><dd className="font-semibold text-foreground text-lg">{event.venue}</dd></div>
                <div><dt className="text-xs text-muted-foreground mb-1">Kategorie</dt><dd className="font-semibold text-foreground text-lg">{event.category}</dd></div>
              </dl>
            </div>
          </div>
        </section>

        <section className="bg-secondary py-16 px-4" aria-labelledby="tickets-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="tickets-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-2 flex items-center gap-2">
              <Ticket className="w-7 h-7 text-accent" /> Porovnání cen
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl">
              Vstupenkyalert neprodává vstupenky – porovnáváme ceny u partnerů. Po výběru nejvýhodnější nabídky proběhne nákup na webu partnera.
            </p>
            <div className="flex flex-wrap items-baseline gap-2 mb-8">
              <span className="text-xl text-muted-foreground">Nejlepší cena:</span>
              <span className="text-3xl md:text-4xl font-bold text-accent">{lowestPrice.toLocaleString("cs-CZ")} Kč</span>
              <span className="text-muted-foreground">od</span>
            </div>
            <div className="overflow-hidden rounded-2xl border-2 border-border bg-card shadow-lg">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-border bg-muted/50">
                    <th className="px-6 py-4 font-bold text-foreground">Partner</th>
                    <th className="px-6 py-4 font-bold text-foreground text-right">Cena od</th>
                    <th className="w-32 px-6 py-4" aria-hidden />
                  </tr>
                </thead>
                <tbody>
                  {partnerPrices.map((row, i) => {
                    const partner = partners[i]
                    const isLowest = row.price === lowestPrice
                    return (
                      <tr key={row.name} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                        <td className="px-6 py-4">
                          <span className="font-semibold text-foreground">{row.name}</span>
                          <span className="ml-2 text-sm text-muted-foreground">({partner.specialty})</span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <span className={isLowest ? "font-bold text-accent text-lg" : "font-semibold text-foreground"}>
                            {row.price.toLocaleString("cs-CZ")} Kč
                          </span>
                          {isLowest && <span className="ml-2 text-xs font-bold text-accent bg-accent/15 px-2 py-0.5 rounded">nejlepší</span>}
                        </td>
                        <td className="px-6 py-4">
                          <a
                            href={partner.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground hover:opacity-90 transition-opacity"
                          >
                            Nabídka <ExternalLink className="w-4 h-4" />
                          </a>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="max-w-6xl mx-auto px-4 lg:px-8 py-16" aria-labelledby="more-heading">
            <h2 id="more-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-8">Další události</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((e) => (
                <EventCard key={e.id} event={e} size="compact" />
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  )
}
