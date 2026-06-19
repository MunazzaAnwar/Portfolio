import { motion } from 'framer-motion'
import { Bot, LayoutGrid, Terminal, Compass } from 'lucide-react'
import { services } from '../data/content.js'
import SectionHeading from './SectionHeading.jsx'

const ICONS = { bot: Bot, layout: LayoutGrid, terminal: Terminal, compass: Compass }

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 px-6 md:px-10 max-w-7xl mx-auto">
      <SectionHeading eyebrow="06 / Services" title="How I can help." desc="Available for freelance engagements, contract work, and internships." />

      <div className="grid sm:grid-cols-2 gap-5">
        {services.map((s, i) => {
          const Icon = ICONS[s.icon]
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className="rounded-2xl border border-void-line bg-void-card p-8 hover:border-violet-glow/50 transition-colors"
            >
              <Icon size={26} className="text-cyan-glow mb-5" />
              <h3 className="font-display font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-ink-dim text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
