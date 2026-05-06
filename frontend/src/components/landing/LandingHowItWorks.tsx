const STEPS = [
  { number: "1", title: "Bayar Sekali",        description: "Satu harga transparan tanpa biaya tersembunyi. Aktif selamanya." },
  { number: "2", title: "Isi Data Pernikahan", description: "Lengkapi detail acara, foto galeri, dan cerita cinta Anda melalui dashboard kami." },
  { number: "3", title: "Bagikan ke WhatsApp", description: "Undangan siap disebar ke seluruh keluarga dan kolega dengan satu klik." },
]

export function LandingHowItWorks() {
  return (
    <section id="how-it-works" className="how-section">
      <div className="section-container">
        <h2 className="section-title-dark" data-reveal="">Cara Kerjanya Mudah</h2>
        <div className="steps-grid" data-reveal="">
          {STEPS.map((step, idx) => (
            <div key={step.number} className="step-card">
              <div className="step-number">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.description}</p>
              {idx < STEPS.length - 1 && (
                <div className="step-arrow">
                  <i className="fa-solid fa-arrow-right" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
