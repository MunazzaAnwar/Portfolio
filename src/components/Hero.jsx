import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, ArrowDown } from 'lucide-react'
import NeuralField from '../three/NeuralField.jsx'
import { profile } from '../data/content.js'

const ROLES = profile.roles

function useTypewriter(words, speed = 65, pause = 1400) {
  const [text, setText] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIdx % words.length]
    let timeout

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), speed)
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 1.6)
    } else if (deleting && text.length === 0) {
      setDeleting(false)
      setWordIdx((i) => i + 1)
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, wordIdx, words, speed, pause])

  return text
}

export default function Hero() {
  const typed = useTypewriter(ROLES)

  const variants = {
    hidden: { opacity: 0, y: 24 },
    show: (i = 1) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] } }),
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden grid-bg">
      <NeuralField />
      <div className="absolute inset-0 bg-gradient-to-b from-void/20 via-void/60 to-void z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full pt-24 pb-16">
        <motion.p
          initial="hidden"
          animate="show"
          custom={0}
          variants={variants}
          className="font-mono text-xs md:text-sm text-cyan-glow tracking-widest mb-6"
        >
          $ whoami — based in {profile.location}
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="show"
          custom={1}
          variants={variants}
          className="font-display font-semibold text-[12vw] leading-[0.95] md:text-[6.5vw] md:leading-[0.95] tracking-tight"
        >
          {profile.name}
        </motion.h1>

        <motion.div
          initial="hidden"
          animate="show"
          custom={2}
          variants={variants}
          className="mt-6 h-10 md:h-12 font-mono text-lg md:text-2xl text-ink-dim flex items-center"
        >
          <span className="text-violet-glow mr-2">&gt;</span>
          <span>{typed}</span>
          <span className="inline-block w-[2px] h-6 md:h-7 bg-cyan-glow ml-1 animate-pulse" />
        </motion.div>

        <motion.p
          initial="hidden"
          animate="show"
          custom={3}
          variants={variants}
          className="mt-6 max-w-xl text-ink-dim text-base md:text-lg"
        >
          {profile.tagline} I design and build full-stack products and AI agents — from a typed-out idea to a deployed system clients actually use.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          custom={4}
          variants={variants}
          className="mt-10 flex items-center gap-5"
        >
          <a
            href="#contact"
            data-cursor="grow"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-6 py-3 rounded-full bg-cyan-glow text-void font-mono text-sm uppercase tracking-widest hover:bg-violet-glow transition-colors"
          >
            Hire Me
          </a>
          <a
            href="#projects"
            data-cursor="grow"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-6 py-3 rounded-full border border-void-line font-mono text-sm uppercase tracking-widest hover:border-cyan-glow hover:text-cyan-glow transition-colors"
          >
            View Work
          </a>

          <div className="flex items-center gap-4 ml-2">
            <a data-cursor="grow" href={profile.social.github} target="_blank" rel="noreferrer" className="text-ink-dim hover:text-cyan-glow transition-colors">
              <Github size={20} />
            </a>
            <a data-cursor="grow" href={profile.social.linkedin} target="_blank" rel="noreferrer" className="text-ink-dim hover:text-cyan-glow transition-colors">
              <Linkedin size={20} />
            </a>
            <a data-cursor="grow" href={profile.social.twitter} target="_blank" rel="noreferrer" className="text-ink-dim hover:text-cyan-glow transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-ink-faint"
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  )
}
