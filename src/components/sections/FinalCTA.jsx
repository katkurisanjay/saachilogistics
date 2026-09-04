import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from '../ui/Container'

export default function FinalCTA() {
  return (
    <section className="relative py-24 lg:py-32 bg-slate-900 overflow-hidden" aria-labelledby="cta-heading">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-10 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/90 to-slate-900/80" />
      </div>

      {/* Animated orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0284C7] rounded-full blur-[160px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        className="absolute -right-32 top-1/4 w-[400px] h-[400px] bg-[#38BDF8] rounded-full blur-[140px] pointer-events-none"
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(to right, #94a3b8 1px, transparent 1px)', backgroundSize: '72px 72px' }}
      />

      <Container className="relative z-10 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-block text-[#38BDF8] text-xs font-bold tracking-widest uppercase mb-6 bg-[#0369A1]/20 px-4 py-2 rounded-full border border-[#0284C7]/30"
        >
          Start Today
        </motion.span>

        <motion.h2
          id="cta-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight"
        >
          Ready to simplify <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#7DD3FC]">
            employee transportation?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Let's discuss your company's transportation requirements. Our team will design a solution that perfectly fits your organization's needs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold rounded-xl shadow-lg shadow-[#0284C7]/30 hover:shadow-[#0284C7]/50 transition-all duration-300 text-base w-full sm:w-auto group"
          >
            Schedule a Consultation
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="tel:9908150290"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 hover:border-white/20 backdrop-blur-sm transition-all duration-300 text-base w-full sm:w-auto"
          >
            <Phone size={18} />
            +91 99081 50290
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-slate-500 text-sm"
        >
          Or call our secondary line at{' '}
          <a href="tel:9000786960" className="text-[#38BDF8] hover:text-[#7DD3FC] font-medium transition-colors">
            +91 90007 86960
          </a>
        </motion.p>
      </Container>
    </section>
  )
}
