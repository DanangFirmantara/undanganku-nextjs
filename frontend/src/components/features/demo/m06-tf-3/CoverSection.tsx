export function CoverSection() {
  return (
    <section
      className="m06tf3-sep relative flex flex-col items-center text-center"
      style={{ padding: "4em 2em", background: "linear-gradient(180deg,#FFFCF3 0%,#FAF8F8 100%)" }}
    >
      {/* Invitation label */}
      <p
        style={{ fontSize: "14px", color: "#844E49", letterSpacing: "0.5px", marginBottom: "8px" }}
        className="uppercase tracking-widest"
      >
        Turut mengundang kehadiran
      </p>

      {/* "The Wedding Of" script */}
      <p
        className="m06tf3-script mb-2"
        style={{ fontSize: "20px" }}
        aria-label="The Wedding Of"
      >
        The Wedding Of
      </p>

      {/* Bride name */}
      <h2
        className="m06tf3-name"
        style={{ fontSize: "clamp(28px,5vw,42px)", color: "#844E49", marginTop: "12px" }}
        aria-label="Putri Cantika Sari"
      >
        PUTRI CANTIKA SARI
      </h2>

      <p style={{ color: "#844E49", fontSize: "20px", margin: "4px 0" }}>&amp;</p>

      {/* Groom name */}
      <h2
        className="m06tf3-name"
        style={{ fontSize: "clamp(28px,5vw,42px)", color: "#844E49", marginBottom: "16px" }}
        aria-label="Putra Andika Pratama"
      >
        PUTRA ANDIKA PRATAMA
      </h2>

      <div className="m06tf3-divider" />

      {/* Parents */}
      <div className="mt-6 mb-6 text-center max-w-xs">
        <p
          style={{ fontSize: "12px", color: "#844E49", letterSpacing: "0.5px", marginBottom: "8px" }}
          className="uppercase tracking-widest"
        >
          Putri pertama dari
        </p>
        <p style={{ fontSize: "15px", color: "#333", lineHeight: "1.5em" }}>Bapak Deni Bastian</p>
        <p style={{ fontSize: "14px", color: "#966661", lineHeight: "1.5em", marginBottom: "16px" }}>
          &amp; Ibu Aisha Dania
        </p>

        <p
          style={{ fontSize: "12px", color: "#844E49", letterSpacing: "0.5px", marginBottom: "8px" }}
          className="uppercase tracking-widest"
        >
          Putra pertama dari
        </p>
        <p style={{ fontSize: "15px", color: "#333", lineHeight: "1.5em" }}>Bapak Abdul Rozak</p>
        <p style={{ fontSize: "14px", color: "#966661", lineHeight: "1.5em" }}>
          &amp; Ibu Adelia Marni
        </p>
      </div>

      <div className="m06tf3-divider" />

      <p
        style={{ fontSize: "18px", color: "#3d1515", letterSpacing: "0.5px", marginTop: "16px" }}
        className="uppercase tracking-widest"
      >
        Minggu, 28 Desember 2027
      </p>

      {/* Scroll indicator */}
      <div className="mt-8 flex flex-col items-center gap-1" style={{ opacity: 0.5 }}>
        <span style={{ fontSize: "12px", color: "#844E49", letterSpacing: "0.3em" }} className="uppercase">
          Scroll
        </span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none" aria-hidden="true">
          <path
            d="M8 0v20M1 14l7 8 7-8"
            stroke="#844E49"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  )
}
