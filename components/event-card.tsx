import Link from "next/link"
import { MapPin, Calendar, ArrowUpRight } from "lucide-react"

type Event = {
  id: number
  title: string
  date: string
  venue: string
  category: string
  priceFrom: number
  image: string
}

type EventCardProps = {
  event: Event
  size?: "default" | "compact"
}

export default function EventCard({ event, size = "default" }: EventCardProps) {
  const compact = size === "compact"

  return (
    <Link
      href={`/udalosti/${event.id}`}
      className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-2xl"
      aria-label={`${event.title} – od ${event.priceFrom.toLocaleString("cs-CZ")} Kč`}
    >
      <article className="h-full flex flex-col bg-card rounded-2xl overflow-hidden border-2 border-border shadow-sm hover:shadow-xl hover:border-accent/50 transition-all duration-300">
        {/* Obrázek – celá šířka nahoře */}
        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
          <img
            src={event.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute top-3 left-3 rounded-lg bg-primary/90 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-foreground">
            {event.category}
          </span>
          {!compact && (
            <span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-lg bg-card/95 px-3 py-2 text-sm font-bold text-accent backdrop-blur-sm">
              Od {event.priceFrom.toLocaleString("cs-CZ")} Kč
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          )}
        </div>

        {/* Obsah */}
        <div className="flex flex-1 flex-col p-5 min-w-0">
          <h2 className={`font-bold text-foreground leading-snug ${compact ? "text-base" : "text-lg md:text-xl"} line-clamp-2 mb-3`}>
            {event.title}
          </h2>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mt-auto">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 shrink-0 text-accent" aria-hidden="true" />
              {event.date}
            </span>
            <span className="flex items-center gap-1.5 min-w-0 truncate">
              <MapPin className="w-4 h-4 shrink-0 text-accent" aria-hidden="true" />
              <span className="truncate">{event.venue}</span>
            </span>
          </div>
          {compact && (
            <div className="mt-3 flex items-center justify-between gap-2">
              <span className="text-lg font-bold text-accent">
                od {event.priceFrom.toLocaleString("cs-CZ")} Kč
              </span>
              <span className="inline-flex items-center gap-1 rounded-lg bg-accent/15 px-3 py-1.5 text-sm font-semibold text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                Porovnat <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
          )}
        </div>
      </article>
    </Link>
  )
}
