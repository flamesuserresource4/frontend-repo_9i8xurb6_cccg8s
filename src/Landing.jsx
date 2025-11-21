import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import LandingHero from './components/LandingHero'
import FeatureGrid from './components/FeatureGrid'
import Logos from './components/Logos'
import CTA from './components/CTA'

export default function Landing(){
  const navigate = useNavigate()
  const goApp = () => navigate('/app')

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-100">
      {/* ambient radial highlights */}
      <motion.div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        style={{
          background:
            'radial-gradient(60% 40% at 30% 0%, rgba(59,130,246,0.07) 0%, rgba(59,130,246,0) 60%), radial-gradient(50% 50% at 70% 100%, rgba(16,185,129,0.06) 0%, rgba(16,185,129,0) 60%)'
        }}
      />

      <header className="relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-indigo-600"/>
            <span className="text-white font-semibold tracking-tight">Co‑Founder OS</span>
          </motion.div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {[
              { label: 'Funktionen', href: '#features' },
              { label: 'Pricing', href: '#pricing' },
              { label: 'FAQ', href: '#faq' }
            ].map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                whileHover={{ opacity: 0.9, y: -2 }}
                className="hover:text-white/90"
              >
                {l.label}
              </motion.a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <motion.button whileHover={{ y: -2 }} onClick={goApp} className="bg-white/10 hover:bg-white/15 border border-white/10 text-white px-4 py-2 rounded-lg text-sm">Live Demo</motion.button>
            <motion.button whileHover={{ y: -2 }} onClick={goApp} className="hidden sm:inline-flex bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-semibold">Kostenlos testen</motion.button>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        <LandingHero onCTAClick={goApp} />
        <Logos />
        <FeatureGrid />
        {/* Pricing */}
        <section id="pricing" className="py-14">
          <div className="max-w-6xl mx-auto px-6">
            <motion.h3
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-white text-2xl font-semibold mb-4 text-center"
            >
              Pricing
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[{
                name:'Starter', price:'Kostenlos', bullets:['1 Workspace','Automatische Priorisierung','Chat-Assistent']
              },{
                name:'Team', price:'€29/Monat pro User', bullets:['Alles aus Starter','Rollen & Zuteilung','SLAs & Reviews']
              },{
                name:'Scale', price:'Auf Anfrage', bullets:['SAML/SSO','Datenresidenz','Priorisierungs-Engine Custom']
              }].map((p, i)=> (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  whileHover={{ y: -6, boxShadow: i===1 ? '0 20px 60px rgba(99,102,241,0.25)' : '0 10px 30px rgba(2,6,23,0.6)' }}
                  className={`rounded-2xl border ${i===1? 'border-indigo-500/40 bg-slate-900/60 shadow-[0_0_50px_-15px_rgba(99,102,241,0.35)]' : 'border-slate-700 bg-slate-900/50'} p-6 flex flex-col`}
                >
                  <div className="text-white font-semibold">{p.name}</div>
                  <div className="text-2xl mt-1">{p.price}</div>
                  <ul className="text-blue-200/80 text-sm mt-3 space-y-1 list-disc list-inside flex-1">
                    {p.bullets.map((b, j)=>(<li key={j}>{b}</li>))}
                  </ul>
                  <motion.button whileHover={{ y: -2 }} onClick={goApp} className={`mt-5 px-4 py-2 rounded-lg font-semibold ${i===1? 'bg-indigo-600 hover:bg-indigo-500 text-white' : 'bg-white/10 hover:bg-white/15 text-white'}`}>Jetzt starten</motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <CTA onStart={goApp} />
        {/* FAQ */}
        <section id="faq" className="py-12">
          <div className="max-w-3xl mx-auto px-6">
            <h3 className="text-white text-2xl font-semibold mb-4">Häufige Fragen</h3>
            <div className="divide-y divide-slate-800/80">
              {[{
                q:'Wie priorisiert das System?', a:'Wir kombinieren Impact x2 + Urgency − Effort, ergänzt durch Kontext wie Ziele und Status. So entsteht ein objektiver Next-Best-Action-Stream.'
              },{
                q:'Brauche ich Setup?', a:'Minimal. Firmenziele eintragen, Backlog importieren – du kannst innerhalb von Minuten starten.'
              },{
                q:'Wie funktioniert Team-Zuteilung?', a:'Über Rollen, Skills und Auslastung. "Ich bin frei" teilt automatisch die nächste passende Aufgabe zu.'
              }].map((f,i)=>(
                <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.03 }} className="py-4">
                  <div className="text-blue-100 font-medium">{f.q}</div>
                  <div className="text-blue-200/80 text-sm mt-1">{f.a}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <motion.footer initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative z-10 border-t border-slate-800/80 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-blue-200/70">
          <div>© {new Date().getFullYear()} Co‑Founder OS</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white/90">Datenschutz</a>
            <a href="#" className="hover:text-white/90">Impressum</a>
            <a href="#" className="hover:text-white/90">Kontakt</a>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}
