import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

/**
 * AnimatedCounter — counts from 0 to target when entering viewport
 * target: number
 * suffix: string (e.g. "+", "/7")
 * duration: ms
 */
export default function AnimatedCounter({ target, suffix = '', duration = 1500 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const startedRef = useRef(false)

  useEffect(() => {
    if (!inView || startedRef.current) return
    startedRef.current = true

    const startTime = performance.now()
    const step = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(target)
    }
    requestAnimationFrame(step)
  }, [inView, target, duration])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}
