import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Container from '../ui/Container'

export default function Commitment() {
  return (
    <section
      className="section-py bg-[#0F172A] relative overflow-hidden text-white"
      aria-labelledby="commitment-heading"
    >
      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-6"
        >
          <span className="text-[#38BDF8] text-xs font-bold tracking-widest uppercase bg-[#38BDF8]/10 px-3 py-1.5 rounded-full">
            Our Commitment
          </span>
        </motion.div>

        <motion.h2
          id="commitment-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-8"
        >
          Driven by Commitment. <br />
          Focused on You.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-slate-300 text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto mb-5"
        >
          When employees reach work on time, safely, and comfortably — they are ready to contribute their best. Reliable transportation is not a small detail. It is a direct investment in employee satisfaction, productivity, and your organization's operational confidence.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-slate-400 text-base max-w-2xl mx-auto mb-10"
        >
          Saachi Logistics takes on the responsibility of employee transportation so your organization can focus on what matters most.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Link to="/contact" className="btn-primary bg-[#0284C7] hover:bg-[#0369A1] text-white">
            Schedule a Consultation
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </Container>
    </section>
  )
}
