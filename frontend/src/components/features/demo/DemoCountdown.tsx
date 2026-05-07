"use client"

import { useEffect, useRef } from "react"

const TARGET = new Date("2026-08-17T08:00:00+07:00").getTime()

function pad(n: number): string {
  return String(Math.max(0, Math.floor(n))).padStart(2, "0")
}

export function DemoCountdown() {
  const daysRef = useRef<HTMLDivElement>(null)
  const hoursRef = useRef<HTMLDivElement>(null)
  const minsRef = useRef<HTMLDivElement>(null)
  const secsRef = useRef<HTMLDivElement>(null)
  const lastRef = useRef<Record<string, string>>({})

  useEffect(() => {
    const refs = {
      d: daysRef,
      h: hoursRef,
      m: minsRef,
      s: secsRef,
    } as const

    function tick() {
      let diff = Math.max(0, TARGET - Date.now())
      const d = Math.floor(diff / 86400000); diff -= d * 86400000
      const h = Math.floor(diff / 3600000);  diff -= h * 3600000
      const m = Math.floor(diff / 60000);    diff -= m * 60000
      const s = Math.floor(diff / 1000)

      const next: Record<string, string> = {
        d: pad(d), h: pad(h), m: pad(m), s: pad(s),
      }

      for (const k of ["d", "h", "m", "s"] as const) {
        if (next[k] !== lastRef.current[k]) {
          const el = refs[k].current
          if (el) {
            el.textContent = next[k]
            el.classList.add("tick")
            setTimeout(() => el.classList.remove("tick"), 320)
          }
        }
      }
      lastRef.current = next
    }

    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="countdown">
      <div className="diamond-row bright reveal">◆ ◇ ◆ ◇ ◆</div>
      <div
        className="label reveal d1"
        style={{ color: "var(--demo-gold-bright)", marginTop: "14px" }}
      >
        MENUJU&nbsp;HARI&nbsp;BAHAGIA
      </div>

      <div className="qoute-arabic reveal d2">
        وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا
      </div>
      <div className="qoute-tr reveal d2">
        (QS. Ar-Rum: 21) — Di antara tanda-tanda kebesaran-Nya ialah Dia
        menciptakan pasangan untukmu
      </div>

      <div className="gold-line reveal d3"></div>

      <div className="timer reveal d3">
        <div className="cell">
          <div className="num" ref={daysRef}>00</div>
          <div className="lbl">Hari</div>
        </div>
        <div className="cell">
          <div className="num" ref={hoursRef}>00</div>
          <div className="lbl">Jam</div>
        </div>
        <div className="cell">
          <div className="num" ref={minsRef}>00</div>
          <div className="lbl">Menit</div>
        </div>
        <div className="cell">
          <div className="num" ref={secsRef}>00</div>
          <div className="lbl">Detik</div>
        </div>
      </div>
      <div className="countdown-date reveal d4">Senin, 17 Agustus 2026</div>
    </section>
  )
}
