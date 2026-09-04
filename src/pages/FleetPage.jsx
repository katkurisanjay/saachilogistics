import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Car, Shield, Fuel, Users, CheckCircle2 } from 'lucide-react'
import Container from '../components/ui/Container'
import FinalCTA from '../components/sections/FinalCTA'
import AnimatedCounter from '../components/ui/AnimatedCounter'
import { fleetStats } from '../data/fleet'

const fleetTypes = [
  {
    id: 'sedan',
    type: 'Sedan',
    count: 30,
    tagline: 'Executive Comfort',
    description:
      'Sleek, fuel-efficient sedans tailored for individual and small-group corporate commutes. Ideal for executives and daily point-to-point rides.',
    image: 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=900&q=80&auto=format&fit=crop',
    accent: '#0284C7',
    features: ['Professional Chauffeur', 'Air Conditioned', 'GPS Tracked', 'On-Time Pickup'],
    specs: [
      { icon: Users, label: '1–4 Seats' },
      { icon: Fuel, label: 'Fuel Efficient' },
      { icon: Shield, label: 'Safety Verified' },
    ],
  },
  {
    id: 'suv',
    type: 'SUV',
    count: 20,
    tagline: 'Group Mobility',
    description:
      'Spacious, premium SUVs designed for team transportation and corporate group commutes. More room, more comfort, same on-time reliability.',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=900&q=80&auto=format&fit=crop',
    accent: '#0F172A',
    features: ['Ample Cabin Space', 'Professional Chauffeur', 'Air Conditioned', 'GPS Tracked'],
    specs: [
      { icon: Users, label: '1–7 Seats' },
      { icon: Shield, label: 'Safety Verified' },
      { icon: Fuel, label: 'Smooth Ride' },
    ],
  },
]

export default function FleetPage() {
  return (
    <>
      <Helmet>
        <title>Fleet | Saachi Logistics – Sedan & SUV Corporate Vehicles</title>
        <meta name="description" content="Saachi Logistics operates a fleet of 30 sedans and 20 SUVs for corporate employee transportation in Hyderabad." />
      </Helmet>

      <main id="main-content">
        {/* Creative Hero */}
        <section className="relative pt-28 sm:pt-36 pb-24 lg:pb-32 bg-slate-900 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop" 
              alt="Highway traffic" 
              className="w-full h-full object-cover opacity-15"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/90 to-slate-900/60" />
          </div>

          <Container className="relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-block text-[#38BDF8] text-xs font-bold tracking-[0.2em] uppercase font-heading mb-6 bg-[#0369A1]/20 px-3 py-1.5 rounded-full border border-[#0284C7]/30"
              >
                Our Fleet
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.18 }}
                className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.15] mb-6 tracking-tight"
              >
                Engineered for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#bae6fd]">Everyday Reliability</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.26 }}
                className="text-slate-300 text-lg sm:text-xl leading-relaxed"
              >
                50 professionally managed vehicles ready to support your organization's daily transportation requirements.
              </motion.p>
            </div>

            {/* Premium Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-14 max-w-2xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden grid grid-cols-3 divide-x divide-white/10"
            >
              <div className="text-center py-6">
                <div className="font-heading text-4xl font-bold text-white"><AnimatedCounter target={fleetStats.sedans} /></div>
                <div className="text-slate-400 text-sm font-medium mt-1">Sedans</div>
              </div>
              <div className="text-center py-6">
                <div className="font-heading text-4xl font-bold text-white"><AnimatedCounter target={fleetStats.suvs} /></div>
                <div className="text-slate-400 text-sm font-medium mt-1">SUVs</div>
              </div>
              <div className="text-center py-6">
                <div className="font-heading text-4xl font-bold text-[#38BDF8]"><AnimatedCounter target={fleetStats.total} /></div>
                <div className="text-slate-400 text-sm font-medium mt-1">Active Units</div>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Fleet Cards Showcase */}
        <section className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden" aria-labelledby="fleet-detail-heading">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-[500px] h-[500px] bg-[#0284C7]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-[400px] h-[400px] bg-slate-300/20 rounded-full blur-3xl pointer-events-none" />

          <Container className="relative z-10">
            <h2 id="fleet-detail-heading" className="sr-only">Fleet details</h2>
            <div className="space-y-16 max-w-5xl mx-auto">
              {fleetTypes.map((vehicle, i) => (
                <motion.article
                  key={vehicle.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col md:flex-row hover:shadow-xl transition-all duration-500"
                >
                  {/* Image Side */}
                  <div className="md:w-1/2 relative h-[240px] sm:h-[300px] md:h-auto overflow-hidden">
                    <img
                      src={vehicle.image}
                      alt={`${vehicle.type} fleet vehicle`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <span className="inline-block text-xs font-bold tracking-widest uppercase mb-2 px-2 py-1 rounded bg-white/20 backdrop-blur-md text-white border border-white/20">
                        {vehicle.count} Vehicles
                      </span>
                      <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-wide">
                        {vehicle.type} Class
                      </h3>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="md:w-1/2 p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                    <div className="inline-block text-xs font-bold tracking-widest uppercase mb-4" style={{ color: vehicle.accent }}>
                      {vehicle.tagline}
                    </div>
                    <p className="text-slate-600 leading-relaxed text-base lg:text-lg mb-6 sm:mb-8">
                      {vehicle.description}
                    </p>

                    {/* Specs Grid */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {vehicle.specs.map(({ icon: Icon, label }) => (
                        <div key={label} className="flex flex-col items-center justify-center p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
                          <Icon size={20} className="text-slate-400 mb-2" />
                          <span className="text-xs font-semibold text-slate-600">{label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Features List */}
                    <div className="flex flex-wrap gap-2.5">
                      {vehicle.features.map((f) => (
                        <span key={f} className="inline-flex items-center gap-1.5 text-xs font-medium bg-slate-50 border border-slate-200 text-slate-700 px-3 py-1.5 rounded-lg">
                          <CheckCircle2 size={14} className="text-[#0284C7]" />
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center text-slate-500 text-sm mt-16 max-w-lg mx-auto bg-white py-4 px-6 rounded-full border border-slate-200 shadow-sm inline-block mx-auto flex items-center justify-center gap-2"
            >
              <Car size={16} className="text-slate-400" />
              Maintained strictly for consistent, reliable daily operations.
            </motion.p>
          </Container>
        </section>

        <FinalCTA />
      </main>
    </>
  )
}
