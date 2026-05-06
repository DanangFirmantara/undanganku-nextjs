import Link from "next/link"

const FEATURES = [
  "Undangan Unlimited Tamu",
  "Countdown Real-time",
  "Amplop Digital",
  "Buku Ucapan Tamu",
  "Musik Latar Custom",
  "Aktif Selamanya",
]

export function LandingPricing() {
  return (
    <section className="section" id="pricing" style={{ background: "var(--cream-dark)" }}>
      <div className="section-inner" style={{ textAlign: "center" }}>
        <div className="section-label">HARGA</div>
        <h2 className="section-title">Satu Harga, Semua Fitur</h2>
        <p className="section-sub" style={{ margin: "0 auto" }}>
          Tidak ada biaya tersembunyi. Bayar sekali, nikmati selamanya.
        </p>
        <div className="pricing-card">
          <div className="pricing-header">
            <div className="pricing-name">PAKET PREMIUM</div>
            <div className="pricing-price">
              <sup>Rp</sup>149.000
            </div>
          </div>
          <div className="pricing-body">
            <ul className="pricing-features">
              {FEATURES.map((f) => (
                <li key={f}>
                  <span className="pricing-check">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <Link href="/login" className="btn-wine" style={{ display: "block", textAlign: "center", padding: "0.85rem", borderRadius: "8px", fontSize: "1rem" }}>
              Mulai Sekarang
            </Link>
            <div className="pricing-trust">
              <span>🔒 SSL Secure</span>
              <span>✓ Anti-Spam</span>
              <span>💳 Midtrans</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
