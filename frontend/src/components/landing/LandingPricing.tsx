import Link from "next/link"

const FEATURES = [
  "Akses Semua Tema Premium",
  "Fitur Amplop Digital & QR Code",
  "Pilihan Musik Latar & Galeri Foto",
  "Buku Ucapan & RSVP Real-time",
  "Thumbnail WhatsApp Custom",
  "Update Data Tanpa Batas",
]

export function LandingPricing() {
  return (
    <section id="pricing" className="pricing-section">
      <div className="section-container">
        <div className="pricing-card" data-reveal="">
          <div className="pricing-badge">PALING POPULER</div>
          <h2 className="pricing-name">Paket Premium</h2>
          <div className="pricing-price">
            <span className="price-amount">Rp 149.000</span>
          </div>
          <p className="pricing-note">Bayar sekali, aktif selamanya</p>
          <ul className="pricing-features">
            {FEATURES.map(f => (
              <li key={f}>
                <i className="fa-solid fa-check" /> {f}
              </li>
            ))}
          </ul>
          <Link href="/login" className="btn-primary btn-full">
            Buat Undangan Sekarang <i className="fa-solid fa-arrow-right" />
          </Link>
          <div className="trust-icons">
            <div className="trust-icon-item">
              <i className="fa-solid fa-shield-halved" /><span>Midtrans</span>
            </div>
            <div className="trust-icon-item">
              <i className="fa-solid fa-lock" /><span>SSL Secure</span>
            </div>
            <div className="trust-icon-item">
              <i className="fa-solid fa-ban" /><span>Anti-Spam</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
