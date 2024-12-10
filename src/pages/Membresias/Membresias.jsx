import { useState } from 'react';
import { useCart } from '../../context/CartContext/CartContext';
import { membresiasData } from '../../data/MembresiasData';
import './Membresias.css';

const MembresiaCard = ({ membresia }) => {
  const { dispatch } = useCart();

  const handleSubscribe = () => {
    dispatch({ type: 'ADD_TO_CART', payload: membresia });
  };

  return (
    <div className={`membresia-card ${membresia.popular ? 'popular' : ''}`}>
      {membresia.popular && <div className="popular-badge">Más Popular</div>}
      <h3 className="membresia-titulo">{membresia.nombre}</h3>
      <p className="membresia-descripcion">{membresia.descripcion}</p>
      <div className="membresia-precio">
        <span className="precio">${membresia.precio}</span>
        <span className="duracion">/{membresia.duracion}</span>
      </div>
      <ul className="beneficios-lista">
        {membresia.beneficios.map((beneficio, index) => (
          <li key={index}>{beneficio}</li>
        ))}
      </ul>
      <button 
        className="subscribe-button"
        onClick={handleSubscribe}
      >
        Suscribirse Ahora
      </button>
    </div>
  );
};

const Membresias = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const { membresias, categorias } = membresiasData;

  const filteredMembresias = activeFilter === 'all'
    ? membresias
    : membresias.filter(membresia => membresia.categoria === activeFilter);

  return (
    <div className="membresias-page">
      <div className="membresias-header">
        <h1>Membresías VORTEX</h1>
        <p>Elige el plan perfecto para ti y accede a beneficios exclusivos</p>
      </div>

      <div className="membresias-filters">
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

      <div className="membresias-grid">
        {filteredMembresias.map(membresia => (
          <MembresiaCard 
            key={membresia.id} 
            membresia={membresia}
          />
        ))}
      </div>
    </div>
  );
};

export default Membresias; 