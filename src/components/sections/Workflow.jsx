import { motion } from 'framer-motion'
import Container from '../ui/Container'
import { workflowData } from '../../data/workflow'

export default function Workflow() {
  return (
    <section
      className="section-py bg-white border-t border-slate-200"
      aria-labelledby="workflow-heading"
    >
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="block text-[#0284C7] text-xs font-bold tracking-widest uppercase mb-4">
            How It Works
          </span>
          <h2
            id="workflow-heading"
            className="font-heading text-3xl sm:text-4xl font-bold leading-tight text-slate-900 mb-6"
          >
            From first contact to daily operations.
          </h2>
          <p className="text-slate-600 text-lg">
            We work closely with your organization to design and deploy a solution that fits your specific requirements.
          </p>
        </div>

        {/* Desktop: Horizontal steps */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connector line */}
            <div className="absolute top-8 left-[10%] right-[10%] h-px bg-slate-200" aria-hidden="true" />

            <div className="grid grid-cols-5 gap-6">
              {workflowData.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Step circle */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center mb-6 shadow-sm">
                    <span className="font-heading font-bold text-[#0284C7] text-lg">{step.step}</span>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mt-2 shadow-sm w-full">
                    <h3 className="font-heading font-bold text-slate-900 text-sm mb-2 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden space-y-0 max-w-lg mx-auto">
          {workflowData.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative flex gap-5 pb-8 last:pb-0"
            >
              {/* Vertical line */}
              {i < workflowData.length - 1 && (
                <div className="absolute left-[19px] top-10 bottom-0 w-px bg-slate-200" aria-hidden="true" />
              )}
              {/* Circle */}
              <div className="relative z-10 w-10 h-10 flex-shrink-0 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center shadow-sm">
                <span className="font-heading font-bold text-[#0284C7] text-sm">{step.step}</span>
              </div>
              {/* Content */}
              <div className="pt-1.5">
                <h3 className="font-heading font-bold text-slate-900 text-base mb-1">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
