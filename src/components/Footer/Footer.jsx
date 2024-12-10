import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Sobre VORTEX</h3>
          <p>
            Somos tu tienda especializada en suplementos deportivos de alta calidad. 
            Comprometidos con tu rendimiento y resultados desde 2020.
          </p>
        </div>

        <div className="footer-section">
          <h3>Contacto</h3>
          <p>Email: info@vortex.com</p>
          <p>Teléfono: (555) 123-4567</p>
          <p>Dirección: Av. Fitness #123, Ciudad Deportiva</p>
        </div>

        <div className="footer-section">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><a href="#">Sobre Nosotros</a></li>
            <li><a href="#">Términos y Condiciones</a></li>
            <li><a href="#">Política de Privacidad</a></li>
            <li><a href="#">Envíos</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Síguenos</h3>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 VORTEX. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer; 