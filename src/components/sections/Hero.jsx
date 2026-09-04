import { motion } from 'framer-motion'
import { ArrowRight, Phone, Shield, Clock, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from '../ui/Container'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

const stats = [
  { value: '50+', label: 'Active Vehicles' },
  { value: '24/7', label: 'Operations Support' },
  { value: '100%', label: 'Corporate Focus' },
]

const trust = [
  { icon: Shield, text: 'Safety Verified Drivers' },
  { icon: Clock, text: 'On-Time Guarantee' },
  { icon: CheckCircle, text: 'Dedicated Account Team' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-slate-900 overflow-hidden" aria-label="Hero">

      {/* Full bleed background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=2070&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover opacity-20 mix-blend-luminosity scale-105"
          aria-hidden="true"
        />
        {/* Layered overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
      </div>

      {/* Animated grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(to right, #94a3b8 1px, transparent 1px)', backgroundSize: '72px 72px' }}
      />

      {/* Animated accent orbs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#0284C7] rounded-full blur-[160px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-[#38BDF8] rounded-full blur-[140px] pointer-events-none"
      />

      <Container className="relative z-10 py-20 sm:py-24 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center lg:min-h-screen lg:py-20">

          {/* LEFT — Main Content */}
          <div>
            {/* Badge */}
            <motion.div {...fadeUp(0.1)} className="mb-6 sm:mb-8">
              <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-xs font-bold text-[#38BDF8] tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Corporate Mobility — Hyderabad
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...fadeUp(0.2)}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight text-white mb-6 sm:mb-8"
            >
              Safe Rides.{' '}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#7DD3FC]">
                  On-Time
                </span>
              </span>
              <br />
              Always.{' '}
              <span className="text-slate-400">Every Time.</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              {...fadeUp(0.3)}
              className="text-slate-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl"
            >
              Redefining employee transportation for modern enterprises. Predictable, secure, and professionally managed corporate commute solutions across Hyderabad.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div {...fadeUp(0.4)} className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold rounded-xl shadow-lg shadow-[#0284C7]/30 hover:shadow-[#0284C7]/50 transition-all duration-300 text-base group"
              >
                Schedule a Consultation
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:9908150290"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 hover:border-white/20 backdrop-blur-sm transition-all duration-300 text-base"
              >
                <Phone size={18} />
                +91 99081 50290
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-x-6 gap-y-3">
              {trust.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-slate-400 text-sm">
                  <Icon size={15} className="text-[#38BDF8]" />
                  <span>{text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Stats & Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            {/* Glassmorphism card */}
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl">
              {/* Decorative top gradient line */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#38BDF8]/50 to-transparent" />

              {/* Fleet Image */}
              <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
                <img
                  src="https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=800&q=80&auto=format&fit=crop"
                  alt="Corporate fleet vehicle"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <p className="text-xs text-slate-300 uppercase tracking-widest font-semibold mb-1">Executive Fleet</p>
                    <p className="text-white font-bold text-xl font-heading">Sedan & SUV Classes</p>
                  </div>
                  <span className="bg-emerald-400/20 border border-emerald-400/30 text-emerald-400 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm">
                    Active
                  </span>
                </div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-white/5 border border-white/5 rounded-2xl p-4 text-center">
                    <div className="font-heading text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-slate-400 text-xs font-medium leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Live status bar */}
              <div className="flex items-center gap-3 bg-white/5 border border-white/5 rounded-2xl px-5 py-3.5">
                <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <div>
                  <p className="text-white text-sm font-semibold">Corporate Operations Active</p>
                  <p className="text-slate-400 text-xs">24/7 support available</p>
                </div>
                <a href="tel:9908150290" className="ml-auto flex items-center gap-1.5 text-[#38BDF8] text-xs font-bold hover:text-[#7DD3FC] transition-colors">
                  <Phone size={12} />
                  Call Now
                </a>
              </div>

              {/* Bottom gradient line */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>
          </motion.div>

        </div>
      </Container>


    </section>
  )
}
