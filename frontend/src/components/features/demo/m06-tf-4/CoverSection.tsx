interface CoverSectionProps {
  onOpen: () => void
  isOpened: boolean
}

export function CoverSection({ onOpen, isOpened }: CoverSectionProps) {
  return (
    <section className="m06tf4-cover" aria-label="Cover undangan pernikahan">
      {/* Outer ornament ring */}
      <div className="m06tf4-cover-ornament" aria-hidden="true">
        <span
          className="m06tf4-name text-5xl"
          style={{ color: "rgba(201,169,110,0.7)" }}
          aria-hidden="true"
        >
          P&amp;A
        </span>
      </div>

      {/* The Wedding Of */}
      <p
        className="m06tf4-script text-2xl mb-2 reveal"
        style={{ color: "rgba(201,169,110,0.9)" }}
        aria-label="The Wedding Of"
      >
        The Wedding Of
      </p>

      {/* Couple names */}
      <h1
        className="text-5xl font-bold tracking-wide mb-3 reveal d1"
        style={{
          fontFamily: "var(--font-cormorant), serif",
          color: "#FAF8F8",
        }}
        aria-label="Putri dan Andika"
      >
        PUTRI &amp; ANDIKA
      </h1>

      {/* Divider */}
      <div
        className="reveal d2"
        style={{ width: "56px", height: "1px", background: "rgba(201,169,110,0.5)", margin: "0.5rem auto 1rem" }}
        aria-hidden="true"
      />

      {/* Date */}
      <p
        className="text-sm tracking-[0.2em] uppercase opacity-75 reveal d2"
        style={{ color: "#FAF8F8" }}
      >
        Minggu, 28 Desember 2027
      </p>

      {/* Decorative dots */}
      <div className="flex gap-2 mt-6 reveal d3" aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            style={{
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              background: "rgba(201,169,110,0.5)",
              display: "inline-block",
            }}
          />
        ))}
      </div>

      {/* Open button — only show if not yet opened */}
      {!isOpened && (
        <button
          className="m06tf4-btn mt-8 reveal d4"
          onClick={onOpen}
          aria-label="Buka undangan pernikahan"
          style={{ background: "rgba(201,169,110,0.15)", border: "1px solid rgba(201,169,110,0.4)", color: "#FAF8F8" }}
        >
          ✉ Buka Undangan
        </button>
      )}

      {/* Scroll hint after opened */}
      {isOpened && (
        <div className="mt-8 flex flex-col items-center gap-1 opacity-40" aria-hidden="true">
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: "rgba(201,169,110,0.8)" }}
          >
            Scroll
          </span>
          <svg width="14" height="20" viewBox="0 0 14 20" fill="none">
            <path
              d="M7 0v16M1 11l6 7 6-7"
              stroke="rgba(201,169,110,0.7)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </section>
  )
}
