import { Link } from 'react-router-dom'

export default function Navbar(){
  return (
    <header className="relative z-20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-md bg-indigo-600"/>
          <span className="text-white font-semibold tracking-tight">Co‑Founder OS</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a className="hover:text-white/90 text-blue-100" href="#features">Funktionen</a>
          <a className="hover:text-white/90 text-blue-100" href="#pricing">Pricing</a>
          <a className="hover:text-white/90 text-blue-100" href="#faq">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/app" className="bg-white/10 hover:bg-white/15 border border-white/10 text-white px-4 py-2 rounded-lg text-sm">Live Demo</Link>
          <Link to="/app" className="hidden sm:inline-flex bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-semibold">Kostenlos testen</Link>
        </div>
      </div>
    </header>
  )
}
