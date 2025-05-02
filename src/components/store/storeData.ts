
export const storeCategories = [
  { id: "clothing", name: "Ropa" },
  { id: "accessories", name: "Accesorios" },
  { id: "stationery", name: "Papelería" },
  { id: "digital", name: "Digital" }
];

export const storeProducts = [
  {
    id: "prod-001",
    title: "Sudadera Premium",
    description: "Sudadera con logo institucional bordado en alta calidad",
    image: "https://images.unsplash.com/photo-1618354691551-44de113f0164?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "clothing",
    price: 650,
    stock: 25,
    popularity: 95,
    featured: true,
    isNew: false,
    addedDate: "2024-03-15",
    features: [
      "100% algodón de alta calidad",
      "Logo bordado",
      "Disponible en tallas S, M, L, XL",
      "Lavable a máquina",
      "Color gris con detalles institucionales"
    ]
  },
  {
    id: "prod-002",
    title: "Polo Técnico",
    description: "Polo deportivo con tecnología de secado rápido",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "clothing",
    price: 450,
    stock: 40,
    popularity: 85,
    featured: false,
    isNew: true,
    addedDate: "2024-04-10",
    features: [
      "Tejido transpirable",
      "Tecnología de secado rápido",
      "Logo impreso resistente al lavado",
      "Disponible en varios colores",
      "Ideal para actividades físicas"
    ]
  },
  {
    id: "prod-003",
    title: "Gorra Institucional",
    description: "Gorra ajustable con logo bordado",
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "clothing",
    price: 300,
    stock: 60,
    popularity: 80,
    featured: false,
    isNew: false,
    addedDate: "2024-02-20",
    features: [
      "Material resistente y duradero",
      "Logo bordado en 3D",
      "Sistema de ajuste trasero",
      "Visera curva",
      "Protección UV"
    ]
  },
  {
    id: "prod-004",
    title: "Mochila Técnica",
    description: "Mochila resistente para equipos técnicos y computadoras",
    image: "https://images.unsplash.com/photo-1618354691438-25bc04aa15ae?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "accessories",
    price: 800,
    stock: 15,
    popularity: 90,
    featured: true,
    isNew: false,
    addedDate: "2024-03-25",
    features: [
      "Capacidad de 25 litros",
      "Compartimento acolchado para laptop de hasta 17\"",
      "Material resistente al agua",
      "Múltiples bolsillos organizadores",
      "Respaldo ergonómico"
    ]
  },
  {
    id: "prod-005",
    title: "Taza Temática",
    description: "Taza de cerámica de alta calidad con diseños institucionales",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "accessories",
    price: 200,
    stock: 100,
    popularity: 75,
    featured: false,
    isNew: false,
    addedDate: "2024-01-15",
    features: [
      "Cerámica de alta calidad",
      "Capacidad de 350ml",
      "Apta para microondas y lavavajillas",
      "Diseño exclusivo",
      "Acabado brillante"
    ]
  },
  {
    id: "prod-006",
    title: "Llavero Metálico",
    description: "Llavero metálico con diseño exclusivo",
    image: "https://images.unsplash.com/photo-1612444530582-fc66183b16f8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "accessories",
    price: 150,
    stock: 120,
    popularity: 70,
    featured: false,
    isNew: false,
    addedDate: "2024-02-05",
    features: [
      "Aleación de zinc de alta resistencia",
      "Acabado niquelado",
      "Diseño grabado a láser",
      "Anilla reforzada",
      "Presentación en caja de regalo"
    ]
  },
  {
    id: "prod-007",
    title: "Set de Escritorio",
    description: "Kit completo de papelería para profesionales",
    image: "https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "stationery",
    price: 450,
    stock: 35,
    popularity: 82,
    featured: false,
    isNew: true,
    addedDate: "2024-04-20",
    features: [
      "Libreta de notas premium",
      "Bolígrafo metálico",
      "Portalápices",
      "Tarjetero",
      "Presentación en caja elegante"
    ]
  },
  {
    id: "prod-008",
    title: "Paquete de 500 Monedas",
    description: "Obtén 500 monedas para usar en la plataforma",
    image: "https://images.unsplash.com/photo-1633158829799-56bdf8ca7c2d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "digital",
    price: 0,
    realPrice: "$9.99 USD",
    stock: 999,
    popularity: 96,
    featured: true,
    isNew: false,
    addedDate: "2024-03-01",
    features: [
      "500 monedas para usar en la plataforma",
      "Entrega instantánea",
      "Válido por un año",
      "Aplicable a cualquier compra en la tienda",
      "Descuento por volumen disponible"
    ]
  },
  {
    id: "prod-009",
    title: "Botella Térmica",
    description: "Botella térmica de acero inoxidable con logo grabado",
    image: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "accessories",
    price: 350,
    stock: 45,
    popularity: 88,
    featured: false,
    isNew: true,
    addedDate: "2024-04-15",
    features: [
      "Acero inoxidable de grado alimenticio",
      "Capacidad de 500ml",
      "Mantiene bebidas frías por 24h y calientes por 12h",
      "Logo grabado con láser",
      "Tapa hermética anti-derrames"
    ]
  },
  {
    id: "prod-010",
    title: "Chaqueta Corporativa",
    description: "Chaqueta ligera con detalles institucionales",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "clothing",
    price: 750,
    stock: 20,
    popularity: 93,
    featured: true,
    isNew: false,
    addedDate: "2024-03-10",
    features: [
      "Material resistente al agua",
      "Forro térmico ligero",
      "Logo bordado en el pecho",
      "Bolsillos con cierre",
      "Capucha desmontable"
    ]
  },
  {
    id: "prod-011",
    title: "Pack de Cursos Premium",
    description: "Acceso a 5 cursos especializados por un año",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "digital",
    price: 1200,
    stock: 50,
    popularity: 94,
    featured: true,
    isNew: false,
    addedDate: "2024-02-28",
    features: [
      "Acceso a 5 cursos premium",
      "Certificación incluida",
      "Validez por 12 meses",
      "Soporte personalizado",
      "Materiales descargables"
    ]
  },
  {
    id: "prod-012",
    title: "Reloj de Pared",
    description: "Reloj de pared con diseño minimalista y logo institucional",
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "accessories",
    price: 280,
    stock: 30,
    popularity: 76,
    featured: false,
    isNew: false,
    addedDate: "2024-01-20",
    features: [
      "Diámetro de 30cm",
      "Movimiento silencioso",
      "Marco de aluminio",
      "Diseño minimalista",
      "Logo institucional integrado"
    ]
  }
];
