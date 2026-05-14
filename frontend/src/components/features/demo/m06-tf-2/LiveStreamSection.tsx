export function LiveStreamSection() {
  return (
    <section className="m06tf2-section flex flex-col items-center text-center border-t border-[rgba(201,169,110,0.15)]">
      <p
        className="m06tf2-script text-4xl mb-1"
        aria-label="Live Streaming"
      >
        Live Streaming
      </p>
      <div className="m06tf2-divider mt-2 mb-5" />

      <p className="text-[#FFFCF3] text-sm opacity-70 max-w-xs leading-relaxed mb-8">
        Temui kami secara virtual untuk menyaksikan upacara pernikahan kami yang
        insyaAllah akan disiarkan langsung melalui link di bawah ini.
      </p>

      <a
        href="#"
        className="m06tf2-btn inline-flex items-center gap-2"
        aria-label="Lihat Live Streaming pernikahan"
      >
        <span aria-hidden="true">📺</span> Lihat Live Streaming
      </a>
    </section>
  )
}
