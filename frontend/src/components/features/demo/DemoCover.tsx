"use client"

interface DemoCoverProps {
  motesRef: React.RefObject<HTMLDivElement | null>
  onOpen: () => void
}

export function DemoCover({ motesRef, onOpen }: DemoCoverProps) {
  return (
    <section className="cover">
      <div className="motes" ref={motesRef}></div>

      <div className="diamond-row reveal d1">◆ ◇ ◆ ◇ ◆ ◇ ◆</div>

      <div className="arabic basmallah reveal d2">
        بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
      </div>
      <div className="basmallah-tr reveal d3">
        Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang
      </div>

      <div className="gold-line short reveal d3"></div>

      <div className="label cover-label reveal d3">UNDANGAN&nbsp;PERNIKAHAN</div>

      <div className="cover-names">
        <div className="name reveal d4">Rafi Aulia Putra</div>
        <div className="amp-row reveal d4">
          <span>◆</span>
          <span className="amp">&amp;</span>
          <span>◆</span>
        </div>
        <div className="name reveal d4">Nadia Rahmadhani</div>
      </div>

      <div className="cover-date reveal d5">
        Sabtu, 14 Juni 2026 · Padang, Sumatera Barat
      </div>

      <button className="open-btn reveal d5" onClick={onOpen}>
        ✉&nbsp;&nbsp;Buka Undangan
      </button>
      <div className="btn-sub reveal d5">Ketuk untuk membuka undangan kami</div>

      <div className="diamond-row reveal d5" style={{ marginTop: "32px" }}>
        ◆ ◇ ◆ ◇ ◆ ◇ ◆
      </div>

      <div className="scroll-hint">GESER KE BAWAH ↓</div>
    </section>
  )
}
