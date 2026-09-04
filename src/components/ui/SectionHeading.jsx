import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

/**
 * SectionHeading — Eyebrow + H2 + Optional description (Dark aesthetic version)
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
  className,
  id,
}) {
  return (
    <div
      className={cn(
        'mb-16 lg:mb-20',
        align === 'center' && 'text-center',
        align === 'left' && 'text-left',
        className
      )}
    >
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className={cn('mb-6', align === 'center' && 'flex justify-center')}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-[#00F0FF] text-xs font-bold tracking-[0.2em] uppercase font-heading">
            {eyebrow}
          </span>
        </motion.div>
      )}

      <motion.h2
        id={id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.65, delay: 0.06 }}
        className="font-heading text-4xl sm:text-5xl lg:text-6xl font-900 text-white tracking-tight leading-tight"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, delay: 0.14 }}
          className={cn(
            'mt-6 text-lg lg:text-xl leading-relaxed font-light text-[#8B9BB4]',
            align === 'center' && 'mx-auto max-w-2xl'
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}
