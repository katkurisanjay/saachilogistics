import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import Container from '../components/ui/Container'
import ConsultationForm from '../components/forms/ConsultationForm'
import { MapPin, Phone, Clock, Mail } from 'lucide-react'

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact | Schedule a Consultation – Saachi Logistics Hyderabad</title>
        <meta name="description" content="Schedule a B2B corporate employee transportation consultation with Saachi Logistics in Hyderabad. Call us at +91 99081 50290 or +91 90007 86960." />
      </Helmet>

      <main id="main-content" className="bg-slate-50 min-h-screen">
        {/* Creative Contact Hero */}
        <section className="relative pt-28 sm:pt-36 pb-24 lg:pb-32 bg-slate-900 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop" 
              alt="Office workspace" 
              className="w-full h-full object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/50" />
            {/* Grid overlay */}
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
                Let's Talk Transportation
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.18 }}
                className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6"
              >
                Let's build a better <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#bae6fd]">employee transit experience.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.26 }}
                className="text-slate-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
              >
                Tell us what your organization needs. We'll design the right transportation solution for your enterprise.
              </motion.p>

              {/* Quick call CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <a
                  href="tel:9908150290"
                  className="btn-primary w-full sm:w-auto !px-8"
                >
                  <Phone size={18} />
                  +91 99081 50290
                </a>
                <a
                  href="tel:9000786960"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 hover:bg-white/15 text-white font-medium rounded-lg backdrop-blur-sm border border-white/10 transition-all"
                >
                  <Phone size={18} />
                  +91 90007 86960
                </a>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Two-column Consultation Interface */}
        <section className="py-20 lg:py-28 relative" aria-labelledby="contact-form-heading">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#0284C7]/5 rounded-full blur-3xl pointer-events-none" />

          <Container className="relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

              {/* Left Column — Form */}
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-200"
                >
                  <div className="mb-10">
                    <h2 id="contact-form-heading" className="font-heading text-3xl font-bold text-slate-900 mb-3 tracking-tight">
                      Schedule a Consultation
                    </h2>
                    <p className="text-slate-600 text-base">
                      Complete the form below. A corporate mobility specialist will respond within 2 business hours.
                    </p>
                  </div>
                  <ConsultationForm />
                </motion.div>
              </div>

              {/* Right Column — Contact Details */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-5 space-y-8"
              >
                {/* Contact Panel */}
                <div className="bg-slate-900 rounded-3xl p-8 lg:p-10 text-white shadow-xl relative overflow-hidden group">
                  {/* Decorative blur in background */}
                  <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#0284C7]/20 rounded-full blur-3xl group-hover:bg-[#0284C7]/30 transition-colors duration-500 pointer-events-none" />

                  <h3 className="font-heading font-bold text-2xl mb-8 pb-6 border-b border-white/10 relative z-10">
                    Corporate Operations Desk
                  </h3>

                  <div className="space-y-8 relative z-10">
                    {/* Phone 1 */}
                    <a href="tel:9908150290" className="flex items-start gap-5 group/item">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#38BDF8] flex-shrink-0 group-hover/item:bg-[#38BDF8] group-hover/item:text-slate-900 transition-colors duration-300">
                        <Phone size={22} />
                      </div>
                      <div>
                        <p className="text-xs uppercase font-bold text-slate-400 tracking-widest mb-1.5">Primary Contact</p>
                        <p className="text-white font-semibold text-lg group-hover/item:text-[#38BDF8] transition-colors">+91 99081 50290</p>
                      </div>
                    </a>

                    {/* Phone 2 */}
                    <a href="tel:9000786960" className="flex items-start gap-5 group/item">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#38BDF8] flex-shrink-0 group-hover/item:bg-[#38BDF8] group-hover/item:text-slate-900 transition-colors duration-300">
                        <Phone size={22} />
                      </div>
                      <div>
                        <p className="text-xs uppercase font-bold text-slate-400 tracking-widest mb-1.5">Secondary Contact</p>
                        <p className="text-white font-semibold text-lg group-hover/item:text-[#38BDF8] transition-colors">+91 90007 86960</p>
                      </div>
                    </a>

                    {/* Location */}
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#38BDF8] flex-shrink-0">
                        <MapPin size={22} />
                      </div>
                      <div>
                        <p className="text-xs uppercase font-bold text-slate-400 tracking-widest mb-1.5">Headquarters</p>
                        <p className="text-white font-medium text-lg mb-0.5">Hyderabad</p>
                        <p className="text-slate-400 text-sm">Telangana, India</p>
                      </div>
                    </div>

                    {/* Operations */}
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#38BDF8] flex-shrink-0">
                        <Clock size={22} />
                      </div>
                      <div>
                        <p className="text-xs uppercase font-bold text-slate-400 tracking-widest mb-1.5">Operations</p>
                        <p className="text-white font-medium text-lg mb-0.5">24/7 Corporate Desk</p>
                        <p className="text-slate-400 text-sm">Available for corporate & roster support</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Consultation Roadmap */}
                <div className="bg-white border border-slate-200 rounded-3xl p-8 lg:p-10 shadow-sm">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-[#0284C7]">
                      <Clock size={20} />
                    </div>
                    <h3 className="font-heading font-bold text-slate-900 text-xl">Consultation Roadmap</h3>
                  </div>
                  <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                    {[
                      { step: '01', title: 'Requirement Assessment', desc: 'We analyze your shift timings, routes, and headcount.' },
                      { step: '02', title: 'Custom Fleet Mapping', desc: 'We select the ideal mix of sedans and SUVs for your routes.' },
                      { step: '03', title: 'Proposal & Driver Assignment', desc: 'Clear vendor proposals with background-verified chauffeurs.' },
                      { step: '04', title: 'Seamless Operations Launch', desc: 'End-to-end transportation management goes live.' },
                    ].map((st) => (
                      <div key={st.step} className="relative flex items-start gap-5 bg-white z-10 p-2">
                        <span className="font-heading font-bold text-sm text-[#0284C7] bg-[#EFF6FF] border border-[#bae6fd] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm z-20">
                          {st.step}
                        </span>
                        <div className="pt-2">
                          <p className="text-base font-bold text-slate-900 mb-1">{st.title}</p>
                          <p className="text-sm text-slate-600 leading-relaxed">{st.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>
      </main>
    </>
  )
}
