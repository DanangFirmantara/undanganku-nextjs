"use client"

import { useState } from "react"

interface Wish {
  id: number
  name: string
  message: string
  attendance: "hadir" | "tidak"
}

const INITIAL_WISHES: Wish[] = [
  {
    id: 1,
    name: "Siti Rahayu",
    message: "Semoga menjadi keluarga yang sakinah mawaddah warahmah. Barakallah!",
    attendance: "hadir",
  },
  {
    id: 2,
    name: "Budi Santoso",
    message: "Selamat menempuh hidup baru, semoga langgeng dan bahagia selalu.",
    attendance: "hadir",
  },
  {
    id: 3,
    name: "Dewi Anggraini",
    message: "Mohon maaf tidak bisa hadir, tapi doa terbaik selalu menyertai kalian.",
    attendance: "tidak",
  },
]

export function WishesSection() {
  const [wishes, setWishes] = useState<Wish[]>(INITIAL_WISHES)
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [attendance, setAttendance] = useState<"hadir" | "tidak">("hadir")

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!name.trim() || !message.trim()) return
    const newWish: Wish = {
      id: Date.now(),
      name: name.trim(),
      message: message.trim(),
      attendance,
    }
    setWishes((prev) => [newWish, ...prev])
    setName("")
    setMessage("")
    setAttendance("hadir")
  }

  return (
    <section className="m06tf4-section">
      <div className="flex flex-col items-center text-center mb-6">
        <p className="m06tf4-script text-4xl mb-1 reveal" aria-label="RSVP & Ucapan">
          RSVP &amp; Ucapan
        </p>
        <div className="m06tf4-divider reveal d1" aria-hidden="true" />
        <p
          className="text-sm opacity-60 max-w-[260px] mt-4 reveal d1"
          style={{ color: "#555" }}
        >
          Berikan konfirmasi kehadiran dan ucapan terbaik untuk kami.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 max-w-[300px] mx-auto mb-8 reveal d2"
        noValidate
      >
        <div>
          <label
            htmlFor="wish-name"
            className="text-xs tracking-[0.15em] uppercase block mb-1 font-medium"
            style={{ color: "#844E49" }}
          >
            Nama
          </label>
          <input
            id="wish-name"
            type="text"
            className="m06tf4-input"
            placeholder="Nama kamu"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label
            htmlFor="wish-message"
            className="text-xs tracking-[0.15em] uppercase block mb-1 font-medium"
            style={{ color: "#844E49" }}
          >
            Ucapan
          </label>
          <textarea
            id="wish-message"
            className="m06tf4-input"
            placeholder="Tulis ucapan kamu..."
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <fieldset>
          <legend
            className="text-xs tracking-[0.15em] uppercase mb-2 font-medium"
            style={{ color: "#844E49" }}
          >
            Kehadiran
          </legend>
          <div className="flex gap-4">
            {(["hadir", "tidak"] as const).map((val) => (
              <label
                key={val}
                className="flex items-center gap-2 cursor-pointer text-sm opacity-70"
                style={{ color: "#333" }}
              >
                <input
                  type="radio"
                  name="attendance"
                  value={val}
                  checked={attendance === val}
                  onChange={() => setAttendance(val)}
                  className="accent-[#844E49]"
                />
                {val === "hadir" ? "✅ Hadir" : "❌ Tidak Hadir"}
              </label>
            ))}
          </div>
        </fieldset>

        <button type="submit" className="m06tf4-btn mt-1">
          Kirim Ucapan
        </button>
      </form>

      {/* Wishes list */}
      <ul
        className="flex flex-col gap-3 max-w-[300px] mx-auto"
        aria-label="Daftar ucapan"
      >
        {wishes.map((w) => (
          <li key={w.id} className="m06tf4-wish-card">
            <div className="flex items-center justify-between mb-1">
              <span
                className="text-sm font-medium"
                style={{ color: "#844E49", fontFamily: "var(--font-cormorant), serif" }}
              >
                {w.name}
              </span>
              <span className="text-xs opacity-50">
                {w.attendance === "hadir" ? "✅" : "❌"}
              </span>
            </div>
            <p
              className="text-sm leading-relaxed opacity-65"
              style={{ color: "#444" }}
            >
              {w.message}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
