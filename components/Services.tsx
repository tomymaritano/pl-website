import { Users, MapPin, Star, Briefcase, Plane, CalendarCheck2 } from 'lucide-react'
import { SectionTitle, SectionSubtitle } from '@/components/ui/Typography'
import ServiceCard from '@/components/ui/ServiceCard'

const SERVICES_DATA = [
{
  icon: <Star className="w-6 h-6" />,
  title: "Asistencia Vip",
  description: "Asistencia VIP en arribos y partidas: recepción en la manga, acceso a Sala VIP, gestión de trámites y traslado sin esperas."
},
{
  icon: <Briefcase className="w-6 h-6" />,
  title: "Traslados Corporativos",
  description: "Transporte ejecutivo seguro, puntual y personalizado para directivos y personal, con choferes profesionales y opciones flexibles."
},
{
  icon: <Plane className="w-6 h-6" />,
  title: "Transfer Aeropuerto",
  description: "Recepción personalizada, seguimiento de vuelo y traslados seguros y puntuales desde y hacia Ezeiza, Aeroparque y San Fernando."
},
{
  icon: <Users className="w-6 h-6" />,
  title: "Servicios Grupales",
  description: "Traslados seguros y cómodos en unidades de 15 a 60 pasajeros para viajes corporativos, turísticos y a aeropuertos."
},
{
  icon: <MapPin className="w-6 h-6" />,
  title: "Servicios Turísticos",
  description: "City tours y experiencias personalizadas en Buenos Aires con choferes bilingües y atención de primer nivel."
},
{
  icon: <CalendarCheck2 className="w-6 h-6" />,
  title: "Eventos Y Congresos",
  description: "Coordinación experta y traslados precisos para reuniones corporativas y encuentros de gran escala."
}

]

export default function Services() {
  return (
    <section className="py-16 md:py-24 border-none" style={{ backgroundColor: 'var(--color-marine)' }}>
      <div className="container-full">
        <div className="max-w-6xl mx-auto text-center">
          {/* Section Header */}
          <SectionTitle className="mb-4 uppercase">
            SERVICIOS PREMIUM
          </SectionTitle>
          
          <SectionSubtitle className="mb-12 max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios de transporte ejecutivo adaptados a tus necesidades específicas
          </SectionSubtitle>
          
          {/* Services Grid */}
          <div className="container-grid gap-8">
            {SERVICES_DATA.map((service, index) => (
              <div key={index} className="col-span-4 md:col-span-4 lg:col-span-4">
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}