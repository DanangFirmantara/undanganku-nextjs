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
    <section
      className="m06tf3-sep"
      style={{ padding: "4em 2em", background: "linear-gradient(180deg,#FFFCF3 0%,#D3CAC5 100%)" }}
    >
      {/* Heading */}
      <div className="flex flex-col items-center text-center mb-6">
        <p
          className="m06tf3-script"
          style={{ fontSize: "28px", letterSpacing: "0.5px" }}
          aria-label="Wishes"
        >
          Wishes
        </p>
        <div className="m06tf3-divider" style={{ margin: "12px auto 16px" }} />
        <p style={{ fontSize: "16px", color: "#333", lineHeight: "1.5em" }}>
          Berikan doa dan ucapan terbaik untuk kami.
        </p>
      </div>

      {/* Form */}
      <div className="m06tf3-form-box max-w-xs mx-auto mb-6">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
          <div>
            <label
              htmlFor="wish-name-tf3"
              style={{ fontSize: "12px", color: "#844E49", letterSpacing: "0.5px", display: "block", marginBottom: "6px" }}
              className="uppercase"
            >
              Nama
            </label>
            <input
              id="wish-name-tf3"
              type="text"
              className="m06tf3-input"
              placeholder="Nama kamu"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="wish-message-tf3"
              style={{ fontSize: "12px", color: "#844E49", letterSpacing: "0.5px", display: "block", marginBottom: "6px" }}
              className="uppercase"
            >
              Ucapan
            </label>
            <textarea
              id="wish-message-tf3"
              className="m06tf3-input"
              placeholder="Tulis ucapan kamu..."
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              style={{ resize: "vertical" }}
            />
          </div>

          <fieldset style={{ border: "none", padding: 0, margin: 0 }}>
            <legend
              style={{ fontSize: "12px", color: "#844E49", letterSpacing: "0.5px", marginBottom: "10px" }}
              className="uppercase"
            >
              Kehadiran
            </legend>
            <div className="m06tf3-radio-wrap">
              {(["hadir", "tidak"] as const).map((val) => (
                <label
                  key={val}
                  className="m06tf3-radio-label"
                  onClick={() => setAttendance(val)}
                >
                  <span className={`m06tf3-radio-dot${attendance === val ? " is-checked" : ""}`} />
                  {val === "hadir" ? "Hadir" : "Tidak Hadir"}
                </label>
              ))}
            </div>
          </fieldset>

          <button type="submit" className="m06tf3-btn-submit">
            Kirim Ucapan
          </button>
        </form>
      </div>

      {/* Wishes list */}
      <div className="m06tf3-wishes-list-box max-w-xs mx-auto">
        <ul aria-label="Daftar ucapan">
          {wishes.map((w, i) => (
            <li
              key={w.id}
              className="m06tf3-wish-item"
              style={{ borderBottom: i < wishes.length - 1 ? "1px solid #D3CAC5" : "none", paddingBottom: i < wishes.length - 1 ? "1em" : 0 }}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="m06tf3-wish-name">{w.name}</span>
                <span style={{ fontSize: "12px", color: "#966661" }}>
                  {w.attendance === "hadir" ? "Hadir" : "Tidak Hadir"}
                </span>
              </div>
              <p className="m06tf3-wish-message">{w.message}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
