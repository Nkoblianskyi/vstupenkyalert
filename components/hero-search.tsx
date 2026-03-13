"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"

export default function HeroSearch() {
  const [query, setQuery] = useState("")
  const router = useRouter()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const trimmed = query.trim()
    if (trimmed) {
      router.push(`/udalosti?q=${encodeURIComponent(trimmed)}`)
    } else {
      router.push("/udalosti")
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3"
      role="search"
      aria-label="Vyhledávání událostí"
    >
      <label htmlFor="hero-search" className="sr-only">
        Hledat událost
      </label>
      <div className="relative flex-1">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" aria-hidden="true" />
        <input
          id="hero-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Událost, interpret, místo…"
          className="w-full pl-12 pr-4 py-4 rounded-xl bg-card border-2 border-border text-foreground text-base placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
        />
      </div>
      <button
        type="submit"
        className="px-8 py-4 bg-accent text-accent-foreground rounded-xl text-base font-bold hover:opacity-90 transition-opacity whitespace-nowrap"
      >
        Hledat
      </button>
    </form>
  )
}
