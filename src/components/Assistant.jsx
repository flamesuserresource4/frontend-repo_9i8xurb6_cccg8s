import { useEffect, useState } from 'react'

export default function Assistant({ userEmail }) {
  const [items, setItems] = useState([])
  const [input, setInput] = useState('')
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const load = async () => {
    const r = await fetch(`${baseUrl}/api/messages?user_email=${encodeURIComponent(userEmail)}`)
    const j = await r.json()
    setItems(j.items || [])
  }

  useEffect(()=>{ load() }, [])

  const send = async (e) => {
    e.preventDefault()
    if (!input.trim()) return
    await fetch(`${baseUrl}/api/messages`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sender: 'user', text: input, user_email: userEmail })
    })
    setInput('')
    await load()
  }

  const next = async () => {
    const r = await fetch(`${baseUrl}/api/tasks/next?user_email=${encodeURIComponent(userEmail)}`)
    const j = await r.json()
    await load()
    alert(j.task ? `Nächste Aufgabe: ${j.task.title}` : 'Keine Aufgaben vorhanden')
  }

  return (
    <div className="bg-slate-800/40 border border-blue-500/20 rounded-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-white font-semibold">Assistent</h3>
        <button onClick={next} className="text-xs bg-indigo-600 hover:bg-indigo-500 px-3 py-1 rounded text-white">Ich bin frei</button>
      </div>

      <div className="space-y-2 max-h-64 overflow-auto pr-1">
        {items.map(m => (
          <div key={m.id} className={`text-sm p-2 rounded ${m.sender==='ai' ? 'bg-indigo-900/40 border border-indigo-700/40' : 'bg-slate-900/60 border border-slate-700'}`}>
            <div className="text-xs uppercase tracking-wide text-blue-200/60 mb-1">{m.sender}</div>
            <div className="whitespace-pre-wrap text-blue-50">{m.text}</div>
          </div>
        ))}
      </div>

      <form onSubmit={send} className="mt-3 flex gap-2">
        <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Frag deinen Co‑Founder..."
          className="flex-1 rounded-lg bg-slate-900/70 border border-slate-700 text-white px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" />
        <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg px-4 py-2 transition-colors">Senden</button>
      </form>
    </div>
  )
}
