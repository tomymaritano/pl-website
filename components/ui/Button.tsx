import { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  asChild?: boolean
  href?: string
}

const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  className, 
  children, 
  asChild = false,
  href,
  ...props 
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center gap-3 font-sans font-medium transition-opacity hover:opacity-90"
  
  const variants = {
    primary: "text-white",
    secondary: "text-[var(--color-navy)] bg-white border border-[var(--color-navy)]",
    outline: "text-[var(--color-navy)] border border-[var(--color-navy)] bg-transparent"
  }
  
  const sizes = {
    sm: "h-10 px-4 text-sm",
    md: "h-12 w-40 md:h-[56px] md:w-[182px] text-sm md:text-base",
    lg: "h-16 px-8 text-lg"
  }
  
  const classes = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    variant === 'primary' ? '' : '',
    className
  )
  
  const primaryStyle = variant === 'primary' ? {
    background: 'var(--gradient-pinkgold)'
  } : {}
  
  if (href) {
    const Link = require('next/link').default
    return (
      <Link href={href} className={classes} style={primaryStyle}>
        {children}
      </Link>
    )
  }
  
  return (
    <button className={classes} style={primaryStyle} {...props}>
      {children}
    </button>
  )
}

export default Button