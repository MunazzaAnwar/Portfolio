import { motion } from 'framer-motion'
import { aboutTimeline, profile } from '../data/content.js'
import SectionHeading from './SectionHeading.jsx'

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-6 md:px-10 max-w-7xl mx-auto">
      <SectionHeading eyebrow="01 / About" title="From typed-out idea to deployed system." />

      <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-12 md:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-5 text-ink-dim leading-relaxed"
        >
          <p>
            I'm {profile.name}, a Computer Science student and full-stack engineer based in {profile.location}.
            I split my time between client work, an AI startup-in-progress, and a CS degree that keeps me honest
            about fundamentals.
          </p>
          <p>
            My favorite problems sit at the intersection of clean frontend engineering and applied AI — voice
            agents, retrieval-augmented systems, and the unglamorous backend work that makes them reliable.
          </p>
          <p>
            Outside of code, I think a lot about go-to-market: how a working prototype becomes a product someone
            will actually pay for. That commercial instinct shapes every technical decision I make.
          </p>
          <div className="flex gap-8 pt-4 font-mono text-sm">
            <div>
              <p className="text-3xl font-display text-cyan-glow">5+</p>
              <p className="text-ink-faint mt-1">Shipped projects</p>
            </div>
            <div>
              <p className="text-3xl font-display text-cyan-glow">3</p>
              <p className="text-ink-faint mt-1">Internships &amp; roles</p>
            </div>
            <div>
              <p className="text-3xl font-display text-cyan-glow">2026</p>
              <p className="text-ink-faint mt-1">Graduating</p>
            </div>
          </div>
        </motion.div>

        <div className="relative pl-8 border-l border-void-line space-y-10">
          {aboutTimeline.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="relative"
            >
              <span className="absolute -left-[34px] top-1.5 w-3 h-3 rounded-full bg-void border-2 border-cyan-glow" />
              <p className="font-mono text-xs text-violet-glow tracking-widest mb-1">{item.year}</p>
              <h3 className="font-display font-medium text-lg">{item.title}</h3>
              <p className="text-ink-dim text-sm mt-1.5 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
