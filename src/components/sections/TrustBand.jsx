import { motion } from 'framer-motion'
import { ShieldCheck, Clock, CheckCircle2, Car } from 'lucide-react'
import Container from '../ui/Container'

const pillars = [
  {
    title: 'Safety First',
    icon: ShieldCheck,
    description: 'Safety-focused transportation designed to give corporate teams total confidence in every journey.',
    stat: '100%',
    statLabel: 'Verified Drivers',
    color: '#0284C7',
  },
  {
    title: 'On-Time Always',
    icon: Clock,
    description: 'Punctuality is non-negotiable. Your employees arrive and depart on schedule, aligned with shift timings.',
    stat: '24/7',
    statLabel: 'Operations',
    color: '#059669',
  },
  {
    title: 'Managed Fleet',
    icon: Car,
    description: 'A dedicated fleet of 50 sedans and SUVs maintained exclusively for corporate employee transportation.',
    stat: '50',
    statLabel: 'Active Units',
    color: '#D97706',
  },
  {
    title: 'Dependable Partner',
    icon: CheckCircle2,
    description: 'A reliable B2B transportation partner with dedicated operational support for every corporate client.',
    stat: 'B2B',
    statLabel: 'Corporate Focus',
    color: '#7C3AED',
  },
]

export default function TrustBand() {
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-200 relative overflow-hidden" aria-labelledby="trust-heading">
      {/* Decorative background blob */}
      <div className="absolute -top-32 right-0 w-[600px] h-[600px] bg-sky-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block text-[#0284C7] text-xs font-bold tracking-widest uppercase mb-4 bg-[#EFF6FF] px-3 py-1.5 rounded-full border border-sky-100"
          >
            Operational Commitment
          </motion.span>
          <motion.h2
            id="trust-heading"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight"
          >
            Transportation that keeps your <br className="hidden sm:block" />
            organization moving.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl pointer-events-none"
                  style={{ backgroundColor: pillar.color }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 flex-shrink-0 border"
                  style={{ backgroundColor: `${pillar.color}15`, borderColor: `${pillar.color}25`, color: pillar.color }}
                >
                  <Icon size={22} strokeWidth={1.5} />
                </div>

                {/* Big stat */}
                <div className="font-heading text-4xl font-black mb-1 tracking-tight" style={{ color: pillar.color }}>
                  {pillar.stat}
                </div>
                <div className="text-slate-500 text-xs font-semibold uppercase tracking-widest mb-4">
                  {pillar.statLabel}
                </div>

                {/* Divider */}
                <div className="w-10 h-0.5 rounded-full bg-slate-100 mb-4" />

                {/* Text */}
                <h3 className="font-heading font-bold text-slate-900 text-lg mb-2">{pillar.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{pillar.description}</p>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
