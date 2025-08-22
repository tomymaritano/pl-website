# Sistema de Grillas - Private Limo

## Especificaciones

### Desktop (1440px+)
- 12 columnas
- 80px márgenes laterales
- 24px gutter (espaciado entre columnas)

### Tablet (768px - 1439px)
- 8 columnas
- 40px márgenes laterales
- 16px gutter

### Mobile (<768px)
- 4 columnas
- 20px márgenes laterales
- 16px gutter

## Uso

### Container con Grid

```jsx
<div className="container-grid">
  <div className="col-span-4 md:col-span-8 lg:col-span-12">
    Contenido full width
  </div>
  
  <div className="col-span-2 md:col-span-4 lg:col-span-6">
    Mitad del ancho
  </div>
  
  <div className="col-span-2 md:col-span-4 lg:col-span-6">
    Otra mitad
  </div>
</div>
```

### Container sin Grid (solo márgenes)

```jsx
<div className="container-full">
  <h1>Título con márgenes correctos</h1>
  <p>Contenido respetando los márgenes del diseño</p>
</div>
```

## Clases Disponibles

### Column Span
- Mobile: `col-span-1` hasta `col-span-4`
- Tablet: `md:col-span-1` hasta `md:col-span-8`
- Desktop: `lg:col-span-1` hasta `lg:col-span-12`

### Column Start (posición inicial)
- Mobile: `col-start-1` hasta `col-start-4`
- Tablet: `md:col-start-1` hasta `md:col-start-8`
- Desktop: `lg:col-start-1` hasta `lg:col-start-12`

## Ejemplo Completo

```jsx
<section className="container-grid">
  {/* Hero text - 8 columnas centradas en desktop */}
  <div className="col-span-4 md:col-span-6 lg:col-span-8 lg:col-start-3">
    <h1>Bienvenido a Private Limo</h1>
    <p>Servicios de transporte premium</p>
  </div>
  
  {/* 3 cards */}
  <div className="col-span-4 md:col-span-4 lg:col-span-4">
    <div className="card">Servicio 1</div>
  </div>
  
  <div className="col-span-4 md:col-span-4 lg:col-span-4">
    <div className="card">Servicio 2</div>
  </div>
  
  <div className="col-span-4 md:col-span-4 lg:col-span-4">
    <div className="card">Servicio 3</div>
  </div>
</section>
```