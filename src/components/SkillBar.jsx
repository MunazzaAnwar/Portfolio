import { motion } from 'framer-motion'

export default function SkillBar({ name, level }) {
  return (
    <div>
      <div className="flex justify-between mb-2 font-mono text-xs uppercase tracking-wider">
        <span className="text-ink">{name}</span>
        <span className="text-cyan-glow">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-void-line overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-cyan-glow to-violet-glow"
        />
      </div>
    </div>
  )
}
