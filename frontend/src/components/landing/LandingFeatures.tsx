const FEATURES = [
  {
    icon: "⚡",
    title: "Selesai dalam 5 Menit",
    desc: "Isi data sekali, undangan langsung jadi",
  },
  {
    icon: "📤",
    title: "Bagikan via WhatsApp",
    desc: "Kirim link undangan dalam hitungan detik",
  },
  {
    icon: "⏱️",
    title: "Countdown Otomatis",
    desc: "Hitung mundur hari pernikahanmu secara real-time",
  },
  {
    icon: "✉️",
    title: "Amplop Digital",
    desc: "Terima amplop digital dari tamu undanganmu",
  },
  {
    icon: "📖",
    title: "Buku Ucapan",
    desc: "Kumpulkan ucapan dan doa dari tamu secara online",
  },
  {
    icon: "🎵",
    title: "Musik Latar",
    desc: "Tambahkan musik favorit sebagai latar undanganmu",
  },
]

export function LandingFeatures() {
  return (
    <section className="section" id="features">
      <div className="section-inner">
        <div className="section-label">MENGAPA PILIH KAMI</div>
        <h2 className="section-title">Fitur Lengkap untuk Undangan Sempurna</h2>
        <p className="section-sub">
          Semua yang kamu butuhkan untuk membuat undangan pernikahan digital yang berkesan tersedia dalam satu platform.
        </p>
        <div className="features-grid">
          {FEATURES.map((f) => (
            <div key={f.title} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <div className="feature-title">{f.title}</div>
              <div className="feature-desc">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
