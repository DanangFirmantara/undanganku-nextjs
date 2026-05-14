export function OpeningSection() {
  return (
    <section className="m06tf2-section relative flex flex-col items-center text-center">
      {/* Floral corners (CSS ornament) */}
      <span
        className="m06tf2-corner-ornament"
        style={{ top: 0, left: 0, borderTop: "2px solid #c9a96e", borderLeft: "2px solid #c9a96e", borderRadius: "0 0 60px 0" }}
        aria-hidden="true"
      />
      <span
        className="m06tf2-corner-ornament"
        style={{ top: 0, right: 0, borderTop: "2px solid #c9a96e", borderRight: "2px solid #c9a96e", borderRadius: "0 0 0 60px" }}
        aria-hidden="true"
      />

      {/* Bismillah */}
      <p className="text-[#c9a96e] text-xs tracking-widest uppercase mb-6 opacity-70">
        بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيمِ
      </p>

      {/* Monogram */}
      <div className="m06tf2-monogram mb-6" aria-label="Monogram P&A">
        <span
          className="text-3xl text-[#c9a96e]"
          style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 700 }}
        >
          P&amp;A
        </span>
      </div>

      <div className="m06tf2-divider" />

      {/* Quranic quote */}
      <blockquote className="max-w-xs mt-4">
        <p
          className="text-[#FFFCF3] text-sm leading-relaxed italic opacity-90 mb-3"
          style={{ fontFamily: "var(--font-pinyon), cursive", fontSize: "1.25rem" }}
        >
          &ldquo;Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan
          untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya,
          dan Dia menjadikan di antaramu rasa kasih dan sayang.&rdquo;
        </p>
        <cite className="text-[#c9a96e] text-xs tracking-widest not-italic uppercase">
          Q.S Ar Rum : 21
        </cite>
      </blockquote>
    </section>
  )
}
