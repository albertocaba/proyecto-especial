// src/components/MapView.js
import React from 'react';
import '../styles/Views.css';

const MapView = () => {
  return (
    <div className="view-container">
      <h1 className="map-title">Mapa</h1>
      <iframe
        title="Mapa de España"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d274556.9182711515!2d-3.703790129844545!3d40.41677563522647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42286ae67f065d%3A0x641ed26b3c4ebd5!2sEspaña!5e0!3m2!1ses!2sus!4v1630918230553!5m2!1ses!2sus"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
      <div className="site-info">
        <h2>Sitios en los que hemos estado:</h2>
      </div>
      <div className="floating-windows">
        <div className="floating-window">Santiago</div>
        <div className="floating-window">Madrid</div>
        <div className="floating-window">Valencia</div>
        <div className="floating-window">Cuenca</div>
        <div className="floating-window">Ontinyent</div>
        <div className="floating-window">Gandia</div>
      </div>
    </div>
  );
};

export default MapView;
