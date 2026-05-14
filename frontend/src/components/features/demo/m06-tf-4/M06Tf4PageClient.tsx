"use client"

import { useEffect, useRef, useState } from "react"
import { Cormorant_Infant, Karla, Aref_Ruqaa } from "next/font/google"
import { CoverSection } from "./CoverSection"
import { FloatingInvitationCard } from "./FloatingInvitationCard"
import { OpeningSection } from "./OpeningSection"
import { MempelaiSection } from "./MempelaiSection"
import { CountdownSection } from "./CountdownSection"
import { AcaraSection } from "./AcaraSection"
import { DresscodeSection } from "./DresscodeSection"
import { LiveStreamSection } from "./LiveStreamSection"
import { LoveStorySection } from "./LoveStorySection"
import { WeddingGiftSection } from "./WeddingGiftSection"
import { WishesSection } from "./WishesSection"
import { ClosingSection } from "./ClosingSection"
import "./m06tf4.css"

const cormorantInfant = Cormorant_Infant({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
})

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-karla",
  display: "swap",
})

const arefRuqaa = Aref_Ruqaa({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-aref",
  display: "swap",
})

export function M06Tf4PageClient() {
  const [isOpened, setIsOpened] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const appRef = useRef<HTMLDivElement | null>(null)

  const fontVars = [
    cormorantInfant.variable,
    karla.variable,
    arefRuqaa.variable,
  ].join(" ")

  // Scroll-reveal via IntersectionObserver
  useEffect(() => {
    const container = appRef.current
    if (!container) return

    const targets = container.querySelectorAll<HTMLElement>(".reveal")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [isOpened])

  function handleToggleMusic() {
    const audio = audioRef.current
    if (!audio) return
    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      void audio.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false))
    }
  }

  function handleOpen() {
    setIsOpened(true)
    setTimeout(() => {
      appRef.current?.scrollIntoView({ behavior: "smooth" })
    }, 900)
  }

  return (
    <div className={`m06tf4-root ${fontVars}`}>
      {/* Background audio */}
      <audio ref={audioRef} loop preload="none">
        <source src="/audio/wedding-bg.mp3" type="audio/mpeg" />
      </audio>

      {/* Gate: floating invitation card */}
      {!isOpened && (
        <FloatingInvitationCard onOpen={handleOpen} />
      )}

      {/* Music toggle button (always visible after open) */}
      {isOpened && (
        <button
          className={`m06tf4-music-btn ${isPlaying ? "playing" : ""}`}
          onClick={handleToggleMusic}
          aria-label={isPlaying ? "Pause musik" : "Putar musik"}
        >
          {isPlaying ? "♪" : "♩"}
        </button>
      )}

      {/* Phone frame */}
      <div className="m06tf4-app" ref={appRef}>
        <CoverSection onOpen={handleOpen} isOpened={isOpened} />

        {isOpened && (
          <>
            <OpeningSection />
            <MempelaiSection />
            <CountdownSection />
            <AcaraSection />
            <DresscodeSection />
            <LiveStreamSection />
            <LoveStorySection />
            <WeddingGiftSection />
            <WishesSection />
            <ClosingSection />
          </>
        )}
      </div>
    </div>
  )
}
