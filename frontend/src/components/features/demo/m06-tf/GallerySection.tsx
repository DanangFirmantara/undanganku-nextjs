import Image from "next/image"

const PHOTOS = [
  { id: 1, alt: "Momen bersama 1" },
  { id: 2, alt: "Momen bersama 2" },
  { id: 3, alt: "Momen bersama 3" },
  { id: 4, alt: "Momen bersama 4" },
  { id: 5, alt: "Momen bersama 5" },
  { id: 6, alt: "Momen bersama 6" },
] as const

export function GallerySection() {
  return (
    <section className="m06tf-gallery">
      <div className="m06tf-section-label reveal">Galeri</div>
      <div className="m06tf-section-title reveal d1">Momen Berharga</div>
      <div className="gold-line short reveal d2" />

      <div className="m06tf-gallery-grid reveal d3">
        {PHOTOS.map((photo) => (
          <div key={photo.id} className="m06tf-gallery-item">
            <Image
              src={`https://picsum.photos/400/300?random=${photo.id}`}
              alt={photo.alt}
              fill
              sizes="(max-width: 390px) 50vw, 195px"
              style={{ objectFit: "cover" }}
            />
            <div className="m06tf-gallery-overlay" aria-hidden="true" />
          </div>
        ))}
      </div>
    </section>
  )
}
