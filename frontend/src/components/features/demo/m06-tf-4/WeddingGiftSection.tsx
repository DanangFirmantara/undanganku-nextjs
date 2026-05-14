"use client"

import { useState } from "react"

interface BankAccount {
  bank: string
  number: string
  name: string
}

const ACCOUNTS: BankAccount[] = [
  { bank: "BCA", number: "1234 5678 90", name: "Putri Cantika Sari" },
  { bank: "Mandiri", number: "0987 6543 21", name: "Putra Andika Pratama" },
]

export function WeddingGiftSection() {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState<string | null>(null)

  function handleCopy(number: string) {
    void navigator.clipboard.writeText(number.replace(/\s/g, "")).then(() => {
      setCopied(number)
      setTimeout(() => setCopied(null), 2000)
    })
  }

  return (
    <section className="m06tf4-section flex flex-col items-center text-center">
      <p className="m06tf4-script text-4xl mb-1 reveal" aria-label="Wedding Gift">
        Wedding Gift
      </p>
      <div className="m06tf4-divider reveal d1" aria-hidden="true" />

      <p
        className="text-sm leading-relaxed opacity-65 max-w-[260px] mt-5 mb-2 reveal d1"
        style={{ color: "#555" }}
      >
        Doa restu Anda merupakan karunia yang sangat berarti bagi kami.
      </p>
      <p
        className="text-sm leading-relaxed opacity-55 max-w-[260px] mb-8 reveal d2"
        style={{ color: "#555" }}
      >
        Dan jika memberi adalah ungkapan tanda kasih, Anda dapat memberi melalui
        rekening di bawah ini.
      </p>

      {/* Toggle button */}
      <button
        className="m06tf4-btn flex items-center gap-2 reveal d3"
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        aria-controls="gift-panel"
      >
        <span aria-hidden="true">🎁</span>
        {isOpen ? "Tutup" : "Klik di Sini"}
      </button>

      {/* Collapsible panel */}
      <div
        id="gift-panel"
        className={`m06tf4-gift-panel w-full max-w-[300px] mt-4 ${isOpen ? "open" : ""}`}
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col gap-3">
          {ACCOUNTS.map((acc) => (
            <div
              key={acc.bank}
              className="m06tf4-event-card flex flex-col items-start gap-1 text-left"
            >
              <p
                className="text-xs tracking-[0.15em] uppercase font-medium mb-1"
                style={{ color: "#844E49" }}
              >
                {acc.bank}
              </p>
              <p
                className="text-lg font-bold tracking-wider"
                style={{ fontFamily: "var(--font-cormorant), serif", color: "#333" }}
              >
                {acc.number}
              </p>
              <p className="text-xs opacity-55" style={{ color: "#555" }}>
                a.n {acc.name}
              </p>
              <button
                className="m06tf4-btn-outline text-xs mt-2"
                style={{ padding: "0.4rem 1rem" }}
                onClick={() => handleCopy(acc.number)}
                aria-label={`Salin nomor rekening ${acc.bank}`}
              >
                {copied === acc.number ? "✓ Tersalin!" : "Salin Nomor"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
