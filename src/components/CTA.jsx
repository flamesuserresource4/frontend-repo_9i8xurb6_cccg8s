export default function CTA({ onStart }){
  return (
    <section className="relative py-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(99,102,241,0.12),transparent_40%),radial-gradient(circle_at_80%_90%,rgba(8,145,178,0.12),transparent_35%)]"/>
      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight">Starte mit deinem Kontext in 2 Minuten</h2>
        <p className="text-blue-200/80 mt-2">Lege Ziele fest, importiere dein Backlog und arbeite im Chat. Der Rest passiert automatisch.</p>
        <div className="mt-6 flex justify-center">
          <button onClick={onStart} className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg shadow-emerald-900/30 transition-colors">
            Kostenlos testen
          </button>
        </div>
      </div>
    </section>
  )
}
