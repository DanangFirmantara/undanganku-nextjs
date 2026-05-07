"use client"

import { useState } from "react"

interface BankCardProps {
  bankName: string
  accountNumber: string
  displayNumber: string
  accountHolder: string
  revealClass: string
}

function BankCard({ bankName, accountNumber, displayNumber, accountHolder, revealClass }: BankCardProps) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(accountNumber)
    } catch {
      // fallback: no-op if clipboard API unavailable
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  return (
    <div className={`bank-card ${revealClass}`}>
      <div className="bank-name">{bankName}</div>
      <div className="bank-num">{displayNumber}</div>
      <div className="bank-holder">a.n. {accountHolder}</div>
      <button
        className={`copy-btn${copied ? " copied" : ""}`}
        onClick={handleCopy}
      >
        {copied ? "✓ Tersalin" : "[ Salin Nomor Rekening ]"}
      </button>
    </div>
  )
}

export function DemoAmplop() {
  return (
    <section className="amplop">
      <div className="diamond-row reveal">◆ ─ ◆ ─ ◆</div>
      <div className="section-title maroon reveal d1">Kirim Hadiah</div>
      <p className="body-text reveal d2">
        Bagi yang ingin memberikan hadiah, kami menerima melalui transfer:
      </p>

      <BankCard
        bankName="Bank Mandiri"
        accountNumber="1230005678901"
        displayNumber="1230 0056 7890 1"
        accountHolder="Rafi Aulia Putra"
        revealClass="reveal d3"
      />

      <BankCard
        bankName="BCA"
        accountNumber="0987001234"
        displayNumber="0987 0012 34"
        accountHolder="Nadia Rahmadhani"
        revealClass="reveal d4"
      />

      <p className="amplop-note reveal d5">
        Konfirmasi transfer tidak diperlukan. Kehadiran Anda adalah hadiah
        terbaik kami.
      </p>
    </section>
  )
}
