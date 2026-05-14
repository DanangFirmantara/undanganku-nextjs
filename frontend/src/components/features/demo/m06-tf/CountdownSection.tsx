"use client"

import { useEffect, useRef } from "react"

const TARGET = new Date("2025-06-14T08:00:00+07:00").getTime()

function pad(n: number): string {
  return String(Math.max(0, Math.floor(n))).padStart(2, "0")
}

export function CountdownSection() {
  const daysRef = useRef<HTMLDivElement>(null)
  const hoursRef = useRef<HTMLDivElement>(null)
  const minsRef = useRef<HTMLDivElement>(null)
  const secsRef = useRef<HTMLDivElement>(null)
  const lastRef = useRef<Record<string, string>>({})

  useEffect(() => {
    const refs = { d: daysRef, h: hoursRef, m: minsRef, s: secsRef } as const

    function tick() {
      let diff = Math.max(0, TARGET - Date.now())
      const d = Math.floor(diff / 86400000); diff -= d * 86400000
      const h = Math.floor(diff / 3600000);  diff -= h * 3600000
      const m = Math.floor(diff / 60000);    diff -= m * 60000
      const s = Math.floor(diff / 1000)

      const next: Record<string, string> = { d: pad(d), h: pad(h), m: pad(m), s: pad(s) }

      for (const k of ["d", "h", "m", "s"] as const) {
        if (next[k] !== lastRef.current[k]) {
          const el = refs[k].current
          if (el) {
            el.textContent = next[k]
            el.classList.add("tick")
            setTimeout(() => el.classList.remove("tick"), 280)
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
    <section className="m06tf-countdown">
      <div className="m06tf-countdown-title reveal">Menuju Hari Bahagia</div>
      <div className="m06tf-countdown-date-text reveal d1">Sabtu, 14 Juni 2025</div>
      <div className="gold-line reveal d2" style={{ background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.4) 20%,rgba(255,255,255,0.4) 80%,transparent)" }} />

      <div className="m06tf-timer reveal d3" aria-live="polite" aria-label="Hitung mundur">
        <div className="m06tf-timer-cell">
          <div className="m06tf-timer-num" ref={daysRef}>00</div>
          <div className="m06tf-timer-lbl">Hari</div>
        </div>
        <div className="m06tf-timer-cell">
          <div className="m06tf-timer-num" ref={hoursRef}>00</div>
          <div className="m06tf-timer-lbl">Jam</div>
        </div>
        <div className="m06tf-timer-cell">
          <div className="m06tf-timer-num" ref={minsRef}>00</div>
          <div className="m06tf-timer-lbl">Menit</div>
        </div>
        <div className="m06tf-timer-cell">
          <div className="m06tf-timer-num" ref={secsRef}>00</div>
          <div className="m06tf-timer-lbl">Detik</div>
        </div>
      </div>
    </section>
  )
}
