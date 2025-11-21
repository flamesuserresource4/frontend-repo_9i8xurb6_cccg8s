export default function Logos(){
  const logos = ['Acme', 'Helios', 'North', 'Nova', 'Flux', 'Pulse']
  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center text-blue-200/60 text-sm mb-4">Vertraut von Fokus-getriebenen Teams</div>
        <div className="flex flex-wrap items-center justify-center gap-6 opacity-70">
          {logos.map((l,i)=>(
            <div key={i} className="px-4 py-2 rounded-lg border border-slate-800 bg-slate-900/40 text-blue-200/70">{l}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
