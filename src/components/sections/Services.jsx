import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from '../ui/Container'
import { servicesData } from '../../data/services'

export default function Services() {
  return (
    <section
      className="section-py bg-slate-50 border-t border-slate-200"
      aria-labelledby="services-heading"
    >
      <Container>
        <div className="max-w-3xl mb-16 mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-[#0284C7] text-xs font-bold tracking-widest uppercase mb-4"
          >
            Core Platform
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            id="services-heading"
            className="font-heading text-4xl sm:text-5xl font-bold leading-tight text-slate-900 mb-6"
          >
            Intelligent transit for modern teams.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg"
          >
            Every service is engineered to reduce operational friction while providing an unparalleled commute experience.
          </motion.p>
        </div>

        {/* Dynamic Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, i) => {
            const Icon = service.icon
            const isFeatured = i === 0

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.98, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group bg-white border border-slate-200 rounded-2xl p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#0284C7] group-hover:bg-[#0284C7] group-hover:text-white transition-colors duration-300">
                      <Icon size={24} />
                    </div>

                    {isFeatured && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#F0F9FF] border border-[#BAE6FD] text-[#0284C7] text-xs font-bold uppercase tracking-wider">
                        <Sparkles size={14} /> Core Offering
                      </span>
                    )}
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-slate-900 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <span className="text-sm font-semibold text-[#0284C7] group-hover:text-slate-900 transition-colors">
                    Explore Details
                  </span>
                  <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-[#0284C7] group-hover:text-[#0284C7] group-hover:translate-x-1 transition-all">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center mt-16"
        >
          <Link to="/contact" className="btn-primary">
            Initialize Consultation
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </Container>
    </section>
  )
}
