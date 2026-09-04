import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Building2, Briefcase, Cpu, Clock, CheckCircle2 } from 'lucide-react'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import Clients from '../components/sections/Clients'
import FinalCTA from '../components/sections/FinalCTA'

const industries = [
  { 
    title: 'IT Companies', 
    description: 'Technology companies with large employee bases and structured working shifts require consistent, professional transportation.',
    icon: Cpu,
    color: '#0284C7',
    features: ['Large Scale Operations', 'Multiple Facilities', 'Strict Timelines']
  },
  { 
    title: 'Corporate Organizations', 
    description: 'Large corporate offices benefit from managed employee commute solutions that reduce operational overhead.',
    icon: Building2,
    color: '#0F172A',
    features: ['Executive Commutes', 'Dedicated Fleets', 'Premium Service']
  },
  { 
    title: 'Technology Hubs', 
    description: 'Fast-growing tech companies scaling their teams often need flexible, responsive transportation partners.',
    icon: Briefcase,
    color: '#059669',
    features: ['Scalable Solutions', 'Flexible Scheduling', 'Modern Fleet']
  },
  { 
    title: 'Shift-Based Operations', 
    description: 'Any organization running early morning, late night, or rotating shift patterns needs a transportation partner ready to match those schedules.',
    icon: Clock,
    color: '#E11D48',
    features: ['24/7 Support', 'Night Shift Commute', 'Safety Tracking']
  },
]

export default function IndustriesClientsPage() {
  return (
    <>
      <Helmet>
        <title>Industries & Clients | Saachi Logistics Corporate Transportation</title>
        <meta name="description" content="Saachi Logistics serves IT companies and corporate organizations in Hyderabad with professional employee transportation solutions." />
      </Helmet>

      <main id="main-content">
        {/* Creative Hero */}
        <section className="relative pt-28 sm:pt-36 pb-24 lg:pb-32 bg-slate-900 overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
              alt="Corporate Buildings" 
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
          </div>

          <Container className="relative z-10">
            <div className="max-w-3xl">
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-block text-[#38BDF8] text-xs font-bold tracking-[0.2em] uppercase font-heading mb-6 bg-[#0369A1]/20 px-3 py-1.5 rounded-full border border-[#0284C7]/30"
              >
                Industries & Clients
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.18 }}
                className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.15] mb-6 tracking-tight"
              >
                Driving operations for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#bae6fd]">Hyderabad's Enterprises</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.26 }}
                className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-2xl"
              >
                We focus on organizations with structured employee transportation needs — delivering reliable daily commute solutions that corporate teams can depend on.
              </motion.p>
            </div>
          </Container>
        </section>

        {/* Industries Section */}
        <section className="py-20 lg:py-28 bg-slate-50" aria-labelledby="industries-heading">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 id="industries-heading" className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Specialized Transportation for Specialized Needs
              </h2>
              <p className="text-slate-600 text-lg">
                Different industries require different operational models. We adapt our service to match your exact corporate structure.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {industries.map((industry, i) => {
                const Icon = industry.icon
                return (
                  <motion.div
                    key={industry.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="group relative bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    {/* Decorative gradient blur in background */}
                    <div 
                      className="absolute -right-8 -top-8 w-32 h-32 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
                      style={{ backgroundColor: industry.color }}
                    />

                    <div className="flex items-start gap-5 relative z-10">
                      <div 
                        className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm"
                        style={{ backgroundColor: `${industry.color}15`, color: industry.color }}
                      >
                        <Icon size={28} strokeWidth={1.5} />
                      </div>
                      
                      <div>
                        <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">{industry.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed mb-6">{industry.description}</p>
                        
                        <ul className="space-y-2.5">
                          {industry.features.map(feature => (
                            <li key={feature} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                              <CheckCircle2 size={16} style={{ color: industry.color }} />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </Container>
        </section>

        <Clients />
        <FinalCTA />
      </main>
    </>
  )
}
