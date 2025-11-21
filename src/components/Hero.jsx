import { useState } from 'react'

export default function Hero({ onCreateTask }) {
  const [title, setTitle] = useState('')
  const [impact, setImpact] = useState(7)
  const [effort, setEffort] = useState(3)
  const [urgency, setUrgency] = useState(6)

  const submit = (e) => {
    e.preventDefault()
    if (!title.trim()) return
    onCreateTask({ title, impact: Number(impact), effort: Number(effort), urgency: Number(urgency) })
    setTitle('')
  }

  return (
    <div className="text-center mb-10">
      <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">AI Co‑Founder OS</h1>
      <p className="text-lg text-blue-200/90 mb-6">Sprich mit deinem Business, priorisiere Arbeit automatisch und weise Aufgaben zu.</p>

      <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-6 gap-3 items-end bg-slate-800/40 border border-blue-500/20 rounded-xl p-4">
        <div className="md:col-span-3 text-left">
          <label className="block text-sm text-blue-200/80 mb-1">Neue Aufgabe</label>
          <input value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="z.B. Landingpage optimieren"
            className="w-full rounded-lg bg-slate-900/70 border border-slate-700 text-white px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-sm text-blue-200/80 mb-1">Impact</label>
          <input type="number" min={1} max={10} value={impact} onChange={(e)=>setImpact(e.target.value)}
            className="w-full rounded-lg bg-slate-900/70 border border-slate-700 text-white px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm text-blue-200/80 mb-1">Effort</label>
          <input type="number" min={1} max={10} value={effort} onChange={(e)=>setEffort(e.target.value)}
            className="w-full rounded-lg bg-slate-900/70 border border-slate-700 text-white px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm text-blue-200/80 mb-1">Urgency</label>
          <input type="number" min={1} max={10} value={urgency} onChange={(e)=>setUrgency(e.target.value)}
            className="w-full rounded-lg bg-slate-900/70 border border-slate-700 text-white px-3 py-2" />
        </div>
        <button className="md:col-span-1 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg px-4 py-2 transition-colors">Anlegen</button>
      </form>
    </div>
  )
}
