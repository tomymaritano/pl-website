import Image from 'next/image'
import { Instagram, Facebook, Youtube, Twitter, ChevronRight } from 'lucide-react'
import logoFull from '@/app/images/logofull.svg'

export default function Footer() {
  return (
    <footer className="bg-white text-[var(--color-marine)] py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Logo and Social Media */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-20">
          <Image
            src={logoFull}
            alt="Private Limo"
            width={320}
            height={100}
            className="w-auto h-24 md:h-28 lg:h-32"
          />
          <div className="flex gap-6 md:gap-8 lg:gap-12">
            <Facebook className="w-5 h-5 md:w-6 md:h-6 hover:text-[var(--color-pink-gold)] cursor-pointer stroke-1" />
            <Twitter className="w-5 h-5 md:w-6 md:h-6 hover:text-[var(--color-pink-gold)] cursor-pointer stroke-1" />
            <Instagram className="w-5 h-5 md:w-6 md:h-6 hover:text-[var(--color-pink-gold)] cursor-pointer stroke-1" />
            <Youtube className="w-5 h-5 md:w-6 md:h-6 hover:text-[var(--color-pink-gold)] cursor-pointer stroke-1" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div>
            <h3 className="text-lg font-bold mb-4 font-sans">Información de Contacto</h3>
            <ul className="space-y-5 font-sans">
              <li>+54 11 4804 8806</li>
              <li>+54 11 3537 2307</li>
              <li>Whatsapp: +54 11 3537 2307</li>
              <li>reservas@privatelimo.com.ar</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 font-sans">Links Útiles</h3>
            <ul className="space-y-5 font-sans">
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                <span>Home</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                <span>Quiénes Somos</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                <span>Servicios</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                <span>Nuestra Flota</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                <span>Contacto</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 font-sans">Servicios</h3>
            <ul className="space-y-5 font-sans">
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                <span>Traslados Corporativos</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                <span>Transfers al Aeropuerto</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                <span>Servicios Turísticos</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                <span>Servicios Grupales</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                <span>Eventos y Congresos</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-20 border-t border-gray-300 text-center font-sans">
          <p className="text-sm text-gray-600">
            Copyright &copy; 2025 Private Limo | All Rights Reserved - Designed by{' '}
            <a 
              href='https://www.blacro.com' 
              className="text-[var(--color-pink-gold)] hover:text-[var(--color-navy)] transition-colors font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blacro
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}