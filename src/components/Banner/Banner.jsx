import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
  return (
    // Banner principal con efecto de gradiente
    <div className="banner">
      {/* Contenido centrado del banner */}
      <div className="banner-content">
        {/* Título principal */}
        <h1>Bienvenido a VORTEX</h1>
        {/* Subtítulo descriptivo */}
        <p>Tu destino definitivo para suplementos deportivos</p>
        {/* Botón que enlaza a la sección de proteínas */}
        <Link to="/proteinas" className="banner-button">
          Explorar Productos
        </Link>
      </div>
    </div>
  );
};

export default Banner;