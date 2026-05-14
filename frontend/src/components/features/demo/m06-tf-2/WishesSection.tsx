"use client"

import { useState } from "react"

interface Wish {
  id: number
  name: string
  message: string
  attendance: "hadir" | "tidak"
}

const INITIAL_WISHES: Wish[] = [
  { id: 1, name: "Siti Rahayu", message: "Semoga menjadi keluarga yang sakinah mawaddah warahmah. Barakallah!", attendance: "hadir" },
  { id: 2, name: "Budi Santoso", message: "Selamat menempuh hidup baru, semoga langgeng dan bahagia selalu.", attendance: "hadir" },
  { id: 3, name: "Dewi Anggraini", message: "Mohon maaf tidak bisa hadir, tapi doa terbaik selalu menyertai kalian.", attendance: "tidak" },
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
    <section className="m06tf2-section border-t border-[rgba(201,169,110,0.15)]">
      <div className="flex flex-col items-center text-center mb-6">
        <p className="m06tf2-script text-4xl mb-1" aria-label="Wishes">
          Wishes
        </p>
        <div className="m06tf2-divider mt-2 mb-4" />
        <p className="text-[#FFFCF3] text-sm opacity-70 max-w-xs">
          Berikan doa dan ucapan terbaik untuk kami.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-xs mx-auto mb-8" noValidate>
        <div>
          <label htmlFor="wish-name" className="text-[#c9a96e] text-xs tracking-widest uppercase block mb-1">
            Nama
          </label>
          <input
            id="wish-name"
            type="text"
            className="m06tf2-input"
            placeholder="Nama kamu"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="wish-message" className="text-[#c9a96e] text-xs tracking-widest uppercase block mb-1">
            Ucapan
          </label>
          <textarea
            id="wish-message"
            className="m06tf2-input"
            placeholder="Tulis ucapan kamu..."
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <fieldset>
          <legend className="text-[#c9a96e] text-xs tracking-widest uppercase mb-2">Kehadiran</legend>
          <div className="flex gap-4">
            {(["hadir", "tidak"] as const).map((val) => (
              <label key={val} className="flex items-center gap-2 cursor-pointer text-sm text-[#FFFCF3] opacity-80">
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

        <button type="submit" className="m06tf2-btn mt-1">
          Kirim
        </button>
      </form>

      {/* Wishes list */}
      <ul className="flex flex-col gap-4 max-w-xs mx-auto" aria-label="Daftar ucapan">
        {wishes.map((w) => (
          <li key={w.id} className="border border-[rgba(201,169,110,0.2)] rounded-lg p-4">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[#c9a96e] text-sm font-medium">{w.name}</span>
              <span className="text-xs opacity-50">{w.attendance === "hadir" ? "✅" : "❌"}</span>
            </div>
            <p className="text-[#FFFCF3] text-sm opacity-75 leading-relaxed">{w.message}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
