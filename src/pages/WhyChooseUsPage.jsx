import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Container from '../components/ui/Container'
import { whyChooseUsData } from '../data/whyChooseUs'
import FinalCTA from '../components/sections/FinalCTA'

const images = [
  'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1000&auto=format&fit=crop', // Reliability
  'https://images.unsplash.com/photo-1622316439169-7988355cb994?q=80&w=1000&auto=format&fit=crop', // Professionalism
  'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=1000&auto=format&fit=crop', // Fleet
  'https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=1000&auto=format&fit=crop', // Operations
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop', // Safety
]

export default function WhyChooseUsPage() {
  return (
    <>
      <Helmet>
        <title>Why Choose Saachi Logistics | Safe, Reliable Corporate Transport</title>
        <meta name="description" content="Discover the five pillars that make Saachi Logistics the trusted employee transportation partner for IT companies in Hyderabad." />
      </Helmet>

      <main id="main-content" className="bg-slate-50">
        {/* Premium Hero */}
        <section className="relative pt-28 sm:pt-36 pb-24 lg:pb-32 bg-slate-900 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1579389083046-d3ce18b4526f?q=80&w=2070&auto=format&fit=crop" 
              alt="Highway architecture" 
              className="w-full h-full object-cover opacity-15 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/90 to-slate-800/80" />
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
          </div>

          <Container className="relative z-10 text-center">
            <div className="max-w-3xl mx-auto">
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-block text-[#38BDF8] text-xs font-bold tracking-[0.2em] uppercase font-heading mb-6 bg-[#0369A1]/20 px-3 py-1.5 rounded-full border border-[#0284C7]/30"
              >
                Our Differentiators
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.18 }}
                className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.15] mb-6 tracking-tight"
              >
                Why Enterprises <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#bae6fd]">Choose Saachi</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.26 }}
                className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto"
              >
                Five core commitments that define how we serve corporate organizations and their employees every single day.
              </motion.p>
            </div>
          </Container>
        </section>

        {/* Five Pillars Split View */}
        <section className="py-20 lg:py-28 relative overflow-hidden" aria-labelledby="pillars-heading">
          {/* Subtle decoration */}
          <div className="absolute -left-32 top-32 w-96 h-96 bg-[#0284C7]/5 rounded-full blur-3xl pointer-events-none" />

          <Container className="relative z-10">
            <h2 id="pillars-heading" className="sr-only">Our five core commitments</h2>
            
            <div className="space-y-24">
              {whyChooseUsData.map((item, i) => {
                const Icon = item.icon
                const isEven = i % 2 === 0
                const imageUrl = images[i % images.length]

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7 }}
                    className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
                  >
                    {/* Image Side */}
                    <div className="w-full lg:w-1/2 relative group">
                      <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                        <img 
                          src={imageUrl} 
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500" />
                      </div>
                      {/* Decorative accent element behind image */}
                      <div className={`absolute -z-10 w-full h-full rounded-3xl bg-sky-100 ${isEven ? '-bottom-6 -right-6' : '-bottom-6 -left-6'} transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0`} />
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-sky-50 flex items-center justify-center border border-sky-100 shadow-sm">
                          <Icon size={26} className="text-[#0284C7]" strokeWidth={1.5} />
                        </div>
                        <span className="font-heading font-black text-slate-200 text-5xl tracking-tighter select-none">
                          0{i + 1}
                        </span>
                      </div>
                      
                      <h3 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                        {item.title}
                      </h3>
                      
                      <p className="text-slate-600 text-lg leading-relaxed mb-8">
                        {item.description}
                      </p>

                      <div className="h-px w-16 bg-slate-200" />
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </Container>
        </section>

        <FinalCTA />
      </main>
    </>
  )
}
