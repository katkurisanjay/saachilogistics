import { motion } from 'framer-motion'
import { ArrowRight, AlertTriangle, CheckCircle2 } from 'lucide-react'
import Container from '../ui/Container'

const problemPairs = [
  {
    num: '01',
    problem: 'Daily coordination strain on HR & Admin teams',
    solution: 'Dedicated ops desk managing route rosters 24/7',
  },
  {
    num: '02',
    problem: 'Uncertain punctuality and shift-related delays',
    solution: 'Shift-aligned schedules engineered for exact timing',
  },
  {
    num: '03',
    problem: 'Inconsistent and stressful employee commutes',
    solution: 'Comfortable, safe, professional rides — every single day',
  },
]

export default function CorporateProblem() {
  return (
    <section
      className="section-py bg-white"
      aria-labelledby="problem-heading"
    >
      <Container>
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">

          {/* LEFT: Large Typography */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <span className="inline-block text-[#0284C7] text-xs font-bold tracking-widest uppercase mb-4">
              The Corporate Challenge
            </span>

            <h2
              id="problem-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-4xl font-bold text-slate-900 leading-tight mb-6"
            >
              Employee transit shouldn't become an operational headache.
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              HR and Administration leaders carry enough strategic responsibilities. Daily commute logistics belong in expert hands.
            </p>

            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#0284C7] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle2 size={14} />
              </div>
              <p className="text-sm font-medium text-slate-700 leading-relaxed">
                Saachi Logistics converts daily friction into reliable corporate confidence.
              </p>
            </div>
          </motion.div>

          {/* RIGHT: Problem → Solution Cards */}
          <div className="lg:col-span-7 space-y-4">
            {problemPairs.map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="grid sm:grid-cols-12 gap-5 items-center">
                  
                  {/* Problem */}
                  <div className="sm:col-span-5 flex items-start gap-3">
                    <AlertTriangle size={18} className="text-amber-500 mt-1 flex-shrink-0" />
                    <p className="text-slate-600 text-sm leading-snug">
                      {item.problem}
                    </p>
                  </div>

                  {/* Connector */}
                  <div className="hidden sm:flex sm:col-span-2 items-center justify-center">
                    <div className="w-full h-px bg-slate-200 relative flex justify-end items-center">
                      <ArrowRight size={14} className="text-slate-400 absolute right-[-2px]" />
                    </div>
                  </div>

                  {/* Solution */}
                  <div className="sm:col-span-5 bg-[#F0F9FF] border border-[#BAE6FD] rounded-lg p-5 flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#0284C7] mt-0.5 flex-shrink-0" />
                    <p className="text-slate-900 text-sm font-medium leading-snug">
                      {item.solution}
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
