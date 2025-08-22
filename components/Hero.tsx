import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import heroImage from '@/app/heromain.jpg'
import logo1 from '@/app/logos/HxTfrT.tif.png'
import logo2 from '@/app/logos/Layer_1.png'
import logo3 from '@/app/logos/ZgPxpw.tif.png'
import logo4 from '@/app/logos/Group.png'
import logo5 from '@/app/logos/nike 2.png'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end pb-15 justify-center border-none">
      {/* Background Image */}
      <Image
        src={heroImage}
        alt="Hero background"
        fill
        className="object-cover"
        priority
      />
      
      {/* Overlay for better text readability (optional) */}
      <div className="absolute inset-0"></div>
      
      {/* Content */}
      <div className="relative z-10 container-full text-center">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Title */}
          <h1 
            className="uppercase tracking-wider mb-6 text-white"
            style={{
              fontFamily: 'var(--font-baskerville)',
              fontSize: '48px',
              fontWeight: '400',
              lineHeight: '1.2'
            }}
          >
            TRANSPORTE<br />
            EJECUTIVO PREMIUM
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl mb-12 text-white font-[var(--font-open-sans)] leading-relaxed">
            Más de 25 años liderando el traslado premium, ejecutivo y turístico<br />
            en Buenos Aires. Confiabilidad, excelencia y exclusividad.
          </p>
          
          {/* CTA Button */}
          <Button href="/reservar" variant="primary" size="md">
            Reservar
            <ChevronRight className="w-5 h-5" />
          </Button>
          
          {/* Divider and Official Transport Text */}
          <div className="mt-20">
            <div className="flex items-center justify-center gap-8">
              {/* Left Line */}
              <svg width="438" height="2" viewBox="0 0 438 2" fill="none" className="w-[438px]">
                <path d="M1 1H437" stroke="url(#gradient-left)" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="gradient-left" x1="437" y1="1" x2="1" y2="1" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E0B7B0" stopOpacity="0"/>
                    <stop offset="0.175324" stopColor="#B1786E"/>
                    <stop offset="0.439615" stopColor="#704A44"/>
                    <stop offset="0.705476" stopColor="#B1786E"/>
                    <stop offset="1" stopColor="#E0B7B0"/>
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Center Text */}
              <p 
                className="whitespace-nowrap px-6 text-white font-size-xs" 
              >
                Transporte Oficial de Alvear Palace Hotel
              </p>
              
              {/* Right Line */}
              <svg width="438" height="2" viewBox="0 0 438 2" fill="none" className="w-[438px]">
                <path d="M1 1H437" stroke="url(#gradient-right)" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="gradient-right" x1="1" y1="1" x2="437" y2="1" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E0B7B0"/>
                    <stop offset="0.175324" stopColor="#B1786E"/>
                    <stop offset="0.439615" stopColor="#704A44"/>
                    <stop offset="0.705476" stopColor="#B1786E"/>
                    <stop offset="1" stopColor="#E0B7B0" stopOpacity="0"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            
            {/* Logos */}
            <div className="grid grid-cols-3 md:flex md:items-center md:justify-between gap-6 md:gap-8 max-w-6xl mx-auto mt-10 px-8 items-center justify-items-center">
              <Image
                src={logo3}
                alt="Partner logo 3"
                className="opacity-90 object-contain h-8 md:h-auto w-auto"
              />
              <Image
                src={logo1}
                alt="Partner logo 1"
                className="opacity-90 object-contain h-8 md:h-auto w-auto"
              />
              <Image
                src={logo2}
                alt="Alvear Palace Hotel"
                className="opacity-90 object-contain h-8 md:h-auto w-auto"
              />
              <Image
                src={logo5}
                alt="Nike"
                className="opacity-90 object-contain h-8 md:h-auto w-auto"
              />
              <Image
                src={logo4}
                alt="Partner logo 4"
                className="opacity-90 object-contain h-8 md:h-auto w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}