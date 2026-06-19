import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { experience } from '../data/content.js'
import SectionHeading from './SectionHeading.jsx'

gsap.registerPlugin(ScrollTrigger)

export default function Experience() {
  const lineRef = useRef(null)
  const wrapRef = useRef(null)

  useEffect(() => {
    const line = lineRef.current
    const wrap = wrapRef.current
    if (!line || !wrap) return

    gsap.fromTo(
      line,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: wrap,
          start: 'top 70%',
          end: 'bottom 60%',
          scrub: true,
        },
      }
    )

    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return (
    <section id="experience" className="relative py-24 md:py-32 px-6 md:px-10 max-w-5xl mx-auto">
      <SectionHeading eyebrow="03 / Experience" title="Where the work happened." />

      <div ref={wrapRef} className="relative">
        <div className="absolute left-[7px] md:left-[7px] top-0 bottom-0 w-px bg-void-line" />
        <div
          ref={lineRef}
          className="absolute left-[7px] top-0 bottom-0 w-px bg-gradient-to-b from-cyan-glow to-violet-glow origin-top"
        />

        <div className="space-y-14">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.role + exp.period}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.04 }}
              className="relative pl-10"
            >
              <span className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-void border-2 border-cyan-glow" />
              <div className="flex flex-wrap items-baseline gap-3 mb-1">
                <h3 className="font-display font-semibold text-xl">{exp.role}</h3>
                <span className="font-mono text-xs text-ink-faint">{exp.period}</span>
              </div>
              <p className="text-violet-glow font-mono text-sm mb-3">{exp.org}</p>
              <ul className="space-y-1.5">
                {exp.points.map((p) => (
                  <li key={p} className="text-ink-dim text-sm flex gap-2 leading-relaxed">
                    <span className="text-cyan-glow mt-1.5 shrink-0">▸</span>
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
