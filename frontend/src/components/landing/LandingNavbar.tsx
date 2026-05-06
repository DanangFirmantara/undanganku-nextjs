"use client"

import { useState } from "react"
import Link from "next/link"

export function LandingNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleScrollTo = (id: string) => {
    setMobileOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="navbar">
      <Link href="/" className="navbar-logo">
        Undangan<span>Ku</span>
      </Link>

      <ul className="navbar-links">
        <li><button onClick={() => handleScrollTo("demo")} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-dark)", fontWeight: 500, fontSize: "0.9rem" }}>TEMPLATE</button></li>
        <li><button onClick={() => handleScrollTo("features")} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-dark)", fontWeight: 500, fontSize: "0.9rem" }}>FITUR</button></li>
        <li><button onClick={() => handleScrollTo("pricing")} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-dark)", fontWeight: 500, fontSize: "0.9rem" }}>HARGA</button></li>
        <li><button onClick={() => handleScrollTo("testimonial")} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-dark)", fontWeight: 500, fontSize: "0.9rem" }}>TESTIMONI</button></li>
      </ul>

      <div className="navbar-actions">
        <Link href="/login" className="btn-outline-wine">Masuk</Link>
        <Link href="/login" className="btn-wine">Buat Undangan</Link>
      </div>

      <button className="hamburger" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
        {mobileOpen ? "✕" : "☰"}
      </button>

      {mobileOpen && (
        <div className="navbar-mobile-panel">
          <button onClick={() => handleScrollTo("demo")} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-dark)", fontWeight: 500, fontSize: "0.9rem", textAlign: "left" }}>TEMPLATE</button>
          <button onClick={() => handleScrollTo("features")} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-dark)", fontWeight: 500, fontSize: "0.9rem", textAlign: "left" }}>FITUR</button>
          <button onClick={() => handleScrollTo("pricing")} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-dark)", fontWeight: 500, fontSize: "0.9rem", textAlign: "left" }}>HARGA</button>
          <button onClick={() => handleScrollTo("testimonial")} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-dark)", fontWeight: 500, fontSize: "0.9rem", textAlign: "left" }}>TESTIMONI</button>
          <Link href="/login" className="btn-outline-wine" style={{ width: "fit-content" }}>Masuk</Link>
          <Link href="/login" className="btn-wine" style={{ width: "fit-content" }}>Buat Undangan</Link>
        </div>
      )}
    </nav>
  )
}
