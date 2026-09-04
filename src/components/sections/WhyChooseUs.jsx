import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShieldCheck, UserCheck, Clock, Headphones, ThumbsUp, Plus, Minus } from 'lucide-react'
import Container from '../ui/Container'

const whyItems = [
  {
    num: '01',
    title: 'Engineered for Safety',
    description: 'Safety is the foundation of our architecture. From verified drivers to GPS-tracked routes, every journey is monitored and secured to corporate standards.',
    icon: ShieldCheck,
  },
  {
    num: '02',
    title: 'Professional Chauffeurs',
    description: 'Our operators are trained, experienced professionals. They represent your enterprise on the road, executing their duties with precision and courtesy.',
    icon: UserCheck,
  },
  {
    num: '03',
    title: 'Absolute Punctuality',
    description: 'Time is the ultimate metric. We deploy disciplined schedules aligned exactly with your company shifts to eliminate commute delays.',
    icon: Clock,
  },
  {
    num: '04',
    title: '24/7 Operations Desk',
    description: 'A dedicated operations command center available around the clock to manage live tracking, route modifications, and immediate assistance.',
    icon: Headphones,
  },
  {
    num: '05',
    title: 'Enterprise Satisfaction',
    description: 'We optimize the entire commute experience to ensure both your HR teams and daily commuters feel completely supported.',
    icon: ThumbsUp,
  },
]

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section
      className="section-py bg-slate-50 border-t border-slate-200"
      aria-labelledby="why-heading"
    >
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Header area */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <span className="block text-[#0284C7] text-xs font-bold tracking-widest uppercase mb-4">
                Operational Pillars
              </span>

              <h2
                id="why-heading"
                className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6"
              >
                Why enterprises choose us.
              </h2>

              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Explore the five structural pillars that define our commitment to superior corporate transportation.
              </p>

              {/* Active Metric display */}
              <div className="hidden lg:block bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center mb-4">
                  {(() => { const ActiveIcon = whyItems[activeIndex].icon; return <ActiveIcon size={24} />; })()}
                </div>
                <h4 className="font-heading text-lg font-bold text-slate-900 mb-1">
                  {whyItems[activeIndex].title}
                </h4>
                <p className="text-slate-500 text-sm">Active Pillar Selected</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Interactive Vertical Accordion */}
          <div className="lg:col-span-7 space-y-3">
            {whyItems.map((item, index) => {
              const isActive = activeIndex === index

              return (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onClick={() => setActiveIndex(index)}
                  className={`bg-white rounded-xl cursor-pointer transition-all duration-300 border ${
                    isActive 
                      ? 'border-[#0284C7] shadow-md ring-1 ring-[#0284C7]/20' 
                      : 'border-slate-200 hover:border-slate-300 shadow-sm'
                  }`}
                >
                  <div className="p-5 sm:p-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className={`font-heading font-bold text-xl ${
                        isActive ? 'text-[#0284C7]' : 'text-slate-300 group-hover:text-slate-400'
                      }`}>
                        {item.num}
                      </span>
                      <h3 className={`font-heading font-bold text-lg sm:text-xl ${
                        isActive ? 'text-slate-900' : 'text-slate-600 group-hover:text-slate-900'
                      }`}>
                        {item.title}
                      </h3>
                    </div>

                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-colors ${
                      isActive ? 'border-[#0284C7] bg-[#E0F2FE] text-[#0284C7]' : 'border-slate-200 text-slate-400'
                    }`}>
                      {isActive ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-1">
                          <div className="pl-10">
                            <p className="text-slate-600 text-sm leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
