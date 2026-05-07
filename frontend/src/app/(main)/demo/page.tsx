"use client"

import { useEffect, useRef } from "react"
import "./demo.css"
import { DemoCover } from "@/components/features/demo/DemoCover"
import { DemoPembuka } from "@/components/features/demo/DemoPembuka"
import { DemoAcara } from "@/components/features/demo/DemoAcara"
import { DemoCountdown } from "@/components/features/demo/DemoCountdown"
import { DemoAmplop } from "@/components/features/demo/DemoAmplop"
import { DemoGuestbook } from "@/components/features/demo/DemoGuestbook"
import { DemoClosing } from "@/components/features/demo/DemoClosing"
import { DemoMusicPlayer } from "@/components/features/demo/DemoMusicPlayer"

export default function DemoPage() {
  const motesRef = useRef<HTMLDivElement>(null)
  const appRef = useRef<HTMLDivElement>(null)

  // Scroll-reveal via IntersectionObserver
  useEffect(() => {
    const root = appRef.current
    if (!root) return

    // Cover reveals: trigger immediately
    requestAnimationFrame(() => {
      root.querySelectorAll<HTMLElement>(".cover .reveal").forEach((el) => {
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

  // Drifting gold motes
  useEffect(() => {
    const wrap = motesRef.current
    if (!wrap) return
    const N = 14
    const motes: HTMLSpanElement[] = []
    for (let i = 0; i < N; i++) {
      const m = document.createElement("span")
      m.className = "mote"
      const left = Math.random() * 100
      const dur = 12 + Math.random() * 14
      const delay = -Math.random() * dur
      const dx = Math.round(Math.random() * 60 - 30)
      const size = (2 + Math.random() * 2.2).toFixed(1)
      m.style.left = left + "%"
      m.style.bottom = "-10px"
      m.style.width = m.style.height = size + "px"
      m.style.animationDuration = dur.toFixed(1) + "s"
      m.style.animationDelay = delay.toFixed(1) + "s"
      m.style.setProperty("--demo-dx", dx + "px")
      m.style.opacity = (0.5 + Math.random() * 0.5).toFixed(2)
      wrap.appendChild(m)
      motes.push(m)
    }
    return () => {
      motes.forEach((m) => m.remove())
    }
  }, [])

  // Parallax for motes on scroll
  useEffect(() => {
    const motes = motesRef.current
    if (!motes) return
    let raf = 0
    function onScroll() {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, 700)
        motes!.style.transform = `translateY(${y * 0.18}px)`
      })
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  function handleOpen() {
    const next = appRef.current?.querySelector(".pembuka")
    if (next) next.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Playfair+Display:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <div className="demo-root">
        <div className="demo-app" ref={appRef}>
          <DemoCover motesRef={motesRef} onOpen={handleOpen} />
          <DemoPembuka />
          <DemoAcara />
          <DemoCountdown />
          <DemoAmplop />
          <DemoGuestbook />
          <DemoClosing />
        </div>
        <DemoMusicPlayer />
      </div>
    </>
  )
}
