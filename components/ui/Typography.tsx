import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { FONTS, FONT_SIZES } from '@/lib/constants/theme'

interface TypographyProps {
  children: ReactNode
  className?: string
}

export const Title = ({ children, className }: TypographyProps) => (
  <h1 className={cn("font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-white leading-tight uppercase tracking-wider", className)}>
    {children}
  </h1>
)

export const Subtitle = ({ children, className }: TypographyProps) => (
  <p className={cn("font-sans text-lg md:text-xl text-white leading-relaxed", className)}>
    {children}
  </p>
)

export const Body = ({ children, className }: TypographyProps) => (
  <p className={cn("font-sans text-lg font-normal text-white leading-tight", className)}>
    {children}
  </p>
)

export const SectionTitle = ({ children, className }: TypographyProps) => (
  <h2 
    className={cn("text-white", className)}
    style={{
      fontFamily: FONTS.serif,
      fontSize: '40px',
      fontWeight: '400',
      lineHeight: '1.2'
    }}
  >
    {children}
  </h2>
)

export const SectionSubtitle = ({ children, className }: TypographyProps) => (
  <p 
    className={cn("text-white leading-relaxed", className)}
    style={{
      fontFamily: FONTS.sans,
      fontSize: FONT_SIZES.base,
      fontWeight: '400'
    }}
  >
    {children}
  </p>
)