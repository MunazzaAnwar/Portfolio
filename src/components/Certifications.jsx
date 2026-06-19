import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { certifications } from '../data/content.js'
import SectionHeading from './SectionHeading.jsx'

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 md:py-32 px-6 md:px-10 max-w-7xl mx-auto">
      <SectionHeading eyebrow="05 / Certifications" title="Always compiling new knowledge." />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            whileHover={{ y: -4 }}
            className="rounded-xl border border-void-line bg-void-card p-6 flex items-start gap-4"
          >
            <div className="shrink-0 w-11 h-11 rounded-lg bg-gradient-to-br from-cyan-glow/20 to-violet-glow/20 flex items-center justify-center text-cyan-glow">
              <Award size={20} />
            </div>
            <div>
              <h3 className="font-display font-medium leading-snug">{cert.title}</h3>
              <p className="text-ink-dim text-sm mt-1">{cert.issuer}</p>
              <p className="text-ink-faint font-mono text-xs mt-1">{cert.year}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
