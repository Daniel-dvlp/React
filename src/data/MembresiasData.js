export const membresiasData = {
  membresias: [
    {
      id: 1,
      nombre: "Membresía Basic",
      descripcion: "Acceso básico a la tienda con descuentos especiales",
      precio: 19.99,
      imagen: "https://example.com/basic-membership.jpg",
      categoria: "mensual",
      beneficios: [
        "10% de descuento en todas las compras",
        "Envío gratis en compras mayores a $100",
        "Acceso a ofertas exclusivas",
        "Newsletter mensual con tips de nutrición"
      ],
      duracion: "1 mes",
      popular: false
    },
    {
      id: 2,
      nombre: "Membresía Premium",
      descripcion: "La mejor opción para deportistas comprometidos",
      precio: 49.99,
      imagen: "https://example.com/premium-membership.jpg",
      categoria: "trimestral",
      beneficios: [
        "20% de descuento en todas las compras",
        "Envío gratis sin mínimo de compra",
        "Acceso prioritario a nuevos productos",
        "Consulta nutricional mensual",
        "Programa de entrenamiento personalizado"
      ],
      duracion: "3 meses",
      popular: true
    },
    {
      id: 3,
      nombre: "Membresía Elite",
      descripcion: "Experiencia VIP con beneficios exclusivos",
      precio: 89.99,
      imagen: "https://example.com/elite-membership.jpg",
      categoria: "semestral",
      beneficios: [
        "25% de descuento en todas las compras",
        "Envío express gratuito",
        "Acceso VIP a eventos y workshops",
        "Consultas nutricionales ilimitadas",
        "Programa de entrenamiento personalizado",
        "Regalo de bienvenida exclusivo"
      ],
      duracion: "6 meses",
      popular: false
    },
    {
      id: 4,
      nombre: "Membresía Estudiante",
      descripcion: "Especialmente diseñada para estudiantes",
      precio: 29.99,
      imagen: "https://example.com/student-membership.jpg",
      categoria: "mensual",
      beneficios: [
        "15% de descuento en todas las compras",
        "Envío gratis en compras mayores a $50",
        "Acceso a ofertas exclusivas",
        "Guía de nutrición para estudiantes"
      ],
      duracion: "1 mes",
      verificacion: "Se requiere correo institucional",
      popular: false
    },
    {
      id: 5,
      nombre: "Membresía Anual",
      descripcion: "El mejor valor para usuarios comprometidos",
      precio: 149.99,
      imagen: "https://example.com/annual-membership.jpg",
      categoria: "anual",
      beneficios: [
        "30% de descuento en todas las compras",
        "Envío express gratuito ilimitado",
        "Acceso VIP a todos los eventos",
        "Consultas nutricionales ilimitadas",
        "Programa de entrenamiento personalizado",
        "Regalo de bienvenida premium",
        "Acceso anticipado a nuevos productos"
      ],
      duracion: "12 meses",
      popular: true
    }
  ],
  categorias: [
    {
      id: "mensual",
      nombre: "Mensual",
      descripcion: "Planes con renovación mensual"
    },
    {
      id: "trimestral",
      nombre: "Trimestral",
      descripcion: "Planes con duración de 3 meses"
    },
    {
      id: "semestral",
      nombre: "Semestral",
      descripcion: "Planes con duración de 6 meses"
    },
    {
      id: "anual",
      nombre: "Anual",
      descripcion: "Planes con duración de 12 meses"
    }
  ]
}; 