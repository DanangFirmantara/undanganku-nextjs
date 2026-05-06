"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import "./landing.css"
import { LandingNavbar } from "@/components/landing/LandingNavbar"
import { LandingHero } from "@/components/landing/LandingHero"
import { LandingFeatures } from "@/components/landing/LandingFeatures"
import { LandingPricing } from "@/components/landing/LandingPricing"
import { LandingTestimonial } from "@/components/landing/LandingTestimonial"
import { LandingFooter } from "@/components/landing/LandingFooter"

export default function LandingPage() {
  const [curtainDone, setCurtainDone] = useState(false)
  const [scrollPct, setScrollPct] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => setCurtainDone(true), 2200)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement
      const total = el.scrollHeight - el.clientHeight
      setScrollPct(total > 0 ? (el.scrollTop / total) * 100 : 0)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="landing-root">
      <div className={`curtain${curtainDone ? " hidden" : ""}`}>
        <div className="curtain-logo">UndanganKu</div>
        <div className="curtain-sub">Wedding Invitation</div>
        <div className="curtain-bar">
          <div className="curtain-bar-fill" />
        </div>
      </div>

      <div className="scroll-progress" style={{ width: `${scrollPct}%` }} />

      <LandingNavbar />
      <LandingHero />

      <section className="demo-section" id="demo">
        <div className="section-inner">
          <div className="section-label">PRATINJAU LANGSUNG</div>
          <h2 className="section-title" style={{ color: "white" }}>Lihat Tampilan Undanganmu</h2>
          <p className="section-sub" style={{ color: "rgba(255,255,255,0.75)" }}>
            Undangan digital yang cantik, responsif, dan mudah dibagikan ke semua tamu.
          </p>
          <Link href="/login">
            <div className="demo-image-wrap">
              <Image
                src="/landing/demo-section.png"
                alt="Demo undangan pernikahan"
                width={1100}
                height={600}
                style={{ width: "100%", height: "auto" }}
              />
              <div className="demo-tags">
                <span className="demo-tag">⏱ Countdown</span>
                <span className="demo-tag">💌 Amplop Digital</span>
                <span className="demo-tag">📖 Ucapan Tamu</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <LandingFeatures />

      <section className="how-section">
        <div className="section-inner" style={{ textAlign: "center" }}>
          <div className="section-label">CARA KERJA</div>
          <h2 className="section-title">Mudah dalam 3 Langkah</h2>
          <p className="section-sub" style={{ margin: "0 auto" }}>
            Dari data hingga undangan siap kirim, hanya butuh beberapa menit.
          </p>
          <div className="how-steps">
            {([
              { num: "1", title: "Isi Data", desc: "Masukkan nama, tanggal, dan detail acara pernikahanmu" },
              { num: "2", title: "Pilih Tema", desc: "Pilih dari koleksi tema premium kami yang elegan" },
              { num: "3", title: "Bagikan", desc: "Salin link dan bagikan via WhatsApp, Instagram, atau media sosial" },
            ] as const).map((s) => (
              <div key={s.num} className="how-step">
                <div className="how-num">{s.num}</div>
                <div className="how-title">{s.title}</div>
                <div className="how-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LandingPricing />
      <LandingTestimonial />
      <LandingFooter />
    </div>
  )
}
