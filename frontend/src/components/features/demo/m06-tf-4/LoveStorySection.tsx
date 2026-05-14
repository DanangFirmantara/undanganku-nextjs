interface StoryItem {
  date: string
  title: string
  text: string
}

const STORY: StoryItem[] = [
  {
    date: "Agustus 2023",
    title: "Pertemuan Pertama",
    text: "Berawal dari tempat kerja di Cianjur tahun 2023, kami mengenal satu sama lain. Saat itu hanya sebatas teman kerja, belum ada benih cinta.",
  },
  {
    date: "Juni 2024",
    title: "Memulai Hubungan",
    text: "Setelah hampir setahun saling mengenal, pada 3 Juni 2024 kami memutuskan untuk melanjutkan ke hubungan yang lebih serius dan mempertemukan kedua keluarga.",
  },
  {
    date: "Desember 2025",
    title: "Lamaran",
    text: "Setelah satu setengah tahun bersama, kami resmi bertunangan. Langkah pertama menuju hari yang paling ditunggu.",
  },
]

export function LoveStorySection() {
  return (
    <section className="m06tf4-section flex flex-col items-center">
      <div className="flex flex-col items-center text-center mb-8">
        <p className="m06tf4-script text-4xl mb-1 reveal" aria-label="Love Story">
          Love Story
        </p>
        <div className="m06tf4-divider reveal d1" aria-hidden="true" />
      </div>

      <ol
        className="relative flex flex-col gap-0 w-full max-w-[300px]"
        aria-label="Timeline kisah cinta"
      >
        {STORY.map((item, i) => (
          <li key={item.date} className={`flex gap-4 reveal d${Math.min(i + 2, 5)}`}>
            {/* Timeline column */}
            <div className="flex flex-col items-center" aria-hidden="true">
              <div className="m06tf4-timeline-dot mt-1" />
              {i < STORY.length - 1 && (
                <div className="m06tf4-timeline-line" />
              )}
            </div>

            {/* Content */}
            <div className="pb-8 flex-1">
              <p
                className="text-xs tracking-[0.15em] uppercase mb-0.5 font-medium"
                style={{ color: "#844E49" }}
              >
                {item.date}
              </p>
              <p
                className="text-sm font-semibold mb-1"
                style={{ color: "#333", fontFamily: "var(--font-cormorant), serif" }}
              >
                {item.title}
              </p>
              <p className="text-sm leading-relaxed opacity-60" style={{ color: "#444" }}>
                {item.text}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
