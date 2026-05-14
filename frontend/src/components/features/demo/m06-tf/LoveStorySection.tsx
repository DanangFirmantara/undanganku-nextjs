const STORIES = [
  {
    year: "2019",
    event: "Pertama Bertemu",
    desc: "Kami pertama bertemu di bangku kuliah, di sebuah kelas yang tak pernah kami duga akan mengubah hidup kami.",
    side: "left" as const,
  },
  {
    year: "2020",
    event: "Mulai Dekat",
    desc: "Pandemi membuat kami semakin dekat. Percakapan tengah malam menjadi kebiasaan yang kami rindukan.",
    side: "right" as const,
  },
  {
    year: "2023",
    event: "Ta'aruf",
    desc: "Dengan restu keluarga, kami memulai ta'aruf. Langkah yang penuh doa dan harapan baik.",
    side: "left" as const,
  },
  {
    year: "2024",
    event: "Lamaran",
    desc: "Resmi menjadi tunangan di hadapan keluarga. Satu langkah lebih dekat menuju mahligai rumah tangga.",
    side: "right" as const,
  },
] as const

export function LoveStorySection() {
  return (
    <section className="m06tf-lovestory">
      <div className="m06tf-lovestory-header">
        <div className="m06tf-section-label reveal">Perjalanan Cinta</div>
        <div className="m06tf-section-title reveal d1">Love Story</div>
        <div className="gold-line short reveal d2" />
      </div>

      <div className="m06tf-timeline">
        {STORIES.map((story, i) => (
          <div key={story.year} className={`m06tf-timeline-item ${story.side} reveal d${Math.min(i + 1, 5) as 1 | 2 | 3 | 4 | 5}`}>
            <div className="m06tf-timeline-dot" aria-hidden="true" />
            <div className="m06tf-timeline-content">
              <div className="m06tf-timeline-year">{story.year}</div>
              <div className="m06tf-timeline-event">{story.event}</div>
              <div className="m06tf-timeline-desc">{story.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
