export function OpeningSection() {
  return (
    <section className="m06tf4-section relative flex flex-col items-center text-center">
      {/* Corner ornaments */}
      <span
        className="m06tf4-corner"
        style={{
          top: 0,
          left: 0,
          borderTop: "2px solid #844E49",
          borderLeft: "2px solid #844E49",
          borderRadius: "0 0 48px 0",
        }}
        aria-hidden="true"
      />
      <span
        className="m06tf4-corner"
        style={{
          top: 0,
          right: 0,
          borderTop: "2px solid #844E49",
          borderRight: "2px solid #844E49",
          borderRadius: "0 0 0 48px",
        }}
        aria-hidden="true"
      />

      {/* Assalamu'alaikum */}
      <p
        className="text-sm tracking-[0.15em] uppercase opacity-60 mb-4 reveal"
        style={{ color: "#844E49" }}
      >
        Assalamu&apos;alaikum Warahmatullahi Wabarakatuh
      </p>

      {/* Arabic Bismillah */}
      <p
        className="m06tf4-arabic text-3xl mb-4 reveal d1"
        aria-label="Bismillahirrahmanirrahim"
      >
        بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيمِ
      </p>

      <div className="m06tf4-divider reveal d1" aria-hidden="true" />

      {/* Quran quote */}
      <blockquote className="max-w-[280px] mt-4 reveal d2">
        <p
          className="text-sm leading-relaxed italic opacity-80 mb-3"
          style={{ color: "#555" }}
        >
          &ldquo;Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
          pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan
          merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan
          sayang.&rdquo;
        </p>
        <cite
          className="text-xs tracking-[0.18em] not-italic uppercase opacity-70"
          style={{ color: "#844E49" }}
        >
          Q.S Ar-Rum : 21
        </cite>
      </blockquote>

      {/* Invitation opening text */}
      <p
        className="mt-8 text-sm leading-relaxed opacity-65 max-w-[280px] reveal d3"
        style={{ color: "#444" }}
      >
        Dengan memohon rahmat dan ridho Allah SWT, kami mengundang
        Bapak/Ibu/Saudara/i untuk hadir pada acara pernikahan kami.
      </p>
    </section>
  )
}
