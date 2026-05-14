export function WeddingGiftSection() {
  return (
    <section className="m06tf2-section flex flex-col items-center text-center border-t border-[rgba(201,169,110,0.15)]">
      <p
        className="m06tf2-script text-4xl mb-1"
        aria-label="Wedding Gift"
      >
        Wedding Gift
      </p>
      <div className="m06tf2-divider mt-2 mb-5" />

      <p className="text-[#FFFCF3] text-sm opacity-70 max-w-xs leading-relaxed mb-2">
        Doa Restu Anda merupakan karunia yang sangat berarti bagi kami.
      </p>
      <p className="text-[#FFFCF3] text-sm opacity-60 max-w-xs leading-relaxed mb-8">
        Dan jika memberi adalah ungkapan tanda kasih, Anda dapat memberi
        melalui link di bawah ini.
      </p>

      <a
        href="#"
        className="m06tf2-btn inline-flex items-center gap-2"
        aria-label="Kirim hadiah pernikahan"
      >
        <span aria-hidden="true">🎁</span> Klik di Sini
      </a>
    </section>
  )
}
