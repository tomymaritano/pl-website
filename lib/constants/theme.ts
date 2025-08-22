/**
 * Constantes de tema centralizadas
 * Mantiene consistencia en toda la aplicación
 */

// Colores de la marca
export const COLORS = {
  marine: '#222742',
  navy: '#153e70',
  pinkGold: '#ba8177',
  softGrey: '#ebeef0',
  white: '#ffffff',
  black: '#2B4448',
} as const

// Gradientes
export const GRADIENTS = {
  blue: 'linear-gradient(135deg, #1E223B 0%, #193565 47.97%, #1E223B 100%)',
  pinkGold: 'linear-gradient(140deg, #E0B7B0 -0.75%, #B1786E 16.2%, #704A44 41.76%, #B1786E 67.47%, #E0B7B0 95.96%)',
  cardOverlay: 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 27.77%, rgba(255, 255, 255, 0.20) 99.99%)',
} as const

// Breakpoints
export const BREAKPOINTS = {
  mobile: 640,
  tablet: 768,
  desktop: 1440,
} as const

// Espaciados
export const SPACING = {
  xs: '0.5rem',    // 8px
  sm: '1rem',      // 16px
  md: '1.5rem',    // 24px
  lg: '2rem',      // 32px
  xl: '3rem',      // 48px
  '2xl': '4rem',   // 64px
  '3xl': '5rem',   // 80px
} as const

// Tipografías
export const FONTS = {
  sans: "'Open Sans', system-ui, sans-serif",
  serif: "'Baskerville', 'Times New Roman', serif",
} as const

// Tamaños de fuente
export const FONT_SIZES = {
  xs: '0.75rem',    // 12px
  sm: '0.875rem',   // 14px
  base: '1rem',     // 16px
  lg: '1.125rem',   // 18px
  xl: '1.25rem',    // 20px
  '2xl': '1.5rem',  // 24px
  '3xl': '1.875rem', // 30px
  '4xl': '2.25rem', // 36px
  '5xl': '3rem',    // 48px
  '6xl': '3.75rem', // 60px
} as const

// Z-index layers
export const Z_INDEX = {
  dropdown: 10,
  sticky: 20,
  fixed: 30,
  modalBackdrop: 40,
  modal: 50,
  popover: 60,
  tooltip: 70,
} as const

// Animaciones
export const TRANSITIONS = {
  fast: '150ms ease-in-out',
  base: '250ms ease-in-out',
  slow: '350ms ease-in-out',
  slower: '500ms ease-in-out',
} as const

// Grid system
export const GRID = {
  columns: {
    mobile: 4,
    tablet: 8,
    desktop: 12,
  },
  margin: {
    mobile: '20px',
    tablet: '40px', 
    desktop: '80px',
  },
  gutter: {
    mobile: '16px',
    tablet: '16px',
    desktop: '24px',
  },
  maxWidth: '1440px',
} as const