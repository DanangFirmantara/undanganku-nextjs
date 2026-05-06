import Image from "next/image"

const TESTIMONIALS = [
  {
    text: "Prosesnya mudah banget! Dalam 10 menit undangan kami sudah jadi dan langsung bisa dibagikan ke semua tamu.",
    name: "Siti Rahayu",
    city: "Jakarta",
    avatar: "/landing/avatar-1.png",
  },
  {
    text: "Tampilannya cantik dan elegan. Banyak tamu yang memuji desain undangan digital kami.",
    name: "Budi Santoso",
    city: "Surabaya",
    avatar: "/landing/avatar-2.png",
  },
  {
    text: "Fitur amplop digitalnya sangat membantu. Tidak perlu repot lagi dengan amplop fisik!",
    name: "Dewi Lestari",
    city: "Bandung",
    avatar: "/landing/avatar-3.png",
  },
]

export function LandingTestimonial() {
  return (
    <section className="section" id="testimonial">
      <div className="section-inner">
        <div className="section-label">TESTIMONI</div>
        <h2 className="section-title">Dipercaya Ribuan Pasangan</h2>
        <p className="section-sub">
          Bergabunglah bersama 2.400+ pasangan yang telah membuat undangan pernikahan digital bersama kami.
        </p>
        <div className="testimonial-grid">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
              <div className="testimonial-author">
                <Image src={t.avatar} alt={t.name} width={40} height={40} style={{ borderRadius: "50%", objectFit: "cover" }} />
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-city">{t.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
