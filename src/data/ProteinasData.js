export const proteinasData = {
  productos: [
    {
      id: 1,
      nombre: "Whey Protein Gold Standard",
      descripcion: "La proteína de suero más vendida del mundo. 24g de proteína por porción, 5.5g de BCAAs y 4g de glutamina.",
      precio: 59.99,
      imagen: "../assets/images/proteinas/WheyProteinGoldStandard.jpg",
      categoria: "whey",
      marca: "Optimum Nutrition",
      peso: "2lb",
      sabor: "Chocolate",
      stock: 50,
      destacado: true,
      especificaciones: {
        proteina_por_porcion: "24g",
        porciones: 29,
        calorias: 120,
        azucar: "1g"
      }
    },
    {
      id: 2,
      nombre: "ISO HD Protein",
      descripcion: "Proteína aislada de suero premium, 25g de proteína por porción, bajo en carbohidratos y grasa.",
      precio: 64.99,
      imagen: "../assets/images/proteinas/ISOHDProtein.jpg",
      categoria: "isolate",
      marca: "BPI Sports",
      peso: "5lb",
      sabor: "Vainilla",
      stock: 35,
      destacado: true,
      especificaciones: {
        proteina_por_porcion: "25g",
        porciones: 70,
        calorias: 110,
        azucar: "0g"
      }
    },
    {
      id: 3,
      nombre: "Plant Protein Complex",
      descripcion: "Mezcla de proteínas vegetales de guisante, arroz y cáñamo. Ideal para veganos.",
      precio: 49.99,
      imagen: "../assets/images/proteinas/PlantProteinComplex.jpg",
      categoria: "vegan",
      marca: "Vortex Nutrition",
      peso: "2lb",
      sabor: "Frutos del Bosque",
      stock: 25,
      destacado: false,
      especificaciones: {
        proteina_por_porcion: "21g",
        porciones: 30,
        calorias: 130,
        azucar: "2g"
      }
    },
    {
      id: 4,
      nombre: "Hydro Whey Zero",
      descripcion: "Proteína hidrolizada de absorción ultra rápida, ideal post-entrenamiento.",
      precio: 74.99,
      imagen: "../assets/images/proteinas/HydroWheyZero.jpg",
      categoria: "isolate",
      marca: "Biotech USA",
      peso: "4lb",
      sabor: "Fresa",
      stock: 20,
      destacado: true,
      especificaciones: {
        proteina_por_porcion: "26g",
        porciones: 40,
        calorias: 115,
        azucar: "0g"
      }
    },
    {
      id: 5,
      nombre: "Elite Mass Gainer",
      descripcion: "Ganador de peso premium con proteína de alta calidad y carbohidratos complejos.",
      precio: 54.99,
      imagen: "../assets/images/proteinas/EliteMassGainer.jpg",
      categoria: "whey",
      marca: "Dymatize",
      peso: "6lb",
      sabor: "Cookies & Cream",
      stock: 30,
      destacado: false,
      especificaciones: {
        proteina_por_porcion: "50g",
        porciones: 28,
        calorias: 600,
        azucar: "5g"
      }
    }
  ],
  categorias: [
    {
      id: "whey",
      nombre: "Whey Protein",
      descripcion: "Proteínas de suero de leche de alta calidad"
    },
    {
      id: "isolate",
      nombre: "Proteína Isolada",
      descripcion: "Proteínas aisladas con mayor pureza y menor contenido de lactosa"
    },
    {
      id: "vegan",
      nombre: "Proteína Vegana",
      descripcion: "Proteínas 100% vegetales para dietas plant-based"
    },
    {
      id: "casein",
      nombre: "Caseína",
      descripcion: "Proteínas de liberación lenta, ideales para tomar antes de dormir"
    }
  ],
  marcas: [
    {
      id: 1,
      nombre: "Optimum Nutrition",
      logo: "url_del_logo",
      descripcion: "Líder mundial en suplementos deportivos"
    },
    {
      id: 2,
      nombre: "BPI Sports",
      logo: "url_del_logo",
      descripcion: "Innovación en suplementación deportiva"
    },
    {
      id: 3,
      nombre: "Vortex Nutrition",
      logo: "url_del_logo",
      descripcion: "Calidad premium en nutrición deportiva"
    }
  ]
}; 

