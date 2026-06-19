import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, desc, align = 'left' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-14 md:mb-20 ${align === 'center' ? 'text-center mx-auto max-w-2xl' : ''}`}
    >
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-glow mb-3">{eyebrow}</p>
      <h2 className="font-display font-semibold text-3xl md:text-5xl tracking-tight">{title}</h2>
      {desc && <p className="mt-4 text-ink-dim max-w-xl">{desc}</p>}
    </motion.div>
  )
}
