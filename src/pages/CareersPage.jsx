import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import FinalCTA from '../components/sections/FinalCTA'

export default function CareersPage() {
  return (
    <>
      <Helmet>
        <title>Careers | Join Saachi Logistics Hyderabad</title>
        <meta name="description" content="Explore career opportunities at Saachi Logistics — a growing professional corporate transportation company based in Hyderabad." />
      </Helmet>

      <main id="main-content">
        {/* Hero */}
        <section className="bg-[#031B35] pt-28 sm:pt-36 pb-20">
          <Container>
            <div className="max-w-3xl">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-[#11A8E2] text-xs font-bold tracking-[0.2em] uppercase font-heading mb-4"
              >
                Careers
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.18 }}
                className="font-heading text-4xl sm:text-5xl font-bold text-white leading-[1.15] mb-5"
              >
                Work With Saachi Logistics
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.26 }}
                className="text-white/65 text-lg leading-relaxed"
              >
                We are a professional team committed to delivering safe, reliable corporate transportation. If you share those values, we'd love to hear from you.
              </motion.p>
            </div>
          </Container>
        </section>

        {/* Culture & Values */}
        <section className="section-py bg-white" aria-labelledby="careers-culture-heading">
          <Container>
            <SectionHeading
              id="careers-culture-heading"
              eyebrow="Why Join Us"
              title="A team built on professionalism and reliability"
              align="center"
            />

            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
              {[
                { title: 'Professionalism', desc: 'We hold ourselves to a high standard in everything we do — how we drive, how we communicate, and how we serve our clients.' },
                { title: 'Reliability', desc: 'Our team shows up every day with the same level of commitment. Consistency is a value that starts internally.' },
                { title: 'Growth', desc: 'As we serve more corporate organizations, we create opportunities for our team to grow with us.' },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-[#F5F8FB] border border-[#D7E4ED] rounded-xl p-6"
                >
                  <h3 className="font-heading font-bold text-[#102A43] text-lg mb-2">{item.title}</h3>
                  <p className="text-[#52677D] text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Open positions — talent inquiry */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto bg-[#062A52] rounded-2xl p-10 text-center text-white"
            >
              <h2 className="font-heading text-2xl font-bold mb-4">Interested in Joining Our Team?</h2>
              <p className="text-white/65 leading-relaxed mb-6">
                We welcome inquiries from professional drivers, operations coordinators, and administrative professionals who want to be part of a growing corporate transportation company.
              </p>
              <p className="text-white/50 text-sm mb-6">
                Specific vacancies will be listed here when available. For now, reach out with a general expression of interest.
              </p>
              <a href="/contact" className="btn-primary inline-flex">
                Send Your Expression of Interest
              </a>
            </motion.div>
          </Container>
        </section>

        <FinalCTA />
      </main>
    </>
  )
}

