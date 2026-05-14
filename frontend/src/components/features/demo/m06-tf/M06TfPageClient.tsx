"use client"

import { useEffect, useRef } from "react"
import "@/app/(main)/demo/m06-tf/m06tf.css"
import { HeroSection } from "@/components/features/demo/m06-tf/HeroSection"
import { MempelaiSection } from "@/components/features/demo/m06-tf/MempelaiSection"
import { CountdownSection } from "@/components/features/demo/m06-tf/CountdownSection"
import { AcaraSection } from "@/components/features/demo/m06-tf/AcaraSection"
import { LoveStorySection } from "@/components/features/demo/m06-tf/LoveStorySection"
import { GallerySection } from "@/components/features/demo/m06-tf/GallerySection"
import { RSVPSection } from "@/components/features/demo/m06-tf/RSVPSection"
import { AmplopsSection } from "@/components/features/demo/m06-tf/AmplopsSection"
import { ClosingSection } from "@/components/features/demo/m06-tf/ClosingSection"

export function M06TfPageClient() {
  const appRef = useRef<HTMLDivElement>(null)

  // Scroll-reveal via IntersectionObserver
  useEffect(() => {
    const root = appRef.current
    if (!root) return

    requestAnimationFrame(() => {
      root.querySelectorAll<HTMLElement>(".m06tf-hero .reveal").forEach((el) => {
        el.classList.add("in")
      })
    })

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in")
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: "0px 0px -5% 0px" }
    )

    root.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
      if (!el.classList.contains("in")) io.observe(el)
    })

    function checkInitial() {
      const vh = window.innerHeight
      root!.querySelectorAll<HTMLElement>(".reveal:not(.in)").forEach((el) => {
        const r = el.getBoundingClientRect()
        if (r.top < vh && r.bottom > 0) {
          el.classList.add("in")
          io.unobserve(el)
        }
      })
    }
    const t1 = setTimeout(checkInitial, 50)
    const t2 = setTimeout(checkInitial, 400)

    return () => {
      io.disconnect()
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  // Spawn floating particles in hero
  useEffect(() => {
    const host = document.getElementById("m06tf-particles-host")
    if (!host) return

    const N = 18
    const particles: HTMLSpanElement[] = []

    for (let i = 0; i < N; i++) {
      const p = document.createElement("span")
      p.className = "m06tf-particle"
      const size = (2 + Math.random() * 3).toFixed(1)
      const left = Math.random() * 100
      const dur = (8 + Math.random() * 10).toFixed(1)
      const delay = (-Math.random() * 12).toFixed(1)
      p.style.cssText = `width:${size}px;height:${size}px;left:${left}%;bottom:-6px;animation-duration:${dur}s;animation-delay:${delay}s;`
      host.appendChild(p)
      particles.push(p)
    }

    return () => particles.forEach((p) => p.remove())
  }, [])

  function handleOpen() {
    const next = appRef.current?.querySelector(".m06tf-mempelai")
    if (next) next.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div className="m06tf-root">
      <div className="m06tf-app" ref={appRef}>
        <HeroSection onOpen={handleOpen} />
        <MempelaiSection />
        <CountdownSection />
        <AcaraSection />
        <LoveStorySection />
        <GallerySection />
        <RSVPSection />
        <AmplopsSection />
        <ClosingSection />
      </div>
    </div>
  )
}
