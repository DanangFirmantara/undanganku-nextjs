export function LiveStreamSection() {
  return (
    <section
      className="m06tf3-sep flex flex-col items-center text-center"
      style={{ padding: "4em 2em", background: "linear-gradient(180deg,#FFFCF3 0%,#FAF8F8 100%)" }}
    >
      <p
        className="m06tf3-script"
        style={{ fontSize: "28px", letterSpacing: "0.5px" }}
        aria-label="Live Streaming"
      >
        Live Streaming
      </p>

      <div className="m06tf3-divider" style={{ margin: "12px auto 20px" }} />

      <p
        style={{
          fontSize: "16px",
          color: "#333",
          lineHeight: "1.5em",
          maxWidth: "260px",
          marginBottom: "32px",
        }}
      >
        Temui kami secara virtual untuk menyaksikan upacara pernikahan kami yang
        insyaAllah akan disiarkan langsung melalui link di bawah ini.
      </p>

      <a
        href="#"
        className="m06tf3-btn"
        aria-label="Lihat Live Streaming pernikahan"
      >
        <span aria-hidden="true">📺</span> Lihat Live Streaming
      </a>
    </section>
  )
}
