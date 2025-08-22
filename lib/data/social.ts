import { Instagram, Facebook, Youtube, Twitter } from 'lucide-react'
import { SocialLink } from '@/types'

export const SOCIAL_LINKS: SocialLink[] = [
  { 
    icon: Facebook, 
    href: "https://facebook.com/privatelimo", 
    label: "Facebook" 
  },
  { 
    icon: Twitter, 
    href: "https://twitter.com/privatelimo", 
    label: "Twitter" 
  },
  { 
    icon: Instagram, 
    href: "https://instagram.com/privatelimo", 
    label: "Instagram" 
  },
  { 
    icon: Youtube, 
    href: "https://youtube.com/privatelimo", 
    label: "YouTube" 
  }
]