import { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext/CartContext';
import { suplementosData } from '../../data/SuplementosData';
import PropTypes from 'prop-types';
import './Suplementos.css';

// Componente para mostrar cada tarjeta de suplemento
const ProductCard = ({ producto }) => {
  // Obtener dispatch del contexto del carrito
  const { dispatch } = useCart();

  // Función para manejar la adición al carrito
  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: producto });
  };

  return (
    <div className={`product-card ${producto.destacado ? 'destacado' : ''}`}>
      {/* Badge de destacado si aplica */}
      {producto.destacado && <div className="destacado-badge">Destacado</div>}
      
      {/* Imagen del suplemento */}
      <div className="product-image">
        <img src={producto.imagen}/>
      </div>

      {/* Información del suplemento */}
      <div className="product-info">
        <h3 className="product-titulo">{producto.nombre}</h3>
        <p className="product-descripcion">{producto.descripcion}</p>
        
        {/* Detalles del suplemento */}
        <div className="product-detalles">
          <span className="marca">{producto.marca}</span>
          <span className="peso">{producto.peso}</span>
        </div>

        {/* Especificaciones dinámicas del suplemento */}
        <div className="product-specs">
          {Object.entries(producto.especificaciones).map(([key, value]) => (
            <div key={key} className="spec">
              <span className="label">{key.replace('_', ' ')}:</span>
              <span className="value">{value}</span>
            </div>
          ))}
        </div>

        {/* Precio y botón de compra */}
        <div className="product-precio">
          <span className="precio">${producto.precio}</span>
        </div>
        <button 
          className="add-to-cart-button"
          onClick={handleAddToCart}
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

// Validación de propiedades
ProductCard.propTypes = {
  producto: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    imagen: PropTypes.string.isRequired,
    categoria: PropTypes.string.isRequired,
    marca: PropTypes.string.isRequired,
    peso: PropTypes.string.isRequired,
    destacado: PropTypes.bool,
    especificaciones: PropTypes.object.isRequired,
  }).isRequired,
};

// Componente principal de la página de Suplementos
const Suplementos = () => {
  // Estados para manejar productos, categorías, filtros y loading
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  // Efecto para cargar los datos iniciales
  useEffect(() => {
    const loadData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 500));
        setProductos(suplementosData.productos);
        setCategorias(suplementosData.categorias);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Filtrar productos según la categoría seleccionada
  const filteredProducts = activeFilter === 'all'
    ? productos
    : productos.filter(producto => producto.categoria === activeFilter);

  // Mostrar loading mientras se cargan los datos
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Cargando suplementos...</p>
      </div>
    );
  }

  return (
    <div className="suplementos-page">
      {/* Encabezado de la página */}
      <div className="suplementos-header">
        <h1>Suplementos</h1>
        <p>Potencia tu rendimiento con nuestra línea de suplementos</p>
      </div>

      {/* Filtros de categorías */}
      <div className="suplementos-filters">
        <button
          className={`filter-button ${activeFilter === 'all' ? 'active' : ''}`}
          onClick={() => setActiveFilter('all')}
        >
          Todos
        </button>
        {categorias.map(categoria => (
          <button
            key={categoria.id}
            className={`filter-button ${activeFilter === categoria.id ? 'active' : ''}`}
            onClick={() => setActiveFilter(categoria.id)}
          >
            {categoria.nombre}
          </button>
        ))}
      </div>

      {/* Grid de productos */}
      <div className="products-grid">
        {filteredProducts.map(producto => (
          <ProductCard 
            key={producto.id} 
            producto={producto}
          />
        ))}
      </div>
    </div>
  );
};

export default Suplementos;