const SWATCHES = [
  { color: "#844E49", label: "Maroon" },
  { color: "#c9a96e", label: "Gold" },
  { color: "#FFFCF3", label: "Cream" },
  { color: "#d5deea", label: "Dusty Blue" },
] as const

export function DresscodeSection() {
  return (
    <section
      className="m06tf3-sep flex flex-col items-center text-center"
      style={{ padding: "4em 2em", background: "linear-gradient(180deg,#FFFCF3 0%,#D3CAC5 100%)" }}
    >
      <p
        className="m06tf3-script"
        style={{ fontSize: "28px", letterSpacing: "0.5px" }}
        aria-label="Dresscode"
      >
        Dresscode
      </p>

      <div className="m06tf3-divider" style={{ margin: "12px auto 20px" }} />

      <p
        style={{
          fontSize: "16px",
          color: "#333",
          lineHeight: "1.5em",
          maxWidth: "260px",
          marginBottom: "32px",
        }}
      >
        Kami dengan hormat memberitahukan kamu untuk memakai warna-warna ini
        untuk hari istimewa kami.
      </p>

      <div
        className="flex gap-4 justify-center flex-wrap"
        role="list"
        aria-label="Pilihan warna dresscode"
      >
        {SWATCHES.map(({ color, label }) => (
          <div key={color} className="flex flex-col items-center gap-2" role="listitem">
            <div
              className="m06tf3-swatch"
              style={{ backgroundColor: color }}
              aria-label={label}
              title={label}
            />
            <span style={{ fontSize: "12px", color: "#844E49" }}>{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
