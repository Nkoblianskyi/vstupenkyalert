"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Domů" },
  { href: "/udalosti", label: "Události" },
  { href: "/partneri", label: "Partneři" },
  { href: "/o-nas", label: "O nás" },
  { href: "/kontakt", label: "Kontakt" },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header
      className="sticky top-0 z-50 border-b-2 bg-card/98 backdrop-blur-lg shadow-sm"
      style={{ borderColor: "var(--header-border)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 min-h-[4.5rem]">
          <Link href="/" className="flex items-center gap-3 group">
            <img src="/icon.svg" alt="Vstupenkyalert" width={40} height={40} className="rounded-xl" />
            <span className="text-xl font-bold text-foreground tracking-tight">
              Vstupenkyalert
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Hlavní navigace">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2.5 rounded-xl text-sm font-medium transition-all",
                  pathname === link.href
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            className="lg:hidden p-2.5 rounded-xl text-foreground hover:bg-muted transition-colors"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Zavřít menu" : "Otevřít menu"}
            aria-expanded={open}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="lg:hidden border-t bg-card px-4 py-4 flex flex-col gap-1"
          style={{ borderColor: "var(--header-border)" }}
          aria-label="Mobilní navigace"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "px-4 py-3 rounded-xl text-base font-medium transition-colors",
                pathname === link.href ? "bg-accent/15 text-accent" : "text-foreground hover:bg-muted"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
