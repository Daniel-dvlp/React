export const products = [
  // Proteínas
  {
    id: 1,
    nombre: 'Whey Protein Gold Standard',
    descripcion: 'Proteína de suero de leche de alta calidad, 24g de proteína por porción',
    precio: 59.99,
    imagen: 'https://example.com/whey-gold.jpg',
    categoria: 'whey'
  },
  {
    id: 2,
    nombre: 'ISO HD Protein',
    descripcion: 'Proteína aislada de suero, 25g de proteína por porción',
    precio: 64.99,
    imagen: 'https://example.com/iso-hd.jpg',
    categoria: 'isolate'
  },
  {
    id: 3,
    nombre: 'Vegan Protein Complex',
    descripcion: 'Mezcla de proteínas vegetales, sin lácteos',
    precio: 49.99,
    imagen: 'https://example.com/vegan-protein.jpg',
    categoria: 'vegan'
  },
  // ... más productos
];

export const categories = {
  proteinas: [
    { id: 'all', name: 'Todos' },
    { id: 'whey', name: 'Whey Protein' },
    { id: 'isolate', name: 'Isolate' },
    { id: 'vegan', name: 'Vegana' }
  ],
  suplementos: [
    { id: 'all', name: 'Todos' },
    { id: 'vitaminas', name: 'Vitaminas' },
    { id: 'minerales', name: 'Minerales' },
    { id: 'aminoacidos', name: 'Aminoácidos' }
  ],
  creatinas: [
    { id: 'all', name: 'Todos' },
    { id: 'monohidrato', name: 'Monohidrato' },
    { id: 'hcl', name: 'HCL' },
    { id: 'kre-alkalyn', name: 'Kre-Alkalyn' }
  ]
}; 