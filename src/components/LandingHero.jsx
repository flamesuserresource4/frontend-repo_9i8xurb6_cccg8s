export default function LandingHero({ onCTAClick }) {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="absolute -top-20 -left-20 h-72 w-72 bg-indigo-500/20 blur-3xl rounded-full"/>
      <div className="absolute -bottom-10 -right-10 h-80 w-80 bg-cyan-500/10 blur-3xl rounded-full"/>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 bg-slate-800/60 border border-slate-700 text-blue-100 rounded-full px-3 py-1 text-xs mb-4">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"/> Live Prioritization
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Dein AI Co‑Founder für Fokus, Tempo und Wirkung
          </h1>
          <p className="mt-4 md:text-lg text-blue-200/90 max-w-2xl mx-auto">
            Vereinheitliche deinen Kontext, priorisiere automatisch und arbeite im Chat. Von Idee → Ausführung, ohne Reibung.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={onCTAClick} className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg shadow-indigo-900/30 transition-colors">
              Jetzt ausprobieren
            </button>
            <a href="#features" className="bg-slate-800/70 hover:bg-slate-700 text-blue-100 px-6 py-3 rounded-lg font-semibold border border-slate-700">
              Mehr erfahren
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            {[
              {title:'Automatische Priorisierung', desc:'Impact x2 + Urgency − Effort: immer das Nächste-Beste zuerst.'},
              {title:'Kontext als Vorteil', desc:'Ziele, Aufgaben, Entscheidungen – alles in einem Strom.'},
              {title:'Chat-native Ausführung', desc:'"Ich bin frei" → Zuteilung, Statuswechsel und nächste Schritte.'}
            ].map((f, i)=> (
              <div key={i} className="rounded-xl border border-blue-500/20 bg-slate-900/50 p-4">
                <div className="text-blue-200/90 font-medium">{f.title}</div>
                <div className="text-blue-200/70 text-sm mt-1">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
