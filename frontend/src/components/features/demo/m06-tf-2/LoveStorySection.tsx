interface StoryItem {
  date: string
  text: string
}

const STORY: StoryItem[] = [
  {
    date: "25 AGUSTUS 2023",
    text: "Berawal dari tempat pekerjaan Cianjur-2023, kami mengenal satu sama lain dan belum ada benih cinta kala itu, hanya sebatas teman kerja.",
  },
  {
    date: "03 JUNI 2024",
    text: "Setelah cukup mengenal satu sama lain, satu tahun kurang kira-kira tiga tahun menjalin hubungan. 03 Juni 2024 akhirnya kita memutuskan untuk melanjutkan ke hubungan yang lebih serius, serta mempertemukan kedua keluarga.",
  },
  {
    date: "28 DESEMBER 2027",
    text: "Kami melaksanakan akad terlebih dahulu dan bersatu dalam ikatan pernikahan yang suci.",
  },
]

export function LoveStorySection() {
  return (
    <section className="m06tf2-section border-t border-[rgba(201,169,110,0.15)]">
      <div className="flex flex-col items-center text-center mb-8">
        <p
          className="m06tf2-script text-4xl mb-1"
          aria-label="Love Story"
        >
          Love Story
        </p>
        <div className="m06tf2-divider mt-2" />
      </div>

      <ol className="relative flex flex-col gap-0 max-w-xs mx-auto" aria-label="Timeline kisah cinta">
        {STORY.map((item, i) => (
          <li key={item.date} className="flex gap-4">
            {/* Timeline column */}
            <div className="flex flex-col items-center" aria-hidden="true">
              <div className="m06tf2-timeline-dot mt-1" />
              {i < STORY.length - 1 && (
                <div className="m06tf2-timeline-line" style={{ minHeight: "60px" }} />
              )}
            </div>

            {/* Content */}
            <div className="pb-8">
              <p className="text-[#c9a96e] text-xs tracking-widest uppercase mb-1 font-medium">
                {item.date}
              </p>
              <p className="text-[#FFFCF3] text-sm leading-relaxed opacity-80">
                {item.text}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
