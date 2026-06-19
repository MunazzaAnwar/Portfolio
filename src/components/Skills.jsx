import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { skills } from '../data/content.js'
import SectionHeading from './SectionHeading.jsx'
import SkillBar from './SkillBar.jsx'
import CircularProgress from './CircularProgress.jsx'

export default function Skills() {
  const [active, setActive] = useState(0)

  return (
    <section id="skills" className="relative py-24 md:py-32 px-6 md:px-10 max-w-7xl mx-auto">
      <SectionHeading eyebrow="02 / Skills" title="The stack behind the work." />

      <div className="grid md:grid-cols-[1fr_auto] gap-16">
        <div>
          <div className="flex gap-2 mb-10 flex-wrap">
            {skills.categories.map((cat, i) => (
              <button
                key={cat.label}
                onClick={() => setActive(i)}
                data-cursor="grow"
                className={`px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider border transition-colors ${
                  active === i
                    ? 'border-cyan-glow text-cyan-glow bg-cyan-glow/5'
                    : 'border-void-line text-ink-dim hover:text-ink'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="grid sm:grid-cols-2 gap-x-10 gap-y-6"
            >
              {skills.categories[active].items.map((s) => (
                <SkillBar key={s.name} name={s.name} level={s.level} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="grid grid-cols-2 gap-8 content-start">
          {skills.core.map((c) => (
            <CircularProgress key={c.name} name={c.name} value={c.value} size={108} />
          ))}
        </div>
      </div>
    </section>
  )
}
