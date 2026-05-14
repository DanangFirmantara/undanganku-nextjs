interface StoryItem {
  date: string
  text: string
  side: "left" | "right"
}

const STORY: StoryItem[] = [
  {
    date: "2023",
    text: "Berawal dari tempat pekerjaan Cianjur-2023, kami mengenal satu sama lain dan belum ada benih cinta kala itu, hanya sebatas teman kerja.",
    side: "right",
  },
  {
    date: "2024",
    text: "Setelah cukup mengenal satu sama lain, lebih kurang satu tahun menjalin pertemanan. Akhirnya kami memutuskan untuk melanjutkan ke hubungan yang lebih serius, serta mempertemukan kedua keluarga.",
    side: "left",
  },
  {
    date: "28 DESEMBER 2027",
    text: "Kami melaksanakan akad terlebih dahulu dan bersatu dalam ikatan pernikahan yang suci.",
    side: "right",
  },
]

export function LoveStorySection() {
  return (
    <section
      className="m06tf3-sep"
      style={{ padding: "4em 2em", background: "linear-gradient(180deg,#FFFCF3 0%,#D3CAC5 100%)" }}
    >
      {/* Heading */}
      <div className="flex flex-col items-center text-center mb-8">
        <p
          className="m06tf3-script"
          style={{ fontSize: "42px", letterSpacing: "0.5px" }}
          aria-label="Love Story"
        >
          Love Story
        </p>
        <div className="m06tf3-divider" style={{ margin: "12px auto" }} />
      </div>

      {/* Timeline */}
      <ol
        className="relative flex flex-col max-w-sm mx-auto"
        aria-label="Timeline kisah cinta"
      >
        {STORY.map((item, i) => (
          <li key={item.date} className="flex items-start gap-3 mb-0">
            {/* Timeline column — center */}
            <div className="flex flex-col items-center flex-shrink-0 pt-3" aria-hidden="true">
              <div className="m06tf3-timeline-dot" />
              {i < STORY.length - 1 && (
                <div className="m06tf3-timeline-line" style={{ minHeight: "80px" }} />
              )}
            </div>

            {/* Story card */}
            <div className="m06tf3-tl-card flex-1 mb-4">
              <p
                style={{
                  fontSize: "14px",
                  color: "#844E49",
                  fontWeight: 600,
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                }}
              >
                {item.date}
              </p>
              <p style={{ fontSize: "16px", color: "#333", lineHeight: "1.5em" }}>
                {item.text}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
