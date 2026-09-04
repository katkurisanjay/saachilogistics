// Verified fleet data - 30 sedans + 20 SUVs = 50 total
export const fleetData = [
  {
    id: 'sedan',
    type: 'Sedan',
    count: 30,
    description: 'Comfortable, fuel-efficient sedans ideal for individual employee commutes and small groups.',
    features: ['Professional Chauffeur', 'Air Conditioned', 'GPS Tracked Routes', 'On-Time Pickup'],
    image: null, // Asset required: /public/images/sedan-fleet.webp
    imagePlaceholder: 'bg-gradient-to-br from-[#062A52] to-[#087DB8]',
  },
  {
    id: 'suv',
    type: 'SUV',
    count: 20,
    description: 'Spacious SUVs suited for team transportation and corporate group commutes.',
    features: ['Ample Cabin Space', 'Professional Chauffeur', 'Air Conditioned', 'GPS Tracked Routes'],
    image: null, // Asset required: /public/images/suv-fleet.webp
    imagePlaceholder: 'bg-gradient-to-br from-[#031B35] to-[#062A52]',
  },
]

export const fleetStats = {
  sedans: 30,
  suvs: 20,
  total: 50,
}
