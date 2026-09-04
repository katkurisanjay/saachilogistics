import { motion } from 'framer-motion'
import { ShieldCheck, Smile, Clock3 } from 'lucide-react'
import Container from '../ui/Container'

const experiencePoints = [
  {
    title: 'Safe',
    desc: 'GPS-tracked routes & background verified drivers.',
    icon: ShieldCheck,
  },
  {
    title: 'Comfortable',
    desc: 'Clean, modern sedan and SUV cabins for stress-free travel.',
    icon: Smile,
  },
  {
    title: 'On Time',
    desc: 'Disciplined schedules aligned with company work shifts.',
    icon: Clock3,
  },
]

export default function EmployeeExperience() {
  return (
    <section
      className="section-py bg-white border-t border-slate-200"
      aria-label="Employee Commute Experience"
    >
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6"
          >
            <span className="block text-[#0284C7] text-xs font-bold tracking-widest uppercase mb-4">
              The Commute Experience
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
              A better commute creates a better workday.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              When employees travel safely, comfortably, and on time, they start their workday refreshed and ready. We transform corporate commuting into a seamless daily ritual.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-100">
              {experiencePoints.map((pt) => {
                const Icon = pt.icon
                return (
                  <div key={pt.title}>
                    <div className="flex items-center gap-2 text-slate-900 mb-2 font-heading font-bold">
                      <div className="w-8 h-8 rounded-lg bg-[#F0F9FF] text-[#0284C7] flex items-center justify-center">
                        <Icon size={16} />
                      </div>
                      <span>{pt.title}</span>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed">{pt.desc}</p>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Right — Large Visual Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6"
          >
            <div className="rounded-2xl overflow-hidden bg-slate-900 p-10 lg:p-12 shadow-lg border border-slate-800 text-white relative">
              <div className="space-y-8 relative z-10">
                <div className="text-5xl lg:text-6xl font-heading font-bold text-slate-800 select-none leading-none tracking-tight">
                  COMMUTE <br/> WELL.
                </div>
                
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-sm relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#0284C7] rounded-l-xl" />
                  <div className="text-[#38BDF8] font-heading font-bold text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
                    Corporate Guarantee
                  </div>
                  <div className="text-white text-xl lg:text-2xl font-heading font-bold leading-tight">
                    "Every pickup on schedule. Every employee secure."
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400 pt-6 border-t border-white/10 font-medium">
                  <span className="uppercase tracking-wider">Hyderabad Operations</span>
                  <span className="text-[#38BDF8] uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldCheck size={14} /> 100% Verified Fleet
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
