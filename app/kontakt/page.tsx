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
        <section
          className="relative py-20 md:py-28 px-4 bg-primary"
          style={{ backgroundImage: "url(/images/hero-bg.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-primary/85" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
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
            <div className="bg-card border-2 border-border rounded-2xl p-8 md:p-10 shadow-lg">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Send className="w-6 h-6 text-accent" /> Odeslat zprávu
              </h2>
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
                  className="px-8 py-4 rounded-xl bg-accent text-accent-foreground text-base font-bold hover:opacity-90 transition-opacity"
                >
                  Odeslat
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="bg-card border-2 border-border rounded-2xl p-8 shadow-sm flex gap-5 items-start">
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/15 text-accent shrink-0">
                  <Mail className="w-7 h-7" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-2">E-mail</h3>
                  <a href="mailto:info@vstupenkyalert.com" className="text-accent font-semibold hover:underline text-lg">
                    info@vstupenkyalert.com
                  </a>
                </div>
              </div>
              <div className="bg-card border-2 border-border rounded-2xl p-8 shadow-sm flex gap-5 items-start">
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/15 text-accent shrink-0">
                  <Clock className="w-7 h-7" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-2">Čas odpovědi</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Obvykle odpovídáme do 1–2 pracovních dnů.
                  </p>
                </div>
              </div>
              <div className="bg-card border-2 border-border rounded-2xl p-8 shadow-sm flex gap-5 items-start">
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/15 text-accent shrink-0">
                  <MapPin className="w-7 h-7" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-2">Adresa kanceláře (Maďarsko)</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Office Center Budapest<br />
                    Váci út 45.<br />
                    1134 Budapest<br />
                    Maďarsko
                  </p>
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
            className="bg-card border-2 border-border rounded-2xl shadow-2xl p-10 max-w-md w-full text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center mb-6">
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
              className="px-8 py-3 rounded-xl bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
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
