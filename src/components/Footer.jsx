import { profile } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="border-t border-void-line py-8 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-ink-faint">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React, Three.js &amp; GSAP.</p>
        <p>Designed &amp; engineered from {profile.location}</p>
      </div>
    </footer>
  )
}
