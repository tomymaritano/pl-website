import Image from 'next/image'
import { Handshake, MessageCircle, ShieldCheck, ShieldUser, Star } from 'lucide-react'
import thumbAutoImage from '@/app/images/thumb-auto.jpg'

const EXPERIENCE_FEATURES = [
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    boldText: "100% Seguro",
    regularText: "Conductores Certificados"
  },
  {
    icon: <MessageCircle className="w-5 h-5" />,
    boldText: "24/7 Disponible",
    regularText: "Servicio todo el año"
  },
  {
    icon: <Star className="w-5 h-5" />,
    boldText: "5 Estrellas",
    regularText: "Calificación Promedio"
  },
  {
    icon: <Handshake className="w-5 h-5" />,
    boldText: "Cuenta corriente",
    regularText: "Servicios con regularidad"
  },
  {
    icon: <ShieldUser className="w-5 h-5" />,
    boldText: "Protocolo de Calidad",
    regularText: "Garantia Segura"
  }
]

export default function PremiumExperience() {
  return (
    <section className="relative py-16 md:py-24 min-h-[500px] md:h-[700px]">
      {/* Background Image */}
      <Image
        src={thumbAutoImage}
        alt="Premium Experience Background"
        fill
        className="object-cover"
      />

      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content Container */}
      <div className="relative z-10 container-grid items-center min-h-full">
        {/* Floating Text Block */}
        <div className="bg-white shadow-lg col-span-4 md:col-span-4 lg:col-span-4 lg:col-start-2 flex flex-col w-full md:w-[476px] h-auto md:h-[408px] flex-shrink-0">
          {/* Content Area */}
          <div className="px-6 py-8 md:px-10 md:py-11 flex-1">
            {/* Premium Service Label */}
            <p className="mb-6 text-[var(--color-pink-gold)] uppercase font-bold text-base" style={{ fontFamily: 'var(--font-open-sans)' }}>
              SERVICIO PREMIUM
            </p>

            {/* Main Title */}
            <h2 className="mb-6 text-[var(--color-black)] text-2xl md:text-[40px] font-normal leading-tight md:leading-[48px]" style={{ fontFamily: 'var(--font-baskerville)' }}>
              Más que un viaje, <br /> una experiencia.
            </h2>

            {/* Features List */}
            <div className="space-y-2">
              {EXPERIENCE_FEATURES.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="text-[var(--color-pink-gold)]">
                    {feature.icon}
                  </div>
                  <div className="text-[var(--color-black)]">
                    <span className="font-bold text-[var(--color-black)] text-sm" style={{ fontFamily: 'var(--font-open-sans)' }}>
                      {feature.boldText}
                    </span>
                    <span className="font-normal text-[var(--color-black)] text-sm" style={{ fontFamily: 'var(--font-open-sans)' }}>
                      {' | '}{feature.regularText}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button - Stuck to bottom */}
          <button className="w-full py-4 text-white font-semibold" style={{ background: 'var(--gradient-blue)', fontFamily: 'var(--font-open-sans)' }}>
            HACE TU RESERVA
          </button>
        </div>
      </div>
    </section>
  )
}