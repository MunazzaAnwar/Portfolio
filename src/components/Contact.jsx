import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react'
import { profile } from '../data/content.js'
import SectionHeading from './SectionHeading.jsx'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (form.message.trim().length < 10) e.message = 'Message should be at least 10 characters'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    if (!validate()) return
    setStatus('sending')
    try {
      // Wire this up to your endpoint of choice (Formspree, Resend, a serverless
      // function, etc). Replace the URL below with your real form endpoint.
      await new Promise((res) => setTimeout(res, 900))
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 md:px-10 max-w-7xl mx-auto">
      <SectionHeading eyebrow="07 / Contact" title="Let's build something." desc="Open to freelance projects, internships, and full-time roles." />

      <div className="grid md:grid-cols-2 gap-12">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="space-y-5"
          noValidate
        >
          <div>
            <label htmlFor="name" className="block font-mono text-xs uppercase tracking-wider text-ink-dim mb-2">
              Name
            </label>
            <input
              id="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-void-card border border-void-line rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-cyan-glow transition-colors"
              placeholder="Your name"
            />
            {errors.name && <p className="text-xs text-red-400 mt-1.5">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block font-mono text-xs uppercase tracking-wider text-ink-dim mb-2">
              Email
            </label>
            <input
              id="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-void-card border border-void-line rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-cyan-glow transition-colors"
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-xs text-red-400 mt-1.5">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block font-mono text-xs uppercase tracking-wider text-ink-dim mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-void-card border border-void-line rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-cyan-glow transition-colors resize-none"
              placeholder="Tell me about your project..."
            />
            {errors.message && <p className="text-xs text-red-400 mt-1.5">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            data-cursor="grow"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-glow text-void font-mono text-sm uppercase tracking-widest hover:bg-violet-glow transition-colors disabled:opacity-60"
          >
            {status === 'sent' ? (
              <>
                Sent <CheckCircle2 size={16} />
              </>
            ) : (
              <>
                {status === 'sending' ? 'Sending...' : 'Send Message'} <Send size={16} />
              </>
            )}
          </button>
          {status === 'sent' && (
            <p className="text-sm text-cyan-glow">Thanks — I'll get back to you within a day or two.</p>
          )}
          {status === 'error' && (
            <p className="text-sm text-red-400">Something went wrong. Please email me directly instead.</p>
          )}
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3 font-mono text-sm">
            <Mail size={18} className="text-cyan-glow" />
            <a href={`mailto:${profile.email}`} className="hover:text-cyan-glow transition-colors">
              {profile.email}
            </a>
          </div>
          <div className="flex items-center gap-3 font-mono text-sm">
            <MapPin size={18} className="text-cyan-glow" />
            <span>{profile.location}</span>
          </div>

          <div className="rounded-2xl overflow-hidden border border-void-line h-72">
            <iframe
              title="Location map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=74.20%2C31.42%2C74.43%2C31.62&layer=mapnik"
              className="w-full h-full grayscale invert-[0.92] contrast-[1.1] opacity-90"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
