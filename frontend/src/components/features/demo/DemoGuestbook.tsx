"use client"

import { useState, useRef } from "react"

interface Message {
  id: number
  name: string
  text: string
  time: string
}

const INITIAL_MESSAGES: Message[] = [
  { id: 1, name: "Uni Rosi", text: "Selamat menempuh hidup baru, semoga sakinah mawaddah warahmah 🤲", time: "2 jam lalu" },
  { id: 2, name: "Pak Buyung", text: "Barakallah, semoga menjadi keluarga yang diridhoi Allah, dilimpahkan rezeki dan keturunan yang shalih.", time: "1 hari lalu" },
  { id: 3, name: "Tante Yuni", text: "Selamat ya Rafi & Nadia, semoga lancar acaranya dan berbahagia selalu.", time: "2 hari lalu" },
]

export function DemoGuestbook() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES)
  const nameRef = useRef<HTMLInputElement>(null)
  const msgRef = useRef<HTMLTextAreaElement>(null)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const name = nameRef.current?.value.trim() ?? ""
    const text = msgRef.current?.value.trim() ?? ""
    if (!name || !text) return
    setMessages((prev) => [
      { id: Date.now(), name, text, time: "baru saja" },
      ...prev,
    ])
    if (nameRef.current) nameRef.current.value = ""
    if (msgRef.current) msgRef.current.value = ""
  }

  return (
    <section className="guest">
      <div className="diamond-row reveal">◆ ─ ◆ ─ ◆</div>
      <div className="section-title reveal d1">Tulis Ucapan</div>
      <p className="body-text reveal d2">
        Doa dan ucapan Anda sangat berarti bagi kami
      </p>

      <form className="guest-form reveal d3" onSubmit={handleSubmit} autoComplete="off">
        <input ref={nameRef} type="text" name="name" placeholder="Nama Anda" required />
        <textarea
          ref={msgRef}
          name="msg"
          rows={4}
          placeholder="Tulis ucapan atau doa untuk kami..."
          required
        />
        <button type="submit">Kirim Ucapan&nbsp;&nbsp;💌</button>
      </form>

      <div className="messages">
        {messages.map((m) => (
          <div key={m.id} className="msg">
            <div className="msg-head">
              <span className="msg-name">{m.name}</span>
              <span className="msg-time">· {m.time}</span>
            </div>
            {m.text}
          </div>
        ))}
      </div>
    </section>
  )
}
