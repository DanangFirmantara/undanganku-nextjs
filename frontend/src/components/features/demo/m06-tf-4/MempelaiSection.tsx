interface MempelaiProps {
  role: string
  name: string
  fullName: string
  parentInfo: string
  instagramUrl: string
  instagramHandle: string
}

function MempelaiCard({
  role,
  name,
  fullName,
  parentInfo,
  instagramUrl,
  instagramHandle,
}: MempelaiProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <p
        className="text-xs tracking-[0.2em] uppercase mb-2 opacity-60"
        style={{ color: "#844E49" }}
      >
        {role}
      </p>

      {/* Avatar placeholder */}
      <div
        className="w-20 h-20 rounded-full mb-3 flex items-center justify-center"
        style={{ background: "rgba(132,78,73,0.08)", border: "1px solid rgba(132,78,73,0.2)" }}
        aria-hidden="true"
      >
        <span
          className="m06tf4-name text-2xl"
          style={{ color: "#844E49" }}
        >
          {name.charAt(0)}
        </span>
      </div>

      <h2 className="m06tf4-script text-2xl mb-1" aria-label={fullName}>
        {fullName}
      </h2>

      <p
        className="text-xs leading-relaxed opacity-55 max-w-[180px] mt-1 mb-4"
        style={{ color: "#555" }}
      >
        {parentInfo}
      </p>

      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="m06tf4-btn-outline text-xs flex items-center gap-1.5"
        aria-label={`Instagram ${fullName}`}
        style={{ padding: "0.45rem 1rem" }}
      >
        <span aria-hidden="true">📷</span> {instagramHandle}
      </a>
    </div>
  )
}

export function MempelaiSection() {
  return (
    <section className="m06tf4-section flex flex-col items-center text-center">
      <p className="m06tf4-script text-4xl mb-1 reveal" aria-label="Mempelai">
        Mempelai
      </p>
      <div className="m06tf4-divider reveal d1" aria-hidden="true" />

      <div className="flex flex-col gap-8 mt-8 w-full max-w-[300px]">
        {/* Divider between mempelai */}
        <MempelaiCard
          role="Mempelai Wanita"
          name="Putri"
          fullName="Putri Cantika Sari"
          parentInfo="Putri dari Bpk. H. Ahmad Sari & Ibu Hj. Sri Wahyuni"
          instagramUrl="#"
          instagramHandle="@putricantika"
        />

        {/* Ornamental separator */}
        <div className="flex items-center gap-3 reveal d2" aria-hidden="true">
          <div className="flex-1 h-px" style={{ background: "rgba(132,78,73,0.15)" }} />
          <span className="m06tf4-script text-2xl" style={{ color: "#844E49" }}>
            &amp;
          </span>
          <div className="flex-1 h-px" style={{ background: "rgba(132,78,73,0.15)" }} />
        </div>

        <MempelaiCard
          role="Mempelai Pria"
          name="Andika"
          fullName="Putra Andika Pratama"
          parentInfo="Putra dari Bpk. H. Budi Pratama & Ibu Hj. Dewi Lestari"
          instagramUrl="#"
          instagramHandle="@andika.pratama"
        />
      </div>
    </section>
  )
}
