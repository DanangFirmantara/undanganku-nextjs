interface EventSectionProps {
  label: string
  day: string
  date: number
  monthYear: string
  time: string
  location: string
  mapsUrl?: string
}

function EventCard({ label, day, date, monthYear, time, location, mapsUrl }: EventSectionProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <span className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase mb-3">{label}</span>

      <div className="m06tf2-divider mb-4" />

      <p className="text-[#FFFCF3] text-sm opacity-70 uppercase tracking-widest">{day}</p>

      <p
        className="text-[#c9a96e] leading-none my-1"
        style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 700, fontSize: "5rem" }}
        aria-label={String(date)}
      >
        {date}
      </p>

      <p className="text-[#FFFCF3] text-sm uppercase tracking-widest opacity-80">{monthYear}</p>

      <div className="m06tf2-divider mt-4 mb-4" />

      <p className="text-[#FFFCF3] text-sm mb-1 opacity-90">
        <span aria-hidden="true">⏰</span> {time}
      </p>
      <p className="text-[#FFFCF3] text-xs opacity-60 max-w-[200px] leading-relaxed">
        <span aria-hidden="true">📍</span> {location}
      </p>

      {mapsUrl && (
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="m06tf2-btn-outline mt-5 inline-flex items-center gap-2 text-sm"
          aria-label={`Buka Google Maps untuk ${label}`}
        >
          <span aria-hidden="true">📍</span> Google Maps
        </a>
      )}
    </div>
  )
}

export function AkadSection() {
  return (
    <section className="m06tf2-section border-t border-[rgba(201,169,110,0.15)]">
      <EventCard
        label="Akad Nikah"
        day="Minggu"
        date={28}
        monthYear="Desember 2027"
        time="06:00 WIB"
        location="Menara 165, Jl. TB Simatupang, Jakarta Selatan"
        mapsUrl="#"
      />
    </section>
  )
}
