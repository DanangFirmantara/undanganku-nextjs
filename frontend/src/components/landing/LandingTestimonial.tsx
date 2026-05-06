import Image from "next/image"

const TESTIMONIALS = [
  {
    quote: '"Tamu-tamu kami langsung terkesima dengan desainnya yang sangat elegan. Sangat membantu untuk mengelola kado digital dan RSVP."',
    name: "Rizky & Nadia",
    location: "Padang, Sumatra Barat",
    avatar: "/landing/avatar-1.png",
  },
  {
    quote: '"Dashboardnya sangat user-friendly. Selesai buat dalam hitungan menit dan bisa langsung share. Sangat direkomendasikan!"',
    name: "Maya & Adit",
    location: "Jakarta Selatan",
    avatar: "/landing/avatar-2.png",
  },
  {
    quote: '"Pilihan musiknya sangat menenangkan dan estetik. Benar-benar memberikan sentuhan mewah pada undangan digital kami."',
    name: "Dimas & Putri",
    location: "Surabaya, Jawa Timur",
    avatar: "/landing/avatar-3.png",
  },
]

export function LandingTestimonial() {
  return (
    <section id="testimonial" className="testimonial-section">
      <div className="section-container">
        <div className="section-label" data-reveal="">TESTIMONI BAHAGIA</div>
        <h2 className="section-title-light" data-reveal="">Kata Mereka</h2>
        <div className="testimonial-grid" data-reveal="">
          {TESTIMONIALS.map(t => (
            <div key={t.name} className="testimonial-card">
              <div className="testimonial-stars">
                {[1,2,3,4,5].map(s => <i key={s} className="fa-solid fa-star" />)}
              </div>
              <p className="testimonial-quote">{t.quote}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={44}
                    height={44}
                    style={{ objectFit: "cover", borderRadius: "50%" }}
                  />
                </div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-location">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
