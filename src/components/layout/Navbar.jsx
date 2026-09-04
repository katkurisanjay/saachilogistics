import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import Container from '../ui/Container'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/employee-transport' },
  { label: 'Fleet', to: '/fleet' },
  { label: 'Why Us', to: '/why-choose-us' },
  { label: 'Clients', to: '/industries-clients' },
  { label: 'Safety', to: '/safety-compliance' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm'
            : 'py-4 bg-white border-b border-slate-100'
        }`}
        role="banner"
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center group flex-shrink-0" aria-label="Saachi Logistics - Home">
              <img
                src="/saachi logo.jpeg"
                alt="Saachi Logistics"
                className="h-10 w-auto object-contain rounded"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex flex-1 justify-center items-center gap-1" role="navigation">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      isActive
                        ? 'bg-slate-100 text-slate-900'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Desktop right side: CTA */}
            <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
              <Link to="/contact" className="btn-primary !min-h-[38px] !py-2 !px-4 !text-sm">
                Get a Quote
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-md transition-colors"
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-slate-900/20 backdrop-blur-sm lg:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-white border-l border-slate-200 flex flex-col lg:hidden"
            >
              <div className="p-5 flex items-center justify-between border-b border-slate-100">
                <img
                  src="/saachi logo.jpeg"
                  alt="Saachi Logistics"
                  className="h-9 w-auto object-contain rounded"
                />
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 text-slate-500 hover:bg-slate-100 rounded-md"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-4 px-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === '/'}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-md font-medium text-base transition-colors ${
                        isActive
                          ? 'bg-slate-100 text-slate-900'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>

              {/* Mobile footer with contact */}
              <div className="p-5 border-t border-slate-100 space-y-3">
                <a
                  href="tel:9908150290"
                  className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg text-slate-700 font-medium text-sm hover:bg-slate-100 transition-colors"
                >
                  <Phone size={15} className="text-[#0284C7]" />
                  +91 99081 50290
                </a>
                <a
                  href="tel:9000786960"
                  className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg text-slate-700 font-medium text-sm hover:bg-slate-100 transition-colors"
                >
                  <Phone size={15} className="text-[#0284C7]" />
                  +91 90007 86960
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
