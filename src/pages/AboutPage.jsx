import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { ShieldCheck, Target, Users, MapPin, Building2, CheckCircle2 } from 'lucide-react'
import Container from '../components/ui/Container'
import FinalCTA from '../components/sections/FinalCTA'

const values = [
  { icon: ShieldCheck, title: 'Safety First', desc: 'The foundation of every operational decision we make. We never compromise on employee security.' },
  { icon: Target, title: 'Absolute Reliability', desc: 'Dependable, punctual service that organizations and employees can count on, every single day.' },
  { icon: Users, title: 'True Partnership', desc: 'We act as an extension of your HR and Admin teams, deeply integrating into your daily operations.' },
]

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Saachi Logistics | Corporate Employee Transportation Hyderabad</title>
        <meta name="description" content="Saachi Logistics is a professional B2B corporate employee transportation company based in Hyderabad, serving IT companies and corporate organizations." />
      </Helmet>

      <main id="main-content" className="bg-white min-h-screen">
        {/* Creative Hero */}
        <section className="relative pt-28 sm:pt-36 pb-24 lg:pb-32 bg-slate-900 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1577905869408-724e527b1408?q=80&w=2070&auto=format&fit=crop" 
              alt="Hyderabad cityscape at night" 
              className="w-full h-full object-cover opacity-15 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-slate-900/95 to-slate-800/80" />
            
            {/* Grid overlay */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
          </div>

          <Container className="relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-block text-[#38BDF8] text-xs font-bold tracking-[0.2em] uppercase font-heading mb-6 bg-[#0369A1]/20 px-3 py-1.5 rounded-full border border-[#0284C7]/30"
              >
                About Saachi
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.18 }}
                className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.15] mb-6 tracking-tight"
              >
                Defining the standard for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#bae6fd]">Corporate Commutes</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.26 }}
                className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto"
              >
                Based in Hyderabad, Telangana, we are the dedicated B2B employee transportation partner for IT companies and corporate organizations.
              </motion.p>
            </div>
          </Container>
        </section>

        {/* Brand Mission & Story */}
        <section className="py-20 lg:py-28 relative" aria-labelledby="about-story-heading">
          {/* Subtle background blob */}
          <div className="absolute left-0 top-1/4 w-[600px] h-[600px] bg-sky-50 rounded-full blur-3xl -z-10 pointer-events-none" />
          
          <Container>
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
              
              {/* Left Column: Image / Stats Grid */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-2 gap-4 relative"
              >
                {/* Decoration */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:12px_12px]" />
                
                <div className="space-y-4 pt-12 relative z-10">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 aspect-square flex flex-col justify-center text-center">
                    <div className="mx-auto w-12 h-12 bg-sky-50 rounded-full flex items-center justify-center mb-3">
                      <MapPin className="text-[#0284C7]" size={24} />
                    </div>
                    <span className="font-heading font-bold text-2xl text-slate-900 block">HQ</span>
                    <span className="text-slate-500 text-sm">Hyderabad, TS</span>
                  </div>
                  <img src="https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=500&q=80&auto=format&fit=crop" alt="Fleet" className="rounded-2xl shadow-sm object-cover h-48 w-full border border-slate-100" />
                </div>
                
                <div className="space-y-4 relative z-10">
                  <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=80&auto=format&fit=crop" alt="Corporate Team" className="rounded-2xl shadow-sm object-cover h-64 w-full border border-slate-100" />
                  <div className="bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-800 flex flex-col justify-center">
                    <span className="font-heading font-bold text-3xl text-white block mb-1">50</span>
                    <span className="text-slate-400 text-sm">Active Fleet Units</span>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Text */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 text-[#0284C7] text-sm font-semibold mb-6 border border-sky-100">
                  <Building2 size={16} />
                  Who We Are
                </div>
                <h2 id="about-story-heading" className="font-heading text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                  Simplifying enterprise mobility with proven on-road experience.
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg mb-5">
                  Built 2 years ago under the vision of our CEO, Saachi Logistics was founded to solve a critical operational challenge: ensuring employees reach work and return home safely, comfortably, and on time. 
                </p>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Backed by 2 years of robust on-road experience, we specialize exclusively in daily employee commute solutions. By focusing entirely on corporate transportation, we have refined our processes, driver training, and fleet management to perfectly align with the strict requirements of IT companies and enterprises.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#059669]" size={20} />
                    <span className="text-slate-700 font-medium text-sm">Professional Drivers</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#059669]" size={20} />
                    <span className="text-slate-700 font-medium text-sm">Maintained Fleet</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#059669]" size={20} />
                    <span className="text-slate-700 font-medium text-sm">24/7 Operations</span>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* The Quote / Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden mb-24"
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0284C7] to-[#031B35]" />
              
              <div className="relative p-12 lg:p-20 text-center flex flex-col items-center">
                <span className="text-sky-300 text-sm font-bold tracking-[0.2em] uppercase mb-6 block">Our Philosophy</span>
                <blockquote className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight max-w-4xl mx-auto mb-8">
                  "Safe Rides. On-Time Always. Every Time."
                </blockquote>
                <p className="text-sky-100 text-lg max-w-2xl mx-auto">
                  This is not just a marketing tagline — it is the absolute operational standard we hold ourselves to in every route, every pickup, and every drop.
                </p>
              </div>
            </motion.div>

            {/* Core Values Grid */}
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold text-slate-900 mb-4">Our Core Values</h2>
              <p className="text-slate-600 text-lg">The principles that drive our daily operations.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {values.map((item, i) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="bg-white border border-slate-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-lg hover:border-[#0284C7]/30 transition-all duration-300 group"
                  >
                    <div className="w-16 h-16 mx-auto bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#EFF6FF] group-hover:border-[#bae6fd] transition-colors">
                      <Icon className="text-slate-400 group-hover:text-[#0284C7] transition-colors" size={32} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-slate-900 mb-3 group-hover:text-[#0284C7] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
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
