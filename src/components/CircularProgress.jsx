import { motion } from 'framer-motion'

export default function CircularProgress({ name, value, size = 120 }) {
  const stroke = 8
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#1E2536"
            strokeWidth={stroke}
            fill="none"
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="url(#circGradient)"
            strokeWidth={stroke}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: circumference - (value / 100) * circumference }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          />
          <defs>
            <linearGradient id="circGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00D9FF" />
              <stop offset="100%" stopColor="#7B61FF" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center font-display font-semibold text-lg">
          {value}%
        </div>
      </div>
      <p className="font-mono text-xs uppercase tracking-wider text-ink-dim text-center">{name}</p>
    </div>
  )
}
