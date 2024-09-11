// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Asegúrate de tener este archivo CSS con los estilos adecuados

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><Link to="/" className="navbar-link">Página Principal</Link></li>
        <li className="navbar-item"><Link to="/contador" className="navbar-link">Contador</Link></li>
        <li className="navbar-item"><Link to="/mapa" className="navbar-link">Mapa</Link></li>
        <li className="navbar-item"><Link to="/deseos" className="navbar-link">Lista de Deseos</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
