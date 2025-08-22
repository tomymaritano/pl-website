import Image from 'next/image'
import { Users, Briefcase, ShieldCheck, Star } from 'lucide-react'
import { SectionTitle, SectionSubtitle } from '@/components/ui/Typography'
import jeepImage from '@/app/images/cars/JeepGrandCherokee.png'
import mercedesE400Image from '@/app/images/cars/MercedezBenzE400.png'
import mercedesVitoImage from '@/app/images/cars/MercedesBenzVitoTourer.png'

// Vehicle data array
const VEHICLES = [
  {
    id: 1,
    image: jeepImage,
    type: "SUV Premium",
    name: "Jeep Grand Cherokee",
    features: [
      { icon: <Users className="w-4 h-4" />, text: "3 Pasajeros" },
      { icon: <Briefcase className="w-4 h-4" />, text: "3 Valijas" },
      { icon: <Star className="w-4 h-4" />, text: "4x4 de Lujo" },
      { icon: <ShieldCheck className="w-4 h-4" />, text: "Seguridad Premium" }
    ]
  },
  {
    id: 2,
    image: mercedesE400Image,
    type: "Sedán Ejecutivo",
    name: "Mercedes-Benz E400",
    features: [
      { icon: <Users className="w-4 h-4" />, text: "3 Pasajeros" },
      { icon: <Briefcase className="w-4 h-4" />, text: "3 Valijas" },
      { icon: <Star className="w-4 h-4" />, text: "Sedán de Lujo" },
      { icon: <ShieldCheck className="w-4 h-4" />, text: "Seguridad Premium" }
    ]
  },
  {
    id: 3,
    image: mercedesVitoImage,
    type: "Van Premium",
    name: "Mercedes-Benz Vito Tourer",
    features: [
      { icon: <Users className="w-4 h-4" />, text: "6 Pasajeros" },
      { icon: <Briefcase className="w-4 h-4" />, text: "6 Valijas" },
      { icon: <Star className="w-4 h-4" />, text: "Nivel Ejecutivo" },
      { icon: <ShieldCheck className="w-4 h-4" />, text: "Seguridad Premium" }
    ]
  }
]

// Vehicle Card Component
function VehicleCard({ vehicle }: { vehicle: typeof VEHICLES[0] }) {
  return (
    <div className="overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
         style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 27.77%, rgba(255, 255, 255, 0.20) 99.99%)' }}>
      {/* Vehicle Image */}
      <div className="relative h-[140px] w-full overflow-hidden">
        <Image
          src={vehicle.image}
          alt={vehicle.name}
          fill
          className="object-contain group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      {/* Vehicle Info */}
      <div className="p-8">
        {/* Vehicle Type */}
        <p className="text-white uppercase font-normal text-xs tracking-wider font-sans mb-3">
          {vehicle.type}
        </p>
        
        {/* Vehicle Name */}
        <h3 className="text-[var(--color-pink-gold)] text-base font-bold font-sans mb-6">
          {vehicle.name}
        </h3>
        
        {/* Features List */}
        <div className="space-y-3">
          {vehicle.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="text-[var(--color-pink-gold)]">
                {feature.icon}
              </div>
              <span className="text-white text-sm font-sans">
                {feature.text}
              </span>
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        <button className="w-full mt-6 py-3 text-white font-semibold font-sans text-sm uppercase tracking-wider hover:opacity-90 transition-opacity" 
                style={{ background: 'var(--gradient-blue)' }}>
          Reservar Ahora
        </button>
      </div>
    </div>
  )
}

export default function FleetSection() {
  return (
    <section className="py-20 md:py-32 bg-[var(--color-marine)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <SectionTitle className="mb-4 uppercase text-white">
            FLOTA DE LUJO
          </SectionTitle>
          
          <SectionSubtitle className="mb-12 max-w-2xl mx-auto text-white">
            Vehículos de última generación mantenidos en perfectas condiciones para tu comodidad y seguridad
          </SectionSubtitle>
        </div>
        
        {/* Vehicle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {VEHICLES.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </section>
  )
}