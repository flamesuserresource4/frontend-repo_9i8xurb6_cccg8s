import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Hero from './components/Hero'
import TaskList from './components/TaskList'
import Assistant from './components/Assistant'

function App() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [tasks, setTasks] = useState([])
  const userEmail = 'founder@company.com'
  const navigate = useNavigate()

  const load = async () => {
    const r = await fetch(`${baseUrl}/api/tasks`)
    const j = await r.json()
    setTasks(j.items || [])
  }

  useEffect(() => { load() }, [])

  const createTask = async (t) => {
    await fetch(`${baseUrl}/api/tasks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...t, status: 'backlog' })
    })
    await load()
  }

  const updateStatus = async (id, status) => {
    await fetch(`${baseUrl}/api/tasks/${id}/status`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status })
    })
    await load()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.06),transparent_45%)]"></div>
      <div className="relative max-w-6xl mx-auto p-6 md:p-10">
        <div className="flex items-center justify-between mb-6">
          <Link to="/" className="text-blue-200/80 hover:text-white">← Zur Landingpage</Link>
          <button onClick={()=>navigate('/test')} className="text-xs bg-white/10 hover:bg-white/15 border border-white/10 text-white px-3 py-1.5 rounded-lg">Systemtest</button>
        </div>
        <Hero onCreateTask={createTask} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <TaskList items={tasks} onStatus={updateStatus} />
          </div>
          <div>
            <Assistant userEmail={userEmail} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
