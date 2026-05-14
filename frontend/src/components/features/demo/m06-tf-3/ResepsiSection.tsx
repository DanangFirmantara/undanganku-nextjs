export function ResepsiSection() {
  return (
    <section
      className="m06tf3-sep"
      style={{ padding: "4em 2em", background: "linear-gradient(180deg,#FFFCF3 0%,#FAF8F8 100%)" }}
    >
      <div className="max-w-xs mx-auto">
        <div className="flex items-start gap-4">
          {/* Timeline column */}
          <div className="flex flex-col items-center" aria-hidden="true">
            <div className="m06tf3-timeline-dot" />
            <div className="m06tf3-timeline-line" style={{ minHeight: "100px" }} />
          </div>

          {/* Card */}
          <div className="m06tf3-event-card flex-1 mb-6">
            <p
              style={{ fontSize: "14px", color: "#844E49", letterSpacing: "0.5px", textTransform: "uppercase" }}
              className="mb-2"
            >
              RESEPSI
            </p>

            <p style={{ fontSize: "20px", color: "#3d1515", lineHeight: "1.3em" }}>Minggu</p>

            <p
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 700,
                fontSize: "60px",
                color: "#844E49",
                lineHeight: 1,
                margin: "4px 0",
              }}
              aria-label="28"
            >
              28
            </p>

            <p style={{ fontSize: "18px", color: "#333", textTransform: "uppercase", letterSpacing: "0.5px" }}>
              Desember 2027
            </p>

            <div className="m06tf3-divider" style={{ margin: "12px auto" }} />

            <p style={{ fontSize: "16px", color: "#333", lineHeight: "1.5em" }}>
              <span aria-hidden="true">⏰</span> 13.00 WIB
            </p>

            <p style={{ fontSize: "15px", color: "#333", lineHeight: "1.5em", maxWidth: "200px", marginTop: "6px" }}>
              <span aria-hidden="true">📍</span> Jl. TB Simatupang, Jakarta Selatan
            </p>

            <a
              href="https://maps.google.com/?q=Jl.+TB+Simatupang+Jakarta+Selatan"
              target="_blank"
              rel="noopener noreferrer"
              className="m06tf3-btn-maps mt-5"
              aria-label="Buka Google Maps untuk Resepsi"
            >
              <span aria-hidden="true">📍</span> Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
