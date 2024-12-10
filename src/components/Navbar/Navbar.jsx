import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaBars } from 'react-icons/fa';
import { useCart } from '../../context/CartContext/CartContext';
import CartDropdown from '../CartDropdown/CartDropdown';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { state } = useCart();

  const cartItemsCount = state.items.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="logo">VORTEX</Link>
      </div>
      <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
        <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Inicio</Link>
        <Link to="/proteinas" className="nav-link" onClick={() => setIsOpen(false)}>Proteínas</Link>
        <Link to="/suplementos" className="nav-link" onClick={() => setIsOpen(false)}>Suplementos</Link>
        <Link to="/creatinas" className="nav-link" onClick={() => setIsOpen(false)}>Creatinas</Link>
        <Link to="/membresias" className="nav-link" onClick={() => setIsOpen(false)}>Membresías</Link>
      </div>

      <div className="navbar-end">
        <div 
          className="cart-container"
          onMouseEnter={() => setShowCart(true)}
          onMouseLeave={() => setShowCart(false)}
        >
          <Link to="/cart" className="nav-icon">
            <FaShoppingCart />
            {cartItemsCount > 0 && (
              <span className="cart-count">{cartItemsCount}</span>
            )}
          </Link>
          {showCart && <CartDropdown />}
        </div>  
      </div>
    </nav>
  );
};

export default Navbar; 