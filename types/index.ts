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
  image: any // Next.js StaticImageData
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

// Tipos de logo de partners
export interface PartnerLogo {
  src: any // Next.js StaticImageData
  alt: string
  href?: string
}

// Tipos de footer
export interface FooterSection {
  title: string
  items: FooterItem[]
}

export interface FooterItem {
  label: string
  href?: string
  icon?: ReactNode
}

// Tipos de SEO
export interface SEOMetadata {
  title: string
  description: string
  keywords?: string[]
  openGraph?: OpenGraphMetadata
  twitter?: TwitterMetadata
}

export interface OpenGraphMetadata {
  title?: string
  description?: string
  images?: string[]
  url?: string
  type?: 'website' | 'article' | 'product'
}

export interface TwitterMetadata {
  card?: 'summary' | 'summary_large_image'
  title?: string
  description?: string
  images?: string[]
  creator?: string
}

// Tipos de componentes UI
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  onClick?: () => void
  disabled?: boolean
  className?: string
  type?: 'button' | 'submit' | 'reset'
  href?: string
  target?: string
  rel?: string
  'aria-label'?: string
}

export interface CardProps {
  title?: string
  description?: string
  image?: any
  children?: ReactNode
  className?: string
  onClick?: () => void
}

export interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  bgColor?: 'white' | 'grey' | 'marine' | 'navy'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
}

// Tipos de formulario
export interface FormField {
  name: string
  label: string
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'
  placeholder?: string
  required?: boolean
  options?: { value: string; label: string }[]
  validation?: {
    pattern?: RegExp
    minLength?: number
    maxLength?: number
    message?: string
  }
}