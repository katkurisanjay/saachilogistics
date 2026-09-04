import { motion, useScroll, useTransform } from 'framer-motion'

/**
 * ScrollProgress — 2px cyan→blue gradient bar fixed at top, scaleX animated
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX: scrollYProgress }}
      aria-hidden="true"
    />
  )
}
