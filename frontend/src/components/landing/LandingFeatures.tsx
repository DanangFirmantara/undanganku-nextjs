const FEATURES = [
  { icon: "fa-bolt",               title: "Selesai dalam 5 Menit",  description: "Sistem instan kami memungkinkan Anda membuat undangan cantik hanya dengan mengisi formulir sederhana." },
  { icon: "fa-whatsapp",           title: "Optimized WhatsApp",      description: "Thumbnail undangan yang cantik saat link dibagikan di WhatsApp, meningkatkan antusiasme tamu Anda." },
  { icon: "fa-clock",              title: "Countdown Otomatis",      description: "Hitung mundur waktu acara secara real-time yang memicu kesan eksklusif dan mendebarkan bagi tamu." },
  { icon: "fa-envelope-open-text", title: "Amplop Digital",          description: "Terima kado digital langsung ke rekening Anda tanpa potongan biaya sedikitpun dari kami." },
  { icon: "fa-book-open",          title: "Buku Ucapan",             description: "Tamu dapat meninggalkan pesan hangat dan doa restu yang bisa Anda simpan selamanya secara digital." },
  { icon: "fa-music",              title: "Musik Pengiring",         description: "Pilihan instrumen premium yang akan otomatis terputar saat undangan dibuka untuk membangun suasana." },
]

export function LandingFeatures() {
  return (
    <section id="features" className="features-section">
      <div className="section-container">
        <h2 className="section-title-dark" data-reveal="">Semua yang Dibutuhkan, Dalam Satu Undangan</h2>
        <div className="features-grid" data-reveal="">
          {FEATURES.map(f => (
            <div key={f.title} className="feature-card">
              <div className="feature-icon-wrap">
                <i className={`fa-solid ${f.icon}`} />
              </div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
