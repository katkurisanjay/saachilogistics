import { motion } from 'framer-motion'
import { ShieldCheck, UserCheck, Layers, CheckCircle2, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from '../ui/Container'

const rolePillars = [
  {
    role: 'HR Leadership',
    title: 'Employee Safety & Experience',
    description: 'Verified professional drivers, clean interiors, and reliable schedules that promote workforce satisfaction.',
    icon: ShieldCheck,
    features: ['Driver Background Verified', 'Modern Vehicle Fleet', 'Employee Peace of Mind'],
  },
  {
    role: 'Administration',
    title: 'Daily Coordination & Control',
    description: 'Eliminate daily commute coordination headaches. Our operations desk handles everything end-to-end.',
    icon: UserCheck,
    features: ['Fixed Route Management', 'Zero Admin Overhead', 'Punctual Pickup & Drop'],
  },
  {
    role: 'Operations',
    title: 'Continuous Coverage & Scale',
    description: '24/7 operations and shift schedule support with dedicated vehicle coverage aligned to your company roster.',
    icon: Layers,
    features: ['Shift Schedule Alignment', '24/7 Operations Desk', 'Scalable Fleet Deployment'],
  },
]

const procurementChecklist = [
  'Corporate Employee Service Expertise',
  'Verified 50-Vehicle Managed Fleet',
  'Professional Background-Verified Drivers',
  '24/7 Operations Support & Route Management',
  'Transparent B2B Contracts & Scalable SLAs',
]

export default function HRAdminSection() {
  return (
    <section
      className="section-py bg-slate-50 border-t border-slate-200"
      aria-labelledby="hr-admin-heading"
    >
      <Container>
        {/* Section heading */}
        <div className="max-w-3xl mb-16">
          <span className="block text-[#0284C7] text-xs font-bold tracking-widest uppercase mb-4">
            Built For Your Teams
          </span>
          <h2
            id="hr-admin-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6"
          >
            Built around the people who keep you moving.
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed max-w-2xl">
            Employee transportation solutions tailored to the distinct priorities of HR, Administration, and Operations leadership.
          </p>
        </div>

        {/* 3 Role Cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {rolePillars.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <motion.article
                key={pillar.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-bold tracking-wider text-[#0284C7] uppercase font-heading bg-[#F0F9FF] px-3 py-1 rounded-md">
                    {pillar.role}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400">
                    <Icon size={20} />
                  </div>
                </div>

                <h3 className="font-heading text-2xl font-bold text-slate-900 mb-3">
                  {pillar.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-8">
                  {pillar.description}
                </p>

                <div className="mt-auto pt-6 border-t border-slate-100 space-y-3">
                  {pillar.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                      <CheckCircle2 size={16} className="text-[#0284C7] flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* Procurement Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="bg-slate-900 rounded-2xl p-8 lg:p-12 border border-slate-800 text-white w-full overflow-hidden"
        >
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="block text-[#38BDF8] text-xs font-bold tracking-widest uppercase mb-4">
                Procurement & Vendor Evaluation
              </span>
              <h3 className="font-heading text-3xl sm:text-4xl font-bold leading-tight text-white mb-6">
                A partner your procurement team can evaluate with confidence.
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-xl">
                We meet enterprise vendor standards with verified fleet capability, dedicated account management, and structured contract execution.
              </p>
              <Link to="/contact" className="btn-primary bg-white text-slate-900 hover:bg-slate-100">
                Request Vendor Proposal
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-xl p-6 lg:p-8">
              <div className="font-heading font-bold text-sm text-white mb-6 pb-4 border-b border-white/10">
                Evaluation Checklist
              </div>
              <div className="space-y-4">
                {procurementChecklist.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#0284C7]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 size={12} className="text-[#38BDF8]" />
                    </div>
                    <span className="text-sm text-slate-300 font-medium leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
