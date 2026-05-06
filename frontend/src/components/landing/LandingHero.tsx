"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

const TARGET_DATE = new Date("2025-12-15T08:45:00")

const PETALS = Array.from({ length: 10 }, (_, i) => ({
  left: `${6 + i * 9}%`,
  animationDelay: `${(i * 2.3).toFixed(1)}s`,
  animationDuration: `${18 + (i % 4) * 5}s`,
  width: `${5 + (i % 3) * 3}px`,
  height: `${5 + (i % 3) * 3}px`,
  opacity: `${(0.18 + (i % 3) * 0.07).toFixed(2)}`,
}))

function getCountdown() {
  const diff = TARGET_DATE.getTime() - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0 }
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
  }
}

interface Props { openingDone: boolean }

export function LandingHero({ openingDone }: Props) {
  const [countdown, setCountdown] = useState(getCountdown)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setCountdown(getCountdown()), 1000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const parallax = `translateY(${scrollY * -0.06}px)`

  return (
    <section id="hero" className="hero-section">
      <div className="petals-layer" aria-hidden="true">
        {PETALS.map((p, i) => (
          <span key={i} className="petal" style={{
            left: p.left, width: p.width, height: p.height,
            opacity: p.opacity, animationDelay: p.animationDelay,
            animationDuration: p.animationDuration,
          }} />
        ))}
      </div>

      <div className="hero-container">
        <div className={`hero-copy${openingDone ? " animate" : ""}`}>
          <div className="trust-badge">
            <div className="stars">
              {[1,2,3,4,5].map(s => <i key={s} className="fa-solid fa-star" />)}
            </div>
            <span>DIPERCAYA 2.400+ PASANGAN DI INDONESIA</span>
          </div>
          <h1 className="hero-heading">
            Undangan Pernikahan<br />
            yang <em>Dikenang Selamanya</em>
          </h1>
          <p className="hero-subtext">
            Buat dalam 5 menit. Bagikan via WhatsApp. Tampil indah di semua layar ponsel dengan sentuhan tradisi yang modern.
          </p>
          <div className="hero-cta">
            <Link href="/login" className="btn-primary">
              Buat Undanganmu <i className="fa-solid fa-arrow-right" />
            </Link>
            <a
              className="btn-ghost"
              onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}
              style={{ cursor: "pointer" }}
            >
              Lihat Demo <i className="fa-solid fa-play" />
            </a>
          </div>
        </div>

        <div className={`hero-phone-wrapper${openingDone ? " animate" : ""}`} style={{ transform: parallax }}>
          <div className="hero-phone-glow" />
          <div className="phone-mockup">
            <div className="phone-notch" />
            <div className="phone-screen">
              <Image
                src="/landing/wedding-photo.jpg"
                alt="Contoh undangan digital"
                fill
                className="phone-bg-img"
                style={{ objectFit: "cover" }}
              />
              <div className="phone-gradient" />
              <div className="phone-content">
                <p className="phone-label">THE WEDDING OF</p>
                <h3 className="phone-couple">Rizky &amp; Nadia</h3>
                <div className="phone-countdown">
                  <div className="countdown-box">
                    <span className="countdown-num">{countdown.days}</span>
                    <span className="countdown-label">HARI</span>
                  </div>
                  <div className="countdown-box">
                    <span className="countdown-num">{countdown.hours}</span>
                    <span className="countdown-label">JAM</span>
                  </div>
                  <div className="countdown-box">
                    <span className="countdown-num">{countdown.minutes}</span>
                    <span className="countdown-label">MENIT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
