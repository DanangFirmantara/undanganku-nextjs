export function LiveStreamSection() {
  return (
    <section className="m06tf4-section flex flex-col items-center text-center">
      <p className="m06tf4-script text-4xl mb-1 reveal" aria-label="Live Streaming">
        Live Streaming
      </p>
      <div className="m06tf4-divider reveal d1" aria-hidden="true" />

      {/* Video icon decoration */}
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mt-6 mb-4 reveal d1"
        style={{ background: "rgba(132,78,73,0.08)", border: "1px solid rgba(132,78,73,0.2)" }}
        aria-hidden="true"
      >
        <span className="text-2xl">📹</span>
      </div>

      <p
        className="text-sm leading-relaxed opacity-65 max-w-[260px] mb-8 reveal d2"
        style={{ color: "#555" }}
      >
        Bagi yang tidak dapat hadir secara langsung, kami menyediakan siaran
        langsung agar Anda tetap dapat menyaksikan momen bahagia kami.
      </p>

      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="m06tf4-btn flex items-center gap-2 reveal d3"
        aria-label="Tonton live streaming pernikahan"
      >
        <span aria-hidden="true">📺</span> Lihat Live Streaming
      </a>
    </section>
  )
}
