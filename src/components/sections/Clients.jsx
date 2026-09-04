import Container from '../ui/Container'
import { clientsData } from '../../data/clients'

export default function Clients() {
  const doubled = [...clientsData, ...clientsData, ...clientsData]

  return (
    <section
      className="py-16 bg-white border-t border-slate-200 overflow-hidden"
      aria-labelledby="clients-heading"
    >
      <Container>
        <div className="text-center mb-12">
          <span className="inline-block text-[#0284C7] text-xs font-bold tracking-widest uppercase mb-3 bg-[#EFF6FF] px-3 py-1.5 rounded-full">
            Trusted Corporate Partners
          </span>
          <h2
            id="clients-heading"
            className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 mt-4"
          >
            Organizations that trust us daily.
          </h2>
          <p className="text-slate-500 text-sm mt-3 max-w-xl mx-auto">
            Serving some of Hyderabad's most recognized IT and corporate organizations with reliable employee transportation.
          </p>
        </div>
      </Container>

      {/* Full-width marquee trust wall */}
      <div className="relative overflow-hidden" aria-label="Client organizations">
        {/* Edge gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="marquee-track py-4" role="list">
          {doubled.map((client, i) => (
            <div
              key={`${client.id}-${i}`}
              role="listitem"
              className="flex-shrink-0 mx-4"
            >
              <div className="flex items-center gap-3 px-6 py-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-slate-300 hover:shadow-md transition-all duration-200 cursor-default min-w-[160px] justify-center">
                {client.logo ? (
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-7 w-auto object-contain max-w-[110px] grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                ) : null}
                <div
                  className="w-8 h-8 rounded-md flex items-center justify-center text-white font-bold text-xs font-heading"
                  style={{
                    backgroundColor: client.color || '#0284C7',
                    display: client.logo ? 'none' : 'flex',
                  }}
                >
                  {client.initials}
                </div>
                {!client.logo && (
                  <span className="font-heading font-semibold text-slate-700 text-sm whitespace-nowrap">
                    {client.name}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Container>
        <p className="text-center text-slate-400 text-xs mt-8">
          * References represent ongoing and past B2B corporate transportation operations in Hyderabad.
        </p>
      </Container>
    </section>
  )
}
