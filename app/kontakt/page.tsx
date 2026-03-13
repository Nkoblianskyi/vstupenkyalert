"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Disclaimer from "@/components/disclaimer"
import { Mail, Clock, MapPin, CheckCircle, X, Send } from "lucide-react"

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

const empty: FormState = { name: "", email: "", subject: "", message: "" }

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(empty)
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [submitted, setSubmitted] = useState(false)

  function validate(): boolean {
    const e: Partial<FormState> = {}
    if (!form.name.trim()) e.name = "Jméno je povinné."
    if (!form.email.trim()) {
      e.email = "E-mail je povinný."
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Zadejte platnou e-mailovou adresu."
    }
    if (!form.subject.trim()) e.subject = "Předmět je povinný."
    if (!form.message.trim()) e.message = "Zpráva je povinná."
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setSubmitted(true)
    setForm(empty)
    setErrors({})
  }

  function handleChange(ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [ev.target.name]: ev.target.value }))
    setErrors((prev) => ({ ...prev, [ev.target.name]: undefined }))
  }

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
              Napište nám
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance">
              Kontakt
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Máte dotaz? Napište nám – obvykle odpovídáme do 1–2 pracovních dnů.
            </p>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 lg:px-8 pt-10">
          <Disclaimer />
        </div>

        <section className="max-w-6xl mx-auto px-4 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Formulář – karta s horním akcentem */}
            <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-lg">
              <div className="h-1.5 w-full bg-accent" aria-hidden="true" />
              <div className="p-8 md:p-10">
                <div className="flex items-baseline gap-3 mb-6">
                  <Send className="w-6 h-6 text-accent shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-0.5">Formulář</p>
                    <h2 className="text-2xl font-bold text-foreground">Odeslat zprávu</h2>
                  </div>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
                  {[
                    { name: "name" as const, label: "Jméno", type: "text", placeholder: "Jan Novák", autoComplete: "name" },
                    { name: "email" as const, label: "E-mail", type: "email", placeholder: "jan@example.cz", autoComplete: "email" },
                    { name: "subject" as const, label: "Předmět", type: "text", placeholder: "Předmět zprávy", autoComplete: "off" },
                  ].map((f) => (
                    <div key={f.name} className="flex flex-col gap-2">
                      <label htmlFor={f.name} className="text-sm font-semibold text-foreground">
                        {f.label} <span className="text-destructive">*</span>
                      </label>
                      <input
                        id={f.name}
                        name={f.name}
                        type={f.type}
                        value={form[f.name]}
                        onChange={handleChange}
                        placeholder={f.placeholder}
                        autoComplete={f.autoComplete}
                        aria-invalid={!!errors[f.name]}
                        aria-describedby={errors[f.name] ? `${f.name}-error` : undefined}
                        className={`px-4 py-3 rounded-xl border-2 text-base bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent ${
                          errors[f.name] ? "border-destructive" : "border-border"
                        }`}
                      />
                      {errors[f.name] && (
                        <p id={`${f.name}-error`} className="text-sm text-destructive">{errors[f.name]}</p>
                      )}
                    </div>
                  ))}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-semibold text-foreground">
                      Zpráva <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Napište svou zprávu…"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      className={`px-4 py-3 rounded-xl border-2 text-base bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-y ${
                        errors.message ? "border-destructive" : "border-border"
                      }`}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-sm text-destructive">{errors.message}</p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-accent text-accent-foreground text-base font-bold hover:opacity-90 transition-opacity"
                  >
                    Odeslat
                  </button>
                </form>
              </div>
            </div>

            {/* Info placky – kompaktní karty s levým akcentem */}
            <div className="space-y-4">
              <div className="flex items-baseline gap-4 mb-8">
                <span className="h-1 w-12 rounded-full bg-accent shrink-0" aria-hidden="true" />
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Kontaktní údaje</p>
              </div>

              <div className="flex rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:border-accent/30 transition-colors">
                <div className="w-1.5 shrink-0 bg-accent" aria-hidden="true" />
                <div className="flex gap-4 p-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Mail className="w-6 h-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-1">E-mail</h3>
                    <a href="mailto:info@vstupenkyalert.com" className="text-accent font-semibold hover:underline">
                      info@vstupenkyalert.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:border-accent/30 transition-colors">
                <div className="w-1.5 shrink-0 bg-accent" aria-hidden="true" />
                <div className="flex gap-4 p-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Clock className="w-6 h-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-1">Čas odpovědi</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Obvykle odpovídáme do 1–2 pracovních dnů.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:border-accent/30 transition-colors">
                <div className="w-1.5 shrink-0 bg-accent" aria-hidden="true" />
                <div className="flex gap-4 p-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <MapPin className="w-6 h-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-1">Adresa kanceláře</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Česko<br />
                      Praha<br />
                      Panská 1, 110 00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {submitted && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/60 backdrop-blur-sm"
          onClick={() => setSubmitted(false)}
        >
          <div
            className="bg-card border-2 border-border rounded-2xl shadow-2xl p-10 max-w-md w-full text-center overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-1.5 w-full bg-accent -mt-10 -mx-10 mb-6" aria-hidden="true" />
            <div className="flex justify-center mb-6 -mt-2">
              <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/15">
                <CheckCircle className="w-10 h-10 text-accent" aria-hidden="true" />
              </span>
            </div>
            <h2 id="success-title" className="text-2xl font-bold text-foreground mb-3">
              Zpráva odeslána
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Děkujeme! Odpovíme na <strong className="text-foreground">info@vstupenkyalert.com</strong>, obvykle do 1–2 pracovních dnů.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-8 py-3 rounded-full bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Zavřít
            </button>
          </div>
          <button
            onClick={() => setSubmitted(false)}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2"
            aria-label="Zavřít"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  )
}
