export default function Footer(){
  return (
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
  )
}
