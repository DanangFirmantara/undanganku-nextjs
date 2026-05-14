export function OpeningSection() {
  return (
    <section className="m06tf3-section relative flex flex-col items-center text-center">
      {/* Corner ornaments */}
      <span
        className="m06tf3-corner"
        style={{ top: 0, left: 0, borderTop: "2px solid #844E49", borderLeft: "2px solid #844E49", borderRadius: "0 0 60px 0" }}
        aria-hidden="true"
      />
      <span
        className="m06tf3-corner"
        style={{ top: 0, right: 0, borderTop: "2px solid #844E49", borderRight: "2px solid #844E49", borderRadius: "0 0 0 60px" }}
        aria-hidden="true"
      />

      {/* Bismillah */}
      <p
        className="text-xs tracking-widest uppercase mb-6"
        style={{ color: "#844E49", fontSize: "14px", letterSpacing: "0.5px" }}
      >
        بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيمِ
      </p>

      {/* Monogram */}
      <div className="m06tf3-monogram mb-6" aria-label="Monogram P&A">
        <span
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontWeight: 700,
            fontSize: "28px",
            color: "#844E49",
          }}
        >
          P&amp;A
        </span>
      </div>

      <div className="m06tf3-divider" />

      {/* Quranic quote */}
      <blockquote className="max-w-xs mt-4">
        <p
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "20px",
            lineHeight: "1.5em",
            letterSpacing: "0.5px",
            color: "#333",
            fontStyle: "italic",
          }}
          className="mb-3"
        >
          &ldquo;Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
          pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan
          merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih
          dan sayang.&rdquo;
        </p>
        <cite
          style={{ fontSize: "14px", color: "#844E49", letterSpacing: "0.5px" }}
          className="not-italic tracking-widest uppercase"
        >
          QS. Ar-Rum : 21
        </cite>
      </blockquote>
    </section>
  )
}
