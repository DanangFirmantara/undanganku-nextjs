export function ClosingSection() {
  return (
    <section className="m06tf4-section flex flex-col items-center text-center">
      {/* Monogram circle */}
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center mb-6 reveal"
        style={{ border: "1px solid rgba(132,78,73,0.3)" }}
        aria-hidden="true"
      >
        <span
          className="m06tf4-name text-2xl"
          style={{ color: "#844E49", fontSize: "1.5rem" }}
        >
          P&amp;A
        </span>
      </div>

      <p
        className="m06tf4-script text-5xl mb-1 reveal d1"
        aria-label="Terima Kasih"
      >
        Terima Kasih
      </p>

      <div className="m06tf4-divider mt-2 mb-5 reveal d1" aria-hidden="true" />

      <p
        className="text-sm leading-relaxed opacity-60 max-w-[270px] mb-4 reveal d2"
        style={{ color: "#555" }}
      >
        Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila
        Bapak/Ibu/Saudara/i berkenan hadir dan memberikan do&apos;a restu.
      </p>

      <p
        className="text-sm opacity-50 mb-6 italic reveal d2"
        style={{ color: "#555" }}
      >
        Wassalamu&apos;alaikum warahmatullahi wabarakatuh
      </p>

      <p
        className="text-xs tracking-[0.2em] uppercase opacity-50 mb-2 reveal d3"
        style={{ color: "#844E49" }}
      >
        Kami Yang Berbahagia
      </p>

      <h2
        className="m06tf4-name text-3xl reveal d3"
        aria-label="Putri dan Andika"
      >
        PUTRI &amp; ANDIKA
      </h2>

      {/* Footer */}
      <div
        className="mt-12 pt-6 w-full flex flex-col items-center gap-2 reveal d4"
        style={{ borderTop: "1px solid rgba(132,78,73,0.12)" }}
      >
        <p
          className="text-xs tracking-[0.18em] uppercase opacity-50"
          style={{ color: "#844E49" }}
        >
          undanganku.id
        </p>
        <p className="text-xs opacity-35 tracking-widest uppercase" style={{ color: "#555" }}>
          Buat Undangan Kamu
        </p>
        <div className="flex gap-4 mt-1" aria-label="Tautan lainnya">
          {["Instagram", "WhatsApp"].map((soc) => (
            <a
              key={soc}
              href="#"
              className="text-xs opacity-50 hover:opacity-80 transition-opacity"
              style={{ color: "#844E49" }}
              aria-label={soc}
            >
              {soc}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
