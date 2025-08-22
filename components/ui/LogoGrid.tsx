import Image, { StaticImageData } from 'next/image'
import { cn } from '@/lib/utils'

interface Logo {
  src: StaticImageData
  alt: string
}

interface LogoGridProps {
  logos: Logo[]
  className?: string
}

const LogoGrid = ({ logos, className }: LogoGridProps) => {
  return (
    <div className={cn("flex items-center justify-between max-w-6xl mx-auto mt-10 px-8", className)}>
      {logos.map((logo, index) => (
        <Image
          key={index}
          src={logo.src}
          alt={logo.alt}
          className="opacity-90 object-contain hover:opacity-100 transition-opacity"
        />
      ))}
    </div>
  )
}

export default LogoGrid