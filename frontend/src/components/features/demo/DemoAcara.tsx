"use client"

export function DemoAcara() {
  return (
    <section className="acara">
      <div className="label reveal" style={{ color: "var(--demo-gold-soft)" }}>
        RANGKAIAN ACARA
      </div>
      <div className="section-title reveal d1">Rangkaian Acara</div>
      <div className="diamond-row reveal d1">◆ ─ ◆ ─ ◆</div>

      <article className="event-card akad reveal d2">
        <div className="top-accent"></div>
        <div className="event-label">AKAD NIKAH</div>
        <div className="event-icon">☽</div>
        <div className="event-date">Sabtu, 14 Juni 2026</div>
        <div className="event-time">08.00 WIB</div>
        <div className="event-divider"></div>
        <div className="event-venue">Masjid Raya Nurul Iman</div>
        <div className="event-address">
          Jl. Rasuna Said No. 1
          <br />
          Padang, Sumatera Barat
        </div>
        <a
          className="maps-link"
          href="#"
          onClick={(e) => e.preventDefault()}
        >
          Buka di Maps →
        </a>
      </article>

      <article className="event-card resepsi reveal d3">
        <div className="top-accent"></div>
        <div className="event-label">RESEPSI PERNIKAHAN</div>
        <div className="event-icon">◈</div>
        <div className="event-date">Sabtu, 14 Juni 2026</div>
        <div className="event-time">11.00 WIB</div>
        <div className="event-divider"></div>
        <div className="event-venue">Gedung Serbaguna Minang Permai</div>
        <div className="event-address">
          Jl. Sudirman No. 45
          <br />
          Padang, Sumatera Barat
        </div>
        <a
          className="maps-link"
          href="#"
          onClick={(e) => e.preventDefault()}
        >
          Buka di Maps →
        </a>
      </article>
    </section>
  )
}