const nuevosProductos = [
  {
    id: 6,
    nombre: "Casein Elite",
    descripcion: "Proteína de caseína micelar de liberación lenta, ideal para la recuperación nocturna.",
    precio: 49.99,
    imagen: "../assets/images/proteinas/CaseinElite.jpg",
    categoria: "casein",
    marca: "Optimum Nutrition",
    peso: "2lb",
    sabor: "Vainilla",
    stock: 40,
    destacado: true,
    especificaciones: {
      proteina_por_porcion: "24g",
      porciones: 32,
      calorias: 120,
      azucar: "1g"
    }
  },
  {
    id: 7,
    nombre: "Whey Advanced Recovery",
    descripcion: "Proteína de suero enriquecida con BCAAs y glutamina para máxima recuperación.",
    precio: 59.99,
    imagen: "../assets/images/proteinas/WheyAdvancedRecovery.jpg",
    categoria: "whey",
    marca: "Vortex Nutrition",
    peso: "3lb",
    sabor: "Chocolate con menta",
    stock: 50,
    destacado: true,
    especificaciones: {
      proteina_por_porcion: "25g",
      porciones: 36,
      calorias: 130,
      azucar: "2g"
    }
  },
  {
    id: 8,
    nombre: "Vegan Protein Plus",
    descripcion: "Proteína vegana con superalimentos añadidos para una nutrición completa.",
    precio: 54.99,
    imagen: "../assets/images/proteinas/VeganProteinPlus.jpg",
    categoria: "vegan",
    marca: "Garden of Life",
    peso: "2.5lb",
    sabor: "Chocolate oscuro",
    stock: 30,
    destacado: true,
    especificaciones: {
      proteina_por_porcion: "20g",
      porciones: 25,
      calorias: 150,
      azucar: "3g"
    }
  },
  {
    id: 9,
    nombre: "Hydro Iso Lean",
    descripcion: "Proteína hidrolizada y aislada de alta calidad para una digestión rápida.",
    precio: 69.99,
    imagen: "../assets/images/proteinas/HydroIsoLean.jpg",
    categoria: "isolate",
    marca: "Biotech USA",
    peso: "2lb",
    sabor: "Frutos rojos",
    stock: 25,
    destacado: false,
    especificaciones: {
      proteina_por_porcion: "27g",
      porciones: 35,
      calorias: 120,
      azucar: "0g"
    }
  },
  {
    id: 10,
    nombre: "Mass Gainer Extreme",
    descripcion: "Ganador de masa muscular con carbohidratos complejos y proteína de alta calidad.",
    precio: 64.99,
    imagen: "../assets/images/proteinas/MassGainerExtreme.jpg",
    categoria: "whey",
    marca: "MuscleTech",
    peso: "10lb",
    sabor: "Chocolate Fudge",
    stock: 20,
    destacado: true,
    especificaciones: {
      proteina_por_porcion: "60g",
      porciones: 20,
      calorias: 1000,
      azucar: "8g"
    }
  },
  {
    id: 11,
    nombre: "Casein Night Recovery",
    descripcion: "Caseína con magnesio y zinc para mejorar la recuperación muscular.",
    precio: 54.99,
    imagen: "../assets/images/proteinas/CaseinNightRecovery.jpg",
    categoria: "casein",
    marca: "Dymatize",
    peso: "3lb",
    sabor: "Chocolate",
    stock: 35,
    destacado: false,
    especificaciones: {
      proteina_por_porcion: "24g",
      porciones: 40,
      calorias: 110,
      azucar: "1g"
    }
  },
  {
    id: 12,
    nombre: "Plant Power Protein",
    descripcion: "Proteína 100% vegana con sabores naturales y cero azúcares añadidos.",
    precio: 59.99,
    imagen: "../assets/images/proteinas/PlantPowerProtein.jpg",
    categoria: "vegan",
    marca: "Vortex Nutrition",
    peso: "2lb",
    sabor: "Vainilla y coco",
    stock: 45,
    destacado: true,
    especificaciones: {
      proteina_por_porcion: "22g",
      porciones: 30,
      calorias: 125,
      azucar: "1g"
    }
  },
  {
    id: 13,
    nombre: "Whey Protein Low Carb",
    descripcion: "Proteína de suero baja en carbohidratos, ideal para dietas cetogénicas.",
    precio: 62.99,
    imagen: "/images/proteinas/WheyProteinLowCarb.jpg",
    categoria: "whey",
    marca: "MusclePharm",
    peso: "4lb",
    sabor: "Café Latte",
    stock: 20,
    destacado: false,
    especificaciones: {
      proteina_por_porcion: "25g",
      porciones: 50,
      calorias: 110,
      azucar: "0g"
    }
  }
];

proteinasData.productos = [...proteinasData.productos, ...nuevosProductos];
