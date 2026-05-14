"use client"

import { useEffect, useState } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const TARGET_DATE = new Date("2027-12-28T08:00:00+07:00")

function calcTimeLeft(): TimeLeft {
  const diff = TARGET_DATE.getTime() - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function pad(n: number): string {
  return String(n).padStart(2, "0")
}

export function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calcTimeLeft)

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calcTimeLeft()), 1000)
    return () => clearInterval(timer)
  }, [])

  const units = [
    { label: "Hari", value: timeLeft.days },
    { label: "Jam", value: timeLeft.hours },
    { label: "Menit", value: timeLeft.minutes },
    { label: "Detik", value: timeLeft.seconds },
  ]

  return (
    <section className="m06tf2-section flex flex-col items-center text-center border-t border-[rgba(201,169,110,0.15)]">
      <p
        className="m06tf2-script text-4xl mb-1"
        aria-label="Save The Date"
      >
        Save The Date
      </p>
      <div className="m06tf2-divider" />
      <p className="text-[#FFFCF3] text-xs tracking-widest uppercase mt-3 mb-6 opacity-70">
        28 Desember 2027
      </p>

      <div className="flex gap-3 justify-center flex-wrap">
        {units.map(({ label, value }) => (
          <div key={label} className="m06tf2-countdown-box">
            <div className="m06tf2-countdown-number" aria-live="polite" aria-atomic="true">
              {pad(value)}
            </div>
            <div className="m06tf2-countdown-label">{label}</div>
          </div>
        ))}
      </div>

      <button
        className="m06tf2-btn-outline mt-8 flex items-center gap-2"
        aria-label="Simpan tanggal ke kalender"
        onClick={() => {
          const url =
            "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Pernikahan+Putri+%26+Andika&dates=20271228T010000Z/20271228T060000Z&details=Akad+%26+Resepsi+Pernikahan+Putri+%26+Andika"
          window.open(url, "_blank", "noopener,noreferrer")
        }}
      >
        <span aria-hidden="true">📅</span> Simpan Tanggal
      </button>
    </section>
  )
}
