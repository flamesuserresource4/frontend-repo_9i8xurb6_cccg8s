import { motion } from 'framer-motion'

export default function Logos(){
  const logos = ['Acme', 'Helios', 'North', 'Nova', 'Flux', 'Pulse']
  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center text-blue-200/60 text-sm mb-4">Vertraut von Fokus-getriebenen Teams</div>
        <div className="relative overflow-hidden">
          <motion.div
            className="flex items-center gap-6 opacity-80"
            initial={{ x: 0 }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            {[...logos, ...logos].map((l,i)=> (
              <div key={i} className="px-4 py-2 rounded-lg border border-slate-800 bg-slate-900/40 text-blue-200/70 min-w-[120px] text-center">
                {l}
              </div>
            ))}
          </motion.div>
          {/* gradient edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-slate-950 to-transparent"/>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-slate-950 to-transparent"/>
        </div>
      </div>
    </section>
  )
}
