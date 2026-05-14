export function ClosingSection() {
  return (
    <>
      {/* Closing content on dark maroon bg */}
      <section
        className="m06tf3-sep m06tf3-closing flex flex-col items-center text-center"
      >
        {/* Terima Kasih heading */}
        <p
          className="m06tf3-script"
          style={{ fontSize: "42px", letterSpacing: "0.5px", color: "#c9a96e" }}
          aria-label="Terima Kasih"
        >
          Terima Kasih
        </p>

        <div
          style={{ width: "60px", height: "1px", background: "#c9a96e", margin: "12px auto 20px", opacity: 0.5 }}
        />

        <p
          style={{
            fontSize: "16px",
            color: "#FFF",
            lineHeight: "1.5em",
            maxWidth: "260px",
            textAlign: "center",
            marginBottom: "16px",
          }}
        >
          Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila
          Bapak/Ibu/Saudara/i berkenan hadir dan memberikan do&apos;a restu kepada kami.
        </p>

        <p
          style={{
            fontSize: "16px",
            color: "#FFF",
            lineHeight: "1.5em",
            marginBottom: "24px",
            fontStyle: "italic",
            opacity: 0.8,
          }}
        >
          Wassalamu&apos;alaikum warahmatullahi wabarakatuh
        </p>

        <p
          style={{
            fontSize: "18px",
            color: "#c9a96e",
            fontWeight: 600,
            letterSpacing: "0.5px",
            marginBottom: "8px",
          }}
        >
          Kami Yang Berbahagia
        </p>

        <h2
          className="m06tf3-name"
          style={{ fontSize: "42px", color: "#c9a96e" }}
          aria-label="Putri dan Andika"
        >
          PUTRI &amp; ANDIKA
        </h2>
      </section>

      {/* Footer */}
      <footer className="m06tf3-footer flex flex-col items-center gap-3 text-center">
        <p style={{ fontSize: "14px", color: "#c9a96e", letterSpacing: "0.5px" }}>
          invisimple.id
        </p>
        <p
          style={{ fontSize: "14px", color: "#c9a96e", opacity: 0.7, letterSpacing: "0.5px" }}
          className="uppercase tracking-widest"
        >
          Hubungi Kami
        </p>
        <div className="flex gap-4 mt-1" aria-label="Social media links">
          {["Instagram", "WhatsApp"].map((soc) => (
            <a
              key={soc}
              href="#"
              style={{
                fontSize: "14px",
                color: "#c9a96e",
                opacity: 0.7,
                textDecoration: "none",
                transition: "opacity 0.3s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1" }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.7" }}
              aria-label={soc}
            >
              {soc}
            </a>
          ))}
        </div>
      </footer>
    </>
  )
}
