'use client'

import { useState } from 'react'
import { X, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  language: string
  onLanguageChange: () => void
  services: string[]
}

const MobileMenu = ({ isOpen, onClose, language, onLanguageChange, services }: MobileMenuProps) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50" 
        onClick={onClose}
      />
      
      {/* Menu Panel */}
      <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="font-sans text-xl font-semibold text-[var(--color-navy)]">
            Menú
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-[var(--color-navy)] hover:text-[var(--color-marine)] transition-colors rounded-full hover:bg-gray-100"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        {/* Menu Items */}
        <nav className="py-4 px-6 flex flex-col h-full">
          <Link 
            href="/"
            onClick={onClose}
            className="block py-4 text-lg font-sans text-[var(--color-navy)] hover:text-[var(--color-marine)] hover:bg-gray-50 rounded-lg px-4 transition-all duration-200"
          >
            Home
          </Link>
          
          <Link 
            href="/quienes-somos"
            onClick={onClose}
            className="block py-4 text-lg font-sans text-[var(--color-navy)] hover:text-[var(--color-marine)] hover:bg-gray-50 rounded-lg px-4 transition-all duration-200"
          >
            Quiénes Somos
          </Link>
          
          {/* Services Dropdown */}
          <div>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="w-full flex items-center justify-between py-4 text-lg font-sans text-[var(--color-navy)] hover:text-[var(--color-marine)] hover:bg-gray-50 rounded-lg px-4 transition-all duration-200"
            >
              <span>Servicios</span>
              <ChevronDown 
                className={cn(
                  "w-5 h-5 transition-transform duration-200",
                  isServicesOpen && "rotate-180"
                )}
              />
            </button>
            
            {isServicesOpen && (
              <div className="ml-4 mb-2">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    href={`/servicios/${service.toLowerCase().replace(' ', '-')}`}
                    onClick={onClose}
                    className="block px-6 py-3 text-sm font-sans text-[var(--color-navy)] hover:text-[var(--color-marine)] hover:bg-gray-50 rounded-lg transition-all duration-200"
                  >
                    • {service}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          <Link 
            href="/nuestra-flota"
            onClick={onClose}
            className="block py-4 text-lg font-sans text-[var(--color-navy)] hover:text-[var(--color-marine)] hover:bg-gray-50 rounded-lg px-4 transition-all duration-200"
          >
            Nuestra Flota
          </Link>
          
          <Link 
            href="/contacto"
            onClick={onClose}
            className="block py-4 text-lg font-sans text-[var(--color-navy)] hover:text-[var(--color-marine)] hover:bg-gray-50 rounded-lg px-4 transition-all duration-200"
          >
            Contacto
          </Link>
          
          {/* Language Switcher */}
          <div className="mt-auto border-t border-gray-200 pt-6">
            <button
              onClick={() => {
                onLanguageChange()
                onClose()
              }}
              className="w-full py-3 text-center font-sans font-medium text-white bg-[var(--color-navy)] hover:bg-[var(--color-marine)] rounded-lg transition-colors duration-200"
            >
              Idioma: {language}
            </button>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default MobileMenu