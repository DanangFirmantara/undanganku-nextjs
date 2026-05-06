"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

const TARGET_DATE = new Date("2025-12-15T08:45:00")

interface Countdown {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function calcCountdown(): Countdown {
  const diff = Math.max(0, TARGET_DATE.getTime() - Date.now())
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)
  return { days, hours, minutes, seconds }
}

const PETALS = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  left: `${10 + i * 9}%`,
  delay: `${i * 0.8}s`,
  duration: `${6 + (i % 4)}s`,
  size: `${10 + (i % 3) * 4}px`,
}))

export function LandingHero() {
  const [countdown, setCountdown] = useState<Countdown>(calcCountdown)
  const [parallax, setParallax] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setCountdown(calcCountdown()), 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const onScroll = () => setParallax(window.scrollY * 0.15)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const pad = (n: number) => String(n).padStart(2, "0")

  return (
    <section className="hero-section">
      {PETALS.map((p) => (
        <div
          key={p.id}
          className="petal"
          style={{ left: p.left, bottom: "-20px", animationDelay: p.delay, animationDuration: p.duration, width: p.size, height: p.size }}
        />
      ))}

      <div className="hero-inner">
        <div>
          <div className="hero-badge">
            {"★★★★★"} &nbsp; DIPERCAYA 2.400+ PASANGAN
          </div>
          <h1 className="hero-title">
            Undangan Pernikahan yang <span>Dikenang Selamanya</span>
          </h1>
          <p className="hero-sub">
            Buat undangan pernikahan digital yang elegan dan berkesan dalam hitungan menit. Bagikan ke semua tamu dengan mudah melalui WhatsApp dan media sosial.
          </p>
          <div className="hero-actions">
            <Link href="/login" className="btn-gold">Buat Undanganmu</Link>
            <button
              className="btn-outline-gold"
              onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}
            >
              Lihat Demo
            </button>
          </div>
        </div>

        <div className="hero-right">
          <div className="phone-wrap" style={{ transform: `translateY(${-parallax}px)`, transition: "transform 0.1s linear" }}>
            <Image
              src="/landing/phone-mockup.png"
              alt="Phone mockup undangan pernikahan"
              width={280}
              height={520}
              style={{ width: "100%", height: "auto", borderRadius: "24px", boxShadow: "0 20px 60px rgba(107,30,46,0.25)" }}
              priority
            />
            <div className="countdown-card">
              <div className="countdown-label">Menuju Hari Pernikahan</div>
              <div className="countdown-grid">
                <div className="countdown-item">
                  <span className="countdown-num">{pad(countdown.days)}</span>
                  <span className="countdown-unit">Hari</span>
                </div>
                <div className="countdown-sep">:</div>
                <div className="countdown-item">
                  <span className="countdown-num">{pad(countdown.hours)}</span>
                  <span className="countdown-unit">Jam</span>
                </div>
                <div className="countdown-sep">:</div>
                <div className="countdown-item">
                  <span className="countdown-num">{pad(countdown.minutes)}</span>
                  <span className="countdown-unit">Menit</span>
                </div>
                <div className="countdown-sep">:</div>
                <div className="countdown-item">
                  <span className="countdown-num">{pad(countdown.seconds)}</span>
                  <span className="countdown-unit">Detik</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
