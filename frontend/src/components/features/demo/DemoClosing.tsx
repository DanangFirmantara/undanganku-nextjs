"use client"

import { useState } from "react"

export function DemoClosing() {
  const [linkCopied, setLinkCopied] = useState(false)

  function handleShareWa() {
    const text = encodeURIComponent(
      "Undangan Pernikahan Rafi & Nadia — 17 Agustus 2026, Padang.\n" + window.location.href
    )
    window.open("https://wa.me/?text=" + text, "_blank")
  }

  async function handleCopyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href)
    } catch {
      // no-op
    }
    setLinkCopied(true)
    setTimeout(() => setLinkCopied(false), 1800)
  }

  return (
    <section className="closing">
      <div className="diamond-row bright reveal">◆ ◇ ◆ ◇ ◆ ◇ ◆</div>

      <div className="arabic dua-arabic reveal d1">
        بَارَكَ اللهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا
      </div>
      <div className="dua-tr reveal d1">Semoga Allah memberkahi kalian berdua</div>

      <div className="gold-line reveal d2"></div>

      <div className="closing-names reveal d2">Rafi &amp; Nadia</div>
      <div className="closing-tag reveal d3">#RafiNadia2026</div>

      <div className="share reveal d4">
        <button className="wa" onClick={handleShareWa}>
          📤&nbsp;&nbsp;Bagikan via WhatsApp
        </button>
        <button
          className={`lnk${linkCopied ? " copied" : ""}`}
          onClick={handleCopyLink}
        >
          {linkCopied ? "✓ Link Tersalin" : "🔗  Salin Link"}
        </button>
      </div>

      <div className="stamp reveal d5">
        Dibuat dengan UndanganKu · undanganku.id
      </div>

      <div className="corner-rule reveal d5">
        <span>◆</span>
        <span className="line"></span>
        <span>◆</span>
      </div>
    </section>
  )
}
