import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext/CartContext';
import './CartDropdown.css';

const CartDropdown = () => {
  const { state, total } = useCart();

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {state.items.length === 0 ? (
          <p className="empty-cart">Tu carrito está vacío</p>
        ) : (
          <>
            {state.items.map(item => (
              <div key={item.id} className="cart-item-preview">
                <img src={item.imagen} alt={item.nombre} />
                <div className="item-details">
                  <p className="item-name">{item.nombre}</p>
                  <p className="item-price">
                    {item.quantity} x ${item.precio.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
      {state.items.length > 0 && (
        <>
          <div className="cart-total">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <Link to="/cart" className="view-cart-button">
            Ver Carrito
          </Link>
        </>
      )}
    </div>
  );
};

export default CartDropdown; 