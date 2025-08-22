'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import MobileMenu from '@/components/ui/MobileMenu'
import logotipo from '@/app/logotipo.svg'

export default function Navigation() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [language, setLanguage] = useState('ES')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    'Servicio 1',
    'Servicio 2', 
    'Servicio 3',
    'Servicio 4',
    'Servicio 5',
    'Servicio 6'
  ]

  return (
    <>
      <nav className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/10 backdrop-blur-md' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src={logotipo}
                  alt="Private Limo"
                  width={197}
                  height={30}
                  className="w-32 h-5 md:w-[197px] md:h-[30px]"
                />
              </Link>
            </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-white hover:text-[var(--color-pink-gold)] transition-colors"
              style={{ fontFamily: 'var(--font-open-sans)' }}
            >
              Home
            </Link>
            
            <Link 
              href="/quienes-somos" 
              className="text-white hover:text-[var(--color-pink-gold)] transition-colors"
              style={{ fontFamily: 'var(--font-open-sans)' }}
            >
              Quiénes Somos
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="text-white hover:text-[var(--color-pink-gold)] transition-colors flex items-center space-x-1"
                style={{ fontFamily: 'var(--font-open-sans)' }}
              >
                <span>Servicios</span>
                <svg
                  className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={`/servicios/${service.toLowerCase().replace(' ', '-')}`}
                      className="block px-4 py-2 text-sm text-[var(--color-navy)] hover:bg-[var(--color-soft-grey)] hover:text-[var(--color-marine)] transition-colors"
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link 
              href="/nuestra-flota" 
              className="text-white hover:text-[var(--color-pink-gold)] transition-colors"
              style={{ fontFamily: 'var(--font-open-sans)' }}
            >
              Nuestra Flota
            </Link>
            
            <Link 
              href="/contacto" 
              className="text-white hover:text-[var(--color-pink-gold)] transition-colors"
              style={{ fontFamily: 'var(--font-open-sans)' }}
            >
              Contacto
            </Link>
          </div>

            {/* Desktop Language Switcher */}
            <div className="hidden md:flex items-center">
              <button
                onClick={() => setLanguage(language === 'ES' ? 'EN' : 'ES')}
                className="px-3 py-1 text-white hover:text-[var(--color-pink-gold)] font-medium transition-colors"
                style={{ fontFamily: 'var(--font-open-sans)' }}
              >
                {language}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-white hover:text-[var(--color-pink-gold)] p-2"
                aria-label="Abrir menú"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        language={language}
        onLanguageChange={() => setLanguage(language === 'ES' ? 'EN' : 'ES')}
        services={services}
      />
    </>
  )
}