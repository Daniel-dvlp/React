export const creatinasData = {
  productos: [
    {
      id: 6,
      nombre: "Creatina Malato Advanced",
      descripcion: "Creatina Malato con mayor estabilidad y absorción para atletas avanzados",
      precio: 36.99,
      imagen: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.optimumnutrition.com.co%2Fproducto%2Fgold-standard-100-whey%2F&psig=AOvVaw1ODmzz_ML62I27oZJWgP9y&ust=1733925842554000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKjaxaCvnYoDFQAAAAAdAAAAABAE",
      categoria: "mezcla",
      marca: "Cellucor",
      peso: "300g",
      stock: 45,
      destacado: true,
      especificaciones: {
        creatina_por_porcion: "4.5g",
        porciones: 65,
        tipo: "Malato",
        sabor: "Manzana verde"
      }
    },
    {
      id: 7,
      nombre: "Creatina Líquida Ultra",
      descripcion: "Fórmula líquida lista para usar con alta biodisponibilidad",
      precio: 29.99,
      imagen: "../assets/images/creatinas/CreatinaLíquidaUltra.jpg",
      categoria: "hcl",
      marca: "Vortex Nutrition",
      peso: "500ml",
      stock: 30,
      destacado: false,
      especificaciones: {
        creatina_por_dosis: "3g",
        tipo: "Líquida",
        conservantes: "Sin conservantes",
        ph: "Balanceado"
      }
    },
    {
      id: 8,
      nombre: "Creatina Micronizada Plus",
      descripcion: "Creatina micronizada con electrolitos añadidos",
      precio: 27.99,
      imagen: "../assets/images/creatinas/CreatinaMicronizadaPlus.jpg",
      categoria: "monohidrato",
      marca: "Optimum Nutrition",
      peso: "400g",
      stock: 50,
      destacado: true,
      especificaciones: {
        creatina_por_porcion: "5g",
        porciones: 80,
        tipo: "Micronizada",
        aditivos: "Electrolitos"
      }
    },
    {
      id: 9,
      nombre: "Creatina Vegana BioActive",
      descripcion: "Fórmula creatina vegana, ideal para dietas basadas en plantas",
      precio: 33.99,
      imagen: "../assets/images/creatinas/CreatinaVeganaBioActive.jpg",
      categoria: "monohidrato",
      marca: "VeganForce",
      peso: "250g",
      stock: 40,
      destacado: false,
      especificaciones: {
        creatina_por_porcion: "4g",
        certificacion: "Vegana",
        tipo: "Regular",
        pureza: "99.5%"
      }
    },
    {
      id: 10,
      nombre: "Creatina Effervescent Boost",
      descripcion: "Creatina efervescente para una rápida absorción y energía inmediata",
      precio: 38.99,
      imagen: "../assets/images/creatinas/CreatinaEffervescentBoost.jpg",
      categoria: "mezcla",
      marca: "Explosive Nutrition",
      peso: "20 sobres",
      stock: 20,
      destacado: true,
      especificaciones: {
        creatina_por_sobre: "3.5g",
        tipos: "HCL, Monohidrato",
        sabor: "Naranja",
        energia: "Instantánea"
      }
    },
    {
      id: 11,
      nombre: "Creatina Natural Pure",
      descripcion: "Creatina pura sin aditivos ni saborizantes, 100% natural",
      precio: 22.99,
      imagen: "../assets/images/creatinas/CreatinaNaturalPure.jpg",
      categoria: "monohidrato",
      marca: "NaturalWay",
      peso: "500g",
      stock: 70,
      destacado: false,
      especificaciones: {
        creatina_por_porcion: "5g",
        porciones: 100,
        pureza: "100%",
        certificacion: "Orgánica"
      }
    },
    {
      id: 12,
      nombre: "Creatina HCL Pro",
      descripcion: "Creatina HCL avanzada con soporte muscular mejorado",
      precio: 44.99,
      imagen: "../assets/images/creatinas/CreatinaHCLPro.jpg",
      categoria: "hcl",
      marca: "Vortex Nutrition",
      peso: "200g",
      stock: 25,
      destacado: true,
      especificaciones: {
        creatina_por_porcion: "3g",
        absorcion: "Rápida",
        tipo: "HCL",
        ph: "Estable"
      }
    },
    {
      id: 13,
      nombre: "Creatina Energy Shot",
      descripcion: "Bebida lista para consumir con creatina y cafeína",
      precio: 19.99,
      imagen: "../assets/images/creatinas/CreatinaEnergyShot.jpg",
      categoria: "mezcla",
      marca: "FastEnergy",
      peso: "300ml",
      stock: 50,
      destacado: false,
      especificaciones: {
        creatina_por_shot: "2g",
        cafeina: "100mg",
        energia: "Alta",
        sabor: "Frutos Rojos"
      }
    },
    {
      id: 14,
      nombre: "Kre-Alkalyn Hardcore",
      descripcion: "Kre-Alkalyn de nivel avanzado con refuerzo de aminoácidos",
      precio: 49.99,
      imagen: "../assets/images/creatinas/Kre-AlkalynHardcore.jpg",
      categoria: "kre-alkalyn",
      marca: "Hardcore Labs",
      peso: "200 cápsulas",
      stock: 30,
      destacado: true,
      especificaciones: {
        dosis_por_capsula: "1500mg",
        aminoacidos: "BCAA",
        ph: "12",
        tipo: "Tamponada"
      }
    },
    {
      id: 15,
      nombre: "Creatina Blend Recovery",
      descripcion: "Mezcla creatina + glutamina para recuperación muscular",
      precio: 32.99,
      imagen: "../assets/images/creatinas/CreatinaBlendRecovery.jpg",
      categoria: "mezcla",
      marca: "RecoveryZone",
      peso: "300g",
      stock: 35,
      destacado: false,
      especificaciones: {
        creatina_por_porcion: "3g",
        glutamina: "2g",
        porciones: 50,
        tipo: "Recovery Blend"
      }
    }
  ],
  categorias: [
    {
      id: "monohidrato",
      nombre: "Monohidrato",
      descripcion: "La forma más estudiada y efectiva de creatina"
    },
    {
      id: "hcl",
      nombre: "HCL",
      descripcion: "Creatina hidroclórica de alta absorción"
    },
    {
      id: "kre-alkalyn",
      nombre: "Kre-Alkalyn",
      descripcion: "Creatina tamponada pH-correcta"
    },
    {
      id: "mezcla",
      nombre: "Mezclas",
      descripcion: "Combinaciones de diferentes tipos de creatina"
    }
  ]
}; 