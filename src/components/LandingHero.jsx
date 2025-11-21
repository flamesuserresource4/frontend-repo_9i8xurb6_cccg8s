import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }
  }
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
}

export default function LandingHero({ onCTAClick }) {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24">
      {/* Animated background orbs */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 blur-3xl"
        style={{
          background:
            'radial-gradient(50% 50% at 50% 50%, rgba(99,102,241,0.35) 0%, rgba(99,102,241,0) 70%)'
        }}
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1.2 }}
        className="pointer-events-none absolute -bottom-20 -right-28 h-[28rem] w-[28rem] blur-3xl"
        style={{
          background:
            'radial-gradient(50% 50% at 50% 50%, rgba(34,211,238,0.25) 0%, rgba(34,211,238,0) 70%)'
        }}
      />

      {/* Floating grid */}
      <motion.div
        aria-hidden
        className="absolute inset-0 opacity-10"
        initial={{ backgroundPosition: '0px 0px' }}
        animate={{ backgroundPosition: ['0px 0px', '0px 40px', '0px 0px'] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(148,163,184,0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.25) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.6 }} className="text-center">
          <motion.span variants={item} className="inline-flex items-center gap-2 bg-slate-800/60 border border-slate-700 text-blue-100 rounded-full px-3 py-1 text-xs mb-4">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"/> Live Prioritization
          </motion.span>
          <motion.h1 variants={item} className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Dein AI Co‑Founder für Fokus, Tempo und Wirkung
          </motion.h1>
          <motion.p variants={item} className="mt-4 md:text-lg text-blue-200/90 max-w-2xl mx-auto">
            Vereinheitliche deinen Kontext, priorisiere automatisch und arbeite im Chat. Von Idee → Ausführung, ohne Reibung.
          </motion.p>

          <motion.div variants={item} className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <motion.button
              whileHover={{ y: -2, boxShadow: '0 12px 30px rgba(99,102,241,0.35)' }}
              whileTap={{ scale: 0.98 }}
              onClick={onCTAClick}
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg shadow-indigo-900/30 transition-colors"
            >
              Jetzt ausprobieren
            </motion.button>
            <motion.a
              whileHover={{ y: -2 }}
              href="#features"
              className="bg-slate-800/70 hover:bg-slate-700 text-blue-100 px-6 py-3 rounded-lg font-semibold border border-slate-700"
            >
              Mehr erfahren
            </motion.a>
          </motion.div>

          <motion.div variants={container} className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            {[
              {title:'Automatische Priorisierung', desc:'Impact x2 + Urgency − Effort: immer das Nächste-Beste zuerst.'},
              {title:'Kontext als Vorteil', desc:'Ziele, Aufgaben, Entscheidungen – alles in einem Strom.'},
              {title:'Chat-native Ausführung', desc:'"Ich bin frei" → Zuteilung, Statuswechsel und nächste Schritte.'}
            ].map((f, i)=> (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -4, borderColor: 'rgba(99,102,241,0.45)', boxShadow: '0 10px 30px rgba(2,6,23,0.6)' }}
                className="rounded-xl border border-blue-500/20 bg-slate-900/50 p-4 transition-colors"
              >
                <div className="text-blue-200/90 font-medium">{f.title}</div>
                <div className="text-blue-200/70 text-sm mt-1">{f.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
