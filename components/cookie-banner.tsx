"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Cookie, X } from "lucide-react"

const STORAGE_KEY = "vstupenkyalert-cookie-consent"

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted")
    setVisible(false)
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, "declined")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Informace o cookies"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 rounded-2xl border-2 shadow-2xl overflow-hidden bg-card"
      style={{ borderColor: "var(--accent)" }}
    >
      <div className="p-5 md:p-6">
        <div className="flex items-start gap-4">
          <div className="min-w-0 flex-1">
            <h3 className="text-base font-bold text-foreground mb-1">Používání cookies</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Vstupenkyalert používá cookies pro správné fungování a analýzu návštěvnosti. Podrobnosti:{" "}
              <Link href="/cookies" className="text-accent font-medium hover:underline">
                Informace o cookies
              </Link>
              .
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-5">
          <button
            onClick={decline}
            className="px-4 py-2.5 rounded-xl text-sm font-medium border-2 border-border text-foreground hover:bg-muted transition-colors"
          >
            Odmítnout
          </button>
          <button
            onClick={accept}
            className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-accent text-accent-foreground hover:opacity-90 transition-opacity"
          >
            Přijmout
          </button>
        </div>
      </div>
    </div>
  )
}
