import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CheckCircle2, Users, Fuel, Shield, Wifi } from 'lucide-react'
import Container from '../ui/Container'

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
    accentBg: '#EFF6FF',
    features: ['Professional Chauffeur', 'Air Conditioned', 'GPS Tracked', 'On-Time Pickup'],
    specs: [
      { icon: Users, label: '1–4 Seats' },
      { icon: Fuel, label: 'Fuel Efficient' },
      { icon: Shield, label: 'Safety Verified' },
      { icon: Wifi, label: '24/7 Support' },
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
    accentBg: '#F1F5F9',
    features: ['Ample Cabin Space', 'Professional Chauffeur', 'Air Conditioned', 'GPS Tracked'],
    specs: [
      { icon: Users, label: '1–7 Seats' },
      { icon: Shield, label: 'Safety Verified' },
      { icon: Fuel, label: 'Smooth Ride' },
      { icon: Wifi, label: '24/7 Support' },
    ],
  },
]

export default function Fleet() {
  return (
    <section
      className="section-py bg-slate-50 border-t border-slate-200"
      aria-labelledby="fleet-heading"
    >
      <Container>
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-[#0284C7] text-xs font-bold tracking-widest uppercase mb-4 bg-[#EFF6FF] px-3 py-1.5 rounded-full"
          >
            Our Fleet
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            id="fleet-heading"
            className="font-heading text-4xl sm:text-5xl font-bold leading-tight text-slate-900 mb-6"
          >
            50 vehicles. Zero compromises.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg"
          >
            A meticulously maintained fleet of sedans and SUVs, deployed exclusively for corporate employee transportation.
          </motion.p>
        </div>

        {/* Fleet stat bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex items-center justify-center gap-0 mb-16 bg-white border border-slate-200 rounded-2xl overflow-hidden max-w-lg mx-auto shadow-sm"
        >
          {[
            { label: 'Sedans', value: '30', color: '#0284C7' },
            { label: 'SUVs', value: '20', color: '#0F172A' },
            { label: 'Total Fleet', value: '50', color: '#059669' },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`flex-1 py-5 text-center ${i < 2 ? 'border-r border-slate-200' : ''}`}
            >
              <div className="font-heading text-3xl font-bold" style={{ color: stat.color }}>
                {stat.value}
              </div>
              <div className="text-slate-500 text-xs font-medium mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Vehicle cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {fleetTypes.map((vehicle, i) => {
            const isFirst = i === 0
            return (
              <motion.article
                key={vehicle.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col hover:shadow-xl transition-all duration-500"
              >
                {/* Image area */}
                <div className="relative h-[220px] sm:h-[260px] overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={`${vehicle.type} fleet vehicle`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                  {/* Count badge top-left */}
                  <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-sm border border-slate-200 text-slate-800 font-bold text-xs px-3 py-1.5 rounded-full shadow-md">
                    {vehicle.count} Active Units
                  </div>

                  {/* Tagline bottom-left */}
                  <div className="absolute bottom-5 left-5 right-5">
                    <span
                      className="inline-block text-xs font-bold tracking-widest uppercase mb-2 px-2 py-1 rounded"
                      style={{ color: vehicle.accent, backgroundColor: vehicle.accentBg + 'CC' }}
                    >
                      {vehicle.tagline}
                    </span>
                    <h3 className="font-heading text-2xl font-bold text-white">
                      {vehicle.type} <span className="font-normal opacity-70">Class</span>
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-7 flex-1 flex flex-col">
                  <p className="text-slate-600 leading-relaxed mb-6 text-sm">{vehicle.description}</p>

                  {/* Mini spec row */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                    {vehicle.specs.map(({ icon: Icon, label }) => (
                      <div key={label} className="flex flex-col items-center gap-1.5 p-2.5 bg-slate-50 rounded-xl border border-slate-100 text-center">
                        <Icon size={16} className="text-slate-500" />
                        <span className="text-[10px] font-semibold text-slate-500 leading-tight">{label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Feature tags */}
                  <div className="mt-auto pt-5 border-t border-slate-100 flex flex-wrap gap-2">
                    {vehicle.features.map((feature) => (
                      <span
                        key={feature}
                        className="inline-flex items-center gap-1.5 text-xs font-medium bg-slate-50 border border-slate-200 text-slate-700 px-3 py-1.5 rounded-md"
                      >
                        <CheckCircle2 size={12} className="text-[#0284C7]" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link to="/fleet" className="btn-secondary">
            View Complete Fleet Details
          </Link>
        </motion.div>
      </Container>
    </section>
  )
}
