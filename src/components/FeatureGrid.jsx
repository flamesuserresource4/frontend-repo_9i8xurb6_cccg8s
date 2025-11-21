import { motion } from 'framer-motion'

export default function FeatureGrid() {
  const features = [
    {
      title: 'Unified Context',
      desc: 'Company, Ziele, Backlog und Entscheidungen werden für dich verknüpft.',
      bullets: ['OKRs & North Star', 'Shared Context Memory', 'Saubere Übergaben']
    },
    {
      title: 'Auto-Priorisierung',
      desc: 'Wirkung vor Aufwand – immer die höchste Hebelwirkung zuerst.',
      bullets: ['Scoring: Impact x2 + Urgency − Effort', 'Domains & Owner', 'Flow-Optimierung']
    },
    {
      title: 'Chat-native Workflows',
      desc: 'Sprich mit deinem Business. Der Assistent erledigt Zuteilung & Statuswechsel.',
      bullets: ['"Ich bin frei" Routing', 'Antworten mit Kontext', 'Nächste Schritte']
    },
    {
      title: 'Teammodus',
      desc: 'Rollen, Verantwortlichkeiten und automatische Load-Balancing-Zuteilung.',
      bullets: ['Skills & Kapazität', 'SLAs & Eskalation', 'Review-Loops']
    }
  ]
  return (
    <section id="features" className="relative py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-white text-2xl font-semibold mb-4 text-center"
        >
          Funktionen
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, idx)=> (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -6, rotate: 0.2 }}
              className="rounded-xl border border-slate-700 bg-slate-900/60 p-5"
            >
              <h3 className="text-white font-semibold">{f.title}</h3>
              <p className="text-blue-200/80 text-sm mt-1">{f.desc}</p>
              <ul className="text-blue-200/70 text-sm mt-3 space-y-1 list-disc list-inside">
                {f.bullets.map((b, i)=> <li key={i}>{b}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
