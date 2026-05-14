import Image from "next/image"

export function ClosingSection() {
  return (
    <section className="m06tf-closing">
      <div className="gold-line reveal" style={{ background: "linear-gradient(90deg,transparent,rgba(201,169,110,0.5) 20%,rgba(201,169,110,0.5) 80%,transparent)" }} />

      <p className="m06tf-closing-quote-ar reveal d1">
        وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا
      </p>
      <p className="m06tf-closing-quote-tr reveal d2">
        &quot;Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu
        isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram
        kepadanya.&quot;<br />— QS. Ar-Rum: 21
      </p>

      <div className="m06tf-closing-deco reveal d3" aria-hidden="true">
        <Image
          src="/templates/m06-tf/asset-motion-06.png"
          alt=""
          width={80}
          height={80}
          style={{ objectFit: "contain", opacity: 0.25 }}
        />
      </div>

      <div className="m06tf-closing-names reveal d3">Rizky &amp; Aulia</div>

      <p className="m06tf-closing-body reveal d4">
        Merupakan suatu kehormatan dan kebahagiaan bagi kami mengundang
        Bapak/Ibu/Saudara/i untuk hadir dan memberikan doa restu dalam
        pernikahan kami. Kehadiran Anda adalah hadiah terbaik yang kami harapkan.
      </p>

      <div className="gold-line reveal d5" style={{ background: "linear-gradient(90deg,transparent,rgba(201,169,110,0.4) 20%,rgba(201,169,110,0.4) 80%,transparent)" }} />

      <p className="m06tf-footer reveal d5">
        Dibuat dengan <span>♥</span> menggunakan <span>Undanganku</span>
      </p>
    </section>
  )
}
