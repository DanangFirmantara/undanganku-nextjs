"use client"

import { useState } from "react"

interface GuestMessage {
  id: number
  name: string
  hadir: string
  message: string
}

const INITIAL_MESSAGES: GuestMessage[] = [
  { id: 1, name: "Budi Santoso", hadir: "Hadir", message: "Selamat menempuh hidup baru! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah." },
  { id: 2, name: "Siti Nurhaliza", hadir: "Hadir", message: "Barakallahu lakuma wa baraka alaykuma wa jama'a baynakuma fi khayr. Aamiin." },
  { id: 3, name: "Doni Kusuma", hadir: "Tidak Hadir", message: "Maaf tidak bisa hadir, semoga pernikahannya lancar dan penuh berkah." },
]

export function RSVPSection() {
  const [name, setName] = useState("")
  const [hadir, setHadir] = useState("Hadir")
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<GuestMessage[]>(INITIAL_MESSAGES)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!name.trim() || !message.trim()) return
    setMessages((prev) => [
      { id: Date.now(), name: name.trim(), hadir, message: message.trim() },
      ...prev,
    ])
    setName("")
    setMessage("")
  }

  return (
    <section className="m06tf-rsvp">
      <div className="m06tf-section-label" style={{ color: "rgba(255,255,255,0.45)", letterSpacing: "0.35em", textTransform: "uppercase", fontSize: "11px", marginBottom: "8px" }}>
        Ucapan &amp; Doa
      </div>
      <div className="m06tf-rsvp-title reveal d1">Tulis Ucapan</div>
      <div className="m06tf-rsvp-sub reveal d2">Sampaikan doa dan ucapan terbaik untuk pengantin</div>

      <form className="m06tf-rsvp-form reveal d3" onSubmit={handleSubmit} noValidate>
        <div>
          <label className="m06tf-form-label" htmlFor="rsvp-name">Nama</label>
          <input
            id="rsvp-name"
            className="m06tf-form-input"
            type="text"
            placeholder="Nama kamu"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            maxLength={80}
          />
        </div>
        <div>
          <label className="m06tf-form-label" htmlFor="rsvp-hadir">Kehadiran</label>
          <select
            id="rsvp-hadir"
            className="m06tf-form-select"
            value={hadir}
            onChange={(e) => setHadir(e.target.value)}
          >
            <option value="Hadir">Hadir</option>
            <option value="Tidak Hadir">Tidak Hadir</option>
          </select>
        </div>
        <div>
          <label className="m06tf-form-label" htmlFor="rsvp-message">Pesan</label>
          <textarea
            id="rsvp-message"
            className="m06tf-form-textarea"
            placeholder="Tulis ucapan dan doa..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            maxLength={300}
          />
        </div>
        <button type="submit" className="m06tf-submit-btn">Kirim Ucapan</button>
      </form>

      <div className="m06tf-messages">
        <div className="m06tf-messages-title">Ucapan Tamu</div>
        {messages.map((msg) => (
          <div key={msg.id} className="m06tf-message-item">
            <div className="m06tf-message-name">{msg.name}</div>
            <div className="m06tf-message-hadir">{msg.hadir}</div>
            <div className="m06tf-message-text">{msg.message}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
