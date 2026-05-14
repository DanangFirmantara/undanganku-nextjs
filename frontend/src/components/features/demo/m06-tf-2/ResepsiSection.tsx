export function ResepsiSection() {
  return (
    <section className="m06tf2-section border-t border-[rgba(201,169,110,0.15)] flex flex-col items-center text-center">
      <span className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase mb-3">Resepsi</span>

      <div className="m06tf2-divider mb-4" />

      <p className="text-[#FFFCF3] text-sm opacity-70 uppercase tracking-widest">Minggu</p>

      <p
        className="text-[#c9a96e] leading-none my-1"
        style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 700, fontSize: "5rem" }}
        aria-label="28"
      >
        28
      </p>

      <p className="text-[#FFFCF3] text-sm uppercase tracking-widest opacity-80">Desember 2027</p>

      <div className="m06tf2-divider mt-4 mb-4" />

      <p className="text-[#FFFCF3] text-sm mb-1 opacity-90">
        <span aria-hidden="true">⏰</span> 12:00 WIB
      </p>
      <p className="text-[#FFFCF3] text-xs opacity-60 max-w-[200px] leading-relaxed">
        <span aria-hidden="true">📍</span> Menara 165, Jl. TB Simatupang, Jakarta Selatan
      </p>

      <a
        href="#"
        className="m06tf2-btn-outline mt-5 inline-flex items-center gap-2 text-sm"
        aria-label="Buka Google Maps untuk Resepsi"
      >
        <span aria-hidden="true">📍</span> Google Maps
      </a>
    </section>
  )
}
