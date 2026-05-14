export function CoverSection() {
  return (
    <section className="m06tf2-section flex flex-col items-center text-center border-t border-[rgba(201,169,110,0.15)]">
      <p
        className="m06tf2-script text-3xl mb-2"
        aria-label="The Wedding Of"
      >
        The Wedding Of
      </p>

      <h2
        className="m06tf2-name text-4xl lg:text-5xl text-white my-3"
        aria-label="Putri dan Andika"
      >
        PUTRI &amp; ANDIKA
      </h2>

      <div className="m06tf2-divider" />

      <p className="text-[#FFFCF3] text-sm tracking-widest uppercase mt-4 opacity-80">
        Minggu, 28 Desember 2027
      </p>

      {/* Scroll indicator */}
      <div className="mt-8 flex flex-col items-center gap-1 opacity-50">
        <span className="text-[#c9a96e] text-xs tracking-widest uppercase">Scroll</span>
        <svg
          width="16"
          height="24"
          viewBox="0 0 16 24"
          fill="none"
          aria-hidden="true"
          className="text-[#c9a96e]"
        >
          <path
            d="M8 0v20M1 14l7 8 7-8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  )
}
