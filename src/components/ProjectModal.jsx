import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink } from 'lucide-react'

export default function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-void/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-void-card border border-void-line rounded-2xl max-w-2xl w-full p-8 md:p-10 max-h-[85vh] overflow-y-auto"
          >
            <button
              onClick={onClose}
              data-cursor="grow"
              className="absolute top-5 right-5 text-ink-dim hover:text-cyan-glow transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <p className="font-mono text-xs uppercase tracking-widest text-cyan-glow mb-3">
              {project.category} — {project.year}
            </p>
            <h3 className="font-display font-semibold text-2xl md:text-3xl mb-4">{project.title}</h3>
            <p className="text-ink-dim leading-relaxed mb-6">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 rounded-full border border-void-line font-mono text-xs text-ink-dim"
                >
                  {s}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              data-cursor="grow"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-glow text-void font-mono text-xs uppercase tracking-widest hover:bg-violet-glow transition-colors"
            >
              View case study <ExternalLink size={14} />
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
