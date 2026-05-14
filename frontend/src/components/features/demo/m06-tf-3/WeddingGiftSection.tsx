"use client"

import Image from "next/image"
import { useState } from "react"

interface BankAccount {
  bank: string
  logo: string
  account: string
  name: string
}

const ACCOUNTS: BankAccount[] = [
  { bank: "BCA", logo: "/templates/m06-tf/bca.png", account: "1829955600", name: "Putri Cantika Sari" },
  { bank: "BNI", logo: "/templates/m06-tf/bni.png", account: "0168472355", name: "Putra Andika Pratama" },
  { bank: "BRI", logo: "/templates/m06-tf/bri.png", account: "4303541468", name: "Putra Andika Pratama" },
]

function BankCard({ bank, logo, account, name }: BankAccount) {
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    void navigator.clipboard.writeText(account).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="m06tf3-bank-card">
      {/* Bank logo */}
      <div className="relative w-20 h-8">
        <Image
          src={logo}
          alt={`Logo ${bank}`}
          fill
          className="object-contain"
          sizes="80px"
        />
      </div>

      {/* Account info */}
      <div className="text-center">
        <p style={{ fontSize: "16px", color: "#844E49", fontWeight: 600, letterSpacing: "0.5px" }}>
          {account}
        </p>
        <p style={{ fontSize: "14px", color: "#333", lineHeight: "1.5em", marginTop: "4px" }}>
          {name}
        </p>
      </div>

      {/* Chip decoration */}
      <div className="relative w-24 h-6">
        <Image
          src="/templates/m06-tf/chip-ilustration.png"
          alt=""
          fill
          className="object-contain"
          style={{ opacity: 0.35 }}
          aria-hidden="true"
          sizes="96px"
        />
      </div>

      {/* Copy button */}
      <button
        className="m06tf3-btn"
        style={{ fontSize: "14px", padding: "8px 20px" }}
        onClick={handleCopy}
        aria-label={`Salin nomor rekening ${bank}`}
      >
        {copied ? "Tersalin!" : "Salin Nomor"}
      </button>
    </div>
  )
}

export function WeddingGiftSection() {
  return (
    <section
      className="m06tf3-sep flex flex-col items-center text-center"
      style={{ padding: "4em 2em", background: "linear-gradient(180deg,#FFFCF3 0%,#FAF8F8 100%)" }}
    >
      <p
        className="m06tf3-script"
        style={{ fontSize: "28px", letterSpacing: "0.5px" }}
        aria-label="Wedding Gift"
      >
        Wedding Gift
      </p>

      <div className="m06tf3-divider" style={{ margin: "12px auto 20px" }} />

      <p style={{ fontSize: "16px", color: "#333", lineHeight: "1.5em", maxWidth: "260px", marginBottom: "8px" }}>
        Doa Restu Anda merupakan karunia yang sangat berarti bagi kami.
      </p>
      <p style={{ fontSize: "16px", color: "#333", lineHeight: "1.5em", maxWidth: "260px", marginBottom: "32px" }}>
        Dan jika memberi adalah ungkapan tanda kasih, Anda dapat memberi
        melalui rekening di bawah ini.
      </p>

      <div className="flex flex-col gap-4 items-center w-full">
        {ACCOUNTS.map((acc) => (
          <BankCard key={acc.bank} {...acc} />
        ))}
      </div>
    </section>
  )
}
