"use client"

import { useEffect, useRef, useState } from "react"

export function DemoMusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const fadeRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const audio = new Audio("/audio/wedding-music.mp4")
    audio.loop = true
    audio.volume = 0
    audioRef.current = audio

    function fadeIn() {
      if (fadeRef.current) clearInterval(fadeRef.current)
      const STEPS = 40
      const TARGET = 0.3
      const INTERVAL = 2000 / STEPS
      fadeRef.current = setInterval(() => {
        if (!audioRef.current) return
        const next = Math.min(audioRef.current.volume + TARGET / STEPS, TARGET)
        audioRef.current.volume = next
        if (next >= TARGET) {
          clearInterval(fadeRef.current!)
          fadeRef.current = null
        }
      }, INTERVAL)
    }

    function startPlayback() {
      audio.play().then(() => {
        setIsPlaying(true)
        fadeIn()
      }).catch(() => {
        // still blocked — user must tap button
      })
    }

    audio.play().then(() => {
      setIsPlaying(true)
      fadeIn()
    }).catch(() => {
      // autoplay blocked: start on first user interaction
      function onFirstInteraction() {
        audio.play().then(() => {
          setIsPlaying(true)
          fadeIn()
        }).catch(() => { /* silent */ })
        document.removeEventListener("click", onFirstInteraction)
        document.removeEventListener("touchstart", onFirstInteraction)
        document.removeEventListener("keydown", onFirstInteraction)
      }
      document.addEventListener("click", onFirstInteraction, { once: true })
      document.addEventListener("touchstart", onFirstInteraction, { once: true })
      document.addEventListener("keydown", onFirstInteraction, { once: true })
    })

    // suppress unused warning — startPlayback is defined for clarity
    void startPlayback

    return () => {
      if (fadeRef.current) clearInterval(fadeRef.current)
      audio.pause()
      audio.src = ""
      audioRef.current = null
    }
  }, [])

  function handleToggle() {
    const audio = audioRef.current
    if (!audio) return
    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio.play().then(() => {
        setIsPlaying(true)
      }).catch(() => { /* silent */ })
    }
  }

  return (
    <button
      onClick={handleToggle}
      className="demo-music-btn"
      aria-label={isPlaying ? "Pause music" : "Play music"}
      style={{
        position: "fixed",
        bottom: "24px",
        right: "calc(50% - 195px + 16px)",
      }}
    >
      {isPlaying ? (
        // Pause bars icon
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="6" y="4" width="4" height="16" rx="1" fill="#C9A84C" />
          <rect x="14" y="4" width="4" height="16" rx="1" fill="#C9A84C" />
        </svg>
      ) : (
        // Music note icon
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M9 18V5l12-2v13"
            stroke="#C9A84C"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="6" cy="18" r="3" fill="#C9A84C" />
          <circle cx="18" cy="16" r="3" fill="#C9A84C" />
        </svg>
      )}
    </button>
  )
}
