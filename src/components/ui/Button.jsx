import { Link } from 'react-router-dom'
import { motion, useSpring, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { cn } from '../../lib/utils'

function useMagneticEffect(strength = 0.25) {
  const ref = useRef(null)
  const x = useSpring(0, { stiffness: 150, damping: 15 })
  const y = useSpring(0, { stiffness: 150, damping: 15 })

  const handleMouseMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    x.set((e.clientX - cx) * strength)
    y.set((e.clientY - cy) * strength)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return { ref, x, y, handleMouseMove, handleMouseLeave }
}

/**
 * Button — Primary / Secondary / Ghost variants
 * magnetic: true enables magnetic effect on desktop CTAs
 */
export default function Button({
  children,
  variant = 'primary',
  magnetic = false,
  href,
  to,
  onClick,
  className,
  type = 'button',
  disabled = false,
  ...props
}) {
  const magnet = useMagneticEffect(0.25)
  const isMagnetic = magnetic && typeof window !== 'undefined' && !window.matchMedia('(pointer: coarse)').matches

  const variantClass = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    ghost: 'btn-ghost-white',
  }[variant]

  const Wrapper = isMagnetic ? motion.div : 'div'
  const wrapperProps = isMagnetic
    ? {
        ref: magnet.ref,
        style: { x: magnet.x, y: magnet.y },
        onMouseMove: magnet.handleMouseMove,
        onMouseLeave: magnet.handleMouseLeave,
      }
    : {}

  const content = (
    <Wrapper {...wrapperProps} style={{ display: 'inline-block', ...wrapperProps.style }}>
      {to ? (
        <Link
          to={to}
          className={cn(variantClass, className)}
          {...props}
        >
          {children}
        </Link>
      ) : href ? (
        <a href={href} className={cn(variantClass, className)} {...props}>
          {children}
        </a>
      ) : (
        <button
          type={type}
          onClick={onClick}
          disabled={disabled}
          className={cn(variantClass, className, disabled && 'opacity-60 cursor-not-allowed')}
          {...props}
        >
          {children}
        </button>
      )}
    </Wrapper>
  )

  return content
}
