import React from 'react';
import { useCart } from '../../context/CartContext/CartContext';
import './Cart.css';

const Cart = () => {
  // Obtener estado y dispatch del contexto del carrito
  const { state, dispatch } = useCart();

  // Función para actualizar la cantidad de un producto
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id: productId, quantity: newQuantity }
    });
  };

  // Función para eliminar un producto del carrito
  const removeFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  // Calcular el total de la compra
  const total = state.items.reduce(
    (sum, item) => sum + item.precio * item.quantity,
    0
  );

  // Mostrar mensaje si el carrito está vacío
  if (state.items.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Tu carrito está vacío</h2>
        <p>¡Agrega algunos productos para comenzar!</p>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2>Tu Carrito</h2>
      {/* Lista de productos en el carrito */}
      <div className="cart-items">
        {state.items.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.imagen} alt={item.nombre} />
            <div className="item-details">
              <h3>{item.nombre}</h3>
              <p className="item-price">${item.precio}</p>
            </div>
            {/* Controles de cantidad */}
            <div className="item-quantity">
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                -
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                +
              </button>
            </div>
            {/* Botón para eliminar producto */}
            <button 
              className="remove-item"
              onClick={() => removeFromCart(item.id)}
            >
              ×
            </button>
          </div>
        ))}
      </div>
      
      {/* Resumen del carrito y botón de checkout */}
      <div className="cart-summary">
        <div className="total">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <button className="checkout-button">
          Proceder al Pago
        </button>
      </div>
    </div>
  );
};

export default Cart;