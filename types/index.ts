/**
 * Definiciones de tipos TypeScript centralizadas
 */

import { ReactNode, ComponentType } from 'react'
import { LucideProps } from 'lucide-react'

// Tipos de navegación
export interface NavLink {
  label: string
  href: string
  subItems?: NavLink[]
}

// Tipos de servicio
export interface Service {
  id: string
  icon: ReactNode
  title: string
  description: string
  href?: string
}

// Tipos de vehículo
export interface VehicleFeature {
  icon: ReactNode
  text: string
}

export interface Vehicle {
  id: number
  image: string
  type: string
  name: string
  features: VehicleFeature[]
}

// Tipos de experiencia premium
export interface ExperienceFeature {
  icon: ReactNode
  boldText: string
  regularText: string
}

// Tipos de contacto
export interface ContactInfo {
  label: string
  value: string
  href?: string
  icon?: ReactNode
}

// Tipos de redes sociales
export interface SocialLink {
  icon: ComponentType<LucideProps>
  href: string
  label: string
}





