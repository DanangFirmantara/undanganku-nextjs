export function ClosingSection() {
  return (
    <section className="m06tf2-section flex flex-col items-center text-center border-t border-[rgba(201,169,110,0.15)]">
      {/* "To:" circle ornament */}
      <div
        className="w-16 h-16 rounded-full border border-[#c9a96e] flex items-center justify-center mb-6"
        aria-hidden="true"
      >
        <span
          className="text-[#c9a96e] text-lg"
          style={{ fontFamily: "var(--font-pinyon), cursive" }}
        >
          To:
        </span>
      </div>

      <p
        className="m06tf2-script text-5xl mb-2"
        aria-label="Terima Kasih"
      >
        Terima Kasih
      </p>

      <div className="m06tf2-divider mt-2 mb-5" />

      <p className="text-[#FFFCF3] text-sm opacity-70 max-w-xs leading-relaxed mb-4">
        Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila
        Bapak/Ibu/Saudara/i berkenan hadir dan memberikan do&apos;a restu kepada kami.
      </p>

      <p className="text-[#FFFCF3] text-sm opacity-60 mb-6 italic">
        Wassalamu&apos;alaikum warahmatullahi wabarakatuh
      </p>

      <p className="text-[#FFFCF3] text-xs tracking-widest uppercase opacity-60 mb-2">
        Kami Yang Berbahagia
      </p>

      <h2
        className="m06tf2-name text-3xl text-white"
        aria-label="Putri dan Andika"
      >
        PUTRI &amp; ANDIKA
      </h2>

      {/* Footer */}
      <div className="mt-12 pt-6 border-t border-[rgba(201,169,110,0.15)] w-full flex flex-col items-center gap-2">
        <p className="text-[#c9a96e] text-xs tracking-widest uppercase opacity-60">
          invisimple.id
        </p>
        <p className="text-[#FFFCF3] text-xs opacity-40 tracking-widest uppercase">
          Hubungi Kami
        </p>
        <div className="flex gap-4 mt-1" aria-label="Social media links">
          {["Instagram", "WhatsApp"].map((soc) => (
            <a
              key={soc}
              href="#"
              className="text-[#c9a96e] text-xs opacity-60 hover:opacity-100 transition-opacity"
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
