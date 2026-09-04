import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollProgress from './components/ui/ScrollProgress'

// Lazy load pages for performance
const HomePage = lazy(() => import('./pages/HomePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const EmployeeTransportPage = lazy(() => import('./pages/EmployeeTransportPage'))
const FleetPage = lazy(() => import('./pages/FleetPage'))
const WhyChooseUsPage = lazy(() => import('./pages/WhyChooseUsPage'))
const IndustriesClientsPage = lazy(() => import('./pages/IndustriesClientsPage'))
const SafetyCompliancePage = lazy(() => import('./pages/SafetyCompliancePage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const CareersPage = lazy(() => import('./pages/CareersPage'))

function PageLoader() {
  return (
    <div className="min-h-screen bg-[#031B35] flex items-center justify-center" aria-label="Loading page">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 rounded-full border-2 border-[#11A8E2]/30 border-t-[#11A8E2] animate-spin" aria-hidden="true" />
        <p className="text-white/50 text-sm font-body">Loading…</p>
      </div>
    </div>
  )
}

function NotFound() {
  return (
    <div className="min-h-screen bg-[#031B35] flex items-center justify-center text-center px-5" role="main">
      <div>
        <p className="text-[#11A8E2] text-xs font-bold tracking-[0.2em] uppercase font-heading mb-4">404</p>
        <h1 className="font-heading text-4xl font-bold text-white mb-4">Page Not Found</h1>
        <p className="text-white/60 text-base mb-8">The page you're looking for doesn't exist.</p>
        <a href="/" className="btn-primary">Return to Home</a>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <>
      {/* Scroll to top on route change */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] btn-primary text-sm">
        Skip to main content
      </a>

      <ScrollProgress />
      <Navbar />

      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/employee-transport" element={<EmployeeTransportPage />} />
          <Route path="/fleet" element={<FleetPage />} />
          <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
          <Route path="/industries-clients" element={<IndustriesClientsPage />} />
          <Route path="/safety-compliance" element={<SafetyCompliancePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  )
}
