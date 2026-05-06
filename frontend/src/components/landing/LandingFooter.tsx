import Link from "next/link"

export function LandingFooter() {
  return (
    <>
      {/* Footer CTA */}
      <section className="footer-cta-section">
        <div className="footer-cta-bg" />
        <div className="footer-cta-content" data-reveal="">
          <h2 className="footer-cta-title">Siap Membuat Undanganmu?</h2>
          <p className="footer-cta-subtitle">
            Bergabunglah dengan ribuan pasangan lainnya yang telah mempercayakan momen bahagianya kepada kami.
          </p>
          <Link href="/login" className="btn-primary-lg">
            Mulai Sekarang →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="footer-logo">UndanganKu</div>
            <p className="footer-tagline">
              Keindahan Tradisi dalam Sentuhan Digital.<br />
              Solusi undangan pernikahan modern nomor satu di Indonesia.
            </p>
          </div>
          <div className="footer-links">
            <a href="#">Kebijakan Privasi</a>
            <a href="#">Syarat &amp; Ketentuan</a>
            <a href="#">Bantuan</a>
            <a href="#">Kontak Kami</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 UndanganKu. Keindahan Tradisi dalam Sentuhan Digital.</p>
        </div>
      </footer>
    </>
  )
}
