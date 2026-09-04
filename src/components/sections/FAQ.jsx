import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import { faqData } from '../../data/faq'

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border border-[#D7E4ED] rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-[#F5F8FB] transition-colors duration-200"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
        id={`faq-button-${item.id}`}
      >
        <span className="font-heading font-semibold text-[#102A43] text-sm sm:text-base leading-snug pr-2">
          {item.question}
        </span>
        <ChevronDown
          size={18}
          className={`flex-shrink-0 text-[#087DB8] transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          aria-hidden="true"
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            id={`faq-answer-${item.id}`}
            role="region"
            aria-labelledby={`faq-button-${item.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div className="px-6 py-4 bg-[#F5F8FB] border-t border-[#D7E4ED]">
              <p className="text-[#52677D] text-sm leading-relaxed">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openId, setOpenId] = useState(faqData[0].id)

  return (
    <section
      className="section-py bg-white"
      aria-labelledby="faq-heading"
    >
      <Container>
        <SectionHeading
          id="faq-heading"
          eyebrow="Frequently Asked Questions"
          title="Common questions about our services"
          align="center"
        />

        <div className="max-w-4xl mx-auto space-y-3">
          {faqData.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4 }}
            >
              <FAQItem
                item={item}
                isOpen={openId === item.id}
                onToggle={() => setOpenId(openId === item.id ? null : item.id)}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
