import { Helmet } from 'react-helmet-async'
import Hero from '../components/sections/Hero'
import TrustBand from '../components/sections/TrustBand'
import CorporateProblem from '../components/sections/CorporateProblem'
import Services from '../components/sections/Services'
import Workflow from '../components/sections/Workflow'
import HRAdminSection from '../components/sections/HRAdminSection'
import Fleet from '../components/sections/Fleet'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import Clients from '../components/sections/Clients'
import EmployeeExperience from '../components/sections/EmployeeExperience'
import Commitment from '../components/sections/Commitment'
import FAQ from '../components/sections/FAQ'
import FinalCTA from '../components/sections/FinalCTA'

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Saachi Logistics | Corporate Employee Transportation Hyderabad</title>
        <meta
          name="description"
          content="Safe Rides. On-Time Always. Every Time. Reliable corporate employee commute solutions for IT companies and enterprises in Hyderabad."
        />
      </Helmet>

      <main id="main-content">
        <Hero />
        <TrustBand />
        <CorporateProblem />
        <Services />
        <Workflow />
        <HRAdminSection />
        <Fleet />
        <WhyChooseUs />
        <Clients />
        <EmployeeExperience />
        <Commitment />
        <FAQ />
        <FinalCTA />
      </main>
    </>
  )
}
