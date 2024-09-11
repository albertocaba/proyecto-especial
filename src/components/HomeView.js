// src/components/HomeView.js
import React, { useEffect } from 'react';
import '../styles/HomeView.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel as ReactCarousel } from 'react-responsive-carousel';

const HomeView = () => {
  useEffect(() => {
    // Agregar el enlace de la fuente a la etiqueta <head>
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Lobster&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);
    
    // Limpiar el efecto cuando el componente se desmonte
    return () => {
      document.head.removeChild(fontLink);
    };
  }, []);

  return (
    <div className="home-view">
      <div className="intro-section">
        <h1 className="welcome-message">Nuestros Sueños y Planes Juntos</h1>
        <p className="romantic-text">
          "Cada día juntos es una nueva aventura. Soñamos con viajar a nuevos lugares, descubrir nuevas culturas y compartir momentos inolvidables. 
          Juntos, vamos a construir recuerdos que durarán toda la vida."
        </p>
      </div>

      <div className="carousel-container">
        <ReactCarousel showThumbs={false} infiniteLoop autoPlay interval={3000} emulateTouch>
          <div>
            <img src="ruta-a-tu-imagen-1.jpg" alt="Momento Especial 1" />
          </div>
          <div>
            <img src="ruta-a-tu-imagen-2.jpg" alt="Momento Especial 2" />
          </div>
          <div>
            <img src="ruta-a-tu-imagen-3.jpg" alt="Momento Especial 3" />
          </div>
          <div>
            <img src="ruta-a-tu-imagen-4.jpg" alt="Momento Especial 4" />
          </div>
          <div>
            <img src="ruta-a-tu-imagen-5.jpg" alt="Momento Especial 5" />
          </div>
          <div>
            <img src="ruta-a-tu-imagen-6.jpg" alt="Momento Especial 6" />
          </div>
          <div>
            <img src="ruta-a-tu-imagen-7.jpg" alt="Momento Especial 7" />
          </div>
          <div>
            <img src="ruta-a-tu-imagen-8.jpg" alt="Momento Especial 8" />
          </div>
          <div>
            <img src="ruta-a-tu-imagen-9.jpg" alt="Momento Especial 9" />
          </div>
          <div>
            <img src="ruta-a-tu-imagen-10.jpg" alt="Momento Especial 10" />
          </div>
        </ReactCarousel>
      </div>

      <div className="creative-section">
        <h2 className="creative-title">Nuestro Viaje Juntos</h2>
        <p className="creative-text">
          Explora los momentos especiales que hemos compartido y los lugares que hemos visitado. ¡Estamos emocionados de seguir creando más recuerdos juntos!
        </p>
        <a href="/contador" className="creative-button">Ver Contador de Días</a>
        <a href="/mapa" className="creative-button">Explorar el Mapa</a>
      </div>
    </div>
  );
};

export default HomeView;
