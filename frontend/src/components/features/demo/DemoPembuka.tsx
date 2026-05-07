"use client"

export function DemoPembuka() {
  return (
    <section className="pembuka">
      <div className="diamond-row reveal">◆ ─ ◆ ─ ◆ ─ ◆</div>
      <div className="salam reveal d1">
        Assalamu&apos;alaikum Warahmatullahi Wabarakatuh
      </div>
      <div className="gold-line thin reveal d1"></div>
      <p className="body-text reveal d2">
        Dengan memohon ridha dan rahmat Allah Subhanahu Wa Ta&apos;ala, kami
        mengundang Bapak/Ibu/Saudara/i untuk hadir dalam acara pernikahan
        putra-putri kami:
      </p>

      <div className="frame reveal d3">
        <span className="corner tl"></span>
        <span className="corner tr"></span>
        <span className="corner bl"></span>
        <span className="corner br"></span>

        <div className="person">
          <div className="person-label">Mempelai Pria</div>
          <div className="person-name">Rafi Aulia Putra</div>
          <div className="person-parents">
            Putra dari
            <br />
            H. Syamsul Bahri &amp; Hj. Rosmawati
          </div>
        </div>

        <div className="frame-divider">
          <span>◆</span>
        </div>

        <div className="person">
          <div className="person-label">Mempelai Wanita</div>
          <div className="person-name">Nadia Rahmadhani</div>
          <div className="person-parents">
            Putri dari
            <br />
            Drs. Amrizal &amp; Dra. Yuliarni
          </div>
        </div>
      </div>

      <div className="diamond-row reveal d4" style={{ marginTop: "32px" }}>
        ◆ ─ ◆ ─ ◆ ─ ◆
      </div>
    </section>
  )
}
