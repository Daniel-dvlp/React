import React from 'react';
import { useCart } from '../../context/CartContext/CartContext';
import './ProductCard.css';
import PropTypes from 'prop-types'; // Importar PropTypes

const ProductCard = ({ product }) => {
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.imagen} alt={product.nombre} />
      </div>
      <div className="product-info">
        <h3>{product.nombre}</h3>
        <p className="product-description">{product.descripcion}</p>
        <div className="product-price">${product.precio}</div>
        <button onClick={addToCart} className="add-to-cart">
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

// Validación de las props
ProductCard.propTypes = {
  product: PropTypes.shape({
    imagen: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
