import { Info } from "lucide-react"

type DisclaimerProps = {
  variant?: "default" | "hero"
}

export default function Disclaimer({ variant = "default" }: DisclaimerProps) {
  const isHero = variant === "hero"

  return (
    <div
      className={
        isHero
          ? "w-full border-b-2 border-accent bg-primary shadow-md"
          : "bg-accent/10 border-2 border-accent/30 rounded-2xl px-5 py-4 flex gap-3 items-start text-sm leading-relaxed"
      }
    >
      <div className={isHero ? "max-w-6xl mx-auto px-4 lg:px-8 py-5 lg:py-6 flex gap-4 lg:gap-6 items-start" : "flex gap-3 items-start"}>
        <div
          className={
            isHero
              ? "shrink-0 w-11 h-11 lg:w-12 lg:h-12 rounded-xl bg-white/15 flex items-center justify-center"
              : "shrink-0"
          }
        >
          <Info
            className={isHero ? "w-5 h-5 lg:w-6 lg:h-6 text-white" : "w-5 h-5 mt-0.5 text-foreground"}
            aria-hidden="true"
          />
        </div>
        <div className="min-w-0">
          {isHero && (
            <p className="text-sm lg:text-base font-bold text-white uppercase tracking-wide mb-1.5">
              Důležité upozornění
            </p>
          )}
          <p className={isHero ? "text-sm lg:text-base text-white leading-relaxed max-w-4xl" : "text-foreground leading-relaxed"}>
            {isHero ? (
              <>
                <strong className="font-semibold text-white">Vstupenkyalert</strong> je nezávislá služba pro porovnání cen vstupenek.{" "}
                <strong className="font-bold text-white">Neprodáváme vstupenky.</strong> Porovnáváme ceny našich partnerů (např. Ticketmaster, Eventim, StubHub, Slevomat). Kliknutím na tlačítko „Nabídka“ přejdete na web partnera; nákup probíhá výhradně u partnera.
              </>
            ) : (
              <>
                <strong className="font-semibold text-foreground">Vstupenkyalert</strong> je nezávislá služba pro porovnání cen vstupenek.{" "}
                <strong className="font-bold text-foreground">Neprodáváme vstupenky.</strong> Porovnáváme ceny našich partnerů (např. Ticketmaster, Eventim, StubHub, Slevomat). Kliknutím na tlačítko „Nabídka“ přejdete na web partnera; nákup probíhá výhradně u partnera.
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  )
}
