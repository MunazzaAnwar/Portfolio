import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/content.js'
import SectionHeading from './SectionHeading.jsx'
import ProjectModal from './ProjectModal.jsx'

const CATEGORIES = ['All', ...new Set(projects.map((p) => p.category))]

function ProjectCard({ project, onOpen }) {
  const handleMove = (e) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    card.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateZ(0)`
  }
  const handleLeave = (e) => {
    e.currentTarget.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg)'
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.45 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={() => onOpen(project)}
      data-cursor="grow"
      style={{ transition: 'transform 0.2s ease-out' }}
      className="group cursor-pointer rounded-2xl border border-void-line bg-void-card p-7 hover:border-cyan-glow/60 hover:border-glow"
    >
      <div className="flex items-center justify-between mb-6">
        <span className="font-mono text-xs uppercase tracking-widest text-violet-glow">{project.category}</span>
        <ArrowUpRight size={18} className="text-ink-faint group-hover:text-cyan-glow group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
      </div>
      <h3 className="font-display font-semibold text-xl mb-2">{project.title}</h3>
      <p className="text-ink-dim text-sm leading-relaxed mb-5">{project.summary}</p>
      <div className="flex flex-wrap gap-2">
        {project.stack.slice(0, 3).map((s) => (
          <span key={s} className="text-xs font-mono text-ink-faint">
            #{s.replace(/\s/g, '')}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [active, setActive] = useState(null)

  const filtered = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  )

  return (
    <section id="projects" className="relative py-24 md:py-32 px-6 md:px-10 max-w-7xl mx-auto">
      <SectionHeading eyebrow="04 / Projects" title="Things I've shipped." desc="A mix of AI products, SaaS tools, and automation pipelines." />

      <div className="flex gap-2 mb-10 flex-wrap">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            data-cursor="grow"
            className={`px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider border transition-colors ${
              filter === cat
                ? 'border-cyan-glow text-cyan-glow bg-cyan-glow/5'
                : 'border-void-line text-ink-dim hover:text-ink'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={setActive} />
          ))}
        </AnimatePresence>
      </motion.div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  )
}
