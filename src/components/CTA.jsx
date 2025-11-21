import { motion } from 'framer-motion'

export default function CTA({ onStart }){
  return (
    <section className="relative py-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(99,102,241,0.12),transparent_40%),radial-gradient(circle_at_80%_90%,rgba(8,145,178,0.12),transparent_35%)]"/>
      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-white text-3xl md:text-4xl font-bold tracking-tight"
        >
          Starte mit deinem Kontext in 2 Minuten
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-blue-200/80 mt-2"
        >
          Lege Ziele fest, importiere dein Backlog und arbeite im Chat. Der Rest passiert automatisch.
        </motion.p>
        <div className="mt-6 flex justify-center">
          <motion.button
            whileHover={{ y: -2, boxShadow: '0 12px 30px rgba(16,185,129,0.35)' }}
            whileTap={{ scale: 0.98 }}
            onClick={onStart}
            className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg shadow-emerald-900/30 transition-colors"
          >
            Kostenlos testen
          </motion.button>
        </div>
      </div>
    </section>
  )
}
