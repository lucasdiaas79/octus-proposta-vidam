import { motion } from 'framer-motion'
import { Radar } from 'lucide-react'
import { platforms } from '../content/content'
import { Label } from '../components/Label'
import { Rich } from '../components/Rich'
import { ease, rise, stagger } from '../components/motion'

const E = [0.65, 0, 0.35, 1] as const

export default function S06Platforms() {
  const max = Math.max(...platforms.ticket.rows.map((r) => r.value))
  return (
    <div className="tex-grid-dark relative min-h-[100dvh] overflow-hidden" style={{ background: 'radial-gradient(ellipse 60% 70% at 0% 100%, #0F3438, #0A2326 65%)', backgroundColor: '#0A2326' }}>
      <motion.div variants={stagger(0.08)} initial="hidden" animate="show" className="frame">
        <motion.div variants={rise}>
          <Label n={5}>{platforms.label}</Label>
        </motion.div>
        <motion.h2 variants={rise} className="display h-md mt-5 max-w-[22ch]">
          <Rich text={platforms.title} />
        </motion.h2>

        <div className="mt-8 grid gap-3 lg:mt-auto lg:grid-cols-3 lg:pt-8">
          {/* Divisão por canal */}
          <motion.div variants={rise} className="glass cmp-p flex flex-col p-5 lg:p-6">
            <p className="label text-white/70">{platforms.split.title}</p>
            <p className="mt-4 text-[clamp(44px,4.4vw,72px)] font-extralight leading-none tracking-tightest">
              75,5<span className="ml-1 text-[0.4em] font-medium text-cyan">%</span>
            </p>
            <p className="mt-1 text-[14px] text-white/75">das reservas em canais diretos</p>
            <div className="mt-5 flex h-3 w-full overflow-hidden rounded-full bg-white/10">
              {platforms.split.parts.map((p, i) => (
                <motion.div
                  key={p.label}
                  className="h-full"
                  style={{ background: ['#5CE3E5', 'rgba(255,255,255,.45)', 'rgba(255,255,255,.22)'][i] }}
                  initial={{ width: 0 }}
                  animate={{ width: `${p.value}%` }}
                  transition={{ duration: 1.1, ease: E, delay: 0.6 + i * 0.2 }}
                />
              ))}
            </div>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[12px] text-white/70">
              {platforms.split.parts.map((p, i) => (
                <span key={p.label} className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full" style={{ background: ['#5CE3E5', 'rgba(255,255,255,.45)', 'rgba(255,255,255,.22)'][i] }} />
                  {p.label} {p.value.toLocaleString('pt-BR')}%
                </span>
              ))}
            </div>
            <p className="mt-4 text-[11px] text-white/50 lg:mt-auto lg:pt-4">{platforms.split.source}</p>
          </motion.div>

          {/* Valor por reserva */}
          <motion.div variants={rise} className="frost cmp-p flex flex-col p-5 lg:p-6">
            <p className="label text-white/70">{platforms.ticket.title}</p>
            <div className="mt-5 space-y-4">
              {platforms.ticket.rows.map((r, i) => (
                <div key={r.label}>
                  <div className="flex items-baseline justify-between text-[14px]">
                    <span className={i === 0 ? 'font-semibold text-white' : 'text-white/70'}>{r.label}</span>
                    <span className={`font-semibold tabular-nums ${i === 0 ? 'text-cyan' : 'text-white/70'}`}>
                      {platforms.ticket.unit} {r.value}
                    </span>
                  </div>
                  <div className="mt-2 h-4 w-full rounded-full bg-white/[0.06]">
                    <motion.div
                      className={`h-full rounded-full ${i === 0 ? 'bg-cyan' : 'bg-white/25'}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${(r.value / max) * 100}%` }}
                      transition={{ duration: 1.2, ease: E, delay: 0.7 + i * 0.25 }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-5 text-[15px] font-medium text-white">
              Reserva direta vale <span className="text-cyan">~65% mais</span> por reserva.
            </p>
            <p className="mt-4 text-[11px] text-white/50 lg:mt-auto lg:pt-4">{platforms.ticket.source}</p>
          </motion.div>

          {/* Monitoramento */}
          <motion.div variants={rise} className="glass-cyan cmp-p flex flex-col p-5 lg:p-6">
            <div className="flex items-center gap-2">
              <Radar className="h-4 w-4 text-cyan" strokeWidth={1.8} />
              <p className="label text-cyan">{platforms.monitor.title}</p>
            </div>
            <ul className="mt-4 space-y-3">
              {platforms.monitor.items.map((it, i) => (
                <motion.li
                  key={it}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease, delay: 0.9 + i * 0.1 }}
                  className="flex gap-3 text-[15px] leading-snug text-white"
                >
                  <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                  {it}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
