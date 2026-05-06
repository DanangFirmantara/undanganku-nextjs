import Link from "next/link"
import Image from "next/image"

export function LandingDemo() {
  return (
    <section id="demo" className="demo-section">
      <div className="demo-container">
        <div className="section-label" data-reveal="">PRATINJAU LANGSUNG</div>
        <h2 className="section-title-light" data-reveal="">Ini Contoh Undangannya — Coba Scroll</h2>
        <div className="demo-preview" data-reveal="">
          <Image
            src="/landing/demo-section.png"
            alt="Demo tampilan undangan digital"
            width={900}
            height={500}
            className="demo-img"
            style={{ width: "100%", height: "auto" }}
          />
          <div className="demo-features-overlay">
            <div className="demo-feature-tag"><i className="fa-solid fa-clock" /> Countdown Otomatis</div>
            <div className="demo-feature-tag"><i className="fa-solid fa-envelope-open-text" /> Amplop Digital</div>
            <div className="demo-feature-tag"><i className="fa-solid fa-comments" /> Ucapan Tamu</div>
          </div>
        </div>
        <Link href="/login" className="demo-cta-link" data-reveal="">
          Suka tampilannya? Buat milikmu →
        </Link>
      </div>
    </section>
  )
}
