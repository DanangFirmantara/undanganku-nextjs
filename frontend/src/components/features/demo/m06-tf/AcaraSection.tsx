const ACARA_LIST = [
  {
    label: "Akad Nikah",
    icon: "🕌",
    name: "Akad Nikah",
    date: "Sabtu, 14 Juni 2025",
    time: "08.00 WIB",
    venue: "Masjid Al-Falah",
    address: "Jakarta Selatan",
    mapsUrl: "https://maps.google.com",
  },
  {
    label: "Resepsi",
    icon: "🏛️",
    name: "Resepsi Pernikahan",
    date: "Sabtu, 14 Juni 2025",
    time: "11.00 – 14.00 WIB",
    venue: "Gedung Serbaguna Al-Falah",
    address: "Jakarta Selatan",
    mapsUrl: "https://maps.google.com",
  },
] as const

export function AcaraSection() {
  return (
    <section className="m06tf-acara">
      <div className="m06tf-section-label reveal">Waktu &amp; Tempat</div>
      <div className="m06tf-section-title reveal d1">Acara Pernikahan</div>
      <div className="gold-line short reveal d2" />

      <div className="m06tf-acara-cards reveal d3">
        {ACARA_LIST.map((item) => (
          <div key={item.label} className="m06tf-acara-card">
            <div className="m06tf-acara-card-label">{item.label}</div>
            <div className="m06tf-acara-card-name">{item.name}</div>

            <div className="m06tf-acara-info-row">
              <span className="m06tf-acara-icon" aria-hidden="true">📅</span>
              <span>{item.date}</span>
            </div>
            <div className="m06tf-acara-info-row">
              <span className="m06tf-acara-icon" aria-hidden="true">🕐</span>
              <span>{item.time}</span>
            </div>
            <div className="m06tf-acara-info-row">
              <span className="m06tf-acara-icon" aria-hidden="true">📍</span>
              <span>{item.venue}, {item.address}</span>
            </div>

            <a
              href={item.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="m06tf-maps-btn"
              aria-label={`Lihat lokasi ${item.name} di Google Maps`}
            >
              Lihat Lokasi
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
