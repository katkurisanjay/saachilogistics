import { Link } from 'react-router-dom'
import { Phone, MapPin } from 'lucide-react'
import Container from '../ui/Container'

const footerNav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/employee-transport' },
  { label: 'Fleet', to: '/fleet' },
  { label: 'Why Us', to: '/why-choose-us' },
  { label: 'Safety', to: '/safety-compliance' },
  { label: 'Clients', to: '/industries-clients' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
]

const footerServices = [
  { label: 'Employee Transportation', to: '/employee-transport' },
  { label: 'Shift Transportation', to: '/employee-transport' },
  { label: 'Pickup & Drop', to: '/employee-transport' },
  { label: 'Fleet Support', to: '/fleet' },
  { label: '24/7 Support', to: '/contact' },
]

// Split nav into two columns
const navCol1 = footerNav.slice(0, 5)
const navCol2 = footerNav.slice(5)

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white" role="contentinfo">
      <div className="pt-14 pb-10">
        <Container>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

            {/* Brand */}
            <div>
              <Link to="/" className="inline-block mb-5" aria-label="Saachi Logistics">
                <img
                  src="/saachi logo.jpeg"
                  alt="Saachi Logistics"
                  className="h-12 w-auto object-contain rounded bg-white px-2 py-1"
                />
              </Link>

              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                Safe Rides. On-Time Always. Every Time. Trusted corporate employee transportation in Hyderabad.
              </p>

              <div className="space-y-2">
                <a href="tel:9908150290" className="flex items-center gap-2 text-slate-300 hover:text-white text-sm transition-colors">
                  <Phone size={13} className="text-[#38BDF8] flex-shrink-0" />
                  +91 99081 50290
                </a>
                <a href="tel:9000786960" className="flex items-center gap-2 text-slate-300 hover:text-white text-sm transition-colors">
                  <Phone size={13} className="text-[#38BDF8] flex-shrink-0" />
                  +91 90007 86960
                </a>
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <MapPin size={13} className="text-slate-500 flex-shrink-0" />
                  Hyderabad, Telangana
                </div>
              </div>
            </div>

            {/* Navigation — two sub-columns side by side */}
            <div>
              <h3 className="font-heading font-semibold text-slate-100 mb-4 text-sm tracking-wide">
                Navigation
              </h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                {footerNav.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="text-slate-400 hover:text-white text-sm transition-colors truncate"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-heading font-semibold text-slate-100 mb-4 text-sm tracking-wide">
                Services
              </h3>
              <ul className="space-y-2.5">
                {footerServices.map((item) => (
                  <li key={item.label}>
                    <Link to={item.to} className="text-slate-400 hover:text-white text-sm transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fleet */}
            <div>
              <h3 className="font-heading font-semibold text-slate-100 mb-4 text-sm tracking-wide">
                Fleet
              </h3>
              <ul className="space-y-2.5 mb-8">
                <li className="text-slate-400 text-sm">30 Sedan Vehicles</li>
                <li className="text-slate-400 text-sm">20 SUV Vehicles</li>
                <li className="text-slate-400 text-sm">50 Total Active Units</li>
              </ul>
              <h3 className="font-heading font-semibold text-slate-100 mb-3 text-sm tracking-wide">
                Operations
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                24/7 Corporate Desk<br />Available for roster support
              </p>
            </div>

          </div>
        </Container>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800 py-5">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-slate-500">
            <p>© {year} Saachi Logistics. All rights reserved.</p>
            <p>Corporate Employee Transportation — Hyderabad, Telangana</p>
          </div>
        </Container>
      </div>
    </footer>
  )
}
