export function DresscodeSection() {
  return (
    <section className="m06tf4-section flex flex-col items-center text-center">
      <p className="m06tf4-script text-4xl mb-1 reveal" aria-label="Dress Code">
        Dress Code
      </p>
      <div className="m06tf4-divider reveal d1" aria-hidden="true" />

      <p
        className="text-sm leading-relaxed opacity-65 max-w-[260px] mt-5 mb-8 reveal d1"
        style={{ color: "#555" }}
      >
        Kami mengundang tamu untuk hadir dengan pakaian formal sesuai warna tema
        pernikahan kami.
      </p>

      {/* Color swatches */}
      <div className="flex gap-6 items-center justify-center reveal d2">
        <div className="flex flex-col items-center gap-2">
          <div
            className="m06tf4-swatch"
            style={{ background: "#844E49" }}
            role="img"
            aria-label="Warna Dusty Rose #844E49"
          />
          <span className="text-xs opacity-55" style={{ color: "#555" }}>
            Dusty Rose
          </span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div
            className="m06tf4-swatch"
            style={{ background: "#FFFFFF", border: "2px solid rgba(132,78,73,0.25)" }}
            role="img"
            aria-label="Warna Putih / White"
          />
          <span className="text-xs opacity-55" style={{ color: "#555" }}>
            White
          </span>
        </div>
      </div>

      <p
        className="text-xs opacity-45 mt-6 reveal d3"
        style={{ color: "#844E49" }}
      >
        *Hindari pakaian berwarna merah menyala
      </p>
    </section>
  )
}
