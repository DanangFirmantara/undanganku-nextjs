interface EventCardProps {
  label: string
  time: string
  endTime?: string
  location: string
  mapsUrl: string
  delayClass: string
}

function EventCard({ label, time, endTime, location, mapsUrl, delayClass }: EventCardProps) {
  const timeDisplay = endTime ? `${time} – ${endTime} WIB` : `${time} WIB`

  return (
    <div className={`m06tf4-event-card flex flex-col items-center text-center reveal ${delayClass}`}>
      <p
        className="text-xs tracking-[0.2em] uppercase mb-3 font-medium"
        style={{ color: "#844E49" }}
      >
        {label}
      </p>
      <div className="m06tf4-divider-gold" aria-hidden="true" />
      <p
        className="text-3xl font-bold mt-3 mb-1"
        style={{ fontFamily: "var(--font-cormorant), serif", color: "#844E49" }}
        aria-label={timeDisplay}
      >
        {time}
      </p>
      <p className="text-xs opacity-55 mb-4" style={{ color: "#555" }}>
        {endTime ? `s.d ${endTime} WIB` : "WIB"}
      </p>
      <p
        className="text-xs leading-relaxed opacity-60 max-w-[200px] mb-4"
        style={{ color: "#444" }}
      >
        <span aria-hidden="true">📍</span>{" "}
        {location}
      </p>
      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="m06tf4-btn-outline text-xs flex items-center gap-1.5"
        aria-label={`Buka Google Maps untuk ${label}`}
        style={{ padding: "0.5rem 1.25rem" }}
      >
        <span aria-hidden="true">🗺</span> Google Maps
      </a>
    </div>
  )
}

export function AcaraSection() {
  return (
    <section className="m06tf4-section flex flex-col items-center text-center">
      <p className="m06tf4-script text-4xl mb-1 reveal" aria-label="Acara">
        Acara
      </p>
      <div className="m06tf4-divider reveal d1" aria-hidden="true" />
      <p
        className="text-xs tracking-[0.18em] uppercase mt-3 mb-8 opacity-55 reveal d1"
        style={{ color: "#844E49" }}
      >
        Minggu, 28 Desember 2027
      </p>

      <div className="flex flex-col gap-5 w-full max-w-[300px]">
        <EventCard
          label="Akad Nikah"
          time="08:00"
          location="Menara 165, Jl. TB Simatupang, Jakarta Selatan"
          mapsUrl="#"
          delayClass="d2"
        />
        <EventCard
          label="Resepsi"
          time="09:00"
          endTime="13:00"
          location="Menara 165, Jl. TB Simatupang, Jakarta Selatan"
          mapsUrl="#"
          delayClass="d3"
        />
      </div>
    </section>
  )
}
