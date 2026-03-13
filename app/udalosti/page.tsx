"use client"

import { useState, useMemo, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Search, SlidersHorizontal } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Disclaimer from "@/components/disclaimer"
import EventCard from "@/components/event-card"
import { allEvents } from "@/lib/events"

const categories = ["Vše", "Koncert", "Festival", "Sport", "Divadlo", "Jiné"]

function EventsPageSkeleton() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-24 px-4 bg-primary">
          <div className="absolute inset-0 bg-primary/80" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="h-12 w-64 mx-auto mb-4 rounded-2xl bg-white/20 animate-pulse" />
            <div className="h-6 w-96 mx-auto mb-8 rounded-xl bg-white/20 animate-pulse" />
            <div className="flex gap-2 max-w-xl mx-auto justify-center">
              <div className="flex-1 h-14 rounded-2xl bg-white/20 animate-pulse" />
              <div className="w-28 h-14 rounded-2xl bg-white/20 animate-pulse" />
            </div>
          </div>
        </section>
        <div className="max-w-6xl mx-auto px-4 pt-10"><Disclaimer /></div>
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-wrap gap-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-10 w-24 rounded-full bg-muted animate-pulse" />
          ))}
        </div>
        <section className="max-w-6xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-border">
                <div className="aspect-16/10 bg-muted animate-pulse" />
                <div className="p-5 space-y-3">
                  <div className="h-5 bg-muted rounded animate-pulse" />
                  <div className="h-4 w-2/3 bg-muted rounded animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function EventsPageContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const initialQ = searchParams.get("q") ?? ""
  const [query, setQuery] = useState(initialQ)
  const [activeCategory, setActiveCategory] = useState("Vše")

  const filtered = useMemo(() => {
    return allEvents.filter((e) => {
      const q = query.trim().toLowerCase()
      const matchesQ = q === "" || e.title.toLowerCase().includes(q) || e.venue.toLowerCase().includes(q) || e.category.toLowerCase().includes(q)
      const matchesCat = activeCategory === "Vše" || e.category === activeCategory
      return matchesQ && matchesCat
    })
  }, [query, activeCategory])

  function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    router.replace(`/udalosti?q=${encodeURIComponent(query.trim())}`, { scroll: false })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero – gradient bez fotky, konzistentní s úvodem */}
        <section
          className="relative py-20 md:py-28 px-4 overflow-hidden"
          aria-label="Události"
        >
          <div
            className="absolute inset-0 z-0"
            style={{
              background: "linear-gradient(180deg, oklch(0.20 0.07 255) 0%, oklch(0.22 0.06 258) 100%)",
            }}
          />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              Vyhledávání
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance">
              Události
            </h1>
            <p className="text-white/85 text-lg md:text-xl mb-10">
              Najděte akci a porovnejte ceny. Koncerty, festivaly, sport, divadlo – na jednom místě.
            </p>
            <form onSubmit={handleSearch} className="flex gap-3 max-w-xl mx-auto" role="search" aria-label="Vyhledávání">
              <label htmlFor="events-search" className="sr-only">Hledat</label>
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-foreground/50 pointer-events-none" aria-hidden="true" />
                <input
                  id="events-search"
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Událost, interpret, místo…"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/10 border-2 border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-base"
                />
              </div>
              <button type="submit" className="px-6 py-4 bg-accent text-accent-foreground rounded-2xl text-base font-bold hover:opacity-90 transition-opacity shrink-0">
                Hledat
              </button>
            </form>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 lg:px-8 pt-10">
          <Disclaimer />
        </div>

        {/* Filtry – segmentovaný vzhled (jeden celek), placky */}
        <div className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
          <div className="flex items-center gap-3 mb-4">
            <SlidersHorizontal className="w-5 h-5 text-accent" aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Kategorie</span>
          </div>
          <div
            className="inline-flex flex-wrap rounded-2xl border-2 border-border bg-muted/50 p-1 gap-1"
            role="group"
            aria-label="Kategorie"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-accent text-accent-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-card"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Seznam – titulka s plackou počet */}
        <section className="max-w-6xl mx-auto px-4 lg:px-8 py-12" aria-label="Seznam událostí">
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Výsledky</span>
            <span className="inline-flex items-center rounded-full bg-accent/15 px-3.5 py-1 text-sm font-bold text-accent">
              {filtered.length} událostí
            </span>
          </div>
          {filtered.length === 0 ? (
            <div className="text-center py-24 rounded-2xl border-2 border-dashed border-border bg-muted/30">
              <p className="text-muted-foreground text-lg font-medium">Žádné výsledky pro zadané podmínky.</p>
              <p className="text-sm text-muted-foreground mt-2">Zkuste jinou kategorii nebo vyhledávací výraz.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default function EventsPage() {
  return (
    <Suspense fallback={<EventsPageSkeleton />}>
      <EventsPageContent />
    </Suspense>
  )
}
