import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(max-width: 768px)').matches) return
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const ringPos = { x: 0, y: 0 }

    const onMove = (e) => {
      gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.1, ease: 'power2.out' })
      gsap.to(ring, { x: e.clientX, y: e.clientY, duration: 0.35, ease: 'power3.out' })
    }

    const onDown = () => gsap.to(ring, { scale: 0.7, duration: 0.2 })
    const onUp = () => gsap.to(ring, { scale: 1, duration: 0.2 })

    const grow = () => gsap.to(ring, { scale: 1.8, duration: 0.25, background: 'rgba(0,217,255,0.12)' })
    const shrink = () => gsap.to(ring, { scale: 1, duration: 0.25, background: 'transparent' })

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)

    const interactive = document.querySelectorAll('a, button, [data-cursor="grow"]')
    interactive.forEach((el) => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      interactive.forEach((el) => {
        el.removeEventListener('mouseenter', grow)
        el.removeEventListener('mouseleave', shrink)
      })
    }
  }, [])

  return (
    <div className="hidden md:block">
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-cyan-glow/60 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-cyan-glow pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  )
}
