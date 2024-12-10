export const suplementosData = {
  productos: [
    {
      id: 1,
      nombre: "BCAA Energy",
      descripcion: "Aminoácidos ramificados con energía adicional para un mejor rendimiento",
      precio: 34.99,
      imagen: "../assets/images/suplementos/BCAAEnergy.jpg",
      categoria: "aminoacidos",
      marca: "Optimum Nutrition",
      peso: "30 servicios",
      sabor: "Fruit Punch",
      stock: 45,
      destacado: true,
      especificaciones: {
        bcaa_por_porcion: "5g",
        energia: "100mg cafeína",
        porciones: 30,
        tipo: "2:1:1 ratio"
      }
    },
    {
      id: 2,
      nombre: "Multivitamínico Pro",
      descripcion: "Complejo vitamínico completo para atletas y deportistas",
      precio: 29.99,
      imagen: "../assets/images/suplementos/MultivitamínicoProjpg.jpg",
      categoria: "vitaminas",
      marca: "Vortex Nutrition",
      peso: "90 tabletas",
      stock: 60,
      destacado: false,
      especificaciones: {
        vitaminas: "A, B, C, D, E",
        minerales: "Zinc, Magnesio, Hierro",
        porciones: 90,
        uso: "1 tableta diaria"
      }
    },
    {
      id: 3,
      nombre: "Pre-Workout Extreme",
      descripcion: "Fórmula pre-entrenamiento con alto rendimiento energético",
      precio: 44.99,
      imagen: "../assets/images/suplementos/Pre-WorkoutExtreme.jpg",
      categoria: "pre_entreno",
      marca: "BPI Sports",
      peso: "300g",
      sabor: "Blue Raspberry",
      stock: 30,
      destacado: true,
      especificaciones: {
        cafeina: "300mg",
        beta_alanina: "3.2g",
        porciones: 30,
        creatina: "2g"
      }
    },
    {
      id: 4,
      nombre: "ZMA Night Recovery",
      descripcion: "Suplemento de recuperación nocturna con Zinc, Magnesio y B6",
      precio: 24.99,
      imagen: "../assets/images/suplementos/ZMANightRecovery.jpg",
      categoria: "minerales",
      marca: "Vortex Nutrition",
      peso: "90 cápsulas",
      stock: 40,
      destacado: false,
      especificaciones: {
        zinc: "30mg",
        magnesio: "450mg",
        b6: "10.5mg",
        porciones: 30
      }
    },
    {
      id: 5,
      nombre: "Omega 3 Ultra",
      descripcion: "Aceite de pescado de alta pureza con EPA y DHA",
      precio: 27.99,
      imagen: "../assets/images/suplementos/Omega3Ultra.jpg",
      categoria: "vitaminas",
      marca: "Optimum Nutrition",
      peso: "100 softgels",
      stock: 55,
      destacado: true,
      especificaciones: {
        epa: "1000mg",
        dha: "500mg",
        porciones: 50,
        pureza: "99%"
      }
    },
    {
      id: 7,
      nombre: "Glutamina 100%",
      descripcion: "Aminoácido esencial para la recuperación muscular",
      precio: 22.99,
      imagen: "../assets/images/suplementos/Glutamina100%.jpg",
      categoria: "aminoacidos",
      marca: "Scivation",
      peso: "200g",
      stock: 40,
      destacado: true,
      especificaciones: {
        glutamina_por_porcion: "5g",
        porciones: 40,
        tipo: "L-Glutamina"
      }
    },
    {
      id: 8,
      nombre: "L-Carnitina",
      descripcion: "Ayuda en la quema de grasa y mejora el rendimiento físico",
      precio: 19.99,
      imagen: "../assets/images/suplementos/L-Carnitina.jpg",
      categoria: "pre_entreno",
      marca: "Cellucor",
      peso: "500ml",
      stock: 50,
      destacado: false,
      especificaciones: {
        l_carnitina_por_porcion: "1g",
        porciones: 50
      }
    },
    {
      id: 10,
      nombre: "Pre-Workout Blast",
      descripcion: "Pre-entrenamiento con una mezcla potente de ingredientes para un rendimiento explosivo",
      precio: 29.99,
      imagen: "../assets/images/suplementos/Pre-WorkoutBlast.jpg",
      categoria: "pre_entreno",
      marca: "BSN",
      peso: "250g",
      stock: 25,
      destacado: false,
      especificaciones: {
        cafeina: "200mg",
        beta_alanina: "2g",
        creatina: "1.5g",
        porciones: 25
      }
    }
  ],
  categorias: [
    {
      id: "aminoacidos",
      nombre: "Aminoácidos",
      descripcion: "BCAAs y EAAs para recuperación muscular"
    },
    {
      id: "vitaminas",
      nombre: "Vitaminas",
      descripcion: "Suplementos vitamínicos y antioxidantes"
    },
    {
      id: "minerales",
      nombre: "Minerales",
      descripcion: "Minerales esenciales para el rendimiento"
    },
    {
      id: "pre_entreno",
      nombre: "Pre-entreno",
      descripcion: "Fórmulas para máximo rendimiento"
    }
  ]
};
