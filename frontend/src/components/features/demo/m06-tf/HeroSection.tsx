import Image from "next/image"

interface HeroSectionProps {
  onOpen: () => void
}

export function HeroSection({ onOpen }: HeroSectionProps) {
  return (
    <section className="m06tf-hero">
      <div className="m06tf-particles" aria-hidden="true" id="m06tf-particles-host" />

      <div className="m06tf-hero-img-wrap reveal d1">
        <div className="m06tf-hero-ring" aria-hidden="true" />
        <div className="m06tf-hero-ring-2" aria-hidden="true" />
        <Image
          src="/templates/m06-tf/asset-motion-06.png"
          alt="Dekorasi undangan pernikahan"
          fill
          priority
          style={{ objectFit: "contain" }}
          sizes="220px"
        />
      </div>

      <div className="m06tf-bismillah reveal d2" aria-label="Bismillahirrahmanirrahim">
        بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
      </div>

      <div className="m06tf-hero-label reveal d2">Undangan Pernikahan</div>

      <div className="gold-line short reveal d3" />

      <div className="m06tf-hero-names reveal d3" aria-label="Rizky Firmansyah dan Aulia Rahmawati">
        Rizky Firmansyah
        <span className="m06tf-hero-amp">&amp;</span>
        Aulia Rahmawati
      </div>

      <div className="m06tf-hero-date reveal d4">Sabtu, 14 Juni 2025</div>

      <button className="m06tf-open-btn reveal d5" onClick={onOpen} type="button">
        ✉&nbsp; Buka Undangan
      </button>
    </section>
  )
}
