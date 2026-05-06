import Link from "next/link"

export function LandingFooter() {
  return (
    <>
      <section className="footer-cta">
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 className="footer-cta-title">Siap Membuat Undanganmu?</h2>
          <p className="footer-cta-sub">
            Bergabunglah dengan ribuan pasangan yang telah mempercayakan undangan digital mereka kepada kami.
          </p>
          <Link href="/login" className="btn-gold" style={{ fontSize: "1.05rem", padding: "0.9rem 2rem" }}>
            Mulai Gratis Sekarang
          </Link>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-logo">UndanganKu</div>
          <p className="footer-tagline">Undangan pernikahan digital yang elegan dan berkesan</p>
          <nav className="footer-links">
            <Link href="#">Kebijakan Privasi</Link>
            <Link href="#">Syarat &amp; Ketentuan</Link>
            <Link href="#">Bantuan</Link>
            <Link href="#">Kontak Kami</Link>
          </nav>
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} UndanganKu. Semua hak dilindungi.
          </p>
        </div>
      </footer>
    </>
  )
}
