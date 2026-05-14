"use client"

import { useState } from "react"
import Image from "next/image"

interface BankCardProps {
  bankLogo: string
  bankName: string
  accountNumber: string
  accountHolder: string
  revealClass: string
}

function BankCard({ bankLogo, bankName, accountNumber, accountHolder, revealClass }: BankCardProps) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(accountNumber)
    } catch {
      // no-op if clipboard API unavailable
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  return (
    <div className={`m06tf-bank-card ${revealClass}`}>
      <div className="m06tf-bank-card-top">
        <Image
          src={bankLogo}
          alt={`Logo ${bankName}`}
          width={60}
          height={28}
          className="m06tf-bank-logo"
          style={{ objectFit: "contain" }}
        />
        <span className="m06tf-bank-name">{bankName}</span>
      </div>
      <div className="m06tf-bank-number">{accountNumber}</div>
      <div className="m06tf-bank-holder">a.n. {accountHolder}</div>
      <button
        type="button"
        className={`m06tf-copy-btn${copied ? " copied" : ""}`}
        onClick={handleCopy}
        aria-label={`Salin nomor rekening ${bankName} ${accountHolder}`}
      >
        {copied ? "✓ Tersalin!" : "Salin Nomor Rekening"}
      </button>
      <Image
        src="/templates/m06-tf/chip-ilustration.png"
        alt=""
        width={80}
        height={80}
        className="m06tf-bank-chip"
        aria-hidden
      />
    </div>
  )
}

export function AmplopsSection() {
  return (
    <section className="m06tf-amplop">
      <div className="m06tf-section-label reveal">Hadiah</div>
      <div className="m06tf-section-title reveal d1">Amplop Digital</div>
      <div className="gold-line short reveal d2" />
      <p className="m06tf-amplop-sub reveal d2">
        Bagi yang ingin memberikan hadiah, dapat ditransfer ke rekening berikut:
      </p>

      <div className="m06tf-bank-cards">
        <BankCard
          bankLogo="/templates/m06-tf/bca.png"
          bankName="BCA"
          accountNumber="1234567890"
          accountHolder="Rizky Firmansyah"
          revealClass="reveal d3"
        />
        <BankCard
          bankLogo="/templates/m06-tf/bni.png"
          bankName="BNI"
          accountNumber="0987654321"
          accountHolder="Aulia Rahmawati"
          revealClass="reveal d4"
        />
        <BankCard
          bankLogo="/templates/m06-tf/bri.png"
          bankName="BRI"
          accountNumber="1122334455"
          accountHolder="Rizky Firmansyah"
          revealClass="reveal d5"
        />
      </div>
    </section>
  )
}
