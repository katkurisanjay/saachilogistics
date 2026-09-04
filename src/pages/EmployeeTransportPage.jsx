import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Briefcase, Building, ShieldCheck, Users } from 'lucide-react'
import Container from '../components/ui/Container'
import FinalCTA from '../components/sections/FinalCTA'
import Services from '../components/sections/Services'
import Workflow from '../components/sections/Workflow'
import Fleet from '../components/sections/Fleet'
import FAQ from '../components/sections/FAQ'

const audiences = [
  {
    title: 'HR & Administration',
    icon: Users,
    description: 'Saachi Logistics removes the daily operational burden of managing employee transportation. Our team handles coordination, scheduling, and driver management — so your HR and Admin teams can focus on people, not logistics.',
    points: ['Transportation coordination handled for you', 'Reliable scheduling across all shifts', 'Employee safety as a core priority', '24/7 support availability'],
  },
  {
    title: 'Procurement Teams',
    icon: Building,
    description: 'We offer a professional, dependable service with a clear fleet of 50 vehicles designed for consistent corporate commute operations. Discuss your specific requirements directly with our team to design the right transportation plan.',
    points: ['30 sedan + 20 SUV vehicles available', 'Scalable service based on requirements', 'Professional driver network', 'Managed daily operations'],
  },
  {
    title: 'Operations Managers',
    icon: Briefcase,
    description: 'Operational consistency is at the heart of what we deliver. From day one of deployment, Saachi Logistics maintains structured pickup schedules, professional drivers, and continuous support to ensure the transportation function runs smoothly.',
    points: ['Structured pickup and drop schedules', 'Operations support from our team', 'Adaptable to shift changes', 'Direct line of communication'],
  },
  {
    title: 'Employees',
    icon: ShieldCheck,
    description: 'A reliable, comfortable commute sets the tone for your day. Saachi Logistics provides professional, punctual transportation so your journey to and from work is one less thing to think about.',
    points: ['Safe, professional drivers', 'On-time pickup guarantee', 'Comfortable vehicles', '24/7 support if needed'],
  },
]

export default function EmployeeTransportPage() {
  return (
    <>
      <Helmet>
        <title>Employee Transportation Solutions | Saachi Logistics Hyderabad</title>
        <meta name="description" content="Saachi Logistics provides professional corporate employee transportation for IT companies and corporate organizations in Hyderabad. Sedan and SUV fleet available." />
      </Helmet>

      <main id="main-content">
        {/* Creative Hero */}
        <section className="relative pt-28 sm:pt-36 pb-24 lg:pb-32 bg-slate-900 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1554200876-56c2f25224fa?q=80&w=2070&auto=format&fit=crop" 
              alt="Corporate operations" 
              className="w-full h-full object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/90 to-slate-900/70" />
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0284C7]/20 via-transparent to-transparent pointer-events-none" />
          </div>

          <Container className="relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-block text-[#38BDF8] text-xs font-bold tracking-[0.2em] uppercase font-heading mb-6 bg-[#0369A1]/20 px-3 py-1.5 rounded-full border border-[#0284C7]/30"
              >
                Employee Transportation
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.18 }}
                className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.15] mb-6 tracking-tight"
              >
                Seamless Commutes for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#bae6fd]">Modern Enterprises</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.26 }}
                className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto"
              >
                Saachi Logistics provides safe, reliable, and professionally managed employee commute solutions — designed to completely remove the transportation burden from your organization.
              </motion.p>
            </div>
          </Container>
        </section>

        {/* Services Overview */}
        <Services />

        {/* Audience Sections - Built for Your Organization */}
        <section className="py-20 lg:py-28 bg-white relative overflow-hidden" aria-labelledby="audience-heading">
          {/* Decorative background */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 bg-slate-50 border-l border-slate-100 rounded-l-[100px] -z-10 hidden lg:block" />

          <Container>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-[#0284C7] text-xs font-bold tracking-widest uppercase mb-4 bg-[#EFF6FF] px-3 py-1.5 rounded-full border border-sky-100">
                Built for Every Stakeholder
              </span>
              <h2 id="audience-heading" className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Transportation solutions designed <br className="hidden sm:block" /> around your organization
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {audiences.map((audience, i) => {
                const Icon = audience.icon
                return (
                  <motion.div
                    key={audience.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="group bg-white border border-slate-200 rounded-3xl p-8 hover:border-[#0284C7]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-[#EFF6FF] group-hover:border-sky-100 transition-colors">
                        <Icon className="text-slate-400 group-hover:text-[#0284C7] transition-colors" size={24} />
                      </div>
                      <h3 className="font-heading text-xl font-bold text-slate-900 group-hover:text-[#0284C7] transition-colors">
                        For {audience.title}
                      </h3>
                    </div>
                    
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {audience.description}
                    </p>
                    
                    <ul className="space-y-3">
                      {audience.points.map((point) => (
                        <li key={point} className="flex items-start gap-2.5 text-sm text-slate-700 font-medium">
                          <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center group-hover:bg-sky-50 group-hover:border-sky-200 transition-colors">
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-[#0284C7] transition-colors" />
                          </div>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )
              })}
            </div>
          </Container>
        </section>

        <Workflow />
        <Fleet />
        <FAQ />
        <FinalCTA />
      </main>
    </>
  )
}
