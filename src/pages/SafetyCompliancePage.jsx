import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import Container from '../components/ui/Container'
import FinalCTA from '../components/sections/FinalCTA'
import { ShieldCheck, Users, Car, HeadphonesIcon, CheckCircle2, Lock } from 'lucide-react'

const safetyPillars = [
  {
    icon: ShieldCheck,
    title: 'Safety-First Service Philosophy',
    description: 'Every operational decision — from driver selection to route design — is made with employee safety as the primary consideration.',
  },
  {
    icon: Users,
    title: 'Professional Drivers',
    description: 'Our drivers are experienced, professionally trained, and committed to safe and respectful conduct at all times.',
  },
  {
    icon: Car,
    title: 'Vehicle Reliability',
    description: 'Our fleet of sedans and SUVs is maintained to support consistent, dependable daily operations.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Operational Support',
    description: 'Our operations team provides 24/7 support to ensure any transportation concern is addressed promptly and professionally.',
  },
  {
    icon: CheckCircle2,
    title: 'Employee Comfort',
    description: 'Comfortable vehicles and professional conduct ensure that every employee commute is a positive experience.',
  },
]

export default function SafetyCompliancePage() {
  return (
    <>
      <Helmet>
        <title>Safety & Reliability | Saachi Logistics Corporate Transportation</title>
        <meta name="description" content="Saachi Logistics prioritizes employee safety with professional drivers, reliable vehicles, and 24/7 operational support for corporate commutes in Hyderabad." />
      </Helmet>

      <main id="main-content" className="bg-slate-50">
        {/* Creative Hero */}
        <section className="relative pt-28 sm:pt-36 pb-24 lg:pb-32 bg-slate-900 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070&auto=format&fit=crop" 
              alt="Safety and operations" 
              className="w-full h-full object-cover opacity-15 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/90 to-slate-800/80" />
            
            {/* Minimal pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#38BDF8 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          </div>

          <Container className="relative z-10 text-center">
            <div className="max-w-3xl mx-auto">
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 text-[#38BDF8] text-xs font-bold tracking-[0.2em] uppercase font-heading mb-6 bg-[#0369A1]/20 px-4 py-2 rounded-full border border-[#0284C7]/30"
              >
                <Lock size={14} />
                Safety & Reliability
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.18 }}
                className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.15] mb-6 tracking-tight"
              >
                Employee Safety is <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#bae6fd]">Our Absolute Foundation</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.26 }}
                className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto"
              >
                Every aspect of Saachi Logistics operations is designed to ensure your employees travel safely, comfortably, and on time — every day.
              </motion.p>
            </div>
          </Container>
        </section>

        {/* Safety pillars */}
        <section className="py-20 lg:py-28 relative" aria-labelledby="safety-heading">
          {/* Subtle background glow */}
          <div className="absolute right-0 top-1/4 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl pointer-events-none -z-10" />

          <Container>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 id="safety-heading" className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Five Pillars of Safe Transportation
              </h2>
              <p className="text-slate-600 text-lg">
                We don't leave safety to chance. It is engineered into our daily processes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {safetyPillars.map((pillar, i) => {
                const Icon = pillar.icon
                // Make the first card span 2 columns on tablet/desktop for a creative masonry-like feel
                const isFeatured = i === 0
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className={`group bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden ${isFeatured ? 'md:col-span-2 lg:col-span-2' : ''}`}
                  >
                    {/* Decorative background glow on hover */}
                    <div className="absolute -right-12 -top-12 w-48 h-48 bg-sky-50 rounded-full blur-3xl group-hover:bg-sky-100 transition-colors duration-500 pointer-events-none" />

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-sky-50 group-hover:border-sky-100 transition-colors duration-300">
                        <Icon size={26} className="text-[#0284C7]" strokeWidth={1.5} />
                      </div>
                      <h3 className={`font-heading font-bold text-slate-900 mb-3 ${isFeatured ? 'text-2xl' : 'text-xl'}`}>
                        {pillar.title}
                      </h3>
                      <p className={`text-slate-600 leading-relaxed mt-auto ${isFeatured ? 'text-lg' : 'text-base'}`}>
                        {pillar.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Note box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-16 bg-white border border-slate-200 rounded-2xl p-6 max-w-3xl mx-auto flex items-start gap-4 shadow-sm"
            >
              <ShieldCheck className="text-emerald-600 flex-shrink-0 mt-0.5" size={20} />
              <p className="text-slate-600 text-sm leading-relaxed">
                <strong className="text-slate-900">Compliance & Documentation:</strong> If Saachi Logistics holds specific compliance documentation, driver certifications, or safety protocols, those details should be provided by the company to be explicitly listed here.
              </p>
            </motion.div>
          </Container>
        </section>

        <FinalCTA />
      </main>
    </>
  )
}
