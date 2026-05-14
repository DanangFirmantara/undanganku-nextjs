import Image from "next/image"

export function LeftPanel() {
  return (
    <div className="m06tf3-left relative overflow-hidden">
      {/* Background image */}
      <Image
        src="/templates/m06-tf/motion-06-fallback-new2.jpg"
        alt="Wedding background"
        fill
        className="object-cover object-center"
        priority
        sizes="(max-width: 1023px) 100vw, 58vw"
      />

      {/* Overlay gradient */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, rgba(61,21,21,0.3) 0%, rgba(61,21,21,0.55) 100%)" }}
      />

      {/* Motion layer 1 — asset-motion-06-3-min.png */}
      <div className="m06tf3-motion-layer m06tf3-layer-1">
        <Image
          src="/templates/m06-tf/asset-motion-06-3-min.png"
          alt=""
          fill
          className="object-cover object-center"
          aria-hidden="true"
          sizes="58vw"
        />
      </div>

      {/* Motion layer 2 — asset-motion-06.png (decorative overlay) */}
      <div className="m06tf3-motion-layer m06tf3-layer-2">
        <Image
          src="/templates/m06-tf/asset-motion-06.png"
          alt=""
          fill
          className="object-contain object-center"
          aria-hidden="true"
          sizes="58vw"
        />
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 lg:pb-16 text-center px-6">
        <p
          className="text-[#c9a96e] text-base lg:text-lg mb-2"
          style={{ fontFamily: "var(--font-pinyon), cursive" }}
        >
          The Wedding Of
        </p>

        <h1
          className="text-white text-2xl lg:text-4xl leading-tight mb-3"
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          PUTRI &amp; ANDIKA
        </h1>

        <div
          className="w-12 h-px mb-3"
          style={{ background: "#c9a96e" }}
        />

        <p className="text-[#FFFCF3] text-sm opacity-90 tracking-widest uppercase">
          Minggu, 28 Desember 2027
        </p>
      </div>
    </div>
  )
}
