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
      <div className="absolute inset-0 h-full w-full bg-white shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="font-sans text-2xl font-medium text-[var(--color-navy)]">
            Menú
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-[var(--color-navy)] hover:text-[var(--color-marine)] transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
        </div>
        
        {/* Menu Items */}
        <nav className="py-8 px-6">
          <Link 
            href="/"
            onClick={onClose}
            className="block py-4 text-2xl font-sans text-[var(--color-navy)] hover:text-[var(--color-marine)] transition-colors border-b border-[var(--color-soft-grey)]"
          >
            Home
          </Link>
          
          <Link 
            href="/quienes-somos"
            onClick={onClose}
            className="block py-4 text-2xl font-sans text-[var(--color-navy)] hover:text-[var(--color-marine)] transition-colors border-b border-[var(--color-soft-grey)]"
          >
            Quiénes Somos
          </Link>
          
          {/* Services Dropdown */}
          <div>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="w-full flex items-center justify-between py-4 text-2xl font-sans text-[var(--color-navy)] hover:text-[var(--color-marine)] transition-colors border-b border-[var(--color-soft-grey)]"
            >
              <span>Servicios</span>
              <ChevronDown 
                className={cn(
                  "w-4 h-4 transition-transform",
                  isServicesOpen && "rotate-180"
                )}
              />
            </button>
            
            {isServicesOpen && (
              <div className="bg-[var(--color-soft-grey)]">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    href={`/servicios/${service.toLowerCase().replace(' ', '-')}`}
                    onClick={onClose}
                    className="block px-10 py-2 text-sm font-sans text-[var(--color-navy)] hover:text-[var(--color-marine)] transition-colors"
                  >
                    {service}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          <Link 
            href="/nuestra-flota"
            onClick={onClose}
            className="block py-4 text-2xl font-sans text-[var(--color-navy)] hover:text-[var(--color-marine)] transition-colors border-b border-[var(--color-soft-grey)]"
          >
            Nuestra Flota
          </Link>
          
          <Link 
            href="/contacto"
            onClick={onClose}
            className="block py-4 text-2xl font-sans text-[var(--color-navy)] hover:text-[var(--color-marine)] transition-colors border-b border-[var(--color-soft-grey)]"
          >
            Contacto
          </Link>
        </nav>
        
        {/* Language Switcher */}
        <div className="absolute bottom-8 left-6 right-6 border-t border-[var(--color-soft-grey)] pt-6">
          <button
            onClick={() => {
              onLanguageChange()
              onClose()
            }}
            className="w-full py-4 text-xl font-sans font-medium text-[var(--color-navy)] hover:text-[var(--color-marine)] bg-[var(--color-soft-grey)] rounded-md transition-colors"
          >
            Idioma: {language}
          </button>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu