export default function TaskList({ items, onStatus }) {
  return (
    <div className="bg-slate-800/40 border border-blue-500/20 rounded-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-white font-semibold">Priorisierte Aufgaben</h3>
        <span className="text-xs text-blue-200/70">{items.length} Einträge</span>
      </div>
      <ul className="space-y-2">
        {items.map((t)=> (
          <li key={t.id} className="rounded-lg border border-slate-700 bg-slate-900/60 text-white p-3 flex items-center justify-between">
            <div>
              <div className="font-medium">{t.title}</div>
              <div className="text-xs text-blue-200/70">Impact {t.impact} • Effort {t.effort} • Urgency {t.urgency} • Score {t.score}</div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs px-2 py-1 rounded bg-slate-700/60">{t.status}</span>
              {t.status !== 'done' && (
                <button onClick={()=>onStatus(t.id,'done')} className="text-xs bg-emerald-600 hover:bg-emerald-500 px-3 py-1 rounded">Erledigt</button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
