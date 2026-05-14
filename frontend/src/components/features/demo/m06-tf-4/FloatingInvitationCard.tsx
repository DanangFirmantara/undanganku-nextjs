import { useState } from "react"

interface FloatingInvitationCardProps {
  onOpen: () => void
}

export function FloatingInvitationCard({ onOpen }: FloatingInvitationCardProps) {
  const [isAnimating, setIsAnimating] = useState(false)

  function handleOpen() {
    setIsAnimating(true)
    setTimeout(onOpen, 750)
  }

  return (
    <div className="m06tf4-gate" role="dialog" aria-modal="true" aria-label="Undangan pernikahan">
      <div className={`m06tf4-gate-card ${isAnimating ? "m06tf4-gate-open" : ""}`}>
        {/* Top card half */}
        <div className="m06tf4-gate-top">
          <p
            className="m06tf4-arabic text-xl mb-2"
            aria-label="Bismillahirrahmanirrahim"
          >
            بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيمِ
          </p>
          <div className="m06tf4-gate-divider" />
          <p
            className="text-[#844E49] text-sm tracking-[0.2em] uppercase opacity-70"
            style={{ fontFamily: "var(--font-karla), sans-serif" }}
          >
            The Wedding Of
          </p>
          <p
            className="m06tf4-name text-2xl mt-2"
            aria-label="Putri dan Andika"
          >
            PUTRI &amp; ANDIKA
          </p>
        </div>

        {/* Open button centered between halves */}
        <button
          className="m06tf4-gate-btn"
          onClick={handleOpen}
          aria-label="Buka undangan pernikahan"
        >
          Buka Undangan
        </button>

        {/* Bottom card half */}
        <div className="m06tf4-gate-bottom">
          <p
            className="text-[#844E49] text-xs tracking-[0.18em] uppercase opacity-60"
            style={{ fontFamily: "var(--font-karla), sans-serif" }}
          >
            Minggu, 28 Desember 2027
          </p>
          <div className="m06tf4-gate-divider mt-3" />
          <p
            className="text-[#844E49] text-xs opacity-50"
            style={{ fontFamily: "var(--font-karla), sans-serif" }}
          >
            Menara 165, Jakarta Selatan
          </p>
        </div>
      </div>
    </div>
  )
}
