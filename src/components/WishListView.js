// src/components/WishListView.js
import React from 'react';
import '../styles/Views.css';

const WishListView = () => {
  return (
    <div className="view-container">
      <h1 className="wish-list-title">Lista de Deseos</h1>
      <ul className="wish-list">
        <li>Viajar a Japón</li>
        <li>Comprar una casa en la playa</li>
        <li>Aprender a tocar la guitarra</li>
        <li>Hacer un curso de cocina gourmet</li>
        <li>Visitar la Torre Eiffel</li>
        <li>Tomar un paseo en globo aerostático</li>
        <li>Ver la aurora boreal</li>
        <li>Participar en un safari en África</li>
        <li>Hacer un recorrido en tren por Europa</li>
        <li>Escribir un libro</li>
      </ul>
    </div>
  );
};

export default WishListView;
