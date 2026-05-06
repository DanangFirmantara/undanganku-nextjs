"use client"

import { useState } from "react"
import Link from "next/link"

function scrollToSection(id: string, close?: () => void) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  close?.()
}

export function LandingNavbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a className="navbar-brand" onClick={() => scrollToSection("hero")} style={{ cursor: "pointer" }}>
          UndanganKu
        </a>
        <ul className="navbar-links">
          <li><a onClick={() => scrollToSection("demo")} style={{ cursor: "pointer" }}>TEMPLATE</a></li>
          <li><a onClick={() => scrollToSection("features")} style={{ cursor: "pointer" }}>FITUR</a></li>
          <li><a onClick={() => scrollToSection("pricing")} style={{ cursor: "pointer" }}>HARGA</a></li>
          <li><a onClick={() => scrollToSection("testimonial")} style={{ cursor: "pointer" }}>TESTIMONI</a></li>
        </ul>
        <div className="navbar-actions">
          <Link href="/login" className="btn-outline-sm">Masuk</Link>
          <Link href="/login" className="btn-primary-sm">Buat Undangan</Link>
        </div>
        <button className="hamburger" onClick={() => setOpen(v => !v)} aria-label="Menu">
          <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`}></i>
        </button>
      </div>
      {open && (
        <div className="mobile-menu">
          <a onClick={() => { scrollToSection("demo"); setOpen(false) }} style={{ cursor: "pointer" }}>TEMPLATE</a>
          <a onClick={() => { scrollToSection("features"); setOpen(false) }} style={{ cursor: "pointer" }}>FITUR</a>
          <a onClick={() => { scrollToSection("pricing"); setOpen(false) }} style={{ cursor: "pointer" }}>HARGA</a>
          <a onClick={() => { scrollToSection("testimonial"); setOpen(false) }} style={{ cursor: "pointer" }}>TESTIMONI</a>
          <div className="mobile-menu-actions">
            <Link href="/login" className="btn-outline-sm" onClick={() => setOpen(false)}>Masuk</Link>
            <Link href="/login" className="btn-primary-sm" onClick={() => setOpen(false)}>Buat Undangan</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
