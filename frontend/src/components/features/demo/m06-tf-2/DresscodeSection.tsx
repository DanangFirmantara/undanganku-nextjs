const SWATCHES = [
  { color: "#844E49", label: "Maroon" },
  { color: "#c9a96e", label: "Gold" },
  { color: "#FFFCF3", label: "Cream" },
  { color: "#d5deea", label: "Dusty Blue" },
] as const

export function DresscodeSection() {
  return (
    <section className="m06tf2-section flex flex-col items-center text-center border-t border-[rgba(201,169,110,0.15)]">
      <p
        className="m06tf2-script text-4xl mb-1"
        aria-label="Dresscode"
      >
        Dresscode
      </p>
      <div className="m06tf2-divider mt-2 mb-5" />

      <p className="text-[#FFFCF3] text-sm opacity-70 max-w-xs leading-relaxed mb-8">
        Kami dengan hormat memberitahukan kamu untuk memakai warna-warna ini
        untuk hari istimewa kami.
      </p>

      <div className="flex gap-4 justify-center flex-wrap" role="list" aria-label="Pilihan warna dresscode">
        {SWATCHES.map(({ color, label }) => (
          <div key={color} className="flex flex-col items-center gap-2" role="listitem">
            <div
              className="m06tf2-swatch"
              style={{ backgroundColor: color }}
              aria-label={label}
              title={label}
            />
            <span className="text-[#FFFCF3] text-xs opacity-60">{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
