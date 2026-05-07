"use client"

import { useState, useEffect } from "react"
import "@/app/landing.css"
import { LandingNavbar } from "@/components/landing/LandingNavbar"
import { LandingHero } from "@/components/landing/LandingHero"
import { LandingDemo } from "@/components/landing/LandingDemo"
import { LandingFeatures } from "@/components/landing/LandingFeatures"
import { LandingHowItWorks } from "@/components/landing/LandingHowItWorks"
import { LandingPricing } from "@/components/landing/LandingPricing"
import { LandingTestimonial } from "@/components/landing/LandingTestimonial"
import { LandingFooter } from "@/components/landing/LandingFooter"

export function LandingPageClient() {
  const [openingDone, setOpeningDone] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => setOpeningDone(true), 2200)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(max > 0 ? (y / max) * 100 : 0)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible")
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" }
    )
    document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="landing-root">
      {/* Opening Curtain */}
      <div className={`opening-overlay${openingDone ? " opening-done" : ""}`} aria-hidden="true">
        <div className="opening-inner">
          <div className="opening-ornament">
            <span></span>
            <i className="fa-solid fa-heart"></i>
            <span></span>
          </div>
          <div className="opening-logo">Invyta</div>
          <div className="opening-divider"></div>
          <div className="opening-sub">Wedding Invitation</div>
        </div>
      </div>

      {/* Scroll Progress */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-hidden="true"
      />

      <LandingNavbar />
      <LandingHero openingDone={openingDone} />
      <LandingDemo />
      <LandingFeatures />
      <LandingHowItWorks />
      <LandingPricing />
      <LandingTestimonial />
      <LandingFooter />
    </div>
  )
}
