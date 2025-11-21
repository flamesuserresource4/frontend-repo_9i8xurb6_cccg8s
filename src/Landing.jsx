import { useNavigate } from 'react-router-dom'
import LandingHero from './components/LandingHero'
import FeatureGrid from './components/FeatureGrid'
import Logos from './components/Logos'
import CTA from './components/CTA'

export default function Landing(){
  const navigate = useNavigate()
  const goApp = () => navigate('/app')

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-100">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.07),transparent_45%),radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.06),transparent_55%)] pointer-events-none"/>

      <header className="relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-indigo-600"></div>
            <span className="text-white font-semibold tracking-tight">Co‑Founder OS</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:text-white/90" href="#features">Funktionen</a>
            <a className="hover:text-white/90" href="#pricing">Pricing</a>
            <a className="hover:text-white/90" href="#faq">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <button onClick={goApp} className="bg-white/10 hover:bg-white/15 border border-white/10 text-white px-4 py-2 rounded-lg text-sm">Live Demo</button>
            <button onClick={goApp} className="hidden sm:inline-flex bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-semibold">Kostenlos testen</button>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        <LandingHero onCTAClick={goApp} />
        <Logos />
        <FeatureGrid />
        <section id="pricing" className="py-14">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[{
                name:'Starter', price:'Kostenlos', bullets:['1 Workspace','Automatische Priorisierung','Chat-Assistent']
              },{
                name:'Team', price:'€29/Monat pro User', bullets:['Alles aus Starter','Rollen & Zuteilung','SLAs & Reviews']
              },{
                name:'Scale', price:'Auf Anfrage', bullets:['SAML/SSO','Datenresidenz','Priorisierungs-Engine Custom']
              }].map((p, i)=> (
                <div key={i} className={`rounded-2xl border ${i===1? 'border-indigo-500/40 bg-slate-900/60 shadow-[0_0_50px_-15px_rgba(99,102,241,0.35)]' : 'border-slate-700 bg-slate-900/50'} p-6 flex flex-col`}>
                  <div className="text-white font-semibold">{p.name}</div>
                  <div className="text-2xl mt-1">{p.price}</div>
                  <ul className="text-blue-200/80 text-sm mt-3 space-y-1 list-disc list-inside flex-1">
                    {p.bullets.map((b, j)=>(<li key={j}>{b}</li>))}
                  </ul>
                  <button onClick={goApp} className={`mt-5 px-4 py-2 rounded-lg font-semibold ${i===1? 'bg-indigo-600 hover:bg-indigo-500 text-white' : 'bg-white/10 hover:bg-white/15 text-white'}`}>Jetzt starten</button>
                </div>
              ))}
            </div>
          </div>
        </section>
        <CTA onStart={goApp} />
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
                <div key={i} className="py-4">
                  <div className="text-blue-100 font-medium">{f.q}</div>
                  <div className="text-blue-200/80 text-sm mt-1">{f.a}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-slate-800/80 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-blue-200/70">
          <div>© {new Date().getFullYear()} Co‑Founder OS</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white/90">Datenschutz</a>
            <a href="#" className="hover:text-white/90">Impressum</a>
            <a href="#" className="hover:text-white/90">Kontakt</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
